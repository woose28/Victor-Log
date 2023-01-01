import { PropsWithChildren } from 'react';
import { FloatingButtonProps } from 'components/@shared/FloatingButton/FloatingButton.type';
import * as Styled from 'components/@shared/FloatingButton/FloatingButton.style';

const FloatingButton = ({
  children,
  customStyle,
  onClick,
}: PropsWithChildren<FloatingButtonProps>) => {
  return (
    <Styled.Wrapper css={customStyle} onClick={onClick}>
      {children}
    </Styled.Wrapper>
  );
};

export default FloatingButton;
