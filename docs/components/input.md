# Input

[component-header:em9-input]

Inputs collect data from the user.

```html preview
<em9-input name="email" label="Email" size="large" filled >
  <em9-icon slot="prefix" name="linear-sms"></em9-icon>
   <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
<br>
<em9-input name="email1" label="Email" size="medium">
  <em9-icon slot="prefix" name="linear-sms"></em9-icon>
   <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
<br>
<em9-input name="email2" label="Email" size="small" filled pill line>
  <em9-icon slot="prefix" name="linear-sms"></em9-icon>
   <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
```

Inputs with static labels.

```html preview
<em9-input label="First Name" size="small">
   <em9-icon slot="prefix" name="linear-sms"></em9-icon>
   <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
<br>
<em9-input label="First Name" prefix_label="http://" suffix_label=".com" size="small">
   <em9-icon slot="prefix" name="linear-sms"></em9-icon>
   <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
<br>
<em9-input label="First Name" size="large" filled>
   <em9-icon slot="prefix" name="linear-sms"></em9-icon>
   <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
<br>
<em9-input label="First Name" prefix_label="http://" suffix_label=".com" size="large" filled>
   <em9-icon slot="prefix" name="linear-sms"></em9-icon>
   <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
<br>
<em9-input label="First Name" name="fname" size="small" linestyled>
   <em9-icon slot="prefix" name="linear-sms"></em9-icon>
   <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
<br>
<em9-input label="First Name" name="fname" prefix_label="http://" suffix_label=".com" size="small" linestyled>
   <em9-icon slot="prefix" name="linear-sms"></em9-icon>
   <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
```

Inputs with Copy to clipboard action.

```html preview
<br>
<em9-input label="Last Name" name="lname" copy size="medium" size="small">
  <em9-icon slot="prefix" name="linear-sms"></em9-icon>
  <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
<br>
<em9-input label="Last Name" name="lname" copy size="medium" size="medium" filled>
  <em9-icon slot="prefix" name="linear-sms"></em9-icon>
  <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
<br>
<em9-input label="Last Name" name="lname" copy size="medium" size="large" linestyled>
  <em9-icon slot="prefix" name="linear-sms"></em9-icon>
  <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';

const App = () => <em9Input />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<em9-input label="What is your name?"></em9-input>
```

```jsx react
import { em9Icon, em9Input } from 'em9webcomponents/dist/react';

const App = () => <em9Input label="What is your name?" />;
```

### Line Styled

```html preview
<em9-input
  
  minlength="5"
  lineStyled
  help-text="What would you like people to call you?"
  disabled
  label="Test Label"
  placeholder="0000 000 000 000">
  <em9-icon name="bulk-3dcube" slot="suffix"></em9-icon>
</em9-input>

<br>
<em9-input
  copy
  minlength="5"
  lineStyled
  help-text="What would you like people to call you?"
  invalid
  label="Test Label"
  placeholder="0000 000 000 000">
  <em9-icon name="bulk-buy-crypto" slot="prefix"></em9-icon>
  <em9-icon name="bulk-3dcube" slot="suffix"></em9-icon>
</em9-input>
<br>

<em9-input
  minlength="5"
  lineStyled
  help-text="What would you like people to call you?"
  invalid
  label="Test Label"
  placeholder="0000 000 000 000">
   <em9-icon name="bulk-bucket" slot="prefix"></em9-icon>
  <em9-icon name="bulk-3dcube" slot="prefix"></em9-icon>
  
  <em9-icon name="bulk-triangle" slot="suffix"></em9-icon>
  <em9-icon name="bulk-3dcube" slot="suffix"></em9-icon>
</em9-input>
```

```jsx react
import { em9Icon, em9Input } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Input
    minlength="5"
    lineStyled
    help-text="What would you like people to call you?"
    invalid
    label="Test Label"
    placeholder="0000 000 000 000"
  >
    <em9Icon name="bulk-3dcube" slot="suffix"></em9Icon>
  </em9Input>
);
```

### Border Less With gray background

```html preview
<em9-input
  minlength="5"
  borderLess
  help-text="What would you like people to call you?"
  invalid
  label="Test Label"
  placeholder="0000 000 000 000"
>
</em9-input>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Input
    minlength="5"
    borderLess
    help-text="What would you like people to call you?"
    invalid
    label="Test Label"
    placeholder="0000 000 000 000"
  ></em9Input>
);
```

