import "./App.css";
import React, { useRef } from "react";
import { TallPage } from "./TallPage.tsx";
import { LazyIntersectionObserver } from "../lib/main.ts";

const LazyLoad = React.lazy(() => import("./LazyLoad.tsx"));

function App() {
  const elementRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <TallPage />
      <div ref={elementRef}>
        <LazyIntersectionObserver elementRef={elementRef}>
          <LazyLoad />
        </LazyIntersectionObserver>
      </div>
    </>
  );
}

export default App;
