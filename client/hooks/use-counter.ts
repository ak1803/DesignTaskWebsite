import { useEffect, useState, useRef } from 'react';

export function useCounter(end: number, duration: number = 2000, delay: number = 0) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          
          setTimeout(() => {
            const increment = end / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 16);

            return () => clearInterval(timer);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, delay, hasStarted]);

  return { count, ref };
}
