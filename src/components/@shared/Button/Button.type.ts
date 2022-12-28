import { MouseEventHandler } from 'react';
import { SerializedStyles, Theme } from '@emotion/react';

type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = {
  variant?: ButtonVariant;
  customStyle?: SerializedStyles;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type GetVariantStyles = (theme: Theme, variant: ButtonVariant) => SerializedStyles;
