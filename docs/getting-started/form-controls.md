# Form Controls

Every em9-Library component makes use of a [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) to encapsulate markup, styles, and behavior. One caveat of this approach is that native `<form>` elements do not recognize form controls located inside a shadow root.

em9-Library solves this problem by using the [`formdata`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/formdata_event) event, which is [available in all modern browsers](https://caniuse.com/mdn-api_htmlformelement_formdata_event). This means, when a form is submitted, em9-Library form controls will automatically append their values to the `FormData` object that's used to submit the form. In most cases, things will "just work." However, if you're using a form serialization library, it might need to be adapted to recognize em9-Library form controls.

?> If you're using an older browser that doesn't support the `formdata` event, a lightweight polyfill will be automatically applied to ensure forms submit as expected.

## A Note About Event Handling

em9-Library uses event listeners to intercept the form's `formdata` and `submit` events. This allows it to inject data and trigger validation as necessary. If you're also attaching an event listener to the form, _you must attach it after em9-Library form controls are connected to the DOM_, otherwise your logic will run before em9-Library has a chance to inject form data and validate form controls.

## Form Serialization

Serialization is just a fancy word for collecting form data. If you're relying on standard form submissions, e.g. `<form action="...">`, you can probably skip this section. However, most modern apps use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or a library such as [axios](https://github.com/axios/axios) to submit forms using JavaScript.

The [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) interface offers a standard way to serialize forms in the browser. You can create a `FormData` object from any `<form>` element like this.

```js
const form = document.querySelector('form');
const data = new FormData(form);

// All form control data is available in a FormData object
```

However, some folks find `FormData` tricky to work with or they need to pass a JSON payload to their server. To accommodate this, em9-Library offers a serialization utility that gathers form data and returns a simple JavaScript object instead.

```js
import { serialize } from 'em9webcomponents/dist/utilities/form.js';

const form = document.querySelector('form');
const data = serialize(form);

// All form control data is available in a plain object
```

This results in an object with name/value pairs that map to each form control. If more than one form control shares the same name, the values will be passed as an array, e.g. `{ name: ['value1', 'value2'] }`.

## Form Control Validation

Client-side validation can be enabled through the browser's [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) for em9-Library form controls. You can activate it using attributes such as `required`, `pattern`, `minlength`, and `maxlength`. em9-Library implements many of the same attributes as native form controls, but check each form control's documentation for a list of all supported properties.

As the user interacts with a form control, its `invalid` attribute will reflect its validity based on its current value and the constraints that have been defined. When a form control is invalid, the containing form will not be submitted. Instead, the browser will show the user a relevant error message. If you don't want to use client-side validation, you can suppress this behavior by adding `novalidate` to the surrounding `<form>` element.

All form controls support validation, but not all validation props are available for every component. Refer to a component's documentation to see which validation props it supports.

!> Client-side validation can be used to improve the UX of forms, but it is not a replacement for server-side validation. **You should always validate and sanitize user input on the server!**

### Required Fields

To make a field required, use the `required` prop. The form will not be submitted if a required form control is empty.

```html preview
<form class="input-validation-required">
  <em9-input name="name" label="Name" required></em9-input>
  <br />
  <em9-select label="Favorite Animal" clearable required>
    <em9-menu-item value="birds">Birds</em9-menu-item>
    <em9-menu-item value="cats">Cats</em9-menu-item>
    <em9-menu-item value="dogs">Dogs</em9-menu-item>
    <em9-menu-item value="other">Other</em9-menu-item>
  </em9-select>
  <br />
  <em9-textarea name="comment" label="Comment" required></em9-textarea>
  <br />
  <em9-checkbox required>Check me before submitting</em9-checkbox>
  <br /><br />
  <em9-button type="submit" variant="primary">Submit</em9-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-required');
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import {
  em9Button,
  em9Checkbox,
  em9Input,
  em9MenuItem,
  em9Select,
  em9Textarea
} from 'em9webcomponents/dist/react';

const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <em9Input name="name" label="Name" required />
      <br />
      <em9Select label="Favorite Animal" clearable required>
        <em9MenuItem value="birds">Birds</em9MenuItem>
        <em9MenuItem value="cats">Cats</em9MenuItem>
        <em9MenuItem value="dogs">Dogs</em9MenuItem>
        <em9MenuItem value="other">Other</em9MenuItem>
      </em9Select>
      <br />
      <em9Textarea name="comment" label="Comment" required></em9Textarea>
      <br />
      <em9Checkbox required>Check me before submitting</em9Checkbox>
      <br />
      <br />
      <em9Button type="submit" variant="primary">
        Submit
      </em9Button>
    </form>
  );
};
```

### Input Patterns

To restrict a value to a specific [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern), use the `pattern` attribute. This example only allows the letters A-Z, so the form will not submit if a number or symbol is entered. This only works with `<em9-input>` elements.

```html preview
<form class="input-validation-pattern">
  <em9-input name="letters" required label="Letters" pattern="[A-Za-z]+"></em9-input>
  <br />
  <em9-button type="submit" variant="primary">Submit</em9-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-pattern');
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { em9Button, em9Input } from 'em9webcomponents/dist/react';

const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <em9Input name="letters" required label="Letters" pattern="[A-Za-z]+" />
      <br />
      <em9Button type="submit" variant="primary">
        Submit
      </em9Button>
    </form>
  );
};
```

### Input Types

Some input types will automatically trigger constraints, such as `email` and `url`.

```html preview
<form class="input-validation-type">
  <em9-input variant="email" label="Email" placeholder="you@example.com" required></em9-input>
  <br />
  <em9-input variant="url" label="URL" placeholder="https://example.com/" required></em9-input>
  <br />
  <em9-button type="submit" variant="primary">Submit</em9-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-type');
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { em9Button, em9Input } from 'em9webcomponents/dist/react';

const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <em9Input variant="email" label="Email" placeholder="you@example.com" required />
      <br />
      <em9Input variant="url" label="URL" placeholder="https://example.com/" required />
      <br />
      <em9Button type="submit" variant="primary">
        Submit
      </em9Button>
    </form>
  );
};
```

### Custom Validation

To create a custom validation error, pass a non-empty string to the `setCustomValidity()` method. This will override any existing validation constraints. The form will not be submitted when a custom validity is set and the browser will show a validation error when the containing form is submitted. To make the input valid again, call `setCustomValidity()` again with an empty string.

```html preview
<form class="input-validation-custom">
  <em9-input label="Type 'em9'" required></em9-input>
  <br />
  <em9-button type="submit" variant="primary">Submit</em9-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-custom');
  const input = form.querySelector('em9-input');

  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });

  input.addEventListener('em9-input', () => {
    if (input.value === 'em9') {
      input.setCustomValidity('');
    } else {
      input.setCustomValidity("Hey, you're supposed to type 'em9' before submitting this!");
    }
  });
</script>
```

```jsx react
import { useRef, useState } from 'react';
import { em9Button, em9Input } from 'em9webcomponents/dist/react';

const App = () => {
  const input = useRef(null);
  const [value, setValue] = useState('');

  function handleInput(event) {
    setValue(event.target.value);

    if (event.target.value === 'em9') {
      input.current.setCustomValidity('');
    } else {
      input.current.setCustomValidity("Hey, you're supposed to type 'em9' before submitting this!");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <em9Input ref={input} label="Type 'em9'" required value={value} onSlInput={handleInput} />
      <br />
      <em9Button type="submit" variant="primary">
        Submit
      </em9Button>
    </form>
  );
};
```

?> Custom validation can be applied to any form control that supports the `setCustomValidity()` method. It is not limited to inputs and textareas.

### Custom Validation Styles

The `invalid` attribute reflects the form control's validity, so you can style invalid fields using the `[invalid]` selector. The example below demonstrates how you can give erroneous fields a different appearance. Type something other than "em9" to demonstrate this.

```html preview
<em9-input class="custom-input" label="Type Something" required pattern="em9">
  <small slot="help-text">Please enter "em9" to continue</small>
</em9-input>

<style>
  .custom-input[invalid]:not([disabled])::part(label),
  .custom-input[invalid]:not([disabled])::part(help-text) {
    color: var(--em9-color-danger-600);
  }

  .custom-input[invalid]:not([disabled])::part(base) {
    border-color: var(--em9-color-danger-500);
  }

  .custom-input[invalid]:focus-within::part(base) {
    box-shadow: 0 0 0 var(--em9-focus-ring-width) var(--em9-color-danger-500);
  }
</style>
```

```jsx react
import { em9Input } from 'em9webcomponents/dist/react';

const css = `
  .custom-input[invalid]:not([disabled])::part(label),
  .custom-input[invalid]:not([disabled])::part(help-text) {
    color: var(--em9-color-danger-600);
  }

  .custom-input[invalid]:not([disabled])::part(base) {      
    border-color: var(--em9-color-danger-500);
  } 

  .custom-input[invalid]:focus-within::part(base) {
    box-shadow: 0 0 0 var(--em9-focus-ring-width) var(--em9-color-danger-500);
  }
`;

const App = () => (
  <>
    <em9Input className="custom-input" required pattern="em9">
      <small slot="help-text">Please enter "em9" to continue</small>
    </em9Input>

    <style>{css}</style>
  </>
);
```

### Third-party Validation

To opt out of the browser's built-in validation and use your own, add the `novalidate` attribute to the form. This will ignore all constraints and prevent the browser from showing its own warnings when form controls are invalid.

Remember that the `invalid` attribute on form controls reflects validity as defined by the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation). You can set it initially, but the `invalid` attribute will update as the user interacts with the form control. As such, you should not rely on it to set invalid styles using a custom validation library.

Instead, toggle a class and target it in your stylesheet as shown below.

```html
<form novalidate>
  <em9-input class="invalid"></em9-input>
</form>

<style>
  em9-input.invalid {
    ...;
  }
</style>
```
