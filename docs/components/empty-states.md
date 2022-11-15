# Empty States

[component-header:em9-empty-states]

An empty state appears when there is no data to display and describes what the user can do next.

```html preview
<em9-empty-states label="No projects found" containedInCard layout="layoutCenter"></em9-empty-states>
```

```jsx react
import { em9EmptyStates, em9Icon } from 'em9webcomponents/dist/react';
const App = () => <em9EmptyStates label="No projects found" containedInCard layout="layoutCenter"></em9EmptyStates>;
```

## Variations

### With Header, Footer and Body

```html preview
<em9-empty-states
  label="No projects found"
  description="Your search “Landing page design” did not match any projects. Please try again"
  headerArt="cs-linear-search"
  class="custom-empty-state"
  layout="layoutCenter"
>
  <footer slot="footer">
    <em9-button variant="secondary gray" size="large" class="cancel-btn">Clear search</em9-button>
    <em9-button variant="primary" size="large">New project</em9-button>
  </footer>
</em9-empty-states>
<style>
  .code-block__preview {
    background: var(--em9-color-gray-50);
  }
  .custom-empty-state [slot='footer'] {
    text-align: center;
    gap: 12px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 400px) {
    .custom-empty-state [slot='footer'] {
      flex-direction: column;
    }
    .custom-empty-state [slot='footer'] em9-button:first-child {
      order: 2;
    }
  }
</style>
```

```jsx react
import { em9EmptyStates, em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
  <em9EmptyStates
    label="No projects found"
    description="Your search “Landing page design” did not match any projects. Please try again"
    headerArt="cs-linear-search"
    className="custom-empty-state"
    layout="layoutCenter"
  >
    <footer slot="footer">
      <em9-button variant="secondary gray" size="large" class="cancel-btn">Clear search</em9-button>
      <em9-button variant="primary" size="large">New project</em9-button>
    </footer>
  </em9EmptyStates>
  );

// place the style in stylesheet.

.custom-empty-state [slot='footer'] {
  text-align: center;
  gap: 12px;
  display: flex;
  justify-content: center;
}
@media (max-width: 400px) {
  .custom-empty-state [slot='footer'] {
    flex-direction: column;
  }
  .custom-empty-state [slot='footer'] em9-button:first-child {
    order: 2;
  }
  }
```

### Contained In Card

```html preview
<em9-empty-states
  label="No projects found"
  description="Your search “Landing page design” did not match any projects. Please try again"
  headerArt="cs-linear-search"
  class="custom-empty-state"
  layout="layoutCenter"
  containedInCard
>
  <footer slot="footer">
    <em9-button variant="secondary gray" size="large" class="cancel-btn">Clear search</em9-button>
    <em9-button variant="primary" class="purple" size="large">New project</em9-button>
  </footer>
</em9-empty-states>
<style>
  .code-block__preview {
    background: var(--em9-color-gray-50);
  }
  .custom-empty-state [slot='footer'] {
    text-align: center;
    gap: 12px;
    display: flex;
    justify-content: center;
  }
  .custom-empty-state::part(art-frame) {
    color: var(--em9-color-purple-600);
    background-color: var(--em9-color-purple-100);
    border-color: var(--em9-color-purple-50);
  }
  em9-button.purple::part(base) {
    color: var(--em9-color-neutral-0);
    background-color: var(--em9-color-purple-500);
    border-color: var(--em9-color-purple-50);
  }

  em9-button.purple::part(base):hover {
    background-color: var(--em9-color-purple-600);
    border-color: var(--em9-color-purple-100);
  }
  em9-button.purple::part(base):focus {
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }
  em9-button.purple::part(base):active {
    background-color: var(--em9-color-purple-600);
    border-color: var(--em9-color-purple-100);
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }

  em9-button.purple::part(base):focus-visible {
    background-color: var(--em9-color-purple-500);
    border-color: var(--em9-color-purple-50);
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }
  @media (max-width: 400px) {
    .custom-empty-state [slot='footer'] {
      flex-direction: column;
    }
    .custom-empty-state [slot='footer'] em9-button:first-child {
      order: 2;
    }
  }
</style>
```

