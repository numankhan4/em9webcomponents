import { html, LitElement } from 'lit';
import { customElement, property, query, state, queryAssignedNodes } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { emit } from '../../internal/event';
import { FormSubmitController } from '../../internal/form';
import { watch } from '../../internal/watch';
import styles from './checkbox.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot label - The checkbox's main label.
 * @slot subLabel - The checkbox's subLabel.
 *
 * @event em9-blur - Emitted when the control loses focus.
 * @event em9-change - Emitted when the control's checked state changes.
 * @event em9-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart controlParent - The checkbox control parent.
 * @csspart control - The checkbox control.
 * @csspart checked-icon - The container the wraps the checked icon.
 * @csspart indeterminate-icon - The container that wraps the indeterminate icon.
 * @csspart label - The checkbox label wrapper div.
 * @csspart checkbox__label - The checkbox label.
 *
 *
@cssproperty    --em9-checkbox-font-family  Checkbox label font-family
@cssproperty    --em9-checkbox-font-size   Checkbox label font-size
@cssproperty    --em9-checkbox-font-weight Checkbox label font-weight
@cssproperty    --em9-checkbox-color  Checkbox label color
@cssproperty    --em9-checkbox-border-radius Checkbox border-radius
@cssproperty    --em9-checkbox-unchecked-border-width  Checkbox border-width and type
@cssproperty    --em9-checkbox-unchecked-border-color  Checkbox unchecked state border-color
@cssproperty    --em9-checkbox-unchecked-background-color  Checkbox unchecked state background-color
@cssproperty    --em9-checkbox-unchecked-color Checkbox unchecked state color
@cssproperty    --em9-checkbox-subText-color Checkbox subtext color
@cssproperty    --em9-checkbox-subText-line-height Checkbox subtext line-height
@cssproperty    --em9-checkbox-mainText-line-height Checkbox mainText line-height
@cssproperty    --em9-checkbox-control-width Checkbox width
@cssproperty    --em9-checkbox-control-height Checkbox height
@cssproperty    --em9-checkbox-margin-label Checkbox label part margin
@cssproperty    --em9-checkbox-uncheck-hover-border-color Checkbox unchecked hover state border-color
@cssproperty    --em9-checkbox-uncheck-hover-background-color Checkbox unchecked hover state background-color
@cssproperty    --em9-checkbox-uncheck-focus-border-color Checkbox unchecked focus state border-color
@cssproperty    --em9-checkbox-uncheck-focus-box-shadow  Checkbox unchecked focus state box shadow
@cssproperty    --em9-checkbox-checked-border-color  Checkbox checked  border-color
@cssproperty    --em9-checkbox-checked-background-color Checkbox checked background-color
@cssproperty    --em9-checkbox-checked-color Checkbox checked  state color
@cssproperty    --em9-checkbox-checked-hover-border-color Checkbox checked hover state border-color
@cssproperty    --em9-checkbox-checked-hover-background-color Checkbox checked hover state background-color
@cssproperty    --em9-checkbox-checked-hover-color Checkbox checked hover state color
@cssproperty    --em9-checkbox-checked-focus-box-shadow Checkbox checked focus state color
@cssproperty    --em9-checkbox-checked-focus-border-color Checkbox checked focus border color
@cssproperty    --em9-checkbox-checked-focus-background-color Checkbox checked focus background-color
@cssproperty    --em9-checkbox-checked-focus-color Checkbox checked focus color
@cssproperty    --em9-checkbox-checked-disabled-border-color Checkbox disable state border color
@cssproperty    --em9-checkbox-checked-disabled-background-color Checkbox disable state background color
@cssproperty    --em9-checkbox-checked-disabled-color Checkbox disable state color
@cssproperty    --em9-label-gap  gap between maintext and subtext.
@cssproperty    --em9-checkbox-checked-font-size  checkbox icon font size
 */
@customElement('em9-checkbox')
export default class em9Checkbox extends LitElement {
  static styles = styles;

  @query('input[type="checkbox"]') input: HTMLInputElement;
  @state()
  isLabelSlot = false;
  @state()
  isSubLabelSlot = false;
  @queryAssignedNodes({ slot: 'label' }) _label!: Node[];
  @queryAssignedNodes({ slot: 'subLabel' }) _subLabel!: Node[];
  // @ts-expect-error -- Controller is currently unused
  private readonly formSubmitController = new FormSubmitController(this, {
    value: (control: em9Checkbox) => (control.checked ? control.value || 'on' : undefined)
  });

