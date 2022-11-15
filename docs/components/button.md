# Button

[component-header:em9-button]

Buttons represent actions that are available to the user.

```html preview
<em9-button>Primary</em9-button>

```

```jsx react
import { em9Button } from 'em9webcomponents/dist/react';

const App = () => <em9Button>Button</em9Button>;
```

## Examples

### Variants

Use the `variant` attribute to set the button's variant.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button>Primary</em9-button>
  <em9-button variant="secondary gray">Secondary gray</em9-button>
  <em9-button variant="secondary color">Secondary color</em9-button>
  <em9-button variant="tertiary gray">Tertiary gray</em9-button>
  <em9-button variant="tertiary color">Tertiary color</em9-button>
  <em9-button variant="gray light" onlyicon><em9-icon style="transform: rotate(45deg);" name="linear-add"></em9-icon></em9-button>
  <em9-button variant="gray dark" onlyicon><em9-icon style="transform: rotate(45deg);" name="linear-add"></em9-icon></em9-button>
  <em9-button variant="primary light" onlyicon><em9-icon style="transform: rotate(45deg);" name="linear-add"></em9-icon></em9-button>
  <em9-button variant="primary dark" onlyicon><em9-icon style="transform: rotate(45deg);" name="linear-add"></em9-icon></em9-button>
</div>
```

```jsx react
import { em9Button ,em9Icon} from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button>Primary</em9Button>
      <em9Button variant="secondary gray">Secondary gray</em9Button>
      <em9Button variant="secondary color">Secondary color</em9Button>
      <em9Button variant="tertiary gray">Tertiary gray</em9Button>
      <em9Button variant="tertiary color">Tertiary color</em9Button>
      <em9Button variant="gray light" onlyicon><em9Icon name="linear-add"></em9Icon></em9Button>
      <em9Button variant="gray dark" onlyicon><em9Icon name="linear-add"></em9Icon></em9Button>
      <em9Button variant="primary light" onlyicon><em9Icon name="linear-add"></em9Icon></em9Button>
      <em9Button variant="primary dark" onlyicon><em9Icon name="linear-add"></em9Icon></em9Button>
    </div>
  </>
);`
```

### Destructive Buttons

Use the `destructive`  attribute  with `variant` attribute to set the button's destructive varients.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button destructive>Primary Destructive</em9-button>
  <em9-button variant="secondary gray" destructive>Secondary gray destructive</em9-button>
  <em9-button variant="secondary color" destructive>Secondary color destructive</em9-button>
  <em9-button variant="tertiary gray" destructive>Tertiary gray destructive</em9-button>
  <em9-button variant="tertiary color" destructive>Tertiary color destructive</em9-button>
</div>
```

```jsx react
import { em9Button } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button destructive>Primary Destructive</em9Button>
      <em9Button variant="secondary gray" destructive>Secondary gray destructive</em9Button>
      <em9Button variant="secondary color" destructive>Secondary color destructive</em9Button>
      <em9Button variant="tertiary gray" destructive>Tertiary gray destructive</em9Button>
      <em9Button variant="tertiary color" destructive>Tertiary color destructive</em9Button>
    </div>
  </>
);
```

### Dot before text

Use the `leadingdot` attribute to draw dot before button text.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button leadingdot >Primary Destructive</em9-button>
  <em9-button variant="secondary gray" leadingdot >Secondary gray leadingdot</em9-button>
  <em9-button variant="secondary color" leadingdot>Secondary color leadingdot</em9-button>
  <em9-button variant="tertiary gray" leadingdot>Tertiary gray leadingdot</em9-button>
  <em9-button variant="tertiary color" leadingdot>Tertiary color leadingdot</em9-button>
</div>
```

```jsx react
import { em9Button } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button leadingdot >Primary Destructive</em9Button>
      <em9Button variant="secondary gray" leadingdot >Secondary gray leadingdot</em9Button>
      <em9Button variant="secondary color" leadingdot>Secondary color leadingdot</em9Button>
      <em9Button variant="tertiary gray" leadingdot>Tertiary gray leadingdot</em9Button>
      <em9Button variant="tertiary color" leadingdot>Tertiary color leadingdot</em9Button>
    </div>
  </>
);
```

### Icon only buttons

