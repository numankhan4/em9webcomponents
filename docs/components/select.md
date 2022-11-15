# Select

[component-header:em9-select]

Selects allow you to choose one or more items from a dropdown menu.

```html preview
<em9-select name="TeamMemers" help-text="What would you like people to call you?" label="Members" placeholder="Choose the Member" size="large" filled label-content>
  <em9-menu-item value="phoenix" checked>
    <em9-icon  part="icon" name="linear-user"></em9-icon> Phoenix Baker
    <span part="support-text"> @phoenix</span>
  </em9-menu-item>
  <em9-menu-item value="olivia">
    <em9-icon  part="icon" name="linear-user"></em9-icon> livia Rhy  <span part="support-text">@olivia</span>
  </em9-menu-item>
  <em9-menu-item value="lana">
     <em9-icon  part="icon" name="linear-user"></em9-icon> Lana Steiner  <span part="support-text">@lana</span>
  </em9-menu-item>
    <em9-menu-item value="demi">
     <em9-icon  part="icon" name="linear-user"></em9-icon> Demi Wilkinson  <span part="support-text">@demi</span>
  </em9-menu-item>
  <em9-menu-item value="candice">
     <em9-icon  part="icon" name="linear-user"></em9-icon> Candice Wu  <span part="support-text">@candice</span>
  </em9-menu-item>
  <em9-menu-item value="natali">
     <em9-icon  part="icon" name="linear-user"></em9-icon> Natali Craig  <span part="support-text">@natali</span>
  </em9-menu-item>
    <em9-menu-item value="drew">
     <em9-icon  part="icon" name="linear-user"></em9-icon> Drew Cano  <span part="support-text">@drew</span>
  </em9-menu-item>
  <em9-menu-item value="orlando">
     <em9-icon  part="icon" name="linear-user"></em9-icon> Orlando Diggs  <span part="support-text">@orlando</span>
  </em9-menu-item>
</em9-select>
<br>
<br>
<em9-select name="onlineMembers" help-text="What would you like people to call you?" label="Online Team Members" placeholder="Team Members" size="large">
   <em9-menu-item value="aa">
      <em9-icon  part="indicator" name="cs-bold-indicator"></em9-icon> Asif Aleem
      <span part="support-text">@aaleem</span>
  </em9-menu-item>
  <em9-menu-item value="al">
      <em9-icon  part="indicator" name="cs-bold-indicator"></em9-icon> Arslan Ilyas
      <span part="support-text">@ailyas01</span>
  </em9-menu-item>
   <em9-menu-item value="sa">
      <em9-icon  part="indicator" name="cs-bold-indicator"></em9-icon> Salman Ahmad
      <span part="support-text">@sahmad01</span>
  </em9-menu-item>
  <em9-menu-item value="ty">
      <em9-icon  part="indicator" name="cs-bold-indicator"></em9-icon> Tahir Yousaf
      <span part="support-text">@tyousaf</span>
  </em9-menu-item>
</em9-select>
<br>
<br>
<em9-select name="Assign To" help-text="What would you like people to call you?" label="Assign To" placeholder="Assign to @JohnDoe" size="large">
<em9-menu-item value="phoenix" checked>
     <em9-avatar image="../assets/images/Avatar.png" part="avatars" label="Avatar with initials: SL"></em9-avatar> Phoenix Baker
    <span part="support-text">@phoenix</span>
  </em9-menu-item>
  <em9-menu-item value="olivia">
     <em9-avatar image="../assets/images/Avatar-1.png" part="avatars" label="Avatar with initials: SL"></em9-avatar> livia Rhy  <span part="support-text">@olivia</span>
  </em9-menu-item>
  <em9-menu-item value="lana">
      <em9-avatar image="../assets/images/Avatar-2.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Lana Steiner  <span part="support-text">@lana</span>
  </em9-menu-item>
    <em9-menu-item value="demi">
      <em9-avatar image="../assets/images/Avatar-3.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Demi Wilkinson  <span part="support-text">@demi</span>
  </em9-menu-item>
  <em9-menu-item value="candice">
      <em9-avatar image="../assets/images/Avatar-4.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Candice Wu  <span part="support-text">@candice</span>
  </em9-menu-item>
  <em9-menu-item value="natali">
      <em9-avatar image="../assets/images/Avatar-5.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Natali Craig  <span part="support-text">@natali</span>
  </em9-menu-item>
    <em9-menu-item value="drew">
      <em9-avatar image="../assets/images/Avatar-6.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Drew Cano  <span part="support-text">@drew</span>
  </em9-menu-item>
  <em9-menu-item value="orlando">
      <em9-avatar image="../assets/images/Avatar-7.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Orlando Diggs  <span part="support-text">@orlando</span>
  </em9-menu-item>
    <em9-menu-item value="andi">
      <em9-avatar image="../assets/images/Avatar-8.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Andi Lane  <span part="support-text">@andi</span>
  </em9-menu-item>
</em9-select>
<br>
<em9-select label="Sizes" name="sizes" filter-class="custom-class" placeholder="Choosse the Size" line>
  <input slot="select__filter">
  <em9-icon name="bulk-ruler" slot="prefix"></em9-icon>
  <em9-menu-item value="xs">XS</em9-menu-item>
  <em9-menu-item value="s">S</em9-menu-item>
  <em9-menu-item value="m">M</em9-menu-item>
  <em9-menu-item value="l">L</em9-menu-item>
  <em9-menu-item value="xl">XL</em9-menu-item>
</em9-select>
```

