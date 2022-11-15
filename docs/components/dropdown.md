# Dropdown

[component-header:em9-dropdown]

Dropdowns expose additional content that "drops down" in a panel.

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker) and [select](/components/select)). The API gives you complete control over showing, hiding, and positioning the panel.

```html preview
<em9-dropdown>
  <em9-button slot="trigger" caret>Dropdown</em9-button>
  <em9-menu>
    <em9-menu-item>Dropdown Item 1</em9-menu-item>
    <em9-menu-item>Dropdown Item 2</em9-menu-item>
    <em9-menu-item>Dropdown Item 3</em9-menu-item>
    <em9-divider></em9-divider>
    <em9-menu-item checked>Checked</em9-menu-item>
    <em9-menu-item disabled>Disabled</em9-menu-item>
    <em9-divider></em9-divider>
    <em9-menu-item>
      Prefix
      <em9-icon slot="prefix" name="gift"></em9-icon>
    </em9-menu-item>
    <em9-menu-item>
      Suffix Icon
      <em9-icon slot="suffix" name="heart"></em9-icon>
    </em9-menu-item>
  </em9-menu>
</em9-dropdown>
```

```jsx react
import {
  em9Button,
  em9Divider,
  em9Dropdown,
  em9Icon,
  em9Menu,
  em9MenuItem
} from 'em9webcomponents/dist/react';

const App = () => (
  <em9Dropdown>
    <em9Button slot="trigger" caret>
      Dropdown
    </em9Button>
    <em9Menu>
      <em9MenuItem>Dropdown Item 1</em9MenuItem>
      <em9MenuItem>Dropdown Item 2</em9MenuItem>
      <em9MenuItem>Dropdown Item 3</em9MenuItem>
      <em9Divider />
      <em9MenuItem checked>Checked</em9MenuItem>
      <em9MenuItem disabled>Disabled</em9MenuItem>
      <em9Divider />
      <em9MenuItem>
        Prefix
        <em9Icon slot="prefix" name="gift" />
      </em9MenuItem>
      <em9MenuItem>
        Suffix Icon
        <em9Icon slot="suffix" name="heart" />
      </em9MenuItem>
    </em9Menu>
  </em9Dropdown>
);
```

