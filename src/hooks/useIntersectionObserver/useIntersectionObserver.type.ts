type IntersectionObserverEventHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

type UseIntersectionObserverProps = {
  options?: IntersectionObserverInit;
  disabled?: boolean;
  onIntersect?: IntersectionObserverEventHandler;
  onNotIntersect?: IntersectionObserverEventHandler;
};

export { UseIntersectionObserverProps };
