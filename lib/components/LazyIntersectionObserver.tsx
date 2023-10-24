import { PropsWithChildren, RefObject, useState } from "react";
import { useIntersection } from "../hooks/useIntersectionObserver";

export type LazyIntersectiionLoaderProps = PropsWithChildren & {
  elementRef: RefObject<HTMLElement>;
  options?: IntersectionObserverInit;
};

export function LazyIntersectionObserver({
  children,
  elementRef,
  options,
}: LazyIntersectiionLoaderProps) {
  const [load, setLoad] = useState(false);
  useIntersection(
    (entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      setLoad(true);
    },
    () => elementRef.current,
    { threshold: 1, ...options }
  );
  return load ? children : <></>;
}
