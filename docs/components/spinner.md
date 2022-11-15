# Spinner

[component-header:em9-spinner]

Spinners are used to show the progress of an indeterminate operation.

```html preview
<em9-spinner></em9-spinner>
```

```jsx react
import { em9Spinner } from 'em9webcomponents/dist/react';

const App = () => <em9Spinner />;
```

## Examples

### Size

Spinners are sized based on the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

```html preview
<em9-spinner></em9-spinner>
<em9-spinner style="font-size: 2rem;"></em9-spinner>
<em9-spinner style="font-size: 3rem;"></em9-spinner>
```

```jsx react
import { em9Spinner } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Spinner />
    <em9Spinner style={{ fontSize: '2rem' }} />
    <em9Spinner style={{ fontSize: '3rem' }} />
  </>
);
```

### Track Width

The width of the spinner's track can be changed by setting the `--track-width` custom property.

```html preview
<em9-spinner style="font-size: 50px; --track-width: 10px;"></em9-spinner>
```

```jsx react
import { em9Spinner } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Spinner
    style={{
      fontSize: '3rem',
      '--track-width': '6px'
    }}
  />
);
```

### Color

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

```html preview
<em9-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></em9-spinner>
```

```jsx react
import { em9Spinner } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Spinner
    style={{
      fontSize: '3rem',
      '--indicator-color': 'deeppink',
      '--track-color': 'pink'
    }}
  />
);
```

[component-metadata:em9-spinner]