Use the `varient` attribute to draw tertiary buttons.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button  onlyicon ></em9-button>
  <em9-button variant="secondary gray"  onlyicon></em9-button>
  <em9-button variant="secondary color" onlyicon></em9-button>
  <em9-button variant="tertiary gray" onlyicon></em9-button>
  <em9-button variant="tertiary color" onlyicon></em9-button>
  <em9-button  onlyicon destructive></em9-button>
  <em9-button variant="secondary gray"  onlyicon destructive></em9-button>
  <em9-button variant="secondary color" onlyicon destructive></em9-button>
  <em9-button variant="tertiary gray" onlyicon destructive></em9-button>
  <em9-button variant="tertiary color" onlyicon destructive></em9-button>
</div>
```

```jsx react
import { em9Button } from 'em9webcomponents/dist/react';
const App = () => (
  <>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button  onlyicon ></em9Button>
      <em9Button variant="secondary gray"  onlyicon></em9Button>
      <em9Button variant="secondary color" onlyicon></em9Button>
      <em9Button variant="tertiary gray" onlyicon></em9Button>
      <em9Button variant="tertiary color" onlyicon></em9Button>
      <em9Button  onlyicon destructive></em9Button>
      <em9Button variant="secondary gray"  onlyicon destructive></em9Button>
      <em9Button variant="secondary color" onlyicon destructive></em9Button>
      <em9Button variant="tertiary gray" onlyicon destructive></em9Button>
      <em9Button variant="tertiary color" onlyicon destructive></em9Button>
    </div>
  </>
);
```

### Text Buttons

Use the `varient` attribute to draw Text buttons.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button href="https://example.com/" variant="link gray">Link gray</em9-button>
  <em9-button href="https://example.com/" variant="link color">Link color</em9-button>
  <em9-button href="https://example.com/" variant="link gray" destructive>Link destructive gray</em9-button>
  <em9-button href="https://example.com/" variant="link color" destructive>Link destructive color</em9-button>
  <em9-button href="https://example.com/" variant="link gray" leadingdot>Link gray</em9-button>
  <em9-button href="https://example.com/" variant="link color" leadingdot>Link color</em9-button>
</div>
```

```jsx react
import { em9Button } from 'em9webcomponents/dist/react';
const App = () => (
  <>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button href="https://example.com/" variant="link gray">Link gray</em9Button>
      <em9Button href="https://example.com/" variant="link color">Link color</em9Button>
      <em9Button href="https://example.com/" variant="link gray" destructive>Link destructive gray</em9Button>
      <em9Button href="https://example.com/" variant="link color" destructive>Link destructive color</em9Button>
      <em9Button href="https://example.com/" variant="link gray" leadingdot>Link gray</em9Button>
      <em9Button href="https://example.com/" variant="link color" leadingdot>Link color</em9Button>
    </div>
  </>
);
```

### Sizes

Use the `size` attribute to change a button's size.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button size="xx-small">XX-Small</em9-button>
  <em9-button size="x-small">X-Small</em9-button>
  <em9-button size="small">Small</em9-button>
  <em9-button size="medium">Medium</em9-button>
  <em9-button size="large">Large</em9-button>
  <em9-button size="x-large">Extra Large</em9-button>
  <em9-button size="2x-large">2x Large</em9-button>
</div>
<h3>For icon only sizes</h3>
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button size="xx-small" onlyicon>
    <em9-icon name="linear-setting-2" label="Settings"></em9-icon>
  </em9-button>
  <em9-button size="x-small" onlyicon>
  <em9-icon name="linear-setting-2" label="Settings"></em9-icon>
  </em9-button>
  <em9-button size="small" onlyicon>
    <em9-icon name="linear-setting-2" label="Settings"></em9-icon>
  </em9-button>
  <em9-button size="medium" onlyicon>
  <em9-icon name="linear-setting-2" label="Settings"></em9-icon>
  </em9-button>
  <em9-button size="large" onlyicon>
    <em9-icon name="linear-setting-2" label="Settings"></em9-icon>
  </em9-button>
  <em9-button size="x-large" onlyicon>
      <em9-icon name="linear-setting-2" label="Settings"></em9-icon>
  </em9-button>
  <em9-button size="2x-large" onlyicon>
    <em9-icon name="linear-setting-2" label="Settings"></em9-icon>
  </em9-button>
