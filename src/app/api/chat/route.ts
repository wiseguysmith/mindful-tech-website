// Force this route to be dynamic and use edge runtime
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const SOFIA_SYSTEM_PROMPT = `You are Sofia, the bilingual digital concierge for Hacienda Pinilla, Tamarindo, Costa Rica. Be warm, professional, and natural. Respond in whichever language the guest uses. Offer help with bookings, transport, and activities. You should provide helpful information about:

- Resort amenities and services
- Local activities and excursions
- Transportation options (airport transfers, car rentals, tours)
- Restaurant recommendations
- Beach and water activities
- Spa and wellness services
- Golf course information
- Local attractions in Tamarindo and surrounding areas
- Weather and best times to visit
- Cultural experiences and local events

Always be friendly, informative, and ready to help make their stay at Hacienda Pinilla memorable.`;

export async function POST(req: Request) {
  try {
    const { message, messages } = await req.json();

    if (!message || typeof message !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Ensure environment variable exists
    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'Missing OpenAI API Key' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Prepare messages for OpenAI
    const openaiMessages = [
      { role: 'system', content: SOFIA_SYSTEM_PROMPT },
      ...(messages || []).map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })),
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: openaiMessages,
        stream: true,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    // Create streaming response
    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          const reader = response.body?.getReader();
          if (!reader) throw new Error('No response body');

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = new TextDecoder().decode(value);
            const lines = chunk.split('\n');

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data === '[DONE]') continue;
                
                try {
                  const parsed = JSON.parse(data);
                  const content = parsed.choices[0]?.delta?.content || '';
                  if (content) {
                    const data = JSON.stringify({ content });
                    controller.enqueue(encoder.encode(`data: ${data}\n\n`));
                  }
                } catch {
                  // Ignore parsing errors for incomplete chunks
                }
              }
            }
          }
          controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
        } catch (error) {
          console.error('Streaming error:', error);
          controller.error(error);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
