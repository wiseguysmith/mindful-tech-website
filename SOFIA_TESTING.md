# Sofia Concierge - Testing Guide

## Local Testing

### Prerequisites
- [ ] `.env.local` file created with valid `OPENAI_API_KEY`
- [ ] `npm install` completed
- [ ] Dev server running (`npm run dev`)

### Test Cases

#### 1. Basic Functionality
- [ ] Visit http://localhost:3000/sofia
- [ ] See welcome message from Sofia
- [ ] Page title shows "Sofia – Hacienda Pinilla Concierge"
- [ ] Chat interface loads with correct styling

#### 2. User Interaction
- [ ] Type a message: "Hello, what activities are available?"
- [ ] Press Send button
- [ ] Message appears on right side (user message)
- [ ] Loading indicator appears (three pulsing dots)
- [ ] Response streams in from Sofia on left side
- [ ] Auto-scrolls to latest message

#### 3. Bilingual Support
- [ ] Send message in English: "What's the weather like?"
- [ ] Sofia responds in English
- [ ] Send message in Spanish: "¿Cuáles son las mejores playas?"
- [ ] Sofia responds in Spanish

#### 4. Error Handling
- [ ] Temporarily remove/break `OPENAI_API_KEY` in `.env.local`
- [ ] Restart dev server
- [ ] Send message → should show error message gracefully
- [ ] Restore key and restart

#### 5. UI/UX
- [ ] Input field is disabled while loading
- [ ] Cannot send empty messages
- [ ] Chat window scrolls properly with many messages
- [ ] Mobile responsive (resize browser)
- [ ] Messages wrap correctly at different widths

#### 6. Performance
- [ ] First token arrives within 2 seconds
- [ ] Streaming updates smoothly (no lag)
- [ ] No console errors in browser DevTools

## Netlify Deployment Testing

### Prerequisites
- [ ] Environment variable added in Netlify dashboard
- [ ] Site deployed successfully
- [ ] Build logs show no errors

### Test Cases
- [ ] Visit https://your-site.netlify.app/sofia
- [ ] Send test message
- [ ] Verify streaming works in production
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Safari, Firefox)

## Common Issues & Solutions

### "OpenAI API key not configured"
- Check `.env.local` exists in project root
- Verify no typos in variable name (`OPENAI_API_KEY`)
- Restart dev server after creating `.env.local`

### Streaming not working
- Check browser console for errors
- Verify OpenAI API key has credits
- Check network tab: response should be `text/event-stream`

### 429 Rate Limit Error
- You've exceeded OpenAI API quota
- Add payment method at platform.openai.com
- Or wait for free tier reset

### Netlify Function Timeout
- Default timeout is 10 seconds
- Long responses may timeout
- Consider reducing `max_tokens` in API route (currently 1000)

## Files Modified/Created

### Created:
- `src/app/sofia/page.tsx` - Chat UI component
- `src/app/api/chat/route.ts` - OpenAI API route handler

### Configuration:
- `netlify.toml` - Netlify settings with Next.js plugin
- `package.json` - Added `openai` dependency

### Environment:
- `.env.local` - Local development secrets (not committed)
- Netlify dashboard - Production environment variables

