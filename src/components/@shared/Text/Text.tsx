import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { TextProps } from 'components/@shared/Text/Text.type';
import { fontSizeMapper } from 'components/@shared/Text/Text.style';

const Text = styled.span<TextProps>`
  ${({ size, color, fontWeight }) => css`
    font-size: ${fontSizeMapper[size ?? 16]}rem;
    color: ${color};
    font-weight: ${fontWeight};
    line-height: 1.5;
  `}
`;

export default Text;
