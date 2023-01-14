import { MouseEventHandler } from 'react';
import { SerializedStyles } from '@emotion/react';
import { FixedProps } from 'components/atoms/Fixed/Fixed.type';
import { PickType } from 'types/utils';

type FloatingButtonProps = Pick<FixedProps, 'layer'> & {
  wrapperCustomStyle?: PickType<FixedProps, 'customStyle'>;
  buttonCustomStyle?: SerializedStyles;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export { FloatingButtonProps };
