type IntersectEventHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

type UseIntersectionObserverProps = {
  options?: IntersectionObserverInit;
  disabled?: boolean;
  onIntersect: IntersectEventHandler;
};

export { UseIntersectionObserverProps };
