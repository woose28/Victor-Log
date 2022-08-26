import '@emotion/react';
import { AvailableColor } from './src/styles/type';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: AvailableColor;
      onPrimary: AvailableColor;

      secondary: AvailableColor;
      onSecondary: AvailableColor;

      background: AvailableColor;
      onBackground: AvailableColor;

      subText: AvailableColor;
    };
  }
}
