import { PropsWithChildren, ReactElement, useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export type DeferrableViewProps = PropsWithChildren & {
  options?: IntersectionObserverInit;
  renderPlaceholder?: (inputRef: {
    htmlRef: React.RefObject<unknown>;
  }) => ReactElement;
};

export function DeferrableView({
  children,
  options,
  renderPlaceholder = ({ htmlRef: inputRef }) => (
    <div ref={inputRef as React.RefObject<HTMLDivElement>}></div>
  ),
}: DeferrableViewProps) {
  const [load, setLoad] = useState(false);
  const htmlRef = useRef<HTMLElement>(null);

  useIntersectionObserver(
    (entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      setLoad(true);
    },
    htmlRef,
    { threshold: 1, ...(options ?? {}) }
  );
  return load ? children : renderPlaceholder({ htmlRef });
}
