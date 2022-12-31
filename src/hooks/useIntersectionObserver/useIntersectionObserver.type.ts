type IntersectEventHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

type UseIntersectionObserverProps = {
  options?: IntersectionObserverInit;
  onIntersect: IntersectEventHandler;
};

export { UseIntersectionObserverProps };
