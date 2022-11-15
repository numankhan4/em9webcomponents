# Radio Button

[component-header:em9-radio-button]

Radios buttons allow the user to select a single option from a group using a button-like control.

Radio buttons are designed to be used with [radio groups](/components/radio-group). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.

```html preview
<em9-radio-group label="Select an option">
  <em9-radio-button name="a" value="1" checked>Option 1</em9-radio-button>
  <em9-radio-button name="a" value="2">Option 2</em9-radio-button>
  <em9-radio-button name="a" value="3">Option 3</em9-radio-button>
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

## Examples

### Checked

To set the initial checked state, use the `checked` attribute.

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

### Disabled

Use the `disabled` attribute to disable a radio button.

```html preview
<em9-radio-group label="Select an option">
  <em9-radio-button name="option" value="1" checked>Option 1</em9-radio-button>
  <em9-radio-button name="option" value="2">Option 2</em9-radio-button>
  <em9-radio-button name="option" value="3" disabled>Option 3</em9-radio-button>
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
    <em9RadioButton name="option" value="3" disabled>
      Option 3
    </em9RadioButton>
  </em9RadioGroup>
);
```

### Sizes

Use the `size` attribute to change a radio button's size.

```html preview
<em9-radio-group label="Select an option">
  <em9-radio-button size="small" name="option" value="1" checked>Option 1</em9-radio-button>
  <em9-radio-button size="small" name="option" value="2">Option 2</em9-radio-button>
  <em9-radio-button size="small" name="option" value="3">Option 3</em9-radio-button>
</em9-radio-group>

<br />

<em9-radio-group label="Select an option">
  <em9-radio-button size="medium" name="option" value="1" checked>Option 1</em9-radio-button>
  <em9-radio-button size="medium" name="option" value="2">Option 2</em9-radio-button>
  <em9-radio-button size="medium" name="option" value="3">Option 3</em9-radio-button>
</em9-radio-group>

<br />

<em9-radio-group label="Select an option">
  <em9-radio-button size="large" name="option" value="1" checked>Option 1</em9-radio-button>
  <em9-radio-button size="large" name="option" value="2">Option 2</em9-radio-button>
  <em9-radio-button size="large" name="option" value="3">Option 3</em9-radio-button>
</em9-radio-group>
```

```jsx react
import { em9RadioButton, em9RadioGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <em9RadioGroup label="Select an option">
    <em9RadioButton size="small" name="option" value="1" checked>Option 1</em9RadioButton>
    <em9RadioButton size="small" name="option" value="2">Option 2</em9RadioButton>
    <em9RadioButton size="small" name="option" value="3">Option 3</em9RadioButton>
  </em9RadioGroup>

  <br />

  <em9RadioGroup label="Select an option">
    <em9RadioButton size="medium" name="option" value="1" checked>Option 1</em9RadioButton>
    <em9RadioButton size="medium" name="option" value="2">Option 2</em9RadioButton>
    <em9RadioButton size="medium" name="option" value="3">Option 3</em9RadioButton>
  </em9RadioGroup>

  <br />

  <em9RadioGroup label="Select an option">
    <em9RadioButton size="large" name="option" value="1" checked>Option 1</em9RadioButton>
    <em9RadioButton size="large" name="option" value="2">Option 2</em9RadioButton>
    <em9RadioButton size="large" name="option" value="3">Option 3</em9RadioButton>
  </em9RadioGroup>
);
```

### Pill Buttons

Use the `pill` attribute to give radio buttons rounded edges.

```html preview
<em9-radio-group label="Select an option">
  <em9-radio-button pill size="small" name="option" value="1" checked>Option 1</em9-radio-button>
  <em9-radio-button pill size="small" name="option" value="2">Option 2</em9-radio-button>
  <em9-radio-button pill size="small" name="option" value="3">Option 3</em9-radio-button>
</em9-radio-group>

<br />

<em9-radio-group label="Select an option">
  <em9-radio-button pill size="medium" name="option" value="1" checked>Option 1</em9-radio-button>
  <em9-radio-button pill size="medium" name="option" value="2">Option 2</em9-radio-button>
  <em9-radio-button pill size="medium" name="option" value="3">Option 3</em9-radio-button>
</em9-radio-group>

<br />

<em9-radio-group label="Select an option">
  <em9-radio-button pill size="large" name="option" value="1" checked>Option 1</em9-radio-button>
  <em9-radio-button pill size="large" name="option" value="2">Option 2</em9-radio-button>
  <em9-radio-button pill size="large" name="option" value="3">Option 3</em9-radio-button>
</em9-radio-group>
```

```jsx react
import { em9RadioButton, em9RadioGroup } from 'em9webcomponents/dist/react';

