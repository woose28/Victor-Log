import { css } from '@emotion/react';

export const style = css`
  @font-face {
    font-family: 'GmarketSans';
    src: url('/fonts/GmarketSansLight.woff2') format('woff2');
    font-weight: 300;
  }

  @font-face {
    font-family: 'GmarketSans';
    src: url('/fonts/GmarketSansMedium.woff2') format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'GmarketSans';
    src: url('/fonts/GmarketSansBold.woff2') format('woff2');
    font-weight: 700;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    font-family: sans-serif;
  }

  li {
    list-style: none;
  }

  p,
  span {
    line-height: 1.5;
  }
  padding-inline-start: 0;
`;
