# Button Group

[component-header:em9-button-group]

Button groups can be used to group related buttons into sections.

```html preview
<em9-button-group>
  <em9-button variant="secondary gray">Left</em9-button>
  <em9-button variant="secondary gray">Center</em9-button>
  <em9-button variant="secondary gray">Right</em9-button>
</em9-button-group>
```

```jsx react
import { em9Button, em9ButtonGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <em9ButtonGroup>
    <em9Button>Left</em9Button>
    <em9Button>Center</em9Button>
    <em9Button>Right</em9Button>
  </em9ButtonGroup>
);
```

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html preview
<em9-button-group>
  <em9-button size="small">Left</em9-button>
  <em9-button size="small">Center</em9-button>
  <em9-button size="small">Right</em9-button>
</em9-button-group>

<br /><br />

<em9-button-group>
  <em9-button size="medium">Left</em9-button>
  <em9-button size="medium">Center</em9-button>
  <em9-button size="medium">Right</em9-button>
</em9-button-group>

<br /><br />

<em9-button-group>
  <em9-button size="large">Left</em9-button>
  <em9-button size="large">Center</em9-button>
  <em9-button size="large">Right</em9-button>
</em9-button-group>
```

```jsx react
import { em9Button, em9ButtonGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9ButtonGroup>
      <em9Button size="small">Left</em9Button>
      <em9Button size="small">Center</em9Button>
      <em9Button size="small">Right</em9Button>
    </em9ButtonGroup>

    <br />
    <br />

    <em9ButtonGroup>
      <em9Button size="medium">Left</em9Button>
      <em9Button size="medium">Center</em9Button>
      <em9Button size="medium">Right</em9Button>
    </em9ButtonGroup>

    <br />
    <br />

    <em9ButtonGroup>
      <em9Button size="large">Left</em9Button>
      <em9Button size="large">Center</em9Button>
      <em9Button size="large">Right</em9Button>
    </em9ButtonGroup>
  </>
);
```

### Theme Buttons

Theme buttons are supported through the button's `type` attribute.

```html preview
<em9-button-group>
  <em9-button variant="primary">Left</em9-button>
  <em9-button variant="primary">Center</em9-button>
  <em9-button variant="primary">Right</em9-button>
</em9-button-group>

<br /><br />

<em9-button-group>
  <em9-button variant="secondary color">Left</em9-button>
  <em9-button variant="secondary color">Center</em9-button>
  <em9-button variant="secondary color">Right</em9-button>
</em9-button-group>

<br /><br />

<em9-button-group>
  <em9-button variant="primary" destructive>Left</em9-button>
  <em9-button variant="primary" destructive>Center</em9-button>
  <em9-button variant="primary" destructive>Right</em9-button>
</em9-button-group>

<br /><br />

<em9-button-group>
  <em9-button variant="secondary gray" destructive>Left</em9-button>
  <em9-button variant="secondary gray" destructive>Center</em9-button>
  <em9-button variant="secondary gray" destructive>Right</em9-button>
</em9-button-group>

<br /><br />

<em9-button-group>
  <em9-button variant="secondary color" destructive>Left</em9-button>
  <em9-button variant="secondary color" destructive>Center</em9-button>
  <em9-button variant="secondary color" destructive>Right</em9-button>