### Invalid State on minLength = 5

```html preview
<em9-input minlength="5"> </em9-input>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';

const App = () => <em9Input />;
```

### Valid or Success State

```html preview
<em9-input theme="success"></em9-input>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';

const App = () => <em9Input theme="success"></em9Input>;
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<em9-input label="Nickname" name="Nickname" help-text="What would you like people to call you?">
  <span slot="label_prefix">http://</span>
  <span slot="label_suffix">2</span>
</em9-input>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';

const App = () => <em9Input label="Nickname" help-text="What would you like people to call you?" />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<em9-input placeholder="Type something"></em9-input>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';

const App = () => <em9Input placeholder="Type something" />;
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html preview
<em9-input placeholder="Clearable" clearable></em9-input>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';

const App = () => <em9Input placeholder="Clearable" clearable />;
```

### Toggle Password

Add the `toggle-password` attribute to add a toggle button that will show the password when activated.

```html preview
<em9-input type="password" placeholder="Password Toggle" size="small" toggle-password></em9-input>
<br />
<em9-input type="password" placeholder="Password Toggle" size="medium" toggle-password></em9-input>
<br />
<em9-input type="password" placeholder="Password Toggle" size="large" toggle-password></em9-input>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Input type="password" placeholder="Password Toggle" size="small" toggle-password />
    <br />
    <em9Input type="password" placeholder="Password Toggle" size="medium" toggle-password />
    <br />
    <em9Input type="password" placeholder="Password Toggle" size="large" toggle-password />
  </>
);
```

### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html preview
<em9-input placeholder="Type something" filled></em9-input>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';

const App = () => <em9Input placeholder="Type something" filled />;
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

```html preview
<em9-input placeholder="Small" size="small" pill></em9-input>
<br />
<em9-input placeholder="Medium" size="medium" pill></em9-input>
<br />
<em9-input placeholder="Large" size="large" pill></em9-input>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Input placeholder="Small" size="small" pill />
    <br />
    <em9Input placeholder="Medium" size="medium" pill />
    <br />
    <em9Input placeholder="Large" size="large" pill />
  </>
);
```

### Input Types

The `type` attribute controls the type of input the browser renders.

```html preview
<em9-input type="email" placeholder="Email" help-text="This is a error message." size="small" filled>
  <em9-icon slot="prefix" name="linear-sms"></em9-icon>
  <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
<br>
<em9-input type="email" placeholder="Email" help-text="This is a error message.">
  <em9-icon slot="prefix" name="linear-sms"></em9-icon>
  <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
<br />
<em9-input type="email" placeholder="Email" help-text="This is a error message." size="large" lineStyled>
  <em9-icon slot="prefix" name="linear-sms"></em9-icon>
  <em9-icon slot="suffix" name="cs-linear-help-circle"></em9-icon>
</em9-input>
<br>
<br>
<br>
<em9-input placeholder="1,000.00" size="small" filled>
  <span slot="prefix" part="symbol">$</span>
  
  <div slot="suffix">
    <em9-tooltip tabindex="0" content="This is a error message." hoist>
      <em9-icon name="cs-linear-help-circle" label="Bold"></em9-icon>
    </em9-tooltip>
  </div>
  
  <div slot="suffix">
    <em9-select placement="bottom-end" connector hoist>
     <em9-menu-item>USD</em9-menu-item>
     <em9-menu-item value="EUR">EUR</em9-menu-item>
     <em9-menu-item value="PKR">PKR</em9-menu-item>         
    </em9-select>
  </div>
</em9-input>
<br>
<br>
<em9-input placeholder="1,000.00" size="medium" filled>
  <span slot="prefix" part="symbol">$</span>
  
  <div slot="suffix">
    <em9-tooltip tabindex="0" content="This is a error message." hoist>
      <em9-icon name="cs-linear-help-circle" label="Bold"></em9-icon>
    </em9-tooltip>
  </div>
  
  <div slot="suffix">
    <em9-select placement="bottom-end" connector hoist>
     <em9-menu-item>USD</em9-menu-item>
     <em9-menu-item value="EUR">EUR</em9-menu-item>
     <em9-menu-item value="PKR">PKR</em9-menu-item>         
    </em9-select>
  </div>
</em9-input>
<br>
<br>
<em9-input placeholder="1,000.00" size="large" filled>
  <span slot="prefix" part="symbol">$</span>
  
  <div slot="suffix">
    <em9-tooltip tabindex="0" content="This is a error message." hoist>
      <em9-icon name="cs-linear-help-circle" label="Bold"></em9-icon>
    </em9-tooltip>
  </div>
  
  <div slot="suffix">
    <em9-select placement="bottom-end" connector hoist>
     <em9-menu-item>USD</em9-menu-item>
     <em9-menu-item value="EUR">EUR</em9-menu-item>
     <em9-menu-item value="PKR">PKR</em9-menu-item>         
    </em9-select>
  </div>
</em9-input>
<br>
<br>
<em9-input disabled type="date" placeholder="Date"></em9-input>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Input type="email" placeholder="Email" />
    <br />
    <em9Input type="number" placeholder="Number" />
    <br />
    <em9Input type="date" placeholder="Date" />
  </>
);
```

