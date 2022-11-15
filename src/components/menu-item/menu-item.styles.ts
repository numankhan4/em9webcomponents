import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--em9-font-sans);
    font-size: var(--em9-font-size-small);
    font-weight: var(--em9-font-weight-normal);
    line-height: var(--em9-line-height-20);
    letter-spacing: var(--em9-letter-spacing-normal);
    color: var(--em9-color-gray-900);
    padding: var(--em9-spacing-x-small) var(--em9-spacing-small);
    transition: var(--em9-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--em9-color-neutral-400);
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-inline-end: var(--em9-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-inline-start: var(--em9-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(${focusVisibleSelector}:not(.em9-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--em9-color-gray-50);
    color: var(--em9-color-gray-900);
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item .menu-item__check em9-icon {
    width: var(--em9-spacing-5);
    height: var(--em9-spacing-5);
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  .menu-item__check {
    color: var(--em9-color-primary-500);
  }

  .menu-item-large {
    padding-left: var(--em9-input-spacing-large);
  }

  .menu-item__label ::slotted([part="support-text"]) {
    color: var(--em9-input-icon-color);
    margin-left: calc(var(--em9-input-size) * 0.2);
  }

  .menu-item__label ::slotted([part="icon"]) {
    width: calc(var(--em9-input-size) * 0.5);
    height: calc(var(--em9-input-size) * 0.5);
    margin-right: calc(var(--em9-spacing-1) * 1.25);
    color: var(--em9-color-gray-600);
  }

  .menu-item__label ::slotted([part="indicator"]) {
    width: calc(var(--em9-input-size) * 0.2);
    height: calc(var(--em9-input-size) * 0.2);
    color: var(--em9-color-success-500);
    margin-right: calc(var(--em9-spacing-2) * 1.125);
  }

  .menu-item__label ::slotted(em9-avatar[part="avatars"]) {
    --size: var(--em9-spacing-6);
    margin-right: calc(var(--em9-spacing-1) * 1.25);
    display: inline;
  }
  .menu-item__label ::slotted(.selected-prefix){
    display: none;
  }
`;
