# Skeleton

[component-header:em9-skeleton]

Skeletons are used to show where content will eventually be drawn.

These are simple containers for scaffolding layouts that mimic what users will see when content has finished loading. This prevents large areas of empty space during asynchronous operations.

Skeletons try not to be opinionated, as there are endless possibilities for designing layouts. Therefore, you'll likely use more than one skeleton to create the effect you want. If you find yourself using them frequently, consider creating a template that renders them with the desired arrangement and styles.

```html preview
<div class="skeleton-overview">
  <header>
    <em9-skeleton></em9-skeleton>
    <em9-skeleton></em9-skeleton>
  </header>

  <em9-skeleton></em9-skeleton>
  <em9-skeleton></em9-skeleton>
  <em9-skeleton></em9-skeleton>
</div>

<style>
  .skeleton-overview header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .skeleton-overview header em9-skeleton:last-child {
    flex: 0 0 auto;
    width: 30%;
  }

  .skeleton-overview em9-skeleton {
    margin-bottom: 1rem;
  }

  .skeleton-overview em9-skeleton:nth-child(1) {
    float: left;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    vertical-align: middle;
  }

  .skeleton-overview em9-skeleton:nth-child(3) {
    width: 95%;
  }

  .skeleton-overview em9-skeleton:nth-child(4) {
    width: 80%;
  }
</style>
```

```jsx react
import { em9Skeleton } from 'em9webcomponents/dist/react';

const css = `
  .skeleton-overview header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .skeleton-overview header em9-skeleton:last-child {
    flex: 0 0 auto;
    width: 30%;
  }

  .skeleton-overview em9-skeleton {
    margin-bottom: 1rem;
  }

  .skeleton-overview em9-skeleton:nth-child(1) {
    float: left;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    vertical-align: middle;
  }

  .skeleton-overview em9-skeleton:nth-child(3) {
    width: 95%;
  }

  .skeleton-overview em9-skeleton:nth-child(4) {
    width: 80%;
  }
`;

const App = () => (
  <>
    <div className="skeleton-overview">
      <header>
        <em9Skeleton />
        <em9Skeleton />
      </header>

      <em9Skeleton />
      <em9Skeleton />
      <em9Skeleton />
    </div>

    <style>{css}</style>
  </>
);
```

## Examples

### Effects

There are two built-in effects, `sheen` and `pulse`. Effects are intentionally subtle, as they can be distracting when used extensively. The default is `none`, which displays a static, non-animated skeleton.

```html preview
<div class="skeleton-effects">
  <em9-skeleton effect="none"></em9-skeleton>
  None

  <em9-skeleton effect="sheen"></em9-skeleton>
  Sheen

  <em9-skeleton effect="pulse"></em9-skeleton>
  Pulse
</div>

<style>
  .skeleton-effects {
    font-size: var(--em9-font-size-small);
  }

  .skeleton-effects em9-skeleton:not(:first-child) {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { em9Skeleton } from 'em9webcomponents/dist/react';

const css = `
  .skeleton-effects {
    font-size: var(--em9-font-size-small);
  }

  .skeleton-effects em9-skeleton:not(:first-child) {
    margin-top: 1rem;
  }
`;

const App = () => (
  <>
    <div className="skeleton-effects">
      <em9Skeleton effect="none" />
      None
      <em9Skeleton effect="sheen" />
      Sheen
      <em9Skeleton effect="pulse" />
      Pulse
    </div>

    <style>{css}</style>
  </>
);
```

### Paragraphs

Use multiple skeletons and some clever styles to simulate paragraphs.

```html preview
<div class="skeleton-paragraphs">
  <em9-skeleton></em9-skeleton>
  <em9-skeleton></em9-skeleton>
  <em9-skeleton></em9-skeleton>
  <em9-skeleton></em9-skeleton>
  <em9-skeleton></em9-skeleton>
</div>

<style>
  .skeleton-paragraphs em9-skeleton {
    margin-bottom: 1rem;
  }

  .skeleton-paragraphs em9-skeleton:nth-child(2) {
    width: 95%;
  }

  .skeleton-paragraphs em9-skeleton:nth-child(4) {
    width: 90%;
  }

  .skeleton-paragraphs em9-skeleton:last-child {
    width: 50%;
  }
</style>
```

```jsx react
import { em9Skeleton } from 'em9webcomponents/dist/react';

const css = `
  .skeleton-paragraphs em9-skeleton {
    margin-bottom: 1rem;
  }

  .skeleton-paragraphs em9-skeleton:nth-child(2) {
    width: 95%;
  }

  .skeleton-paragraphs em9-skeleton:nth-child(4) {
    width: 90%;
  }

  .skeleton-paragraphs em9-skeleton:last-child {
    width: 50%;
  }
