import { SerializedStyles, Theme } from '@emotion/react';

type ScrollFloatingButtonProps = {
  heightOffset?: number;
  isShowDownButton?: boolean;
};

type UseScrollFloatingButtonProps = Required<Pick<ScrollFloatingButtonProps, 'heightOffset'>>;

type GetScrollFloatingButtonStyle = (theme: Theme, isReachedBottom: boolean) => SerializedStyles;

export { ScrollFloatingButtonProps, UseScrollFloatingButtonProps, GetScrollFloatingButtonStyle };
