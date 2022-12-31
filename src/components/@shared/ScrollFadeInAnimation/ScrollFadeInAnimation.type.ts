import { SerializedStyles } from '@emotion/react';

type ScrollFadeInAnimationProps = {
  customStyle?: SerializedStyles;
  intersectionObserverOptions?: IntersectionObserverInit;
};

type UseScrollFadeInAnimationProps = Pick<
  ScrollFadeInAnimationProps,
  'intersectionObserverOptions'
>;

export { ScrollFadeInAnimationProps, UseScrollFadeInAnimationProps };
