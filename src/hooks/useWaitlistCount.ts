import { useWaitlist } from '@/providers/WaitlistProvider';

export function useWaitlistCount() {
  const { count } = useWaitlist();
  return count;
} 