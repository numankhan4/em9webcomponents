import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--em9-color-neutral-200);
    --track-color-inactive: var(--em9-color-neutral-200);
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--em9-input-height-medium);
    vertical-align: middle;
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--em9-color-primary-600);
    border: solid var(--em9-input-border-width) var(--em9-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    transition: var(--em9-transition-fast) border-color, var(--em9-transition-fast) background-color,
      var(--em9-transition-fast) color, var(--em9-transition-fast) box-shadow, var(--em9-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--em9-color-primary-500);
    border-color: var(--em9-color-primary-500);
  }

  .range__control:enabled${focusVisibleSelector}::-webkit-slider-thumb {
    outline: var(--em9-focus-ring);
    outline-offset: var(--em9-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--em9-color-primary-500);
    border-color: var(--em9-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--em9-color-primary-600);
    border-color: var(--em9-color-primary-600);
    transition: var(--em9-transition-fast) border-color, var(--em9-transition-fast) background-color,
      var(--em9-transition-fast) color, var(--em9-transition-fast) box-shadow, var(--em9-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--em9-color-primary-500);
    border-color: var(--em9-color-primary-500);
  }

  .range__control:enabled${focusVisibleSelector}::-moz-range-thumb {
    outline: var(--em9-focus-ring);
    outline-offset: var(--em9-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--em9-color-primary-500);
    border-color: var(--em9-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control${focusVisibleSelector} {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--em9-z-index-tooltip);
    left: 1px;
    border-radius: var(--em9-tooltip-border-radius);
    background-color: var(--em9-tooltip-background-color);
    font-family: var(--em9-tooltip-font-family);
    font-size: var(--em9-tooltip-font-size);
    font-weight: var(--em9-tooltip-font-weight);
    line-height: var(--em9-tooltip-line-height);
    color: var(--em9-tooltip-color);
    opacity: 0;
    padding: var(--em9-tooltip-padding);
    transition: var(--em9-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    transform: translateX(calc(-1 * var(--em9-tooltip-arrow-size)));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--em9-tooltip-arrow-size) solid var(--em9-tooltip-background-color);
    border-left: var(--em9-tooltip-arrow-size) solid transparent;
    border-right: var(--em9-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--em9-tooltip-arrow-size) solid var(--em9-tooltip-background-color);
    border-left: var(--em9-tooltip-arrow-size) solid transparent;
    border-right: var(--em9-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }
`;
