import { PropsWithChildren } from 'react';
import { MountFadeInAnimationProps } from 'components/@shared/MountFadeInAnimation/MountFadeInAnimation.type';
import { useMountFadeInAnimation } from 'components/@shared/MountFadeInAnimation/useMountFadeInAnimation';
import * as Styled from 'components/@shared/MountFadeInAnimation/MountFadeInAnimation.style';

const MountFadeInAnimation = ({
  children,
  customStyle,
}: PropsWithChildren<MountFadeInAnimationProps>) => {
  const { target } = useMountFadeInAnimation<HTMLDivElement>();

  return (
    <Styled.Wrapper ref={target} css={customStyle}>
      {children}
    </Styled.Wrapper>
  );
};

export default MountFadeInAnimation;