  @state() private hasFocus = false;
  private ids = `checkbox_i_${Math.floor(Math.random() * 10000)}`;
  getid() {
    return this.ids;
  }
  /** The checkbox's name attribute. */
  @property() name: string;

  /** The checkbox's value attribute. */
  @property() value: string;

  /** Disables the checkbox. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the checkbox a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Draws the checkbox in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** Draws the checkbox in an indeterminate state. */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /** Draws the checkbox in an filled type state. */
  @property({ type: Boolean, reflect: true }) filled = false;

  /** This will be true when the control is in an invalid state. Validity is determined by the `required` prop. */
  @property({ type: Boolean, reflect: true }) invalid = false;

  /** The checkbox's size. */
  @property({ reflect: true }) size: 'xsmall' | 'small' | 'medium' | 'large' = 'small';
  /** The checkbox's shape round or square. */
  @property({ type: Boolean, reflect: true }) round = false;

  /** The checkbox's label text attribute. */
  @property({ reflect: true }) label: string;

  /** The checkbox's subLabel attribute. */
  @property({ reflect: true }) subLabel: string;

  subLabelExists() {
    if (this._subLabel.length !== 0) {
      this.isSubLabelSlot = true;
    }
  }
  labelExists() {
    console.log(this._label);
    if (this._label.length !== 0) {
      this.isLabelSlot = true;
      console.log(this.isLabelSlot);
    }
  }
  firstUpdated() {
    this.invalid = !this.input.checkValidity();
    this.subLabelExists();
    this.labelExists();
  }

  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }

  /** Sets focus on the checkbox. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the checkbox. */
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

  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    emit(this, 'em9-change');
  }

  handleBlur() {
    this.hasFocus = false;
    emit(this, 'em9-blur');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid, so we need to recheck validity when the state changes
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }

  handleFocus() {
    this.hasFocus = true;
    emit(this, 'em9-focus');
  }

  @watch('checked', { waitUntilFirstUpdate: true })
  @watch('indeterminate', { waitUntilFirstUpdate: true })
  handleStateChange() {
    this.invalid = !this.input.checkValidity();
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          checkbox: true,
          'checkbox--checked': this.checked,
          'checkbox--disabled': this.disabled,
          'checkbox--focused': this.hasFocus,
          'checkbox--indeterminate': this.indeterminate,
          'checkbox--filled': this.filled,
          'checkbox--xsmall': this.size === 'xsmall',
          'checkbox--small': this.size === 'small',
          'checkbox--medium': this.size === 'medium',
          'checkbox--large': this.size === 'large',
          'checkbox--subtext': this.subLabel,
          'checkbox--circle': this.round
        })}
      >
        <div part="controlParent" class="checkbox__wrapper">
          <input
            id=${this.getid()}
            class="checkbox__input"
            type="checkbox"
            name=${ifDefined(this.name)}
            value=${ifDefined(this.value)}
            .indeterminate=${live(this.indeterminate)}
            .checked=${live(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? 'true' : 'false'}
            @click=${this.handleClick}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />
          <div part="control" class="checkbox__control">
            ${this.checked
              ? html` <em9-icon name="cs-linear-check" class="check__icon" part="checked-icon"></em9-icon> `
              : ''}
            ${!this.checked && this.indeterminate
              ? html` <em9-icon name="linear-minus" class="check__icon" part="indeterminate-icon"></em9-icon> `
              : ''}
          </div>
        </div>

        <div part="label">
          <label
            for=${this.getid()}
            class=${classMap({
              checkbox__label: this.label || this.subLabel || this.isLabelSlot || this.isSubLabelSlot
            })}
            part="checkbox__label"
          >
            <slot name="label">
              ${typeof this.label !== 'undefined' ? html` <span class="checkbox__maintext"> ${this.label} </span>` : ''}
            </slot>
            <slot name="subLabel">
              ${typeof this.subLabel !== 'undefined'
                ? html`<span class="checkbox__subtext">${this.subLabel}</span>`
                : ''}
            </slot>
          </label>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-checkbox': em9Checkbox;
  }
}
