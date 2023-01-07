import { SerializedStyles } from '@emotion/react';

type ScrollFadeInAnimationProps = {
  customStyle?: SerializedStyles;
  intersectionObserverOptions?: IntersectionObserverInit;
};

type UseScrollFadeInAnimationProps = Pick<
  ScrollFadeInAnimationProps,
  'intersectionObserverOptions'
>;

type CheckIsPassScroll = (top: number) => boolean;

export { ScrollFadeInAnimationProps, UseScrollFadeInAnimationProps, CheckIsPassScroll };
