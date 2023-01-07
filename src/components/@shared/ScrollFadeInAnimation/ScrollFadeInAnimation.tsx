import { PropsWithChildren } from 'react';
import { useScrollFadeInAnimation } from 'components/@shared/ScrollFadeInAnimation/useScrollFadeInAnimation';
import { ScrollFadeInAnimationProps } from 'components/@shared/ScrollFadeInAnimation/ScrollFadeInAnimation.type';
import * as Styled from 'components/@shared/ScrollFadeInAnimation/ScrollFadeInAnimation.style';

const ScrollFadeInAnimation = ({
  children,
  customStyle,
  intersectionObserverOptions,
}: PropsWithChildren<ScrollFadeInAnimationProps>) => {
  const { target } = useScrollFadeInAnimation<HTMLDivElement>({
    intersectionObserverOptions,
  });

  return (
    <Styled.Wrapper ref={target} css={customStyle}>
      {children}
    </Styled.Wrapper>
  );
};

export default ScrollFadeInAnimation;
