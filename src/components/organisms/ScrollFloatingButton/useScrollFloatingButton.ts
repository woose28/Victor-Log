import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '@emotion/react';
import { useThrottle } from 'hooks';
import { UseScrollFloatingButtonProps } from './ScrollFloatingButton.type';
import { HEIGHT_CORRECTION_VALUE } from './ScrollFloatingButton.constant';

const useScrollFloatingButton = ({ heightOffset }: UseScrollFloatingButtonProps) => {
  const theme = useTheme();
  const [isReachedBottom, setIsReachedBottom] = useState(false);

  const scrollEventHandler = useCallback(() => {
    const scrolledHeight = window.scrollY;
    const windowHeight = window.innerHeight;

    const documentBodyHeight = document.body.scrollHeight;
    const isBottom =
      windowHeight + scrolledHeight + heightOffset + HEIGHT_CORRECTION_VALUE > documentBodyHeight;

    if (isBottom) {
      setIsReachedBottom(true);
      return;
    }

    setIsReachedBottom(false);
  }, []);

  const { throttledCallback } = useThrottle({
    callback: scrollEventHandler,
  });

  useEffect(() => {
    window.addEventListener('scroll', throttledCallback);

    return () => {
      window.removeEventListener('scroll', throttledCallback);
    };
  }, []);

  const handleClickFloatingButton = () => {
    if (isReachedBottom) {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return {
    theme,
    isReachedBottom,
    handleClickFloatingButton,
  };
};

export { useScrollFloatingButton };
