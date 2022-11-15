import { LitElement, html } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './badge.styles';

/**
 * @since 1.0
 * @status stable
 * @slot prefix - Used to prepend an icon or similar element to the badge.
 * @slot - The badge's content.
 * @slot suffix - Used to append an icon or similar element to the badge.
 * @csspart base - The component's internal wrapper.
 */
@customElement('em9-badge')
export default class em9Badge extends LitElement {
  static styles = styles;
  @state()
  IsAvatar = false;
  @state()
  isMainIcon = false;
  @state()
  isPrefixIcon = false;
  @state()
  isSuffixIcon = false;
  @queryAssignedElements({ slot: 'prefix', selector: 'em9-avatar' }) _avatar!: HTMLElement[];
  @queryAssignedElements({ slot: '', selector: 'em9-icon' }) _iconOnly!: HTMLElement[];
  @queryAssignedElements({ slot: 'prefix', selector: 'em9-icon' }) _prefixIcon!: HTMLElement[];
  @queryAssignedElements({ slot: 'suffix', selector: 'em9-icon' }) _suffixIcon!: HTMLElement[];
  /** The badge's variant. */
  @property({ reflect: true }) variant:
    | 'gray'
    | 'danger'
    | 'warning'
    | 'success'
    | 'gray-blue'
    | 'blue'
    | 'primary'
    | 'indigo'
    | 'purple'
    | 'pink'
    | 'rose'
    | 'light-gray'
    | 'light-primary'
    | 'light-danger'
    | 'light-warning'
    | 'light-success'
    | 'light-gray-blue'
    | 'lighter-blue'
    | 'light-blue'
    | 'light-indigo'
    | 'light-purple'
    | 'light-pink'
    | 'light-rose'
    | 'light-orange'
    | 'lighter-gray'
    | 'lighter-primary'
    | 'lighter-success'
    | 'lighter-warning'
    | 'lighter-success' = 'primary';

  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Draws a pill-style badge with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;
  @property({ type: Boolean, reflect: true }) circle = false;
  @property({ type: Boolean, reflect: true }) outline = false;
  /** Makes the badge pulsate to draw attention. */
  @property({ type: Boolean, reflect: true }) pulse = false;
  avatarExists() {
    if (this._avatar.length !== 0) {
      this.IsAvatar = true;
    }
  }
  iconExists() {
    if (this._iconOnly.length !== 0) {
      this.isMainIcon = true;
    }
  }
  prefixIconExists() {
    if (this._prefixIcon.length !== 0) {
      this.isPrefixIcon = true;
    }
  }
  suffixIconExists() {
    if (this._suffixIcon.length !== 0) {
      this.isSuffixIcon = true;
    }
  }
  async firstUpdated() {
    await this.updateComplete;
    this.avatarExists();
    this.iconExists();
    this.prefixIconExists();
    this.suffixIconExists();
  }

  render() {
    return html`
      <span
        part="base"
        class=${classMap({
          badge: true,
          'badge--small': this.size === 'small',
          'badge--medium': this.size === 'medium',
          'badge--large': this.size === 'large',
          'badge--has--img': this.IsAvatar,
          'badge--has--only--icon': this.isMainIcon,
          'badge--has--prefix--icon': this.isPrefixIcon,
          'badge--has--suffix--icon': this.isSuffixIcon,
          'badge--pill': this.pill,
          'badge--circle': this.circle,
          'badge--pulse': this.pulse
        })}
        role="status"
      >
        <slot name="prefix"></slot>
        <slot class="label"></slot>
        <slot name="suffix"></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-badge': em9Badge;
  }
}