</em9-button-group>
```

```jsx react
import { em9Button, em9ButtonGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9ButtonGroup>
      <em9Button variant="primary">Left</em9Button>
      <em9Button variant="primary">Center</em9Button>
      <em9Button variant="primary">Right</em9Button>
    </em9ButtonGroup>

    <br />
    <br />

    <em9ButtonGroup>
      <em9Button variant="success">Left</em9Button>
      <em9Button variant="success">Center</em9Button>
      <em9Button variant="success">Right</em9Button>
    </em9ButtonGroup>

    <br />
    <br />

    <em9ButtonGroup>
      <em9Button variant="neutral">Left</em9Button>
      <em9Button variant="neutral">Center</em9Button>
      <em9Button variant="neutral">Right</em9Button>
    </em9ButtonGroup>

    <br />
    <br />

    <em9ButtonGroup>
      <em9Button variant="warning">Left</em9Button>
      <em9Button variant="warning">Center</em9Button>
      <em9Button variant="warning">Right</em9Button>
    </em9ButtonGroup>

    <br />
    <br />

    <em9ButtonGroup>
      <em9Button variant="danger">Left</em9Button>
      <em9Button variant="danger">Center</em9Button>
      <em9Button variant="danger">Right</em9Button>
    </em9ButtonGroup>
  </>
);
```

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html preview
<em9-button-group>
  <em9-button size="small" pill>Left</em9-button>
  <em9-button size="small" pill>Center</em9-button>
  <em9-button size="small" pill>Right</em9-button>
</em9-button-group>

<br /><br />

<em9-button-group>
  <em9-button size="medium" pill>Left</em9-button>
  <em9-button size="medium" pill>Center</em9-button>
  <em9-button size="medium" pill>Right</em9-button>
</em9-button-group>

<br /><br />

<em9-button-group>
  <em9-button size="large" pill>Left</em9-button>
  <em9-button size="large" pill>Center</em9-button>
  <em9-button size="large" pill>Right</em9-button>
</em9-button-group>
```

```jsx react
import { em9Button, em9ButtonGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9ButtonGroup>
      <em9Button size="small" pill>
        Left
      </em9Button>
      <em9Button size="small" pill>
        Center
      </em9Button>
      <em9Button size="small" pill>
        Right
      </em9Button>
    </em9ButtonGroup>

    <br />
    <br />

    <em9ButtonGroup>
      <em9Button size="medium" pill>
        Left
      </em9Button>
      <em9Button size="medium" pill>
        Center
      </em9Button>
      <em9Button size="medium" pill>
        Right
      </em9Button>
    </em9ButtonGroup>

    <br />
    <br />

    <em9ButtonGroup>
      <em9Button size="large" pill>
        Left
      </em9Button>
      <em9Button size="large" pill>
        Center
      </em9Button>
      <em9Button size="large" pill>
        Right
      </em9Button>
    </em9ButtonGroup>
  </>
);
```

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<em9-button>` element.

```html preview
<em9-button-group>
  <em9-button>Button</em9-button>
  <em9-button>Button</em9-button>
  <em9-dropdown>
    <em9-button slot="trigger" caret>Dropdown</em9-button>
    <em9-menu>
      <em9-menu-item>Item 1</em9-menu-item>
      <em9-menu-item>Item 2</em9-menu-item>
      <em9-menu-item>Item 3</em9-menu-item>
    </em9-menu>
  </em9-dropdown>
</em9-button-group>
```

```jsx react
import {
  em9Button,
  em9ButtonGroup,
  em9Dropdown,
  em9Menu,
  em9MenuItem
} from 'em9webcomponents/dist/react';

const App = () => (
  <em9ButtonGroup>
    <em9Button>Button</em9Button>
    <em9Button>Button</em9Button>
    <em9Dropdown>
      <em9Button slot="trigger" caret>
        Dropdown
      </em9Button>
      <em9Menu>
        <em9MenuItem>Item 1</em9MenuItem>
        <em9MenuItem>Item 2</em9MenuItem>
        <em9MenuItem>Item 3</em9MenuItem>
      </em9Menu>
    </em9Dropdown>
  </em9ButtonGroup>
);
```

### Split Buttons

Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices.

```html preview
<em9-button-group>
  <em9-button variant="primary">Save</em9-button>
  <em9-dropdown placement="bottom-end">
    <em9-button slot="trigger" variant="primary" caret>
      <em9-visually-hidden>More options</em9-visually-hidden>
    </em9-button>
    <em9-menu>
      <em9-menu-item>Save</em9-menu-item>
      <em9-menu-item>Save as&hellip;</em9-menu-item>
      <em9-menu-item>Save all</em9-menu-item>
    </em9-menu>
  </em9-dropdown>
