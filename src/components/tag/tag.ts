import { ifDefined } from 'lit/directives/if-defined.js';
import { html, LitElement } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../components/icon-button/icon-button';
import { emit } from '../../internal/event';
import { LocalizeController } from '../../utilities/localize';
import styles from './tag.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @dependency em9-icon-button
 *
 * @slot - The tag's content.
 *
 * @event em9-remove - Emitted when the remove button is activated.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart content - The tag content.
 * @csspart remove-button - The remove button.
 * @csspart remove-button__base - The remove button's `base` part.
 *
 * @cssproperty  --em9-tag-background - tag background applied on part `base`
 * @cssproperty  --em9-tag-border - tag border applied on part `base`
 * @cssproperty  --em9-tag-border-color - tag border color applied on part `base`
 * @cssproperty  --em9-tag-border-radius - tag border radius applied on part `base`
 * @cssproperty  --em9-tag-color - tag color applied on part `base`
 * @cssproperty  --em9-tag-font-size - tag font size applied on part `base`
 * @cssproperty  --em9-tag-font-weight - tag font weight applied on part `base`
 * @cssproperty  --em9-tag-line-height - tag line height applied on part `base`
 * @cssproperty  --em9-tag-cross-font-size - tag close icon font size applied on part `remove-button`
 * @cssproperty  --em9-tag-cross-color - tag close icon color applied on part `remove-button`
 * @cssproperty  --em9-tag-padding - tag padding applied on part `base`
 *
 */
@customElement('em9-tag')
export default class em9Tag extends LitElement {
  static styles = styles;
  private readonly localize = new LocalizeController(this);
  @state()
  IsPrefix = false;
  @state()
  IsSuffix = false;
  @queryAssignedElements({ slot: 'prefix' }) prefixSlot!: HTMLElement[];
  @queryAssignedElements({ slot: 'suffix' }) suffixSlot!: HTMLElement[];
  /** The tag's variant. */
  @property({ reflect: true })

  /** The tag's size. */
  @property({ reflect: true })
  size: 'small' | 'medium' | 'large' = 'medium';

  /** Draws a pill-style tag with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;
  prefixExist() {
    if (this.prefixSlot.length !== 0) {
      this.IsPrefix = true;
    }
  }
  suffixExist() {
    if (this.suffixSlot.length !== 0) {
      this.IsSuffix = true;
    }
  }
  async firstUpdated() {
    await this.updateComplete;
    this.prefixExist();
    this.suffixExist();
  }
  /** Makes the tag removable. */
  @property({ type: Boolean }) removable = false;
  /**updates close default  icon with given name. */
  @property({ type: String }) removableIconName = '';
  handleRemoveClick() {
    emit(this, 'em9-remove');
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          tag: true,

          // Sizes
          'tag--small': this.size === 'small',
          'tag--medium': this.size === 'medium',
          'tag--large': this.size === 'large',

          // Modifiers
          'tag--pill': this.pill,
          'tag--removable': this.removable,

          'tag--has--prefix': this.IsPrefix,
          'tag--has--suffix': this.IsSuffix
        })}
        tabindex="0"
      >
        <slot name="prefix"></slot>
        <p part="text_Label" class="tag-text"><slot></slot></p>
        <slot name="suffix"></slot>

        ${this.removable
          ? html`
              ${ifDefined(this.removableIconName)
                ? html`<em9-icon-button
                    part="remove-button"
                    exportparts="base:remove-button__base"
                    name=${this.removableIconName}
                    label=${this.localize.term('remove')}
                    class="tag__remove"
                    @click=${this.handleRemoveClick}
                  ></em9-icon-button>`
                : html`<em9-icon-button
                    part="remove-button"
                    exportparts="base:remove-button__base"
                    name="x"
                    library="system"
                    label=${this.localize.term('remove')}
                    class="tag__remove"
                    @click=${this.handleRemoveClick}
                  ></em9-icon-button>`}
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-tag': em9Tag;
  }
}
