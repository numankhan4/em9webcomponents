import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --size: var(--em9-spacing-40);
    --track-width: var(--em9-spacing-4);
    --track-color: var(--em9-color-gray-200);
    --indicator-color: var(--em9-color-primary-500);
    --label-value-font-size: var(--em9-font-size-text-sm);
    --label-value-font-weight: var(--em9-font-weight-light);
    --label-value-color: var(--em9-color-gray-900);
    --label-text-font-size: var(--em9-font-size-text-xs);
    --label-text-font-weight: var(--em9-font-weight-semibold);
    --label-text-color: var(--em9-color-gray-500);
    --label-text-margin: 0;
    --label-text-width: calc(100% - var(--track-width) * 3);
    --label-value-width: calc(100% - var(--track-width) * 3);
    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    stroke-width: var(--track-width);
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    transition: 0.35s stroke-dashoffset;
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: var(--em9-line-height-dense);
    text-align: center;
    user-select: none;
  }
  .progress-ring__label-text {
    font-size: var(--label-text-font-size);
    font-weight: var(--label-text-font-weight);
    color: var(--label-text-color);
    width: var(--label-text-width);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .progress-label-text-margin {
    margin: var(--label-text-margin);
  }
  .progress-ring__label-value {
    font-size: var(--label-value-font-size);
    font-weight: var(--label-value-font-weight);
    color: var(--label-value-color);
    width: var(--label-text-width);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :host([size='xxs']) {
    --size: var(--em9-spacing-16);
    --track-width: var(--em9-spacing-1-5);
    --label-value-font-size: var(--em9-font-size-text-sm);
    --label-value-font-weight: var(--em9-font-weight-light);
    --label-text-margin: 0 0 var(--em9-spacing-0-5) 0;
  }

  :host([size='xs']) {
    --size: var(--em9-spacing-40);
    --track-width: var(--em9-spacing-4);
    --label-value-font-size: var(--em9-font-size-text-xxxl);
    --label-value-font-weight: var(--em9-font-weight-semibold);
  }

  :host([size='sm']) {
    --size: 12.5rem;
    --track-width: var(--em9-spacing-5);
    --label-value-font-size: var(--em9-font-size-display-sm);
    --label-value-font-weight: var(--em9-font-weight-semibold);
  }
  :host([size='md']) {
    --size: 15rem;
    --track-width: var(--em9-spacing-6);
    --label-value-font-size: var(--em9-font-size-display-md);
    --label-value-font-weight: var(--em9-font-weight-semibold);
    --label-text-font-size: var(--em9-font-size-text-sm);
    --label-text-font-weight: var(--em9-font-weight-light);
    --label-text-margin: var(--em9-spacing-1-5) 0 0;
  }
  :host([size='lg']) {
    --size: 17.5rem;
    --track-width: var(--em9-spacing-7);
    --label-value-font-size: var(--em9-font-size-display-lg);
    --label-value-font-weight: var(--em9-font-weight-semibold);
    --label-text-font-size: var(--em9-font-size-text-sm);
    --label-text-font-weight: var(--em9-font-weight-light);
    --label-text-margin: 0.313rem 0 0;
  }
  :host([size='xxs']) .text-outside-ring-base {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;
