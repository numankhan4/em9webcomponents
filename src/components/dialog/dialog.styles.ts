import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import scrollbarStyles from '../../styles/scrollbar-styles';

export default css`
  ${componentStyles}
  ${scrollbarStyles}

  :host {
    --width: 25rem;
    --header-spacing: var(--em9-spacing-6);
    --body-spacing: var(--em9-spacing-6);
    --footer-spacing: var(--em9-spacing-6);
    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--em9-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--em9-spacing-2x-large));
    max-height: calc(100% - var(--em9-spacing-2x-large));
    background-color: var(--em9-panel-background-color);
    border-radius: calc(var(--em9-border-radius-large) + 0.25rem);
    box-shadow: var(--em9-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
    padding: var(--header-spacing) var(--header-spacing) 0;
    position: relative;
  }
  .dialog__header-inner {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .dialog__header-art .art_frame {
    margin: 0 0 8px;
    border-radius: 100%;
    height: 52px;
    width: 52px;
    border-width: 6px;
    border-style: solid;
    font-size: 16px;
    color: var(--em9-color-primary-600);
    background-color: var(--em9-color-primary-100);
    border-color: var(--em9-color-primary-50);
    display: inline-block;
    position: relative;
  }
  .dialog__header-art .art_frame-icon {
    font-size: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--em9-font-size-large);
    line-height: var(--em9-line-height-dense);
    font-weight: var(--em9-font-weight-semibold);
    color: var(--em9-color-gray-900);
    margin: 0;
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--em9-font-size-text-xxl);
    color: var(--em9-color-gray-500);
    position: absolute;
    top: 18px;
    right: 19px;
  }

  .dialog__body {
    padding: 0.375rem var(--body-spacing) 0;
    flex: 1 1 auto;
    position: relative;
    color: var(--em9-color-gray-500);
    font-size: var(--em9-font-size-text-sm);
    line-height: var(--em9-font-size-text-xl);
  }
  .dialog__body ::slotted(p) {
    margin-top: 0;
    color: var(--em9-color-gray-500);
    font-size: var(--em9-font-size-text-sm);
    line-height: var(--em9-font-size-text-xl);
  }
  .dialog__body ::slotted(p:last-of-type) {
    margin: 0;
  }
  .dialog__scroll {
    max-height: 50vh;
  }
  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: calc(var(--body-spacing) + 0.625rem) var(--header-spacing) var(--header-spacing);
  }

  .dialog__footer ::slotted(em9-button:not(:first-of-type)) {
    margin-inline-start: var(--em9-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--em9-overlay-background-color);
  }

  .dialog--layout-center .dialog__header-inner {
    text-align: center;
  }
  .dialog--layout-center .dialog__body {
    text-align: center;
  }

  .layout--left-aside .dialog__header-art {
    position: absolute;
    left: 22px;
    top: 22px;
  }
  .layout--left-aside .dialog__close {
    top: 15px;
    right: 15px;
  }
  .layout--left-aside .dialog__header,
  .layout--left-aside .dialog__body,
  .layout--left-aside .dialog__footer {
    padding-left: 6rem;
  }
`;