</div>
<h3>link variant sizes<h3>
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button href="https://example.com/" size="xx-small" style="margin-right:10px" variant="link color">Link color xx-small</em9-button>
  <em9-button href="https://example.com/" size="x-small" style="margin-right:10px" variant="link color">Link color x-small</em9-button>
  <em9-button href="https://example.com/" size="small" style="margin-right:10px" variant="link color">Link color small</em9-button>
  <em9-button href="https://example.com/" size="medium" style="margin-right:10px" variant="link color">Link color medium </em9-button>
  <em9-button href="https://example.com/" size="large" style="margin-right:10px" variant="link color">Link color large</em9-button>
  <em9-button href="https://example.com/" size="x-large" style="margin-right:10px" variant="link color">Link color x-large</em9-button>
  <em9-button href="https://example.com/" size="2x-large" style="margin-right:10px" variant="link color">2x-large</em9-button>
</div>
```

```jsx react
import { em9Button,em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button size="xx-small">XX-Small</em9Button>
      <em9Button size="x-small">X-Small</em9Button>
      <em9Button size="small">Small</em9Button>
      <em9Button size="medium">Medium</em9Button>
      <em9Button size="large">Large</em9Button>
      <em9Button size="x-large">Extra Large</em9Button>
      <em9Button size="2x-large">2x Large</em9Button>
    </div>
    <h3>For icon only sizes</h3>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button size="xx-small" onlyicon>
        <em9Icon name="linear-setting-2" label="Settings"></em9Icon>
      </em9Button>
      <em9Button size="x-small" onlyicon>
        <em9Icon name="linear-setting-2" label="Settings"></em9Icon>
      </em9Button>
      <em9Button size="small" onlyicon>
        <em9Icon name="linear-setting-2" label="Settings"></em9Icon>
      </em9Button>
      <em9Button size="medium" onlyicon>
       <em9Icon name="linear-setting-2" label="Settings"></em9Icon>
      </em9Button>
      <em9Button size="large" onlyicon>
        <em9Icon name="linear-setting-2" label="Settings"></em9Icon>
      </em9Button>
      <em9Button size="x-large" onlyicon>
        <em9Icon name="linear-setting-2" label="Settings"></em9Icon>
      </em9Button>
      <em9Button size="2x-large" onlyicon>
        <em9Icon name="linear-setting-2" label="Settings"></em9Icon>
      </em9Button>
    </div>
    <h3>link variant sizes<h3>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button href="https://example.com/" size="xx-small" style="margin-right:10px" variant="link color">Link color xx-small</em9Button>
      <em9Button href="https://example.com/" size="x-small" style="margin-right:10px" variant="link color">Link color x-small</em9Button>
      <em9Button href="https://example.com/" size="small" style="margin-right:10px" variant="link color">Link color small</em9Button>
      <em9Button href="https://example.com/" size="medium" style="margin-right:10px" variant="link color">Link color medium </em9Button>
      <em9Button href="https://example.com/" size="large" style="margin-right:10px" variant="link color">Link color large</em9Button>
      <em9Button href="https://example.com/" size="x-large" style="margin-right:10px" variant="link color">Link color x-large</em9Button>
      <em9Button href="https://example.com/" size="2x-large" style="margin-right:10px" variant="link color">2x-large</em9Button>
    </div>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button size="xx-small" pill>xx-Small</em9-button>
  <em9-button size="x-small" pill>x-Small</em9-button>
  <em9-button size="small" pill>Small</em9-button>
  <em9-button size="medium" pill>Medium</em9-button>
  <em9-button size="large" pill>Large</em9-button>
  <em9-button size="x-large" pill>x-Large</em9-button>
  <em9-button size="2x-large" pill>2x-Large</em9-button>
</div>
```

```jsx react
import { em9Button } from 'em9webcomponents/dist/react';
const App = () => (
  <>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button size="xx-small" pill>xx-Small</em9Button>
      <em9Button size="x-small" pill>x-Small</em9Button>
      <em9Button size="small" pill>Small</em9Button>
      <em9Button size="medium" pill>Medium</em9Button>
      <em9Button size="large" pill>Large</em9Button>
      <em9Button size="x-large" pill>x-Large</em9Button>
      <em9Button size="2x-large" pill>2x-Large</em9Button>
    </div>    
  </>
);
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
<em9-button variant="secondary gray" size="xx-small" onlyicon circle>
  <em9-icon name="linear-setting-2" label="Settings"></em9-icon>
</em9-button>
<em9-button variant="secondary gray" size="x-small" onlyicon circle>
  <em9-icon name="linear-setting-2" label="Settings"></em9-icon>
</em9-button>
<em9-button variant="secondary gray" size="small" onlyicon circle>
  <em9-icon name="linear-setting-2" label="Settings"></em9-icon>
</em9-button>

<em9-button variant="secondary gray" size="medium" onlyicon circle>
  <em9-icon name="linear-setting-2" label="Settings"></em9-icon>
</em9-button>

<em9-button variant="secondary gray" size="large" onlyicon circle>
  <em9-icon name="linear-setting-2" label="Settings"></em9-icon>
</em9-button>
<em9-button variant="secondary gray" size="x-large" onlyicon circle>
  <em9-icon name="linear-setting-2" label="Settings"></em9-icon>
</em9-button>
<em9-button variant="secondary gray" size="2x-large" onlyicon circle>
  <em9-icon name="linear-setting-2" label="Settings"></em9-icon>
</em9-button>
</div>
```

```jsx react
import { em9Button, em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
  <>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button variant="secondary gray" size="xx-small" onlyicon circle>
        <em9Icon name="linear-setting-2" label="Settings"></em9Icon>
      </em9Button>
      <em9Button variant="secondary gray" size="x-small" onlyicon circle>
        <em9Icon name="linear-setting-2" label="Settings"></em9Icon>
      </em9Button>
      <em9Button variant="secondary gray" size="small" onlyicon circle>
        <em9Icon name="linear-setting-2" label="Settings"></em9Icon>
      </em9Button>

      <em9Button variant="secondary gray" size="medium" onlyicon circle>
        <em9Icon name="linear-setting-2" label="Settings"></em9Icon>
      </em9Button>

      <em9Button variant="secondary gray" size="large" onlyicon circle>
        <em9Icon name="linear-setting-2" label="Settings"></em9Icon>
      </em9Button>
      <em9Button variant="secondary gray" size="x-large" onlyicon circle>
        <em9Icon name="linear-setting-2" label="Settings"></em9Icon>
      </em9Button>
      <em9Button variant="secondary gray" size="2x-large" onlyicon circle>
        <em9Icon name="linear-setting-2" label="Settings"></em9Icon>
      </em9Button>
    </div>
  </>
);
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. <kbd>CMD/CTRL/SHIFT + CLICK</kbd>) and exposes the `target` and `download` attributes.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button href="https://example.com/">Link</em9-button>
  <em9-button href="https://example.com/" target="_blank">New Window</em9-button>
  <em9-button href="/assets/images/em9_logo.svg" download="em9.svg">Download</em9-button>
  <em9-button href="https://example.com/" disabled>Disabled</em9-button>
