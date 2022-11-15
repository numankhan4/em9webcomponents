import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --switch-base-bg: var(--em9-color-neutral-100);
    --switch-border-width: 1px;
    --switch-height: var(--em9-toggle-size);
    --thumb-size: calc(var(--em9-toggle-size) - 0.25rem);
    --thumb-margin: 0;
    --switch-width: calc(var(--em9-toggle-size) + 1rem);
    --thumb-shadow: var(--em9-shadow-x-small);
    --thumb-focused: 0px 0px 0px 2px rgba(222, 243, 253, 1);
    --label-margin-left: var(--em9-spacing-2);
    --thumb-bg: var(--em9-color-neutral-0);
    --switch-hover: var(--em9-color-neutral-200);
    --switch-focus-bg: var(--em9-color-neutral-50);
    --switch-checked-bg: var(--em9-color-teal-500);
    --switch-checked-hover: var(--em9-color-teal-600);
    --switch-label-font-weight: var(--em9-font-weight-light);
    --switch-label-font-size: var(--em9-font-size-text-sm);
    --switch-label-color: rgba(77, 80, 107, 1);
    --subLabel-color: var(--em9-color-gray-500);
    --labelInsideColor: var(--em9-color-gray-700);
    --labelInsideCheckedColor: var(--em9-color-neutral-0);
    --labelInsidePadding: var(--em9-spacing-1) var(--em9-spacing-3-5) var(--em9-spacing-1)
      calc(var(--thumb-size) + var(--em9-spacing-4-5));
    --labelInsideCheckedPadding: var(--em9-spacing-1) calc(var(--em9-spacing-4-5) + var(--thumb-size))
      var(--em9-spacing-1) var(--em9-spacing-3-5);
    --labelInsideThumbLeft: calc(var(--thumb-size) / 2 + 0.18rem);
    --labelInsideCheckedThumbLeft: calc(100% - var(--thumb-size) * 1.5 - 3px);
    display: inline-block;
  }

  .switch {
    display: flex;
    align-items: start;
    font-size: var(--switch-label-font-size);
    font-weight: var(--switch-label-font-weight);
    color: var(--switch-label-color);
    vertical-align: middle;
    position: relative;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--switch-width);
    height: var(--switch-height);
    background-color: var(--switch-base-bg);
    border: solid var(--switch-border-width) var(--switch-base-bg);
    border-radius: calc(var(--switch-height) - 0.5rem);
    transition: var(--em9-transition-fast) border-color, var(--em9-transition-fast) background-color;
  }
  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--thumb-bg);
    border-radius: 50%;
    box-shadow: var(--thumb-shadow);
    transform: translateX(calc((var(--switch-width) - var(--switch-height)) / -2));
    transition: var(--em9-transition-fast) transform ease, var(--em9-transition-fast) background-color,
      var(--em9-transition-fast) border-color, var(--em9-transition-fast) box-shadow;
    margin: var(--thumb-margin);
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    left: 0px;
    cursor: pointer;
    z-index: 10;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:hover + .switch__control {
    background-color: var(--switch-hover);
    border-color: var(--switch-hover);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input${focusVisibleSelector} ~ .switch__control {
    background-color: var(--switch-focus-bg);
    box-shadow: var(--thumb-focused);
  }

  .switch:not(.switch--checked):not(.switch--disabled)
    .switch__input${focusVisibleSelector}
    ~ .switch__control
    .switch__thumb {
    box-shadow: var(--thumb-shadow);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--switch-checked-bg);
    border-color: var(--switch-checked-bg);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--em9-color-neutral-0);
    border-color: var(--em9-color-primary-600);
    transform: translateX(calc((var(--switch-width) - var(--switch-height)) / 2));
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__input:hover + .switch__control {
    background-color: var(--switch-checked-hover);
    border-color: var(--switch-checked-hover);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input${focusVisibleSelector} ~ .switch__control {
    box-shadow: var(--thumb-focused);
  }

  .switch.switch--checked:not(.switch--disabled)
    .switch__input${focusVisibleSelector}


  /* Disabled */
  .switch--disabled {
    cursor: not-allowed;
  }
  .switch--disabled .switch__control {
    background: var(--em9-color-gray-100);
    border-color: var(--em9-color-gray-100);
  }
  .switch__wrapper {
    position: relative;
    display: flex;
  }
  .switch__label {
    line-height: var(--switch-height);
    padding-left: var(--label-margin-left);
    user-select: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }

  .switch__subtext {
    display: block;
    color: var(--subLabel-color);
    font-weight: 400;
  }

  /*xSmall switch*/
  .switch--xSmall {
    font-size: var(--em9-font-size-x-small);
  }
  .switch--xSmall .switch__control {
    width: var(--em9-spacing-3-5);
    height: var(--em9-spacing-3-5);
  }
  .switch--xSmall .switch__label {
    padding-left: var(--em9-spacing-1-5);
  }
  /*small switch*/

  /*small switch*/
  .switch--small .switch__control {
    width: var(--switch-width);
    height: var(--switch-height);
  }
  .switch--small .switch__label {
    padding-left: var(--em9-spacing-2);
  }

  /*medium  switch*/
  .switch--medium .switch__control {
    width: calc(var(--switch-width) + 0.5rem);
    height: calc(var(--switch-height) + 0.25rem);
  }
  .switch--medium .switch__label {
    line-height: calc(var(--switch-height) + 0.25rem);
    font-weight: 500;
    font-size: var(--em9-font-size-text-md);
    padding-left: var(--em9-spacing-3);
  }
  .switch--medium .switch__label .switch__subtext {
    font-weight: 400;
  }
  .switch--medium .switch__control .switch__thumb {
    width: calc(var(--thumb-size) + 0.25rem);
    height: calc(var(--thumb-size) + 0.25rem);
    margin-left: -4px;
  }
  .switch--medium.switch--checked .switch__control .switch__thumb {
    margin-left: 0;
    margin-right: -4px;
  }
  /*large  switch*/
  .switch--medium,
  .switch--large {
    font-size: var(--em9-switch-font-size-large);
  }
  .switch--large .switch__control {
    width: var(--em9-spacing-5);
    height: var(--em9-spacing-5);
  }
  .switch--large .switch__label {
    padding-left: var(--em9-spacing-3);
    gap: var(--em9-spacing-1-5);
  }
  /* switch Label inside*/
  .switch--labelInside .switch__control {
    width: auto;
    height: auto;
    padding: var(--labelInsidePadding);
    position: relative;
    border-radius: calc(var(--switch-height));
  }
  .switch--labelInside.switch--checked .switch__control {
    padding: var(--labelInsideCheckedPadding);
  }
  .switch--labelInside .switch__control .switch__thumb {
    width: calc(var(--thumb-size) + 0.5rem);
    height: calc(var(--thumb-size) + 0.5rem);
    position: absolute;
    left: var(--labelInsideThumbLeft);
    transition: all var(--em9-transition-slow) ease;
  }
  .switch--labelInside.switch--checked .switch__control .switch__thumb {
    left: var(--labelInsideCheckedThumbLeft);
    transform: translateX(0);
  }
  .switch--labelInside__text {
    color: var(--labelInsideColor);
    line-height: 1.6;
  }
  .switch--labelInside.switch--checked .switch--labelInside__text {
    color: var(--labelInsideCheckedColor);
  }
  .switch--disabled.switch--checked .switch--labelInside__text,
  .switch--disabled .switch--labelInside__text {
    color: var(--em9-color-gray-300);
  }
  .switch--un-checked .switch--labelInside__text {
    animation-name: fade-out;
    animation-duration: 1s;
  }
  .switch--checked .switch--labelInside__text {
    animation-name: fade-in;
    animation-duration: 1s;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /*End of switch Label inside*/
`;
