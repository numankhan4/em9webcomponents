# Radio Group

[component-header:em9-radio-group]

Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.

```html preview
<em9-radio-group label="Select an option">
  <em9-radio name="option" value="1" label="Basic Plan" checked></em9-radio>
  <em9-radio name="option" value="2" label="Primary Plan"></em9-radio>
  <em9-radio name="option" value="3" label="Luxury Plan"></em9-radio>
</em9-radio-group>
```

```jsx react
import { em9Radio, em9RadioGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <em9RadioGroup label="Select an option">
    <em9Radio name="option" value="1" label="Basic Plan" checked>
      Option 1
    </em9Radio>
    <em9Radio name="option" value="2" label="Primary Plan">
      Option 2
    </em9Radio>
    <em9Radio name="option" value="3" label="Luxury Plan">
      Option 3
    </em9Radio>
  </em9RadioGroup>
);
```

## Examples

### Showing the Label

You can show the fieldset and legend that wraps the radio group using the `fieldset` attribute. If you don't use this option, you should still provide a label so screen readers announce the control correctly.

```html preview
<em9-radio-group label="Select an option" fieldset>
  <em9-radio name="option" value="1" label="Option 1" checked></em9-radio>
  <em9-radio name="option" value="2" label="Option 2"></em9-radio>
  <em9-radio name="option" value="3" label="Option 3">Option 3</em9-radio>
</em9-radio-group>
```

```jsx react
import { em9Radio, em9RadioGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <em9RadioGroup label="Select an option" fieldset>
    <em9Radio name="option" value="1" label="Option 1" checked>
      Option 1
    </em9Radio>
    <em9Radio name="option" value="2" label="Option 2">
      Option 2
    </em9Radio>
    <em9Radio name="option" value="3" label="Option 3">
      Option 3
    </em9Radio>
  </em9RadioGroup>
);
```

### Radio Buttons

[Radio buttons](/components/radio-button) offer an alternate way to display radio controls. In this case, an internal [button group](/components/button-group) is used to group the buttons into a single, cohesive control.

```html preview
<em9-radio-group label="Select an option">
  <em9-radio-button name="option" value="1" checked>Option 1</em9-radio-button>
  <em9-radio-button name="option" value="2">Option 2</em9-radio-button>
  <em9-radio-button name="option" value="3">Option 3</em9-radio-button>
</em9-radio-group>
```

```jsx react
import { em9RadioButton, em9RadioGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <em9RadioGroup label="Select an option">
    <em9RadioButton name="option" value="1" checked>
      Option 1
    </em9RadioButton>
    <em9RadioButton name="option" value="2">
      Option 2
    </em9RadioButton>
    <em9RadioButton name="option" value="3">
      Option 3
    </em9RadioButton>
  </em9RadioGroup>
);
```

[component-metadata:em9-radio-group]
