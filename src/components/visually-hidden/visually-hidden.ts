import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './visually-hidden.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - The content you'd like to be visually hidden.
 */
@customElement('em9-visually-hidden')
export default class em9VisuallyHidden extends LitElement {
  static styles = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-visually-hidden': em9VisuallyHidden;
  }
}