</div>
```

```jsx react
import { em9Button } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button href="https://example.com/">Link</em9Button>
      <em9Button href="https://example.com/" target="_blank">New Window</em9Button>
      <em9Button href="/assets/images/em9_logo.svg" download="em9.svg">Download</em9Button>
      <em9Button href="https://example.com/" disabled>Disabled</em9Button>
    </div>
  </>
);
```

?> When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).

### Setting a Custom Width

As expected, buttons can be given a custom width by setting the `width` attribute. This is useful for making buttons span the full width of their container on smaller screens.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
	<em9-button variant="primary" size="small" style="width: 100%; margin-bottom: 1rem;">Small</em9-button>
	<em9-button variant="primary" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</em9-button>
	<em9-button variant="primary" size="large" style="width: 100%;">Large</em9-button>
</div>
```

```jsx react
import { em9Button } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button variant="primary" size="small" style="width: 100%; margin-bottom: 1rem;">Small</em9Button>
      <em9Button variant="primary" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</em9Button>
      <em9Button variant="primary" size="large" style="width: 100%;">Large</em9Button>
    </div>
  </>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button variant="primary" size="small">
    <em9-icon slot="prefix" name="linear-setting-2"></em9-icon>
    Settings
  </em9-button>

  <em9-button variant="secondary gray" size="small">
    <em9-icon slot="suffix" name="outline-refresh-2"></em9-icon>
    Refresh
  </em9-button>

  <em9-button variant="secondary color" size="small">
    <em9-icon slot="prefix" name="bold-link-21"></em9-icon>
    <em9-icon slot="suffix" name="linear-folder-open"></em9-icon>
    Open
  </em9-button>


  <em9-button variant="tertiary gray">
    <em9-icon slot="prefix" name="linear-setting-2"></em9-icon>
    Settings
  </em9-button>

  <em9-button variant="tertiary color">
    <em9-icon slot="suffix" name="outline-refresh-2"></em9-icon>
    Refresh
  </em9-button>

  <em9-button variant="primary" destructive size="large">
    <em9-icon slot="suffix" name="outline-refresh-2"></em9-icon>
    Refresh
  </em9-button>

  <em9-button variant="secondary gray" destructive size="large">
    <em9-icon slot="prefix" name="bold-link-21"></em9-icon>
    <em9-icon slot="suffix" name="linear-folder-open"></em9-icon>
    Open
  </em9-button>



  <em9-button variant="secondary color" destructive size="x-large">
    <em9-icon slot="prefix" name="linear-setting-2"></em9-icon>
    Settings
  </em9-button>

  <em9-button variant="tertiary gray" destructive size="x-large">
    <em9-icon slot="prefix" name="bold-link-21"></em9-icon>
    <em9-icon slot="suffix" name="linear-folder-open"></em9-icon>
    Open
  </em9-button>


  <em9-button variant="tertiary color" destructive size="2x-large">
    <em9-icon slot="prefix" name="linear-setting-2"></em9-icon>
    Settings
  </em9-button>
</div>
<h3>Links variants</h3>

<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button variant="link gray" destructive size="2x-large">
    <em9-icon slot="suffix" name="outline-refresh-2"></em9-icon>
    Refresh
  </em9-button>

  <em9-button variant="link color" destructive size="2x-large">
    <em9-icon slot="prefix" name="bold-link-21"></em9-icon>
    <em9-icon slot="suffix" name="linear-folder-open"></em9-icon>
    Open
  </em9-button>

  <em9-button variant="link gray">
    <em9-icon slot="prefix" name="bold-link-21"></em9-icon>
    <em9-icon slot="suffix" name="linear-folder-open"></em9-icon>
    Open
  </em9-button>


  <em9-button variant="link color" size="large">
    <em9-icon slot="prefix" name="linear-setting-2"></em9-icon>
    Settings
  </em9-button>
</div>

```

