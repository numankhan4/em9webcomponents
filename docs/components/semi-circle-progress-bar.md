# Semi Circle Progress Bar

[component-header:em9-semi-circle-progress-bar]

A description of the component goes here.

```html preview
<em9-semi-circle-progress-bar value="40"></em9-semi-circle-progress-bar>
```

```jsx react
import { em9SemiCircleProgressBar } from 'em9webcomponents/dist/react';

const App = () => <em9SemiCircleProgressBar value="40"></em9SemiCircleProgressBar>;
```

## Examples

### Size Example

use 'size' attribute to get different sizes of progress semi circle

```html preview
<em9-semi-circle-progress-bar value="40" size="xxs"></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar value="40"></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar value="40" size="sm"></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar value="40" size="md"></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar value="40" size="lg"></em9-semi-circle-progress-bar>
```

```jsx react
import { em9SemiCircleProgressBar } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9SemiCircleProgressBar value="40" size="xxs"></em9SemiCircleProgressBar>
    <em9SemiCircleProgressBar value="40"></em9SemiCircleProgressBar>
    <em9SemiCircleProgressBar value="40" size="sm"></em9SemiCircleProgressBar>
    <em9SemiCircleProgressBar value="40" size="md"></em9SemiCircleProgressBar>
    <em9SemiCircleProgressBar value="40" size="lg"></em9SemiCircleProgressBar>
  </>
);
```

### labelTextValue Example

use 'labelTextValue' attribute to show values

```html preview
<em9-semi-circle-progress-bar labelTextValue="40%" value="40" size="xxs"></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar labelTextValue="40%" value="40"></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar labelTextValue="40%" value="40" size="sm"></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar labelTextValue="40%" value="40" size="md"></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar labelTextValue="40%" value="40" size="lg"></em9-semi-circle-progress-bar>
```

```jsx react
import { em9SemiCircleProgressBar } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9-semi-circle-progress-bar labelTextValue="40%" value="40" size="xxs"></em9-semi-circle-progress-bar>
    <em9-semi-circle-progress-bar labelTextValue="40%" value="40"></em9-semi-circle-progress-bar>
    <em9-semi-circle-progress-bar labelTextValue="40%" value="40" size="sm"></em9-semi-circle-progress-bar>
    <em9-semi-circle-progress-bar labelTextValue="40%" value="40" size="md"></em9-semi-circle-progress-bar>
    <em9-semi-circle-progress-bar labelTextValue="40%" value="40" size="lg"></em9-semi-circle-progress-bar>
  </>
);
```

### label Example

use 'label' attribute to get label

```html preview
<em9-semi-circle-progress-bar label="Users" labelTextValue="40%" value="40" size="xxs"></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar label="Active users" labelTextValue="40%" value="40"></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar
  label="Active users"
  labelTextValue="40%"
  value="40"
  size="sm"
></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar
  label="Active users"
  labelTextValue="40%"
  value="40"
  size="md"
></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar
  label="Active users"
  labelTextValue="40%"
  value="40"
  size="lg"
></em9-semi-circle-progress-bar>
```

```jsx react
import { em9SemiCircleProgressBar } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9SemiCircleProgressBar label="Users" labelTextValue="40%" value="40" size="xxs"></em9SemiCircleProgressBar>
    <em9SemiCircleProgressBar label="Active users" labelTextValue="40%" value="40"></em9SemiCircleProgressBar>
    <em9SemiCircleProgressBar label="Active users" labelTextValue="40%" value="40" size="sm"></em9SemiCircleProgressBar>
    <em9SemiCircleProgressBar label="Active users" labelTextValue="40%" value="40" size="md"></em9SemiCircleProgressBar>
    <em9SemiCircleProgressBar label="Active users" labelTextValue="40%" value="40" size="lg"></em9SemiCircleProgressBar>
  </>
);
```

### Custom colors Example

