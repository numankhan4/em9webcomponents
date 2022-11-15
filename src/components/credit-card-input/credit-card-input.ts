import { LitElement, html } from "lit";
import { customElement, property, query,  state} from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { emit } from "../../internal/event";
import { getBasePath } from "../../utilities/base-path";
import cards from "./cards";
import styles from "./credit-card-input.styles";
import { trimAllSpaces, mask, setMaxlength } from "./helpers";
import rules from "./rules";
import type { PropertyValues } from "lit";


/**
 * @since 1.0
 * @status experimental
 *
 * @dependency em9-input
 *
 * @event em9-change - Emitted when an alteration to the control's value is committed by the user.
 * @event em9-input - Emitted when the control receives input and its value changes.
 * @event em9-focus - Emitted when the control gains focus.
 * @event em9-blur - Emitted when the control loses focus.
 *
 * @slot - The default slot.
 * @slot card-type - Set static card type. Alternatively, you can use the cardType prop.
 * @slot label - The input's label. Alternatively, you can use the label prop.
 * @slot help-text - Help text that describes how to use the input. Alternatively, you can use the help-text prop.
 */
@customElement("em9-credit-card-input")
export default class em9CreditCardInput extends LitElement {
  static styles = styles;

  @query(".cc-field") input: HTMLInputElement;

  /** Makes the input a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** The input's size. */
  @property({ reflect: true }) size: "small" | "medium" | "large" = "medium";

  /** The input's name attribute. */
  @property() name: string;

  @property({ type: Boolean, reflect: true }) lineStyled = false;

  @property({ type: Boolean, reflect: true }) borderLess = false;

  /** The input's value attribute. */
  @property() value = "";

  /** Draws a filled input. */
  @property({ type: Boolean, reflect: true }) filled = false;

  /** Draws a pill-style input with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** The input's label. Alternatively, you can use the label slot. */
  @property() label = "";

  /** The input's help text. Alternatively, you can use the help-text slot. */
  @property({ attribute: "help-text" }) helpText = "";

  /** Adds a clear button when the input is populated. */
  @property({ type: Boolean }) clearable = false;

  /** Adds a password toggle button to password inputs. */
  @property({ attribute: "toggle-password", type: Boolean }) togglePassword = false;

  /** The input's placeholder text. */
  @property() placeholder: string;

  /** Disables the input. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the input readonly. */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /** custom icon . */
  @property({ type: String }) inputIcon = "question-circle";

  /** Write the text for the cc field tooltip content. */
  @property({ type: String }) toolTipText = "This is a hint text to help user.";

  /** Write the text for the cc field. */
  @property({ type: String }) suggestionText = "This is a hint text to help user.";

  /** Render the static ard-type'. */
  @property({
    type: String,
    reflect: false,
    attribute: "card-type"
  }) cardType = `${getBasePath()}/assets/images/unknown.svg`;

  /**
   * This will be true when the control is in an invalid state. Validity is determined by props such as `type`,
   * `required`, `minlength`, `maxlength`, and `pattern` using the browser's constraint validation API.
   */
  @property({ type: Boolean, reflect: true }) invalid = false;

  @state() private hasFocus = false;

  constructor() {
    super();
  }

  // add first update
  protected firstUpdated(_changedProperties: PropertyValues) {

    this.handleInput.bind(this);

    const card = this.predictCard(this.input);
    if (card) this.setCardLogo(card);
    else this.setCardLogo("unknown");
  }

  handleInput() {
    this.input.value = this.input.value.replace(/\D+/g, ""); // replace all leading non-digits with nothing
    this.invalid = false;

    // Check for mask-pattern
    const maskPattern: string | null = this.input.getAttribute("mask-pattern");
    if (maskPattern) this.input.value = mask(this.input.value, maskPattern);

    // predict card and set card logo accordingly
    const card = this.predictCard(this.input);
    if (card) this.setCardLogo(card);
    else this.setCardLogo("unknown");

    // adding or removing error classes based on validation of card
    if (this.validateCard(this.input) && this.input.value.length) this.addClasses(true);
    else this.addClasses(false);

    emit(this, "em9-input");
  }

