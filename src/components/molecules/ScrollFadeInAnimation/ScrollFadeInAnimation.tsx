import { PropsWithChildren } from 'react';
import { useScrollFadeInAnimation } from './useScrollFadeInAnimation';
import { ScrollFadeInAnimationProps } from './ScrollFadeInAnimation.type';
import { CLASS_NAME_FADE_IN } from './ScrollFadeInAnimation.constant';
import { FadeInAnimation } from 'components';

const ScrollFadeInAnimation = ({
  children,
  intersectionObserverOptions,
  ...fadeInAnimationProps
}: PropsWithChildren<ScrollFadeInAnimationProps>) => {
  const { target } = useScrollFadeInAnimation<HTMLDivElement>({
    intersectionObserverOptions,
  });

  return (
    <FadeInAnimation ref={target} fadeInClassName={CLASS_NAME_FADE_IN} {...fadeInAnimationProps}>
      {children}
    </FadeInAnimation>
  );
};

export default ScrollFadeInAnimation;
