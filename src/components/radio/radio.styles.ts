import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    --em9-radio-font-family: var(--em9-font-sans);
    --em9-radio-font-size: var(--em9-font-size-small);
    --em9-radio-font-weight: var(--em9-font-weight-normal);
    --em9-radio-color: var(--em9-color-gray-700);
    --em9-radio-border-radius: var(--em9-normal-border-radius);
    --em9-radio-border-width: solid var(--em9-border-width);
    --em9-radio-unchecked-border-color: var(--em9-color-gray-300);
    --em9-radio-unchecked-background-color: var(--em9-color-neutral-0);
    --em9-radio-unchecked-color: var(--em9-color-neutral-0);
    --em9-radio-subText-color: var(--em9-color-gray-500);
    --em9-radio-subText-line-height: var(--em9-line-height-1-1);
    --em9-radio-mainText-line-height: var(--em9-line-height-denser);
    --em9-radio-control-width: var(--em9-spacing-4);
    --em9-radio-control-height: var(--em9-spacing-4);
    --em9-radio-margin-label: 0 0 0 var(--em9-spacing-2);
    --em9-radio-uncheck-hover-border-color: var(--em9-color-primary-500);
    --em9-radio-uncheck-hover-background-color: var(--em9-color-primary-25);
    --em9-radio-uncheck-focus-border-color: var(--em9-color-primary-300);
    --em9-radio-uncheck-focus-box-shadow: 0px 0px 0px 2px var(--em9-color-primary-100);
    --em9-radio-checked-border-color: var(--em9-color-primary-500);
    --em9-radio-checked-background-color: var(--em9-color-primary-50);
    --em9-radio-checked-color: var(--em9-color-primary-500);
    --em9-radio-checked-hover-border-color: var(--em9-color-primary-500);
    --em9-radio-checked-hover-background-color: var(--em9-color-primary-25);
    --em9-radio-checked-hover-color: var(--em9-color-primary-500);
    --em9-radio-checked-focus-box-shadow: 0px 0px 0px 2px var(--em9-color-primary-100);
    --em9-radio-checked-focus-border-color: var(--em9-color-primary-500);
    --em9-radio-checked-focus-background-color: var(--em9-color-primary-50);
    --em9-radio-checked-focus-color: var(--em9-color-primary-500);
    --em9-radio-checked-disabled-border-color: var(--em9-color-gray-300);
    --em9-radio-checked-disabled-background-color: var(--em9-color-gray-100);
    --em9-radio-checked-disabled-color: var(--em9-color-gray-300);
    --em9-radio-label-gap: var(--em9-spacing-1-5);
    --em9-radio-checked-font-size: 10px;
  }

  .radio {
    display: flex;
    align-items: center;
    font-family: var(--em9-radio-font-family);
    font-size: var(--em9-radio-font-size);
    font-weight: var(--em9-radio-font-weight);
    color: var(--em9-radio-color);
    cursor: pointer;
  }
  :host([sublabel]) .radio {
    align-items: start;
  }
  .radio__icon {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .radio__icon svg {
    width: 100%;
    height: 100%;
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: var(--em9-radio-border-width) var(--em9-radio-unchecked-border-color);
    background-color: var(--em9-radio-unchecked-background-color);
    color: var(--em9-radio-unchecked-color);
    transition: var(--em9-transition-fast) border-color, var(--em9-transition-fast) background-color,
      var(--em9-transition-fast) color, var(--em9-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
    cursor: pointer;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--em9-radio-uncheck-hover-border-color);
    background-color: var(--em9-radio-uncheck-hover-background-color);
  }

  /* Focus */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__input:focus ~ .radio__control {
    outline: none;
    box-shadow: var(--em9-radio-uncheck-focus-box-shadow);
    border-color: var(--em9-radio-uncheck-focus-border-color);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--em9-radio-checked-color);
    border-color: var(--em9-radio-checked-border-color);
    background-color: var(--em9-radio-checked-background-color);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--em9-radio-checked-hover-border-color);
    background-color: var(--em9-radio-checked-hover-background-color);
    color: var(--em9-radio-checked-hover-color);
  }

  /* Checked + focus */
  .radio.radio--checked:not(.radio--disabled) .radio__input${focusVisibleSelector} ~ .radio__control {
    outline: none;
    box-shadow: var(--em9-radio-checked-focus-box-shadow);
    border-color: var(--em9-radio-checked-focus-border-color);
    background-color: var(--em9-radio-checked-focus-background-color);
    color: var(--em9-radio-checked-focus-color);
  }

  /* Disabled */
  .radio--disabled {
    cursor: not-allowed;
  }
  .radio--disabled .radio__input,
  .radio--disabled .radio__label {
    cursor: not-allowed;
  }
  .radio--disabled .radio__control {
    border-color: var(--em9-radio-checked-disabled-border-color);
    background: var(--em9-radio-checked-disabled-background-color);
    color: var(--em9-radio-checked-disabled-color);
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  div[part='label'] {
    line-height: var(--em9-line-height-denser);
  }
  .radio__label {
    margin: var(--em9-radio-margin-label);
    user-select: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: var(--em9-radio-label-gap);
  }
  .radio__control {
    width: var(--em9-radio-control-width);
    height: var(--em9-radio-control-height);
  }

  .radio__subtext {
    color: var(--em9-radio-subText-color);
    line-height: var(--em9-radio-subText-line-height);
  }
  .radio__maintext {
    line-height: var(--em9-radio-mainText-line-height);
  }
  .check__icon {
    font-size: var(--em9-radio-checked-font-size);
    line-height: 1;
  }
  :host([size='xsmall']) {
    --em9-radio-font-size: var(--em9-font-size-x-small);
    --em9-radio-control-width: var(--em9-spacing-3-5);
    --em9-radio-control-height: var(--em9-spacing-3-5);
    --em9-radio-margin-label: 0 0 0 var(--em9-spacing-1-5);
    --em9-radio-checked-font-size: var(--em9-font-size-text-xxs);
  }

  /*small radio*/
  :host([size='small']) {
    --em9-radio-control-width: var(--em9-spacing-4);
    --em9-radio-control-height: var(--em9-spacing-4);
    --em9-radio-margin-label: 0 0 0 var(--em9-spacing-2);
    --em9-radio-checked-font-size: var(--em9-font-size-text-xs);
  }

  /*medium  radio*/
  :host([size='medium']) {
    --em9-radio-control-width: var(--em9-spacing-4-5);
    --em9-radio-control-height: var(--em9-spacing-4-5);
    --em9-radio-margin-label: 0 0 0 var(--em9-spacing-2-5);
    --em9-radio-subText-line-height: var(--em9-line-height-1-2);
    --em9-radio-font-size: var(--em9-radio-font-size-large);
    --em9-radio-checked-font-size: var(--em9-font-size-text-sm);
  }
  :host([size='large']) {
    --em9-radio-control-width: var(--em9-spacing-5);
    --em9-radio-control-height: var(--em9-spacing-5);
    --em9-radio-margin-label: 0 0 0 var(--em9-spacing-3);
    --em9-radio-subText-line-height: var(--em9-line-height-1-2);
    --em9-radio-font-size: var(--em9-radio-font-size-large);
    --em9-radio-checked-font-size: var(--em9-font-size-text-sm);
  }
  :host([filled]) {
    --em9-radio-checked-border-color: var(--em9-color-primary-500);
    --em9-radio-checked-background-color: var(--em9-color-primary-500);
    --em9-radio-checked-color: var(--em9-color-neutral-0);
  }
  :host([sublabel][size='small']) {
    --em9-radio-mainText-line-height: 1.1;
  }
  :host([sublabel][size='medium']) {
    --em9-radio-mainText-line-height: 1.1;
    --em9-radio-label-gap: var(--em9-spacing-1-5);
  }
  :host([sublabel][size='large']) {
    --em9-radio-mainText-line-height: 1.3;
    --em9-radio-label-gap: var(--em9-spacing-1-5);
  }
`;
