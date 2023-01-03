import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { UnderlineProps } from 'components/@shared/UnderlineText/UnderlineText.type';
import {
  DEFAULT_UNDERLINE_BOTTOM,
  UNDERLINE_BOTTOM_CORRECTION_VALUE,
} from 'components/@shared/UnderlineText/UnderlineText.constant';

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  overflow: hidden;
`;

const Underline = styled.div<UnderlineProps>`
  ${({ size, underlineBottomPos, underlineColor, underlineThickness, underlineOpacity }) => css`
    position: absolute;
    bottom: ${underlineBottomPos ??
    (size ?? DEFAULT_UNDERLINE_BOTTOM) / UNDERLINE_BOTTOM_CORRECTION_VALUE}px;
    width: 100%;
    height: ${underlineThickness * 100}%;
    background-color: ${underlineColor};
    opacity: ${underlineOpacity};
  `}
`;

export { Wrapper, Underline };
