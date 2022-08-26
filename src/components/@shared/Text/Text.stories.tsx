import Text from 'components/@shared/Text/Text';
import { TextProps } from 'components/@shared/Text/Text.type';
import COLOR from 'styles/color';

export default {
  title: '@shared/Text',
  component: Text,
  argTypes: {
    fontWeight: {
      options: ['bold', 'normal'],
      control: { type: 'radio' },
    },
  },
};

export const DefaultText = (args: TextProps) => <Text {...args}>VICTOR LOG</Text>;

DefaultText.args = {
  size: 20,
  color: COLOR.NAVY_BLUE_001,
  fontWeight: 'bold',
};
