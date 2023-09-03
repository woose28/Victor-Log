import { useEffect, useState } from 'react';

export const SCROLL_DIRECTION = {
  UP: 'up',
  DOWN: 'down',
  INITIAL: 'initial',
};

const useScrollDirection = (threshold = 10) => {
  const [scrollDirection, setScrollDirection] = useState(SCROLL_DIRECTION.INITIAL);

  useEffect(() => {
    let previousScrollYPosition = window.scrollY;

    const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

    const isScrollingUp = (currentScrollYPosition: number) =>
      currentScrollYPosition > previousScrollYPosition && previousScrollYPosition !== 0;

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? SCROLL_DIRECTION.DOWN
          : SCROLL_DIRECTION.UP;
        setScrollDirection(newScrollDirection);
        previousScrollYPosition = currentScrollYPosition > 0 ? currentScrollYPosition : 0;
      }
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollDirection;
};

export { useScrollDirection };
