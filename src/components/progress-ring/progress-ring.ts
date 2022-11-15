import { ifDefined } from 'lit/directives/if-defined.js';
import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { LocalizeController } from '../../utilities/localize';
import styles from './progress-ring.styles';
import { classMap } from 'lit/directives/class-map.js';

/**
 * @since 1.0
 * @status stable
 *
 * @slot labelText - Text label to show inside the ring.
 * @slot label - value label to show inside the ring.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart label - The progress ring label.
 * @csspart labelText - The progress ring text label.
 * @csspart text-base - The component's internal wrapper  for the bottom text.
 *
 * @cssproperty --size - The diameter of the progress ring (cannot be a percentage).
 * @cssproperty --track-width - The width of the track.
 * @cssproperty --track-color - The color of the track.
 * @cssproperty --indicator-color - The indicator color.
 * @cssproperty --label-value-font-size - The value label font size .
 * @cssproperty --label-value-font-weight -  The value label font weight.
 * @cssproperty --label-text-font-size - The text label font size.
 * @cssproperty --label-text-font-weight - The text label font weight.
 * @cssproperty --label-value-color - The value label color.
 * @cssproperty --label-text-color - The text label .
 * @cssproperty --label-text-margin - The text label margin.
 * @cssproperty  --label-value-width - The value label width .
 * @cssproperty --label-text-width - The text label width.
 */
@customElement('em9-progress-ring')
export default class em9ProgressRing extends LitElement {
  static styles = styles;
  private readonly localize = new LocalizeController(this);

  @query('.progress-ring__indicator') indicator: SVGCircleElement;

  @state() indicatorOffset: string;

  /** The current progress, 0 to 100. */
  @property({ type: Number, reflect: true }) value = 0;
  /**Progress ring's sizes */
  @property({ type: String, reflect: true }) size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' = 'xxs';
  /** A custom value label for the progress ring's*/
  @property() label = '';
  /** A custom Text label for the progress ring's*/
  @property() labelText = '';

  updated(changedProps: Map<string, unknown>) {
    super.updated(changedProps);

    //
    // This block is only required for Safari because it doesn't transition the circle when the custom properties
    // change, possibly because of a mix of pixel + unit-less values in the calc() function. It seems like a Safari bug,
    // but I couldn't pinpoint it so this works around the problem.
    //
    if (changedProps.has('percentage')) {
      let curVal = this.value;
      curVal < 0 ? (curVal = 0 / 100) : curVal > 100 ? (curVal = 100 / 100) : (curVal = this.value / 100);
      const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue('r'));
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - curVal * circumference;
      this.indicatorOffset = `${offset}px`;
    }
  }

  render() {
    return html`
      ${this.size === 'xxs'
        ? html`
            <div part="text-base" class="text-outside-ring-base">
              <div
                part="base"
                class="progress-ring"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="${this.value}"
                aria-label=${ifDefined(this.labelText) && this.label.length > 0
                  ? this.label + ' ' + this.labelText
                  : this.label.length > 0
                  ? this.label
                  : this.localize.term('progress')}
                style="--percentage: ${this.value < 0 ? 0 / 100 : this.value > 100 ? 100 / 100 : this.value / 100}"
              >
                <svg class="progress-ring__image">
                  <circle class="progress-ring__track"></circle>
                  <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
                </svg>
                <span class="progress-ring__label">
                  <span part="label" class="progress-ring__label-value">
                    <slot>${this.label}</slot>
                  </span>
                </span>
              </div>
              <span part="labelText" class="progress-ring__label-text">
                <slot>${this.labelText}</slot>
              </span>
            </div>
          `
        : html` <div
            part="base"
            class="progress-ring"
            role="progressbar"
            aria-label=${ifDefined(this.labelText) && this.label.length > 0
              ? this.label + ' ' + this.labelText
              : this.label.length > 0
              ? this.label
              : this.localize.term('progress')}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="${this.value}"
            style="--percentage: ${this.value < 0 ? 0 / 100 : this.value > 100 ? 100 / 100 : this.value / 100}"
          >
            <svg class="progress-ring__image">
              <circle class="progress-ring__track"></circle>
              <circle class="progress-ring__indicator" style="stroke-dashoffset:${this.indicatorOffset}"></circle>
            </svg>
            <span class="progress-ring__label">
              <span
                part="labelText"
                class=${classMap({ 'progress-ring__label-text': true, 'progress-label-text-margin': this.labelText })}
              >
                <slot name="labelText">${this.labelText}</slot>
              </span>
              <span part="label" class="progress-ring__label-value">
                <slot name="label">${this.label}</slot>
              </span>
            </span>
          </div>`}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-progress-ring': em9ProgressRing;
  }
}