```jsx react
import { em9Divider, em9MenuItem, em9Select } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Select>
    <em9MenuItem value="option-1">Option 1</em9MenuItem>
    <em9MenuItem value="option-2">Option 2</em9MenuItem>
    <em9MenuItem value="option-3">Option 3</em9MenuItem>
    <em9Divider />
    <em9MenuItem value="option-4">Option 4</em9MenuItem>
    <em9MenuItem value="option-5">Option 5</em9MenuItem>
    <em9MenuItem value="option-6">Option 6</em9MenuItem>
  </em9Select>
);
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<em9-select label="Select one">
  <em9-menu-item value="option-1">Option 1</em9-menu-item>
  <em9-menu-item value="option-2">Option 2</em9-menu-item>
  <em9-menu-item value="option-3">Option 3</em9-menu-item>
</em9-select>
```

```jsx react
import { em9MenuItem, em9Select } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Select label="Select one">
    <em9MenuItem value="option-1">Option 1</em9MenuItem>
    <em9MenuItem value="option-2">Option 2</em9MenuItem>
    <em9MenuItem value="option-3">Option 3</em9MenuItem>
  </em9Select>
);
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<em9-select label="Experience" help-text="Please tell us your skill level.">
  <em9-menu-item value="1">Novice</em9-menu-item>
  <em9-menu-item value="2">Intermediate</em9-menu-item>
  <em9-menu-item value="3">Advanced</em9-menu-item>
</em9-select>
```

```jsx react
import { em9MenuItem, em9Select } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Select label="Experience" help-text="Please tell us your skill level.">
    <em9MenuItem value="1">Novice</em9MenuItem>
    <em9MenuItem value="2">Intermediate</em9MenuItem>
    <em9MenuItem value="3">Advanced</em9MenuItem>
  </em9Select>
);
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<em9-select placeholder="Select one">
  <em9-menu-item value="option-1">Option 1</em9-menu-item>
  <em9-menu-item value="option-2">Option 2</em9-menu-item>
  <em9-menu-item value="option-3">Option 3</em9-menu-item>
</em9-select>
```

```jsx react
import { em9MenuItem, em9Select } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Select placeholder="Select one">
    <em9MenuItem value="option-1">Option 1</em9MenuItem>
    <em9MenuItem value="option-2">Option 2</em9MenuItem>
    <em9MenuItem value="option-3">Option 3</em9MenuItem>
  </em9Select>
);
```

### Clearable

Use the `clearable` attribute to make the control clearable.

