import { LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html, literal } from 'lit/static-html.js';
import '../../components/spinner/spinner';
import { emit } from '../../internal/event';
import { FormSubmitController } from '../../internal/form';
import { HasSlotController } from '../../internal/slot';
import { LocalizeController } from '../../utilities/localize';
import styles from './button.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @dependency em9-spinner
 *
 * @event em9-blur - Emitted when the button loses focus.
 * @event em9-focus - Emitted when the button gains focus.
 *
 * @slot - The button's label
 * @slot - The button's icon if onlyicon selected.
 * @slot prefix - Used to prepend an icon or similar element to the button.
 * @slot suffix - Used to append an icon or similar element to the button.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart linkbase - The component's internal wrapper for link gray and link color variant.
 * @csspart icon - The  icon's container.
 * @csspart dot - The loading dot icon container.
 * @csspart prefix - The prefix slot's container.
 * @csspart label - The button's label.
 * @csspart suffix - The suffix slot's container.
 * @csspart caret - The button's caret.
 */
@customElement('em9-button')
export default class em9Button extends LitElement {
  static styles = styles;

  @query('.button') button: HTMLButtonElement | HTMLLinkElement;

  private readonly formSubmitController = new FormSubmitController(this, {
    form: (input: HTMLInputElement) => {
      // Buttons support a form attribute that points to an arbitrary form, so if this attribute it set we need to query
      // the form from the same root using its id
      if (input.hasAttribute('form')) {
        const doc = input.getRootNode() as Document | ShadowRoot;
        const formId = input.getAttribute('form')!;
        return doc.getElementById(formId) as HTMLFormElement;
      }

      // Fall back to the closest containing form
      return input.closest('form');
    }
  });
  private readonly hasSlotController = new HasSlotController(this, '[default]', 'prefix', 'suffix');
  private readonly localize = new LocalizeController(this);

  @state() private hasFocus = false;

  /** The button's variant. */
  @property({ reflect: true }) variant:
    | 'primary'
    | 'secondary gray'
    | 'secondary color'
    | 'tertiary gray'
    | 'tertiary color'
    | 'link gray'
    | 'link color'
    | 'primary light'
    | 'primary dark'
    | 'gray light'
    | 'gray dark'
     = 'primary';

 /** Draws the button for destructive state */
 @property({ type: Boolean, reflect: true }) destructive = false;

  /** Draws the leading dot with in button*/
  @property({ type: Boolean, reflect: true }) leadingdot = false;

  /** Draws the button with icon only */
  @property({ type: Boolean, reflect: true }) onlyicon = false;

  /** The button's size. */
  @property({ reflect: true }) size: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | '2x-large' =
    'medium';

  /** Draws the button with a caret for use with dropdowns, popovers, etc. */
  @property({ type: Boolean, reflect: true }) caret = false;

  /** Disables the button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws the button in a loading state. */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** Draws a pill-style button with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** Draws a circle button. */
  @property({ type: Boolean, reflect: true }) circle = false;

  /** Draws a circle button. */
  @property({ type: Boolean, reflect: true }) noPadding = false;

  /**
   * The type of button. When the type is `submit`, the button will submit the surrounding form. Note that the default
   * value is `button` instead of `submit`, which is opposite of how native `<button>` elements behave.
   */
  @property() type: 'button' | 'submit' = 'button';

  /** An optional name for the button. Ignored when `href` is set. */
  @property() name?: string;

  /** An optional value for the button. Ignored when `href` is set. */
  @property() value?: string;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property() href?: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @property() target?: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  @property() download?: string;

  /**
   * The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
   * value of this attribute must be an id of a form in the same document or shadow root as the button.
   */
  @property() form: string;

  /** Used to override the form owner's `action` attribute. */
  @property({ attribute: 'formaction' }) formAction: string;

  /** Used to override the form owner's `method` attribute.  */
  @property({ attribute: 'formmethod' }) formMethod: 'post' | 'get';

  /** Used to override the form owner's `novalidate` attribute. */
  @property({ attribute: 'formnovalidate', type: Boolean }) formNoValidate: boolean;

  /** Used to override the form owner's `target` attribute. */
  @property({ attribute: 'formtarget' }) formTarget: '_self' | '_blank' | '_parent' | '_top' | string;

  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }

  /** Sets focus on the button. */
  focus(options?: FocusOptions) {
    this.button.focus(options);
  }

  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }

  handleBlur() {
    this.hasFocus = false;
    emit(this, 'em9-blur');
  }

  handleFocus() {
    this.hasFocus = true;
    emit(this, 'em9-focus');
  }

  handleClick(event: MouseEvent) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (this.type === 'submit') {
      this.formSubmitController.submit(this);
    }
  }

  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? literal`a` : literal`button`;


    /* eslint-disable lit/binding-positions, lit/no-invalid-html */
    return html`
      <${tag}
        part=${(this.variant==='link gray' || this.variant==='link color' )? "linkbase" : "base"}
        class=${classMap({
          button: true,
          'button--caret': this.caret,
          'button--circle': this.circle,
          'button--disabled': this.disabled,
          'button--focused': this.hasFocus,
          'button--loading': this.loading,
          'button--rtl': this.localize.dir() === 'rtl',
          'button--has-label': this.hasSlotController.test('[default]'),
          'button--has-prefix': this.hasSlotController.test('prefix'),
          'button--has-suffix': this.hasSlotController.test('suffix'),
          'no-padding': this.noPadding
        })}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        type=${ifDefined(isLink ? undefined : this.type)}
        name=${ifDefined(isLink ? undefined : this.name)}
        value=${ifDefined(isLink ? undefined : this.value)}
        href=${ifDefined(isLink ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        rel=${ifDefined(isLink && this.target ? 'noreferrer noopener' : undefined)}
        role=${ifDefined(isLink ? undefined : 'button')}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        tabindex=${this.disabled ? '-1' : '0'}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >

        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        ${
          this.leadingdot
            ? html`
                <span part="dot" class="button__dot">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="currentColor"/>
                  </svg>
                </span>
              `
            : ''
        }
        ${
          this.onlyicon
            ? html`
                <span part="icon" class="button__icon">
                  <slot>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6819 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331C4.31814 1.33331 1.33337 4.31808 1.33337 7.99998C1.33337 11.6819 4.31814 14.6666 8.00004 14.6666Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </slot>
                </span>
              `
            : html`
                  <span part="label">
                    <slot></slot>
                  </span>
            `
        }

        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${
          this.caret
            ? html`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `
            : ''
        }

        ${this.loading ? html`<em9-spinner></em9-spinner>` : ''}
      </${tag}>
    `;
    /* eslint-enable lit/binding-positions, lit/no-invalid-html */
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-button': em9Button;
  }
}
