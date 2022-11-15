# Tooltip

[component-header:em9-tooltip]

Tooltips display additional information based on a specific action.

A tooltip's target is its _first child element_, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first.

Tooltips use `display: contents` so they won't interfere with how elements are positioned in a flex or grid layout.

```html preview
<em9-tooltip content="This is a tooltip">
  <em9-button>Hover Me</em9-button>
</em9-tooltip>
```

```jsx react
import { em9Button, em9Tooltip } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Tooltip content="This is a tooltip">
    <em9Button>Hover Me</em9Button>
  </em9Tooltip>
);
```

## Examples

### Placement

Use the `placement` attribute to set the preferred placement of the tooltip.

```html preview
<div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <em9-tooltip content="top-start" placement="top-start">
      <em9-button></em9-button>
    </em9-tooltip>

    <em9-tooltip content="top" placement="top">
      <em9-button></em9-button>
    </em9-tooltip>

    <em9-tooltip content="top-end" placement="top-end">
      <em9-button></em9-button>
    </em9-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <em9-tooltip content="left-start" placement="left-start">
      <em9-button></em9-button>
    </em9-tooltip>

    <em9-tooltip content="right-start" placement="right-start">
      <em9-button></em9-button>
    </em9-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <em9-tooltip content="left" placement="left">
      <em9-button></em9-button>
    </em9-tooltip>

    <em9-tooltip content="right" placement="right">
      <em9-button></em9-button>
    </em9-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <em9-tooltip content="left-end" placement="left-end">
      <em9-button></em9-button>
    </em9-tooltip>

    <em9-tooltip content="right-end" placement="right-end">
      <em9-button></em9-button>
    </em9-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <em9-tooltip content="bottom-start" placement="bottom-start">
      <em9-button></em9-button>
    </em9-tooltip>

    <em9-tooltip content="bottom" placement="bottom">
      <em9-button></em9-button>
    </em9-tooltip>

    <em9-tooltip content="bottom-end" placement="bottom-end">
      <em9-button></em9-button>
    </em9-tooltip>
  </div>
</div>

<style>
  .tooltip-placement-example {
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example em9-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) em9-tooltip:first-child em9-button,
  .tooltip-placement-example-row:nth-child(5) em9-tooltip:first-child em9-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) em9-tooltip:nth-child(2) em9-button,
  .tooltip-placement-example-row:nth-child(3) em9-tooltip:nth-child(2) em9-button,
  .tooltip-placement-example-row:nth-child(4) em9-tooltip:nth-child(2) em9-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
</style>
```

```jsx react
import { em9Button, em9Tooltip } from 'em9webcomponents/dist/react';

const css = `
  .tooltip-placement-example {
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example em9-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) em9-tooltip:first-child em9-button,
  .tooltip-placement-example-row:nth-child(5) em9-tooltip:first-child em9-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) em9-tooltip:nth-child(2) em9-button,
  .tooltip-placement-example-row:nth-child(3) em9-tooltip:nth-child(2) em9-button,
  .tooltip-placement-example-row:nth-child(4) em9-tooltip:nth-child(2) em9-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
`;

const App = () => (
  <>
    <div className="tooltip-placement-example">
      <div className="tooltip-placement-example-row">
        <em9Tooltip content="top-start" placement="top-start">
          <em9Button />
        </em9Tooltip>

        <em9Tooltip content="top" placement="top">
          <em9Button />
        </em9Tooltip>

        <em9Tooltip content="top-end" placement="top-end">
          <em9Button />
        </em9Tooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <em9Tooltip content="left-start" placement="left-start">
          <em9Button />
        </em9Tooltip>

        <em9Tooltip content="right-start" placement="right-start">
          <em9Button />
        </em9Tooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <em9Tooltip content="left" placement="left">
          <em9Button />
        </em9Tooltip>

        <em9Tooltip content="right" placement="right">
          <em9Button />
        </em9Tooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <em9Tooltip content="left-end" placement="left-end">
          <em9Button />
        </em9Tooltip>

        <em9Tooltip content="right-end" placement="right-end">
          <em9Button />
        </em9Tooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <em9Tooltip content="bottom-start" placement="bottom-start">
          <em9Button />
        </em9Tooltip>

        <em9Tooltip content="bottom" placement="bottom">
          <em9Button />
        </em9Tooltip>

        <em9Tooltip content="bottom-end" placement="bottom-end">
          <em9Button />
        </em9Tooltip>
      </div>
    <style>{css}</style>
  </>
);
```

