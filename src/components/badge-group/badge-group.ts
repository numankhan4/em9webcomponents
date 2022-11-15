import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './badge-group.styles';

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
@customElement('em9-badge-group')
export default class em9BadgeGroup extends LitElement {
  static styles = styles;

  /** An example property. */
  @property({ reflect: true }) variant:
    | 'primary-lighter'
    | 'primary-light'
    | 'primary'
    | 'success-lighter'
    | 'success-light'
    | 'success'
    | 'gray-lighter'
    | 'gray-light'
    | 'gray'
    | 'warning-lighter'
    | 'warning-light'
    | 'warning'
    | 'danger-lighter'
    | 'danger-light'
    | 'danger' = 'primary';

  @property({ type: Boolean, reflect: true }) badgeRight = false;
  @property({ type: String , reflect: true }) Size : 'medium'|'large'= 'large';
  @property({ type: String , reflect: true}) iconname = '';
  render() {
    return html`
    <div class="badge-group ${this.badgeRight ? 'badge-right' : ''}  badge-group-${this.variant}">
       <div part="badge-group-badge" class="badge-parent">
         <slot name="badge"></slot>
       </div>
        <div  part="badge-group-text" class="badge-title">
          <slot><slot>
        </div>

        ${this.iconname ? html` <em9-icon class="badge-group-icon" part="badge-group-icon" name="${this.iconname}"></em9-icon> ` : ''}

    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-badge-group': em9BadgeGroup;
  }
}
