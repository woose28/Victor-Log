import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import { LottieProps } from 'components/@shared/Lottie/Lottie.type';

const Lottie = ({ animationData, customStyle }: LottieProps) => {
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

  return <div css={customStyle} ref={element}></div>;
};

export default Lottie;
