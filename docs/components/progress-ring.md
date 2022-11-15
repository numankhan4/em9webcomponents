# Progress Ring

[component-header:em9-progress-ring]

Progress rings are used to show the progress of a determinate operation in a circular fashion.

```html preview
<em9-progress-ring value="40"></em9-progress-ring>
```

```jsx react
import { em9ProgressRing } from 'em9webcomponents/dist/react';

const App = () => <em9ProgressRing value="40"></em9ProgressRing>;
```

## Examples

### value Label

Use the `label` attribute to add label.

```html preview
<em9-progress-ring value="40" label="40%"></em9-progress-ring>
```

```jsx react
import { em9ProgressRing } from 'em9webcomponents/dist/react';

const App = () => <em9ProgressRing value="40" labelText="Users" label="40%"></em9ProgressRing>;
```

### text Label

Use the `labelText` attribute to add text label.

```html preview
<em9-progress-ring value="40" labelText="Users" label="40%"></em9-progress-ring>
<em9-progress-ring value="40" size="xs" labelText="Active users" label="40%"></em9-progress-ring>
```

```jsx react
import { em9ProgressRing } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9ProgressRing value="40" labelText="Users" label="40%"></em9ProgressRing>
    <em9ProgressRing value="40" size="xs" labelText="Active users" label="40%"></em9ProgressRing>
  </>
);
```

### Pre defined sizes

Use the `size` attribute to get the predifned sizes of Progress Ring.

```html preview
<em9-progress-ring value="40" labelText="Users" label="40%"></em9-progress-ring>
<em9-progress-ring value="40" size="xs" labelText="Active users" label="40%"></em9-progress-ring>
<em9-progress-ring value="40" size="sm" labelText="Active users" label="40%"></em9-progress-ring>
<em9-progress-ring value="40" size="md" labelText="Active users" label="40%"></em9-progress-ring>
<em9-progress-ring value="40" size="lg" labelText="Active users" label="40%"></em9-progress-ring>
</br>
<em9-progress-ring value="40" label="40%"></em9-progress-ring>
<em9-progress-ring value="40" size="xs" label="40%"></em9-progress-ring>
<em9-progress-ring value="40" size="sm" label="40%"></em9-progress-ring>
<em9-progress-ring value="40" size="md" label="40%"></em9-progress-ring>
<em9-progress-ring value="40" size="lg" label="40%"></em9-progress-ring>
```

```jsx react
import { em9ProgressRing } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9ProgressRing value="40" labelText="Users" label="40%"></em9ProgressRing>
    <em9ProgressRing value="40" size="xs" labelText="Active users" label="40%"></em9ProgressRing>
    <em9ProgressRing value="40" size="sm" labelText="Active users" label="40%"></em9ProgressRing>
    <em9ProgressRing value="40" size="md" labelText="Active users" label="40%"></em9ProgressRing>
    <em9ProgressRing value="40" size="lg" labelText="Active users" label="40%"></em9ProgressRing>
    <br>
    <em9ProgressRing  value="40" label="40%"></em9ProgressRing>
    <em9ProgressRing  value="40" size="xs" label="40%"></em9ProgressRing>
    <em9ProgressRing  value="40" size="sm" label="40%"></em9ProgressRing>
    <em9ProgressRing  value="40" size="md" label="40%"></em9ProgressRing>
    <em9ProgressRing  value="40" size="lg" label="40%"></em9ProgressRing>
  </>
);
```

### Size and Track Width

Use the `--size` custom property to set the diameter of the progress ring.

```html preview
<em9-progress-ring value="50" style="--size: 64px; --track-width: 6px;"></em9-progress-ring>
<em9-progress-ring value="50" style="--size: 160px; --label-size:" label="50%"></em9-progress-ring>
<em9-progress-ring value="50" style="--size: 200px; --track-width: 20px;" label="50%"></em9-progress-ring>
<em9-progress-ring value="50" style="--size: 240px; --track-width: 24px;" label="50%"></em9-progress-ring>
```

