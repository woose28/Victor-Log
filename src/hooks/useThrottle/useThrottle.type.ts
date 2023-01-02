type ThrottleCallback<ParamsType extends unknown[]> = (...params: ParamsType) => void;

type UseThrottleProps<ParamsType extends unknown[]> = {
  callback: ThrottleCallback<ParamsType>;
  timeout?: number;
};

export { UseThrottleProps, ThrottleCallback };
