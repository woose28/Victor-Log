import { useIntersectionObserver } from 'hooks';
import { ScrollFadeInAnimationProps } from 'components/@shared/ScrollFadeInAnimation/ScrollFadeInAnimation.type';
import { CLASS_NAME_FADE_IN } from 'components/@shared/ScrollFadeInAnimation/ScrollFadeInAnimation.constant';

const useScrollFadeInAnimation = <T extends HTMLElement>({
  intersectionObserverOptions,
}: ScrollFadeInAnimationProps) => {
  const { target } = useIntersectionObserver<T>({
    options: intersectionObserverOptions,
    onIntersect: (entry) => {
      entry.target.classList.add(CLASS_NAME_FADE_IN);
    },
  });

  return { target };
};

export { useScrollFadeInAnimation };
