# Icon Button

[component-header:em9-icon-button]

Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.

For a full list of icons that come bundled with em9-Library, refer to the [icon component](/components/icon).

```html preview
<em9-icon-button name="gear" label="Settings"></em9-icon-button>
```

```jsx react
import { em9IconButton } from 'em9webcomponents/dist/react';

const App = () => <em9IconButton name="gear" label="Settings" />;
```

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.

```html preview
<em9-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></em9-icon-button>
<em9-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></em9-icon-button>
<em9-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></em9-icon-button>
```

```jsx react
import { em9IconButton } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9IconButton name="pencil" label="Edit" style={{ fontSize: '1.5rem' }} />
    <em9IconButton name="pencil" label="Edit" style={{ fontSize: '2rem' }} />
    <em9IconButton name="pencil" label="Edit" style={{ fontSize: '2.5rem' }} />
  </>
);
```

### Colors

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.

```html preview
<div class="icon-button-color">
  <em9-icon-button name="bold-info-circle" label="Bold"></em9-icon-button>
  <em9-icon-button name="type-italic" label="Italic"></em9-icon-button>
  <em9-icon-button name="type-underline" label="Underline"></em9-icon-button>
</div>

<style>
  .icon-button-color em9-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color em9-icon-button::part(base):hover,
  .icon-button-color em9-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color em9-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

```jsx react
import { em9IconButton } from 'em9webcomponents/dist/react';

const css = `
  .icon-button-color em9-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color em9-icon-button::part(base):hover,
  .icon-button-color em9-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color em9-icon-button::part(base):active {
    color: #960077;
  }
`;

const App = () => (
  <>
    <div className="icon-button-color">
      <em9IconButton name="bold-info-circle" label="Bold" />
      <em9IconButton name="type-italic" label="Italic" />
      <em9IconButton name="type-underline" label="Underline" />
    </div>

    <style>{css}</style>
  </>
);
```

### Link Buttons

Use the `href` attribute to convert the button to a link.

```html preview
<em9-icon-button name="gear" label="Settings" href="https://example.com" target="_blank"></em9-icon-button>
```

```jsx react
import { em9IconButton } from 'em9webcomponents/dist/react';

const App = () => <em9IconButton name="gear" label="Settings" href="https://example.com" target="_blank" />;
```

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.

```html preview
<em9-tooltip content="Settings">
  <em9-icon-button name="gear" label="Settings"></em9-icon-button>
</em9-tooltip>
```

```jsx react
import { em9IconButton, em9Tooltip } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Tooltip content="Settings">
    <em9IconButton name="gear" label="Settings" />
  </em9Tooltip>
);
```

### Disabled

Use the `disabled` attribute to disable the icon button.

```html preview
<em9-icon-button name="gear" label="Settings" disabled></em9-icon-button>
```

```jsx react
import { em9IconButton } from 'em9webcomponents/dist/react';

const App = () => <em9IconButton name="gear" label="Settings" disabled />;
```

[component-metadata:em9-icon-button]
