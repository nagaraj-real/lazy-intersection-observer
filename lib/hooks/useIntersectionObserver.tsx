import { useLayoutEffect, useState } from "react";

export function useIntersection(
  handleIntersect: IntersectionObserverCallback,
  getAnchorElem: () => HTMLElement | null,
  options?: IntersectionObserverInit
) {
  const [observer] = useState(
    () => new IntersectionObserver(handleIntersect, options)
  );

  useLayoutEffect(() => {
    const anchorElem = getAnchorElem();
    if (anchorElem) observer.observe(anchorElem);
    return () => observer?.disconnect();
  }, [observer, getAnchorElem]);

  return observer;
}
