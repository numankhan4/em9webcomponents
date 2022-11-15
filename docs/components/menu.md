# Menu

[component-header:em9-menu]

Menus provide a list of options for the user to choose from.

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

```html preview
<em9-menu style="max-width: 200px;">
  <em9-menu-item value="undo">Undo</em9-menu-item>
  <em9-menu-item value="redo">Redo</em9-menu-item>
  <em9-divider></em9-divider>
  <em9-menu-item value="cut">Cut</em9-menu-item>
  <em9-menu-item value="copy">Copy</em9-menu-item>
  <em9-menu-item value="paste">Paste</em9-menu-item>
  <em9-menu-item value="delete">Delete</em9-menu-item>
</em9-menu>
```

```jsx react
import { em9Divider, em9Menu, em9MenuItem } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Menu style={{ maxWidth: '200px' }}>
    <em9MenuItem value="undo">Undo</em9MenuItem>
    <em9MenuItem value="redo">Redo</em9MenuItem>
    <em9Divider />
    <em9MenuItem value="cut">Cut</em9MenuItem>
    <em9MenuItem value="copy">Copy</em9MenuItem>
    <em9MenuItem value="paste">Paste</em9MenuItem>
    <em9MenuItem value="delete">Delete</em9MenuItem>
  </em9Menu>
);
```

?> Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.

[component-metadata:em9-menu]
