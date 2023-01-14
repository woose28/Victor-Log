import Button from './Button';
import { ButtonProps } from './Button.type';

export default {
  title: 'atoms/Button',
  component: Button,
};

export const DefaultButton = (args: ButtonProps) => <Button {...args}>버튼</Button>;

DefaultButton.args = {
  variant: 'primary',
};
