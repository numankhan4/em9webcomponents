import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { emit } from '../../internal/event';
import { FormSubmitController } from '../../internal/form';
import { watch } from '../../internal/watch';
import styles from './radio.styles';

/**
 * @since 1.0
 * @status stable
 *
 *
 * @slot label - The radio's main label.
 * @slot subLabel - The radio's subLabel.
 *
 * @event em9-blur - Emitted when the control loses focus.
 * @event em9-change - Emitted when the control's checked state changes.
 * @event em9-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart control - The radio control.
 * @csspart checked-icon - The container the wraps the checked icon.
 * @csspart label - The radio label wrapper div.
 * @csspart radio__label - For label.
 *
 * @cssproperty    --em9-radio-font-family  Radio label font-family
@cssproperty    --em9-radio-font-size   Radio label font-size
@cssproperty    --em9-radio-font-weight Radio label font-weight
@cssproperty    --em9-radio-color  Radio label color
@cssproperty    --em9-radio-border-radius Radio border-radius
@cssproperty    --em9-radio-unchecked-border-width  Radio border-width and type
@cssproperty    --em9-radio-unchecked-border-color  Radio unchecked state border-color
@cssproperty    --em9-radio-unchecked-background-color  Radio unchecked state background-color
@cssproperty    --em9-radio-unchecked-color Radio unchecked state color
@cssproperty    --em9-radio-subText-color Radio subtext color
@cssproperty    --em9-radio-subText-line-height Radio subtext line-height
@cssproperty    --em9-radio-mainText-line-height Radio mainText line-height
@cssproperty    --em9-radio-control-width Radio width
@cssproperty    --em9-radio-control-height Radio height
@cssproperty    --em9-radio-margin-label Radio label part margin
@cssproperty    --em9-radio-uncheck-hover-border-color Radio unchecked hover state border-color
@cssproperty    --em9-radio-uncheck-hover-background-color Radio unchecked hover state background-color
@cssproperty    --em9-radio-uncheck-focus-border-color Radio unchecked focus state border-color
@cssproperty    --em9-radio-uncheck-focus-box-shadow  Radio unchecked focus state box shadow
@cssproperty    --em9-radio-checked-border-color  Radio checked  border-color
@cssproperty    --em9-radio-checked-background-color Radio checked background-color
@cssproperty    --em9-radio-checked-color Radio checked  state color
@cssproperty    --em9-radio-checked-hover-border-color Radio checked hover state border-color
@cssproperty    --em9-radio-checked-hover-background-color Radio checked hover state background-color
@cssproperty    --em9-radio-checked-hover-color Radio checked hover state color
@cssproperty    --em9-radio-checked-focus-box-shadow Radio checked focus state color
@cssproperty    --em9-radio-checked-focus-border-color Radio checked focus border color
@cssproperty    --em9-radio-checked-focus-background-color Radio checked focus background-color
@cssproperty    --em9-radio-checked-focus-color Radio checked focus color
@cssproperty    --em9-radio-checked-disabled-border-color Radio disable state border color
@cssproperty    --em9-radio-checked-disabled-background-color Radio disable state background color
@cssproperty    --em9-radio-checked-disabled-color Radio disable state color
@cssproperty    --em9-label-gap  gap between maintext and subtext.
 */
@customElement('em9-radio')
export default class em9Radio extends LitElement {
  static styles = styles;

  @query('.radio__input') input: HTMLInputElement;

  protected readonly formSubmitController = new FormSubmitController(this, {
    value: (control: HTMLInputElement) => (control.checked ? control.value || 'on' : undefined)
  });

  @state() protected hasFocus = false;

  /** The radio's name attribute. */
  @property() name: string;

  /** The radio's value attribute. */
  @property() value: string;

  /** Disables the radio. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws the radio in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** Draws the radio in an filled type state. */
  @property({ type: Boolean, reflect: true }) filled = false;

  /** Draws the radio in tick icon */
  @property({ type: Boolean, reflect: true }) tick = false;

  /** The radio's size. */
  @property({ reflect: true }) size: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  /** The radio's label text attribute. */
  @property({ reflect: true }) label: string;

  /** The radio's subLablel attribute. */
  @property({ reflect: true }) subLabel: string;

  /**
   * This will be true when the control is in an invalid state. Validity in radios is determined by the message provided
   * by the `setCustomValidity` method.
   */
  @property({ type: Boolean, reflect: true }) invalid = false;

  @watch('subLablel')
  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'radio');
  }

  /** Simulates a click on the radio. */
  click() {
    this.input.click();
  }

  /** Sets focus on the radio. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the radio. */
  blur() {
    this.input.blur();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }

  handleBlur() {
    this.hasFocus = false;
    emit(this, 'em9-blur');
  }

  handleClick() {
    if (!this.disabled) {
      this.checked = true;
    }
  }

  handleFocus() {
    this.hasFocus = true;
    emit(this, 'em9-focus');
  }

  @watch('checked')
  handleCheckedChange() {
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');

    if (this.hasUpdated) {
      emit(this, 'em9-change');
    }
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');

    // Disabled form controls are always valid, so we need to recheck validity when the state changes
    if (this.hasUpdated) {
      this.input.disabled = this.disabled;
      this.invalid = !this.input.checkValidity();
    }
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          radio: true,
          'radio--checked': this.checked,
          'radio--disabled': this.disabled,
          'radio--focused': this.hasFocus,
          'radio--filled': this.filled,
          'radio--xsmall': this.size === 'xsmall',
          'radio--small': this.size === 'small',
          'radio--medium': this.size === 'medium',
          'radio--large': this.size === 'large'
        })}
      >
        <input
          class="radio__input"
          type="radio"
          name=${ifDefined(this.name)}
          value=${ifDefined(this.value)}
          .checked=${live(this.checked)}
          id="radio_${ifDefined(this.name)}"
          .disabled=${this.disabled}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />
        <span part="control" class="radio__control">
          ${this.checked && this.tick
            ? html` <em9-icon name="cs-linear-check" class="check__icon" part="checked-icon"></em9-icon> `
            : ''}
          ${this.checked && !this.tick
            ? html`
                <span part="checked-icon" class="radio__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g fill="currentColor">
                        <circle cx="8" cy="8" r="3.42857143"></circle>
                      </g>
                    </g>
                  </svg>
                </span>
              `
            : ''}
        </span>

        <div part="label">
          <label class="radio__label" part="radio__label">
            ${typeof this.label !== 'undefined'
              ? html`<span class="radio__maintext"> ${this.label} </span>`
              : html` <slot name="label"></slot>`}
            ${typeof this.subLabel !== 'undefined'
              ? html`<span class="radio__subtext"> ${this.subLabel} </span>`
              : html`<slot name="subLabel"> </slot>`}
          </label>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-radio': em9Radio;
  }
}
