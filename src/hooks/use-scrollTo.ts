import { useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

export function useScrollTo() {
  const location = useLocation();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (location.hash && ref.current) {
      const element = ref.current.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }, 100);
      }
    }
  }, [location.hash]);

  const scrollToElement = useCallback((selector: string, options?: ScrollIntoViewOptions) => {
    if (ref.current) {
      const element = ref.current.querySelector(selector);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
          ...options,
        });
      }
    }
  }, []);

  return { ref, scrollToElement };
}
