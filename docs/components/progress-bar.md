# Progress Bar

[component-header:em9-progress-bar]

Progress bars are used to show the status of an ongoing operation.

```html preview
<em9-progress-bar value="50" valposition="bottom"></em9-progress-bar>
```

```jsx react
import { em9ProgressBar } from 'em9webcomponents/dist/react';

const App = () => <em9ProgressBar value={50} />;
```

## Examples

### Labels

Use the `label` attribute to label the progress bar and tell assistive devices how to announce it.

```html preview
<em9-progress-bar value="50" label="Upload progress"></em9-progress-bar>
```

```jsx react
import { em9ProgressBar } from 'em9webcomponents/dist/react';

const App = () => <em9ProgressBar value="50" label="Upload progress" />;
```

### Varients

Use the `variant` attribute for different theme color variants.

```html preview
<em9-progress-bar value="50"></em9-progress-bar>
<br />
<em9-progress-bar value="60" variant="success"></em9-progress-bar>
<br />
<em9-progress-bar value="40" variant="danger"></em9-progress-bar>
<br />
<em9-progress-bar value="75" variant="warning"></em9-progress-bar>
<br />
<em9-progress-bar value="50" variant="gray"></em9-progress-bar>
```

```jsx react
import { em9ProgressBar } from 'em9webcomponents/dist/react';

App = () => (
  <>
    <em9ProgressBar value="50"></em9ProgressBar>
    <br />
    <em9ProgressBar value="60" variant="success"></em9ProgressBar>
    <br />
    <em9ProgressBar value="40" variant="danger"></em9ProgressBar>
    <br />
    <em9ProgressBar value="75" variant="warning"></em9ProgressBar>
    <br />
    <em9ProgressBar value="50" variant="gray"></em9ProgressBar>
  </>
);
```

### Custom Height

Use the `--height` custom property to set the progress bar's height.

```html preview
<em9-progress-bar value="20" style="--height: 4px;"></em9-progress-bar>
<br />
<em9-progress-bar value="30" style="--height: 8px;"></em9-progress-bar>
<br />
<em9-progress-bar value="40" style="--height: 12px;"></em9-progress-bar>
<br />
<em9-progress-bar value="50" style="--height: 14px;"></em9-progress-bar>
<br />
<em9-progress-bar value="60" style="--height: 16px;"></em9-progress-bar>
<br />
<em9-progress-bar value="70" style="--height: 20px;"></em9-progress-bar>
<br />
<em9-progress-bar value="80" style="--height: 24px;"></em9-progress-bar>
```

```jsx react
import { em9ProgressBar } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9ProgressBar value="20" style={{ '--height': '4px;' }}></em9ProgressBar>
    <br />
    <em9ProgressBar value="30" style={{ '--height': '8px;' }}></em9ProgressBar>
    <br />
    <em9ProgressBar value="40" style={{ '--height': '12px' }}></em9ProgressBar>
    <br />
    <em9ProgressBar value="50" style={{ '--height': '14px' }}></em9ProgressBar>
    <br />
    <em9ProgressBar value="60" style={{ '--height': '16px' }}></em9ProgressBar>
    <br />
    <em9ProgressBar value="70" style={{ '--height': '20px' }}></em9ProgressBar>
  </>
);
```

### Values Placement

Use the `valPlacement` attribute to to change the placement of the value.

```html preview
<em9-progress-bar value="50" valPosition="top"></em9-progress-bar>
<br />
<em9-progress-bar value="50" valPosition="bottom"></em9-progress-bar>
<br />
<em9-progress-bar value="65" valPosition="front"></em9-progress-bar>
<br />
<em9-progress-bar value="40" valPosition="tooltipTop"></em9-progress-bar>
<br />
<em9-progress-bar value="40" valPosition="tooltipBottom"></em9-progress-bar>
```

