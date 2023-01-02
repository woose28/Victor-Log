import { SerializedStyles } from '@emotion/react';
import { TextProps } from 'components/@shared/Text/Text.type';
import { AvailableColor } from 'styles/type';

type UnderlineOpacity = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;

type UnderlineProps = Pick<TextProps, 'size'> & {
  customStyle?: SerializedStyles;
  underlineBottomPos: number;
  underlineColor: AvailableColor;
  underlineThickness: number;
  underlineOpacity: UnderlineOpacity;
};

type UnderlineTextProps = TextProps & UnderlineProps;

export { UnderlineTextProps, UnderlineProps };
