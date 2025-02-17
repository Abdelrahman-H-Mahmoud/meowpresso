import { create } from 'zustand';
import { z } from 'zod';

const waitlistSchema = z.object({
  count: z.number().min(0),
});

type WaitlistState = z.infer<typeof waitlistSchema>;

interface WaitlistStore extends WaitlistState {
  setCount: (count: number) => void;
  fetchCount: () => Promise<void>;
}

export const useWaitlistStore = create<WaitlistStore>((set) => ({
  count: 0,
  setCount: (count) => set({ count }),
  fetchCount: async () => {
    try {
      const response = await fetch('/api/waitlist/count');
      if (!response.ok) throw new Error('Failed to fetch count');
      const data = await response.json();
      const validated = waitlistSchema.parse(data);
      set({ count: validated.count });
    } catch (error) {
      console.error('Failed to fetch count:', error);
    }
  }
})); 