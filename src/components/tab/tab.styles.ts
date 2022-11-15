import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--em9-font-sans);
    font-size: var(--em9-font-size-small);
    font-weight: var(--em9-font-weight-semibold);
    border-radius: var(--em9-border-radius-medium);
    color: var(--em9-color-neutral-600);
    padding: var(--em9-spacing-medium) var(--em9-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--em9-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab${focusVisibleSelector}:not(.tab--disabled) {
    color: var(--em9-color-primary-600);
    outline: var(--em9-focus-ring);
    outline-offset: calc(-1 * var(--em9-focus-ring-width) - var(--em9-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--em9-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--em9-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--em9-font-size-large);
    margin-inline-start: var(--em9-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--em9-spacing-3x-small);
  }
`;
