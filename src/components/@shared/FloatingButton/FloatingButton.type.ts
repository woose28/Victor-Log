import { SerializedStyles } from '@emotion/react';
import { MouseEventHandler } from 'react';

type FloatingButtonProps = {
  customStyle?: SerializedStyles;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export { FloatingButtonProps };
