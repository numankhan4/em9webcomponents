# QR Code

[component-header:em9-qr-code]

Generates a [QR code](https://www.qrcode.com/) and renders it using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

QR codes are useful for providing small pieces of information to users who can quickly scan them with a smartphone. Most smartphones have built-in QR code scanners, so simply pointing the camera at a QR code will decode it and allow the user to visit a website, dial a phone number, read a message, etc.

```html preview
<div class="qr-overview">
  <em9-qr-code value="https://em9.style/" label="Scan this code to visit em9-Library on the web!"></em9-qr-code>
  <br />

  <em9-input maxlength="255" clearable label="Value"></em9-input>
</div>

<script>
  const container = document.querySelector('.qr-overview');
  const qrCode = container.querySelector('em9-qr-code');
  const input = container.querySelector('em9-input');

  input.value = qrCode.value;
  input.addEventListener('em9-input', () => (qrCode.value = input.value));
</script>

<style>
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview em9-input {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { em9QrCode, em9Input } from 'em9webcomponents/dist/react';

const css = `
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview em9-input {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [value, setValue] = useState('https://em9.style/');

  return (
    <>
      <div className="qr-overview">
        <em9QrCode value={value} label="Scan this code to visit em9-Library on the web!" />
        <br />

        <em9Input maxlength="255" clearable onInput={event => setValue(event.target.value)} />
      </div>

      <style>{css}</style>
    </>
  );
};
```

## Examples

### Colors

Use the `fill` and `background` attributes to modify the QR code's colors. You should always ensure good contrast for optimal compatibility with QR code scanners.

```html preview
<em9-qr-code value="https://em9.style/" fill="deeppink" background="white"></em9-qr-code>
```

```jsx react
import { em9QrCode } from 'em9webcomponents/dist/react';

const App = () => <em9QrCode value="https://em9.style/" fill="deeppink" background="white" />;
```

### Size

Use the `size` attribute to change the size of the QR code.

```html preview
<em9-qr-code value="https://em9.style/" size="64"></em9-qr-code>
```

```jsx react
import { em9QrCode } from 'em9webcomponents/dist/react';

const App = () => <em9QrCode value="https://em9.style/" size="64" />;
```

### Radius

Create a rounded effect with the `radius` attribute.

```html preview
<em9-qr-code value="https://em9.style/" radius="0.5"></em9-qr-code>
```

```jsx react
import { em9QrCode } from 'em9webcomponents/dist/react';

const App = () => <em9QrCode value="https://em9.style/" radius="0.5" />;
```

### Error Correction

QR codes can be rendered with various levels of [error correction](https://www.qrcode.com/en/about/error_correction.html) that can be set using the `error-correction` attribute. This example generates four codes with the same value using different error correction levels.

```html preview
<div class="qr-error-correction">
  <em9-qr-code value="https://em9.style/" error-correction="L"></em9-qr-code>
  <em9-qr-code value="https://em9.style/" error-correction="M"></em9-qr-code>
  <em9-qr-code value="https://em9.style/" error-correction="Q"></em9-qr-code>
  <em9-qr-code value="https://em9.style/" error-correction="H"></em9-qr-code>
</div>

<style>
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
```

```jsx react
import { em9QrCode } from 'em9webcomponents/dist/react';

const css = `
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const App = () => {
  return (
    <>
      <div className="qr-error-correction">
        <em9QrCode value="https://em9.style/" error-correction="L" />
        <em9QrCode value="https://em9.style/" error-correction="M" />
        <em9QrCode value="https://em9.style/" error-correction="Q" />
        <em9QrCode value="https://em9.style/" error-correction="H" />
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:em9-qr-code]
