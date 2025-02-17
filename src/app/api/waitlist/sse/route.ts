import { waitlistService } from '@/server/waitlist/waitlist.service';

export async function GET() {
  const response = new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue('retry: 1000\n\n');
        
        while (true) {
          const count = await waitlistService.getTotalCount();
          const data = JSON.stringify({ count });
          controller.enqueue(`data: ${data}\n\n`);
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      },
    }),
    {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    }
  );

  return response;
} 