```jsx react
import { em9EmptyStates, em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
   <em9EmptyStates
  label="No projects found"
  description="Your search “Landing page design” did not match any projects. Please try again"
  headerArt="cs-linear-search"
  className="custom-empty-state"
  layout="layoutCenter"
  containedInCard
>
  <footer slot="footer">
    <em9-button variant="secondary gray" size="large" class="cancel-btn">Clear search</em9-button>
    <em9-button variant="primary" class="purple" size="large">New project</em9-button>
  </footer>
</em9EmptyStates>
  );
  // place the style in stylesheet.

  .code-block__preview {
    background: var(--em9-color-gray-50);
  }
  .custom-empty-state [slot='footer'] {
    text-align: center;
    gap: 12px;
    display: flex;
    justify-content: center;
  }
  .custom-empty-state::part(art-frame) {
    color: var(--em9-color-purple-600);
    background-color: var(--em9-color-purple-100);
    border-color: var(--em9-color-purple-50);
  }
  em9-button.purple::part(base) {
    color: var(--em9-color-neutral-0);
    background-color: var(--em9-color-purple-500);
    border-color: var(--em9-color-purple-50);
  }

  em9-button.purple::part(base):hover {
    background-color: var(--em9-color-purple-600);
    border-color: var(--em9-color-purple-100);
  }
  em9-button.purple::part(base):focus {
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }
  em9-button.purple::part(base):active {
    background-color: var(--em9-color-purple-600);
    border-color: var(--em9-color-purple-100);
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }

  em9-button.purple::part(base):focus-visible {
    background-color: var(--em9-color-purple-500);
    border-color: var(--em9-color-purple-50);
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }
  @media (max-width: 400px) {
    .custom-empty-state [slot='footer'] {
      flex-direction: column;
    }
    .custom-empty-state [slot='footer'] em9-button:first-child {
      order: 2;
    }
  }
```

### With Image and customize header

```html preview
<em9-empty-states
  label="No projects found"
  description="Your search “Landing page design” did not match any projects. Please try again"
  class="custom-empty-state"
  layout="layoutCenter"
  containedInCard
>
  <div class="error-state-image" slot="headerArt">
    <img src="/dist/assets/images/box-gray-lg.svg" alt="mastercard image" />
  </div>
  <footer slot="footer">
    <em9-button variant="secondary gray" size="large" class="cancel-btn">Clear search</em9-button>
    <em9-button variant="primary" class="purple" size="large">New project</em9-button>
  </footer>
</em9-empty-states>
<style>
  .code-block__preview {
    background: var(--em9-color-gray-50);
  }
  .error-state-image img {
    max-height: 160px;
  }
  .custom-empty-state [slot='footer'] {
    text-align: center;
    gap: 12px;
    display: flex;
    justify-content: center;
  }
  .custom-empty-state::part(art-frame) {
    color: var(--em9-color-purple-600);
    background-color: var(--em9-color-purple-100);
    border-color: var(--em9-color-purple-50);
  }
  em9-button.purple::part(base) {
    color: var(--em9-color-neutral-0);
    background-color: var(--em9-color-purple-500);
    border-color: var(--em9-color-purple-50);
  }

  em9-button.purple::part(base):hover {
    background-color: var(--em9-color-purple-600);
    border-color: var(--em9-color-purple-100);
  }
  em9-button.purple::part(base):focus {
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }
  em9-button.purple::part(base):active {
    background-color: var(--em9-color-purple-600);
    border-color: var(--em9-color-purple-100);
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }

  em9-button.purple::part(base):focus-visible {
    background-color: var(--em9-color-purple-500);
    border-color: var(--em9-color-purple-50);
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }
  @media (max-width: 400px) {
    .custom-empty-state [slot='footer'] {
      flex-direction: column;
    }
    .custom-empty-state [slot='footer'] em9-button:first-child {
      order: 2;
    }
  }
</style>
```

```jsx react
import { em9EmptyStates, em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
  <em9EmptyStates
  label="No projects found"
  description="Your search “Landing page design” did not match any projects. Please try again"
  className="custom-empty-state"
  layout="layoutCenter"
  containedInCard
>
  <div class="error-state-image" slot="headerArt">
    <img src="/dist/assets/images/box-gray-lg.svg" alt="mastercard image" />
  </div>
  <footer slot="footer">
    <em9-button variant="secondary gray" size="large" class="cancel-btn">Clear search</em9-button>
    <em9-button variant="primary" class="purple" size="large">New project</em9-button>
  </footer>
</em9EmptyStates>
  );
  // place the style in stylesheet.
   .code-block__preview {
    background: var(--em9-color-gray-50);
  }
  .error-state-image img {
    max-height: 160px;
  }
  .custom-empty-state [slot='footer'] {
    text-align: center;
    gap: 12px;
    display: flex;
    justify-content: center;
  }
  .custom-empty-state::part(art-frame) {
    color: var(--em9-color-purple-600);
    background-color: var(--em9-color-purple-100);
    border-color: var(--em9-color-purple-50);
  }
  em9-button.purple::part(base) {
    color: var(--em9-color-neutral-0);
    background-color: var(--em9-color-purple-500);
    border-color: var(--em9-color-purple-50);
  }

  em9-button.purple::part(base):hover {
    background-color: var(--em9-color-purple-600);
    border-color: var(--em9-color-purple-100);
  }
  em9-button.purple::part(base):focus {
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }
  em9-button.purple::part(base):active {
    background-color: var(--em9-color-purple-600);
    border-color: var(--em9-color-purple-100);
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }

  em9-button.purple::part(base):focus-visible {
    background-color: var(--em9-color-purple-500);
    border-color: var(--em9-color-purple-50);
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }
  @media (max-width: 400px) {
    .custom-empty-state [slot='footer'] {
      flex-direction: column;
    }
    .custom-empty-state [slot='footer'] em9-button:first-child {
      order: 2;
    }
  }
```

