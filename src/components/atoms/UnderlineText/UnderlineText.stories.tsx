import { PropsWithChildren } from 'react';
import UnderlineText from './UnderlineText';
import { UnderlineTextProps } from './UnderlineText.type';
import COLOR from 'styles/color';

export default {
  title: 'atoms/UnderlineText',
  component: UnderlineText,
};

export const DefaultText = ({
  children,
  ...underlineTextProps
}: PropsWithChildren<UnderlineTextProps>) => (
  <UnderlineText {...underlineTextProps}>{children}</UnderlineText>
);

DefaultText.args = {
  fontSize: 20,
  textColor: COLOR.BLACK_001,
  underlineColor: COLOR.NAVY_BLUE_001,
  underlineThickness: 0.3,
  underlineOpacity: 0.5,
  children: 'VICTOR LOG',
};
