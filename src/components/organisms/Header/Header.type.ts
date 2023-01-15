import { SerializedStyles, Theme } from '@emotion/react';
import { AvailableColor } from 'styles/type';

type HeaderProps = {
  backgroundColor?: AvailableColor;
};

type GetFixedCustomStyle = (theme: Theme) => SerializedStyles;

export { HeaderProps, GetFixedCustomStyle };
