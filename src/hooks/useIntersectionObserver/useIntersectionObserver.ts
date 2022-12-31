import { useRef, useEffect, useCallback } from 'react';
import { UseIntersectionObserverProps } from 'hooks/useIntersectionObserver/useIntersectionObserver.type';
import { DEFAULT_INTERSECTION_OBSERVER_OPTION } from 'hooks/useIntersectionObserver/useIntersectionObserver.constant';

const useIntersectionObserver = <T extends HTMLElement>({
  options = DEFAULT_INTERSECTION_OBSERVER_OPTION,
  onIntersect,
}: UseIntersectionObserverProps) => {
  const target = useRef<T>(null);

  const callback = useCallback<IntersectionObserverCallback>(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(entry, observer);
        }
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (target.current === null) {
      return;
    }

    const observer = new IntersectionObserver(callback, options);

    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    target,
  };
};

export { useIntersectionObserver };
