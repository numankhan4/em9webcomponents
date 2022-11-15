# Divider

[component-header:em9-divider]

Dividers are used to visually separate or group elements.

```html preview
<em9-divider></em9-divider>
```

```jsx react
import { em9Divider } from 'em9webcomponents/dist/react';

const App = () => <em9Divider />;
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html preview
<em9-divider style="--width: 4px;"></em9-divider>
```

```jsx react
import { em9Divider } from 'em9webcomponents/dist/react';

const App = () => <em9Divider style={{ '--width': '4px' }} />;
```

### Color

Use the `--color` custom property to change the color of the divider.

```html preview
<em9-divider style="--color: tomato;"></em9-divider>
```

```jsx react
import { em9Divider } from 'em9webcomponents/dist/react';

const App = () => <em9Divider style={{ '--color': 'tomato' }} />;
```

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html preview
<div style="text-align: center;">
  Above
  <em9-divider style="--spacing: 2rem;"></em9-divider>
  Below
</div>
```

```jsx react
import { em9Divider } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    Above
    <em9Divider style={{ '--spacing': '2rem' }} />
    Below
  </>
);
```

### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <em9-divider vertical></em9-divider>
  Middle
  <em9-divider vertical></em9-divider>
  Last
</div>
```

```jsx react
import { em9Divider } from 'em9webcomponents/dist/react';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '2rem'
    }}
  >
    First
    <em9Divider vertical />
    Middle
    <em9Divider vertical />
    Last
  </div>
);
```

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html preview
<em9-menu style="max-width: 200px;">
  <em9-menu-item value="1">Option 1</em9-menu-item>
  <em9-menu-item value="2">Option 2</em9-menu-item>
  <em9-menu-item value="3">Option 3</em9-menu-item>
  <em9-divider></em9-divider>
  <em9-menu-item value="4">Option 4</em9-menu-item>
  <em9-menu-item value="5">Option 5</em9-menu-item>
  <em9-menu-item value="6">Option 6</em9-menu-item>
</em9-menu>
```

```jsx react
import { em9Button, em9Dropdown, em9Menu, em9MenuItem } from 'em9webcomponents/dist/react';

const App = () => {
  function handleCut() {
    console.log('cut');
  }

  function handleCopy() {
    console.log('copy');
  }

  function handlePaste() {
    console.log('paste');
  }

  return (
    <em9Dropdown>
      <em9Button slot="trigger" caret>
        Edit
      </em9Button>
      <em9Menu>
        <em9MenuItem onClick={handleCut}>Cut</em9MenuItem>
        <em9MenuItem onClick={handleCopy}>Copy</em9MenuItem>
        <em9MenuItem onClick={handlePaste}>Paste</em9MenuItem>
      </em9Menu>
    </em9Dropdown>
  );
};
```

[component-metadata:em9-divider]