```html preview
<em9-select placeholder="Clearable" clearable>
  <em9-menu-item value="option-1">Option 1</em9-menu-item>
  <em9-menu-item value="option-2">Option 2</em9-menu-item>
  <em9-menu-item value="option-3">Option 3</em9-menu-item>
</em9-select>
```

```jsx react
import { em9MenuItem, em9Select } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Select placeholder="Clearable" clearable>
    <em9MenuItem value="option-1">Option 1</em9MenuItem>
    <em9MenuItem value="option-2">Option 2</em9MenuItem>
    <em9MenuItem value="option-3">Option 3</em9MenuItem>
  </em9Select>
);
```

### Filled Selects

Add the `filled` attribute to draw a filled select.

```html preview
<em9-select filled>
  <em9-menu-item value="option-1">Option 1</em9-menu-item>
  <em9-menu-item value="option-2">Option 2</em9-menu-item>
  <em9-menu-item value="option-3">Option 3</em9-menu-item>
</em9-select>
```

```jsx react
import { em9MenuItem, em9Select } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Select filled>
    <em9MenuItem value="option-1">Option 1</em9MenuItem>
    <em9MenuItem value="option-2">Option 2</em9MenuItem>
    <em9MenuItem value="option-3">Option 3</em9MenuItem>
  </em9Select>
);
```

### Pill

Use the `pill` attribute to give selects rounded edges.

```html preview
<em9-select pill>
  <em9-menu-item value="option-1">Option 1</em9-menu-item>
  <em9-menu-item value="option-2">Option 2</em9-menu-item>
  <em9-menu-item value="option-3">Option 3</em9-menu-item>
</em9-select>
```

```jsx react
import { em9MenuItem, em9Select } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Select pill>
    <em9MenuItem value="option-1">Option 1</em9MenuItem>
    <em9MenuItem value="option-2">Option 2</em9MenuItem>
    <em9MenuItem value="option-3">Option 3</em9MenuItem>
  </em9Select>
);
```

### Disabled

Use the `disabled` attribute to disable a select.

```html preview
<em9-select placeholder="Disabled" disabled>
  <em9-menu-item value="option-1">Option 1</em9-menu-item>
  <em9-menu-item value="option-2">Option 2</em9-menu-item>
  <em9-menu-item value="option-3">Option 3</em9-menu-item>
</em9-select>
```

```jsx react
import { em9MenuItem, em9Select } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Select placeholder="Disabled" disabled>
    <em9MenuItem value="option-1">Option 1</em9MenuItem>
    <em9MenuItem value="option-2">Option 2</em9MenuItem>
    <em9MenuItem value="option-3">Option 3</em9MenuItem>
  </em9Select>
);
```

### Setting the Selection

Use the `value` attribute to set the current selection. When users interact with the control, its `value` will update to reflect the newly selected menu item's value. Note that the value must be an array when using the [`multiple`](#multiple) option.

```html preview
<em9-select value="option-2">
  <em9-menu-item value="option-1">Option 1</em9-menu-item>
  <em9-menu-item value="option-2">Option 2</em9-menu-item>
  <em9-menu-item value="option-3">Option 3</em9-menu-item>
</em9-select>
```

```jsx react
import { em9Divider, em9MenuItem, em9Select } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Select value="option-2">
    <em9MenuItem value="option-1">Option 1</em9MenuItem>
    <em9MenuItem value="option-2">Option 2</em9MenuItem>
    <em9MenuItem value="option-3">Option 3</em9MenuItem>
  </em9Select>
);
```

### Setting the Selection Imperatively

