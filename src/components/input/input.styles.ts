import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--em9-input-font-family);
    font-weight: var(--em9-input-font-weight);
    letter-spacing: var(--em9-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--em9-transition-fast) color, var(--em9-transition-fast) border, var(--em9-transition-fast) box-shadow,
    var(--em9-transition-fast) background-color;
    box-shadow: var(--em9-shadow-xs);
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--em9-input-background-color);
  }
  .input--standard:not(.input--line):not(.border--less){
    border: solid var(--em9-input-border-width) var(--em9-input-border-color);
  }
  .input--standard:hover:not(.input--disabled) {
    background-color: var(--em9-input-background-color-hover);
    border-color: var(--em9-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--em9-input-background-color-focus);
    border-color: var(--em9-input-border-color-focus);
    box-shadow: 0 0 0 var(--em9-focus-ring-width) var(--em9-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--em9-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--em9-input-background-color-disabled);
    border-color: var(--em9-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .input--standard.input--disabled .input__control {
    color: var(--em9-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--em9-input-placeholder-color-disabled);
  }

  .input--standard.input--invalid {
    background-color: var(--em9-input-background-color);
    border-color: var(--em9-input-border-danger);
  }

  .input--standard.input--invalid:not(.input--disabled),
  .input--standard.input--invalid:hover:not(.input--disabled) {
    border-color: var(--em9-input-border-danger-hover);
  }

  .input--standard.input--invalid.input--focused:not(.input--disabled) {
    background-color: var(--em9-input-background-color-focus);
    border-color: var(--em9-input-border-danger-focus);
    box-shadow: 0 0 0 var(--em9-focus-ring-width) var(--em9-input-focus-ring-danger);
  }

  .input--standard.input--invalid.input--focused:not(.input--disabled) .input__control {
    color: var(--em9-input-danger-focus);
  }



  .input--standard.input--success {
    background-color: var(--em9-input-background-color);
    border: solid var(--em9-input-border-width) var(--em9-input-border-success);
  }

  .input--standard.input--success:hover:not(.input--disabled) {
    border-color: var(--em9-input-border-success-hover);
  }

  .input--standard.input--success.input--focused:not(.input--disabled) {
    border-color: var(--em9-input-border-success-focus);
    box-shadow: 0 0 0 var(--em9-focus-ring-width) var(--em9-input-focus-ring-success);
  }

  .input--standard.input--success.input--focused:not(.input--disabled) .input__control {
    color: var(--em9-input-success-focus);
  }


  /* Filled inputs */
  .input--filled {
    border: 1px solid var(--em9-input-filled-background-color);
    background-color: var(--em9-input-filled-background-color);
    color: var(--em9-input-color);
    box-shadow: none;
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--em9-input-filled-background-color-hover);
    border-color: var(--em9-input-border-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--em9-input-filled-background-color-focus);
    border-color: var(--em9-input-border-color-focus);
    box-shadow: 0 0 0 var(--em9-focus-ring-width) var(--em9-input-focus-ring-color);
  }

  .input--filled.input--disabled,
  .suffix--disabled{
    background-color: var(--em9-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .input--filled.input--invalid {
    background-color: var(--em9-input-filled-background-color);
    border-color: var(--em9-input-border-danger);
  }

  .input--filled.input--invalid:not(.input--disabled),
  .input--filled.input--invalid:hover:not(.input--disabled) {
    border-color: var(--em9-input-border-danger-hover);
  }

  .input--filled.input--invalid.input--focused:not(.input--disabled) {
    background-color: var(--em9-input-filled-background-color-focus);
    border-color: var(--em9-input-border-danger-focus);
    box-shadow: 0 0 0 var(--em9-focus-ring-width) var(--em9-input-focus-ring-danger);
  }

  .input--filled.input--invalid.input--focused:not(.input--disabled) .input__control {
    color: var(--em9-input-danger-focus);
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--em9-input-color);
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--em9-input-height-large) var(--em9-input-background-color-hover) inset;
    -webkit-text-fill-color: var(--em9-color-primary-500);
    caret-color: var(--em9-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--em9-input-height-large) var(--em9-input-filled-background-color) inset;
  }

  .input__control::placeholder {
    color: var(--em9-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--em9-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(em9-icon) {
    color: var(--em9-input-prefix-color);
    font-size: var(--em9-font-size-x-large);
  }

  .input__suffix ::slotted(em9-icon),
  .input__suffix ::slotted(*) {
    color: var(--em9-color-gray-400);
    display: flex;
  }

  .input__suffix ::slotted(em9-icon),
  .input__suffix ::slotted(*){
    font-size: calc(var(--em9-font-size-x-large) * 0.8);
  }

  .input__suffix-invalid,
  .input__suffix-invalid ::slotted(em9-icon),
  .input__suffix-invalid ::slotted(*){
    color: var(--em9-color-danger-500);
  }

  /*
 * input label modifiers
 */
  .input_label_prefix,
  .input_label_suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #70728F;
    padding-inline-start: calc(var(--em9-input-spacing-medium) * 1.25);
    padding-inline-end: calc(var(--em9-input-spacing-medium) * 1.25);
  }

  .suffix--standard .input_label_prefix,
  .suffix--standard .input_label_suffix {
    box-shadow: var(--em9-shadow-xs);
  }

    /*
  * labels as standard modifiers
  */
  .suffix--standard.has--prefix--labels .input_label_prefix {
    border: solid var(--em9-input-border-width) var(--em9-input-border-color);
    border-right: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .suffix--standard.has--prefix--labels .input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .suffix--standard.has--suffix--labels .input_label_suffix {
    border: solid var(--em9-input-border-width) var(--em9-input-border-color);
    border-left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .suffix--standard.has--suffix--labels .input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  /*
* labels as fill modifiers
*/
  .suffix--filled.has--prefix--labels .input_label_prefix,
  .suffix--filled.has--suffix--labels .input_label_suffix {
    background-color: var(--em9-color-gray-200);
  }
  .suffix--filled.has--prefix--labels .input_label_prefix {
    border: solid var(--em9-input-border-width) var(--em9-color-gray-200);
    border-right: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .suffix--filled.has--prefix--labels .input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .suffix--filled.has--suffix--labels .input_label_suffix {
    border: solid var(--em9-input-border-width) var(--em9-color-gray-200);
    border-left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .suffix--filled.has--suffix--labels .input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  /*
* labels as linestyled modifiers
*/
  .suffix--line.has-static-label {
    border-bottom: solid var(--em9-input-border-width) var(--em9-input-border-color);
  }
  .suffix--line.has-static-label .input {
    border-bottom: 0;
  }

  .suffix--line.has-static-label:hover:not(.input--disabled) {
    border-color: var(--em9-input-border-color-hover);
  }

  .suffix--line.has-static-label.suffix--focused:not(.input--disabled) {
    border-color: var(--em9-input-border-color-focus);
  }

  .suffix--line.has-static-label.suffix--invalid:not(.input--disabled),
  .suffix--line.suffix--invalid:hover:not(.input--disabled),
  .has-copy-to-clipboard.suffix--line.suffix--invalid:not(.input--disabled){
    border-color: var(--em9-color-danger-500);
  }

  .suffix--line.has--prefix--labels .input_label_prefix {
    padding-inline-start: 0;
  }

  .suffix--line.has--suffix--labels .input_label_suffix {
    padding-inline-end: 0;
  }

  .input--standard.input--line .input_label_prefix,
  .input--standard.input--line .input_label_suffix {
    border: none;
  }

  .input--standard.input--line .input_label_prefix {
    padding-inline-start: 0;
  }

  .input--standard.input--line .input_label_suffix {
    padding-inline-end: 0;
  }

  .input--filled .input_label_prefix,
  .input--filled .input_label_suffix,
  .input--filled .input-copy-label{
    background: var(--em9-color-gray-200);
    border-color: var(--em9-color-gray-200);
  }

  /*
* copy to clipboard modifiers
*/
  .input-copy-label {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #70728F;
    padding-inline-start: calc(var(--em9-input-spacing-medium) * 1.25);
    padding-inline-end: calc(var(--em9-input-spacing-medium) * 1.25);
  }

  .suffix--standard .input-copy-label {
    box-shadow: var(--em9-shadow-xs);
  }

  .has-copy-to-clipboard.suffix--standard .input-copy-label {
    border: solid var(--em9-input-border-width) var(--em9-input-border-color);
    border-left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .has-copy-to-clipboard.suffix--standard .input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }


  .has-copy-to-clipboard.suffix--filled .input-copy-label {
    border: solid var(--em9-input-border-width) var(--em9-color-gray-200);
    background-color: var(--em9-color-gray-200);
    border-left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .has-copy-to-clipboard.suffix--filled .input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .has-copy-to-clipboard.suffix--line {
    border-bottom: solid var(--em9-input-border-width) var(--em9-input-border-color);
  }

  .has-copy-to-clipboard.suffix--line:hover:not(.input--disabled) {
    border-color: var(--em9-input-border-color-hover);
  }

  .has-copy-to-clipboard.suffix--line.suffix--focused:not(.input--disabled) {
    border-color: var(--em9-input-border-color-focus);
  }

  .has-copy-to-clipboard.suffix--line .input-copy-label {
    padding-inline-end: 0;
  }

  .has-copy-to-clipboard.suffix--line .input {
   border-bottom: 0;
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--em9-input-border-radius-small);
    font-size: var(--em9-input-font-size-small);
    height: var(--em9-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--em9-input-height-small) - var(--em9-input-border-width) * 2);
    padding: 0 calc(var(--em9-input-spacing-small) - 0.125rem);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--em9-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    padding-inline-start: calc(1px + var(--em9-input-spacing-small));
  }

  .input--small .input__suffix ::slotted(*) {
    padding-inline-end: calc(1px + var(--em9-input-spacing-small));
  }

  .input--small .input__prefix ::slotted(em9-icon.selected-prefix) {
    font-size: var(--em9-font-size-x-large);
    padding-inline-end: 1px;
    border-radius: 2px;
  }

  .input--medium {
    border-radius: var(--em9-input-border-radius-medium);
    font-size: var(--em9-input-font-size-medium);
    height: var(--em9-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--em9-input-height-medium) - var(--em9-input-border-width) * 2);
    padding: 0 calc(-2px + var(--em9-input-spacing-medium));
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--em9-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    padding-inline-start: calc(var(--em9-input-spacing-medium) * 1.08333);
  }

  .input--medium .input__suffix ::slotted(*) {
    padding-inline-end: calc(var(--em9-input-spacing-medium) * 1.08333);
  }

  .input--medium .input__prefix ::slotted(em9-icon.selected-prefix) {
    font-size: calc(var(--em9-input-spacing-medium) * 1.8333333);
    padding-inline-end: 1px;
    border-radius: 2px;
  }

  .input--large {
    border-radius: var(--em9-input-border-radius-large);
    font-size: var(--em9-input-font-size-large);
    height: var(--em9-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--em9-input-height-large) - var(--em9-input-border-width) * 2);
    padding: 0 calc(var(--em9-input-spacing-large) -  0.35rem);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--em9-input-spacing-large) * 1.5);
  }

  .input--large .input__prefix ::slotted(*) {
    padding-inline-start: calc(var(--em9-input-spacing-large) * 0.875);
  }

  .input--large .input__suffix ::slotted(*) {
    padding-inline-end: calc(var(--em9-input-spacing-large) * 0.875);
  }

  .input--large .input__prefix ::slotted(em9-icon.selected-prefix) {
    font-size: calc(var(--em9-input-spacing-large) * 1.5);
    padding-inline-end: 1px;
    border-radius: 2px;
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--em9-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--em9-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--em9-input-height-large);
  }

  /*
    * lineStyled modifier
    */
  .input--standard.input--line{
    border-bottom: solid var(--em9-input-border-width) var(--em9-input-border-color);
    border-radius:0;
    box-shadow: none;
  }

  .input--standard.input--line.input--focused:not(.input--disabled){
    box-shadow:none;
  }

  .input--standard.input--line .input__prefix ::slotted([slot="prefix"]:first-child) {
    padding-inline-start: 0;
  }

  .input--standard.input--line .input__suffix ::slotted([slot="suffix"]:last-child)  {
    padding-inline-end: 0;
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--em9-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--em9-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--em9-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  [slot="label_prefix"],
  [slot="label_prefix"] {
    display: flex;
    align-items: center;
  }

  .has-static-label {
    display: flex;
  }

  .has-copy-to-clipboard {
    display: flex;
  }


  .input__prefix ::slotted([part="symbol"]) {
    color: var(--em9-color-gray-500);
  }
`;
