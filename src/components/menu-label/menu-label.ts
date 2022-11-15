import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './menu-label.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - The menu label's content.
 *
 * @csspart base - The component's internal wrapper.
 */
@customElement('em9-menu-label')
export default class em9MenuLabel extends LitElement {
  static styles = styles;

  render() {
    return html`
      <div part="base" class="menu-label">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-menu-label': em9MenuLabel;
  }
}
