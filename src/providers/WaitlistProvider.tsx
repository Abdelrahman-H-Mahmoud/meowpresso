'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface WaitlistContextType {
  count: number;
}

const WaitlistContext = createContext<WaitlistContextType>({ count: 0 });

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const eventSource = new EventSource('/api/waitlist/sse');

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setCount(data.count);
    };

    return () => eventSource.close();
  }, []);

  return (
    <WaitlistContext.Provider value={{ count }}>
      {children}
    </WaitlistContext.Provider>
  );
}

export const useWaitlist = () => useContext(WaitlistContext); 