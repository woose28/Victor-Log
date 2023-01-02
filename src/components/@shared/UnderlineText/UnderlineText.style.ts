import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { UnderlineProps } from 'components/@shared/UnderlineText/UnderlineText.type';

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  overflow: hidden;
`;

const Underline = styled.div<UnderlineProps>`
  ${({ size, underlineBottomPos, underlineColor, underlineThickness, underlineOpacity }) => css`
    position: absolute;
    bottom: ${underlineBottomPos ?? (size ?? 16) / 3}px;
    width: 100%;
    height: ${underlineThickness}px;
    background-color: ${underlineColor};
    opacity: ${underlineOpacity};
  `}
`;

export { Wrapper, Underline };
