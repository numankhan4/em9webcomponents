import { html, LitElement } from 'lit';
import { customElement, property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { LocalizeController } from '../../utilities/localize';
import styles from './progress-bar.styles';
import { watch } from '../../internal/watch';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - A label to show inside the indicator will work only if the valPosition is not defined.
 * @csspart labelTop - For bottom floating label or bottom label.
 * @csspart base - The component's internal wrapper.
 * @csspart indicator - The progress bar indicator.
 * @csspart label - The progress bar label inside the bar.
 * @csspart labelBottom - For bottom floating label or bottom label.

@cssproperty    --width    progress bar width
@cssproperty    --height   progress bar height
@cssproperty    --font-size-indicator   progress bar indicator label font size
@cssproperty    --font-weight-indicator   progress bar indicator label font weight
@cssproperty    --font-family-indicator   progress bar indicator label font family
@cssproperty    --label-color-inside-bar  progress bar indicator label color
@cssproperty    --track-color  progress bar track color
@cssproperty    --indicator-color  progress bar indicator color
@cssproperty    --label-color progress bar label color top , bottom
@cssproperty    --label-font-size progress bar label font size top , bottom
@cssproperty    --label-font-weight  progress bar label font weight top , bottom
@cssproperty    --label-margin  progress bar top , bottom label margin
@cssproperty    --floating-label-color progress bar tooltipTop,tooltipBottom label color
@cssproperty    --floating-label-background progress bar tooltipTop,tooltipBottom label background
@cssproperty    --floating-label-padding progress bar tooltipTop,tooltipBottom label padding
@cssproperty    --floating-label-box-shadow progress bar tooltipTop,tooltipBottom label box shadow
@cssproperty    --floating-label-font-size  progress bar tooltipTop,tooltipBottom label font size
@cssproperty    --floating-label-border-radius  progress bar tooltipTop,tooltipBottom label border-radius
@cssproperty    --floating-label-border progress bar tooltipTop,tooltipBottom label border
@cssproperty    --floating-label-font-weight progress bar tooltipTop,tooltipBottom label font weight
@cssproperty    --floating-label-line-height progress bar tooltipTop,tooltipBottom label line height
@cssproperty    --floating-label-margin progress bar tooltipTop,tooltipBottom label margin
@cssproperty    --border-radius-bar progress bar radius
*/
@customElement('em9-progress-bar')
export default class em9ProgressBar extends LitElement {
  static styles = styles;
  private readonly localize = new LocalizeController(this);
  @state() isSlot = false;
  @query('.progress-val-tooltip-top') progresstooltip: HTMLElement;
  @query('.progress-val-tooltip-bottom') progresstooltipbottom: HTMLElement;
  @query('.progress-bar') progressbar: HTMLElement;
  @queryAssignedElements({ slot: '', selector: '' }) _slot!: HTMLElement[];
  /** The current progress, 0 to 100. */
  @property({ type: Number, reflect: true }) value = 0;

  /** When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. */
  @property({ type: Boolean, reflect: true }) indeterminate = false;
  /** for Custom value label other than percentage*/
  @property({ reflect: true }) textcontent = '';
  /** A custom label for the progress bar's aria label. */
  @property() label = '';
  /** A custom variants for the progress bar's. */
  @property({ reflect: true }) variant: 'primary' | 'success' | 'danger' | 'warning' | 'gray' = 'primary';
  /** A placement value for the progress bar's label. */
  @property({ reflect: true }) valPosition?: 'bottom' | 'top' | 'front' | 'tooltipTop' | 'tooltipBottom';

  private updatePositioner() {
    if (this.progresstooltip) {
      setTimeout(() => {
        const width = this.progresstooltip.offsetWidth / 2;
        const valueforposition = this.value;
        const fullprogressbarwidth = this.progressbar.offsetWidth;
        const progressbarwidth = this.progressbar.offsetWidth * (valueforposition / 100);

        if (progressbarwidth > width && progressbarwidth + width < fullprogressbarwidth) {
          this.progresstooltip.style.setProperty('left', `calc(${valueforposition}% - ${width}px`);
        } else if (progressbarwidth < width) {
          this.progresstooltip.style.setProperty('left', `calc(${0}%`);
        } else {
          this.progresstooltip.style.setProperty('left', `calc(${fullprogressbarwidth}px - ${width * 2}px`);
        }
      });
      return;
    }
    if (this.progresstooltipbottom) {
      setTimeout(() => {
        const width = this.progresstooltipbottom.offsetWidth / 2;
        const valueforposition = this.value;
        const fullprogressbarwidth = this.progressbar.offsetWidth;
        const progressbarwidth = this.progressbar.offsetWidth * (valueforposition / 100);

        if (progressbarwidth > width && progressbarwidth + width < fullprogressbarwidth) {
          this.progresstooltipbottom.style.setProperty('left', `calc(${valueforposition}% - ${width}px`);
        } else if (progressbarwidth < width) {
          this.progresstooltipbottom.style.setProperty('left', `calc(${0}%`);
        } else {
          this.progresstooltipbottom.style.setProperty('left', `calc(${fullprogressbarwidth}px - ${width * 2}px`);
        }
      });
      return;
    }

    return;
  }
  isSlotExist() {
    console.log(this.slot.length);
    if (this.slot.length > 0) {
      this.isSlot = true;
    }
  }
  @watch('value')
  async firstUpdated() {
    //console.log("first time executed");
    this.isSlotExist();
    this.updatePositioner();
  }
  @watch('value', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    //console.log("on change time executed");
    this.updatePositioner();
  }
  render() {
    return html`
      ${!this.indeterminate && (this.valPosition === 'top' || this.valPosition === 'tooltipTop')
        ? html`
            <span
              part="labelTop"
              class=${classMap({
                'progress-val-label': true,
                'progress-val-top': this.valPosition === 'top',
                'progress-val-tooltip-top': this.valPosition === 'tooltipTop'
              })}
            >
              ${ifDefined(this.textcontent) ? html`${this.textcontent}` : html`${this.value}%`}
            </span>
          `
        : ''}
      <div
        part="base"
        class=${classMap({
          'progress-bar': true,
          'progress-bar--indeterminate': this.indeterminate,
          'progress-bar-primary': this.variant === 'primary',
          'progress-bar-success': this.variant === 'success',
          'progress-bar-danger': this.variant === 'danger',
          'progress-bar-warning': this.variant === 'warning',
          'progress-bar-gray': this.variant === 'gray',
          'progress-bar-inline': this.valPosition === 'front'
        })}
        role="progressbar"
        title=${ifDefined(this.title)}
        aria-label=${ifDefined(this.textcontent)
          ? this.label.length > 0
            ? this.label + ' ' + this.textcontent
            : this.localize.term('progress')
          : this.label.length > 0
          ? this.label
          : this.localize.term('progress')}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value > 100 ? '100' : this.value < 0 ? '0' : this.value}
      >
        <div
          part="indicator"
          class="progress-bar__indicator"
          style=${styleMap({ width: `${this.value > 100 ? '100' : this.value < 0 ? '0' : this.value}%` })}
        >
          ${!this.indeterminate &&
          !(
            this.valPosition === 'bottom' ||
            this.valPosition === 'front' ||
            this.valPosition === 'tooltipBottom' ||
            this.valPosition === 'top' ||
            this.valPosition === 'tooltipTop'
          )
            ? html`
                <span part="label" class="progress-bar__label">
                  <slot></slot>
                </span>
              `
            : ''}
        </div>
      </div>
      ${!this.indeterminate &&
      (this.valPosition === 'bottom' || this.valPosition === 'front' || this.valPosition === 'tooltipBottom')
        ? html`
            <span
              part="labelBottom"
              class=${classMap({
                'progress-val-label': true,
                'progress-val-bottom': this.valPosition === 'bottom',
                'progress-val-front': this.valPosition === 'front',
                'progress-val-tooltip-bottom': this.valPosition === 'tooltipBottom'
              })}
            >
              ${ifDefined(this.textcontent) ? html`${this.textcontent}` : html`${this.value}%`}
            </span>
          `
        : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-progress-bar': em9ProgressBar;
  }
}