To programmatically set the selection, update the `value` property as shown below. Note that the value must be an array when using the [`multiple`](#multiple) option.

```html preview
<div class="selecting-example">
  <em9-select>
    <em9-menu-item value="option-1">Option 1</em9-menu-item>
    <em9-menu-item value="option-2">Option 2</em9-menu-item>
    <em9-menu-item value="option-3">Option 3</em9-menu-item>
  </em9-select>

  <br />

  <em9-button data-option="option-1">Set 1</em9-button>
  <em9-button data-option="option-2">Set 2</em9-button>
  <em9-button data-option="option-3">Set 3</em9-button>
</div>

<script>
  const container = document.querySelector('.selecting-example');
  const select = container.querySelector('em9-select');

  [...container.querySelectorAll('em9-button')].map(button => {
    button.addEventListener('click', () => {
      select.value = button.dataset.option;
    });
  });
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9MenuItem, em9Select } from 'em9webcomponents/dist/react';

const App = () => {
  const [value, setValue] = useState('option-1');

  return (
    <>
      <em9Select value={value} onSlChange={event => setValue(event.target.value)}>
        <em9MenuItem value="option-1">Option 1</em9MenuItem>
        <em9MenuItem value="option-2">Option 2</em9MenuItem>
        <em9MenuItem value="option-3">Option 3</em9MenuItem>
      </em9Select>

      <br />

      <em9Button onClick={() => setValue('option-1')}>Set 1</em9Button>
      <em9Button onClick={() => setValue('option-2')}>Set 2</em9Button>
      <em9Button onClick={() => setValue('option-3')}>Set 3</em9Button>
    </>
  );
};
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. With this option, `value` will be an array of strings instead of a string. It's a good practice to use `clearable` when this option is enabled.

```html preview
<em9-select placeholder="Select a few" multiple clearable>
  <em9-menu-item value="option-1">Option 1</em9-menu-item>
  <em9-menu-item value="option-2">Option 2</em9-menu-item>
  <em9-menu-item value="option-3">Option 3</em9-menu-item>
  <em9-divider></em9-divider>
  <em9-menu-item value="option-4">Option 4</em9-menu-item>
  <em9-menu-item value="option-5">Option 5</em9-menu-item>
  <em9-menu-item value="option-6">Option 6</em9-menu-item>
</em9-select>
<br>
<br>
<em9-select placeholder="Select a few" multiple clearable lineStyled>
<em9-menu-item value="phoenix" checked>
    <em9-icon  part="icon" name="linear-user"></em9-icon> Phoenix Baker
    <span part="support-text">@phoenix</span>
  </em9-menu-item>
  <em9-menu-item value="option-1">Option 1</em9-menu-item>
  <em9-menu-item value="option-2">Option 2</em9-menu-item>
  <em9-menu-item value="option-3">Option 3</em9-menu-item>
  <em9-divider></em9-divider>
  <em9-menu-item value="option-4">Option 4</em9-menu-item>
  <em9-menu-item value="option-5">Option 5</em9-menu-item>
  <em9-menu-item value="option-6">Option 6</em9-menu-item>
</em9-select>
```

```jsx react
import { em9Divider, em9MenuItem, em9Select } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Select placeholder="Select a few" multiple clearable>
    <em9MenuItem value="option-1">Option 1</em9MenuItem>
    <em9MenuItem value="option-2">Option 2</em9MenuItem>
    <em9MenuItem value="option-3">Option 3</em9MenuItem>
    <em9Divider />
    <em9MenuItem value="option-4">Option 4</em9MenuItem>
    <em9MenuItem value="option-5">Option 5</em9MenuItem>
    <em9MenuItem value="option-6">Option 6</em9MenuItem>
  </em9Select>
);
```

?> When using the `multiple` option, the value will be an array instead of a string. You may need to [set the selection imperatively](#setting-the-selection-imperatively) unless you're using a framework that supports binding properties declaratively.

### Grouping Options

Options can be grouped visually using menu labels and dividers.

```html preview
<em9-select placeholder="Select one">
  <em9-menu-label>Group 1</em9-menu-label>
  <em9-menu-item value="option-1">Option 1</em9-menu-item>
  <em9-menu-item value="option-2">Option 2</em9-menu-item>
  <em9-menu-item value="option-3">Option 3</em9-menu-item>
  <em9-divider></em9-divider>
  <em9-menu-label>Group 2</em9-menu-label>
  <em9-menu-item value="option-4">Option 4</em9-menu-item>
  <em9-menu-item value="option-5">Option 5</em9-menu-item>
  <em9-menu-item value="option-6">Option 6</em9-menu-item>
