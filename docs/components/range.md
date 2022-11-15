# Range

[component-header:em9-range]

Ranges allow the user to select a single value within a given range using a slider.

```html preview
<em9-range></em9-range>
```

```jsx react
import { em9Range } from 'em9webcomponents/dist/react';

const App = () => <em9Range />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the range an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<em9-range label="Volume" min="0" max="100"></em9-input>
```

```jsx react
import { em9Range } from 'em9webcomponents/dist/react';

const App = () => <em9Range label="Volume" min={0} max={100} />;
```

### Help Text

Add descriptive help text to a range with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<em9-range
  label="Volume"
  help-text="Controls the volume of the current song."
  min="0"
  max="100"
></em9-input>
```

```jsx react
import { em9Range } from 'em9webcomponents/dist/react';

const App = () => <em9Range label="Volume" help-text="Controls the volume of the current song." min={0} max={100} />;
```

### Min, Max, and Step

Use the `min` and `max` attributes to set the range's minimum and maximum values, respectively. The `step` attribute determines the value's interval when increasing and decreasing.

```html preview
<em9-range min="0" max="10" step="1"></em9-range>
```

```jsx react
import { em9Range } from 'em9webcomponents/dist/react';

const App = () => <em9Range min={0} max={10} step={1} />;
```

### Disabled

Use the `disabled` attribute to disable a slider.

```html preview
<em9-range disabled></em9-range>
```

```jsx react
import { em9Range } from 'em9webcomponents/dist/react';

const App = () => <em9Range disabled />;
```

### Tooltip Placement

By default, the tooltip is shown on top. Set `tooltip` to `bottom` to show it below the slider.

```html preview
<em9-range tooltip="bottom"></em9-range>
```

```jsx react
import { em9Range } from 'em9webcomponents/dist/react';

const App = () => <em9Range tooltip="bottom" />;
```

### Disable the Tooltip

To disable the tooltip, set `tooltip` to `none`.

```html preview
<em9-range tooltip="none"></em9-range>
```

```jsx react
import { em9Range } from 'em9webcomponents/dist/react';

const App = () => <em9Range tooltip="none" />;
```

### Custom Track Colors

You can customize the active and inactive portions of the track using the `--track-color-active` and `--track-color-inactive` custom properties.

```html preview
<em9-range
  style="
  --track-color-active: var(--em9-color-primary-600);
  --track-color-inactive: var(--em9-color-primary-100);
"
></em9-range>
```

```jsx react
import { em9Range } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Range
    style={{
      '--track-color-active': 'var(--em9-color-primary-600)',
      '--track-color-inactive': 'var(--em9-color-primary-200)'
    }}
  />
);
```

### Custom Tooltip Formatter

You can change the tooltip's content by setting the `tooltipFormatter` property to a function that accepts the range's value as an argument.

```html preview
<em9-range min="0" max="100" step="1" class="range-with-custom-formatter"></em9-range>

<script>
  const range = document.querySelector('.range-with-custom-formatter');
  range.tooltipFormatter = value => `Total - ${value}%`;
</script>
```

```jsx react
import { em9Range } from 'em9webcomponents/dist/react';

const App = () => <em9Range min={0} max={100} step={1} tooltipFormatter={value => `Total - ${value}%`} />;
```

[component-metadata:em9-range]
