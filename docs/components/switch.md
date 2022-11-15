# Switch

[component-header:em9-switch]

Switches allow the user to toggle an option on or off.

```html preview
<div class="switch-event">
  <em9-switch>Switch</em9-switch>
</div>
```

```jsx react
import { em9Switch } from 'em9webcomponents/dist/react';

const App = () => <em9Switch>Switch</em9Switch>;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html preview
<em9-switch checked>Checked</em9-switch>
```

```jsx react
import { em9Switch } from 'em9webcomponents/dist/react';

const App = () => <em9Switch checked>Checked</em9Switch>;
```

### Label and Sub Label

Use the `subLabel` attribute to add sub label and slot for the label.

```html preview
<em9-switch subLabel="Save my login details for next time.">Remember me</em9-switch>
```

```jsx react
import { em9Switch } from 'em9webcomponents/dist/react';

const App = () => <em9Switch subLabel="Save my login details for next time.">Remember me</em9Switch>;
```

### Inside Label

Use the `labelInside` attribute to add label inside of toggle.

```html preview
<em9-switch labelInside="SRD Required"></em9-switch>
```

```jsx react
import { em9Switch } from 'em9webcomponents/dist/react';

const App = () => <em9Switch labelInside="SRD Required"></em9Switch>;
```

### Sizes

Use the size attribute to change a button's size.

```html preview
<div class="d-flex">
  <em9-switch size="small" subLabel="Save my login details for next time.">Small Size</em9-switch>
  <em9-switch size="medium" subLabel="Save my login details for next time.">Medium Size</em9-switch>
</div>
```

```jsx react
import { em9Switch } from 'em9webcomponents/dist/react';

const App = () => <em9Switch size="small" subLabel="Save my login details for next time.">Small Size</em9Switch>
  <em9Switch size="medium" subLabel="Save my login details for next time.">Medium Size</em9Switch>;
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html preview
<em9-switch disabled checked>Disabled</em9-switch>
```

```jsx react
import { em9Switch } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Switch disabled checked>
    Disabled
  </em9Switch>
);
```

### Customized

Use the available custom properties to make the switch a different size.

```html preview
<style>
  em9-switch.cs-em9-switch {
    --switch-width: 60px;
    --switch-height: 32px;
    --thumb-size: 26px;
    --label-margin-left: 20px;
    --switch-base-bg: var(--em9-color-primary-500);
    --thumb-shadow: var(--em9-shadow-x-small);
    --thumb-focused: 0px 0px 0px 2px rgba(222, 243, 253, 1);
    --thumb-bg: var(--em9-color-gray-100);
    --switch-hover: var(--em9-color-primary-400);
    --switch-focus-bg: var(--em9-color-primary-800);
    --switch-checked-bg: var(--em9-color-primary-700);
    --switch-checked-hover: var(--em9-color-primary-600);
    --labelInsideColor: var(--em9-color-neutral-0);
    --labelInsidePadding: var(--em9-spacing-1) var(--em9-spacing-3) var(--em9-spacing-1) calc(
        var(--thumb-size) + var(--em9-spacing-4) + 4px
      );
    --labelInsideCheckedPadding: var(--em9-spacing-1) calc(var(--em9-spacing-4) + var(--thumb-size) + 4px) var(
        --em9-spacing-1
      ) var(--em9-spacing-3);
    --labelInsideThumbLeft: calc(var(--thumb-size) / 2 + 0.3rem);
    --labelInsideCheckedThumbLeft: calc(100% - var(--thumb-size) * 1.5 - 1px);
  }
  em9-switch.cs-em9-switch::part(base) {
    font-size: 20px;
  }
  .d-flex {
    display: flex;
    align-items: center;
  }
  .d-flex > * {
    margin-right: 20px;
    margin-bottom: 20px;
  }
</style>
<div class="d-flex">
  <em9-switch class="cs-em9-switch">Really big</em9-switch>
  <em9-switch labelInside="SRD Required" class="cs-em9-switch"></em9-switch>
</div>
```

```jsx react
import { em9Switch } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Switch class="cs-em9-switch">Really big</em9Switch>
  <em9Switch
    ClassName="cs-em9-switch"
    labelInside="SRD Required"
  />
  <style>
    em9-switch.cs-em9-switch {
      --switch-width: 60px;
      --switch-height: 32px;
      --thumb-size: 26px;
      --label-margin-left: 20px;
      --switch-base-bg: var(--em9-color-primary-500);
      --thumb-shadow: var(--em9-shadow-x-small);
      --thumb-focused: 0px 0px 0px 2px rgba(222, 243, 253, 1);
      --thumb-bg: var(--em9-color-gray-100);
      --switch-hover: var(--em9-color-primary-400);
      --switch-focus-bg: var(--em9-color-primary-800);
      --switch-checked-bg: var(--em9-color-primary-700);
      --switch-checked-hover: var(--em9-color-primary-600);
      --labelInsideColor: var(--em9-color-neutral-0);
      --labelInsidePadding: var(--em9-spacing-1) var(--em9-spacing-3) var(--em9-spacing-1) calc(
          var(--thumb-size) + var(--em9-spacing-4) + 4px
        );
      --labelInsideCheckedPadding: var(--em9-spacing-1) calc(var(--em9-spacing-4) + var(--thumb-size) + 4px) var(
          --em9-spacing-1
        ) var(--em9-spacing-3);
      --labelInsideThumbLeft: calc(var(--thumb-size) / 2 + 0.3rem);
      --labelInsideCheckedThumbLeft: calc(100% - var(--thumb-size) * 1.5 - 1px);
    }
    em9-switch.cs-em9-switch::part(base) {
      font-size: 20px;
    }
    .d-flex {
      display: flex;
      align-items: center;
    }
    .d-flex > * {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  </style>
);
```

[component-metadata:em9-switch]
