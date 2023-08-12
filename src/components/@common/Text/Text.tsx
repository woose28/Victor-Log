import type { CSSProperties, ElementType, PropsWithChildren } from 'react';
import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';

type Typography =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'regular'
  | 'base'
  | 'large'
  | 'xlarge'
  | '2xlarge'
  | '3xlarge';

type FontWeight = 300 | 500 | 700;

type TextProps = {
  as?: ElementType;
  customStyle?: SerializedStyles;
  color?: CSSProperties['color'];
  size?: Typography;
  fontWeight?: FontWeight;
  lineHeight?: CSSProperties['lineHeight'];
  className?: string;
};

type WrapperProps = Pick<TextProps, 'color' | 'fontWeight' | 'lineHeight'> & {
  fontSize: number;
};

const FONT_SIZE = {
  tiny: 10,
  small: 12,
  medium: 13,
  regular: 14,
  base: 16,
  large: 18,
  xlarge: 20,
  '2xlarge': 24,
  '3xlarge': 28,
};

const LINE_HEIGHT = {
  tiny: '12px',
  small: '14px',
  medium: '16px',
  regular: '18px',
  base: '20px',
  large: '22px',
  xlarge: '24px',
  '2xlarge': '28px',
  '3xlarge': '36px',
};

const Text = ({
  children,
  as,
  customStyle,
  size = 'base',
  fontWeight,
  lineHeight,
  color,
  className,
}: PropsWithChildren<TextProps>) => {
  const fontSize = FONT_SIZE[size];
  const lineHeightStyle = lineHeight || LINE_HEIGHT[size];

  return (
    <Wrapper
      as={as}
      css={customStyle}
      className={className}
      fontSize={fontSize}
      lineHeight={lineHeightStyle}
      color={color}
      fontWeight={fontWeight}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.p<WrapperProps>`
  ${({ color, fontSize, fontWeight, lineHeight }) => css`
    font-size: ${fontSize}px;
    color: ${color};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `}
`;
export default Text;
