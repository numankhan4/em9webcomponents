import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { emit } from '../../internal/event';
import { FormSubmitController } from '../../internal/form';
import { watch } from '../../internal/watch';
import styles from './switch.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - The switch's label.
 * @slot subLabel- The switch subLabel.
 * @slot labelInside- The Label inside switch.
 *
 * @event em9-blur - Emitted when the control loses focus.
 * @event em9-change - Emitted when the control's checked state changes.
 * @event em9-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart control - The switch control.
 * @csspart thumb - The switch position indicator.
 * @csspart label - The switch label.
 *
 * @cssproperty --switch-base-bg set the base background color.
 * @cssproperty --switch-border-width set the border color of base.
 * @cssproperty --switch-height set the height of base.
 * @cssproperty --thumb-size set the size of thumb.
 * @cssproperty --switch-width set the width of toggle.
 * @cssproperty --thumb-shadow set the shadow of thumb.
 * @cssproperty --thumb-focused set the shadow of focused state of thumb.
 * @cssproperty --label-margin-left set the left margin of label.
 * @cssproperty --thumb-bg set the background of thumb.
 * @cssproperty --switch-hover set the switch hover state.
 * @cssproperty --switch-focus-bg set the focus state background.
 * @cssproperty --switch-checked-bg set the checked state background.
 * @cssproperty --switch-checked-hover set the checked state hover.
 * @cssproperty --switch-label-font-weight set the font weight.
 * @cssproperty --switch-label-font-size set the font size.
 * @cssproperty --switch-label-color set the label color.
 * @cssproperty --subLabel-color set the sub label color.
 * @cssproperty --labelInsideColor set the inside label color.
 * @cssproperty --labelInsideCheckedColor set the inside label color of  checked state.
 * @cssproperty --labelInsidePadding set inside label switch padding.
 * @cssproperty --labelInsideCheckedPadding set inside label switch padding of  checked state.
 * @cssproperty --labelInsideThumbLeft set inside label thumb left space.
 * @cssproperty --labelInsideCheckedThumbLeft set inside label thumb left space of  checked state.
 *
 */
@customElement('em9-switch')
export default class em9Switch extends LitElement {
  static styles = styles;

  @query('input[type="checkbox"]') input: HTMLInputElement;
  @query('.switch') switchElement: HTMLElement;

  // @ts-expect-error -- Controller is currently unused
  private readonly formSubmitController = new FormSubmitController(this, {
    value: (control: em9Switch) => (control.checked ? control.value : undefined)
  });

  @state() private hasFocus = false;

  /** The switch's name attribute. */
  @property() name: string;

  /** The switch's value attribute. */
  @property() value: string;

  /** Disables the switch. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the switch a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Draws the switch in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** This will be true when the control is in an invalid state. Validity is determined by the `required` prop. */
  @property({ type: Boolean, reflect: true }) invalid = false;

  /** The switch subLabel attribute. */
  @property() subLabel: string;

  /** The switch's inside label attribute. */
  @property() labelInside: string;

  /** The switch's size. */
  @property({ reflect: true }) size: 'small' | 'medium' = 'small';

  private ids = 'switch_i_' + Math.floor(Math.random() * 10000);

  firstUpdated() {
    this.invalid = !this.input.checkValidity();
  }

  /** Set a unique id */
  setId() {
    return this.ids;
  }

  /** Simulates a click on the switch. */
  click() {
    this.input.click();
  }

  /** Sets focus on the switch. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the switch. */
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

  @watch('checked', { waitUntilFirstUpdate: true })
  handleCheckedChange() {
    this.input.checked = this.checked;
    this.invalid = !this.input.checkValidity();
  }

  handleClick() {
    this.checked = !this.checked;
    !this.checked
      ? this.switchElement.classList.add('switch--un-checked')
      : this.switchElement.classList.remove('switch--un-checked');
    emit(this, 'em9-change');
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

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.checked = false;
      !this.checked
        ? this.switchElement.classList.add('switch--un-checked')
        : this.switchElement.classList.remove('switch--un-checked');
      emit(this, 'em9-change');
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.checked = true;
      !this.checked
        ? this.switchElement.classList.remove('switch--un-checked')
        : this.switchElement.classList.add('switch--un-checked');
      emit(this, 'em9-change');
    }
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          switch: true,
          'switch--labelInside': typeof this.labelInside !== 'undefined',
          'switch--checked': this.checked,
          'switch--disabled': this.disabled,
          'switch--focused': this.hasFocus,
          'switch--small': this.size === 'small',
          'switch--medium': this.size === 'medium'
        })}
      >
        <div part="controlParent" class="switch__wrapper">
          <input
            id=${this.setId()}
            part="input"
            class="switch__input"
            type="checkbox"
            name=${ifDefined(this.name)}
            value=${ifDefined(this.value)}
            .checked=${live(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? 'true' : 'false'}
            @click=${this.handleClick}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />
          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
            ${typeof this.labelInside !== 'undefined'
              ? html`<span class="switch--labelInside__text">
                  <slot name="labelInside"> ${this.labelInside} </slot>
                </span>`
              : html`<slot name="labelInside"> </slot>`}
          </span>
        </div>
        <div class="label">
          <label for=${this.setId()} class="switch__label" part="switch-label">
            <span part="label">
              <slot></slot>
            </span>
            ${typeof this.subLabel !== 'undefined'
              ? html`<span class="switch__subtext" part="sub-text">
                  <slot name="subLabel"> ${this.subLabel} </slot>
                </span>`
              : html`<slot name="subLabel"> </slot>`}
          </label>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-switch': em9Switch;
  }
}
