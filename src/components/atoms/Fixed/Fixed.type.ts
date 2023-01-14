import { SerializedStyles } from '@emotion/react';

type FixedProps = {
  layer: number;
  customStyle?: SerializedStyles;
};

type WrapperProps = FixedProps;

export { FixedProps, WrapperProps };