```jsx react
import { em9Button, em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button variant="primary" size="small">
        <em9Icon slot="prefix" name="linear-setting-2"></em9Icon>
        Settings
      </em9Button>

      <em9Button variant="secondary gray" size="small">
        <em9Icon slot="suffix" name="outline-refresh-2"></em9Icon>
        Refresh
      </em9Button>

      <em9Button variant="secondary color" size="small">
        <em9Icon slot="prefix" name="bold-link-21"></em9Icon>
        <em9Icon slot="suffix" name="linear-folder-open"></em9Icon>
        Open
      </em9Button>


      <em9Button variant="tertiary gray">
        <em9Icon slot="prefix" name="linear-setting-2"></em9Icon>
        Settings
      </em9Button>

      <em9Button variant="tertiary color">
        <em9Icon slot="suffix" name="outline-refresh-2"></em9Icon>
        Refresh
      </em9Button>

      <em9Button variant="primary" destructive size="large">
        <em9Icon slot="suffix" name="outline-refresh-2"></em9Icon>
        Refresh
      </em9Button>

      <em9Button variant="secondary gray" destructive size="large">
        <em9Icon slot="prefix" name="bold-link-21"></em9Icon>
        <em9Icon slot="suffix" name="linear-folder-open"></em9Icon>
        Open
      </em9Button>



      <em9Button variant="secondary color" destructive size="x-large">
        <em9Icon slot="prefix" name="linear-setting-2"></em9Icon>
        Settings
      </em9Button>

      <em9Button variant="tertiary gray" destructive size="x-large">
        <em9Icon slot="prefix" name="bold-link-21"></em9Icon>
        <em9Icon slot="suffix" name="linear-folder-open"></em9Icon>
        Open
      </em9Button>


      <em9Button variant="tertiary color" destructive size="2x-large">
        <em9Icon slot="prefix" name="linear-setting-2"></em9Icon>
        Settings
      </em9Button>
    </div>
    <h3>Links variants</h3>

    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button variant="link gray" destructive size="2x-large">
        <em9Icon slot="suffix" name="outline-refresh-2"></em9Icon>
        Refresh
      </em9Button>

      <em9Button variant="link color" destructive size="2x-large">
        <em9Icon slot="prefix" name="bold-link-21"></em9Icon>
        <em9Icon slot="suffix" name="linear-folder-open"></em9Icon>
        Open
      </em9Button>

      <em9Button variant="link gray">
        <em9Icon slot="prefix" name="bold-link-21"></em9Icon>
        <em9Icon slot="suffix" name="linear-folder-open"></em9Icon>
        Open
      </em9Button>


      <em9Button variant="link color" size="large">
        <em9Icon slot="prefix" name="linear-setting-2"></em9Icon>
        Settings
      </em9Button>
    </div>

  </>
);
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button size="small" caret>Small</em9-button>
  <em9-button size="medium" caret>Medium</em9-button>
  <em9-button size="large" caret>Large</em9-button>
  <em9-button size="x-large" caret>Large</em9-button>
  <em9-button size="2x-large" caret>Large</em9-button>
</div>
```

