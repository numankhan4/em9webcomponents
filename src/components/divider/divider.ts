import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import styles from './divider.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @cssproperty --color - The color of the divider.
 * @cssproperty --width - The width of the divider.
 * @cssproperty --spacing - The spacing of the divider.
 */
@customElement('em9-divider')
export default class em9Divider extends LitElement {
  static styles = styles;

  /** Draws the divider in a vertical orientation. */
  @property({ type: Boolean, reflect: true }) vertical = false;

  firstUpdated() {
    this.setAttribute('role', 'separator');
  }

  @watch('vertical')
  handleVerticalChange() {
    this.setAttribute('aria-orientation', this.vertical ? 'vertical' : 'horizontal');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-divider': em9Divider;
  }
}
