import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    vertical-align: middle;
    --em9-checkbox-font-family: var(--em9-font-sans);
    --em9-checkbox-font-size: var(--em9-font-size-small);
    --em9-checkbox-font-weight: var(--em9-font-weight-normal);
    --em9-checkbox-color: var(--em9-color-gray-700);
    --em9-checkbox-border-radius: var(--em9-normal-border-radius);
    --em9-checkbox-border-width: solid var(--em9-border-width);
    --em9-checkbox-unchecked-border-color: var(--em9-color-gray-300);
    --em9-checkbox-unchecked-background-color: var(--em9-color-neutral-0);
    --em9-checkbox-unchecked-color: var(--em9-color-neutral-0);
    --em9-checkbox-subText-color: var(--em9-color-gray-500);
    --em9-checkbox-subText-line-height: var(--em9-line-height-1-1);
    --em9-checkbox-mainText-line-height: var(--em9-line-height-denser);
    --em9-checkbox-control-width: var(--em9-spacing-4);
    --em9-checkbox-control-height: var(--em9-spacing-4);
    --em9-checkbox-margin-label: 0 0 0 var(--em9-spacing-2);
    --em9-checkbox-uncheck-hover-border-color: var(--em9-color-primary-500);
    --em9-checkbox-uncheck-hover-background-color: var(--em9-color-primary-25);
    --em9-checkbox-uncheck-focus-border-color: var(--em9-color-primary-300);
    --em9-checkbox-uncheck-focus-box-shadow: 0 0 0 2px var(--em9-color-primary-100);
    --em9-checkbox-checked-border-color: var(--em9-color-primary-500);
    --em9-checkbox-checked-background-color: var(--em9-color-primary-50);
    --em9-checkbox-checked-color: var(--em9-color-primary-500);
    --em9-checkbox-checked-hover-border-color: var(--em9-color-primary-500);
    --em9-checkbox-checked-hover-background-color: var(--em9-color-primary-25);
    --em9-checkbox-checked-hover-color: var(--em9-color-primary-500);
    --em9-checkbox-checked-focus-box-shadow: 0 0 0 2px var(--em9-color-primary-100);
    --em9-checkbox-checked-focus-border-color: var(--em9-color-primary-500);
    --em9-checkbox-checked-focus-background-color: var(--em9-color-primary-50);
    --em9-checkbox-checked-focus-color: var(--em9-color-primary-500);
    --em9-checkbox-checked-disabled-border-color: var(--em9-color-gray-300);
    --em9-checkbox-checked-disabled-background-color: var(--em9-color-gray-100);
    --em9-checkbox-checked-disabled-color: var(--em9-color-gray-300);
    --em9-label-gap: var(--em9-spacing-1);
    --em9-checkbox-checked-font-size: var(--em9-font-size-text-xxs);
  }

  .checkbox {
    display: flex;
    align-items: center;
    font-family: var(--em9-checkbox-font-family);
    font-size: var(--em9-checkbox-font-size);
    font-weight: var(--em9-checkbox-font-weight);
    color: var(--em9-checkbox-color);
  }
  :host([sublabel]) .checkbox {
    align-items: start;
  }
  .checkbox__wrapper {
    position: relative;
  }
  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: var(--em9-checkbox-border-width) var(--em9-checkbox-unchecked-border-color);
    border-radius: var(--em9-checkbox-border-radius);
    background-color: var(--em9-checkbox-unchecked-background-color);
    color: var(-em9-checkbox-unchecked-color);
    transition: var(--em9-transition-fast) border-color, var(--em9-transition-fast) background-color,
      var(--em9-transition-fast) color, var(--em9-transition-fast) box-shadow;
  }
  .checkbox__label {
    user-select: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: var(--em9-label-gap);
    margin: var(--em9-checkbox-margin-label);
  }
  .checkbox__subtext {
    color: var(--em9-checkbox-subText-color);
    line-height: var(--em9-checkbox-subText-line-height);
  }
  .checkbox__maintext {
    line-height: var(--em9-checkbox-mainText-line-height);
  }
  .checkbox__control {
    width: var(--em9-checkbox-control-width);
    height: var(--em9-checkbox-control-height);
  }
  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 10;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .checkbox__control .checkbox__icon svg {
    width: 100%;
    height: 100%;
  }
  /* Hover:unchecked*/
  .checkbox:not(.checkbox--disabled):not(.checkbox--checked) .checkbox__wrapper:hover .checkbox__control {
    border-color: var(--em9-checkbox-uncheck-hover-border-color);
    background-color: var(--em9-checkbox-uncheck-hover-background-color);
  }

  /* Focus:unchecked */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled)
    .checkbox__input${focusVisibleSelector}
    ~ .checkbox__control {
    /*outline: var(--em9-focus-ring);
      outline-offset: var(--em9-focus-ring-offset-0);*/
    border-color: var(--em9-checkbox-uncheck-focus-border-color);
    box-shadow: var(--em9-checkbox-uncheck-focus-box-shadow);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--em9-checkbox-checked-border-color);
    background-color: var(--em9-checkbox-checked-background-color);
    color: var(--em9-checkbox-checked-color);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__wrapper:hover .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__wrapper:hover .checkbox__control {
    border-color: var(--em9-checkbox-checked-hover-border-color);
    background-color: var(--em9-checkbox-checked-hover-background-color);
    color: var(--em9-checkbox-checked-hover-color);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input${focusVisibleSelector} ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled)
    .checkbox__input${focusVisibleSelector}
    ~ .checkbox__control {
    /*outline: var(--em9-focus-ring);
      outline-offset: var(--em9-focus-ring-offset-0);*/
    outline: none;
    box-shadow: var(--em9-checkbox-checked-focus-box-shadow);
    border-color: var(--em9-checkbox-checked-focus-border-color);
    background: var(--em9-checkbox-checked-focus-background-color);
    color: var(--em9-checkbox-checked-focus-color);
  }

  /* Disabled */
  .checkbox--disabled {
    cursor: not-allowed;
  }
  .checkbox--disabled .checkbox__input,
  .checkbox--disabled .checkbox__label {
    cursor: not-allowed;
  }

  .checkbox.checkbox--disabled .checkbox__control {
    border-color: var(--em9-checkbox-checked-disabled-border-color);
    background: var(--em9-checkbox-checked-disabled-background-color);
    color: var(--em9-checkbox-checked-disabled-color);
  }
  .check__icon {
    font-size: var(--em9-checkbox-checked-font-size);
    line-height: 1;
  }
  div[part='label'] {
    line-height: var(--em9-line-height-denser);
  }
  :host([sublabel][size='xsmall']) {
    --em9-checkbox-mainText-line-height: 1.2;
  }
  :host([sublabel][size='small']) {
    --em9-checkbox-mainText-line-height: 1.1;
  }
  :host([sublabel][size='medium']) {
    --em9-checkbox-mainText-line-height: 1.1;
    --em9-label-gap: var(--em9-spacing-1-5);
  }
  :host([sublabel][size='large']) {
    --em9-checkbox-mainText-line-height: 1.3;
    --em9-label-gap: var(--em9-spacing-1-5);
  }

  :host([size='xsmall']) {
    --em9-checkbox-font-size: var(--em9-font-size-x-small);
    --em9-checkbox-control-width: var(--em9-spacing-3-5);
    --em9-checkbox-control-height: var(--em9-spacing-3-5);
    --em9-checkbox-margin-label: 0 0 0 var(--em9-spacing-1-5);
    --em9-checkbox-checked-font-size: var(--em9-font-size-text-xxs);
  }

  /*small checkbox*/
  :host([size='small']) {
    --em9-checkbox-control-width: var(--em9-spacing-4);
    --em9-checkbox-control-height: var(--em9-spacing-4);
    --em9-checkbox-margin-label: 0 0 0 var(--em9-spacing-2);
    --em9-checkbox-checked-font-size: var(--em9-font-size-text-xs);
  }

  /*medium  checkbox*/
  :host([size='medium']) {
    --em9-checkbox-control-width: var(--em9-spacing-4-5);
    --em9-checkbox-control-height: var(--em9-spacing-4-5);
    --em9-checkbox-margin-label: 0 0 0 var(--em9-spacing-2-5);
    --em9-checkbox-subText-line-height: var(--em9-line-height-1-2);
    --em9-checkbox-font-size: var(--em9-checkbox-font-size-large);
    --em9-checkbox-checked-font-size: var(--em9-font-size-text-sm);
  }
  :host([size='large']) {
    --em9-checkbox-control-width: var(--em9-spacing-5);
    --em9-checkbox-control-height: var(--em9-spacing-5);
    --em9-checkbox-margin-label: 0 0 0 var(--em9-spacing-3);
    --em9-checkbox-subText-line-height: var(--em9-line-height-1-2);
    --em9-checkbox-font-size: var(--em9-checkbox-font-size-large);
    --em9-checkbox-checked-font-size: var(--em9-font-size-text-sm);
  }

  :host([filled]) {
    --em9-checkbox-checked-border-color: var(--em9-color-primary-500);
    --em9-checkbox-checked-background-color: var(--em9-color-primary-500);
    --em9-checkbox-checked-color: var(--em9-color-neutral-0);
  }

  /*round checkbox*/
  :host([round]) {
    --em9-checkbox-border-radius: 50%;
    --em9-checkbox-unchecked-background-color: var(--em9-color-neutral-0);
    --em9-checkbox-unchecked-color: var(--em9-color-neutral-0);
    --em9-checkbox-uncheck-hover-border-color: var(--em9-color-primary-500);
    --em9-checkbox-uncheck-hover-background-color: var(--em9-color-primary-100);
    --em9-checkbox-uncheck-focus-border-color: var(--em9-color-primary-300);
    --em9-checkbox-checked-border-color: var(--em9-color-primary-500);
    --em9-checkbox-checked-background-color: var(--em9-color-primary-500);
    --em9-checkbox-checked-color: var(--em9-color-neutral-0);
    --em9-checkbox-checked-disabled-border-color: var(--em9-color-gray-300);
    --em9-checkbox-checked-disabled-background-color: var(--em9-color-gray-300);
    --em9-checkbox-checked-disabled-color: var(--em9-color-neutral-0);
    --em9-checkbox-checked-hover-border-color: var(--em9-color-primary-500);
    --em9-checkbox-checked-hover-background-color: var(--em9-color-primary-500);
    --em9-checkbox-checked-hover-color: var(--em9-color-neutral-0);
    --em9-checkbox-checked-focus-border-color: var(--em9-color-primary-500);
    --em9-checkbox-checked-focus-background-color: var(--em9-color-primary-500);
    --em9-checkbox-checked-focus-color: var(--em9-color-neutral-0);
  }
`;
