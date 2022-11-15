# Checkbox

[component-header:em9-checkbox]

Checkboxes allow the user to toggle an option on or off.

```html preview
<em9-checkbox label="Checkbox"></em9-checkbox>
```

```jsx react
import { em9Checkbox } from 'em9webcomponents/dist/react';

const App = () => <em9Checkbox label="Checkbox"></em9Checkbox>;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html preview
<em9-checkbox checked label="Checked"></em9-checkbox>
```

```jsx react
import { em9Checkbox } from 'em9webcomponents/dist/react';

const App = () => <em9Checkbox label="Checked" checked></em9Checkbox>;
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html preview
<em9-checkbox indeterminate label="Indeterminate"></em9-checkbox>
```

```jsx react
import { em9Checkbox } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Checkbox indeterminate label="Indeterminate">
    Indeterminate
  </em9Checkbox>
);
```

### Circle type

Use the `round` to change checkbox's type to circle.

```html preview
<em9-checkbox round checked label="Circle check"></em9-checkbox>
```

```jsx react
import { em9Checkbox } from 'em9webcomponents/dist/react';

const App = () => <em9Checkbox round checked label="Circle check"></em9Checkbox>;
```

### Filled for square

Use the `filled` attribute to make square checkbox filled.

```html preview
<em9-checkbox filled checked label="Circle check filled"></em9-checkbox>
<br />
<em9-checkbox indeterminate filled label="Indeterminate filled">Indeterminate</em9-checkbox>
```

```jsx react
import { em9Checkbox } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Checkbox filled checked label="Circle check filled"></em9Checkbox>
    <br />
    <em9Checkbox indeterminate filled label="Indeterminate filled">
      Indeterminate
    </em9Checkbox>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html preview
<em9-checkbox disabled label="Disabled"></em9-checkbox>
<br />
<em9-checkbox disabled checked label="Checked Disabled"></em9-checkbox>
<br />
<em9-checkbox indeterminate disabled label="Indeterminate Disabled"></em9-checkbox>
<br />
<em9-checkbox disabled checked round label="Circle Checked Disabled"></em9-checkbox>
```

