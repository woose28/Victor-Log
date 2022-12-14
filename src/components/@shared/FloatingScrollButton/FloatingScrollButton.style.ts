import { css } from '@emotion/react';
import { GetFloatingScrollButtonStyle } from 'components/@shared/FloatingScrollButton/FloatingScrollButton.type';

const getFloatingScrollButtonStyle: GetFloatingScrollButtonStyle = (theme, isReachedBottom) => {
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

const customStyleLottie = css`
  width: 50px;
  aspect-ratio: 1;
`;

export { getFloatingScrollButtonStyle, customStyleLottie };
