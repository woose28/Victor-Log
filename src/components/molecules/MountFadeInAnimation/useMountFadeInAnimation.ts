import { useEffect, useRef } from 'react';
import { CLASS_NAME_FADE_IN } from './MountFadeInAnimation.constant';

const useMountFadeInAnimation = <T extends Element>() => {
  const target = useRef<T>(null);

  useEffect(() => {
    if (target.current === null) {
      return;
    }

    target.current.classList.add(CLASS_NAME_FADE_IN);
  }, []);

  return {
    target,
  };
};

export { useMountFadeInAnimation };