### Disabled

Use the `disabled` attribute to disable an input.

```html preview
<em9-input placeholder="Disabled" size="small" disabled></em9-input>
<br />
<em9-input placeholder="Disabled" size="medium" disabled></em9-input>
<br />
<em9-input placeholder="Disabled" size="large" disabled></em9-input>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Input placeholder="Disabled" size="small" disabled />
    <br />
    <em9Input placeholder="Disabled" size="medium" disabled />
    <br />
    <em9Input placeholder="Disabled" size="large" disabled />
  </>
);
```

### Sizes

Use the `size` attribute to change an input's size.

```html preview
<em9-input placeholder="Small" size="small"></em9-input>
<br />
<em9-input placeholder="Medium" size="medium"></em9-input>
<br />
<em9-input placeholder="Large" size="large"></em9-input>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Input placeholder="Small" size="small" />
    <br />
    <em9Input placeholder="Medium" size="medium" />
    <br />
    <em9Input placeholder="Large" size="large" />
  </>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<em9-input placeholder="Small" size="small">
  <em9-icon name="outline-brush-2" slot="prefix"></em9-icon>
  <em9-icon name="bulk-3dcube" slot="suffix"></em9-icon>
</em9-input>
<br />
<em9-input placeholder="Medium" size="medium">
  <em9-icon name="outline-brush-2" slot="prefix"></em9-icon>
  <em9-icon name="bulk-3dcube" slot="suffix"></em9-icon>
</em9-input>
<br />
<em9-input placeholder="Large" size="large">
  <em9-icon name="outline-brush-2" slot="prefix"></em9-icon>
  <em9-icon name="bulk-3dcube" slot="suffix"></em9-icon>
</em9-input>
<br />
<em9-input placeholder="Large" size="large">
  <em9-icon name="check" slot="prefix"></em9-icon>
</em9-input>
```

```jsx react
import { em9Icon, em9Input } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Input placeholder="Small" size="small">
      <em9Icon name="outline-brush-2" slot="prefix"></em9Icon>
      <em9Icon name="bulk-3dcube" slot="suffix"></em9Icon>
    </em9Input>
    <br />
    <em9Input placeholder="Medium" size="medium">
      <em9Icon name="outline-brush-2" slot="prefix"></em9Icon>
      <em9Icon name="bulk-3dcube" slot="suffix"></em9Icon>
    </em9Input>
    <br />
    <em9Input placeholder="Large" size="large">
      <em9Icon name="outline-brush-2" slot="prefix"></em9Icon>
      <em9Icon name="bulk-3dcube" slot="suffix"></em9Icon>
    </em9Input>
  </>
);
```

### Customizing Label Position

Use parts to customize the label's position.

```html preview
<em9-input class="label-on-left" label="Name"></em9-input><br />
<em9-input class="label-on-left" label="Email" type="email"></em9-input>

<style>
  .label-on-left::part(form-control) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .label-on-left::part(form-control-label) {
    flex: 0 0 auto;
    width: 60px;
    text-align: right;
  }

  .label-on-left::part(form-control-input) {
    flex: 1 1 auto;
  }
</style>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';
const css=`.label-on-left::part(form-control) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .label-on-left::part(form-control-label) {
    flex: 0 0 auto;
    width: 60px;
    text-align: right;
  }

  .label-on-left::part(form-control-input) {
    flex: 1 1 auto;
  }`
const App = () =>(
<em9Input class="label-on-left" label="Name"></em9Input><br />
<em9Input class="label-on-left" label="Email" type="email"></em9Input>

<style>{css}</style>
);
```

[component-metadata:em9-input]
