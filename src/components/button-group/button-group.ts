import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './button-group.styles';

const BUTTON_CHILDREN = ['em9-button', 'em9-radio-button'];

/**
 * @since 1.0
 * @status stable
 *
 * @slot - One or more `<em9-button>` elements to display in the button group.
 *
 * @csspart base - The component's internal wrapper.
 */
@customElement('em9-button-group')
export default class em9ButtonGroup extends LitElement {
  static styles = styles;

  @query('slot') defaultSlot: HTMLSlotElement;

  /** A label to use for the button group's `aria-label` attribute. */
  @property() label = '';
  @property({ type: Boolean, reflect: true }) tab=false;

  handleClick(event: CustomEvent) {
    const slottedElements=[...this.defaultSlot.assignedElements({ flatten: true })] as HTMLElement[]
    slottedElements.forEach(el => {
      const button = findButton(el);

      if (button?.classList.contains('em9-button-group__button--active')) {

        button.classList.add('em9-button-group__button--passive');
        button.classList.remove('em9-button-group__button--active');
      }
    });
    const button = findButton(event.target as HTMLElement);
    console.log("button");
    button?.classList.remove('em9-button-group__button--passive');
    button?.classList.add('em9-button-group__button--active');


  }

  handleFocus(event: CustomEvent) {
    const button = findButton(event.target as HTMLElement);
    this.tab?button?.classList.add('em9-button-tabgroup__button--focus'):
    button?.classList.add('em9-button-group__button--focus');
  }

  handleBlur(event: CustomEvent) {
    const button = findButton(event.target as HTMLElement);
    this.tab?button?.classList.remove('em9-button-tabgroup__button--focus'):
    button?.classList.remove('em9-button-group__button--focus');
  }

  handleMouseOver(event: CustomEvent) {
    const button = findButton(event.target as HTMLElement);
    this.tab?button?.classList.add('em9-button-tabgroup__button--hover'):
    button?.classList.add('em9-button-group__button--hover');
  }

  handleMouseOut(event: CustomEvent) {
    const button = findButton(event.target as HTMLElement);
    this.tab?button?.classList.remove('em9-button-tabgroup__button--hover'):
    button?.classList.remove('em9-button-group__button--hover');
  }

  handleSlotChange() {
    const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })] as HTMLElement[];

    slottedElements.forEach(el => {
      const index = slottedElements.indexOf(el);
      const button = findButton(el);

      if (button !== null && !this.tab) {

        button.classList.add('em9-button-group__button');
        button.classList.toggle('em9-button-group__button--first', index === 0);
        button.classList.toggle('em9-button-group__button--inner', index > 0 && index < slottedElements.length - 1);
        button.classList.toggle('em9-button-group__button--last', index === slottedElements.length - 1);
      }
      else if(button !== null && this.tab)
      {
        button.classList.add('em9-button-tabgroup__button');
        button.classList.toggle('em9-button-group__button--active', index === 0);
        button.classList.toggle('em9-button-group__button--passive', index > 0 && index < slottedElements.length);
      }
    });
  }

  render() {
    // eslint-disable-next-line lit-a11y/mouse-events-have-key-events -- focusout & focusin support bubbling whereas focus & blur do not which is necessary here
    return html`
      <div
        part="base"
        class=${classMap({
          'button-group': true,
          'button--tabGroup': this.tab
        })}
        role="group"
        aria-label=${this.label}
        @click=${this.handleClick}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
}

function findButton(el: HTMLElement) {
  return BUTTON_CHILDREN.includes(el.tagName.toLowerCase()) ? el : el.querySelector(BUTTON_CHILDREN.join(','));
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-button-group': em9ButtonGroup;
  }
}
