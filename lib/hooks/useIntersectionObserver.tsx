import { RefObject, useLayoutEffect, useState } from "react";

export function useIntersectionObserver(
  handleIntersect: IntersectionObserverCallback,
  htmlRef: RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) {
  const [observer] = useState(
    () => new IntersectionObserver(handleIntersect, options)
  );

  useLayoutEffect(() => {
    const elem = htmlRef.current;
    if (elem) observer.observe(elem);
    return () => observer?.disconnect();
  }, [observer, htmlRef]);

  return observer;
}
