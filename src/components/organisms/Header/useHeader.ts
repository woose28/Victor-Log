import { useEffect, useRef } from 'react';
import { useScrollDirection } from 'hooks';
import { SCROLL_DIRECTION } from 'hooks/useScrollDirection/useScrollDirection';

const useHeader = () => {
  const scrollDirection = useScrollDirection();

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current === null) {
      return;
    }

    if (scrollDirection === SCROLL_DIRECTION.UP) {
      wrapperRef.current.style.transform = 'translateY(0)';
      return;
    }

    if (scrollDirection === SCROLL_DIRECTION.DOWN) {
      wrapperRef.current.style.transform = 'translateY(-64px)';
      return;
    }
  }, [scrollDirection]);

  return {
    wrapperRef,
  };
};

export { useHeader };
