import { PropsWithChildren } from 'react';
import { FloatingButtonProps } from './FloatingButton.type';
import * as Styled from './FloatingButton.style';
import { Fixed } from 'components';

const FloatingButton = ({
  children,
  layer,
  wrapperCustomStyle,
  buttonCustomStyle,
  onClick,
}: PropsWithChildren<FloatingButtonProps>) => {
  return (
    <Fixed layer={layer} customStyle={wrapperCustomStyle}>
      <Styled.Button type="button" css={buttonCustomStyle} onClick={onClick}>
        {children}
      </Styled.Button>
    </Fixed>
  );
};

export default FloatingButton;
