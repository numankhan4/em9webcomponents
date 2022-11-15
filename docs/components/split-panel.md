# Split Panel

[component-header:em9-split-panel]

Split panels display two adjacent panels, allowing the user to reposition them.

```html preview
<em9-split-panel>
  <div
    slot="start"
    style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</em9-split-panel>
```

```jsx react
import { em9SplitPanel } from 'em9webcomponents/dist/react';

const App = () => (
  <em9SplitPanel>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--em9-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--em9-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </em9SplitPanel>
);
```

## Examples

### Initial Position

To set the initial position, use the `position` attribute. If no position is provided, it will default to 50% of the available space.

```html preview
<em9-split-panel position="75">
  <div
    slot="start"
    style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</em9-split-panel>
```

```jsx react
import { em9SplitPanel } from 'em9webcomponents/dist/react';

const App = () => (
  <em9SplitPanel position="75">
    <div
      slot="start"
      style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </em9SplitPanel>
);
```

### Initial Position in Pixels

To set the initial position in pixels instead of a percentage, use the `position-in-pixels` attribute.

```html preview
<em9-split-panel position-in-pixels="150">
  <div
    slot="start"
    style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</em9-split-panel>
```

```jsx react
import { em9SplitPanel } from 'em9webcomponents/dist/react';

const App = () => (
  <em9SplitPanel position="200">
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--em9-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--em9-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </em9SplitPanel>
);
```

### Vertical

Add the `vertical` attribute to render the split panel in a vertical orientation where the start and end panels are stacked. You also need to set a height when using the vertical orientation.

```html preview
<em9-split-panel vertical style="height: 400px;">
  <div
    slot="start"
    style="height: 100%; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 100%; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</em9-split-panel>
```

```jsx react
import { em9SplitPanel } from 'em9webcomponents/dist/react';

const App = () => (
  <em9SplitPanel vertical style={{ height: '400px' }}>
    <div
      slot="start"
      style={{
        height: '100%',
        background: 'var(--em9-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '100%',
        background: 'var(--em9-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </em9SplitPanel>
);
```

### Snapping

To snap panels at specific positions while dragging, add the `snap` attribute with one or more space-separated values. Values must be in pixels or percentages. For example, to snap the panel at `100px` and `50%`, use `snap="100px 50%"`. You can also customize how close the divider must be before snapping with the `snap-threshold` attribute.

```html preview
<div class="split-panel-snapping">
  <em9-split-panel snap="100px 50%">
    <div
      slot="start"
      style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </em9-split-panel>

  <div class="split-panel-snapping-dots"></div>
</div>

<style>
  .split-panel-snapping {
    position: relative;
  }

  .split-panel-snapping-dots::before,
  .split-panel-snapping-dots::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--em9-color-neutral-400);
    transform: translateX(-3px);
  }

  .split-panel-snapping-dots::before {
    left: 100px;
  }

  .split-panel-snapping-dots::after {
    left: 50%;
  }
</style>
```

```jsx react
import { em9SplitPanel } from 'em9webcomponents/dist/react';

const css = `
  .split-panel-snapping {
    position: relative;
  }

  .split-panel-snapping-dots::before,
  .split-panel-snapping-dots::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--em9-color-neutral-400);
    transform: translateX(-3px);
  }

  .split-panel-snapping-dots::before {
    left: 100px;
  }

  .split-panel-snapping-dots::after {
    left: 50%;
  }
`;

const App = () => (
  <>
    <div className="split-panel-snapping">
      <em9SplitPanel snap="100px 50%">
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--em9-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--em9-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </em9SplitPanel>

      <div className="split-panel-snapping-dots" />
    </div>

    <style>{css}</style>
  </>
);
```

### Disabled

Add the `disabled` attribute to prevent the divider from being repositioned.

```html preview
<em9-split-panel disabled>
  <div
    slot="start"
    style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</em9-split-panel>
```

```jsx react
import { em9SplitPanel } from 'em9webcomponents/dist/react';

const App = () => (
  <em9SplitPanel disabled>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--em9-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--em9-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </em9SplitPanel>
);
```

### Setting the Primary Panel

By default, both panels will grow or shrink proportionally when the host element is resized. If a primary panel is designated, it will maintain its size and the secondary panel will grow or shrink to fit the remaining space. You can set the primary panel to `start` or `end` using the `primary` attribute.

Try resizing the example below with each option and notice how the panels respond.

```html preview
<div class="split-panel-primary">
  <em9-split-panel>
    <div
      slot="start"
      style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </em9-split-panel>

  <em9-select label="Primary Panel" value="" style="max-width: 200px; margin-top: 1rem;">
    <em9-menu-item value="">None</em9-menu-item>
    <em9-menu-item value="start">Start</em9-menu-item>
    <em9-menu-item value="end">End</em9-menu-item>
  </em9-select>
</div>

<script>
  const container = document.querySelector('.split-panel-primary');
  const splitPanel = container.querySelector('em9-split-panel');
  const select = container.querySelector('em9-select');

  select.addEventListener('em9-change', () => (splitPanel.primary = select.value));
</script>
```