### Switch theme

`variant` attribute is used to change the theme

```html preview
<em9-tooltip content="Light tooltip" variant="light">
  <em9-button>Hover me</em9-button>
</em9-tooltip>
```

```jsx react
import { em9Button, em9Tooltip } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Tooltip content="Light tooltip">
    <em9Button>Hover me</em9Button>
  </em9Tooltip>
);
```

### Click Trigger

Set the `trigger` attribute to `click` to toggle the tooltip on click instead of hover.

```html preview
<em9-tooltip content="Click again to dismiss" trigger="click" variant="light">
  <em9-button>Click to Toggle</em9-button>
</em9-tooltip>
```

```jsx react
import { em9Button, em9Tooltip } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Tooltip content="Click again to dismiss" trigger="click">
    <em9Button>Click to Toggle</em9Button>
  </em9Tooltip>
);
```

### Manual Trigger

Tooltips can be controller programmatically by setting the `trigger` attribute to `manual`. Use the `open` attribute to control when the tooltip is shown.

```html preview
<em9-button style="margin-right: 4rem;">Toggle Manually</em9-button>

<em9-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip">
  <em9-avatar label="User"></em9-avatar>
</em9-tooltip>

<script>
  const tooltip = document.querySelector('.manual-tooltip');
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
</script>
```

```jsx react
import { useState } from 'react';
import { em9Avatar, em9Button, em9Tooltip } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Button style={{ marginRight: '4rem' }} onClick={() => setOpen(!open)}>
        Toggle Manually
      </em9Button>

      <em9Tooltip open={open} content="This is an avatar" trigger="manual">
        <em9Avatar />
      </em9Tooltip>
    </>
  );
};
```

### Icon on left of text

You can add Icon below content by using `icon` attribute and placing the icon in ` slot='icon'`.

```html preview
<em9-tooltip icon content="This is a tooltip">
  <em9-icon
    slot="icon"
    name="cs-linear-alert-circle"
    label="cs-linear-alert-circle"
    library="default"
    style="font-size:18px;"
  ></em9-icon>
  <em9-button>Hover me</em9-button>
</em9-tooltip>
```

```jsx react
import { em9Button, em9Tooltip, em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Tooltip icon content="This is a tooltip">
    <em9Icon slot="icon" name="cs-linear-alert-circle" label="cs-linear-alert-circle" library="default"></em9Icon>
    <em9Button>Hover me</em9Button>
  </em9Tooltip>
);
```

### SubText

You can add subtext below content by useing `subtext` attribute.

```html preview
<em9-tooltip
  icon
  content="This is a tooltip"
  subText="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."
>
  <em9-icon
    slot="icon"
    name="cs-linear-alert-circle"
    label="cs-linear-alert-circle"
    library="default"
    style="font-size:17px"
  ></em9-icon>
  <em9-button>Hover me</em9-button>
</em9-tooltip>
<em9-tooltip
  icon
  content="This is a tooltip"
  subText="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."
  variant="light"
>
  <em9-button>Hover me light</em9-button>
  <em9-icon slot="icon" name="cs-linear-alert-circle" label="cs-linear-alert-circle" library="default"></em9-icon>
</em9-tooltip>
```

```jsx react
import { em9Button, em9Tooltip ,em9Icon} from 'em9webcomponents/dist/react';

const App = () => (
 <em9Tooltip icon content="This is a tooltip" subText="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.">
 <em9Icon slot="icon" name="cs-linear-alert-circle" label="cs-linear-alert-circle" library="default"></em9Icon>
  <em9Button>Hover me</em9Button>
</em9Tooltip>
 <em9Tooltip icon  content="This is a tooltip" subText="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element." variant="light">
 <em9Icon slot="icon" name="cs-linear-alert-circle" label="cs-linear-alert-circle" library="default"></em9Icon>
  <em9Button>Hover me light</em9Button>
</em9Tooltip>
);
```

