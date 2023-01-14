import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import { UseLottieProps } from './Lottie.type';

const useLottie = ({ animationData }: UseLottieProps) => {
  const element = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<AnimationItem>();

  useEffect(() => {
    if (element.current === null) {
      return;
    }

    lottieInstance.current = lottie.loadAnimation({
      animationData,
      container: element.current,
    });

    return () => {
      lottieInstance.current?.destroy();
    };
  }, [animationData]);

  return {
    element,
  };
};

export { useLottie };