```jsx react
import { em9ProgressBar } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9ProgressBar value="50" valPosition="top"></em9ProgressBar>
    <br />
    <em9ProgressBar value="50" valPosition="bottom"></em9ProgressBar>
    <br />
    <em9ProgressBar value="65" valPosition="front"></em9ProgressBar>
    <br />
    <em9ProgressBar value="40" valPosition="tooltipTop"></em9ProgressBar>
    <br />
    <em9ProgressBar value="40" valPosition="tooltipBottom"></em9ProgressBar>
  </>
);
```

### Showing Values

Use the default slot to show a value.

```html preview
<em9-progress-bar value="50" style="--height: 17px;" class="progress-bar-values">50%</em9-progress-bar>

<br />

<em9-button onlyicon circle><em9-icon name="outline-minus" label="Decrease"></em9-icon></em9-button>
<em9-button onlyicon circle><em9-icon name="outline-add" label="Increase"></em9-icon></em9-button>

<script>
  const progressBar = document.querySelector('.progress-bar-values');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressBar.value + 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressBar.value - 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Icon, em9ProgressBar } from 'em9webcomponents/dist/react';

const App = () => {
  const [value, setValue] = useState(50);

  function adjustValue(amount) {
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  }

  return (
    <>
      <em9ProgressBar style={{ '--height': '17px' }} value={value}>
        {value}%
      </em9ProgressBar>

      <br />

      <em9Button circle onClick={() => adjustValue(-10)}>
        <em9Icon name="outline-minus" label="Decrease" />
      </em9Button>

      <em9Button circle onClick={() => adjustValue(10)}>
        <em9Icon name="outline-add" label="Increase" />
      </em9Button>
    </>
  );
};
```

### Custom values in labels

Use the `textcontent` attribute show custom values in labels.

```html preview
<em9-progress-bar
  value="40"
  valPosition="tooltipTop"
  class="progress-bar-custom-values"
  label="download progressbar"
  textcontent="40/100 files are downloaded"
></em9-progress-bar>
<br />

<em9-button onlyicon circle><em9-icon name="outline-minus" label="Decrease"></em9-icon></em9-button>
<em9-button onlyicon circle><em9-icon name="outline-add" label="Increase"></em9-icon></em9-button>

<script>
  const progressBar = document.querySelector('.progress-bar-custom-values');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressBar.value + 5);
    const textcontent = progressBar.getAttribute('textContent').replace(`${progressBar.value}`, `${value}`);
    progressBar.value = value;
    progressBar.textcontent = `${textcontent}`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressBar.value - 5);
    const textcontent = progressBar.getAttribute('textContent').replace(`${progressBar.value}`, `${value}`);
    progressBar.value = value;
    progressBar.textcontent = `${textcontent}`;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Icon, em9ProgressBar } from 'em9webcomponents/dist/react';

const App = () => {
  const [value, setValue] = useState(40);
  const [textcontent, setTextContent] = useState('40/100 files are downloaded');
  function adjustValue(amount) {
    console.log('in ss');
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    let newtextcontent = textcontent.replace(`${value}`, `${newValue}`);
    setValue(newValue);
    setTextContent(newtextcontent);
  }

  return (
    <>
      <em9ProgressBar
        value={value}
        valPosition="tooltipTop"
        class="progress-bar-custom-values"
        label="download progressbar"
        textContent={textcontent}
      ></em9ProgressBar>

      <br />

      <em9Button circle onClick={() => adjustValue(-5)}>
        <em9Icon name="outline-minus" label="Decrease" />
      </em9Button>

      <em9Button circle onClick={() => adjustValue(5)}>
        <em9Icon name="outline-add" label="Increase" />
      </em9Button>
    </>
  );
};
```

### Indeterminate

The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `value` is ignored and the label, if present, will not be shown.

```html preview
<em9-progress-bar indeterminate></em9-progress-bar>
```

```jsx react
import { em9ProgressBar } from 'em9webcomponents/dist/react';

const App = () => <em9ProgressBar indeterminate />;
```

[component-metadata:em9-progress-bar]
