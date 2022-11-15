# Format Bytes

[component-header:em9-format-bytes]

Formats a number as a human readable bytes value.

```html preview
<div class="format-bytes-overview">
  The file is <em9-format-bytes value="1000"></em9-format-bytes> in size. <br /><br />
  <em9-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></em9-input>
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatter = container.querySelector('em9-format-bytes');
  const input = container.querySelector('em9-input');

  input.addEventListener('em9-input', () => (formatter.value = input.value || 0));
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9FormatBytes, em9Input } from 'em9webcomponents/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      The file is <em9FormatBytes value={value} /> in size.
      <br />
      <br />
      <em9Input
        type="number"
        value={value}
        label="Number to Format"
        style={{ maxWidth: '180px' }}
        onSlInput={event => setValue(event.target.value)}
      />
    </>
  );
};
```

## Examples

### Formatting Bytes

Set the `value` attribute to a number to get the value in bytes.

```html preview
<em9-format-bytes value="12"></em9-format-bytes><br />
<em9-format-bytes value="1200"></em9-format-bytes><br />
<em9-format-bytes value="1200000"></em9-format-bytes><br />
<em9-format-bytes value="1200000000"></em9-format-bytes>
```

```jsx react
import { em9FormatBytes } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9FormatBytes value="12" />
    <br />
    <em9FormatBytes value="1200" />
    <br />
    <em9FormatBytes value="1200000" />
    <br />
    <em9FormatBytes value="1200000000" />
  </>
);
```

### Formatting Bits

To get the value in bits, set the `unit` attribute to `bit`.

```html preview
<em9-format-bytes value="12" unit="bit"></em9-format-bytes><br />
<em9-format-bytes value="1200" unit="bit"></em9-format-bytes><br />
<em9-format-bytes value="1200000" unit="bit"></em9-format-bytes><br />
<em9-format-bytes value="1200000000" unit="bit"></em9-format-bytes>
```

```jsx react
import { em9FormatBytes } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9FormatBytes value="12" unit="bit" />
    <br />
    <em9FormatBytes value="1200" unit="bit" />
    <br />
    <em9FormatBytes value="1200000" unit="bit" />
    <br />
    <em9FormatBytes value="1200000000" unit="bit" />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html preview
<em9-format-bytes value="12" lang="de"></em9-format-bytes><br />
<em9-format-bytes value="1200" lang="de"></em9-format-bytes><br />
<em9-format-bytes value="1200000" lang="de"></em9-format-bytes><br />
<em9-format-bytes value="1200000000" lang="de"></em9-format-bytes>
```

```jsx react
import { em9FormatBytes } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9FormatBytes value="12" lang="de" />
    <br />
    <em9FormatBytes value="1200" lang="de" />
    <br />
    <em9FormatBytes value="1200000" lang="de" />
    <br />
    <em9FormatBytes value="1200000000" lang="de" />
  </>
);
```

[component-metadata:em9-format-bytes]