`;

const App = () => (
  <>
    <div className="skeleton-paragraphs">
      <em9Skeleton />
      <em9Skeleton />
      <em9Skeleton />
      <em9Skeleton />
      <em9Skeleton />
    </div>

    <style>{css}</style>
  </>
);
```

### Avatars

Set a matching width and height to make a circle, square, or rounded avatar skeleton.

```html preview
<div class="skeleton-avatars">
  <em9-skeleton></em9-skeleton>
  <em9-skeleton></em9-skeleton>
  <em9-skeleton></em9-skeleton>
</div>

<style>
  .skeleton-avatars em9-skeleton {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
  }

  .skeleton-avatars em9-skeleton:nth-child(1) {
    --border-radius: 0;
  }

  .skeleton-avatars em9-skeleton:nth-child(2) {
    --border-radius: var(--em9-border-radius-medium);
  }
</style>
```

```jsx react
import { em9Skeleton } from 'em9webcomponents/dist/react';

const css = `
  .skeleton-avatars em9-skeleton {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-right: .5rem;
  }

  .skeleton-avatars em9-skeleton:nth-child(1) {
    --border-radius: 0;
  }
  
  .skeleton-avatars em9-skeleton:nth-child(2) {
    --border-radius: var(--em9-border-radius-medium);
  }
`;

const App = () => (
  <>
    <div className="skeleton-avatars">
      <em9Skeleton />
      <em9Skeleton />
      <em9Skeleton />
    </div>

    <style>{css}</style>
  </>
);
```

### Custom Shapes

Use the `--border-radius` custom property to make circles, squares, and rectangles. For more complex shapes, you can apply `clip-path` to the `indicator` part. [Try Clippy](https://bennettfeely.com/clippy/) if you need help generating custom shapes.

```html preview
<div class="skeleton-shapes">
  <em9-skeleton class="square"></em9-skeleton>
  <em9-skeleton class="circle"></em9-skeleton>
  <em9-skeleton class="triangle"></em9-skeleton>
  <em9-skeleton class="cross"></em9-skeleton>
  <em9-skeleton class="comment"></em9-skeleton>
</div>

<style>
  .skeleton-shapes em9-skeleton {
    display: inline-flex;
    width: 50px;
    height: 50px;
  }

  .skeleton-shapes .square::part(indicator) {
    --border-radius: var(--em9-border-radius-medium);
  }

  .skeleton-shapes .circle::part(indicator) {
    --border-radius: var(--em9-border-radius-circle);
  }

  .skeleton-shapes .triangle::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
  }

  .skeleton-shapes .cross::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(
      20% 0%,
      0% 20%,
      30% 50%,
      0% 80%,
      20% 100%,
      50% 70%,
      80% 100%,
      100% 80%,
      70% 50%,
      100% 20%,
      80% 0%,
      50% 30%
    );
  }

  .skeleton-shapes .comment::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  }

  .skeleton-shapes em9-skeleton:not(:last-child) {
    margin-right: 0.5rem;
  }
</style>
```

```jsx react
import { em9Skeleton } from 'em9webcomponents/dist/react';

const css = `
  .skeleton-shapes em9-skeleton {
    display: inline-flex;
    width: 50px;
    height: 50px;
  }

  .skeleton-shapes .square::part(indicator) {
    --border-radius: var(--em9-border-radius-medium);
  }

  .skeleton-shapes .circle::part(indicator) {
    --border-radius: var(--em9-border-radius-circle);
  }

  .skeleton-shapes .triangle::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
  }

  .skeleton-shapes .cross::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  }

  .skeleton-shapes .comment::part(indicator) {
    --border-radius: 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  }

  .skeleton-shapes em9-skeleton:not(:last-child) {
    margin-right: .5rem;
  }
`;

const App = () => (
  <>
    <div className="skeleton-shapes">
      <em9Skeleton className="square" />
      <em9Skeleton className="circle" />
      <em9Skeleton className="triangle" />
      <em9Skeleton className="cross" />
      <em9Skeleton className="comment" />
    </div>

    <style>{css}</style>
  </>
);
```

### Custom Colors

Set the `--color` and `--sheen-color` custom properties to adjust the skeleton's color.

```html preview
<em9-skeleton effect="sheen" style="--color: tomato; --sheen-color: #ffb094;"></em9-skeleton>
```

```jsx react
import { em9Skeleton } from 'em9webcomponents/dist/react';

const css = `
  .skeleton-avatars em9-skeleton {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-right: .5rem;
  }

  .skeleton-avatars em9-skeleton:nth-child(1) {
    --border-radius: 0;
  }
  
  .skeleton-avatars em9-skeleton:nth-child(2) {
    --border-radius: var(--em9-border-radius-medium);
  }
`;

const App = () => <em9Skeleton effect="sheen" style={{ '--color': 'tomato', '--sheen-color': '#ffb094' }} />;
```

[component-metadata:em9-skeleton]