```html preview
<em9-semi-circle-progress-bar value="5"></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar
  style="--semi-track-color:var(--em9-color-danger-50);--semi-indicator-color: var(--em9-color-danger-600);"
  label="Active Users"
  labelTextValue="10%"
  value="10"
></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar
  style="--semi-track-color:var(--em9-color-orange-100);--semi-indicator-color: var(--em9-color-warning-600)"
  label="Active Users"
  labelTextValue="30%"
  value="30"
></em9-semi-circle-progress-bar>
<em9-semi-circle-progress-bar
  style="--semi-track-color:var(--em9-color-success-50);--semi-indicator-color: var(--em9-color-success-600);"
  label="Active Users"
  labelTextValue="60%"
  value="60"
></em9-semi-circle-progress-bar>
```

```jsx react
import { em9SemiCircleProgressBar } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9SemiCircleProgressBar value="5"></em9SemiCircleProgressBar>
    <em9SemiCircleProgressBar
      style={{
        '--semi-track-color': 'var(--em9-color-danger-50)',
        '--semi-indicator-color': 'var(--em9-color-danger-600)'
      }}
      label="Active Users"
      labelTextValue="10%"
      value="10"
    ></em9SemiCircleProgressBar>
    <em9SemiCircleProgressBar
      style={{
        '--semi-track-color': 'var(--em9-color-orange-100)',
        '--semi-indicator-color': 'var(--em9-color-warning-600)'
      }}
      label="Active Users"
      labelTextValue="30%"
      value="30"
    ></em9SemiCircleProgressBar>
    <em9SemiCircleProgressBar
      style={{
        '--semi-track-color': 'var(--em9-color-success-50)',
        '--semi-indicator-color': 'var(--em9-color-success-600)'
      }}
      label="Active Users"
      labelTextValue="60%"
      value="60"
    ></em9SemiCircleProgressBar>
  </>
);
```

### Use Example

```html preview
<em9-semi-circle-progress-bar
  class="progress-semi-circle"
  style="--semi-track-color:var(--em9-color-gray-100);--semi-indicator-color: var(--em9-color-gray-500);"
  label="Active Users"
  labelTextValue="70%"
  value="70"
></em9-semi-circle-progress-bar>
<br />
<em9-button circle onlyicon size="small" class="decreaseBtn"
  ><em9-icon name="outline-minus" label="Decrease"></em9-icon
></em9-button>
<em9-button circle onlyicon size="small" class="increaseBtn"
  ><em9-icon name="outline-add" label="Increase"></em9-icon
></em9-button>
<script>
  const progressSemiCircle = document.querySelector('.progress-semi-circle');
  const subtractButton = document.querySelector('.decreaseBtn');
  const addButton = document.querySelector('.increaseBtn');

  addButton.addEventListener('click', () => {
    const value = Math.min(100, parseInt(progressSemiCircle.value) + 10);
    progressSemiCircle.value = value;
    progressSemiCircle.setAttribute('value', `${value}`);
    progressSemiCircle.setAttribute('labelTextValue', `${value}%`);
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, parseInt(progressSemiCircle.value) - 10);
    progressSemiCircle.value = value;
    progressSemiCircle.setAttribute('value', `${value}`);
    progressSemiCircle.setAttribute('labelTextValue', `${value}%`);
  });
</script>
```

```jsx react
import { em9SemiCircleProgressBar, em9Button, em9Icon } from 'em9webcomponents/dist/react';

const App = () => {
  const [value, setValue] = useState(70);
  const [labelTextValue, setLabelTextValue] = useState('70%');
  function adjustValue(amount) {
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    let newlabelTextValue = newValue + '%';
    setValue(newValue);
    setLabelTextValue(newlabelTextValue);
  }

  return (
    <>
      <em9SemiCircleProgressBar
        class="progress-semi-circle"
        style={{
          '--semi-track-color': 'var(--em9-color-gray-100)',
          '--semi-indicator-color': 'var(--em9-color-gray-500);'
        }}
        label="Active Users"
        labelTextValue={labelTextValue}
        value={value}
      ></em9SemiCircleProgressBar>
      <br />
      <em9Button circle class="decreaseBtn" onlyicon onClick={() => adjustValue(-10)}>
        <em9Icon name="outline-minus" label="Decrease"></em9Icon>
      </em9Button>
      <em9Button circle class="increaseBtn" onlyicon onClick={() => adjustValue(10)}>
        <em9Icon name="outline-add" label="Increase"></em9Icon>
      </em9Button>
    </>
  );
};
```

[component-metadata:em9-semi-circle-progress-bar]
