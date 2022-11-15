# Color Picker

[component-header:em9-color-picker]

Color pickers allow the user to select a color.

```html preview
<em9-color-picker label="Select a color"></em9-color-picker>
```

```jsx react
import { em9ColorPicker } from 'em9webcomponents/dist/react';

const App = () => <em9ColorPicker label="Select a color" />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Initial Value

Use the `value` attribute to set an initial value for the color picker.

```html preview
<em9-color-picker value="#4a90e2" label="Select a color"></em9-color-picker>
```

```jsx react
import { em9ColorPicker } from 'em9webcomponents/dist/react';

const App = () => <em9ColorPicker value="#4a90e2" label="Select a color" />;
```

### Opacity

Use the `opacity` attribute to enable the opacity slider. When this is enabled, the value will be displayed as HEXA, RGBA, or HSLA based on `format`.

```html preview
<em9-color-picker opacity label="Select a color"></em9-color-picker>
```

```jsx react
import { em9ColorPicker } from 'em9webcomponents/dist/react';

const App = () => <em9ColorPicker opacity label="Select a color" />;
```

### Formats

Set the color picker's format with the `format` attribute. Valid options include `hex`, `rgb`, and `hsl`. Note that the color picker's input will accept any parsable format (including CSS color names) regardless of this option.

To prevent users from toggling the format themselves, add the `no-format-toggle` attribute.

```html preview
<em9-color-picker format="hex" value="#4a90e2" label="Select a color"></em9-color-picker>
<em9-color-picker format="rgb" value="rgb(80, 227, 194)" label="Select a color"></em9-color-picker>
<em9-color-picker format="hsl" value="hsl(290, 87%, 47%)" label="Select a color"></em9-color-picker>
```

```jsx react
import { em9ColorPicker } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9ColorPicker format="hex" value="#4a90e2" />
    <em9ColorPicker format="rgb" value="rgb(80, 227, 194)" />
    <em9ColorPicker format="hsl" value="hsl(290, 87%, 47%)" />
  </>
);
```

### Sizes

Use the `size` attribute to change the color picker's trigger size.

```html preview
<em9-color-picker size="small" label="Select a color"></em9-color-picker>
<em9-color-picker size="medium" label="Select a color"></em9-color-picker>
<em9-color-picker size="large" label="Select a color"></em9-color-picker>
```

```jsx react
import { em9ColorPicker } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9ColorPicker size="small" label="Select a color" />
    <em9ColorPicker size="medium" label="Select a color" />
    <em9ColorPicker size="large" label="Select a color" />
  </>
);
```

### Inline

The color picker can be rendered inline instead of in a dropdown using the `inline` attribute.

```html preview
<em9-color-picker inline label="Select a color"></em9-color-picker>
```

```jsx react
import { em9ColorPicker } from 'em9webcomponents/dist/react';

const App = () => <em9ColorPicker inline label="Select a color" />;
```

[component-metadata:em9-color-picker]
