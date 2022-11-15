# Radio

[component-header:em9-radio]

Radios allow the user to select a single Option from a group.

Radios are designed to be used with [radio groups](/components/radio-group).

```html preview
<em9-radio-group>
  <em9-radio name="option" value="1" checked label="Basic Plan"></em9-radio>
  <em9-radio name="option" value="2" label="Luxury Plan"></em9-radio>
  <em9-radio name="option" value="3" label="premium Plan"></em9-radio>
</em9-radio-group>
```

```jsx react
import { em9Radio, em9RadioGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9RadioGroup>
      <em9Radio name="option" value="1" label="Basic Plan"></em9Radio>
      <em9Radio name="option" value="2" label="Luxury Plan"></em9Radio>
      <em9Radio name="option" value="3" label="Premium Plan"></em9Radio>
    </em9RadioGroup>
  </>
);
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

To set the initial checked state, use the `checked` attribute.

```html preview
<em9-radio-group>
  <em9-radio name="option" value="1" label="Option 1" checked></em9-radio>
  <em9-radio name="option" value="2" label="Option 2"></em9-radio>
  <em9-radio name="option" value="3" label="Option 3"></em9-radio>
</em9-radio-group>
```

```jsx react
import { em9Radio, em9RadioGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <em9RadioGroup>
    <em9Radio name="option" value="1" label="Option 1" checked></em9Radio>
    <em9Radio name="option" value="2" label="Option 2"></em9Radio>
    <em9Radio name="option" value="3" label="Option 3"></em9Radio>
  </em9RadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html preview
<em9-radio-group>
  <em9-radio name="option" value="1" label="Option 1" disabled></em9-radio>
  <em9-radio name="option" value="2" label="Option 2" disabled filled checked></em9-radio>
  <em9-radio name="option" value="3" label="Option 3" disabled checked></em9-radio>
</em9-radio-group>
```

```jsx react
import { em9Radio, em9RadioGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <em9RadioGroup>
    <em9Radio name="option" value="1" label="Option 1" disabled></em9Radio>
    <em9Radio name="option" value="2" label="Option 2" disabled filled checked></em9Radio>
    <em9Radio name="option" value="3" label="Option 3" disabled checked></em9Radio>
  </em9RadioGroup>
);
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <em9-radio-group label="Select an option">
    <em9-radio name="a" value="1" label="Not me" checked></em9-radio>
    <em9-radio name="a" value="2" label="Me neither"></em9-radio>
    <em9-radio name="a" value="3" label="Choose me"></em9-radio>
  </em9-radio-group>
  <br />
  <em9-button type="submit" variant="primary">Submit</em9-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const radio = form.querySelectorAll('em9-radio')[2];
  const errorMessage = 'You must choose this option';
  // Set initial validity as soon as the element is defined
  customElements.whenDefined('em9-radio').then(() => {
    radio.setCustomValidity(errorMessage);
  });
  // Update validity when a selection is made
  form.addEventListener('em9-change', () => {
    const isValid = radio.checked;
    radio.setCustomValidity(isValid ? '' : errorMessage);
  });
  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { useEffect, useRef } from 'react';
import { em9Button, em9Icon, em9Radio, em9RadioGroup } from 'em9webcomponents/dist/react';
const App = () => {
  const radio = useRef(null);
  const errorMessage = 'You must choose this option';
  function handleChange(event) {
    radio.current.setCustomValidity(radio.current.checked ? '' : errorMessage);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }
  useEffect(() => {
    radio.current.setCustomValidity(errorMessage);
  }, []);
  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <em9RadioGroup label="Select an option">
        <em9Radio name="a" value="1" label="Not me" checked onem9Change={handleChange}></em9Radio>
        <em9Radio name="a" value="2" label="Me neither" onem9Change={handleChange}></em9Radio>
        <em9Radio ref={radio} name="a" value="3" label="Choose me" onem9Change={handleChange}></em9Radio>
      </em9RadioGroup>
      <br />
      <em9Button type="submit" variant="primary">
        Submit
      </em9Button>
    </form>
  );
};
```

### Size Variations

Use the `size` attribute to change radio's size.

```html preview
<em9-radio-group>
  <em9-radio size="xsmall" label="Extra small"></em9-radio>
  <em9-radio size="small" label="Small"></em9-radio>
  <em9-radio size="medium" label="Medium"></em9-radio>
  <em9-radio size="large" label="Large"></em9-radio>
</em9-radio-group>
```

```jsx react
import { em9radio } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9RadioGroup>
      <em9Radio size="xsmall" label="Extra small"></em9Radio>
      <em9Radio size="small" label="Small"></em9Radio>
      <em9Radio size="medium" label="Medium"></em9Radio>
      <em9Radio size="large" label="Large"></em9Radio>
    </em9RadioGroup>
  </>
);
```

### Filled Variations

Use the `filled` attribute to make radio button filled.

```html preview
<em9-radio-group>
  <em9-radio name="option" value="1" label="Option 1" filled checked></em9-radio>
  <em9-radio name="option" value="2" label="Option 2" filled></em9-radio>
  <em9-radio name="option" value="3" label="Option 3" filled></em9-radio>