</em9-select>
```

```jsx react
import { em9Divider, em9MenuItem, em9MenuLabel, em9Select } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Select placeholder="Select one">
    <em9MenuLabel>Group 1</em9MenuLabel>
    <em9MenuItem value="option-1">Option 1</em9MenuItem>
    <em9MenuItem value="option-2">Option 2</em9MenuItem>
    <em9MenuItem value="option-3">Option 3</em9MenuItem>
    <em9Divider></em9Divider>
    <em9MenuLabel>Group 2</em9MenuLabel>
    <em9MenuItem value="option-4">Option 4</em9MenuItem>
    <em9MenuItem value="option-5">Option 5</em9MenuItem>
    <em9MenuItem value="option-6">Option 6</em9MenuItem>
  </em9Select>
);
```

### Sizes

Use the `size` attribute to change a select's size.

```html preview
<em9-select label="Small" placeholder="Small" size="small" multiple>
  <em9-menu-item value="al">
      <em9-icon  part="indicator" name="cs-bold-indicator"></em9-icon> Arslan Ilyas
      <span part="support-text">@ailyas01</span>
  </em9-menu-item>
    <em9-menu-item value="lana">
      <em9-avatar image="../assets/images/Avatar-2.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Lana Steiner  <span part="support-text">@lana</span>
  </em9-menu-item>
  <em9-menu-item value="option-1">Option 1</em9-menu-item>
  <em9-menu-item value="option-2">Option 2</em9-menu-item>
  <em9-menu-item value="option-3">Option 3</em9-menu-item>
</em9-select>

<br />

<em9-select label="Medium" placeholder="Medium" size="medium" multiple>
  <em9-menu-item value="option-1">Option 1</em9-menu-item>
  <em9-menu-item value="option-2">Option 2</em9-menu-item>
  <em9-menu-item value="option-3">Option 3</em9-menu-item>
</em9-select>

<br />

<em9-select label="Large" placeholder="Large" size="large" multiple>
  <em9-menu-item value="option-1">Option 1</em9-menu-item>
  <em9-menu-item value="option-2">Option 2</em9-menu-item>
  <em9-menu-item value="option-3">Option 3</em9-menu-item>
</em9-select>
```

```jsx react
import { em9MenuItem, em9Select } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Select placeholder="Small" size="small" multiple>
      <em9MenuItem value="option-1">Option 1</em9MenuItem>
      <em9MenuItem value="option-2">Option 2</em9MenuItem>
      <em9MenuItem value="option-3">Option 3</em9MenuItem>
    </em9Select>

    <br />

    <em9Select placeholder="Medium" size="medium" multiple>
      <em9MenuItem value="option-1">Option 1</em9MenuItem>
      <em9MenuItem value="option-2">Option 2</em9MenuItem>
      <em9MenuItem value="option-3">Option 3</em9MenuItem>
    </em9Select>

    <br />

    <em9Select placeholder="Large" size="large" multiple>
      <em9MenuItem value="option-1">Option 1</em9MenuItem>
      <em9MenuItem value="option-2">Option 2</em9MenuItem>
      <em9MenuItem value="option-3">Option 3</em9MenuItem>
    </em9Select>
  </>
);
```

### Placement

The preferred placement of the select's menu can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.

```html preview
<em9-select placement="top">
  <em9-menu-item value="option-1">Option 1</em9-menu-item>
  <em9-menu-item value="option-2">Option 2</em9-menu-item>
  <em9-menu-item value="option-3">Option 3</em9-menu-item>