```jsx react
import { em9ProgressRing } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9ProgressRing value="50" style={{ '--size': '64px', '--track-width': '6px' }}></em9ProgressRing>
    <em9ProgressRing value="50" style={{ '--size': '160px' }} label="50%"></em9ProgressRing>
    <em9ProgressRing value="50" style={{ '--size': '200px', '--track-width': '20px;' }} label="50%"></em9ProgressRing>
    <em9ProgressRing value="50" style={{ '--size': '240px', '--track-width': '24px;' }} label="50%"></em9ProgressRing>
  </>
);
```

### Colors

To change the color, use the `--track-color` and `--indicator-color` custom properties.

```html preview
<em9-progress-ring
  value="50"
  style="
    --track-color:var(--em9-color-danger-50); 
    --indicator-color: var(--em9-color-danger-600);
  "
></em9-progress-ring>
<em9-progress-ring
  value="40"
  style="
    --track-color:var(--em9-color-orange-100); 
    --indicator-color: var(--em9-color-warning-600);
  "
></em9-progress-ring>
<em9-progress-ring
  value="60"
  style="
    --track-color:var(--em9-color-success-50); 
    --indicator-color: var(--em9-color-success-600);
  "
></em9-progress-ring>
<em9-progress-ring
  value="70"
  style="
    --track-color:var(--em9-color-gray-100); 
    --indicator-color: var(--em9-color-gray-500);
  "
></em9-progress-ring>
```

```jsx react
import { em9ProgressRing } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9ProgressRing
      value="50"
      style={{
        '--track-color': 'pink',
        '--indicator-color': 'deeppink'
      }}
    ></em9ProgressRing>
    <em9ProgressRing
      value="50"
      style={{
        '--track-color': 'var(--em9-color-danger-50)',
        '--indicator-color': 'var(--em9-color-danger-600)'
      }}
    ></em9ProgressRing>
    <em9ProgressRing
      value="40"
      style={{
        '--track-color': 'var(--em9-color-orange-100)',
        '--indicator-color': 'var(--em9-color-warning-600)'
      }}
    ></em9ProgressRing>
    <em9ProgressRing
      value="60"
      style={{
        '--track-color': 'var(--em9-color-success-50)',
        '--indicator-color': 'var(--em9-color-success-600)'
      }}
    ></em9ProgressRing>
    <em9ProgressRing
      value="70"
      style={{ '--track-color': 'var(--em9-color-gray-100)', '--indicator-color': 'var(--em9-color-gray-500)' }}
    ></em9ProgressRing>
  </>
);
```

### Showing Values

Use the default slot to show a label inside the progress ring.

```html preview
<em9-progress-ring
  value="60"
  class="progress-ring-values"
  label="60%"
  style="margin-bottom: .5rem;"
></em9-progress-ring>

<br />

<em9-button onlyicon circle><em9-icon name="outline-minus" label="Decrease"></em9-icon></em9-button>
<em9-button onlyicon circle><em9-icon name="outline-add" label="Increase"></em9-icon></em9-button>

<script>
  const progressRing = document.querySelector('.progress-ring-values');
  const subtractButton = progressRing.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressRing.value + 10);
    progressRing.value = value;
    progressRing.setAttribute('label', `${value}%`);
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressRing.value - 10);
    progressRing.value = value;
    progressRing.setAttribute('label', `${value}%`);
  });
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Icon, em9ProgressRing } from 'em9webcomponents/dist/react';

const App = () => {
  const [value, setValue] = useState(60);
  const [label, setLabel] = useState('60%');
  function adjustValue(amount) {
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    let newlablel = newValue + '%';
    setValue(newValue);
    setLabel(newlablel);
  }

  return (
    <>
      <em9ProgressRing value={value} style={{ marginBottom: '.5rem' }} label={label}></em9ProgressRing>

      <br />

      <em9Button circle onlyicon onClick={() => adjustValue(-10)}>
        <em9Icon name="outline-minus" label="Decrease" />
      </em9Button>

      <em9Button circle onlyicon onClick={() => adjustValue(10)}>
        <em9Icon name="outline-add" label="Increase" />
      </em9Button>
    </>
  );
};
```

[component-metadata:em9-progress-ring]
