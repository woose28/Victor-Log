import { PropsWithChildren } from 'react';
import { useTheme } from '@emotion/react';
import * as Style from 'components/@shared/Button/Button.style';
import { ButtonProps } from 'components/@shared/Button/Button.type';

const { getVariantStyle, ...Styled } = Style;

const Button = ({
  children,
  variant = 'primary',
  customStyle,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  const theme = useTheme();

  return (
    <Styled.Wrapper css={[getVariantStyle(theme, variant), customStyle]} onClick={onClick}>
      {children}
    </Styled.Wrapper>
  );
};

export default Button;