</em9-select>
```

```jsx react
import { em9MenuItem, SlSelect } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Select placement="top">
    <em9MenuItem value="option-1">Option 1</em9MenuItem>
    <em9MenuItem value="option-2">Option 2</em9MenuItem>
    <em9MenuItem value="option-3">Option 3</em9MenuItem>
  </em9Select>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<em9-select help-text="What would you like people to call you?" label="Small" placeholder="Small" size="small">
  <em9-menu-item value="phoenix" checked>
    <em9-icon  part="icon" name="linear-user"></em9-icon> Phoenix Baker
    <span part="support-text"> @phoenix</span>
  </em9-menu-item>
  <em9-menu-item value="olivia">
    <em9-icon  part="icon" name="linear-user"></em9-icon> livia Rhy  <span part="support-text">@olivia</span>
  </em9-menu-item>
  <em9-menu-item value="lana">
     <em9-icon  part="icon" name="linear-user"></em9-icon> Lana Steiner  <span part="support-text">@lana</span>
  </em9-menu-item>
    <em9-menu-item value="demi">
     <em9-icon  part="icon" name="linear-user"></em9-icon> Demi Wilkinson  <span part="support-text">@demi</span>
  </em9-menu-item>
  <em9-menu-item value="candice">
     <em9-icon  part="icon" name="linear-user"></em9-icon> Candice Wu  <span part="support-text">@candice</span>
  </em9-menu-item>
  <em9-menu-item value="natali">
     <em9-icon  part="icon" name="linear-user"></em9-icon> Natali Craig  <span part="support-text">@natali</span>
  </em9-menu-item>
    <em9-menu-item value="drew">
     <em9-icon  part="icon" name="linear-user"></em9-icon> Drew Cano  <span part="support-text">@drew</span>
  </em9-menu-item>
  <em9-menu-item value="orlando">
     <em9-icon  part="icon" name="linear-user"></em9-icon> Orlando Diggs  <span part="support-text">@orlando</span>
  </em9-menu-item>
    <em9-menu-item value="andi">
     <em9-icon  part="icon" name="outline-add-circle"></em9-icon> Andi Lane  <span part="support-text">@andi</span>
  </em9-menu-item>
</em9-select>
<br />
<em9-select help-text="What would you like people to call you?" label="Small" placeholder="Small" size="small">
<em9-menu-item value="phoenix" checked>
     <em9-avatar image="../assets/images/Avatar.png" part="avatars" label="Avatar with initials: SL"></em9-avatar> Phoenix Baker
    <span part="support-text">@phoenix</span>
  </em9-menu-item>
  <em9-menu-item value="olivia">
     <em9-avatar image="../assets/images/Avatar-1.png" part="avatars" label="Avatar with initials: SL"></em9-avatar> livia Rhy  <span part="support-text">@olivia</span>
  </em9-menu-item>
  <em9-menu-item value="lana">
      <em9-avatar image="../assets/images/Avatar-2.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Lana Steiner  <span part="support-text">@lana</span>
  </em9-menu-item>
    <em9-menu-item value="demi">
      <em9-avatar image="../assets/images/Avatar-3.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Demi Wilkinson  <span part="support-text">@demi</span>
  </em9-menu-item>
  <em9-menu-item value="candice">
      <em9-avatar image="../assets/images/Avatar-4.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Candice Wu  <span part="support-text">@candice</span>
  </em9-menu-item>
  <em9-menu-item value="natali">
      <em9-avatar image="../assets/images/Avatar-5.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Natali Craig  <span part="support-text">@natali</span>
  </em9-menu-item>
    <em9-menu-item value="drew">
      <em9-avatar image="../assets/images/Avatar-6.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Drew Cano  <span part="support-text">@drew</span>
  </em9-menu-item>
  <em9-menu-item value="orlando">
      <em9-avatar image="../assets/images/Avatar-7.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Orlando Diggs  <span part="support-text">@orlando</span>
  </em9-menu-item>
    <em9-menu-item value="andi">
      <em9-avatar image="../assets/images/Avatar-8.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Andi Lane  <span part="support-text">@andi</span>
  </em9-menu-item>
