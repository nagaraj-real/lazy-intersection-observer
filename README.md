# React Deferrable View

**Motivation** :gem:

Wrap lazy loaded react components with ReactDeferrableView component to defer their script load until they appear viewport.
Uses Intersection Observer under the hood and also exposes hook useIntersectionObserver for advanced use cases.
Defer loading lazy react components results in performance improvements on page load as initial script load size is reduced.

<hr/>

**Quick Start** :rocket:

Install npm package [react-deferrable-view](https://www.npmjs.com/package/react-deferrable-view)

```
npm i react-deferrable-view
```

Wrap your lazy loaded react components in DeferrableView component. 


```
const LazyLoad = React.lazy(() => import("./LazyLoad.tsx"));

function App() {
 return <DeferrableView>
           <LazyLoad />
        </DeferrableView>
}
```

(Optional) Use renderPlaceholder prop to provide custom placeholder element

```
 <DeferrableView
    renderPlaceholder={({ htmlRef }) => (
            <h3 ref={htmlRef as RefObject<HTMLHeadingElement>}>Fallback component</h3>
          )}>
    <LazyLoad />
</DeferrableView>
```

**Props**

All props are optional.

<p> options - override  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank">intersection observer options</a> </p>
<p> renderPlaceholder - callback function to provide placeholder element. Defaults to empty div element.

<hr/>

**Demo**

Coming Soon

