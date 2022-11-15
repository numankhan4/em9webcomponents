import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --width: 100%;
    --font-size-indicator: var(--em9-font-size-text-xs);
    --font-weight-indicator: var(--em9-font-weight-normal);
    --font-family-indicator: var(--em9-font-sans);
    --height: var(--em9-spacing-2);
    --track-color: var(--em9-color-primary-50);
    --indicator-color: var(--em9-color-primary-500);
    --label-color-inside-bar: var(--em9-color-neutral-0);
    --label-color: var(--em9-color-gray-700);
    --label-font-size: var(--em9-font-size-small);
    --label-font-weight: var(--em9-font-weight-light);
    --label-margin: 0;
    --floating-label-color: var(--em9-color-gray-700);
    --floating-label-background: var(--em9-color-neutral-0);
    --floating-label-padding: var(--em9-spacing-2-5) var(--em9-spacing-3);
    --floating-label-box-shadow: var(--em9-shadow-lg);
    --floating-label-font-size: var(--em9-font-size-x-small);
    --floating-label-border-radius: var(--em9-normal-border-radius);
    --floating-label-border: 1px solid var(--em9-color-gray-200);
    --floating-label-font-weight: 500;
    --floating-label-line-height: 1;
    --floating-label-margin: 0;
    --border-radius-bar: var(--em9-border-radius-pill);
    --front-label-width: 2.188rem;
    width: var(--width);
    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--border-radius-bar);
    overflow: hidden;
    width: 100%;
  }

  .progress-bar__indicator {
    height: 100%;
    border-radius: var(--border-radius-bar);
    font-family: var(--font-family-indicator);
    font-size: var(--font-size-indicator);
    font-weight: var(--font-weight-indicator);
    background-color: var(--indicator-color);
    color: var(--label-color-inside-bar);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }
  .progress-bar-inline {
    display: inline-block;
    width: calc(100% - calc(var(--front-label-width) + var(--em9-spacing-2-5)));
    vertical-align: middle;
  }

  .progress-val-label {
    font-size: var(--label-font-size);
    font-weight: var(--label-font-weight);
    text-align: right;
  }
  .progress-val-bottom {
    display: flex;
    margin: var(--label-margin);
    justify-content: right;
    align-items: self-end;
    color: var(--label-color);
    line-height: 1;
  }
  .progress-val-top {
    display: flex;
    margin: var(--label-margin);
    justify-content: right;
    align-items: self-start;
    color: var(--label-color);
    line-height: 1;
  }
  .progress-val-front {
    display: inline-block;
    width: var(--front-label-width);
    text-align: right;
    vertical-align: middle;
    color: var(--label-color);
  }
  [class*='progress-val-tooltip-'] {
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    background: var(--floating-label-background);
    color: var(--floating-label-color);
    padding: var(--floating-label-padding);
    box-shadow: var(--floating-label-box-shadow);
    font-size: var(--floating-label-font-size);
    border-radius: var(--floating-label-border-radius);
    border: var(--floating-label-border);
    font-weight: var(--floating-label-font-weight);
    line-height: var(--floating-label-line-height);
    transition: left 0.5s;
    margin: var(--floating-label-margin);
  }
  :host([valposition='tooltipBottom']) {
    --floating-label-margin: var(--em9-spacing-3) 0 0 0;
  }
  .progress-val-tooltip-bottom:after {
    bottom: 100%;
    border-color: transparent transparent red transparent;
  }

  :host([valposition='tooltipTop']) {
    --floating-label-margin: 0 0 var(--em9-spacing-2) 0;
  }
  :host([valposition='tooltipTop']) {
    --floating-label-margin: 0 0 var(--em9-spacing-2) 0;
  }
  :host([valposition='top']) {
    --label-margin: 0 0 var(--em9-spacing-3-5) 0;
  }
  :host([valposition='bottom']) {
    --label-margin: var(--em9-spacing-3-5) 0 0 0;
  }

  /* Themes */
  :host([variant='primary']) {
    --track-color: var(--em9-color-gray-200);
    --indicator-color: var(--em9-color-primary-500);
  }

  :host([variant='warning']) {
    --track-color: var(--em9-color-orange-100);
    --indicator-color: var(--em9-color-warning-600);
  }

  :host([variant='success']) {
    --track-color: var(--em9-color-success-50);
    --indicator-color: var(--em9-color-success-600);
  }

  :host([variant='danger']) {
    --track-color: var(--em9-color-danger-50);
    --indicator-color: var(--em9-color-danger-600);
  }

  :host([variant='gray']) {
    --track-color: var(--em9-color-gray-100);
    --indicator-color: var(--em9-color-gray-500);
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @keyframes indeterminate {
    0% {
      inset-inline-start: -50%;
      width: 50%;
    }
    75%,
    100% {
      inset-inline-start: 100%;
      width: 50%;
    }
  }
`;