```jsx react
import { em9Checkbox } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Checkbox disabled label="Disabled"></em9Checkbox>
    <br />
    <em9Checkbox disabled checked label="Checked Disabled"></em9Checkbox>
    <br />
    <em9Checkbox indeterminate disabled label="Indeterminate Disabled"></em9Checkbox>
    <br />
    <em9Checkbox disabled checked round label="Circle Checked Disabled"></em9Checkbox>
  </>
);
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <em9-checkbox label="Check me"></em9-checkbox>
  <br />
  <em9-button type="submit" variant="primary" style="margin-top: 1rem;">Submit</em9-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('em9-checkbox');
  const errorMessage = `Don't forget to check me!`;
  // Set initial validity as soon as the element is defined
  customElements.whenDefined('em9-checkbox').then(() => {
    checkbox.setCustomValidity(errorMessage);
  });
  // Update validity on change
  checkbox.addEventListener('em9-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });
  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { useEffect, useRef } from 'react';
import { em9Button, em9Checkbox } from 'em9webcomponents/dist/react';
const App = () => {
  const checkbox = useRef(null);
  const errorMessage = `Don't forget to check me!`;
  function handleChange() {
    checkbox.current.setCustomValidity(checkbox.current.checked ? '' : errorMessage);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }
  useEffect(() => {
    checkbox.current.setCustomValidity(errorMessage);
  }, []);
  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <em9Checkbox ref={checkbox} onem9Change={handleChange} label="Check me"></em9Checkbox>
      <br />
      <em9Button type="submit" variant="primary" style={{ marginTop: '1rem' }}>
        Submit
      </em9Button>
    </form>
  );
};
```

### Sizes

Use the `size` attribute to change checkbox's size.

```html preview
<em9-checkbox size="xsmall" label="Extra small"></em9-checkbox>
<br />
<em9-checkbox size="small" label="Small"></em9-checkbox>
<br />
<em9-checkbox size="medium" label="Medium"></em9-checkbox>
<br />
<em9-checkbox size="large" label="Large">Large</em9-checkbox>
```

```jsx react
import { em9Checkbox } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Checkbox size="xsmall" label="Extra small"></em9Checkbox>
    <br />
    <em9Checkbox size="small" label="Small">
      Small
    </em9Checkbox>
    <br />
    <em9Checkbox size="medium" label="Medium">
      Medium
    </em9Checkbox>
    <br />
    <em9Checkbox size="large" label="Large">
      Large
    </em9Checkbox>
  </>
);
```

### With subtext

Use the `slot="subtext" ` attribute to Add a sub text below main text and add `class="checkbox__subtext"` for styling.

```html preview
<em9-checkbox size="xsmall" label="Remember me" subLabel="Save my login details for next time."> </em9-checkbox>
<br />
<br />
<em9-checkbox size="small" label="Remember me" subLabel="Save my login details for next time."> </em9-checkbox>
<br />
<br />
<em9-checkbox size="medium" label="Remember me" subLabel="Save my login details for next time."> </em9-checkbox>
<br />
<br />
<em9-checkbox size="large" label="Remember me" subLabel="Save my login details for next time."> </em9-checkbox>
<br />
<br />
<em9-checkbox size="xsmall" checked round label="Remember me" subLabel="Save my login details for next time.">
</em9-checkbox>
<br />
<br />
<em9-checkbox checked round label="Remember me" subLabel="Save my login details for next time."> </em9-checkbox>
<br />
<br />
<em9-checkbox checked round size="medium" label="Remember me" subLabel="Save my login details for next time.">
</em9-checkbox>
<br />
<br />
<em9-checkbox size="large" checked round label="Remember me" subLabel="Save my login details for next time.">
</em9-checkbox>
<br />
<br />
<em9-checkbox size="large" checked round subLabel="Save my login details for next time."> </em9-checkbox>
```

```jsx react
import { em9Checkbox } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Checkbox size="xsmall" label="Remember me" subLabel="Save my login details for next time."></em9Checkbox>
    <br />
    <br />
    <em9Checkbox label="Remember me" subLabel="Save my login details for next time."></em9Checkbox>
    <br />
    <br />
    <em9Checkbox size="medium" label="Remember me" subLabel="Save my login details for next time."></em9Checkbox>
    <br />
    <br />
    <em9Checkbox size="large" label="Remember me" subLabel="Save my login details for next time."></em9Checkbox>
    <br />
    <br />
    <em9Checkbox
      size="xsmall"
      checked
      round
      label="Remember me"
      subLabel="Save my login details for next time."
    ></em9Checkbox>
    <br />
    <br />
    <em9Checkbox checked round label="Remember me" subLabel="Save my login details for next time."></em9Checkbox>
    <br />
    <br />
    <em9Checkbox
      size="medium"
      checked
      round
      label="Remember me"
      subLabel="Save my login details for next time."
    ></em9Checkbox>
    <br />
    <br />
    <em9Checkbox
      size="large"
      checked
      round
      label="Remember me"
      subLabel="Save my login details for next time."
    ></em9Checkbox>
  </>
);
```

### custom style

This example demonstrates how to style buttons using a custom class.

```html preview
<style>
  em9-checkbox.error:focus::part(control) {
    background: rgba(255, 0, 0, 0.05);
    border-color: red;
    --em9-focus-ring: solid 4px rgba(255, 0, 0, 0.2);
  }
  em9-checkbox.error:hover::part(control) {
    background: rgba(255, 0, 0, 0.15);
    border-color: red;
  }
  em9-checkbox[checked].error::part(control) {
    background: white;
    border-color: red;
    color: red;
    /*checked focus*/
    --em9-focus-ring: solid 4px rgba(255, 0, 0, 0.2);
  }
  em9-checkbox[checked].error:hover::part(control) {
    background: red;
    border-color: red;
    color: white;
  }
</style>
<em9-checkbox label="Checkbox" class="error"></em9-checkbox>
```

```jsx react
import { em9Checkbox } from 'em9webcomponents/dist/react';
const css = `em9-checkbox.error:focus::part(control){
     background:rgba(255,0,0,0.15);
     border-color:red;
     --em9-focus-ring:solid 4px rgba(255,0,0,0.2);
  }
  em9-checkbox.error:hover::part(control){
     background:rgba(255,0,0,0.15);
     border-color:red;
  }
  em9-checkbox[checked].error::part(control){
     background:white;
     border-color:red;
     color:red;
     /*checked focus*/
    --em9-focus-ring:solid 4px rgba(255,0,0,0.2);
  }
  em9-checkbox[checked].error:hover::part(control){
     background:red;
     border-color:red;
     color:white;
  }`;
const App = () => <em9Checkbox label="Checkbox" className="error"></em9Checkbox>;
<style>{css}</style>;
```

### Custom Label

```html preview
<em9-checkbox >
  <em9-avatar slot="label" image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png"name="Amir Wain" info="Chief Executive Officer" label="Amir Wain">
</em9-checkbox>
```

```jsx react
import { em9Checkbox } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Checkbox>
      <em9Avatar
        slot="label"
        image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png"
        name="Amir Wain"
        info="Chief Executive Officer"
        label="Amir Wain"
      ></em9Avatar>
    </em9Checkbox>
  </>
);
```

[component-metadata:em9-checkbox]

```

```
