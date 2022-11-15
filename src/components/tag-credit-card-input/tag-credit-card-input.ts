import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emit } from '../../internal/event';
import { watch } from '../../internal/watch';
import styles from './tag-credit-card-input.styles';

/**
 * @since 1.0
 * @status experimental
 *
 * @dependency em9-example
 *
 * @event em9-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('em9-tag-credit-card-input')
export default class em9TagCreditCardInput extends LitElement {
  static styles = styles;

  /** An example property. */
  @property() prop = 'example';

  @watch('someProp')
  doSomething() {
    // Example event
    emit(this, 'em9-event-name');
  }

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-tag-credit-card-input': em9TagCreditCardInput;
  }
}
