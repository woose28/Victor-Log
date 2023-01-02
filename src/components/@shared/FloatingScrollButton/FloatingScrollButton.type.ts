import { SerializedStyles, Theme } from '@emotion/react';

type FloatingScrollButtonProps = {
  heightOffset?: number;
  isShowDownButton?: boolean;
};

type UseFloatingScrollButtonProps = Required<Pick<FloatingScrollButtonProps, 'heightOffset'>>;

type GetFloatingScrollButtonStyle = (theme: Theme, isReachedBottom: boolean) => SerializedStyles;

export { FloatingScrollButtonProps, UseFloatingScrollButtonProps, GetFloatingScrollButtonStyle };
