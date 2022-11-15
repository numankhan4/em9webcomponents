import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
    line-height: unset;
  }
  [part='label'] {
    white-space: normal;
    line-height: 1.2;
  }
  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--em9-input-border-width);
    font-family: var(--em9-input-font-family);
    font-weight: var(--em9-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--em9-transition-x-fast) background-color, var(--em9-transition-x-fast) color,
      var(--em9-transition-x-fast) border, var(--em9-transition-x-fast) box-shadow;
    cursor: inherit;
  }
  .button:not(.no-rounded) {
    border-radius: var(--em9-button-border-radius);
  }
  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(em9-icon) {
    vertical-align: -2px;
  }

  /*
   * Pill modifier
   */
  :host([size='xx-small'][pill]) [part='base'] {
    border-radius: var(--em9-input-height-small);
  }
  :host([size='x-small'][pill]) [part='base'] {
    border-radius: var(--em9-input-height-small);
  }
  :host([size='small'][pill]) [part='base'] {
    border-radius: var(--em9-input-height-small);
  }

  :host([size='medium'][pill]) [part='base'] {
    border-radius: var(--em9-input-height-medium);
  }

  :host([size='large'][pill]) [part='base'] {
    border-radius: var(--em9-input-height-large);
  }
  :host([size='x-large'][pill]) [part='base'] {
    border-radius: var(--em9-input-height-x-large);
  }
  :host([size='2x-large'][pill]) [part='base'] {
    border-radius: var(--em9-input-height-x-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  :host([size='xx-small'][circle]) [part='base'] {
    width: var(--em9-button-height-xx-small);
    border-radius: 50%;
    padding: 0;
  }
  :host([size='x-small'][circle]) [part='base'] {
    width: var(--em9-button-height-x-small);
    border-radius: 50%;
    padding: 0;
  }
  :host([size='small'][circle]) [part='base'] {
    width: var(--em9-button-height-small);
    border-radius: 50%;
    padding: 0;
  }

  :host([size='medium'][circle]) [part='base'] {
    width: var(--em9-button-height-medium);
    border-radius: 50%;
    padding: 0;
  }

  :host([size='large'][circle]) [part='base'] {
    width: var(--em9-button-height-large);
    border-radius: 50%;
    padding: 0;
  }
  :host([size='x-large'][circle]) [part='base'] {
    width: var(--em9-button-height-x-large);
    border-radius: 50%;
    padding: 0;
  }
  :host([size='2x-large'][circle]) [part='base'] {
    width: var(--em9-button-height-2x-large);
    border-radius: 50%;
    padding: 0;
  }
  .button__caret {
    padding-left: var(--em9-spacing-2-5);
  }
  .button--circle .button__dot,
  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 20px;
    height: 20px;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }
  .button--loading [part='icon'],
  .button--loading [part='dot'],
  .button--loading .button__prefix,
  .button--loading [part='label'],
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading em9-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(em9-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(em9-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  .button--has-prefix [part='prefix'] {
    padding-inline-end: var(--em9-spacing-2-5);
  }

  .button--has-suffix [part='suffix'] {
    padding-inline-start: var(--em9-spacing-2-5);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren'rtiary color always direct descendants of the button group, thus we can'rtiary color target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.em9-button-group__button--first:not(.em9-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.em9-button-group__button.em9-button-group__button--inner) button[part='base'] {
    border-radius: 0;
  }

  :host(.em9-button-group__button--last:not(.em9-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.em9-button-group__button:not(.em9-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--em9-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.em9-button-group__button:not(.em9-button-group__button--focus, .em9-button-group__button--first, [variant='SecondaryGray']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn'rtiary color clipped */
  :host(.em9-button-group__button--hover) {
    z-index: 1;
  }

  :host(.em9-button-group__button--focus),
  :host(.em9-button-group__button[checked]) {
    z-index: 2;
  }
  /*tab button*/
  :host(.em9-button-tabgroup__button.em9-button-group__button--passive) [part='base'] {
    background: inherit;
    border: inherit;
    box-shadow: none;
    color: inherit;
  }
  :host(.em9-button-tabgroup__button.em9-button-group__button--active) [part='base'] {
    border: inherit;
  }
  /*primary*/
  :host([variant='primary']) [part='base'] {
    background: var(--em9-color-primary-500);
    border-color: var(--em9-color-primary-500);
    color: var(--em9-color-neutral-0);
    box-shadow: var(--em9-shadow-x-small);
  }
  :host([variant='primary']) [part='base']:hover {
    background: var(--em9-color-primary-600);
    border-color: var(--em9-color-primary-600);
    color: var(--em9-color-neutral-0);
  }
  :host([variant='primary']) [part='base']:focus {
    outline: none;
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-primary-100);
  }
  :host([variant='primary'][disabled]) [part='base'] {
    background: var(--em9-color-primary-200);
    border-color: var(--em9-color-primary-200);
    color: var(--em9-color-neutral-0);
    outline: none;
    cursor: not-allowed;
  }
  /*Secondary gray*/
  :host([variant='secondary gray']) [part='base'] {
    background: var(--em9-color-neutral-0);
    border-color: var(--em9-color-gray-300);
    color: var(--em9-color-gray-600);
    box-shadow: var(--em9-shadow-x-small);
  }
  :host([variant='secondary gray']) [part='base']:hover {
    background: var(--em9-color-gray-50);
    border-color: var(--em9-color-gray-300);
    color: var(--em9-color-gray-700);
  }
  :host([variant='secondary gray']) [part='base']:focus {
    outline: none;
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-gray-100);
  }
  :host([variant='secondary gray'][disabled]) [part='base'] {
    background: var(--em9-color-neutral-0);
    border-color: var(--em9-color-gray-200);
    color: var(--em9-color-gray-300);
    outline: none;
    cursor: not-allowed;
  }
  /*Secondary color*/
  :host([variant='secondary color']) [part='base'] {
    background: var(--em9-color-primary-50);
    border-color: var(--em9-color-primary-50);
    color: var(--em9-color-primary-600);
    box-shadow: var(--em9-shadow-x-small);
  }
  :host([variant='secondary color']) [part='base']:hover {
    background: var(--em9-color-primary-100);
    border-color: var(--em9-color-primary-100);
    color: var(--em9-color-primary-700);
  }
  :host([variant='secondary color']) [part='base']:focus {
    outline: none;
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-primary-50);
  }
  :host([variant='secondary color'][disabled]) [part='base'] {
    background: var(--em9-color-primary-25);
    border-color: var(--em9-color-primary-25);
    color: var(--em9-color-primary-300);
    outline: none;
    cursor: not-allowed;
  }
  /*Tertiary gray*/
  :host([variant='tertiary gray']) [part='base'] {
    background: transparent;
    border-color: transparent;
    color: var(--em9-color-gray-600);
  }
  :host([variant='tertiary gray']) [part='base']:hover {
    background: var(--em9-color-gray-50);
    border-color: var(--em9-color-gray-50);
    color: var(--em9-color-gray-700);
  }
  :host([variant='tertiary gray']) [part='base']:focus {
    outline: none;
    box-shadow: none;
  }
  :host([variant='tertiary gray'][disabled]) [part='base'] {
    background: transparent;
    border-color: transparent;
    color: var(--em9-color-gray-300);
    outline: none;
    cursor: not-allowed;
  }
  /*Tertiary color*/
  :host([variant='tertiary color']) [part='base'] {
    background: transparent;
    border-color: transparent;
    color: var(--em9-color-primary-600);
  }
  :host([variant='tertiary color']) [part='base']:hover {
    background: var(--em9-color-primary-50);
    border-color: var(--em9-color-primary-50);
    color: var(--em9-color-primary-700);
  }
  :host([variant='tertiary color']) [part='base']:focus {
    outline: none;
    box-shadow: none;
  }
  :host([variant='tertiary color'][disabled]) [part='base'] {
    background: transparent;
    border-color: transparent;
    color: var(--em9-color-primary-300);
    outline: none;
    cursor: not-allowed;
  }
  /*Link color*/
  :host([variant='link color']) [part='linkbase'] {
    color: var(--em9-color-primary-600);
  }
  :host([variant='link color']) [part='linkbase']:hover {
    color: var(--em9-color-primary-700);
  }

  :host([variant='link color'][disabled]) [part='linkbase'] {
    color: var(--em9-color-primary-300);
    outline: none;
    cursor: not-allowed;
  }
  /*Link gray*/
  :host([variant='link gray']) [part='linkbase'] {
    color: var(--em9-color-gray-600);
  }
  :host([variant='link gray']) [part='linkbase']:hover {
    color: var(--em9-color-gray-700);
  }

  :host([variant='link gray'][disabled]) [part='linkbase'] {
    color: var(--em9-color-gray-300);
    outline: none;
    cursor: not-allowed;
  }
  /* light variant*/
  :host([variant='gray light']) [part='base'] {
    background: transparent;
    border-color: transparent;
    color: var(--em9-color-gray-500);
  }
  :host([variant='gray light']) [part='base']:hover {
    background: var(--em9-color-gray-50);
    border-color: var(--em9-color-gray-50);
    color: var(--em9-color-gray-600);
  }
  :host([variant='gray light']) [part='base']:focus {
    background: var(--em9-color-gray-50);
    border-color: var(--em9-color-gray-50);
    color: var(--em9-color-gray-500);
    outline: none;
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-gray-100);
  }
  :host([variant='gray light'][disabled]) [part='base'] {
    background: transparent;
    border-color: transparent;
    color: var(--em9-color-gray-300);
    outline: none;
    cursor: not-allowed;
  }

/* gray dark*/
  :host([variant="gray dark"][disabled]) [part="base"] {
    background:transparent;
    border-color:transparent;
    color:var(--em9-color-gray-300);
    outline:none;
    cursor: not-allowed;
  }
  :host([variant='gray dark']) [part='base'] {
    background: transparent;
    border-color: transparent;
    color: var(--em9-color-gray-500);
  }
  :host([variant='gray dark']) [part='base']:hover {
    background: var(--em9-color-gray-50);
    border-color: var(--em9-color-gray-50);
    color: var(--em9-color-gray-600);
  }
  :host([variant='gray dark']) [part='base']:focus {
    background: var(--em9-color-gray-400);
    border-color: var(--em9-color-gray-400);
    color: var(--em9-color-neutral-0);
    outline: none;
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-gray-500);
  }

  /* primary dark*/
  :host([variant='primary dark'][disabled]) [part='base'] {
    background: transparent;
    border-color: transparent;
    color: var(--em9-color-primary-300);
    outline: none;
    cursor: not-allowed;
  }
  :host([variant='primary dark']) [part='base'] {
    background: transparent;
    border-color: transparent;
    color: var(--em9-color-primary-500);
  }
  :host([variant='primary dark']) [part='base']:hover {
    background: var(--em9-color-primary-50);
    border-color: var(--em9-color-primary-50);
    color: var(--em9-color-primary-600);
  }
  :host([variant='primary dark']) [part='base']:focus {
    background: var(--em9-color-primary-400);
    border-color: var(--em9-color-primary-400);
    color: var(--em9-color-neutral-0);
    outline: none;
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-primary-500);
  }
  /* primary light*/
  :host([variant='primary light'][disabled]) [part='base'] {
    background: transparent;
    border-color: transparent;
    color: var(--em9-color-primary-300);
    outline: none;
    cursor: not-allowed;
  }
  :host([variant='primary light']) [part='base'] {
    background: transparent;
    border-color: transparent;
    color: var(--em9-color-primary-500);
  }
  :host([variant='primary light']) [part='base']:hover {
    background: var(--em9-color-primary-50);
    border-color: var(--em9-color-primary-50);
    color: var(--em9-color-primary-600);
  }
  :host([variant='primary light']) [part='base']:focus {
    background: var(--em9-color-primary-50);
    border-color: var(--em9-color-primary-50);
    color: var(--em9-color-primary-500);
    outline: none;
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-primary-100);
  }

  /*Primary Destructive*/
  :host([variant='primary'][destructive]) [part='base'] {
    background: var(--em9-color-danger-600);
    border-color: var(--em9-color-danger-600);
    color: var(--em9-color-neutral-0);
    box-shadow: var(--em9-shadow-x-small);
  }
  :host([variant='primary'][destructive]) [part='base']:hover {
    background: var(--em9-color-danger-700);
    border-color: var(--em9-color-danger-700);
    color: var(--em9-color-neutral-0);
  }
  :host([variant='primary'][destructive]) [part='base']:focus {
    outline: none;
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-danger-100);
  }
  :host([variant='primary'][destructive][disabled]) [part='base'] {
    background: var(--em9-color-danger-200);
    border-color: var(--em9-color-danger-200);
    color: var(--em9-color-neutral-0);
    outline: none;
    cursor: not-allowed;
  }
  /*Secondary gray Destructive*/
  :host([variant='secondary gray'][destructive]) [part='base'] {
    background: var(--em9-color-neutral-0);
    border-color: var(--em9-color-danger-300);
    color: var(--em9-color-danger-700);
    box-shadow: var(--em9-shadow-x-small);
  }
  :host([variant='secondary gray'][destructive]) [part='base']:hover {
    background: var(--em9-color-danger-50);
    border-color: var(--em9-color-danger-300);
    color: var(--em9-color-danger-800);
  }
  :host([variant='secondary gray'][destructive]) [part='base']:focus {
    outline: none;
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-danger-100);
  }
  :host([variant='secondary gray'][destructive][disabled]) [part='base'] {
    background: var(--em9-color-neutral-0);
    border-color: var(--em9-color-danger-200);
    color: var(--em9-color-danger-300);
    outline: none;
    cursor: not-allowed;
  }

  /*Secondary color destructive*/
  :host([variant='secondary color'][destructive]) [part='base'] {
    background: var(--em9-color-danger-50);
    border-color: var(--em9-color-danger-50);
    color: var(--em9-color-danger-700);
    box-shadow: var(--em9-shadow-x-small);
  }
  :host([variant='secondary color'][destructive]) [part='base']:hover {
    background: var(--em9-color-danger-100);
    border-color: var(--em9-color-danger-100);
    color: var(--em9-color-danger-800);
  }
  :host([variant='secondary color'][destructive]) [part='base']:focus {
    outline: none;
    box-shadow: var(--em9-shadow-x-small), 0px 0px 0px 4px var(--em9-color-danger-100);
  }
  :host([variant='secondary color'][destructive][disabled]) [part='base'] {
    background: var(--em9-color-danger-25);
    border-color: var(--em9-color-danger-25);
    color: var(--em9-color-danger-300);
    outline: none;
    cursor: not-allowed;
  }
  /*Tertiary gray destructive/Tertiary color destructive*/
  :host([variant='tertiary gray'][destructive]) [part='base'],
  :host([variant='tertiary color'][destructive]) [part='base'] {
    background: transparent;
    border-color: transparent;
    color: var(--em9-color-danger-700);
  }
  :host([variant='tertiary gray'][destructive]) [part='base']:hover,
  :host([variant='tertiary color'][destructive]) [part='base']:hover {
    background: var(--em9-color-danger-50);
    border-color: var(--em9-color-danger-50);
    color: var(--em9-color-danger-800);
  }

  :host([variant='tertiary gray'][destructive][disabled]) [part='base'],
  :host([variant='tertiary color'][destructive][disabled]) [part='base'] {
    background: transparent;
    border-color: transparent;
    color: var(--em9-color-danger-300);
    outline: none;
    cursor: not-allowed;
  }

  /*Link gray destructive/Link color destructive*/
  :host([variant='link gray'][destructive]) [part='linkbase'],
  :host([variant='link color'][destructive]) [part='linkbase'] {
    color: var(--em9-color-danger-700);
  }
  :host([variant='link gray'][destructive]) [part='linkbase']:hover,
  :host([variant='link color'][destructive]) [part='linkbase']:hover {
    color: var(--em9-color-danger-800);
  }

  :host([variant="link gray"][destructive][disabled]) [part="linkbase"],
  :host([variant="link color"][destructive][disabled])) [part="linkbase"]:hover {
    color: var(--em9-color-danger-300);
    outline: none;
    cursor: not-allowed;
  }

  /*icon colors*/
  /*primary variant colors*/
  :host([variant='primary']) [part='base'] [part='dot'] {
    color: var(--var-em9-neutral-0);
  }
  :host([variant='primary'][disabled]) [part='base'] [part='dot'] {
    color: var(--var-em9-neutral-0);
  }

  /*secondary gray icon colors*/
  :host([variant='secondary gray']) [part='base'] [part='dot'] {
    color: var(--em9-color-success-500);
  }
  :host([variant='secondary gray'][disabled]) [part='base'] [part='dot'] {
    color: var(--em9-color-gray-300);
  }

  /*secondary color icon colors*/
  :host([variant='secondary color']) [part='base'] [part='dot'] {
    color: var(--em9-color-success-500);
  }
  :host([variant='secondary color'][disabled]) [part='base'] [part='dot'] {
    color: var(--em9-color-primary-300);
  }

  /*link gray  icon colors*/
  :host([variant='link gray']) [part='linkbase'] [part='dot'],
  :host([variant='tertiary gray']) [part='base'] [part='dot'] {
    color: var(--em9-color-success-500);
  }
  :host([variant='link gray'][disabled]) [part='linkbase'] [part='dot'],
  :host([variant='tertiary gray'][disabled]) [part='base'] [part='dot'] {
    color: var(--em9-color-gray-300);
  }

  /*link color  icon colors*/
  :host([variant='link color']) [part='linkbase'] [part='dot'],
  :host([variant='tertiary color']) [part='base'] [part='dot'] {
    color: var(--em9-color-success-500);
  }
  :host([variant='link color'][disabled]) [part='linkbase'] [part='dot'],
  :host([variant='tertiary color'][disabled]) [part='base'] [part='dot'] {
    color: var(--em9-color-gray-300);
  }

  /*primary variant Desructive ICON colors*/
  :host([variant='primary'][destructive]) [part='base'] [part='dot'] {
    color: var(--var-em9-neutral-0);
  }
  :host([variant='primary'][destructive][disabled]) [part='base'] [part='dot'] {
    color: var(--var-em9-neutral-0);
  }

  /*secondary gray icon colors*/
  :host([variant='secondary gray'][destructive]) [part='base'] [part='dot'] {
    color: var(--em9-color-danger-500);
  }
  :host([variant='secondary gray'][destructive][disabled]) [part='base'] [part='dot'] {
    color: var(--em9-color-danger-300);
  }

  /*secondary color icon colors*/
  :host([variant='secondary color'][destructive]) [part='base'] [part='dot'] {
    color: var(--em9-color-danger-500);
  }
  :host([variant='secondary color'][destructive][disabled]) [part='base'] [part='dot'] {
    color: var(--em9-color-danger-300);
  }

  /*link gray  icon colors*/
  :host([variant='link gray'][destructive]) [part='base'] [part='dot'] {
    color: var(--em9-danger-danger-500);
  }
  :host([variant='link gray'][destructive][disabled]) [part='base'] [part='dot'] {
    color: var(--em9-color-danger-300);
  }

  /*link color  icon colors*/
  :host([variant='link color'][destructive]) [part='base'] [part='dot'] {
    color: var(--em9-color-danger-500);
  }
  :host([variant='link color'][destructive][disabled]) [part='base'] [part='dot'] {
    color: var(--em9-color-danger-300);
  }
  .button__dot {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
    padding-right: var(--em9-spacing-2-5);
  }
  .button__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  /*button xx-small sizing*/
  :host([size='xx-small']) [part='base'] {
    font-size: var(--em9-font-size-text-xs);
    min-height: var(--em9-spacing-7);
    line-height: unset;
    padding: 0 var(--em9-spacing-2);
  }
  :host([size='xx-small']) [part='base'] [part='label'] {
    padding: 6px 0;
    line-height: 1.1;
  }
  /*button x-small sizing*/
  :host([size='x-small']) [part='base'] {
    font-size: var(--em9-font-size-text-sm);
    min-height: var(--em9-spacing-8);
    line-height: calc(var(--em9-spacing-8) - var(--em9-input-border-width) * 2);
    padding: 0 var(--em9-spacing-3);
  }
  :host([size='x-small']) [part='base'] [part='label'] {
    padding: 6px 0;
  }
  /*button small sizing*/
  :host([size='small']) [part='base'] {
    font-size: var(--em9-font-size-text-sm);
    min-height: var(--em9-spacing-9);
    line-height: calc(var(--em9-spacing-9) - var(--em9-input-border-width) * 2);
    padding: 0 var(--em9-spacing-3-5);
  }
  :host([size='small']) [part='base'] [part='label'] {
    padding: 8px 0;
  }
  /*button small sizing*/

  :host([size='medium']) [part='base'] {
    font-size: var(--em9-font-size-text-sm);
    min-height: var(--em9-spacing-10);
    padding: 0 var(--em9-spacing-4);
  }
  :host([size='medium']) [part='base'] [part='label'] {
    padding: 10px 0;
  }
  :host([size='large']) [part='base'] {
    font-size: var(--em9-font-size-text-md);
    min-height: var(--em9-spacing-11);
    padding: 0 var(--em9-spacing-4-5);
  }
  :host([size='large']) [part='base'] [part='label'] {
    padding: 10px 0;
    line-height: 1.3;
  }
  :host([size='x-large']) [part='base'] {
    font-size: var(--em9-font-size-text-md);
    min-height: var(--em9-spacing-12);
    padding: 0 var(--em9-spacing-5);
  }
  :host([size='x-large']) [part='base'] [part='label'] {
    padding: 12px 0;
    line-height: 1.3;
  }
  :host([size='2x-large']) [part='base'] {
    font-size: var(--em9-font-size-text-lg);
    min-height: var(--em9-spacing-14-5);
    padding: 0 var(--em9-spacing-5);
  }
  :host([size='2x-large']) [part='base'] [part='label'] {
    padding: 14px 0;
    line-height: 1.4;
  }

  :host [part='linkbase'] {
    border: none;
    background: transparent;
  }
  :host([size='xx-small']) [part='linkbase'] {
    font-size: var(--em9-font-size-text-xs);
  }
  :host([size='x-small']) [part='linkbase'],
  :host([size='small']) [part='linkbase'],
  :host([size='medium']) [part='linkbase'] {
    font-size: var(--em9-font-size-text-sm);
  }
  :host([size='x-large']) [part='linkbase'],
  :host([size='large']) [part='linkbase'] {
    font-size: var(--em9-font-size-text-md);
  }
  :host([size='2x-large']) [part='linkbase'] {
    font-size: var(--em9-font-size-text-lg);
  }
  /* Default */
  .button--outline.button--default {
    border-color: var(--em9-color-neutral-300);
    color: var(--em9-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--em9-color-primary-600);
    background-color: var(--em9-color-primary-600);
    color: var(--em9-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--em9-color-primary-700);
    background-color: var(--em9-color-primary-700);
    color: var(--em9-color-neutral-0);
  }
  .button.button--default${focusVisibleSelector} {
    outline: var(--em9-focus-ring-default);
  }
`;