const App = () => (
 <em9RadioGroup label="Select an option">
    <em9RadioButton pill size="small" name="option" value="1" checked>Option 1</em9RadioButton>
    <em9RadioButton pill size="small" name="option" value="2">Option 2</em9RadioButton>
    <em9RadioButton pill size="small" name="option" value="3">Option 3</em9RadioButton>
  </em9RadioGroup>

  <br />

  <em9RadioGroup label="Select an option">
    <em9RadioButton pill size="medium" name="option" value="1" checked>Option 1</em9RadioButton>
    <em9RadioButton pill size="medium" name="option" value="2">Option 2</em9RadioButton>
    <em9RadioButton pill size="medium" name="option" value="3">Option 3</em9RadioButton>
  </em9RadioGroup>

  <br />

  <em9RadioGroup label="Select an option">
    <em9RadioButton pill size="large" name="option" value="1" checked>Option 1</em9RadioButton>
    <em9RadioButton pill size="large" name="option" value="2">Option 2</em9RadioButton>
    <em9RadioButton pill size="large" name="option" value="3">Option 3</em9RadioButton>
  </em9RadioGroup>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<em9-radio-group label="Select an option">
  <em9-radio-button name="a" value="1" checked>
    <em9-icon slot="prefix" name="linear-link-21"></em9-icon>
    Option 1
  </em9-radio-button>

  <em9-radio-button name="a" value="2">
    <em9-icon slot="suffix" name="bold-bag-tick-2"></em9-icon>
    Option 2
  </em9-radio-button>

  <em9-radio-button name="a" value="3">
    <em9-icon slot="prefix" name="bold-gift"></em9-icon>
    <em9-icon slot="suffix" name="bold-shopping-cart"></em9-icon>
    Option 3
  </em9-radio-button>
</em9-radio-group>
```

```jsx react
import { em9Icon, em9RadioButton, em9RadioGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <em9RadioGroup label="Select an option">
    <em9RadioButton name="a" value="1" checked>
      <em9Icon slot="prefix" name="linear-link-21" />
      Option 1
    </em9RadioButton>

    <em9RadioButton name="a" value="2">
      <em9Icon slot="suffix" name="bold-bag-tick-2" />
      Option 2
    </em9RadioButton>

    <em9RadioButton name="a" value="3">
      <em9Icon slot="prefix" name="bold-gift" />
      <em9Icon slot="suffix" name="bold-shopping-cart" />
      Option 3
    </em9RadioButton>
  </em9RadioGroup>
);
```

### Buttons with Icons

You can omit button labels and use icons instead. Make sure to set a `label` attribute on each icon so screen readers will announce each option correctly.

```html preview
<em9-radio-group label="Select an option">
  <em9-radio-button name="a" value="sad">
    <em9-icon name="bold-emoji-sad" label="Sad"></em9-icon>
  </em9-radio-button>

  <em9-radio-button name="a" value="neutral" checked>
    <em9-icon name="bold-emoji-normal" label="Neutral"></em9-icon>
  </em9-radio-button>

  <em9-radio-button name="a" value="happy">
    <em9-icon name="bold-emoji-happy" label="Happy"></em9-icon>
  </em9-radio-button>
</em9-radio-group>
```

```jsx react
import { em9Icon, em9RadioButton, em9RadioGroup } from 'em9webcomponents/dist/react';

const App = () => (
  <em9RadioGroup label="Select an option">
    <em9RadioButton name="a" value="sad">
      <em9Icon name="bold-emoji-sad" label="Sad" />
    </em9RadioButton>

    <em9RadioButton name="a" value="neutral" checked>
      <em9Icon name="bold-emoji-normal" label="Neutral" />
    </em9RadioButton>

    <em9RadioButton name="a" value="happy">
      <em9Icon name="bold-emoji-happy" label="Happy" />
    </em9RadioButton>
  </em9RadioGroup>
);
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <em9-radio-group label="Select an option">
    <em9-radio-button name="a" value="1" checked>Not me</em9-radio-button>
    <em9-radio-button name="a" value="2">Me neither</em9-radio-button>
    <em9-radio-button name="a" value="3">Choose me</em9-radio-button>
  </em9-radio-group>
  <br />
  <em9-button type="submit" variant="primary">Submit</em9-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const radioButton = form.querySelectorAll('em9-radio-button')[2];
  const errorMessage = 'You must choose this option';
  // Set initial validity as soon as the element is defined
  customElements.whenDefined('em9-radio-button').then(() => {
    radioButton.setCustomValidity(errorMessage);
  });
  // Update validity when a selection is made
  form.addEventListener('em9-change', () => {
    const isValid = radioButton.checked;
    radioButton.setCustomValidity(isValid ? '' : errorMessage);
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
import { em9Button, em9Icon, em9RadioButton, em9RadioGroup } from 'em9webcomponents/dist/react';
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
        <em9RadioButton name="a" value="1" checked onSlChange={handleChange}>
          Not me
        </em9RadioButton>
        <em9RadioButton name="a" value="2" onSlChange={handleChange}>
          Me neither
        </em9RadioButton>
        <em9RadioButton ref={radio} name="a" value="3" onSlChange={handleChange}>
          Choose me
        </em9RadioButton>
      </em9RadioGroup>
      <br />
      <em9Button type="submit" variant="primary">
        Submit
      </em9Button>
    </form>
  );
};
```

[component-metadata:em9-radio-button]