```jsx react
import { useState } from 'react';
import { em9SplitPanel, em9Select, em9MenuItem } from 'em9webcomponents/dist/react';

const App = () => {
  const [primary, setPrimary] = useState('');

  return (
    <>
      <em9SplitPanel primary={primary}>
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--em9-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--em9-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </em9SplitPanel>

      <em9Select
        label="Primary Panel"
        value={primary}
        style={{ maxWidth: '200px', marginTop: '1rem' }}
        onSlChange={event => setPrimary(event.target.value)}
      >
        <em9MenuItem value="">None</em9MenuItem>
        <em9MenuItem value="start">Start</em9MenuItem>
        <em9MenuItem value="end">End</em9MenuItem>
      </em9Select>
    </>
  );
};
```

### Min & Max

To set a minimum or maximum size of the primary panel, use the `--min` and `--max` custom properties. Since the secondary panel is flexible, size constraints can only be applied to the primary panel. If no primary panel is designated, these constraints will be applied to the `start` panel.

This examples demonstrates how you can ensure both panels are at least 150px using `--min`, `--max`, and the `calc()` function.

```html preview
<em9-split-panel style="--min: 150px; --max: calc(100% - 150px);">
  <div
    slot="start"
    style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</em9-split-panel>
```

```jsx react
import { em9SplitPanel } from 'em9webcomponents/dist/react';

const App = () => (
  <em9SplitPanel style={{ '--min': '150px', '--max': 'calc(100% - 150px)' }}>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--em9-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--em9-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </em9SplitPanel>
);
```

### Nested Split Panels

Create complex layouts that can be repositioned independently by nesting split panels.

```html preview
<em9-split-panel>
  <div
    slot="start"
    style="height: 400px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div slot="end">
    <em9-split-panel vertical style="height: 400px;">
      <div
        slot="start"
        style="height: 100%; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
      >
        Top
      </div>
      <div
        slot="end"
        style="height: 100%; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
      >
        Bottom
      </div>
    </em9-split-panel>
  </div>
</em9-split-panel>
```

```jsx react
import { em9SplitPanel } from 'em9webcomponents/dist/react';

const App = () => (
  <em9SplitPanel>
    <div
      slot="start"
      style={{
        height: '400px',
        background: 'var(--em9-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div slot="end">
      <em9SplitPanel vertical style={{ height: '400px' }}>
        <div
          slot="start"
          style={{
            height: '100%',
            background: 'var(--em9-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '100%',
            background: 'var(--em9-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </em9SplitPanel>
    </div>
  </em9SplitPanel>
);
```

### Customizing the Divider

You can target the `divider` part to apply CSS properties to the divider. To add a handle, em9ot an icon or another element into the `handle` slot. When customizing the divider, make sure to think about focus styles for keyboard users.

```html preview
<em9-split-panel style="--divider-width: 20px;">
  <em9-icon slot="handle" name="twotone-arrow-swap-horizontal"></em9-icon>
  <div
    slot="start"
    style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</em9-split-panel>
```

```jsx react
import { em9SplitPanel, em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <em9SplitPanel style={{ '--divider-width': '20px' }}>
    <em9Icon slot="handle" name="twotone-arrow-swap-horizontal" />
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--em9-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--em9-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </em9SplitPanel>
);
```

Here's a more elaborate example that changes the divider's color and width and adds a styled handle.

```html preview
<div class="split-panel-handle">
  <em9-split-panel>
    <em9-icon slot="handle" name="twotone-arrow-swap-horizontal"></em9-icon>
    <div
      slot="start"
      style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--em9-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </em9-split-panel>
</div>

<style>
  .split-panel-handle em9-split-panel {
    --divider-width: 2px;
  }

  .split-panel-handle em9-split-panel::part(divider) {
    background-color: var(--em9-color-pink-600);
  }

  .split-panel-handle em9-icon {
    position: absolute;
    border-radius: var(--em9-border-radius-small);
    background: var(--em9-color-pink-600);
    color: var(--em9-color-neutral-0);
    padding: 0.5rem 0.125rem;
  }

  .split-panel-handle em9-split-panel::part(divider):focus-visible {
    background-color: var(--em9-color-primary-600);
  }

  .split-panel-handle em9-split-panel:focus-within em9-icon {
    background-color: var(--em9-color-primary-600);
    color: var(--em9-color-neutral-0);
  }
</style>
```

```jsx react
import { em9SplitPanel, em9Icon } from 'em9webcomponents/dist/react';

const css = `
  .split-panel-handle em9-split-panel {
    --divider-width: 2px;
  }

  .split-panel-handle em9-split-panel::part(divider) {
    background-color: var(--em9-color-pink-600);
  }

  .split-panel-handle em9-icon {
    position: absolute;
    border-radius: var(--em9-border-radius-small);
    background: var(--em9-color-pink-600);
    color: var(--em9-color-neutral-0);
    padding: .5rem .125rem;
  }

  .split-panel-handle em9-split-panel::part(divider):focus-visible {
    background-color: var(--em9-color-primary-600);
  }

  .split-panel-handle em9-split-panel:focus-within em9-icon {
    background-color: var(--em9-color-primary-600);
    color: var(--em9-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="split-panel-handle">
      <em9SplitPanel>
        <em9Icon slot="handle" name="twotone-arrow-swap-horizontal" />
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--em9-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--em9-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </em9SplitPanel>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:em9-split-panel]
