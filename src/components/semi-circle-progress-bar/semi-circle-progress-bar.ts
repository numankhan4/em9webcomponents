import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './semi-circle-progress-bar.styles';
import { LocalizeController } from '../../utilities/localize';
/**
 * @since 1.0
 * @status experimental
 *
 * @csspart base - The component's internal wrapper.
 * @csspart labelTop - part used for text label
 * @csspart labelTextValue - part used for % label
 *
 * @cssproperty --size - width of progress bar.
 * @cssproperty --track-width - width of progress bar track.
 * @cssproperty --semi-track-color - empty progress bar track color.
 * @cssproperty --semi-indicator-color - filled progress bar track color.
 * @cssproperty --semi-label-font-size - label font-size.
 * @cssproperty --semi-label-line-height - label line height.
 * @cssproperty --semi-label-color - label color.
 * @cssproperty --semi-label-font-weight - label font-weight.
 * @cssproperty --semi-label-width - label span width.
 * @cssproperty --semi-value-font-size - value Label font-size.
 * @cssproperty --semi-value-line-height - value Label line height.
 * @cssproperty --semi-value-color - value Label color.
 * @cssproperty --semi-value-font-weight - value label font-weight.
 *
 */

@customElement('em9-semi-circle-progress-bar')
export default class em9SemiCircleProgressBar extends LitElement {
  static styles = styles;
  private readonly localize = new LocalizeController(this);
  /** The semi circle content subText.  */
  @property() label = '';
  /** The semi circle Percentage label  */
  @property({ reflect: true }) labelTextValue = '';
  /**  value of progress*/
  @property({ type: Number, reflect: true }) value = 100;

  /** Semi circle sizes  */
  @property({ type: String, reflect: true }) size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' = 'xs';

  render() {
    let circleIndicator = 'block';
    const noLabel = ifDefined(this.label) ? '' : 'noLabel';
    let curVal = this.value;
    curVal < 0 ? (curVal = 0) : curVal > 100 ? (curVal = 100) : (curVal = this.value);
    const dashOffset = `${2.26 * curVal}, 228`.toString();
    if (2.26 * curVal <= 0) {
      circleIndicator = 'none';
    } else {
      circleIndicator = 'block';
    }

    return html`${this.size === 'xxs'
      ? html`<div class="text-in-base">
          <div
            part="base"
            class="progress-semi-circle"
            role="progressbar"
            aria-label=${ifDefined(this.labelTextValue) && this.label.length > 0
              ? this.label + ' ' + this.labelTextValue
              : this.label.length > 0
              ? this.label
              : this.localize.term('progress')}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="${this.value}"
            style="--percentage: ${this.value / 100}"
          >
            <div class="circle">
              <svg class="progress_bar" viewBox="0 0 160 87" fill="none" preserveAspectRatio="none">
                <path
                  class="first-path"
                  d="M152 80C152 70.5448 150.138 61.1822 146.519 52.4468C142.901 43.7114 137.598 35.7741 130.912 29.0883C124.226 22.4025 116.289 17.099 107.553 13.4807C98.8178 9.86234 89.4552 8 80 8C70.5448 7.99999 61.1823 9.86232 52.4468 13.4807C43.7114 17.099 35.7742 22.4025 29.0883 29.0883C22.4025 35.7741 17.099 43.7113 13.4807 52.4468C9.86234 61.1822 8 70.5448 8 80"
                  stroke="var(--semi-track-color)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="second-path"
                  d="M152 80C152 70.5448 150.138 61.1822 146.519 52.4468C142.901 43.7114 137.598 35.7741 130.912 29.0883C124.226 22.4025 116.289 17.099 107.553 13.4807C98.8178 9.86234 89.4552 8 80 8C70.5448 7.99999 61.1823 9.86232 52.4468 13.4807C43.7114 17.099 35.7742 22.4025 29.0883 29.0883C22.4025 35.7741 17.099 43.7113 13.4807 52.4468C9.86234 61.1822 8 70.5448 8 80"
                  stroke="var(--semi-indicator-color)"
                  style="display:${circleIndicator};stroke-dasharray:${dashOffset}"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="${classMap({ 'semi-circle-label': true })}">
              <span part="labelTextValue" class="value"> ${this.labelTextValue} </span>
            </div>
          </div>
          <span part="labelTop" class="label"> ${this.label} </span>
        </div> `
      : html`<div
          part="base"
          class="progress-semi-circle"
          role="progressbar"
          aria-label=${ifDefined(this.labelTextValue) && this.label.length > 0
            ? this.label + ' ' + this.labelTextValue
            : this.label.length > 0
            ? this.label
            : this.localize.term('progress')}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="${this.value}"
          style="--percentage: ${this.value / 100}"
        >
          <div class="circle">
            <svg class="progress_bar" viewBox="0 0 160 87" fill="none" preserveAspectRatio="none">
              <path
                class="first-path"
                d="M152 80C152 70.5448 150.138 61.1822 146.519 52.4468C142.901 43.7114 137.598 35.7741 130.912 29.0883C124.226 22.4025 116.289 17.099 107.553 13.4807C98.8178 9.86234 89.4552 8 80 8C70.5448 7.99999 61.1823 9.86232 52.4468 13.4807C43.7114 17.099 35.7742 22.4025 29.0883 29.0883C22.4025 35.7741 17.099 43.7113 13.4807 52.4468C9.86234 61.1822 8 70.5448 8 80"
                stroke="var(--semi-track-color)"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="second-path"
                d="M152 80C152 70.5448 150.138 61.1822 146.519 52.4468C142.901 43.7114 137.598 35.7741 130.912 29.0883C124.226 22.4025 116.289 17.099 107.553 13.4807C98.8178 9.86234 89.4552 8 80 8C70.5448 7.99999 61.1823 9.86232 52.4468 13.4807C43.7114 17.099 35.7742 22.4025 29.0883 29.0883C22.4025 35.7741 17.099 43.7113 13.4807 52.4468C9.86234 61.1822 8 70.5448 8 80"
                stroke="var(--semi-indicator-color)"
                style="display:${circleIndicator};stroke-dasharray:${dashOffset}"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="${classMap({ 'semi-circle-label': true })}">
            <span part="labelTop" class="label"> ${this.label} </span>
            <span part="labelTextValue" class="value ${noLabel}"> ${this.labelTextValue} </span>
          </div>
        </div>`} `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-semi-circle-progress-bar': em9SemiCircleProgressBar;
  }
}
