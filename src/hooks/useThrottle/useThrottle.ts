import { useRef } from 'react';
import { ThrottleCallback, UseThrottleProps } from 'hooks/useThrottle/useThrottle.type';
import { DEFAULT_THROTTLE_TIMEOUT } from 'hooks/useThrottle/useThrottle.constant';

const useThrottle = <ParamsType extends unknown[]>({
  callback,
  timeout = DEFAULT_THROTTLE_TIMEOUT,
}: UseThrottleProps<ParamsType>) => {
  const timerIdRef = useRef<number | null>(null);

  const throttledCallback: ThrottleCallback<ParamsType> = (...params) => {
    if (typeof timerIdRef.current === 'number') {
      return;
    }

    timerIdRef.current = window.setTimeout(() => {
      callback(...params);
      timerIdRef.current = null;
    }, timeout);
  };

  return {
    throttledCallback,
  };
};

export { useThrottle };
