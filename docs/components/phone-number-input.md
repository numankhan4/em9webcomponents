# Phone Number Input

[component-header:em9-phone-number-input]

### with default configuration.

```html preview
<em9-phone-field></em9-phone-field>

<br>

<em9-phone-number-input
  label="Phone Number"
  size="small"
  name="default"
  tooltiptext="Custom tooltip text"
 
  defaultCountry="PK">
  <div slot="custom">
    <em9-tooltip content="custom Tooltip" hoist>
      <em9-icon name="cs-linear-help-circle" label="Bold"></em9-icon>
    </em9-tooltip>
  </div>
</em9-phone-number-input>

<br>
<em9-phone-number-input
  label="Mobile Number"
  filled
  size="medium"
  name="default"
  tooltiptext="Custom tooltip text"
 
  defaultCountry="UK">
</em9-phone-number-input>
<br>
<em9-phone-number-input
  label="Pager Number"
  lineStyled
  size="large"
  name="default"
  tooltiptext="Custom tooltip text"
  defaultCountry="US">
</em9-phone-number-input>
```

```jsx react
import { em9PhoneNumbeInput } from 'em9webcomponents/dist/react';
const App = () => (
  <em9PhoneNumbeInput defaultCountry="PK" style="--size: 320px;" ></em9PhoneNumbeInput>
);
```

## Examples

### `--size` use to give custom width to phone number component

```html preview
<em9-phone-number-input defaultCountry="PK" ></em9-phone-number-input>
```

```jsx react
import { em9PhoneNumbeInput } from 'em9webcomponents/dist/react';
const App = () => (
  <em9PhoneNumbeInput style="--size: 300px;" defaultCountry="IN" ></em9PhoneNumbeInput>
);
```

### `countryCallingCodeNotEditable` use to restrict user to edit calling code.

```html preview
<em9-phone-number-input defaultCountry="PK" countryCallingCodeNotEditable ></em9-phone-number-input>
```

```jsx react
import { em9PhoneNumbeInput } from 'em9webcomponents/dist/react';
const App = () => (
  <em9PhoneNumbeInput
    defaultCountry="PK"
    countryCallingCodeNotEditable
    
  ></em9PhoneNumbeInput>
);
```

### `defaultCountry` use to initialize with default country number

```html preview
<em9-phone-number-input defaultCountry="PK"></em9-phone-number-input>
```

```jsx react
import { em9PhoneNumbeInput } from 'em9webcomponents/dist/react';
const App = () => <em9PhoneNumbeInput defaultCountry="IN" ></em9PhoneNumbeInput>;
```

### `countrySpecific` use to force user to make country specific

```html preview
<em9-phone-number-input defaultCountry="PK" countrySpecific ></em9-phone-number-input>
```

```jsx react
import { em9PhoneNumbeInput } from 'em9webcomponents/dist/react';
const App = () => (
  <em9PhoneNumbeInput defaultCountry="AF" countrySpecific ></em9PhoneNumbeInput>
);
```

### use `valid` attribute to validate phone number filed.

```html preview
<em9-phone-number-input
  class="input-number"
  countrySpecific
  defaultCountry="US"></em9-phone-number-input>
<br />
<strong>Value:</strong> <span class="input-value"></span>
<br />
<strong>Is Valid:</strong> <span class="is-valid"></span> <br /><br />

<script>
  const phoneNumberInput = document.querySelector('.input-number');
  phoneNumberInput.addEventListener('keyup', () => {
    document.querySelector('.input-value').innerHTML = phoneNumberInput.value;
    document.querySelector('.is-valid').innerHTML = phoneNumberInput.valid; // "3"getAttribute('valid');
  });
</script>
```

```jsx react
import { em9PhoneNumbeInput } from 'em9webcomponents/dist/react';
const App = () =>(
	<>
		<em9PhoneNumbeInput
		  class="input-number"
		  defaultCountry="MY"
		  
		></em9PhoneNumbeInput>
		<br />
		<strong>Value:</strong> <span class="input-value"></span>
		<br />
		<strong>Is Valid:</strong> <span class="is-valid"></span> <br /><br />

		<script>
		  const phoneNumberInput = document.querySelector('.input-number');
		  phoneNumberInput.addEventListener('keyup', () => {
			document.querySelector('.input-value').innerHTML = phoneNumberInput.value;
			document.querySelector('.is-valid').innerHTML = phoneNumberInput.valid; // "3"getAttribute('valid');
		  });
		</script>
	</>
);
```

[component-metadata:em9-phone-number-input]