```jsx react
import { em9Button } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Button size="small" caret>
      Small
    </em9Button>
    <em9Button size="medium" caret>
      Medium
    </em9Button>
    <em9Button size="large" caret>
      Large
    </em9Button>
  </>
);
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button variant="primary" loading>primary</em9-button>
  <em9-button variant="secondary gray" loading>secondary gray</em9-button>
  <em9-button variant="secondary color" loading>secondary color</em9-button>
  <em9-button variant="tertiary gray" loading>tertiary gray</em9-button>
  <em9-button variant="tertiary color" loading>tertiary color</em9-button>
</div>
```

```jsx react
import { em9Button } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button variant="primary" loading>primary</em9Button>
      <em9Button variant="secondary gray" loading>secondary gray</em9Button>
      <em9Button variant="secondary color" loading>secondary color</em9Button>
      <em9Button variant="tertiary gray" loading>tertiary gray</em9Button>
      <em9Button variant="tertiary color" loading>tertiary color</em9Button>
    </div>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-button variant="primary" disabled>primary</em9-button>
  <em9-button variant="secondary gray" disabled>secondary gray</em9-button>
  <em9-button variant="secondary color" disabled>secondary color</em9-button>
  <em9-button variant="tertiary gray" disabled>tertiary gray</em9-button>
  <em9-button variant="tertiary color" disabled>tertiary color</em9-button>
  <em9-button variant="primary" destructive disabled>Primary Drestructive</em9-button>
  <em9-button variant="secondary gray" destructive disabled>secondary destructive gray </em9-button>
  <em9-button variant="secondary color" destructive disabled>secondary destructive color</em9-button>
  <em9-button variant="tertiary gray" destructive disabled>tertiary destructive gray</em9-button>
  <em9-button variant="tertiary color" destructive disabled>tertiary destructive color</em9-button>
</div>
```

```jsx react
import { em9Button } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Button variant="primary" disabled>primary</em9Button>
      <em9Button variant="secondary gray" disabled>secondary gray</em9Button>
      <em9Button variant="secondary color" disabled>secondary color</em9Button>
      <em9Button variant="tertiary gray" disabled>tertiary gray</em9Button>
      <em9Button variant="tertiary color" disabled>tertiary color</em9Button>
      <em9Button variant="primary" destructive disabled>Primary Drestructive</em9Button>
      <em9Button variant="secondary gray" destructive disabled>secondary destructive gray </em9Button>
      <em9Button variant="secondary color" destructive disabled>secondary destructive color</em9Button>
      <em9Button variant="tertiary gray" destructive disabled>tertiary destructive gray</em9Button>
      <em9Button variant="tertiary color" destructive disabled>tertiary destructive color</em9Button>
    </div>
  </>
);
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `em9-button[variant="primary"]`).

```html preview
<em9-button class="pink">Pink Button</em9-button>

<style>
  em9-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --em9-input-height-medium: 48px;
    --em9-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--em9-transition-medium) transform ease, var(--em9-transition-medium) border ease;
  }

  em9-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  em9-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  em9-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```

```jsx react
import { em9Button } from 'em9webcomponents/dist/react';
const css=`em9-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --em9-input-height-medium: 48px;
    --em9-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--em9-transition-medium) transform ease, var(--em9-transition-medium) border ease;
  }

  em9-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  em9-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  em9-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }`;
const App = () => (
  <>
   <em9Button class="pink">Pink Button</em9Button>

<style>{css}</style>
);
```

[component-metadata:em9-button]
