import { AvailableColor, FontSize } from 'styles/type';

export interface TextProps {
  size?: FontSize;
  color: AvailableColor;
  fontWeight: 'normal' | 'bold';
}
