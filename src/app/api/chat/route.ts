import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Force this route to be dynamic
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

export async function POST(request: NextRequest) {
  try {
    const { message, messages } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check for API key in both environment variable and direct access
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('OPENAI_API_KEY not found in environment variables');
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    // Prepare messages for OpenAI
    const openaiMessages = [
      { role: 'system', content: SOFIA_SYSTEM_PROMPT },
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })),
    ];

    // Create streaming response
    const stream = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: openaiMessages,
      stream: true,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const encoder = new TextEncoder();

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              const data = JSON.stringify({ content });
              controller.enqueue(encoder.encode(`data: ${data}\n\n`));
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
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
