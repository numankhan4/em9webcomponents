import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './empty-states.styles';
import { HasSlotController } from '../../internal/slot';
import { classMap } from 'lit/directives/class-map.js';
import em9Element from 'src/internal/em9Element';

/**
 * @since 1.0
 * @status Stable
 *
 * @dependency em9-icon
 *
 * @slot label	The empty state label. Alternatively, you can use the label prop.
 * @slot description The empty state description. Alternatively, you can use the description prop.
 * @slot headerArt - The empty state header art. Alternatively, you can use the headerArt prop for icon name.
 * @slot footer - Displayed after the description.
 *
 * @csspart base - The component internal wrapper.
 * @csspart header - The component header wrapper.
 * @csspart header-art - The component header art.
 * @csspart art-frame - The component art frame.
 * @csspart header-title - The component header title.
 * @csspart body - The component body wrapper.
 * @csspart footer - The component footer wrapper.
 *
 *
   @cssproperty --card-spacing Define the padding of card.
   @cssproperty --card-bg Define the background of card.
   @cssproperty --card-border-radius Defines the border-radius of card.
   @cssproperty --card-border Defines the border of card.
   @cssproperty --art-width Define the width of art icon.
   @cssproperty --art-height Define the height of art icon.
   @cssproperty --art-icon-size Define the font size of icon.
 */

@customElement('em9-empty-states')
export default class em9EmptyStates extends em9Element {
  static styles = styles;

  private readonly hasSlotController = new HasSlotController(this, 'footer');
  private readonly hasSlotControllerBody = new HasSlotController(this, 'description');

  /**
   * The empty-state's label as displayed in the header. You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility. If you need to display HTML, you can use the `label` slot instead.
   */
  @property({ reflect: true }) label = '';

  /**
   * The empty-state's description as displayed in the body.
   */
  @property({ reflect: true }) description = '';

  /**
   * The empty-state's headerArt as displayed in the header.
   */
  @property({ reflect: true }) headerArt = '';

  /**
   * The error state will be contained in a card.
   */
  @property({ type: Boolean, reflect: true }) noHeader = false;

  /**
   * Disables the header.
   */
  @property({ type: Boolean, reflect: true }) containedInCard = false;

  /** empty-state content alignments */
  @property({ reflect: true }) layout: 'layoutLeft' | 'layoutCenter' | 'layoutAsideLeft';

  /** Defines the size variation of empty state */
  @property({ reflect: true }) size: 'small' | 'medium' = 'small';

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'empty-state': true,
          'empty-state--small': this.size === 'small',
          'empty-state--medium': this.size === 'medium',
          'empty-state--has-card': this.containedInCard,
          'empty-state--has-footer': this.hasSlotController.test('footer'),
          'empty-state--has-content': this.hasSlotControllerBody.test('description') || this.description,

          'layout--left': this.layout === 'layoutLeft',
          'empty-state--layout-center': this.layout === 'layoutCenter',
          'layout--left-aside': this.layout === 'layoutAsideLeft'
        })}
      >
        ${!this.noHeader
          ? html`
              <header part="header" class="empty-state__header">
                <div class="empty-state__header-inner">
                  <div part="header-art" class="empty-state__header-art">
                    <slot name="headerArt" part="art">
                      ${this.headerArt.length > 0
                        ? html` <span part="art-frame" class="art_frame"
                            ><em9-icon part="art-icon" class="art_frame-icon" name="${this.headerArt}"></em9-icon
                          ></span>`
                        : null}
                    </slot>
                  </div>
                  <div part="header-title" class="empty-state__header-title">
                    <h2 part="title" class="empty-state__title" id="title">
                      <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                    </h2>
                  </div>
                </div>
              </header>
            `
          : ''}
        <div part="body" class="empty-state__body">
          <div class="empty-state__scroll">
            <slot name="description">${this.description.length > 0 ? this.description : null}</slot>
          </div>
        </div>
        <footer part="footer" class="empty-state__footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-empty-states': em9EmptyStates;
  }
}
