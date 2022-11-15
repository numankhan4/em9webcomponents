import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip-target {
    display: contents;
  }

  .tooltip-positioner {
    position: absolute;
    z-index: var(--em9-z-index-tooltip);
    pointer-events: none;
  }

  .tooltip-positioner[data-placement^='top'] .tooltip {
    transform-origin: bottom;
  }

  .tooltip-positioner[data-placement^='bottom'] .tooltip {
    transform-origin: top;
  }

  .tooltip-positioner[data-placement^='left'] .tooltip {
    transform-origin: right;
  }

  .tooltip-positioner[data-placement^='right'] .tooltip {
    transform-origin: left;
  }

  .tooltip__content {
    max-width: var(--max-width);
    border-radius: var(--em9-border-radius-medium);
    background-color: var(--em9-color-gray-900);
    font-family: var(--em9-font-sans);
    font-size: var(--em9-font-size-x-small);
    font-weight: var(--em9-font-weight-semibold);
    line-height: var(--em9-line-height-denser);
    color: var(--em9-color-neutral-0);
    padding: var(--em9-spacing-2) var(--em9-spacing-3);
  }
  .content-div {
    line-height: var(--em9-line-height-1-5);
  }
  .icon-div {
    display: flex;
    padding-right: var(--em9-spacing-2);
    font-size: var(--em9-font-size-text-lg);
  }
  .tooltip__arrow {
    position: absolute;
    background: var(--em9-color-gray-900);
    width: calc(var(--em9-tooltip-arrow-size) * 2);
    height: calc(var(--em9-tooltip-arrow-size) * 2);
    transform: rotate(45deg);
    z-index: 0;
  }

  :host([content]) .tooltip_subText {
    margin-top: var(--em9-spacing-1);
  }
  .tooltip_subText {
    line-height: var(--em9-line-height-1-5);
    font-weight: var(--em9-font-weight-normal);
  }
  /*dark variant*/
  :host([variant='dark']) .tooltip-positioner [part='base'] {
    border-radius: var(--em9-tooltip-border-radius);
  }
  :host([variant='dark']) .tooltip-positioner [part='base'] .tooltip__content {
    background: var(--em9-color-gray-900);
    color: var(--em9-color-neutral-0);
  }
  :host([variant='dark']) .tooltip__arrow {
    background: var(--em9-color-gray-900);
  }
  :host([variant='dark']) [data-placement='top'] .tooltip__arrow,
  :host([variant='dark']) [data-placement='top-start'] .tooltip__arrow,
  :host([variant='dark']) [data-placement='top-end'] .tooltip__arrow {
    border-bottom: solid var(--em9-border-width) var(--em9-color-gray-900);
    border-right: solid var(--em9-border-width) var(--em9-color-gray-900);
  }
  :host([variant='dark']) [data-placement='right-start'] .tooltip__arrow,
  :host([variant='dark']) [data-placement='right'] .tooltip__arrow,
  :host([variant='dark']) [data-placement='right-end'] .tooltip__arrow {
    border-bottom: solid var(--em9-border-width) var(--em9-color-gray-900);
    border-left: solid var(--em9-border-width) var(--em9-color-gray-900);
  }
  :host([variant='dark']) [data-placement='bottom'] .tooltip__arrow,
  :host([variant='dark']) [data-placement='bottom-start'] .tooltip__arrow,
  :host([variant='dark']) [data-placement='bottom-end'] .tooltip__arrow {
    border-top: solid var(--em9-border-width) var(--em9-color-gray-900);
    border-left: solid var(--em9-border-width) var(--em9-color-gray-900);
  }
  :host([variant='dark']) [data-placement='left-start'] .tooltip__arrow,
  :host([variant='dark']) [data-placement='left'] .tooltip__arrow,
  :host([variant='dark']) [data-placement='left-end'] .tooltip__arrow {
    border-top: solid var(--em9-border-width) var(--em9-color-gray-900);
    border-right: solid var(--em9-border-width) var(--em9-color-gray-900);
  }
  /*light variant*/
  :host([variant='light']) .tooltip-positioner [part='base'] {
    box-shadow: var(--em9-shadow-large);
    border-radius: var(--em9-tooltip-border-radius);
  }
  :host([variant='light']) .tooltip-positioner [part='base'] .tooltip__content {
    border: solid var(--em9-border-width) var(--em9-color-gray-100);
    background: var(--em9-color-neutral-0);
    color: var(--em9-color-gray-700);
  }
  :host([variant='light']) .tooltip__arrow {
    background: var(--em9-color-neutral-0);
  }
  :host([variant='light']) [data-placement='top'] .tooltip__arrow,
  :host([variant='light']) [data-placement='top-start'] .tooltip__arrow,
  :host([variant='light']) [data-placement='top-end'] .tooltip__arrow {
    border-bottom: solid var(--em9-border-width) var(--em9-color-gray-100);
    border-right: solid var(--em9-border-width) var(--em9-color-gray-100);
  }
  :host([variant='light']) [data-placement='right-start'] .tooltip__arrow,
  :host([variant='light']) [data-placement='right'] .tooltip__arrow,
  :host([variant='light']) [data-placement='right-end'] .tooltip__arrow {
    border-bottom: solid var(--em9-border-width) var(--em9-color-gray-100);
    border-left: solid var(--em9-border-width) var(--em9-color-gray-100);
  }
  :host([variant='light']) [data-placement='bottom'] .tooltip__arrow,
  :host([variant='light']) [data-placement='bottom-start'] .tooltip__arrow,
  :host([variant='light']) [data-placement='bottom-end'] .tooltip__arrow {
    border-top: solid var(--em9-border-width) var(--em9-color-gray-100);
    border-left: solid var(--em9-border-width) var(--em9-color-gray-100);
  }
  :host([variant='light']) [data-placement='left-start'] .tooltip__arrow,
  :host([variant='light']) [data-placement='left'] .tooltip__arrow,
  :host([variant='light']) [data-placement='left-end'] .tooltip__arrow {
    border-top: solid var(--em9-border-width) var(--em9-color-gray-100);
    border-right: solid var(--em9-border-width) var(--em9-color-gray-100);
  }
  :host([variant='light']) .tooltip_subText {
    color: var(--em9-color-gray-500);
  }
  :host([icon]) {
    --max-width: 21.625rem;
  }
  :host([subText]) .tooltip__content {
    padding: var(--em9-spacing-3);
  }
  :host([subText]) .tooltip_maintext {
    line-height: var(--em9-line-height-1-5);
  }
`;
