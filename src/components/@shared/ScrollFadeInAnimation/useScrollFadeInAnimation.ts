import { useState } from 'react';
import { useIntersectionObserver } from 'hooks';
import {
  CheckIsPassScroll,
  ScrollFadeInAnimationProps,
} from 'components/@shared/ScrollFadeInAnimation/ScrollFadeInAnimation.type';
import { CLASS_NAME_FADE_IN } from 'components/@shared/ScrollFadeInAnimation/ScrollFadeInAnimation.constant';

const useScrollFadeInAnimation = <T extends HTMLElement>({
  intersectionObserverOptions,
}: ScrollFadeInAnimationProps) => {
  const [disabledIntersectionObserver, setDisabledIntersectionObserver] = useState(false);

  const { target } = useIntersectionObserver<T>({
    options: intersectionObserverOptions,
    disabled: disabledIntersectionObserver,
    onIntersect: (entry) => {
      entry.target.classList.add(CLASS_NAME_FADE_IN);
      setDisabledIntersectionObserver(true);
    },
    onNotIntersect: (entry) => {
      const { top } = entry.boundingClientRect;

      if (checkIsPassScroll(top)) {
        entry.target.classList.add(CLASS_NAME_FADE_IN);
        setDisabledIntersectionObserver(true);
      }
    },
  });

  const checkIsPassScroll: CheckIsPassScroll = (top) => top < 0;

  return { target };
};

export { useScrollFadeInAnimation };