  predictCard(element: HTMLInputElement) {
    let predictedCard = "";
    const cardNumber: string = trimAllSpaces(element.value);
    // It's a possible card number?
    if (!cardNumber) return false;

    interface card {
      id: number;
      key: string;
      name: string;
      regex: RegExp;
      predict: RegExp;
      maxLength: number;
      maskPattern: string;
    }

    cards.forEach((card: card) => {

      if (cardNumber.length > card.maxLength) return;

      if (card.predict.test(cardNumber)) predictedCard = card.key;

      if (card.predict.test(cardNumber)) {
        element.setAttribute("mask-pattern", card.maskPattern);
        const maxLength = card.maskPattern.length;
        setMaxlength(element, maxLength.toString());
        predictedCard = card.key;
      }
    });
    return predictedCard;
  }

  setCardLogo(card = "unknown") {
    this.cardType = `${getBasePath()}/assets/images/`;

    if (card === "unknown")
      this.cardType += `unknown.svg`;
    else this.cardType += `${card}.svg`;
  }

  validateCard(element: HTMLInputElement): boolean {
    const cardNumber: string = trimAllSpaces(element.value);
    let isTrue = false;
    // If is not a possible card number, then return false
    if (!rules.CardNumber.test(cardNumber)) return false;

    interface card {
      id: number;
      key: string;
      name: string;
      regex: RegExp;
      predict: RegExp;
      maxLength: number;
      maskPattern: string;
    }

    cards.forEach((card: card) => {
      if (card.regex.test(cardNumber)) {
        if (this.validateLuhnAlgorithm(cardNumber)) isTrue = true;
        else isTrue = false;
      }
    });
    return isTrue;
  }

  addClasses(bool: boolean): void {
    if (bool) {
      this.inputIcon = "question-circle";
      this.invalid = false;
    } else {
      this.invalid = true;
      this.inputIcon = "info-circle";
    }
  }

  validateLuhnAlgorithm(number: string): boolean {
    const digits: string[] = number.split("").reverse();
    const oddDigits: number[] = [];
    const evenDigits: number[] = [];

    digits.forEach((digit: string, index: number) => {
      if ((index + 1) % 2 !== 0) {
        oddDigits.push(parseInt(digit));
      } else {
        evenDigits.push(parseInt(digit));
      }
    });

    const s1 = oddDigits.reduce((sum: number, value: number) => {
      return sum + value;
    });
    const s2 = evenDigits
      .map(digit => {
        const multiplication = digit * 2;

        if (multiplication > 9) {
          const separatedDigits = multiplication.toString().split("");
          return parseInt(separatedDigits[0]) + parseInt(separatedDigits[1]);
        }

        return multiplication;
      })
      .reduce((sum: number, value: number) => {
        return sum + value;
      });
    const result = (s1 + s2).toString();
    if (result.endsWith("0")) {
      return true;
    }
    return false;
  }

  /** Sets focus on the input. */
  handleFocus() {
    this.hasFocus = true;
    emit(this, "em9-focus");
  }

  /** Removes focus from the input. */
  handleBlur() {
    this.hasFocus = false;
    emit(this, "em9-blur");
  }

  render() {
    return html`
      <em9-input
        .hasFocus="${this.hasFocus}"
        id="input_${ifDefined(this.name)}"
        .label="${this.label}"
        .size="${this.size}"
        .filled="${this.filled}"
        .lineStyled="${this.lineStyled}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        ?clearable="${this.clearable}"
        .value="${this.value}"
        name="${ifDefined(this.name)}"
        class="${classMap({
          "cc-field": true,
          "em9-cc-input-focus": this.hasFocus
        })}"
        .invalid="${this.invalid && this.input.value !== ""}"
        type="text"
        help-text="${this.suggestionText}"
        placeholder="Card number"
        @input="${this.handleInput}"
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}">

        <em9-icon style="font-size: var(--em9-spacing-2x-large)" part="p-cards" slot="prefix" src="${this.cardType}"></em9-icon>

        <div slot="suffix">
          <em9-tooltip content="${this.toolTipText}" hoist>
            <em9-icon name="cs-linear-help-circle" label="Bold"></em9-icon>
          </em9-tooltip>
        </div>
      </em9-input>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "em9-credit-card-input": em9CreditCardInput;
  }
}