## Examples

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the `em9-select` event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html preview
<div class="dropdown-selection">
  <em9-dropdown>
    <em9-button slot="trigger" caret>Edit</em9-button>
    <em9-menu>
      <em9-menu-item value="cut">Cut</em9-menu-item>
      <em9-menu-item value="copy">Copy</em9-menu-item>
      <em9-menu-item value="paste">Paste</em9-menu-item>
    </em9-menu>
  </em9-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('em9-dropdown');

  dropdown.addEventListener('em9-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

```jsx react
import { em9Button, em9Dropdown, em9Menu, em9MenuItem } from 'em9webcomponents/dist/react';

const App = () => {
  function handleSelect(event) {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  }

  return (
    <em9Dropdown>
      <em9Button slot="trigger" caret>
        Edit
      </em9Button>
      <em9Menu onSlSelect={handleSelect}>
        <em9MenuItem value="cut">Cut</em9MenuItem>
        <em9MenuItem value="copy">Copy</em9MenuItem>
        <em9MenuItem value="paste">Paste</em9MenuItem>
      </em9Menu>
    </em9Dropdown>
  );
};
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html preview
<div class="dropdown-selection-alt">
  <em9-dropdown>
    <em9-button slot="trigger" caret>Edit</em9-button>
    <em9-menu>
      <em9-menu-item value="cut">Cut</em9-menu-item>
      <em9-menu-item value="copy">Copy</em9-menu-item>
      <em9-menu-item value="paste">Paste</em9-menu-item>
    </em9-menu>
  </em9-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('em9-menu-item[value="cut"]');
  const copy = container.querySelector('em9-menu-item[value="copy"]');
  const paste = container.querySelector('em9-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
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

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html preview
<em9-dropdown placement="top-start">
  <em9-button slot="trigger" caret>Edit</em9-button>
  <em9-menu>
    <em9-menu-item>Cut</em9-menu-item>
    <em9-menu-item>Copy</em9-menu-item>
    <em9-menu-item>Paste</em9-menu-item>
    <em9-divider></em9-divider>
    <em9-menu-item>Find</em9-menu-item>
    <em9-menu-item>Replace</em9-menu-item>
  </em9-menu>
</em9-dropdown>
```

```jsx react
import { em9Button, em9Divider, em9Dropdown, em9Menu, em9MenuItem } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Dropdown placement="top-start">
    <em9Button slot="trigger" caret>
      Edit
    </em9Button>
    <em9Menu>
      <em9MenuItem>Cut</em9MenuItem>
      <em9MenuItem>Copy</em9MenuItem>
      <em9MenuItem>Paste</em9MenuItem>
      <em9Divider />
      <em9MenuItem>Find</em9MenuItem>
      <em9MenuItem>Replace</em9MenuItem>
    </em9Menu>
  </em9Dropdown>
);
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html preview
<em9-dropdown distance="30">
  <em9-button slot="trigger" caret>Edit</em9-button>
  <em9-menu>
    <em9-menu-item>Cut</em9-menu-item>
    <em9-menu-item>Copy</em9-menu-item>
    <em9-menu-item>Paste</em9-menu-item>
    <em9-divider></em9-divider>
    <em9-menu-item>Find</em9-menu-item>
    <em9-menu-item>Replace</em9-menu-item>
  </em9-menu>
</em9-dropdown>
```

```jsx react
import { em9Button, em9Divider, em9Dropdown, em9Menu, em9MenuItem } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Dropdown distance={30}>
    <em9Button slot="trigger" caret>
      Edit
    </em9Button>
    <em9Menu>
      <em9MenuItem>Cut</em9MenuItem>
      <em9MenuItem>Copy</em9MenuItem>
      <em9MenuItem>Paste</em9MenuItem>
      <em9Divider />
      <em9MenuItem>Find</em9MenuItem>
      <em9MenuItem>Replace</em9MenuItem>
    </em9Menu>
  </em9Dropdown>
);
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html preview
<em9-dropdown skidding="30">
  <em9-button slot="trigger" caret>Edit</em9-button>
  <em9-menu>
    <em9-menu-item>Cut</em9-menu-item>
    <em9-menu-item>Copy</em9-menu-item>
    <em9-menu-item>Paste</em9-menu-item>
    <em9-divider></em9-divider>
    <em9-menu-item>Find</em9-menu-item>
    <em9-menu-item>Replace</em9-menu-item>
  </em9-menu>
</em9-dropdown>
```

```jsx react
import { em9Button, em9Divider, em9Dropdown, em9Menu, em9MenuItem } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Dropdown skidding={30}>
    <em9Button slot="trigger" caret>
      Edit
    </em9Button>
    <em9Menu>
      <em9MenuItem>Cut</em9MenuItem>
      <em9MenuItem>Copy</em9MenuItem>
      <em9MenuItem>Paste</em9MenuItem>
      <em9Divider />
      <em9MenuItem>Find</em9MenuItem>
      <em9MenuItem>Replace</em9MenuItem>
    </em9Menu>
  </em9Dropdown>
);
```

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="dropdown-hoist">
  <em9-dropdown>
    <em9-button slot="trigger" caret>No Hoist</em9-button>
    <em9-menu>
      <em9-menu-item>Item 1</em9-menu-item>
      <em9-menu-item>Item 2</em9-menu-item>
      <em9-menu-item>Item 3</em9-menu-item>
    </em9-menu>
  </em9-dropdown>

  <em9-dropdown hoist>
    <em9-button slot="trigger" caret>Hoist</em9-button>
    <em9-menu>
      <em9-menu-item>Item 1</em9-menu-item>
      <em9-menu-item>Item 2</em9-menu-item>
      <em9-menu-item>Item 3</em9-menu-item>
    </em9-menu>
  </em9-dropdown>
</div>

<style>
  .dropdown-hoist {
    border: solid 2px var(--em9-panel-border-color);
    padding: var(--em9-spacing-medium);
    overflow: hidden;
  }
</style>
```

```jsx react
import {
  em9Button,
  em9Divider,
  em9Dropdown,
  em9Icon,
  em9Menu,
  em9MenuItem
} from 'em9webcomponents/dist/react';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--em9-panel-border-color);
    padding: var(--em9-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <div className="dropdown-hoist">
      <em9Dropdown>
        <em9Button slot="trigger" caret>
          No Hoist
        </em9Button>
        <em9Menu>
          <em9MenuItem>Item 1</em9MenuItem>
          <em9MenuItem>Item 2</em9MenuItem>
          <em9MenuItem>Item 3</em9MenuItem>
        </em9Menu>
      </em9Dropdown>

      <em9Dropdown hoist>
        <em9Button slot="trigger" caret>
          Hoist
        </em9Button>
        <em9Menu>
          <em9MenuItem>Item 1</em9MenuItem>
          <em9MenuItem>Item 2</em9MenuItem>
          <em9MenuItem>Item 3</em9MenuItem>
        </em9Menu>
      </em9Dropdown>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:em9-dropdown]
