import "./App.css";
import React, { RefObject } from "react";
import { TallPage } from "./TallPage.tsx";
import { DeferrableView } from "../lib/main.ts";

const LazyLoad = React.lazy(() => import("./LazyLoad.tsx"));
const LazyLoad2 = React.lazy(() => import("./LazyLoad2.tsx"));

function App() {
  return (
    <>
      <TallPage color="#b17272" />
      <section>
        <DeferrableView>
          <LazyLoad />
        </DeferrableView>
      </section>

      <TallPage color="#7cbbbb" />
      <section>
        <DeferrableView
          renderPlaceholder={({ htmlRef }) => (
            <h3 ref={htmlRef as RefObject<HTMLHeadingElement>}></h3>
          )}
        >
          <LazyLoad2 />
        </DeferrableView>
      </section>
    </>
  );
}

export default App;
