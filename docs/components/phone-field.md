# phone-field

[component-header:em9-phone-field]

Phone number inputs contain area codes and specific sets of numbers representing users of any country.

```html preview
<em9-phone-field show-flags selectedCountry="US" label="Show Country Code" help-text="This case will show country code only" tooltip-help="Phone number inputs contain area codes and specific sets of numbers representing users of any country." name="case0" size="medium"> </em9-phone-field>
<br>
<em9-phone-field selectedCountry="PK" label="Show Country Code" help-text="This case will show country code only" tooltip-help="Custom Text" name="case1" size="medium" line> </em9-phone-field>
<br>
<em9-phone-field show-flags selectedCountry="IN" label="Chose Country Code" help-text="This case will show country code only" tooltip-help="Custom Text" name="case2" size="medium" filled> </em9-phone-field>
<br>
<em9-phone-field show-flags selectedCountry="PK"  label="Chose Country Code" help-text="This case will show country code only" tooltip-help="Custom Text" name="case2" size="medium" country-box line> </em9-phone-field>
```

### Setting the Selection Imperatively

To programmatically set the selection, update the `value` property as shown below. Note that the value must be an array when using the [`multiple`](#multiple) option.

```html preview

 <em9-phone-field class="em9-phone-field" id="getExampleNumber" selectedCountry="US" tooltip-help="Custom Text" label="Mobile" show-flags filled></em9-phone-field>
      <br>
      
      
      <table class="metadata-table">
      <tr>
          <td>Template</td>
          <td align="left" style="width: 80%;"><span class="template"></span></td>
        </tr>
        <tr>
          <td>Number</td>
          <td align="left" style="width: 80%;"><span class="input-value"></span></td>
        </tr>
        <tr>
          <td> Country</td>
          <td align="left" style="width: 80%;"><span class="country"></span></td>
        </tr>
         <tr>
          <td> Country Code</td>
          <td align="left" style="width: 80%;"><span class="countryCallingCode"></span></td>
        </tr>
        <tr>
          <td>National Number</td>
          <td align="left" style="width: 80%;"><span class="nationalNumber"></span></td>
        </tr>
        <tr>
          <td>URI</td>
          <td align="left" style="width: 80%;"><span class="numberURI"></span></td>
        </tr>
        <tr>
          <td> Type</td>
          <td align="left" style="width: 80%;"><span class="numberType"></span></td>
        </tr>
        <tr>
          <td> Possible</td>
          <td align="left" style="width: 80%;"><span class="possible"></span></td>
        </tr>
        <tr>
          <td> Valid</td>
          <td align="left" style="width: 80%;"><span class="valid"></span></td>
        </tr>
      </table>
      
     
     
      <br>
       <br>
      <em9-button data-option="US">Set US</em9-button>
      <em9-button data-option="PK">Set PK</em9-button>
      <em9-button data-option="IN">Set IN</em9-button>
     
     

<script>
        const phoneField = document.querySelector('.em9-phone-field');
        const buttons = document.querySelectorAll('em9-button');

        buttons.forEach(button => {
          button.addEventListener('click', () => {
            phoneField.selectedCountry = button.getAttribute('data-option');
            phoneField.value = phoneField.getExampleNumber(button.getAttribute(data-option));
          });
        });
        
         const phoneNumberInput = document.querySelector('.em9-phone-field');
         
         phoneNumberInput.addEventListener('keyup', () => {
         document.querySelector('.template').innerHTML = phoneNumberInput.template;
          document.querySelector('.input-value').innerHTML = phoneNumberInput.value;
          document.querySelector('.country').innerHTML = phoneNumberInput.country;
          document.querySelector('.numberType').innerHTML = phoneNumberInput.numberType;
          document.querySelector('.possible').innerHTML = phoneNumberInput.possible;
          document.querySelector('.valid').innerHTML = phoneNumberInput.valid;
          document.querySelector('.numberURI').innerHTML = phoneNumberInput.numberURI;
          document.querySelector('.nationalNumber').innerHTML = phoneNumberInput.nationalNumber;
          document.querySelector('.countryCallingCode').innerHTML = `+${phoneNumberInput.countryCallingCode}`;
          });
</script>
```

```jsx react

import { em9EmptyStates, em9Icon } from 'em9webcomponents/dist/react';

const App = () => (

   <em9EmptyStates></em9EmptyStates>

```




[component-metadata:em9-phone-field]
