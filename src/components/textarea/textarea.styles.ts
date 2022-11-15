import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--em9-input-font-family);
    font-weight: var(--em9-input-font-weight);
    line-height: var(--em9-line-height-normal);
    letter-spacing: var(--em9-input-letter-spacing);
    vertical-align: middle;
    transition: var(--em9-transition-fast) color, var(--em9-transition-fast) border, var(--em9-transition-fast) box-shadow,
      var(--em9-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--em9-input-background-color);
    border: solid var(--em9-input-border-width) var(--em9-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--em9-input-background-color-hover);
    border-color: var(--em9-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--em9-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--em9-input-background-color-focus);
    border-color: var(--em9-input-border-color-focus);
    color: var(--em9-input-color-focus);
    box-shadow: 0 0 0 var(--em9-focus-ring-width) var(--em9-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--em9-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--em9-input-background-color-disabled);
    border-color: var(--em9-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--em9-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--em9-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: 1px solid transparent;
    background-color: var(--em9-input-filled-background-color);
    color: var(--em9-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    border-color:  var(--em9-input-border-color);
    background-color: var(--em9-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--em9-input-filled-background-color-focus);
    border-color:  var(--em9-input-border-color);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--em9-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--em9-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--em9-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--em9-input-border-radius-small);
    font-size: var(--em9-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: var(--em9-spacing-2-5) var(--em9-spacing-3-5);
  }

  .textarea--medium {
    border-radius: var(--em9-input-border-radius-medium);
    font-size: var(--em9-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--em9-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--em9-input-border-radius-large);
    font-size: var(--em9-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--em9-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }

  /*
   * Validation types
   */
  .textarea--standard.textarea--invalid {
    background-color: var(--em9-input-background-color);
    border-color: var(--em9-input-border-danger);
  }

  .textarea--standard.textarea--invalid:not(.textarea--disabled),
  .textarea--standard.textarea--invalid:hover:not(.textarea--disabled) {
    border-color: var(--em9-input-border-danger-hover);
  }

  .textarea--standard.textarea--invalid.textarea--focused:not(.textarea--disabled) {
    background-color: var(--em9-input-background-color-focus);
    border-color: var(--em9-input-border-danger-focus);
    box-shadow: 0 0 0 var(--em9-focus-ring-width) var(--em9-input-focus-ring-danger);
  }

  .textarea--standard.textarea--invalid.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--em9-input-danger-focus);
  }

  .textarea--filled.textarea--invalid {
    border-color: var(--em9-input-border-danger);
  }

  .textarea--filled.textarea--invalid:not(.textarea--disabled),
  .textarea--filled.textarea--invalid:hover:not(.textarea--disabled) {
    border-color: var(--em9-input-border-danger-hover);
  }

  .textarea--filled.textarea--invalid.textarea--focused:not(.textarea--disabled) {
    background-color: var(--em9-input-background-color-focus);
    border-color: var(--em9-input-border-danger-focus);
    box-shadow: 0 0 0 var(--em9-focus-ring-width) var(--em9-input-focus-ring-danger);
  }

  .textarea--filled.textarea--invalid.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--em9-input-danger-focus);
  }

  .textarea--standard.textarea--line {
    border: none;
    border-bottom: solid var(--em9-input-border-width) var(--em9-input-border-color);
    border-radius:0;
    box-shadow: none;
  }

  .textarea--line.textarea--invalid.textarea--focused:not(.textarea--disabled),
  .textarea--line.textarea--focused:not(.textarea--disabled){
    box-shadow: none;
  }

  .textarea--standard.textarea--line .textarea__control {
    padding: 0.5em 0;
  }
`;
