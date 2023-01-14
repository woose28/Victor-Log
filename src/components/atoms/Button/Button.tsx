import { PropsWithChildren } from 'react';
import { useTheme } from '@emotion/react';
import * as Style from './Button.style';
import { ButtonProps } from './Button.type';

const { getVariantStyle, ...Styled } = Style;

const Button = ({
  children,
  variant = 'primary',
  customStyle,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  const theme = useTheme();

  return (
    <Styled.Wrapper css={[customStyle, getVariantStyle(theme, variant)]} onClick={onClick}>
      {children}
    </Styled.Wrapper>
  );
};

export default Button;