</em9-select>
<br/>
<em9-select help-text="What would you like people to call you?" label="Large" placeholder="Large" size="large">
<em9-menu-item value="phoenix" checked>
     <em9-avatar image="../assets/images/Avatar.png" part="avatars" label="Avatar with initials: SL"></em9-avatar> Phoenix Baker
    <span part="support-text">@phoenix</span>
  </em9-menu-item>
  <em9-menu-item value="olivia">
     <em9-avatar image="../assets/images/Avatar-1.png" part="avatars" label="Avatar with initials: SL"></em9-avatar> livia Rhy  <span part="support-text">@olivia</span>
  </em9-menu-item>
  <em9-menu-item value="lana">
      <em9-avatar image="../assets/images/Avatar-2.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Lana Steiner  <span part="support-text">@lana</span>
  </em9-menu-item>
    <em9-menu-item value="demi">
      <em9-avatar image="../assets/images/Avatar-3.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Demi Wilkinson  <span part="support-text">@demi</span>
  </em9-menu-item>
  <em9-menu-item value="candice">
      <em9-avatar image="../assets/images/Avatar-4.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Candice Wu  <span part="support-text">@candice</span>
  </em9-menu-item>
  <em9-menu-item value="natali">
      <em9-avatar image="../assets/images/Avatar-5.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Natali Craig  <span part="support-text">@natali</span>
  </em9-menu-item>
    <em9-menu-item value="drew">
      <em9-avatar image="../assets/images/Avatar-6.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Drew Cano  <span part="support-text">@drew</span>
  </em9-menu-item>
  <em9-menu-item value="orlando">
      <em9-avatar image="../assets/images/Avatar-7.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Orlando Diggs  <span part="support-text">@orlando</span>
  </em9-menu-item>
    <em9-menu-item value="andi">
      <em9-avatar image="../assets/images/Avatar-8.png" part="avatars" label="Avatar with initials: SL"></em9-avatar>
      Andi Lane  <span part="support-text">@andi</span>
  </em9-menu-item>
</em9-select>
<br />
<em9-select help-text="What would you like people to call you?" label="Large" placeholder="Large" size="large">
  <em9-menu-item value="andi" checked>
      <em9-icon  part="indicator" name="cs-bold-indicator"></em9-icon>
      Andi Lane  <span part="support-text">@andi</span>
  </em9-menu-item>
</em9-select>
<br />
<em9-select help-text="What would you like people to call you?" label="Medium" placeholder="Medium" size="medium">
  <em9-menu-item value="andi" checked>
      <em9-icon  part="indicator" name="cs-bold-indicator"></em9-icon>
      Andi Lane  <span part="support-text">@andi</span>
  </em9-menu-item>
</em9-select>
<br />
<em9-select help-text="What would you like people to call you?" label="Small" placeholder="Small" size="small">
  <em9-menu-item value="andi" checked>
      <em9-icon  part="indicator" name="cs-bold-indicator"></em9-icon>
      Andi Lane  <span part="support-text">@andi</span>
  </em9-menu-item>
</em9-select>
```

```jsx react
import { em9Icon, em9MenuItem, em9Select } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Select placeholder="Small" size="small">
      <em9Icon name="house" slot="prefix"></em9Icon>
      <em9MenuItem value="option-1">Option 1</em9MenuItem>
      <em9MenuItem value="option-2">Option 2</em9MenuItem>
      <em9MenuItem value="option-3">Option 3</em9MenuItem>
      <em9Icon name="chat" slot="suffix"></em9Icon>
    </em9Select>
    <br />
    <em9Select placeholder="Medium" size="medium">
      <em9Icon name="house" slot="prefix"></em9Icon>
      <em9MenuItem value="option-1">Option 1</em9MenuItem>
      <em9MenuItem value="option-2">Option 2</em9MenuItem>
      <em9MenuItem value="option-3">Option 3</em9MenuItem>
      <em9Icon name="chat" slot="suffix"></em9Icon>
    </em9Select>
    <br />
    <em9Select placeholder="Large" size="large">
      <em9Icon name="house" slot="prefix"></em9Icon>
      <em9MenuItem value="option-1">Option 1</em9MenuItem>
      <em9MenuItem value="option-2">Option 2</em9MenuItem>
      <em9MenuItem value="option-3">Option 3</em9MenuItem>
      <em9Icon name="chat" slot="suffix"></em9Icon>
    </em9Select>
  </>
);
```

[component-metadata:em9-select]
