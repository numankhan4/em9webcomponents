# Menu Item

[component-header:em9-menu-item]

Menu items provide options for the user to pick from in a menu.

```html preview
<em9-menu style="max-width: 200px;">
  <em9-menu-item>Option 1</em9-menu-item>
  <em9-menu-item>Option 2</em9-menu-item>
  <em9-menu-item>Option 3</em9-menu-item>
  <em9-divider></em9-divider>
  <em9-menu-item checked>Checked</em9-menu-item>
  <em9-menu-item disabled>Disabled</em9-menu-item>
  <em9-divider></em9-divider>
  <em9-menu-item>
    Prefix Icon
    <em9-icon slot="prefix" name="gift"></em9-icon>
  </em9-menu-item>
  <em9-menu-item>
    Suffix Icon
    <em9-icon slot="suffix" name="heart"></em9-icon>
  </em9-menu-item>
</em9-menu>
```

```jsx react
import { em9Divider, em9Icon, em9Menu, em9MenuItem } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Menu style={{ maxWidth: '200px' }}>
    <em9MenuItem>Option 1</em9MenuItem>
    <em9MenuItem>Option 2</em9MenuItem>
    <em9MenuItem>Option 3</em9MenuItem>
    <em9Divider />
    <em9MenuItem checked>Checked</em9MenuItem>
    <em9MenuItem disabled>Disabled</em9MenuItem>
    <em9Divider />
    <em9MenuItem>
      Prefix Icon
      <em9Icon slot="prefix" name="gift" />
    </em9MenuItem>
    <em9MenuItem>
      Suffix Icon
      <em9Icon slot="suffix" name="heart" />
    </em9MenuItem>
  </em9Menu>
);
```

## Examples

### Checked

Use the `checked` attribute to draw menu items in a checked state.

```html preview
<em9-menu style="max-width: 200px;">
  <em9-menu-item>Option 1</em9-menu-item>
  <em9-menu-item checked>Option 2</em9-menu-item>
  <em9-menu-item>Option 3</em9-menu-item>
</em9-menu>
```

```jsx react
import { em9Menu, em9MenuItem } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Menu style={{ maxWidth: '200px' }}>
    <em9MenuItem>Option 1</em9MenuItem>
    <em9MenuItem checked>Option 2</em9MenuItem>
    <em9MenuItem>Option 3</em9MenuItem>
  </em9Menu>
);
```

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html preview
<em9-menu style="max-width: 200px;">
  <em9-menu-item>Option 1</em9-menu-item>
  <em9-menu-item disabled>Option 2</em9-menu-item>
  <em9-menu-item>Option 3</em9-menu-item>
</em9-menu>
```

```jsx react
import { em9Menu, em9MenuItem } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Menu style={{ maxWidth: '200px' }}>
    <em9MenuItem>Option 1</em9MenuItem>
    <em9MenuItem disabled>Option 2</em9MenuItem>
    <em9MenuItem>Option 3</em9MenuItem>
  </em9Menu>
);
```

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html preview
<em9-menu style="max-width: 200px;">
  <em9-menu-item>
    <em9-icon slot="prefix" name="house"></em9-icon>
    Home
  </em9-menu-item>

  <em9-menu-item>
    <em9-icon slot="prefix" name="envelope"></em9-icon>
    Messages
    <em9-badge slot="suffix" variant="primary" pill>12</em9-badge>
  </em9-menu-item>

  <em9-divider></em9-divider>

  <em9-menu-item>
    <em9-icon slot="prefix" name="gear"></em9-icon>
    Settings
  </em9-menu-item>
</em9-menu>
```

```jsx react
import { em9Badge, em9Divider, em9Icon, em9Menu, em9MenuItem } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Menu style={{ maxWidth: '200px' }}>
    <em9MenuItem>
      <em9Icon slot="prefix" name="house" />
      Home
    </em9MenuItem>

    <em9MenuItem>
      <em9Icon slot="prefix" name="envelope" />
      Messages
      <em9Badge slot="suffix" variant="primary" pill>
        12
      </em9Badge>
    </em9MenuItem>

    <em9Divider />

    <em9MenuItem>
      <em9Icon slot="prefix" name="gear" />
      Settings
    </em9MenuItem>
  </em9Menu>
);
```

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `em9-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html preview
<em9-menu class="menu-value" style="max-width: 200px;">
  <em9-menu-item value="opt-1">Option 1</em9-menu-item>
  <em9-menu-item value="opt-2">Option 2</em9-menu-item>
  <em9-menu-item value="opt-3">Option 3</em9-menu-item>
</em9-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('em9-select', event => {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  });
</script>
```

```jsx react
import { em9Menu, em9MenuItem } from 'em9webcomponents/dist/react';

const App = () => {
  function handleSelect(event) {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  }

  return (
    <em9Menu style={{ maxWidth: '200px' }} onSlSelect={handleSelect}>
      <em9MenuItem value="opt-1">Option 1</em9MenuItem>
      <em9MenuItem value="opt-2">Option 2</em9MenuItem>
      <em9MenuItem value="opt-3">Option 3</em9MenuItem>
    </em9Menu>
  );
};
```

[component-metadata:em9-menu-item]