</em9-button-group>
```

```jsx react
import {
  em9Button,
  em9ButtonGroup,
  em9Dropdown,
  em9Menu,
  em9MenuItem
} from 'em9webcomponents/dist/react';

const App = () => (
  <em9ButtonGroup>
    <em9Button variant="primary">Save</em9Button>
    <em9Dropdown placement="bottom-end">
      <em9Button slot="trigger" variant="primary" caret></em9Button>
      <em9Menu>
        <em9MenuItem>Save</em9MenuItem>
        <em9MenuItem>Save as&hellip;</em9MenuItem>
        <em9MenuItem>Save all</em9MenuItem>
      </em9Menu>
    </em9Dropdown>
  </em9ButtonGroup>
);
```

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html preview
<em9-button-group>
  <em9-tooltip content="I'm on the left">
    <em9-button>Left</em9-button>
  </em9-tooltip>

  <em9-tooltip content="I'm in the middle">
    <em9-button>Center</em9-button>
  </em9-tooltip>

  <em9-tooltip content="I'm on the right">
    <em9-button>Right</em9-button>
  </em9-tooltip>
</em9-button-group>
```

```jsx react
import { em9Button, em9ButtonGroup, em9Tooltip } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9ButtonGroup>
      <em9Tooltip content="I'm on the left">
        <em9Button>Left</em9Button>
      </em9Tooltip>

      <em9Tooltip content="I'm in the middle">
        <em9Button>Center</em9Button>
      </em9Tooltip>

      <em9Tooltip content="I'm on the right">
        <em9Button>Right</em9Button>
      </em9Tooltip>
    </em9ButtonGroup>
  </>
);
```

### Toolbar Example

Create interactive toolbars with button groups.

```html preview

<div class="button-group-toolbar">
  <div style="display:flex; gap:10px;flex-wrap: wrap;">
    <em9-button-group label="History">
      <em9-tooltip content="Undo">
        <em9-button onlyicon><em9-icon name="arrow-counterclockwise" label="Undo"></em9-icon></em9-button>
      </em9-tooltip>
      <em9-tooltip content="Redo">
        <em9-button onlyicon><em9-icon name="arrow-clockwise" label="Redo"></em9-icon></em9-button>
      </em9-tooltip>
    </em9-button-group>
 

  <em9-button-group label="Formatting">
    <em9-tooltip content="Bold">
      <em9-button onlyicon><em9-icon name="type-bold" label="Bold"></em9-icon></em9-button>
    </em9-tooltip>
    <em9-tooltip content="Italic">
      <em9-button onlyicon><em9-icon name="type-italic" label="Italic"></em9-icon></em9-button>
    </em9-tooltip>
    <em9-tooltip content="Underline">
      <em9-button onlyicon><em9-icon name="type-underline" label="Underline"></em9-icon></em9-button>
    </em9-tooltip>
  </em9-button-group>
  <em9-button-group label="Navigation">
    <em9-tooltip content="back">
      <em9-button onlyicon><em9-icon name="arrow-left" label="back"></em9-icon></em9-button>
    </em9-tooltip>
    <em9-tooltip content="stay">
      <em9-button onlyicon><em9-icon name="plus-lg" label="add"></em9-icon></em9-button>
    </em9-tooltip>
    <em9-tooltip content="forward">
      <em9-button onlyicon><em9-icon name="arrow-right" label="forward"></em9-icon></em9-button>
    </em9-tooltip>
  </em9-button-group>

  <em9-button-group label="Alignment">
    <em9-tooltip content="Align Left">
      <em9-button onlyicon><em9-icon name="justify-left" label="Align Left"></em9-icon></em9-button>
    </em9-tooltip>
    <em9-tooltip content="Align Center">
      <em9-button onlyicon><em9-icon name="justify" label="Align Center"></em9-icon></em9-button>
    </em9-tooltip>
    <em9-tooltip content="Align Right">
      <em9-button onlyicon><em9-icon name="justify-right" label="Align Right"></em9-icon></em9-button>
    </em9-tooltip>
  </em9-button-group>
  </div>
</div>

<style>
  .button-group-toolbar em9-button-group:not(:last-of-type) {
    margin-right: var(--em9-spacing-x-small);
  }
</style>
```

