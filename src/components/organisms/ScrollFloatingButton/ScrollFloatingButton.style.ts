import { css } from '@emotion/react';
import { GetScrollFloatingButtonStyle } from './ScrollFloatingButton.type';

const getButtonCustomStyle: GetScrollFloatingButtonStyle = (theme, isReachedBottom) => {
  if (isReachedBottom) {
    return css`
      background-color: ${theme.color.background};
      border: 1px solid ${theme.color.tertiary};
      border-radius: 50%;
      opacity: 0.7;
      transition: opacity 0.5s;
      transform: rotate(180deg);

      &:hover {
        opacity: 0.3;
      }
    `;
  }

  return css`
    background-color: ${theme.color.background};
    border: 1px solid ${theme.color.tertiary};
    border-radius: 50%;
    opacity: 0.7;
    cursor: default;
  `;
};

const wrapperCustomStyle = css`
  right: 50px;
  bottom: 50px;
`;

const customStyleLottie = css`
  width: 50px;
  aspect-ratio: 1;
`;

export { getButtonCustomStyle, wrapperCustomStyle, customStyleLottie };
