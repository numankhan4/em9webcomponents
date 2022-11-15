import { html, LitElement, nothing } from "lit";
import { property, query, state, customElement } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import debounce from "../../utilities/debounce";
import em9Button from "../button/button";
import em9Icon from "../icon/icon";
import em9Tooltip from "../tooltip/tooltip";
import styles from "./combobox.style";
import type em9Dropdown from "../dropdown/dropdown";
import type em9Menu from "../menu/menu";
import type { PropertyValues, TemplateResult, CSSResultGroup } from "lit";

@customElement("em9-combobox")
export default class em9Combobox extends LitElement {
  static styles: CSSResultGroup = styles;

  @query(".autocomplete") dropdown: em9Dropdown;
  @query(".autocomplete__control") control: em9Dropdown;
  @query(".autocomplete__hidden-select") input: HTMLInputElement;
  @query(".autocomplete__menu") menu: em9Menu;
  @query(".autocomplete__button") private _button!: HTMLButtonElement;
  @query(".input-element") private _input!: HTMLInputElement;

  static elementDefinitions = {
    "em9-icon": em9Icon,
    "em9-tooltip": em9Tooltip,
    "em9-button": em9Button
  };

  /** The input's label. Alternatively, you can use the label slot. */
  @property() label = "";

  /** The select's size. */
  @property() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Indicates the value for the input.
   * @attr value
   */
  @property({ type: String, reflect: true })
  public value = "";

  /**
   * Display text when input is empty
   * @attr placeholder
   */
  @property({ type: String, reflect: true })
  public placeholder = "";

  /**
   * Indicates if the dropdown is open.
   * @attr open
   */
  @property({ type: Boolean, reflect: true })
  public open = false;

  /**
   * search text for filtering options
   * @attr searchMode
   */

  @property({ type: Boolean, reflect: true, attribute: "search-mode" })
  public searchMode = false;
  private disabled: any;
  private name: string;
  private messageId: string;
  private invalidated: any;
  private required: any;

  /**
   * The list of options available in the combobox dropdown list
   * @readonly
   */
  @property({ attribute: true, reflect: true })
  public get options(): HTMLOptionElement[] {
    return [...this.children].filter((child) => !child.slot) as HTMLOptionElement[];
  }

  /**
   * The index of the selected option, if any
   * @readonly
   */
  @property({ attribute: false, reflect: false })
  public get selectedIndex(): number {
    return this.options.findIndex((o) => o.value === this.value);
  }

  @state() private hasFocus = false;
  @state() private _displayValue = "";

  private _noResults = false;
  private _query = "";
  private _defaultValue = "";

  private _childrenObserver: MutationObserver = new MutationObserver(
    (mutationsList: MutationRecord[]) => {
      this.requestUpdate();

      if (
        mutationsList.some((record) =>
          [...record.addedNodes].some((node) => node instanceof HTMLOptionElement)
        )
      ) {
        this._setDisplayValue();
      }
    }
  );

  protected override firstUpdated(): void {
    this._setDisplayValue();
    this._input.defaultValue = this._displayValue;
    this._defaultValue = this.value;

    this._childrenObserver.observe(this, {
      subtree: true,
      childList: true
    });
  }