### Remove Arrows

You can control the size of tooltip arrows by overriding the `--em9-tooltip-arrow-size` design token.

```html preview
<div style="--em9-tooltip-arrow-size: 0;">
  <em9-tooltip content="This is a tooltip">
    <em9-button>Above</em9-button>
  </em9-tooltip>

  <em9-tooltip content="This is a tooltip" placement="bottom">
    <em9-button>Below</em9-button>
  </em9-tooltip>
</div>
```

```jsx react
import { em9Button, em9Tooltip } from 'em9webcomponents/dist/react';

const App = () => (
  <div style={{ '--em9-tooltip-arrow-size': '0' }}>
    <em9Tooltip content="This is a tooltip">
      <em9Button>Above</em9Button>
    </em9Tooltip>

    <em9Tooltip content="This is a tooltip" placement="bottom">
      <em9Button>Below</em9Button>
    </em9Tooltip>
  </div>
);
```

To override it globally, set it in a root block in your stylesheet after the em9-Library stylesheet is loaded.

```css
:root {
  --em9-tooltip-arrow-size: 0;
}
```

### custom styling

This example demonstrates how to style tooltip using a custom class. This is the recommended approach if you need to add additional variations.

```html preview
<style>
  em9-tooltip.error::part(content) {
    background: pink;
    border-color: red;
    color: red;
    font-size: 18px;
  }
  em9-tooltip.error::part(arrow) {
    background: pink;
    border-color: red;
  }
</style>
<em9-tooltip content="Custom tooltip" class="error" variant="light" trigger="click">
  <em9-button>Click Me</em9-button>
</em9-tooltip>
```

```jsx react
import { em9Button, em9Tooltip } from 'em9webcomponents/dist/react';

const css = `em9-tooltip.error::part(content) {
                       background:pink;
                       border-color:red;
                       color:red;
                       font-size:18px}
em9-tooltip.error::part(arrow){
                    background:pink;
                    border-color:red;}`;

const App = () => (
  <>
    <em9Tooltip content="Custom tooltip" trigger="click">
      <em9Button>Click Me</em9Button>
    </em9Tooltip>
    <style>{css}</style>
  </>
);
```

### HTML in Tooltips

Use the `content` slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.

```html preview
<em9-tooltip>
  <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

  <em9-button>Hover me</em9-button>
</em9-tooltip>
```

```jsx react
import { em9Button, em9Tooltip } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Tooltip content="This is a tooltip">
    <div slot="content">
      I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!
    </div>

    <em9Button>Hover Me</em9Button>
  </em9Tooltip>
);
```

### Hoisting

Tooltips will be clipped if they're inside a container that has `overflow: auto|hidden|scroll`. The `hoist` attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="tooltip-hoist">
  <em9-tooltip content="This is a tooltip">
    <em9-button>No Hoist</em9-button>
  </em9-tooltip>

  <em9-tooltip content="This is a tooltip" hoist>
    <em9-button>Hoist</em9-button>
  </em9-tooltip>
</div>

<style>
  .tooltip-hoist {
    border: solid 2px var(--em9-panel-border-color);
    overflow: hidden;
    padding: var(--em9-spacing-medium);
    position: relative;
  }
</style>
```

```jsx react
import { em9Button, em9Tooltip } from 'em9webcomponents/dist/react';

const css = `
  .tooltip-hoist {
    border: solid 2px var(--em9-panel-border-color);
    overflow: hidden;
    padding: var(--em9-spacing-medium);
    position: relative;
  }
`;

const App = () => (
  <>
    <div class="tooltip-hoist">
      <em9Tooltip content="This is a tooltip">
        <em9Button>No Hoist</em9Button>
      </em9Tooltip>

      <em9Tooltip content="This is a tooltip" hoist>
        <em9Button>Hoist</em9Button>
      </em9Tooltip>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:em9-tooltip]