```jsx react
import { em9Button, em9ButtonGroup, em9Icon, em9Tooltip } from 'em9webcomponents/dist/react';

const css = `
  .button-group-toolbar em9-button-group:not(:last-of-type) {
    margin-right: var(--em9-spacing-x-small);
  }
`;

const App = () => (
  <>
  <div style="display:flex; gap:10px;flex-wrap: wrap;">
    <div className="button-group-toolbar">
      <em9ButtonGroup label="History">
        <em9Tooltip content="Undo">
          <em9Button>
            <em9Icon name="arrow-counterclockwise"></em9Icon>
          </em9Button>
        </em9Tooltip>
        <em9Tooltip content="Redo">
          <em9Button>
            <em9Icon name="arrow-clockwise"></em9Icon>
          </em9Button>
        </em9Tooltip>
      </em9ButtonGroup>

      <em9ButtonGroup label="Formatting">
        <em9Tooltip content="Bold">
          <em9Button>
            <em9Icon name="type-bold"></em9Icon>
          </em9Button>
        </em9Tooltip>
        <em9Tooltip content="Italic">
          <em9Button>
            <em9Icon name="type-italic"></em9Icon>
          </em9Button>
        </em9Tooltip>
        <em9Tooltip content="Underline">
          <em9Button>
            <em9Icon name="type-underline"></em9Icon>
          </em9Button>
        </em9Tooltip>
      </em9ButtonGroup>

      <em9ButtonGroup label="Alignment">
        <em9Tooltip content="Align Left">
          <em9Button>
            <em9Icon name="justify-left"></em9Icon>
          </em9Button>
        </em9Tooltip>
        <em9Tooltip content="Align Center">
          <em9Button>
            <em9Icon name="justify"></em9Icon>
          </em9Button>
        </em9Tooltip>
        <em9Tooltip content="Align Right">
          <em9Button>
            <em9Icon name="justify-right"></em9Icon>
          </em9Button>
        </em9Tooltip>
      </em9ButtonGroup>
    </div>
  </div>
    <style>{css}</style>
  </>
);
```
### Lifted in Button Groups
Use the `tab` attribute to give lifted look to group.

```html preview
<em9-button-group tab>
  <em9-button variant="secondary gray">Active</em9-button>
  <em9-button variant="secondary gray">Passive</em9-button>
</em9-button-group>
```
```jsx react
import { em9Button, em9ButtonGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <em9ButtonGroup tab>
    <em9Button>Left</em9Button>
    <em9Button>Center</em9Button>
    <em9Button>Right</em9Button>
  </em9ButtonGroup>
);
```
### Lifted in Button Groups
Use the style tag to style the group items group.

```html preview
<em9-button-group tab class="light">
  <em9-button variant="secondary gray">Active</em9-button>
  <em9-button variant="secondary gray">Passive</em9-button>
</em9-button-group>
<style>
  em9-button-group.light{
    background:#F5F5FA;
    color:#70728F;
  }
  em9-button-group.light .em9-button-group__button--active::part(base)
  {
    color:#46B0E6;
  }
  em9-button-group.light .em9-button-tabgroup__button::part(base):hover
  {background:#46B0E6;
   color:#F5F5FA;
  }
  em9-button-group.light .em9-button-tabgroup__button::part(base):focus
  {box-shadow:var(--em9-shadow-x-small), 0px 0px 0px 4px #46B0E6;}
</style>
```
```jsx react
import { em9Button, em9ButtonGroup } from 'em9webcomponents/dist/react';
const css = `
  .button-group-toolbar em9-button-group:not(:last-of-type) {
    margin-right: var(--em9-spacing-x-small);
  }
`;
const App = () => (
  <em9ButtonGroup tab>
    <em9Button>Left</em9Button>
    <em9Button>Center</em9Button>
    <em9Button>Right</em9Button>
  </em9ButtonGroup>
);
<style>{css}</style>
```
[component-metadata:em9-button-group]
