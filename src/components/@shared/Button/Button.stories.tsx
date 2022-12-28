import Button from 'components/@shared/Button/Button';
import { ButtonProps } from 'components/@shared/Button/Button.type';

export default {
  title: '@shared/Button',
  component: Button,
};

export const DefaultButton = (args: ButtonProps) => <Button {...args}>버튼</Button>;

DefaultButton.args = {
  variant: 'primary',
};
