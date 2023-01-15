import { SerializedStyles } from '@emotion/react';

type FixedProps = {
  layer: number;
  customStyle?: SerializedStyles | SerializedStyles[];
};

type WrapperProps = FixedProps;

export { FixedProps, WrapperProps };
