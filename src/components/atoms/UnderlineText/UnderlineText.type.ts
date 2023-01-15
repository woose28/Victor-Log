import { ElementType } from 'react';
import { SerializedStyles } from '@emotion/react';
import { AvailableColor, FontSize } from 'styles/type';

type UnderlineOpacity = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
type UnderlineThickness = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;

type TextProps = {
  fontSize?: FontSize;
  textColor: AvailableColor;
};

type UnderlineProps = Pick<TextProps, 'fontSize'> & {
  customTextStyle?: SerializedStyles;
  customUnderlineStyle?: SerializedStyles;
  underlineBottomPos?: number;
  underlineColor: AvailableColor;
  underlineThickness: UnderlineThickness;
  underlineOpacity: UnderlineOpacity;
};

type UnderlineTextProps = TextProps &
  UnderlineProps & {
    textAs?: ElementType;
  };

export { TextProps, UnderlineTextProps, UnderlineProps };
