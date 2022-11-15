# Resize Observer

[component-header:em9-resize-observer]

The Resize Observer component offers a thin, declarative interface to the [`ResizeObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).

The resize observer will report changes to the dimensions of the elements it wraps through the `em9-resize` event. When emitted, a collection of [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) objects will be attached to `event.detail` that contains the target element and information about its dimensions.

```html preview
<div class="resize-observer-overview">
  <em9-resize-observer>
    <div>Resize this box and watch the console 👉</div>
  </em9-resize-observer>
</div>

<script>
  const container = document.querySelector('.resize-observer-overview');
  const resizeObserver = container.querySelector('em9-resize-observer');

  resizeObserver.addEventListener('em9-resize', event => {
    console.log(event.detail);
  });
</script>

<style>
  .resize-observer-overview div {
    display: flex;
    border: solid 2px var(--em9-input-border-color);
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem;
  }
</style>
```

```jsx react
import { em9ResizeObserver } from 'em9webcomponents/dist/react';

const css = `
  .resize-observer-overview div {
    display: flex; 
    border: solid 2px var(--em9-input-border-color); 
    align-items: center; 
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem;
  }
`;

const App = () => (
  <>
    <div className="resize-observer-overview">
      <em9ResizeObserver onSlResize={event => console.log(event.detail)}>
        <div>Resize this box and watch the console 👉</div>
      </em9ResizeObserver>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:em9-resize-observer]
