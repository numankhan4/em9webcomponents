# Menu Label

[component-header:em9-menu-label]

Menu labels are used to describe a group of menu items.

```html preview
<em9-menu style="max-width: 200px;">
  <em9-menu-label>Fruits</em9-menu-label>
  <em9-menu-item value="apple">Apple</em9-menu-item>
  <em9-menu-item value="banana">Banana</em9-menu-item>
  <em9-menu-item value="orange">Orange</em9-menu-item>
  <em9-divider></em9-divider>
  <em9-menu-label>Vegetables</em9-menu-label>
  <em9-menu-item value="broccoli">Broccoli</em9-menu-item>
  <em9-menu-item value="carrot">Carrot</em9-menu-item>
  <em9-menu-item value="zucchini">Zucchini</em9-menu-item>
</em9-menu>
```

```jsx react
import { em9Divider, em9Menu, em9MenuLabel, em9MenuItem } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Menu style={{ maxWidth: '200px' }}>
    <em9MenuLabel>Fruits</em9MenuLabel>
    <em9MenuItem value="apple">Apple</em9MenuItem>
    <em9MenuItem value="banana">Banana</em9MenuItem>
    <em9MenuItem value="orange">Orange</em9MenuItem>
    <em9Divider />
    <em9MenuLabel>Vegetables</em9MenuLabel>
    <em9MenuItem value="broccoli">Broccoli</em9MenuItem>
    <em9MenuItem value="carrot">Carrot</em9MenuItem>
    <em9MenuItem value="zucchini">Zucchini</em9MenuItem>
  </em9Menu>
);
```

[component-metadata:em9-menu-label]
