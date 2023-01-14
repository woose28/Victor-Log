import { PropsWithChildren } from 'react';
import { MountFadeInAnimationProps } from './MountFadeInAnimation.type';
import { useMountFadeInAnimation } from './useMountFadeInAnimation';
import { FadeInAnimation } from 'components';

const MountFadeInAnimation = ({
  children,
  ...fadeInAnimationProps
}: PropsWithChildren<MountFadeInAnimationProps>) => {
  const { target } = useMountFadeInAnimation<HTMLDivElement>();

  return (
    <FadeInAnimation ref={target} {...fadeInAnimationProps}>
      {children}
    </FadeInAnimation>
  );
};

export default MountFadeInAnimation;