</em9-radio-group>
```

```jsx react
import { em9Radio, em9RadioGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <em9RadioGroup>
    <em9Radio name="option" value="1" label="Option 1" filled checked></em9Radio>
    <em9Radio name="option" value="2" label="Option 2" filled></em9Radio>
    <em9Radio name="option" value="3" label="Option 3" filled></em9Radio>
  </em9RadioGroup>
);
```

Use the `subLablel` attribute to take text other than main lable.

```html preview
<em9-radio-group>
  <em9-radio size="xsmall" name="option" value="1" label="Remember me" subLabel="Save my login details for next time.">
  </em9-radio>
  <em9-radio size="small" name="option" value="1" label="Remember me" subLabel="Save my login details for next time.">
  </em9-radio>
  <em9-radio size="medium" name="option" value="1" label="Remember me" subLabel="Save my login details for next time.">
  </em9-radio>
  <em9-radio size="large" name="option" value="1" label="Remember me" subLabel="Save my login details for next time.">
  </em9-radio>
</em9-radio-group>
```

```jsx react
import { em9Radio, em9RadioGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9RadioGroup>
      <em9Radio
        size="xsmall"
        name="option"
        value="1"
        label="Remember me"
        subLabel="Save my login details for next time."
      ></em9Radio>
      <em9Radio
        size="small"
        name="option"
        value="1"
        label="Remember me"
        subLabel="Save my login details for next time."
      ></em9Radio>
      <em9Radio
        size="medium"
        name="option"
        value="1"
        label="Remember me"
        subLabel="Save my login details for next time."
      ></em9Radio>
      <em9Radio
        size="large"
        name="option"
        value="1"
        label="Remember me"
        subLabel="Save my login details for next time."
      ></em9Radio>
    </em9RadioGroup>
  </>
);
```

Use the `tick` attribute to change icon to tick.

```html preview
<em9-radio-group>
  <em9-radio name="option" value="1" label="Remember me" filled tick checked> </em9-radio>
  <em9-radio name="option" value="2" label="Option 2" tick></em9-radio>
  <em9-radio name="option" value="3" label="Option 3" tick></em9-radio>
</em9-radio-group>
```

```jsx react
import { em9Radio, em9RadioGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9RadioGroup>
      <em9Radio name="option" value="1" label="Remember me" filled tick checked></em9Radio>
      <em9Radio name="option" value="2" label="Option 2" filled tick></em9Radio>
      <em9Radio name="option" value="3" label="Option 3" filled tick></em9Radio>
    </em9RadioGroup>
  </>
);
```

### Custom style

This example demonstrates how to style radio button using a custom class.

```html preview
<style>
  /*STYLE FOR CHECKED*/
  em9-radio[checked].error::part(control) {
    border-color: red;
    color: red;
    background: white;

    /*for focus*/
    --em9-focus-ring: solid 4px rgba(255, 0, 0, 0.2);
  }

  em9-radio.error::part(label) {
    color: gray;
  }

  /*Hover for checked*/
  em9-radio.error:hover::part(control) {
    background: beige;
    border-color: red;
  }
  /*Hover for Unchecked*/
  em9-radio.error[checked]:hover::part(control) {
    background: red;
    border-color: red;
    color: white;
  }
</style>
<em9-radio-group>
  <em9-radio name="option" class="error" value="1" label="Option 1" checked></em9-radio>
  <em9-radio name="option" class="error" value="2" label="Option 2"></em9-radio>
  <em9-radio name="option" class="error" value="3" label="Option 3"></em9-radio>
</em9-radio-group>
```

```jsx react
import { em9Radio, em9RadioGroup } from 'em9webcomponents/dist/react';
 const css=`
/*STYLE FOR CHECKED*/
em9-radio[checked].error::part(control)
{border-color:red;
color:red;
background:white;

/*for focus*/
--em9-focus-ring:solid 4px rgba(255,0,0,0.2);
--em9-focus-ring-offset:0;
}

em9-radio.error::part(label)
{color:gray;}

/*Hover for Unchecked*/
em9-radio.error::part(control):hover
{background:beige;
border-color:red;}
`
const App = () => (

  <em9RadioGroup>
    <em9Radio name="option" value="1" label="Option 1" className="error" checked></em9Radio>
    <em9Radio name="option" value="2" label="Option 2" className="error" ></em9Radio>
    <em9Radio name="option" value="3" label="Option 3" className="error"></em9Radio>
  </em9RadioGroup>
  <style>{css}</style>
);
```

### Custom Label

```html preview
<em9-radio-group>
  <em9-radio>
    <em9-avatar slot="label" image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png" name="Amir Wain" info="Chief Executive Officer" label="Amir Wain">
  </em9-radio>
  <em9-radio>
    <em9-avatar slot="label"  image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"  label="Amir Wain" name="Amir Wain" info="Chief Executive Officer" >
  </em9-radio>
</em9-radio-group>
```

```jsx react
import { em9Checkbox } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9RadioGroup>
      <em9Radio>
        <em9Avatar
          slot="label"
          image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png"
          name="Amir Wain"
          info="Chief Executive Officer"
          label="Amir Wain"
        />
      </em9Radio>
      <em9Radio>
        <em9Avatar
          slot="label"
          image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          label="Amir Wain"
          name="Amir Wain"
          info="Chief Executive Officer"
        />
      </em9Radio>
    </em9RadioGroup>
  </>
);
```

[component-metadata:em9-radio]
