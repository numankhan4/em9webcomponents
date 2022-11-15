import examples from 'libphonenumber-js/examples.mobile.json';
import {
  AsYouType,
  getCountries,
  getExampleNumber,
  parsePhoneNumberFromString,
  validatePhoneNumberLength
} from 'libphonenumber-js/max';
import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { emit } from '../../internal/event';
import listOfCountries from './phone-field-codes';
import styles from './phone-field.style';
import type { CountryCode, PhoneNumber } from 'libphonenumber-js/max';
import type { PropertyValues } from 'lit';

/**
 * @since 1.0
 * @status stable
 *
 * @event em9-change - Emitted when an alteration to the control's value is committed by the user.
 * @event em9-input - Emitted when the control receives input and its value changes.
 * @event em9-focus - Emitted when the control gains focus.
 * @event em9-blur - Emitted when the control loses focus.
 * @event getValidationError - Get validation error.
 * @event getExtension - Get extension number from phone number.
 * @event getExampleNumber - Get example number for each country.
 * @event getNumberType - Get number type of number.
 *
 * */

@customElement('em9-phone-field')
export default class em9PhoneField extends LitElement {
  static styles = styles;

  @query('.input-field') input: HTMLInputElement;

  @query('.selectCountry') selectCountry: HTMLInputElement;

  /** The input's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** The input's label. Alternatively, you can use the label slot. */
  @property() label = '';

  /** The input's label. Alternatively, you can use the label slot. */
  @property() path = '/assets/flags/';

  /** name for input */
  @property({ type: String, reflect: true }) name = '';

  /** Disables the input. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws a filled input. */
  @property({ type: Boolean, reflect: true }) filled = false;

  /** Draws a lineStyled input. */
  @property({ type: Boolean, reflect: true, attribute: 'line' }) lineStyled = false;

  @property({ type: String, attribute: 'country' }) country = '';

  @property({ type: String }) template = '';

  /** Phone number as value. */
  @property({ type: Number }) number: PhoneNumber;

  @property({ type: Boolean, attribute: 'show-flags' }) showFlags = false;

  @property({ type: String, attribute: 'country-calling-code' }) countryCallingCode = '';

  @property({ type: Number }) numberType:
    | 'PREMIUM_RATE'
    | 'TOLL_FREE'
    | 'SHARED_COST'
    | 'VOIP'
    | 'PERSONAL_NUMBER'
    | 'PAGER'
    | 'UAN'
    | 'VOICEMAIL'
    | 'FIXED_LINE_OR_MOBILE'
    | 'FIXED_LINE'
    | 'MOBILE'
    | PhoneNumber;

  /** Draw suggestion text */
  @property({ type: String }) suggestionText = '';

  /** The input's help text. Alternatively, you can use the help-text slot. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** Draw Help text */
  @property({ type: String, attribute: 'tooltip-help' }) help = '';

  /** Draw help Icon */
  @property({ type: String }) helpIcon = 'cs-linear-help-circle';

  /** Draw Help text as guide in the tooltip */
  @property({ type: String }) guide = '';

  /** Draw guide Icon  */
  @property({ type: String }) guideIcon = 'outline-info-circle';

  @property({ type: String, reflect: true }) selectedCountry = '';

  /** Draw as countries menus. */
  @property({ type: Boolean, reflect: true, attribute: 'country-box' }) countryBox = false;

  @property({ type: Boolean }) nationalNumber: string;

  @property({ type: Boolean }) numberExt: string;

  @property({ type: Boolean }) numberURI: string;

  /** Input Value */
  @property({ type: String }) value = '';

  @property({ type: String, reflect: true }) defaultCountry = 'US';

  /** Draw Examples number in the placeholder*/
  @property({ type: String }) placeholder = '';

  /** Reactive valid state **/
  @property({ type: Boolean }) valid = false;

  @property({ type: Boolean }) possible = false;

  @property({ type: Boolean }) countrySpecific = false;

  @property({ type: Boolean, reflect: true }) debugger = false;

  /**
   * This will be true when the control is in an invalid state. Validity is determined by props such as `type`,
   * `required`, `minlength`, `maxlength`, and `pattern` using the browser's constraint validation API.
   */
  @property({ type: Boolean, reflect: true }) invalid = false;

