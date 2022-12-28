/// <reference types="@emotion/react/types/css-prop" />

import '@emotion/react';
import { AvailableColor } from './src/styles/type';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: AvailableColor;
      onPrimary: AvailableColor;

      secondary: AvailableColor;
      onSecondary: AvailableColor;

      tertiary: AvailableColor;

      background: AvailableColor;
      onBackground: AvailableColor;

      subText: AvailableColor;

      codeBackground: AvailableColor;
      tableCellBackground: AvailableColor;
      tableBorder: AvailableColor;
      toggleListSummaryBackground: AvailableColor;
      mdxImageWrapperBorder: AvailableColor;
    };
  }
}
