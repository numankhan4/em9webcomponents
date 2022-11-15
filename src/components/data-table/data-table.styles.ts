import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import scrollbarStyles from '../../styles/scrollbar-styles';
import gridDefaultStyle from './ag-grid-style';

export default css`
  ${componentStyles}
  ${gridDefaultStyle}
  ${scrollbarStyles}
  :host {
    /* =em9 Grid */

    --grid-foreground-color: var(--em9-color-gray-500); /*cell text color*/
    --grid-data-color: var(--grid-foreground-color); /*cell text color*/
    --grid-secondary-foreground-color: var(--grid-foreground-color);
    /* Header style variables*/
    --grid-header-background-color: var(--em9-color-gray-200); /*header background*/
    --grid-header-foreground-color: var(--em9-color-gray-500); /*header Color*/
    --grid-header-font-size: var(--em9-font-size-text-xs); /*header font size*/
    --grid-header-font-weight: var(--em9-font-weight-semibold); /*header font weight*/
    --grid-header-font-family: var(--em9-font-sans); /*header font family*/
    --grid-header-line-height: var(--em9-line-height-1-5); /*header line height*/
    --grid-header-indicator-space: var(--em9-spacing-2);
    /* Header style variables*/

    /*Cell Editor*/
    --grid-borders-input: 1px solid;
    --grid-input-border-color: var(--em9-color-primary-500);
    --grid-input-focus-box-shadow: none;
    --grid-input-focus-border-color: var(--em9-color-primary-500);
    --grid-input-disabled-border-color: var(--em9-color-gray-100);
    --grid-input-disabled-background-color: var(--em9-color-gray-50);
    --grid-borders-input-invalid: 1px solid;
    --grid-input-border-color-invalid: var(--em9-color-danger-500);
    /*Cell Editor*/

    /*odd row*/
    --grid-odd-row-background-color: var(--em9-color-gray-50); //Background color for odd row
    /*odd row*/

    --em9-input-background-color: var(--em9-color-neutral-500);
    --em9-input-background-color-hover: var(--em9-color-neutral-0);
    --em9-input-background-color-focus: var(--em9-color-neutral-0);
    --em9-input-background-color-disabled: var(--em9-color-neutral-50);
    --em9-input-border-color: var(--em9-color-neutral-300);
    --em9-input-border-color-hover: var(--em9-color-neutral-400);
    --em9-input-border-color-focus: var(--em9-color-primary-500);
    --em9-input-border-color-disabled: var(--em9-color-neutral-300);
    --grid-disabled-foreground-color: rgba(0, 0, 0, 0.5);
    --grid-background-color: var(--em9-color-neutral-0); //background color for Even row and inputs

    --grid-subheader-background-color: var(--em9-color-success-500);
    --grid-subheader-toolbar-background-color: transparent;
    --grid-control-panel-background-color: transparent;
    --grid-side-button-selected-background-color: var(--grid-control-panel-background-color);
    --grid-selected-row-background-color: var(--em9-color-blue-50);

    --grid-modal-overlay-background-color: rgba(255, 255, 255, 0.66);
    --grid-row-hover-color: transparent;
    --grid-column-hover-color: transparent;
    --grid-range-selection-border-color: var(--grid-foreground-color);
    --grid-range-selection-border-style: solid;
    --grid-range-selection-background-color: rgba(0, 0, 0, 0.2);
    --grid-range-selection-background-color-2: var(--grid-range-selection-background-color);
    --grid-range-selection-background-color-3: var(--grid-range-selection-background-color);
    --grid-range-selection-background-color-4: var(--grid-range-selection-background-color);
    --grid-range-selection-highlight-color: var(--grid-range-selection-border-color);
    --grid-selected-tab-underline-color: var(--grid-range-selection-border-color);
    --grid-selected-tab-underline-width: 0;
    --grid-selected-tab-underline-transition-speed: 0s;
    --grid-range-selection-chart-category-background-color: rgba(0, 255, 132, 0.1);
    --grid-range-selection-chart-background-color: rgba(0, 88, 255, 0.1);
    --grid-header-cell-hover-background-color: transparent;
    --grid-header-cell-moving-background-color: var(--grid-background-color);
    --grid-value-change-value-highlight-background-color: rgba(22, 160, 133, 0.5);
    --grid-value-change-delta-up-color: #43a047;
    --grid-value-change-delta-down-color: #e53935;
    --grid-chip-background-color: transparent;
    --grid-borders: solid 1px; /*border width for grid wrapper*/
    --grid-border-color: var(--em9-color-gray-200); /*border color for grid wrapper*/
    --grid-borders-critical: var(--grid-borders);
    --grid-borders-secondary: var(--grid-borders);
    --grid-secondary-border-color: var(--grid-border-color);
    --grid-borders-row: var(--grid-borders-secondary); /*border width for row*/
    --grid-row-border-color: var(--grid-secondary-border-color); /*border color for row*/
    --grid-cell-horizontal-border: solid transparent; /*right border for cell*/
    --grid-header-column-separator-display: none; /*header separator display*/
    --grid-header-column-separator-height: 100%; /*header separator height*/
    --grid-header-column-separator-width: 0.06rem; /*header separator width*/
    --grid-header-column-separator-color: var(--grid-secondary-border-color); /*header separator color*/
    --grid-header-column-resize-handle-display: none; /*Column resizer display*/
    --grid-header-column-resize-handle-height: 50%; /*Column resizer height*/
    --grid-header-column-resize-handle-width: 0.06rem; /*Column resizer width*/
    --grid-header-column-resize-handle-color: var(--grid-secondary-border-color); /*Column resizer color*/
    /*--grid-invalid-color: red;*/

    --grid-checkbox-background-color: transparent; /*checkbox background to replace ag styling*/
    --grid-checkbox-border-color: var(--em9-color-gray-300); /*checkbox border color to replace ag  checkbox styling*/
    --grid-checkbox-border-size: 0.06rem; /*checkbox border color to replace ag  checkbox styling*/
    --grid-checkbox-border-radius: var(--grid-border-radius); /*checkbox border radius*/
    --grid-checkbox-checked-color: var(--grid-foreground-color); /*checkbox checked state foreground color*/
    --grid-checkbox-unchecked-color: var(--grid-foreground-color); /*checkbox unchecked state foreground color*/
    --grid-checkbox-indeterminate-color: var(
      --grid-checkbox-unchecked-color
    ); /*checkbox indeterminate state foreground color*/
    --grid-toggle-button-off-border-color: var(--grid-checkbox-unchecked-color);
    --grid-toggle-button-off-background-color: var(--grid-checkbox-unchecked-color);
    --grid-toggle-button-on-border-color: var(--grid-checkbox-checked-color);
    --grid-toggle-button-on-background-color: var(--grid-checkbox-checked-color);
    --grid-toggle-button-switch-background-color: var(--grid-background-color);
    --grid-toggle-button-switch-border-color: var(--grid-toggle-button-off-border-color);
    --grid-toggle-button-border-width: 0.06rem;
    --grid-toggle-button-height: var(--grid-icon-size);
    --grid-toggle-button-width: calc(var(--grid-toggle-button-height) * 2);

    --grid-minichart-selected-chart-color: var(--grid-checkbox-checked-color);
    --grid-minichart-selected-page-color: var(--grid-checkbox-checked-color);
    --grid-grid-size: 4px;
    --grid-icon-size: 12px;
    --grid-widget-container-horizontal-padding: var(--grid-grid-size);
    --grid-widget-container-vertical-padding: var(--grid-grid-size);
    --grid-widget-horizontal-spacing: var(--grid-grid-size);
    --grid-widget-vertical-spacing: var(--grid-grid-size);
    --grid-cell-horizontal-padding: var(--em9-spacing-6);
    --grid-cell-vertical-padding: var(--em9-spacing-4);
    --grid-cell-widget-spacing: var(--grid-cell-horizontal-padding);
    --grid-line-height: 25px;
    --grid-row-height: 44px;
    --grid-header-height: var(--grid-row-height);
    --grid-list-item-height: calc(var(--grid-grid-size));
    --grid-column-select-indent-size: calc(var(--grid-grid-size) + var(--grid-icon-size));
    --grid-row-group-indent-size: calc(var(--grid-cell-widget-spacing) + var(--grid-icon-size));
    --grid-filter-tool-panel-group-indent: 16px;
    --grid-tab-min-width: 220px;
    --grid-menu-min-width: 181px;
    --grid-side-bar-panel-width: 200px;
    --grid-font-family: 'Helveticaneue', sans-serif;
    --grid-font-size: 14px;
    --grid-card-radius: var(--grid-border-radius);
    --grid-card-shadow: none;
    --grid-popup-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    --grid-first-cell-control: var(--em9-spacing-3);

    /*page-summary*/
    --grid-page-summary-font-size: var(--em9-font-size-text-sm);
    --grid-page-summary-line-height: var(--em9-letter-spacing-dense);
    --grid-page-summary-foreground-color: var(--em9-color-gray-700);
    /*page-summary*/
    height: 100%;
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }
  :host .em9-grid {
    display: block;
    height: 400px;
  }
  .em9-grid-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .em9-grid {
    flex-grow: 1;
  }
  .em9-grid-default-theme {
    --grid-line-height: 25px;
  }
  .em9-grid-default-theme .ag-root-wrapper {
    border: var(--grid-borders) var(--grid-border-color);
  }
  .em9-grid-default-theme .ag-header {
    background-color: var(--grid-header-background-color);
    border-bottom: var(--grid-borders-critical) var(--grid-border-color);
  }
  .em9-grid-default-theme .ag-header-row {
    color: var(--grid-header-foreground-color);
    height: var(--grid-header-height);
    font-size: var(--grid-header-font-size);
    font-weight: var(--grid-header-font-weight);
    line-height: var(--grid-header-line-height);
  }
  .em9-grid-default-theme .ag-sort-indicator-container {
    margin-left: var(--grid-header-indicator-space);
  }
  .em9-grid-default-theme .ag-sort-indicator-icon {
    display: flex;
  }

  .em9-grid-default-theme .ag-row-odd {
    background-color: var();
  }
  .em9-grid-default-theme .ag-cell,
  .em9-grid-default-theme .ag-full-width-row .ag-cell-wrapper.ag-row-group {
    line-height: var(--grid-line-height);
  }
  .em9-grid-default-theme .ag-row .ag-cell {
    display: flex;
    align-items: center;
  }
  .em9-grid-default-theme .cell-has-avatar .ag-cell-value {
    position: relative;
    padding-left: calc(var(--em9-spacing-10) + var(--em9-spacing-3));
  }
  .em9-grid-default-theme .cell-has-avatar em9-avatar {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .em9-grid-default-theme .cell-has-avatar .ag-cell-value > span {
    display: flex;
    flex-direction: column;
    font-weight: var(--em9-font-weight-semibold);
    color: var(--em9-color-gray-700);
    text-transform: capitalize;
    line-height: 1.25;
  }
  .em9-grid-default-theme .cell-has-avatar .ag-cell-value > span span {
    order: 3;
    color: var(--em9-color-gray-500);
    font-weight: var(--em9-font-weight-normal);
    text-transform: none;
  }
  .em9-grid-default-theme .cell-has-action-btn em9-button::part(base) {
    padding: 0 var(--em9-spacing-3);
    font-size: var(--em9-font-size-text-md);
  }
  .em9-grid-default-theme .cell-has-action-btn em9-button::part(base):hover {
    background: var(--em9-color-gray-100);
    border-color: var(--em9-color-gray-100);
  }
  .em9-grid-default-theme em9-tag::part(base) {
    font-size: var(--em9-font-size-text-xs);
  }
  .em9-grid-default-theme .cell-wrap-text {
    white-space: normal;
  }
  /*.em9-grid-default-theme .ag-cell,
  .em9-grid-default-theme .ag-full-width-row .ag-cell-wrapper.ag-row-group {
    padding-top: var(--grid-cell-vertical-padding);
    padding-bottom: var(--grid-cell-vertical-padding);
  }*/
  .em9-grid-default-theme .ag-checkbox-input-wrapper input,
  .em9-grid-default-theme .ag-checkbox-input-wrapper input {
    cursor: pointer;
  }
  .em9-grid-default-theme .ag-checkbox-input-wrapper {
    width: var(--em9-spacing-5);
    height: var(--em9-spacing-5);
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='3.5' fill='white'/%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='3.5' stroke='%23D5D5E2'/%3E%3C/svg%3E");
    cursor: pointer;
  }
  .em9-grid-default-theme .ag-checkbox-input-wrapper:hover {
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='3.5' fill='%23F5FCFE'/%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='3.5' stroke='%2346B0E6'/%3E%3C/svg%3E");
  }

  .em9-grid-default-theme .ag-checkbox-input-wrapper.ag-indeterminate {
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='3.5' fill='%23F5FCFE'/%3E%3Cpath d='M5.91675 9C5.36446 9 4.91675 9.44772 4.91675 10C4.91675 10.5523 5.36446 11 5.91675 11V9ZM14.0834 11C14.6357 11 15.0834 10.5523 15.0834 10C15.0834 9.44772 14.6357 9 14.0834 9V11ZM5.91675 11H14.0834V9H5.91675V11Z' fill='%2346B0E6'/%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='3.5' stroke='%2346B0E6'/%3E%3C/svg%3E");
  }
  .em9-grid-default-theme .ag-checkbox-input-wrapper.ag-checked {
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='3.5' fill='%23ECF8FE'/%3E%3Cpath d='M15.3737 7.20711C15.7642 6.81658 15.7642 6.18342 15.3737 5.79289C14.9832 5.40237 14.35 5.40237 13.9595 5.79289L15.3737 7.20711ZM8.24992 12.9167L7.54281 13.6238C7.93334 14.0143 8.5665 14.0143 8.95703 13.6238L8.24992 12.9167ZM6.04036 9.29289C5.64983 8.90237 5.01667 8.90237 4.62615 9.29289C4.23562 9.68342 4.23562 10.3166 4.62615 10.7071L6.04036 9.29289ZM13.9595 5.79289L7.54281 12.2096L8.95703 13.6238L15.3737 7.20711L13.9595 5.79289ZM8.95703 12.2096L6.04036 9.29289L4.62615 10.7071L7.54281 13.6238L8.95703 12.2096Z' fill='%2346B0E6'/%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='3.5' stroke='%2346B0E6'/%3E%3C/svg%3E");
  }
  .em9-grid-default-theme .ag-header-select-all,
  .em9-grid-default-theme .ag-row-drag,
  .em9-grid-default-theme .ag-selection-checkbox,
  .em9-grid-default-theme .ag-group-expanded,
  .em9-grid-default-theme .ag-group-contracted {
    margin-right: var(--grid-first-cell-control);
  }

  .pagination-wrapper {
    border: 1px solid var(--em9-color-gray-200);
    border-top: 0;
    border-radius: 0 0 var(--em9-border-radius-medium) var(--em9-border-radius-medium);
    background: var(--em9-color-neutral-0);
    padding-top: var(--grid-cell-vertical-padding);
    padding-bottom: var(--grid-cell-vertical-padding);
    padding-left: calc(var(--grid-cell-horizontal-padding) - 1px);
    padding-right: calc(var(--grid-cell-horizontal-padding) - 1px);
  }
  .pagination-ul {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .pagination-ul li:first-child {
    flex-grow: 1;
  }
  .pagination-ul li:last-child {
    flex-grow: 1;
    text-align: right;
  }
  .pagination-ul .selected-page em9-button::part(base) {
    background-color: var(--em9-color-gray-50);
  }

  .nodata_table__icon {
    margin: auto;
    width: var(--em9-spacing-14);
    height: var(--em9-spacing-14);
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--em9-font-size-text-xl);
    border: 8px solid var(--em9-color-primary-50);
    background: var(--em9-color-primary-100);
    border: 8px solid var(--em9-color-primary-50);
    color: var(--em9-color-primary-600);
  }
  .warning__icon {
    background: var(--em9-color-warning-100);
    border-color: var(--em9-color-warning-50);
    color: var(--em9-color-warning-600);
  }
  .nodata_table_heading {
    font-family: var(--em9-font-sans);
    font-weight: var(--em9-font-weight-semibold);
    font-size: var(--em9-font-size-text-md);
    line-height: var(--em9-line-height-1-2);
    margin: var(--em9-spacing-3) auto var(--em9-spacing-2);
    color: var(--em9-color-gray-900);
    max-width: 352px;
  }
  .nodata_table_description {
    font-family: var(--em9-font-sans);
    font-weight: var(--em9-font-weight-normal);
    font-size: var(--em9-font-size-text-sm);
    line-height: 20px;
    color: var(--em9-color-gray-500);
    max-width: 352px;
    margin: 0 auto 24px;
  }
  .nodata {
    pointer-events: all;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .displaynone {
    display: none;
  }
  .nodata em9-button + em9-button {
    margin-left: 12px;
  }
  .em9-grid-filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--em9-color-gray-200);
    border-bottom: none;
    padding: 12px 16px;
  }
  .em9-grid-header {
    container-type: inline-size;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--em9-color-gray-200);
    border-bottom: none;
    padding: 12px 16px;
    border-radius: var(--em9-border-radius-medium) var(--em9-border-radius-medium) 0 0;
  }
  .em9-grid-heading-block {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .em9-grid-heading {
    color: var(--em9-color-gray-900);
    font-size: var(--em9-font-size-text-lg);
    font-family: var(--em9-font-sans);
    font-weight: var(--em9-font-weight-semibold);
    margin: 0;
  }
  .em9-grid-description {
    color: var(--em9-color-gray-500);
    font-size: var(--em9-font-size-text-sm);
    font-family: var(--em9-font-sans);
    font-weight: var(--em9-font-weight-normal);
    margin: 0;
  }
  .em9-grid-header-md {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .em9-grid-filter-md {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .em9-grid-filter-md .filter-right {
    align-self: stretch;
  }
  .page-summary {
    font-size: var(--grid-page-summary-font-size);
    line-height: var(--grid-page-summary-line-height);
    color: var(--grid-page-summary-foreground-color);
  }
`;
