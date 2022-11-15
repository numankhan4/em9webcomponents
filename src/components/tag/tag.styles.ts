import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    --em9-tag-background: var(--em9-color-neutral-0);
    --em9-tag-border: 1px solid;
    --em9-tag-border-color: var(--em9-color-gray-300);
    --em9-tag-border-radius: var(--em9-border-radius-medium);
    --em9-tag-color: var(--em9-color-gray-700);
    --em9-tag-font-size: var(--em9-font-size-text-sm);
    --em9-tag-font-weight: var(--em9-font-weight-light);
    --em9-tag-line-height: var(--em9-line-height-denser);
    --em9-tag-cross-font-size: var(--em9-font-size-text-sm);
    --em9-tag-cross-color: var(--em9-color-gray-400);
    --em9-tag-padding: 4px 8px;
  }

  .tag {
    display: flex;
    align-items: center;
    white-space: nowrap;
    user-select: none;
    cursor: default;
    background: var(--em9-tag-background);
    border: var(--em9-tag-border);
    border-color: var(--em9-tag-border-color);
    border-radius: var(--em9-tag-border-radius);
    color: var(--em9-tag-color);
    font-size: var(--em9-tag-font-size);
    font-weight: var(--em9-tag-font-weight);
    line-height: var(--em9-tag-line-height);
    padding: var(--em9-tag-padding);
  }
  /* .tag:hover {
    --em9-tag-background: var(--em9-color-primary-100);
    --em9-tag-border-color: var(--em9-color-primary-700);
    --em9-tag-color: var(--em9-color-primary-600);
  }
  .tag:focus-within {
    --em9-tag-background: var(--em9-color-primary-500);
    --em9-tag-border-color: var(--em9-color-primary-500);
    --em9-tag-color: var(--em9-color-neutral-0);
    outline: none;
  }*/
  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }
  .tag-text {
    margin: 0;
  }
  .tag--small {
    --em9-tag-font-size: var(--em9-font-size-text-xs);
    --em9-tag-font-weight: var(--em9-font-weight-semibold);
    --em9-tag-padding: 5px 7px;
  }
  .tag--medium {
    --em9-tag-font-size: var(--em9-font-size-text-sm);
    --em9-tag-font-weight: var(--em9-font-weight-light);
    --em9-tag-padding: 4px 8px;
  }
  .tag--large {
    --em9-tag-font-large: var(--em9-font-size-text-sm);
    --em9-tag-font-weight: var(--em9-font-weight-light);
    --em9-tag-padding: 6px 9px;
  }
  /*
   * Size modifiers
   */
  .tag__remove {
    font-size: var(--em9-tag-cross-font-size);
    color: var(--em9-tag-cross-color);
  }
  .tag--small .tag__remove {
    --em9-tag-cross-font-size: var(--em9-font-size-text-xs);
    margin-inline-start: var(--em9-spacing-2x-small);
    margin-inline-end: calc(-1 * var(--em9-spacing-0-5));
  }
  .tag--medium .tag__remove {
    --em9-tag-cross-font-size: var(--em9-font-size-text-sm);
    margin-inline-start: var(--em9-spacing-2x-small);
    margin-inline-end: calc(-1 * var(--em9-spacing-1));
  }
  .tag--large .tag__remove {
    --em9-tag-cross-font-size: var(--em9-font-size-text-lg);
    margin: calc(-1 * var(--em9-spacing-0-5)) calc(-1 * var(--em9-spacing-1)) calc(-1 * var(--em9-spacing-0-5))
      var(--em9-spacing-2x-small);
  }
  .tag--small.tag--has--suffix {
    --em9-tag-padding: 2px 3px 2px 8px;
  }
  .tag--medium.tag--has--suffix {
    --em9-tag-padding: 2px 3px 2px 8px;
  }
  .tag--large.tag--has--suffix {
    --em9-tag-padding: 3px 4px 3px 8px;
  }
  .tag--small.tag--has--prefix {
    --em9-tag-padding: 3px 7px 3px 4px;
  }
  .tag--medium.tag--has--prefix {
    --em9-tag-padding: 3px 8px 3px 4px;
  }
  .tag--large.tag--has--prefix {
    --em9-tag-padding: 4px 8px 4px 4px;
  }
  .tag--small.tag--has--prefix.tag--has--suffix {
    --em9-tag-padding: 2px 4px;
  }
  .tag--medium.tag--has--prefix.tag--has--suffix {
    --em9-tag-padding: 2px 3px 2px 4px;
  }
  .tag--large.tag--has--prefix.tag--has--suffix {
    --em9-tag-padding: 3px 4px;
  }
  .tag--small.tag--has--suffix .tag__remove {
    margin-inline-start: var(--em9-spacing-2x-small);
    margin-inline-end: var(--em9-spacing-0-5);
  }
  .tag--medium.tag--has--suffix .tag__remove {
    margin-inline-start: var(--em9-spacing-2x-small);
    margin-inline-end: var(--em9-spacing-1);
  }
  .tag--large.tag--has--suffix .tag__remove {
    margin: 0 0 0 var(--em9-spacing-2x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--em9-border-radius-pill);
  }
`;
