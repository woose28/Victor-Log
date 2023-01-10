import UnderlineText from 'components/@shared/UnderlineText/UnderlineText';
import { UnderlineTextProps } from 'components/@shared/UnderlineText/UnderlineText.type';
import COLOR from 'styles/color';

export default {
  title: '@shared/UnderlineText',
  component: UnderlineText,
};

export const DefaultText = (args: UnderlineTextProps) => (
  <UnderlineText {...args}>VICTOR LOG</UnderlineText>
);

DefaultText.args = {
  fontSize: 20,
  textColor: COLOR.BLACK_001,
  underlineColor: COLOR.NAVY_BLUE_001,
  underlineThickness: 0.3,
  underlineOpacity: 0.5,
};
