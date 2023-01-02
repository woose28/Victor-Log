import UnderlineText from 'components/@shared/UnderlineText/UnderlineText';
import { UnderlineTextProps } from 'components/@shared/UnderlineText/UnderlineText.type';
import COLOR from 'styles/color';

export default {
  title: '@shared/UnderlineText',
  component: UnderlineText,
  argTypes: {
    fontWeight: {
      options: ['bold', 'normal'],
      control: { type: 'radio' },
    },
  },
};

export const DefaultText = (args: UnderlineTextProps) => (
  <UnderlineText {...args}>VICTOR LOG</UnderlineText>
);

DefaultText.args = {
  size: 20,
  color: COLOR.BLACK_001,
  fontWeight: 'bold',
  underlineColor: COLOR.NAVY_BLUE_001,
  underlineThickness: 8,
  underlineOpacity: 0.5,
};