## Sizes

#### Medium

```html preview
<em9-empty-states
  label="No projects found"
  description="Your search “Landing page design” did not match any projects. Please try again"
  class="custom-empty-state"
  layout="layoutCenter"
  headerArt="cs-linear-search"
  size="medium"
  containedInCard
>
  <footer slot="footer">
    <em9-button variant="secondary gray" size="large" class="cancel-btn">Clear search</em9-button>
    <em9-button variant="primary" class="purple" size="large">New project</em9-button>
  </footer>
</em9-empty-states>
<style>
  .code-block__preview {
    background: var(--em9-color-gray-50);
  }
  .custom-empty-state [slot='footer'] {
    text-align: center;
    gap: 12px;
    display: flex;
    justify-content: center;
  }
  .custom-empty-state::part(art-frame) {
    color: var(--em9-color-purple-600);
    background-color: var(--em9-color-purple-100);
    border-color: var(--em9-color-purple-50);
  }
  em9-button.purple::part(base) {
    color: var(--em9-color-neutral-0);
    background-color: var(--em9-color-purple-500);
    border-color: var(--em9-color-purple-50);
  }

  em9-button.purple::part(base):hover {
    background-color: var(--em9-color-purple-600);
    border-color: var(--em9-color-purple-100);
  }
  em9-button.purple::part(base):focus {
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }
  em9-button.purple::part(base):active {
    background-color: var(--em9-color-purple-600);
    border-color: var(--em9-color-purple-100);
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }

  em9-button.purple::part(base):focus-visible {
    background-color: var(--em9-color-purple-500);
    border-color: var(--em9-color-purple-50);
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }
  @media (max-width: 400px) {
    .custom-empty-state [slot='footer'] {
      flex-direction: column;
    }
    .custom-empty-state [slot='footer'] em9-button:first-child {
      order: 2;
    }
  }
</style>
```

```jsx react
import { em9EmptyStates, em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
   <em9EmptyStates
  label="No projects found"
  description="Your search “Landing page design” did not match any projects. Please try again"
  class="custom-empty-state"
  layout="layoutCenter"
  headerArt="cs-linear-search"
  size="medium"
  containedInCard
>
  <footer slot="footer">
    <em9-button variant="secondary gray" size="large" class="cancel-btn">Clear search</em9-button>
    <em9-button variant="primary" class="purple" size="large">New project</em9-button>
  </footer>
</em9EmptyStates>
  );
  // place the style in stylesheet.
  .code-block__preview {
    background: var(--em9-color-gray-50);
  }
  .custom-empty-state [slot='footer'] {
    text-align: center;
    gap: 12px;
    display: flex;
    justify-content: center;
  }
  .custom-empty-state::part(art-frame) {
    color: var(--em9-color-purple-600);
    background-color: var(--em9-color-purple-100);
    border-color: var(--em9-color-purple-50);
  }
  em9-button.purple::part(base) {
    color: var(--em9-color-neutral-0);
    background-color: var(--em9-color-purple-500);
    border-color: var(--em9-color-purple-50);
  }

  em9-button.purple::part(base):hover {
    background-color: var(--em9-color-purple-600);
    border-color: var(--em9-color-purple-100);
  }
  em9-button.purple::part(base):focus {
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }
  em9-button.purple::part(base):active {
    background-color: var(--em9-color-purple-600);
    border-color: var(--em9-color-purple-100);
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }

  em9-button.purple::part(base):focus-visible {
    background-color: var(--em9-color-purple-500);
    border-color: var(--em9-color-purple-50);
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-purple-100);
  }
  @media (max-width: 400px) {
    .custom-empty-state [slot='footer'] {
      flex-direction: column;
    }
    .custom-empty-state [slot='footer'] em9-button:first-child {
      order: 2;
    }
  }
```

[component-metadata:em9-empty-states]
