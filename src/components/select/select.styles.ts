import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  .select {
    display: block;
  }

  .select__control {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--em9-input-font-family);
    font-weight: var(--em9-input-font-weight);
    letter-spacing: var(--em9-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--em9-transition-fast) color, var(--em9-transition-fast) border, var(--em9-transition-fast) box-shadow;
    cursor: pointer;
    box-shadow: var(--em9-shadow-xs);
  }

  .select__menu {
    max-height: 50vh;
    overflow: auto;
  }

  /* Standard selects */
  .select--standard .select__control {
    background-color: var(--em9-input-background-color);
    border: solid var(--em9-input-border-width) var(--em9-input-border-color);
    color: var(--em9-input-color);
  }

  .select--standard:not(.select--disabled) .select__control:hover {
    background-color: var(--em9-input-background-color-hover);
    border-color: var(--em9-input-border-color-hover);
    color: var(--em9-input-color-hover);
  }

  .select--standard.select--focused:not(.select--disabled) .select__control {
    background-color: var(--em9-input-background-color-focus);
    border-color: var(--em9-input-border-color-focus);
    color: var(--em9-input-color-focus);
    box-shadow: 0 0 0 var(--em9-focus-ring-width) var(--em9-input-focus-ring-color);
    outline: none;
  }

  .select--standard.select--disabled .select__control {
    background-color: var(--em9-input-background-color-disabled);
    border-color: var(--em9-input-border-color-disabled);
    color: var(--em9-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  /* Filled selects */
  .select--filled .select__control {
    border: 1px solid var(--em9-input-filled-background-color);
    background-color: var(--em9-input-filled-background-color);
    color: var(--em9-input-color);
    box-shadow: none;
  }
  .select--filled:not(.select--disabled) .select__control:hover {
    background-color: var(--em9-input-filled-background-color-hover);
    border-color: var(--em9-input-border-color-hover);
  }

  .select--filled.select--focused:not(.select--disabled) .select__control {
    background-color: var(--em9-input-filled-background-color-focus);
    border-color: var(--em9-input-border-color-focus);
    box-shadow: 0 0 0 var(--em9-focus-ring-width) var(--em9-input-focus-ring-color);
  }

  .select--filled.select--disabled .select__control {
    background-color: var(--em9-input-filled-background-color-disabled);
    border-color: var(--em9-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__prefix {
    display: inline-flex;
    align-items: center;
    color: var(--em9-color-gray-700);
  }

  .select__label,
  .select__filter {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    width: 1.25em;
    font-size: inherit;
    color: var(--em9-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--em9-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--em9-input-icon-color-hover);
  }

  .select__suffix {
    display: inline-flex;
    align-items: center;
    color: var(--em9-input-placeholder-color);
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--em9-transition-medium) transform ease;
    font-size: 20px;
    stroke-width: 0.3;
    color: var(--em9-input-icon-color);
    stroke: var(--em9-input-icon-color);
  }

  .select--open .select__icon {
    transform: rotate(-180deg);
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: var(--em9-input-placeholder-color);
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: var(--em9-input-placeholder-color-disabled);
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-inline-start: var(--em9-spacing-2x-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__control {
    border-radius: var(--em9-input-border-radius-small);
    font-size: var(--em9-input-font-size-small);
    min-height: var(--em9-input-height-small);
  }

  .select--small .select__prefix ::slotted(*) {
    margin-inline-start: var(--em9-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--em9-input-spacing-small);
    line-height: var(--em9-line-height-20);
  }

  .select--small .select__clear {
    margin-inline-end: var(--em9-input-spacing-small);
  }

  .select--small .select__suffix ::slotted(*) {
    margin-inline-end: var(--em9-input-spacing-small);
  }

  .select--small .select__icon {
    margin-inline-end: var(--em9-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags em9-tag {
    padding-top: 2px;
  }

  .select--small .select__tags em9-tag:not(:last-of-type) {
    margin-inline-end: var(--em9-spacing-2x-small);
  }

  .select--small.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  .select--small em9-icon[part="icon"] {
    color: var(--em9-color-gray-600);
    width: calc(var(--em9-input-size) * 0.5);
    height: calc(var(--em9-input-size) * 0.5);
    margin-right: var(--em9-spacing-2);
  }

  /* Medium */
  .select--medium .select__control {
    border-radius: var(--em9-input-border-radius-medium);
    font-size: var(--em9-input-font-size-medium);
    min-height: var(--em9-input-height-medium);
  }

  .select--medium .select__prefix ::slotted(*) {
    margin-inline-start: var(--em9-input-spacing-medium);
    font-size: calc(var(--em9-input-spacing-medium) * 1.8333333);
  }

  .select--medium .select__label {
    margin: 0 var(--em9-input-spacing-medium);
    line-height: var(--em9-line-height-24);
  }

  .select--medium .select__clear {
    margin-inline-end: var(--em9-input-spacing-medium);
  }

  .select--medium .select__suffix ::slotted(*) {
    margin-inline-end: var(--em9-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-inline-end: var(--em9-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags em9-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags em9-tag:not(:last-of-type) {
    margin-inline-end: var(--em9-spacing-2x-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  .select--medium em9-icon[part="icon"] {
    color: var(--em9-color-gray-600);
    width: calc(var(--em9-input-size) * 0.5);
    height: calc(var(--em9-input-size) * 0.5);
    margin-right: var(--em9-spacing-2);
  }

  /* Large */
  .select--large .select__control {
    border-radius: var(--em9-input-border-radius-large);
    font-size: var(--em9-input-font-size-large);
    min-height: var(--em9-input-height-large);
  }

  .select--large .select__prefix ::slotted(*) {
    margin-inline-start: var(--em9-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--em9-input-spacing-large);
    line-height: var(--em9-line-height-24);
  }

  .select--large .select__clear {
    margin-inline-end: var(--em9-input-spacing-large);
  }

  .select--large .select__suffix ::slotted(*) {
    margin-inline-end: var(--em9-input-spacing-large);
  }

  .select--large .select__icon {
    margin-inline-end: var(--em9-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags em9-tag {
    padding-top: 4px;
  }

  .select--large .select__tags em9-tag:not(:last-of-type) {
    margin-inline-end: var(--em9-spacing-2x-small);
  }

  .select--large.select--has-tags .select__label {
    margin-inline-start: 0;
  }
    .select--large em9-icon[part="icon"] {
    color: var(--em9-color-gray-600);
    width: calc(var(--em9-input-size) * 0.5);
    height: calc(var(--em9-input-size) * 0.5);
    margin-right: var(--em9-spacing-2);
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__control {
    border-radius: var(--em9-input-height-small);
  }

  .select--pill.select--medium .select__control {
    border-radius: var(--em9-input-height-medium);
  }

  .select--pill.select--large .select__control {
    border-radius: var(--em9-input-height-large);
  }

  /*
   * selection options
   */
  .select__label [part="support-text"] {
    color: var(--em9-input-icon-color);
    margin-left: calc(var(--em9-input-size) * 0.2);
  }

  .select__label em9-icon[part="indicator"] {
    width: calc(var(--em9-input-size) * 0.2);
    height: calc(var(--em9-input-size) * 0.2);
    color: var(--em9-color-success-500);
    margin-right: calc(var(--em9-spacing-2) * 1.125);
  }

  .select__label em9-avatar[part="avatars"] {
    --size: var(--em9-spacing-6);
    margin-right: var(--em9-spacing-2);
  }

  .select-search-filter {
    border: none;
    outline: none;
    font-size: initial;
    position: absolute;
    top: 0;
    bottom: 0;
    background: transparent;
  }

  /*
    * lineStyled modifier
    */
  .select--standard.select--line .select__control{
    border-bottom: solid var(--em9-input-border-width) var(--em9-input-border-color);
    border-radius:0;
    box-shadow: none;
    border-width: 0 0 1px 0;
  }

  .select--standard.select--line.select--focused:not(.select--disabled){
    box-shadow:none;
  }

  .select--standard.select--line .select__prefix ::slotted([slot="prefix"]:first-child) {
    margin-inline-start: 0;
  }

  .select--standard.select--line .select__suffix ::slotted([slot="suffix"]:last-child)  {
    margin-inline-end: 0;
  }
  .select--standard.select--line.select--focused:not(.select--disabled) .select__control {
    box-shadow: none;
  }
  .select--standard.select--line .select__icon {
    margin-inline-end: 0;
  }

  .select--standard.select--line .select__label {
    margin-left: 0;
  }
  .select--standard.select--line .select__prefix ::slotted(*) {
   margin-inline-end: var(--em9-input-spacing-medium);
    margin-inline-start: 0;
  }

  .select--standard.select--line .select__tags {
    margin-inline-start: 0;
  }

  .connector--select.select--standard .select__control,
  .connector--select.select--standard.select--focused:not(.select--disabled) .select__control {
    background-color: transparent !important;
    border: none;
    box-shadow: none;
    border-radius: 0;
    outline: none;
  }

  .connector--select .select__icon {
    stroke: var(--em9-input-icon-color);
    margin-inline-end: 0;
    /*font-size: calc(var(--em9-font-size-x-large) * 0.7);*/
}
  .connector--select .select__label {
    margin-right: 4px;
    margin-left: 0;
  }

  .connector--select .select__menu {
    width: auto !important;
  }

  .connector--select .select__label {
    font-weight: var(--em9-font-weight-normal);
    font-size: var(--em9-font-size-text-sm);
    color: var(--em9-color-gray-900);
  }
  .connector--select.select--filled .select__control{
    background-color: transparent !important;
    box-shadow: none;
    border: none;
  }
  .connector--select.select--filled:hover:not(.select--disabled) .select__control {
  }
  .connector--select.select--focused .select__control {
    outline: none !important;
    background-color: transparent !important;
  }
  .connector--select .select__label .selected-prefix{
    font-size: calc(var(--em9-input-spacing-medium) * 2);
  }
`;
