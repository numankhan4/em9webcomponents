import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import scrollbarStyles from '../../styles/scrollbar-styles';

export default css`
  ${componentStyles}
  ${scrollbarStyles}

  :host {
    --card-spacing: var(--em9-spacing-8);
    --card-bg: var(--em9-color-neutral-0);
    --card-border-radius: var(--em9-border-radius-x-large);
    --card-border: 1px solid var(--em9-color-gray-300);
    --art-width: 58px;
    --art-height: 58px;
    --art-icon-size: var(--em9-font-size-display-xs);
    display: contents;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    padding: var(--card-spacing);
  }

  .empty-state--has-card {
    background: var(--card-bg);
    border: var(--card-border);
    border-radius: var(--card-border-radius);
  }

  .empty-state__header {
    flex: 0 0 auto;
    display: flex;
    position: relative;
  }
  .empty-state__header-inner {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .empty-state__header-art .art_frame {
    margin: 0 0 8px;
    border-radius: 100%;
    height: var(--art-width);
    width: var(--art-height);
    border-width: 6px;
    border-style: solid;
    font-size: 16px;
    color: var(--em9-color-primary-600);
    background-color: var(--em9-color-primary-100);
    border-color: var(--em9-color-primary-50);
    display: inline-block;
    position: relative;
  }
  .empty-state__header-art .art_frame-icon {
    font-size: var(--art-icon-size);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .empty-state__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--em9-font-size-text-md);
    line-height: var(--em9-line-height-dense);
    font-weight: var(--em9-font-weight-semibold);
    color: var(--em9-color-gray-900);
    margin: 0;
  }

  .empty-state--has-content .empty-state__body {
    padding: var(--em9-spacing-3) 0 var(--em9-spacing-7-5);
    flex: 1 1 auto;
    position: relative;
    color: var(--em9-color-gray-500);
    font-size: var(--em9-font-size-text-sm);
    line-height: var(--em9-font-size-text-xl);
  }

  .empty-state__body ::slotted(p),
  .empty-state__body .description {
    margin-top: 0;
    color: var(--em9-color-gray-500);
    font-size: var(--em9-font-size-text-sm);
    line-height: var(--em9-font-size-text-xl);
  }
  .empty-state__body ::slotted(p:last-of-type) {
    margin: 0;
  }
  .empty-state__scroll {
    max-height: 50vh;
  }

  .empty-state__footer {
    flex: 0 0 auto;
  }

  .empty-state__footer ::slotted(em9-button:not(:first-of-type)) {
    margin-inline-start: var(--em9-spacing-x-small);
  }

  .empty-state__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--em9-overlay-background-color);
  }

  .empty-state--layout-center .empty-state__header-inner {
    text-align: center;
  }
  .empty-state--layout-center .empty-state__footer ::slotted(footer) {
    text-align: center;
  }
  .empty-state--layout-center .empty-state__body {
    text-align: center;
    max-width: 21.25rem;
    margin: auto;
  }

  .layout--left-aside .empty-state__header-art {
    position: absolute;
    left: 22px;
    top: 22px;
  }
  .layout--left-aside .empty-state__close {
    top: 15px;
    right: 15px;
  }
  .layout--left-aside .empty-state__header,
  .layout--left-aside .empty-state__body,
  .layout--left-aside .empty-state__footer {
    padding-left: 6rem;
  }
  :host([size='medium']) {
    --art-icon-size: var(--em9-font-size-display-smd);
    --art-width: 67px;
    --art-height: 67px;
  }
  :host([size='medium'])::part(body) {
    font-size: var(--em9-font-size-text-md);
    padding: var(--em9-spacing-2) 0 var(--em9-spacing-8);
    line-height: 1.5;
  }
`;