  @state() private hasFocus = false;

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.updateSelectedCountry();
    this.getCountryCallingCode();
    this.getSelectedCountry();
    this.handlePlaceholder(this.selectedCountry);
    this.getCountries();
    this.defaultCountry = this.selectedCountry || this.country || this.defaultCountry;
  }

  handleInput() {
    const asYouType = new AsYouType(this.defaultCountry as CountryCode);
    const inputVal = this.input.value;
    const inputFormat = parsePhoneNumberFromString(inputVal);

    this.value = asYouType.input(inputVal);
    this.country = asYouType.getCountry() || this.country;
    this.countryCallingCode = asYouType.getCallingCode();
    this.template = asYouType.getTemplate();

    this.input.value = inputFormat?.formatInternational() || inputVal.replace(/\D/g, '');

    this.defaultCountry = this.selectedCountry || this.country || this.defaultCountry;

    if (this.countryBox) {
      this.handleCountryChange();
      this.getSelectedCountry();
    } else {
      this.updateSelectedCountry();
    }

    this.handleValidation();

    this.handleNumberType();

    emit(this, 'em9-input');
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.handlePlaceholder(this.selectedCountry);
    }

    if (this.input.value.length === 0) {
      this.handlePlaceholder(this.selectedCountry);
      this.selectedCountry = this.defaultCountry;
    }
  }

  handleKeyUp(e: KeyboardEvent) {
    if (this.input.value.length === 0) {
      this.handlePlaceholder(this.selectedCountry);
    }

    if (e.key === 'Enter') {
      this.handlePlaceholder(this.selectedCountry);
    }
  }

  handleValidation() {
    const input = this.input;
    const phoneNumber = parsePhoneNumberFromString(this.value);
    const lengthValidation = validatePhoneNumberLength(this.value);

    if (phoneNumber) {
      this.valid = phoneNumber.isValid();
      this.invalid = !phoneNumber.isValid();
      this.suggestionText = 'Verified';
    } else {
      this.valid = false;
      this.invalid = true;
    }

    if (this.invalid) {
      switch (lengthValidation) {
        case 'NOT_A_NUMBER':
          this.suggestionText = 'Undefined phone number.';
          input.removeAttribute('invalid');
          this.guide = `Undefined phone number.`;
          break;
        case 'INVALID_COUNTRY':
          this.suggestionText = 'Invalid Country Code.';
          input.setAttribute('invalid', '');
          this.guide = `Invalid Country Code.`;
          break;
        case 'TOO_SHORT':
          this.suggestionText = 'Too Short Phone Number';
          input.setAttribute('invalid', '');
          this.guide = `Too Short Phone Number`;
          break;
        case undefined:
          this.suggestionText = `Please enter phone number in this format: ${this.template || 'Invalid Format'}`;
          input.setAttribute('invalid', '');
          this.guide = `Please enter phone number in this format: ${this.template}`;
          break;
        case 'INVALID_LENGTH':
          this.suggestionText = 'Invalid phone Length';
          input.setAttribute('invalid', '');
          this.guide = `Invalid phone Length`;
          break;
        case 'TOO_LONG':
          this.suggestionText = 'The given number is too long to be a valid phone number.';
          input.setAttribute('invalid', '');
          this.guide = `The given number is too long to be a valid phone number.`;
          break;
        default:
          input.removeAttribute('invalid');
      }
    }

    if (phoneNumber?.number) {
      this.number = phoneNumber;
      console.log((this.number = phoneNumber));
    }

    emit(this, 'getValidationError');
  }

  handleCountryChange() {
    this.selectCountry.value = this.country || this.selectedCountry;
    this.handlePlaceholder();
    emit(this, 'em9-country-change');
  }

  handlePlaceholder(countryCode = this.country) {
    const asYouType = new AsYouType(countryCode as CountryCode);
    const phoneNumber = getExampleNumber(countryCode as CountryCode, examples);

    this.placeholder = asYouType.getTemplate();
    this.placeholder = phoneNumber?.formatInternational() || this.placeholder;

    this.template = this.placeholder;

    emit(this, 'getExampleNumber');
  }

  handleFocus() {
    this.hasFocus = true;
    emit(this, 'em9-focus');
  }

  handleBlur() {
    this.hasFocus = false;
    emit(this, 'em9-blur');
  }

  handleChange() {
    this.value = this.input.value;
    emit(this, 'em9-change');
  }

  handleNumberType() {
    const phoneNumber = parsePhoneNumberFromString(this.value);

    const nationalNumbers = phoneNumber?.formatNational();

    this.number = phoneNumber;
    this.input.value = phoneNumber?.formatInternational() || this.placeholder;
    this.country = phoneNumber?.country;
    this.countryCallingCode = phoneNumber?.countryCallingCode;
    this.numberType = phoneNumber?.getType();
    this.nationalNumber = nationalNumbers;
    this.valid = phoneNumber?.isValid();
    this.possible = phoneNumber?.isPossible();
    this.numberURI = phoneNumber?.getURI();

    emit(this, 'getNumberType');
  }

  updateSelectedCountry() {
    this.selectedCountry = this.country || this.selectedCountry || this.defaultCountry;

    if (this.countryBox) {
      this.selectCountry.value = this.selectedCountry;
    } else {
      this.handlePlaceholder(this.selectedCountry);
    }

    this.handlePlaceholder();

    emit(this, 'em9-country-update');
  }

  chooseCountry() {
    this.selectedCountry = this.selectCountry.value;
    this.countryCallingCode = this.getCountryCallingCode();
    this.suggestionText = '';
    this.updateSelectedCountry();
    this.handlePlaceholder(this.selectedCountry);
    this.handleChange();
    this.defaultCountry = this.selectedCountry || this.country || this.defaultCountry;

    emit(this, 'em9-choose-country');
  }

  setSpecificCountry() {
    this.countrySpecific = true;
    this.countryCallingCode = this.getCountryCallingCode();
    this.suggestionText = '';
    this.updateSelectedCountry();
    this.handleChange();
  }

  getSelectedCountry() {
    return this.selectedCountry;
  }

  getCountries() {
    const countries = getCountries();

    countries.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });

    return getCountries();
  }

  getCountryCallingCode() {
    emit(this, 'getExtension');

    return this.countryCallingCode;
  }

  getFlags(country: string) {
    console.log(country);
  }

  // create custom event for isValidNumber
  isValidNumber(event: string) {
    const phoneNumber = parsePhoneNumberFromString(event);
    this.valid = phoneNumber?.isValid();
    this.invalid = !phoneNumber?.isValid();
    emit(this, 'getIsValidNumber');
  }

  render() {
    return html`
      <em9-input
        .disabled="${this.disabled}"
        .filled="${this.filled}"
        .lineStyled="${this.lineStyled}"
        size="${this.size}"
        name="${this.name}-phone-input"
        label="${this.label}"
        .invalid="${this.invalid}"
        valid="${this.valid}"
        class="${classMap({
          'input-field': true,
          'has-valid': this.valid,
          'em9-phone-has-focus': this.hasFocus
        })}"
        help-text="${this.suggestionText || this.helpText}"
        placeholder="${this.placeholder}"
        .value="${this.value}"
        @input="${this.handleInput}"
        @change="${this.handleChange}"
        @blur="${this.handleBlur}"
        @focus="${this.handleFocus}"
        @keyup="${this.handleKeyUp}"
        @keydown="${this.handleKeyDown}"
      >
        ${this.countryBox
          ? html` <div slot="prefix">
              <em9-select
                class="selectCountry"
                id="${this.name}-em9-select"
                placement="bottom-start"
                connector
                hoist
                @em9-change="${this.chooseCountry}"
              >
                ${listOfCountries.map(country => {
                  return html` <em9-menu-item value="${country.code}">
                    <em9-icon
                      style="font-size:var(--em9-font-size-2x-large);"
                      slot="prefix"
                      name="${country.code.toLowerCase()}"
                    ></em9-icon>
                    <span slot="prefix" class="country">${country.name}</span>
                    <div slot="suffix">(${country.dial_code})</div>

                    ${this.showFlags
                      ? html` <em9-icon
                          class="selected-prefix"
                          name="${country.code.toLowerCase()}"
                        ></em9-icon>`
                      : html`<span class="selected-prefix">${country.code}</span>`}
                  </em9-menu-item>`;
                })}
              </em9-select>
            </div>`
          : ``}
        ${!this.countryBox && !this.showFlags
          ? html` <em9-button slot="prefix" variant="link gray"> ${this.selectedCountry} </em9-button>`
          : html``}
        ${this.showFlags && !this.countryBox
          ? html` <em9-icon
              slot="prefix"
              class="selected-prefix"
              name="${this.selectedCountry.toLowerCase()}"
            ></em9-icon>`
          : html``}
        ${this.invalid
          ? html` <div slot="suffix">
              <em9-tooltip content="${this.guide}" hoist>
                <em9-icon part="inner-icon" name="${this.guideIcon}" label="Bold"></em9-icon>
              </em9-tooltip>
            </div>`
          : ``}
        ${!this.invalid
          ? html` <div slot="suffix">
              <em9-tooltip content="${this.help}" hoist>
                <em9-icon part="inner-icon" name="${this.helpIcon}" label="Bold"></em9-icon>
              </em9-tooltip>
            </div>`
          : ``}
        ${this.debugger
          ? html` <span slot="help-text">
              <div class="Template-${this.template}">Template: ${this.template || '0'}</div>
              <div class="ccCode-${this.value}">Number: ${this.value || '0'}</div>
              <div class="country-${this.selectedCountry}">Country: ${this.selectedCountry || '0'}</div>
              <div class="ccCode-${this.countryCallingCode}">Calling Code: +${this.countryCallingCode || '0'}</div>
              <div class="ccCode-${this.valid}">Valid: ${this.valid || '0'}</div>
              <span>${this.handleNumberType ? html` ${this.countryCallingCode}, ${this.numberType} ` : html`()`}</span>
            </span>`
          : ` `}
      </em9-input>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-phone-field': em9PhoneField;
  }
}
