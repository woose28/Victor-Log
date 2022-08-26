import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { TextProps } from 'components/@shared/Text/Text.type';
import { FontSize } from 'styles/type';

const Text = styled.span<TextProps>`
  ${({ size, color, fontWeight }) => css`
    font-size: ${fontSizeMapper[size ?? 16]}rem;
    color: ${color};
    font-weight: ${fontWeight};
    line-height: 1.5;
  `}
`;

export default Text;

const fontSizeMapper: Record<FontSize, number> = {
  10: 0.625,
  11: 0.6875,
  12: 0.75,
  14: 0.875,
  16: 1,
  20: 1.25,
  24: 1.5,
  32: 2,
  40: 2.5,
  48: 3,
  70: 4.375,
};
