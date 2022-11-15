# Format Number

[component-header:em9-format-number]

Formats a number using the specified locale and options.

Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.

```html preview
<div class="format-number-overview">
  <em9-format-number value="1000"></em9-format-number>
  <br /><br />
  <em9-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></em9-input>
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatter = container.querySelector('em9-format-number');
  const input = container.querySelector('em9-input');

  input.addEventListener('em9-input', () => (formatter.value = input.value || 0));
</script>
```

```jsx react
import { useState } from 'react';
import { em9FormatNumber, em9Input } from 'em9webcomponents/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      <em9FormatNumber value={value} />
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

### Percentages

To get the value as a percent, set the `type` attribute to `percent`.

```html preview
<em9-format-number type="percent" value="0"></em9-format-number><br />
<em9-format-number type="percent" value="0.25"></em9-format-number><br />
<em9-format-number type="percent" value="0.50"></em9-format-number><br />
<em9-format-number type="percent" value="0.75"></em9-format-number><br />
<em9-format-number type="percent" value="1"></em9-format-number>
```

```jsx react
import { em9FormatNumber } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9FormatNumber type="percent" value={0} />
    <br />
    <em9FormatNumber type="percent" value={0.25} />
    <br />
    <em9FormatNumber type="percent" value={0.5} />
    <br />
    <em9FormatNumber type="percent" value={0.75} />
    <br />
    <em9FormatNumber type="percent" value={1} />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html preview
English: <em9-format-number value="2000" lang="en" minimum-fraction-digits="2"></em9-format-number><br />
German: <em9-format-number value="2000" lang="de" minimum-fraction-digits="2"></em9-format-number><br />
Russian: <em9-format-number value="2000" lang="ru" minimum-fraction-digits="2"></em9-format-number>
```

```jsx react
import { em9FormatNumber } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    English: <em9FormatNumber value="2000" lang="en" minimum-fraction-digits="2" />
    <br />
    German: <em9FormatNumber value="2000" lang="de" minimum-fraction-digits="2" />
    <br />
    Russian: <em9FormatNumber value="2000" lang="ru" minimum-fraction-digits="2" />
  </>
);
```

### Currency

To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code. You should also specify `lang` to ensure the the number is formatted correctly for the target locale.

```html preview
<em9-format-number type="currency" currency="USD" value="2000" lang="en-US"></em9-format-number><br />
<em9-format-number type="currency" currency="GBP" value="2000" lang="en-GB"></em9-format-number><br />
<em9-format-number type="currency" currency="EUR" value="2000" lang="de"></em9-format-number><br />
<em9-format-number type="currency" currency="RUB" value="2000" lang="ru"></em9-format-number><br />
<em9-format-number type="currency" currency="CNY" value="2000" lang="zh-cn"></em9-format-number>
```

```jsx react
import { em9FormatNumber } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9FormatNumber type="currency" currency="USD" value="2000" lang="en-US" />
    <br />
    <em9FormatNumber type="currency" currency="GBP" value="2000" lang="en-GB" />
    <br />
    <em9FormatNumber type="currency" currency="EUR" value="2000" lang="de" />
    <br />
    <em9FormatNumber type="currency" currency="RUB" value="2000" lang="ru" />
    <br />
    <em9FormatNumber type="currency" currency="CNY" value="2000" lang="zh-cn" />
  </>
);
```

[component-metadata:em9-format-number]
