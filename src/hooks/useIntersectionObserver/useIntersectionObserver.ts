import { useRef, useEffect, useCallback } from 'react';
import { UseIntersectionObserverProps } from 'hooks/useIntersectionObserver/useIntersectionObserver.type';
import { DEFAULT_INTERSECTION_OBSERVER_OPTION } from 'hooks/useIntersectionObserver/useIntersectionObserver.constant';

const useIntersectionObserver = <T extends HTMLElement>({
  options = DEFAULT_INTERSECTION_OBSERVER_OPTION,
  disabled = false,
  onIntersect,
  onNotIntersect,
}: UseIntersectionObserverProps) => {
  const target = useRef<T>(null);

  const callback = useCallback<IntersectionObserverCallback>(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (typeof onIntersect !== 'undefined') {
            onIntersect(entry, observer);
          }
          return;
        }

        if (typeof onNotIntersect !== 'undefined') {
          onNotIntersect(entry, observer);
        }
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (target.current === null || disabled) {
      return;
    }

    const observer = new IntersectionObserver(callback, options);

    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, [disabled]);

  return {
    target,
  };
};

export { useIntersectionObserver };
