import { FadeInAnimationProps } from 'components/atoms/FadeInAnimation/FadeInAnimation.type';

type ScrollFadeInAnimationProps = FadeInAnimationProps & {
  intersectionObserverOptions?: IntersectionObserverInit;
};

type UseScrollFadeInAnimationProps = Pick<
  ScrollFadeInAnimationProps,
  'intersectionObserverOptions'
>;

type CheckIsPassScroll = (top: number) => boolean;

export { ScrollFadeInAnimationProps, UseScrollFadeInAnimationProps, CheckIsPassScroll };
