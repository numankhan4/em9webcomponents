import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
    --size: var(--em9-spacing-40);
    --track-width: var(--em9-spacing-4);
    --semi-track-color: var(--em9-color-gray-200);
    --semi-indicator-color: var(--em9-color-primary-500);
    --semi-label-font-size: var(--em9-font-size-text-xs);
    --semi-label-line-height: var(--em9-line-height-denser);
    --semi-label-color: var(--em9-color-gray-500);
    --semi-label-font-weight: var(--em9-font-weight-semibold);
    --semi-value-font-size: var(--em9-font-size-text-xxxl);
    --semi-value-line-height: var(--em9-line-height-1-5);
    --semi-value-color: var(--em9-color-gray-900);
    --semi-value-font-weight: var(--em9-font-weight-semibold);
    --semi-label-width: 7.5rem;
  }

  .progress-semi-circle {
    position: relative;
  }

  .circle {
    width: var(--size);
    height: calc(var(--size) / 1.8);
  }

  .progress_bar {
    overflow: visible;
    transform: scaleX(-1);
  }

  .first-path {
    stroke-width: var(--track-width);
    stroke-linecap: round;
  }

  .second-path {
    stroke-width: var(--track-width);
    stroke-linecap: round;
    stroke-dasharray: 226, 228;
    stroke-dashoffset: 1;
    transition: 0.35s stroke-dasharray;
  }

  .semi-circle-corners {
    position: relative;
  }

  .semi-circle-label {
    display: flex;
    flex-flow: column;
    justify-content: end;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-bottom: var(--em9-spacing-1);
  }

  .have-bottom {
    flex-direction: column-reverse;
  }

  .label {
    display: block;
    color: var(--semi-label-color);
    font-size: var(--semi-label-font-size);
    line-height: var(--semi-label-line-height);
    font-weight: var(--semi-label-font-weight);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    width: var(--semi-label-width);
  }

  .value {
    color: var(--semi-value-color);
    font-size: var(--semi-value-font-size);
    font-weight: var(--semi-value-font-weight);
    line-height: var(--semi-value-line-height);
  }
  .text-in-base {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .text-in-base .label {
    margin-top: var(--em9-spacing-1-5);
    --semi-label-line-height: var(--em9-line-height-1-2);
  }
  :host([size='lg']) .semi-circle-label {
    padding-bottom: var(--em9-spacing-0-5);
  }
  :host([size='xxs']) .semi-circle-label,
  :host([size='xs']) .semi-circle-label {
    padding-bottom: 0;
  }
  :host([size='xxs']) {
    --size: var(--em9-spacing-16);
    --semi-value-font-size: var(--em9-font-size-text-sm);
    --semi-value-font-weight: var(--em9-font-weight-light);
    --semi-value-line-height: var(--em9-line-height-1-3);
  }
  :host([size='xs']) {
    --size: var(--em9-spacing-40);
    --semi-label-font-size: var(--em9-font-size-text-xs);
    --semi-label-line-height: var(--em9-line-height-1-2);
    --semi-value-font-size: var(--em9-font-size-text-xxxl);
    --semi-value-font-weight: var(--em9-font-weight-semibold);
    --semi-label-width: 6.25rem;
  }
  :host([size='sm']) {
    --size: 12.5rem;
    --semi-label-font-size: var(--em9-font-size-text-xs);
    --semi-label-line-height: var(--em9-line-height-1-2);
    --semi-value-line-height: var(--em9-line-height-1-3);
    --semi-value-font-size: var(--em9-font-size-display-sm);
    --semi-label-width: 7.5rem;
  }
  :host([size='md']) {
    --size: 15rem;
    --semi-label-font-size: var(--em9-font-size-text-sm);
    --semi-label-font-weight: var(--em9-font-weight-light);
    --semi-label-line-height: var(--em9-line-height-1-1);
    --semi-value-line-height: var(--em9-line-height-1-3);
    --semi-value-font-size: var(--em9-font-size-display-md);
    --semi-label-width: 8.75rem;
  }
  :host([size='lg']) {
    --size: 17.5rem;
    --semi-label-font-size: var(--em9-font-size-text-sm);
    --semi-label-font-weight: var(--em9-font-weight-light);
    --semi-label-line-height: var(--em9-line-height-1-5);
    --semi-value-line-height: var(--em9-line-height-1-3);
    --semi-value-font-size: var(--em9-font-size-display-lg);
    --semi-label-width: 11.25rem;
  }

  :host([size='xs']) .noLabel {
    margin-bottom: var(--em9-spacing-1);
  }
  :host([size='sm']) .noLabel {
    margin-bottom: var(--em9-spacing-1-5);
  }
  :host([size='md']) .noLabel {
    margin-bottom: 0.063rem;
  }
  :host([size='lg']) .noLabel {
    margin-bottom: var(--em9-spacing-2-5);
  }
`;
