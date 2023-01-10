import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TextProps, UnderlineProps } from 'components/@shared/UnderlineText/UnderlineText.type';
import {
  DEFAULT_FONT_SIZE,
  UNDERLINE_BOTTOM_CORRECTION_VALUE,
} from 'components/@shared/UnderlineText/UnderlineText.constant';

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  overflow: hidden;
`;

const Text = styled.p<TextProps>`
  ${({ fontSize, textColor }) => css`
    font-size: ${(fontSize ?? DEFAULT_FONT_SIZE) / DEFAULT_FONT_SIZE}rem;
    color: ${textColor};
  `}
`;

const Underline = styled.div<UnderlineProps>`
  ${({ fontSize, underlineBottomPos, underlineColor, underlineThickness, underlineOpacity }) => css`
    position: absolute;
    bottom: ${underlineBottomPos ??
    (fontSize ?? DEFAULT_FONT_SIZE) / UNDERLINE_BOTTOM_CORRECTION_VALUE}px;
    width: 100%;
    height: ${underlineThickness * 100}%;
    background-color: ${underlineColor};
    opacity: ${underlineOpacity};
  `}
`;

export { Wrapper, Underline, Text };