  protected override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has("open") && !this.open) {
      this._query = "";
      this._input.setAttribute("aria-activedescendant", "");
    }
    if (changedProperties.has("value")) {
      this._setDisplayValue();
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._childrenObserver.disconnect();
  }

  public onChange(event: Event): void {
    this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: event
      })
    );
    console.log("onChange", this.value);
  }

  public onInput(): void {

    this.open = true;
    this._displayValue = this._input.value;
    this._query = this._input.value;

    if (this.open) {
      if (this._input.value === "") {
        this.open = true;
      }
    }

    if (this.searchMode) {
      this.value = this._input.value;
    }
    console.log("onInput");
  }

  private _renderList(): TemplateResult | typeof nothing {
    if (this.open) {
      const regex = new RegExp(this._query, "gi");
      const matchingOptions = this.options.filter((child) => {
        return this.searchMode ? child : child.text.match(regex);
      });
      this._noResults = matchingOptions.length === 0;

      if (this.searchMode && !matchingOptions.length) {
        return html``;
      }

      return html`
        ${matchingOptions.length
          ? matchingOptions.map((child, index) => {
            const option = child;
            const exactMatch = this.value === option.value;

            const optionText = this._query
              ? option.text.replace(regex, (str) => {
                const classes = exactMatch
                  ? "combobox__mark combobox__mark--selected"
                  : "combobox__mark";
                return this.searchMode ? `${str}` : `<mark class="${classes}">${str}</mark>`;
              })
              : option.text;

            return html`
              <em9-menu-item
                id="${`result-item-${index}`}"
                class="${classMap({
                  "combobox__option": true,
                  "combobox__option--selected": exactMatch
                })}"
                checked="${exactMatch && !this.searchMode ? `checked` : nothing}"
                aria-label="${option.text}"
                @click="${(event: Event) => this._handleOptionClick(option, event)}"
                @mousedown="${(event: MouseEvent) => {
                  event.preventDefault();
                }}"
              >
                ${unsafeHTML(optionText)}
              </em9-menu-item>
            `;
          })
          : html`
            <div part="404">
              ${unsafeHTML(
                matchingOptions.length
                  ? `${matchingOptions.length} results available.`
                  : `No results found.`
              )}
            </div>`
        }
      `;
    }
    return nothing;
  }

  private _renderClearButton(): TemplateResult | typeof nothing {
    const classes = this.searchMode
      ? "combobox__clear-button combobox__clear-button--search"
      : "combobox__clear-button";
    if (this._displayValue) {
      return html`
        <em9-icon-button
          slot="suffix"
          class=${classes}
          ?disabled=${this.disabled}
          label="Clear option"
          @click=${this._handleClearClick}
          @mousedown=${this._handleClearClick}
          name="bulk-close-circle"></em9-icon-button>
      `;
    }
    return nothing;
  }

  private _renderIconButton(): TemplateResult {
    if (this.searchMode) {
      return html`
        <em9-icon-button
          slot="suffix"
          name="bulk-arrow-down-1"
          class="search__button"
          label="Search"
          ?disabled=${this.disabled}
          @click=${this.onChange}
        ></em9-icon-button>
      `;
    }
    return html`
      <em9-icon-button
        slot="suffix"
        tabindex="-1"
        name="bulk-arrow-down-1"
        type="button"
        class="combobox__button"
        ?disabled=${this.disabled}
        @click=${this._handleButtonClick}
        @blur=${this._handleButtonBlur}>
      </em9-icon-button>
    `;

  }

  private _handleOptionClick(option: HTMLOptionElement, event: Event): void {
    this.value = option.value;
    this._displayValue = option.text.trim();
    this.open = false;
    this.onChange(event);
    console.log("_handleOptionClick");
  }

  private _closeDropdown(): void {
    debounce(() => {
      this.open = false;
    }, 100)();
    console.log("_closeDropdown");
  }

  private _handleButtonClick(event: MouseEvent): void {
    event.preventDefault();
    this._input.focus();
    this.open = true;
    console.log("_handleButtonClick");
  }

  private _handleButtonBlur(event: FocusEvent): void {
    if (event.relatedTarget !== this._input) {
      this._closeDropdown();
    }
    console.log("_handleButtonBlur");
  }

  private _handleClearClick(event: MouseEvent): void {
    event.preventDefault();
    this._handleInputClear(event);
    this._input.focus();
    this.open = true;
    console.log("_handleClearClick");
  }

  private _handleInputBlur(event: FocusEvent): void {
    this._setDisplayValue(true);
    if (event.relatedTarget !== this._button) {
      this._closeDropdown();
    }
    console.log("_handleInputBlur");
  }

  private _handleInputKeydown(event: KeyboardEvent): void {
    event.stopPropagation();

    switch (event.key) {
      case "Enter":
        event.preventDefault();
        this._selectHighlightedOption(event);
        break;
      case "Escape":
      case "Esc":
        event.preventDefault();
        this._handleInputClear(event);
        break;
      case "Down":
      case "ArrowDown":
        event.preventDefault();
        this._handleNavigation(true);
        break;
      case "Up":
      case "ArrowUp":
        event.preventDefault();
        this._handleNavigation(false);
        break;
    }
  }

  private async _handleNavigation(moveForward: boolean): Promise<void> {
    if (!this.open) {
      this.open = true;
      await this.updateComplete;
      console.log("_handleNavigation");
    }

    if (this._noResults) {
      return;
    }

    const options = Array.prototype.slice.call(
      this.renderRoot.querySelectorAll(".combobox__option")
    ) as HTMLLIElement[];
    const values = options.map((option) => option.innerText.trim());

    const highlightedOption = this.renderRoot.querySelector(
      ".combobox__option[highlighted]"
    )!;

    let index = values.findIndex((v) => v === highlightedOption.innerHTML.trim());

    if (moveForward) {
      index = index === values.length - 1 ? 0 : index + 1;
    } else {
      index = index === 0 || index === -1 ? values.length - 1 : index - 1;
    }

    highlightedOption?.removeAttribute("highlighted");
    highlightedOption?.setAttribute("aria-disabled", "false");

    const nextOption = options[index];

    nextOption.scrollIntoView({ behavior: "smooth", block: "nearest" });
    nextOption.setAttribute("highlighted", "");
    nextOption.setAttribute("aria-disabled", "false");
    this._input.setAttribute("aria-activedescendant", nextOption.id);
  }

  private _selectHighlightedOption(event: Event): void {
    const highlightedOption = this.renderRoot.querySelector(".combobox__option[highlighted]") as HTMLElement | null;

    highlightedOption?.addEventListener('click', () => {
      console.log('_selectHighlightedOption')
    });

    if (highlightedOption !== null) {
      highlightedOption?.click();
    } else {
      this.open = false;
    }

    if (this.searchMode) {
      this.onChange(event);
    }
  }

  private _handleInputClear(event: Event): void {
    this.open = false;
    this.value = "";
    this._displayValue = "";
    this.onChange(event);
    console.log("_handleInputClear");
  }

  _handleFormdata(event: CustomEvent): void {
    // @ts-ignore
    const { formData } = event;
    if (!this.disabled) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
      formData.append(this.name, this.value);
    }
    console.log("_handleFormdata");
  }

  _handleFormReset(): void {
    this.value = this._defaultValue;
    this._displayValue = this._input.defaultValue;
    console.log("_handleFormReset");
  }

  private _setDisplayValue(blurred = false) {
    if (this.value && this.selectedIndex >= 0) {
      this._displayValue = this.options[this.selectedIndex].text.trim();
    } else if (this.value === "" && !blurred) {
      this._displayValue = "";
    }
  }

  private _handleInputClick(): void {
    this.open = true;
    if (this.open) {
      this._input.focus();
    }
    console.log("_handleInputClick");
  }


  protected override render(): TemplateResult {
    return html`
      <div part="form-control"
           class=${classMap({
             'form-control': true,
             'form-control--small': this.size === 'small',
             'form-control--medium': this.size === 'medium',
             'form-control--large': this.size === 'large',
           })}>
        <div part="form-control-input" class="form-control-input">
          <em9-dropdown
            part="base"
            open="${this.open}"
            distance="0"
            class=" ${classMap({
              select: true,
              "select--open": this.open,
              "select--empty": !this.value,
              "select--focused": this.hasFocus,
              'select--small': this.size === 'small',
              'select--medium': this.size === 'medium',
              'select--large': this.size === 'large',
            })}"
            .containingElement=${this as HTMLElement}>
            <em9-input
              size="${this.size}"
              part="control"
              slot="trigger"
              label="${this.label}"
              id="input-element"
              class="input-element ${this._displayValue ? "input-element--populated" : null}"
              name="${this.label}"
              type="text"
              .value="${this._displayValue}"
              ?required="${this.required}"
              ?disabled="${this.disabled}"
              placeholder="${this.placeholder}"
              role="combobox"
              aria-expanded="${this.open}"
              aria-controls="combobox-list"
              aria-autocomplete="list"
              aria-required="${this.required}"
              aria-invalid="${this.invalidated}"
              aria-describedby="${ifDefined(this.messageId)}"
              @input=${this.onInput}
              @change=${this.onChange}
              @blur=${this._handleInputBlur}
              @keydown=${this._handleInputKeydown}
              @click=${this._handleInputClick}>
              <em9-icon name="linear-search-normal-1" slot="prefix"></em9-icon>
              ${this._renderClearButton()}
              ${this._renderIconButton()}
            </em9-input>
            <em9-menu>
              ${this._renderList()}
            </em9-menu>
          </em9-dropdown>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "em9-combobox": em9Combobox;
  }
}

