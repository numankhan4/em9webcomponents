import { css } from 'lit';

export default css`
  .ag-root-wrapper,
  .ag-sticky-top,
  .ag-dnd-ghost {
    background-color: var(--grid-background-color);
  }
  [class*='ag-theme-'] {
    -webkit-font-smoothing: antialiased;
    font-family: var(--grid-font-family);
    font-size: var(--grid-font-size);
    line-height: normal;
    color: var(--grid-foreground-color);
  }
  ag-grid,
  ag-grid-angular,
  ag-grid-ng2,
  ag-grid-polymer,
  ag-grid-aurelia {
    display: block;
  }
  .ag-hidden {
    display: none !important;
  }
  .ag-invisible {
    visibility: hidden !important;
  }
  .ag-drag-handle {
    cursor: grab;
  }
  .ag-column-drop-wrapper {
    display: flex;
  }
  .ag-column-drop-horizontal-half-width {
    display: inline-block;
    width: 50% !important;
  }
  .ag-unselectable {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .ag-selectable {
    -moz-user-select: text;
    -webkit-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }
  .ag-tab {
    position: relative;
  }
  .ag-tab-guard {
    position: absolute;
    width: 0;
    height: 0;
    display: block;
  }
  .ag-select-agg-func-popup {
    position: absolute;
  }
  .ag-input-wrapper,
  .ag-picker-field-wrapper {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    line-height: normal;
    position: relative;
  }
  .ag-shake-left-to-right {
    animation-direction: alternate;
    animation-duration: 0.2s;
    animation-iteration-count: infinite;
    animation-name: ag-shake-left-to-right;
  }
  @keyframes ag-shake-left-to-right {
    from {
      padding-left: 6px;
      padding-right: 2px;
    }
    to {
      padding-left: 2px;
      padding-right: 6px;
    }
  }
  .ag-root-wrapper {
    cursor: default;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .ag-root-wrapper.ag-layout-normal {
    height: 100%;
  }
  .ag-root-wrapper-body {
    display: flex;
    flex-direction: row;
  }
  .ag-root-wrapper-body.ag-layout-normal {
    flex: 1 1 auto;
    height: 0;
    min-height: 0;
  }
  .ag-root {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .ag-root.ag-layout-normal,
  .ag-root.ag-layout-auto-height {
    overflow: hidden;
    flex: 1 1 auto;
    width: 0;
  }
  .ag-root.ag-layout-normal {
    height: 100%;
  }
  .ag-header-viewport,
  .ag-floating-top-viewport,
  .ag-body-viewport,
  .ag-center-cols-viewport,
  .ag-floating-bottom-viewport,
  .ag-body-horizontal-scroll-viewport,
  .ag-virtual-list-viewport,
  .ag-sticky-top-viewport {
    position: relative;
    height: 100%;
    min-width: 0;
    overflow: hidden;
    flex: 1 1 auto;
  }
  .ag-body-viewport {
    display: flex;
  }
  .ag-body-viewport.ag-layout-normal {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .ag-body-horizontal-scroll-viewport {
    overflow-x: scroll;
  }
  .ag-virtual-list-viewport {
    overflow: auto;
    width: 100%;
  }
  .ag-header-container,
  .ag-floating-top-container,
  .ag-body-container,
  .ag-pinned-right-cols-container,
  .ag-center-cols-container,
  .ag-pinned-left-cols-container,
  .ag-floating-bottom-container,
  .ag-body-horizontal-scroll-container,
  .ag-full-width-container,
  .ag-floating-bottom-full-width-container,
  .ag-virtual-list-container,
  .ag-sticky-top-container {
    position: relative;
  }
  .ag-header-container,
  .ag-floating-top-container,
  .ag-floating-bottom-container,
  .ag-sticky-top-container {
    height: 100%;
    white-space: nowrap;
  }
  .ag-center-cols-container {
    display: block;
  }
  .ag-pinned-right-cols-container {
    display: block;
  }
  .ag-body-horizontal-scroll-container {
    height: 100%;
  }
  .ag-full-width-container,
  .ag-floating-top-full-width-container,
  .ag-floating-bottom-full-width-container,
  .ag-sticky-top-full-width-container {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .ag-full-width-container {
    width: 100%;
  }
  .ag-floating-bottom-full-width-container,
  .ag-floating-top-full-width-container {
    display: inline-block;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
  .ag-virtual-list-container {
    overflow: hidden;
  }
  .ag-center-cols-clipper {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    min-height: 100%;
    transform: translate3d(0, 0, 0);
  }
  .ag-body-horizontal-scroll {
    min-height: 0;
    min-width: 0;
    width: 100%;
    display: flex;
    position: relative;
  }
  .ag-body-horizontal-scroll.ag-scrollbar-invisible {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .ag-body-horizontal-scroll.ag-scrollbar-invisible.ag-apple-scrollbar {
    display: none;
  }
  .ag-body-horizontal-scroll.ag-scrollbar-invisible.ag-apple-scrollbar.ag-scrollbar-scrolling,
  .ag-body-horizontal-scroll.ag-scrollbar-invisible.ag-apple-scrollbar.ag-scrollbar-active {
    display: inherit;
  }
  .ag-force-vertical-scroll {
    overflow-y: scroll !important;
  }
  .ag-horizontal-left-spacer,
  .ag-horizontal-right-spacer {
    height: 100%;
    min-width: 0;
    overflow-x: scroll;
  }
  .ag-horizontal-left-spacer.ag-scroller-corner,
  .ag-horizontal-right-spacer.ag-scroller-corner {
    overflow-x: hidden;
  }
  .ag-header,
  .ag-pinned-left-header,
  .ag-pinned-right-header {
    display: inline-block;
    overflow: hidden;
    position: relative;
  }
  .ag-header-cell-sortable {
    cursor: pointer;
  }
  .ag-header {
    display: flex;
    width: 100%;
    white-space: nowrap;
  }
  .ag-pinned-left-header {
    height: 100%;
  }
  .ag-pinned-right-header {
    height: 100%;
  }
  .ag-header-row {
    position: absolute;
    overflow: hidden;
  }
  .ag-header-cell {
    display: inline-flex;
    align-items: center;
    position: absolute;
    height: 100%;
    overflow: hidden;
  }
  .ag-header-cell.ag-header-active .ag-header-cell-menu-button {
    opacity: 1;
  }
  .ag-header-cell-menu-button:not(.ag-header-menu-always-show) {
    transition: opacity 0.2s;
    opacity: 0;
  }
  .ag-header-group-cell-label,
  .ag-header-cell-label {
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
    align-items: center;
    text-overflow: ellipsis;
    align-self: stretch;
  }
  .ag-header-cell-text {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ag-header-cell-comp-wrapper {
    width: 100%;
    overflow: hidden;
  }
  .ag-header-cell-wrap-text .ag-header-cell-comp-wrapper {
    white-space: normal;
  }
  .ag-right-aligned-header .ag-header-cell-label {
    flex-direction: row-reverse;
  }
  .ag-header-group-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ag-header-cell-resize {
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 8px;
    top: 0;
    cursor: ew-resize;
  }
  .ag-ltr .ag-header-cell-resize {
    right: -4px;
  }
  .ag-rtl .ag-header-cell-resize {
    left: -4px;
  }
  .ag-pinned-left-header .ag-header-cell-resize {
    right: -4px;
  }
  .ag-pinned-right-header .ag-header-cell-resize {
    left: -4px;
  }
  .ag-header-select-all {
    display: flex;
  }
  .ag-column-moving .ag-cell {
    transition: left 0.2s;
  }
  .ag-column-moving .ag-header-cell {
    transition: left 0.2s;
  }
  .ag-column-moving .ag-header-group-cell {
    transition: left 0.2s, width 0.2s;
  }
  .ag-column-panel {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex: 1 1 auto;
  }
  .ag-column-select {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex: 3 1 0;
  }
  .ag-column-select-header {
    position: relative;
    display: flex;
    flex: none;
  }
  .ag-column-select-header-icon {
    position: relative;
  }
  .ag-column-select-header-filter-wrapper {
    flex: 1 1 auto;
  }
  .ag-column-select-header-filter {
    width: 100%;
  }
  .ag-column-select-list {
    flex: 1 1 0;
    overflow: hidden;
  }
  .ag-column-drop {
    position: relative;
    display: inline-flex;
    align-items: center;
    overflow: auto;
    width: 100%;
  }
  .ag-column-drop-list {
    display: flex;
    align-items: center;
  }
  .ag-column-drop-cell {
    position: relative;
    display: flex;
    align-items: center;
  }
  .ag-column-drop-cell-text {
    overflow: hidden;
    flex: 1 1 auto;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ag-column-drop-vertical {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: stretch;
    flex: 1 1 0;
  }
  .ag-column-drop-vertical-title-bar {
    display: flex;
    align-items: center;
    flex: none;
  }
  .ag-column-drop-vertical-list {
    position: relative;
    align-items: stretch;
    flex-grow: 1;
    flex-direction: column;
    overflow-x: auto;
  }
  .ag-column-drop-vertical-list > * {
    flex: none;
  }
  .ag-column-drop-empty .ag-column-drop-vertical-list {
    overflow: hidden;
  }
  .ag-column-drop-vertical-empty-message {
    display: block;
  }
  .ag-column-drop.ag-column-drop-horizontal {
    white-space: nowrap;
    overflow: hidden;
  }
  .ag-column-drop-cell-button {
    cursor: pointer;
  }
  .ag-filter-toolpanel {
    flex: 1 1 0;
    min-width: 0;
  }
  .ag-filter-toolpanel-header {
    position: relative;
  }
  .ag-filter-toolpanel-header,
  .ag-filter-toolpanel-search {
    display: flex;
    align-items: center;
  }
  .ag-filter-toolpanel-header > *,
  .ag-filter-toolpanel-search > * {
    display: flex;
    align-items: center;
  }
  .ag-filter-apply-panel {
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
  }
  .ag-row-animation .ag-row {
    transition: transform 0.4s, top 0.4s, background-color 0.1s, opacity 0.2s;
  }
  .ag-row-animation .ag-row.ag-after-created {
    transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s;
  }
  .ag-row-no-animation .ag-row {
    transition: background-color 0.1s;
  }
  .ag-row {
    white-space: nowrap;
    width: 100%;
  }
  .ag-row-loading {
    display: flex;
    align-items: center;
  }
  .ag-row-position-absolute {
    position: absolute;
  }
  .ag-row-position-relative {
    position: relative;
  }
  .ag-full-width-row {
    overflow: hidden;
    pointer-events: all;
  }
  .ag-row-inline-editing {
    z-index: 1;
  }
  .ag-row-dragging {
    z-index: 2;
  }
  .ag-stub-cell {
    display: flex;
    align-items: center;
  }
  .ag-cell {
    display: inline-block;
    position: absolute;
    white-space: nowrap;
    height: 100%;
    font-size: 14px;
  }
  .ag-cell-value {
    flex: 1 1 auto;
  }
  .ag-cell-value,
  .ag-group-value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ag-cell-wrap-text {
    white-space: normal;
    word-break: break-all;
  }
  .ag-cell-wrapper {
    display: flex;
    align-items: center;
  }
  .ag-cell-wrapper.ag-row-group {
    align-items: flex-start;
  }
  .ag-sparkline-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
  .ag-full-width-row .ag-cell-wrapper.ag-row-group {
    height: 100%;
    align-items: center;
  }
  .ag-cell-inline-editing {
    z-index: 1;
  }
  .ag-cell-inline-editing .ag-cell-wrapper,
  .ag-cell-inline-editing .ag-cell-edit-wrapper,
  .ag-cell-inline-editing .ag-cell-editor,
  .ag-cell-inline-editing .ag-cell-editor .ag-wrapper,
  .ag-cell-inline-editing .ag-cell-editor input {
    height: 100%;
    width: 100%;
    line-height: normal;
  }
  .ag-cell .ag-icon {
    display: inline-block;
    vertical-align: middle;
  }
  .ag-set-filter-item {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .ag-set-filter-item-value {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ag-set-filter-item-checkbox {
    display: flex;
  }
  .ag-filter-body-wrapper {
    display: flex;
    flex-direction: column;
  }
  .ag-filter-filter {
    flex: 1 1 0;
  }
  .ag-filter-condition {
    display: flex;
    justify-content: center;
  }
  .ag-floating-filter-body {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    height: 100%;
  }
  .ag-floating-filter-full-body {
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
    align-items: center;
    overflow: hidden;
  }
  .ag-floating-filter-full-body > div {
    flex: 1 1 auto;
  }
  .ag-floating-filter-input {
    align-items: center;
    display: flex;
    width: 100%;
  }
  .ag-floating-filter-input > * {
    flex: 1 1 auto;
  }
  .ag-floating-filter-button {
    display: flex;
    flex: none;
  }
  .ag-dnd-ghost {
    position: absolute;
    display: inline-flex;
    align-items: center;
    cursor: move;
    white-space: nowrap;
    z-index: 9999;
  }
  .ag-overlay {
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    min-width: 250x;
  }
  .ag-overlay-panel {
    display: flex;
    height: 100%;
    width: 100%;
  }
  .ag-overlay-wrapper {
    display: flex;
    flex: none;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .ag-overlay-loading-wrapper {
    pointer-events: all;
  }
  .ag-popup-child {
    z-index: 5;
    top: 0;
  }
  .ag-popup-editor {
    position: absolute;
    user-select: none;
    z-index: 1;
  }
  .ag-large-text-input {
    display: block;
  }
  .ag-virtual-list-item {
    position: absolute;
    width: 100%;
  }
  .ag-floating-top {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    position: relative;
    display: flex;
  }
  .ag-pinned-left-floating-top {
    display: inline-block;
    overflow: hidden;
    position: relative;
    min-width: 0;
  }
  .ag-pinned-right-floating-top {
    display: inline-block;
    overflow: hidden;
    position: relative;
    min-width: 0;
  }
  .ag-floating-bottom {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    position: relative;
    display: flex;
  }
  .ag-pinned-left-floating-bottom {
    display: inline-block;
    overflow: hidden;
    position: relative;
    min-width: 0;
  }
  .ag-pinned-right-floating-bottom {
    display: inline-block;
    overflow: hidden;
    position: relative;
    min-width: 0;
  }
  .ag-sticky-top {
    position: absolute;
    display: flex;
    width: 100%;
  }
  .ag-pinned-left-sticky-top,
  .ag-pinned-right-sticky-top {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  .ag-sticky-top-full-width-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .ag-dialog,
  .ag-panel {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }
  .ag-panel-title-bar {
    display: flex;
    flex: none;
    align-items: center;
    cursor: default;
  }
  .ag-panel-title-bar-title {
    flex: 1 1 auto;
  }
  .ag-panel-title-bar-buttons {
    display: flex;
  }
  .ag-panel-title-bar-button {
    cursor: pointer;
  }
  .ag-panel-content-wrapper {
    display: flex;
    flex: 1 1 auto;
    position: relative;
    overflow: hidden;
  }
  .ag-dialog {
    position: absolute;
  }
  .ag-resizer {
    position: absolute;
    pointer-events: none;
    user-select: none;
    z-index: 1;
  }
  .ag-resizer.ag-resizer-topLeft {
    top: 0;
    left: 0;
    height: 5px;
    width: 5px;
    cursor: nwse-resize;
  }
  .ag-resizer.ag-resizer-top {
    top: 0;
    left: 5px;
    right: 5px;
    height: 5px;
    cursor: ns-resize;
  }
  .ag-resizer.ag-resizer-topRight {
    top: 0;
    right: 0;
    height: 5px;
    width: 5px;
    cursor: nesw-resize;
  }
  .ag-resizer.ag-resizer-right {
    top: 5px;
    right: 0;
    bottom: 5px;
    width: 5px;
    cursor: ew-resize;
  }
  .ag-resizer.ag-resizer-bottomRight {
    bottom: 0;
    right: 0;
    height: 5px;
    width: 5px;
    cursor: nwse-resize;
  }
  .ag-resizer.ag-resizer-bottom {
    bottom: 0;
    left: 5px;
    right: 5px;
    height: 5px;
    cursor: ns-resize;
  }
  .ag-resizer.ag-resizer-bottomLeft {
    bottom: 0;
    left: 0;
    height: 5px;
    width: 5px;
    cursor: nesw-resize;
  }
  .ag-resizer.ag-resizer-left {
    left: 0;
    top: 5px;
    bottom: 5px;
    width: 5px;
    cursor: ew-resize;
  }
  .ag-tooltip {
    position: absolute;
    pointer-events: none;
    z-index: 99999;
  }
  .ag-tooltip-custom {
    position: absolute;
    pointer-events: none;
    z-index: 99999;
  }
  .ag-value-slide-out {
    margin-right: 5px;
    opacity: 1;
    transition: opacity 3s, margin-right 3s;
    transition-timing-function: linear;
  }
  .ag-value-slide-out-end {
    margin-right: 10px;
    opacity: 0;
  }
  .ag-opacity-zero {
    opacity: 0 !important;
  }
  .ag-menu {
    max-height: 100%;
    overflow-y: auto;
    position: absolute;
    user-select: none;
  }
  .ag-menu-column-select-wrapper {
    height: 265px;
    overflow: auto;
  }
  .ag-menu-column-select-wrapper .ag-column-select {
    height: 100%;
  }
  .ag-menu-list {
    display: table;
    width: 100%;
  }
  .ag-menu-option,
  .ag-menu-separator {
    display: table-row;
  }
  .ag-menu-option-part,
  .ag-menu-separator-part {
    display: table-cell;
    vertical-align: middle;
  }
  .ag-menu-option-text {
    white-space: nowrap;
  }
  .ag-compact-menu-option {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
  }
  .ag-compact-menu-option-text {
    white-space: nowrap;
    flex: 1 1 auto;
  }
  .ag-rich-select {
    cursor: default;
    outline: none;
  }
  .ag-rich-select-value {
    display: flex;
    align-items: center;
  }
  .ag-rich-select-value-icon {
    flex: 1 1 auto;
    order: 1;
  }
  .ag-ltr .ag-rich-select-value-icon {
    text-align: right;
  }
  .ag-rtl .ag-rich-select-value-icon {
    text-align: left;
  }
  .ag-rich-select-list {
    position: relative;
  }
  .ag-rich-select-virtual-list-item {
    display: flex;
  }
  .ag-rich-select-row {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    white-space: nowrap;
  }
  .ag-paging-panel {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }
  .ag-paging-page-summary-panel {
    display: flex;
    align-items: center;
  }
  .ag-paging-button {
    position: relative;
  }
  .ag-disabled .ag-paging-page-summary-panel {
    pointer-events: none;
  }
  .ag-tool-panel-wrapper {
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
    cursor: default;
    user-select: none;
  }
  .ag-column-select-column,
  .ag-column-select-column-group,
  .ag-select-agg-func-item {
    position: relative;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 100%;
  }
  .ag-column-select-column > *,
  .ag-column-select-column-group > *,
  .ag-select-agg-func-item > * {
    flex: none;
  }
  .ag-column-select-checkbox {
    display: flex;
  }
  .ag-tool-panel-horizontal-resize {
    cursor: ew-resize;
    height: 100%;
    position: absolute;
    top: 0;
    width: 5px;
    z-index: 1;
  }
  .ag-ltr .ag-side-bar-left .ag-tool-panel-horizontal-resize {
    right: -3px;
  }
  .ag-rtl .ag-side-bar-left .ag-tool-panel-horizontal-resize {
    left: -3px;
  }
  .ag-ltr .ag-side-bar-right .ag-tool-panel-horizontal-resize {
    left: -3px;
  }
  .ag-rtl .ag-side-bar-right .ag-tool-panel-horizontal-resize {
    right: -3px;
  }
  .ag-details-row {
    width: 100%;
  }
  .ag-details-row-fixed-height {
    height: 100%;
  }
  .ag-details-grid {
    width: 100%;
  }
  .ag-details-grid-fixed-height {
    height: 100%;
  }
  .ag-header-group-cell {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
  }
  .ag-cell-label-container {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    overflow: hidden;
    padding: 5px 0;
  }
  .ag-right-aligned-header .ag-cell-label-container {
    flex-direction: row;
  }
  .ag-side-bar {
    display: flex;
    flex-direction: row-reverse;
  }
  .ag-side-bar-left {
    order: -1;
    flex-direction: row;
  }
  .ag-side-button-button {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    white-space: nowrap;
    outline: none;
    cursor: pointer;
  }
  .ag-side-button-label {
    writing-mode: vertical-lr;
  }
  .ag-status-bar {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }
  .ag-status-panel {
    display: inline-flex;
  }
  .ag-status-name-value {
    white-space: nowrap;
  }
  .ag-status-bar-left {
    display: inline-flex;
  }
  .ag-status-bar-center {
    display: inline-flex;
  }
  .ag-status-bar-right {
    display: inline-flex;
  }
  .ag-icon {
    display: block;
    speak: none;
  }
  .ag-group {
    position: relative;
    width: 100%;
  }
  .ag-group-title-bar {
    display: flex;
    align-items: center;
  }
  .ag-group-title {
    display: block;
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .ag-group-title-bar .ag-group-title {
    cursor: default;
  }
  .ag-group-toolbar {
    display: flex;
    align-items: center;
  }
  .ag-group-container {
    display: flex;
  }
  .ag-disabled .ag-group-container {
    pointer-events: none;
  }
  .ag-group-container-horizontal {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .ag-group-container-vertical {
    flex-direction: column;
  }
  .ag-column-group-icons {
    display: block;
  }
  .ag-column-group-icons > * {
    cursor: pointer;
  }
  .ag-group-item-alignment-stretch .ag-group-item {
    align-items: stretch;
  }
  .ag-group-item-alignment-start .ag-group-item {
    align-items: flex-start;
  }
  .ag-group-item-alignment-end .ag-group-item {
    align-items: flex-end;
  }
  .ag-toggle-button-icon {
    transition: right 0.3s;
    position: absolute;
    top: -1px;
  }
  .ag-input-field,
  .ag-select {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .ag-input-field-input {
    flex: 1 1 auto;
  }
  .ag-floating-filter-input .ag-input-field-input[type='date'] {
    width: 1px;
  }
  .ag-range-field {
    display: flex;
    align-items: center;
  }
  .ag-angle-select {
    display: flex;
    align-items: center;
  }
  .ag-angle-select-wrapper {
    display: flex;
  }
  .ag-angle-select-parent-circle {
    display: block;
    position: relative;
  }
  .ag-angle-select-child-circle {
    position: absolute;
  }
  .ag-slider-wrapper {
    display: flex;
  }
  .ag-slider-wrapper .ag-input-field {
    flex: 1 1 auto;
  }
  .ag-picker-field-display {
    flex: 1 1 auto;
  }
  .ag-picker-field {
    display: flex;
    align-items: center;
  }
  .ag-picker-field-icon {
    display: flex;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  .ag-picker-field-wrapper {
    overflow: hidden;
  }
  .ag-label-align-right .ag-label {
    order: 1;
  }
  .ag-label-align-right > * {
    flex: none;
  }
  .ag-label-align-top {
    flex-direction: column;
    align-items: flex-start;
  }
  .ag-label-align-top > * {
    align-self: stretch;
  }
  .ag-color-panel {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .ag-spectrum-color {
    flex: 1 1 auto;
    position: relative;
    overflow: hidden;
    cursor: default;
  }
  .ag-spectrum-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .ag-spectrum-val {
    cursor: pointer;
  }
  .ag-spectrum-dragger {
    position: absolute;
    pointer-events: none;
    cursor: pointer;
  }
  .ag-spectrum-hue {
    cursor: default;
    background: linear-gradient(to left, red 3%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red 100%);
  }
  .ag-spectrum-alpha {
    cursor: default;
  }
  .ag-spectrum-hue-background {
    width: 100%;
    height: 100%;
  }
  .ag-spectrum-alpha-background {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #000);
    width: 100%;
    height: 100%;
  }
  .ag-spectrum-tool {
    cursor: pointer;
  }
  .ag-spectrum-slider {
    position: absolute;
    pointer-events: none;
  }
  .ag-recent-colors {
    display: flex;
  }
  .ag-recent-color {
    cursor: pointer;
  }
  .ag-body .ag-body-viewport {
    -webkit-overflow-scrolling: touch;
  }
  .ag-layout-print.ag-body-viewport {
    flex: none;
  }
  .ag-layout-print.ag-root-wrapper {
    display: inline-flex;
  }
  .ag-layout-print .ag-center-cols-clipper {
    min-width: 100%;
  }
  .ag-layout-print .ag-body-horizontal-scroll {
    display: none;
  }
  .ag-layout-print.ag-force-vertical-scroll {
    overflow-y: visible !important;
  }
  @media print {
    .ag-root-wrapper.ag-layout-print,
    .ag-root-wrapper.ag-layout-print .ag-root-wrapper-body,
    .ag-root-wrapper.ag-layout-print .ag-root,
    .ag-root-wrapper.ag-layout-print .ag-body-viewport,
    .ag-root-wrapper.ag-layout-print .ag-center-cols-container,
    .ag-root-wrapper.ag-layout-print .ag-center-cols-viewport,
    .ag-root-wrapper.ag-layout-print .ag-center-cols-clipper,
    .ag-root-wrapper.ag-layout-print .ag-body-horizontal-scroll-viewport,
    .ag-root-wrapper.ag-layout-print .ag-virtual-list-viewport {
      height: auto !important;
      overflow: hidden !important;
      display: block !important;
    }
    .ag-root-wrapper.ag-layout-print .ag-row {
      page-break-inside: avoid;
    }
  }
  [class^='ag-'],
  [class^='ag-']:focus,
  [class^='ag-']:after,
  [class^='ag-']:before {
    box-sizing: border-box;
    outline: none;
  }
  [class^='ag-']::-ms-clear {
    display: none;
  }
  .ag-checkbox .ag-input-wrapper,
  .ag-radio-button .ag-input-wrapper {
    overflow: visible;
  }
  .ag-range-field .ag-input-wrapper {
    height: 100%;
  }
  .ag-toggle-button {
    flex: none;
    width: unset;
    min-width: unset;
  }
  .ag-ltr .ag-label-align-right .ag-label {
    margin-left: var(--grid-grid-size);
  }
  .ag-rtl .ag-label-align-right .ag-label {
    margin-right: var(--grid-grid-size);
  }
  input[class^='ag-'] {
    margin: 0;
    background-color: var(--grid-background-color);
  }
  textarea[class^='ag-'],
  select[class^='ag-'] {
    background-color: var(--grid-background-color);
  }
  input[class^='ag-']:not([type]),
  input[class^='ag-'][type='text'],
  input[class^='ag-'][type='number'],
  input[class^='ag-'][type='tel'],
  input[class^='ag-'][type='date'],
  input[class^='ag-'][type='datetime-local'],
  textarea[class^='ag-'] {
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    border: var(--grid-borders-input) var(--grid-input-border-color);
  }
  input[class^='ag-']:not([type]):disabled,
  input[class^='ag-'][type='text']:disabled,
  input[class^='ag-'][type='number']:disabled,
  input[class^='ag-'][type='tel']:disabled,
  input[class^='ag-'][type='date']:disabled,
  input[class^='ag-'][type='datetime-local']:disabled,
  textarea[class^='ag-']:disabled {
    color: var(--grid-disabled-foreground-color);
    background-color: var(--grid-input-disabled-background-color);
    border-color: var(--grid-input-disabled-border-color);
  }
  input[class^='ag-']:not([type]):focus,
  input[class^='ag-'][type='text']:focus,
  input[class^='ag-'][type='number']:focus,
  input[class^='ag-'][type='tel']:focus,
  input[class^='ag-'][type='date']:focus,
  input[class^='ag-'][type='datetime-local']:focus,
  textarea[class^='ag-']:focus {
    outline: none;
    box-shadow: var(--grid-input-focus-box-shadow);
    border-color: var(--grid-input-focus-border-color);
  }
  input[class^='ag-']:not([type]):invalid,
  input[class^='ag-'][type='text']:invalid,
  input[class^='ag-'][type='number']:invalid,
  input[class^='ag-'][type='tel']:invalid,
  input[class^='ag-'][type='date']:invalid,
  input[class^='ag-'][type='datetime-local']:invalid,
  textarea[class^='ag-']:invalid {
    border: var(--grid-borders-input-invalid) var(--grid-input-border-color-invalid);
  }
  input[class^='ag-'][type='number'] {
    -moz-appearance: textfield;
  }
  input[class^='ag-'][type='number']::-webkit-outer-spin-button,
  input[class^='ag-'][type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[class^='ag-'][type='range'] {
    padding: 0;
  }
  input[class^='ag-'][type='button']:focus,
  button[class^='ag-']:focus {
    box-shadow: var(--grid-input-focus-box-shadow);
  }
  .ag-drag-handle {
    color: var(--grid-secondary-foreground-color);
  }
  .ag-list-item,
  .ag-virtual-list-item {
    height: var(--grid-list-item-height);
  }
  .ag-keyboard-focus .ag-virtual-list-item:focus {
    outline: none;
  }
  .ag-keyboard-focus .ag-virtual-list-item:focus::after {
    content: '';
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid;
    border-color: var(--grid-input-focus-border-color);
  }
  .ag-select-list {
    background-color: var(--grid-background-color);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .ag-list-item {
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ag-list-item.ag-active-item {
    background-color: var(--grid-row-hover-color);
  }
  .ag-select-list-item {
    padding-left: 4px;
    padding-right: 4px;
    cursor: default;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .ag-select-list-item span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .ag-select .ag-picker-field-wrapper {
    background-color: var(--grid-background-color);
    min-height: var(--grid-list-item-height);
    cursor: default;
  }
  .ag-select.ag-disabled .ag-picker-field-wrapper:focus {
    box-shadow: none;
  }
  .ag-select:not(.ag-cell-editor) {
    height: var(--grid-list-item-height);
  }
  .ag-select .ag-picker-field-display {
    margin: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ag-select .ag-picker-field-icon {
    display: flex;
    align-items: center;
  }
  .ag-select.ag-disabled {
    opacity: 0.5;
  }
  .ag-rich-select {
    background-color: var(--grid-control-panel-background-color);
  }
  .ag-rich-select-list {
    width: 100%;
    min-width: 200px;
    height: calc(var(--grid-row-height) * 6.5);
  }
  .ag-rich-select-value {
    padding: 0 var(--grid-grid-size) 0 var(--grid-cell-horizontal-padding);
    height: var(--grid-row-height);
    border-bottom: var(--grid-borders-secondary) var(--grid-secondary-border-color);
  }
  .ag-rich-select-virtual-list-item {
    cursor: default;
    height: var(--grid-list-item-height);
  }
  .ag-keyboard-focus .ag-rich-select-virtual-list-item:focus::after {
    content: none;
  }
  .ag-rich-select-virtual-list-item:hover {
    background-color: var(--grid-row-hover-color);
  }
  .ag-rich-select-row {
    padding-left: var(--grid-cell-horizontal-padding);
  }
  .ag-rich-select-row-selected {
    background-color: var(--grid-selected-row-background-color);
  }
  .ag-row-drag,
  .ag-selection-checkbox,
  .ag-group-expanded,
  .ag-group-contracted {
    color: var(--grid-secondary-foreground-color);
  }
  .ag-ltr .ag-row-drag,
  .ag-ltr .ag-selection-checkbox,
  .ag-ltr .ag-group-expanded,
  .ag-ltr .ag-group-contracted {
    margin-right: var(--grid-cell-widget-spacing);
  }
  .ag-rtl .ag-row-drag,
  .ag-rtl .ag-selection-checkbox,
  .ag-rtl .ag-group-expanded,
  .ag-rtl .ag-group-contracted {
    margin-left: var(--grid-cell-widget-spacing);
  }
  .ag-cell-wrapper > :not(.ag-cell-value):not(.ag-group-value) {
    height: min(var(--grid-line-height, calc(var(--grid-row-height) - 2px)), var(--grid-row-height) - 2px);
    display: flex;
    align-items: center;
    flex: none;
  }
  .ag-group-expanded,
  .ag-group-contracted {
    cursor: pointer;
  }
  .ag-group-title-bar-icon {
    cursor: pointer;
    flex: none;
    color: var(--grid-secondary-foreground-color);
  }
  .ag-ltr .ag-group-child-count {
    margin-left: 2px;
  }
  .ag-rtl .ag-group-child-count {
    margin-right: 2px;
  }
  .ag-group-title-bar {
    background-color: var(--grid-subheader-background-color);
    padding: var(--grid-grid-size);
  }
  .ag-group-toolbar {
    padding: var(--grid-grid-size);
    background-color: var(--grid-subheader-toolbar-background-color);
  }
  .ag-disabled-group-title-bar,
  .ag-disabled-group-container {
    opacity: 0.5;
  }
  .group-item {
    margin: calc(var(--grid-grid-size) * 0.5) 0;
  }
  .ag-label {
    white-space: nowrap;
  }
  .ag-ltr .ag-label {
    margin-right: var(--grid-grid-size);
  }
  .ag-rtl .ag-label {
    margin-left: var(--grid-grid-size);
  }
  .ag-label-align-top .ag-label {
    margin-bottom: calc(var(--grid-grid-size) * 0.5);
  }
  .ag-angle-select[disabled] {
    color: var(--grid-disabled-foreground-color);
    pointer-events: none;
  }
  .ag-angle-select[disabled] .ag-angle-select-field {
    opacity: 0.4;
  }
  .ag-ltr .ag-slider-field,
  .ag-ltr .ag-angle-select-field {
    margin-right: calc(var(--grid-grid-size) * 2);
  }
  .ag-rtl .ag-slider-field,
  .ag-rtl .ag-angle-select-field {
    margin-left: calc(var(--grid-grid-size) * 2);
  }
  .ag-angle-select-parent-circle {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    border: solid 1px;
    border-color: var(--grid-border-color);
    background-color: var(--grid-background-color);
  }
  .ag-angle-select-child-circle {
    top: 4px;
    left: 12px;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    margin-top: -4px;
    border-radius: 3px;
    background-color: var(--grid-secondary-foreground-color);
  }
  .ag-picker-field-wrapper {
    border: 1px solid;
    border-color: var(--grid-border-color);
    border-radius: 5px;
  }
  .ag-picker-field-wrapper:focus {
    box-shadow: var(--grid-input-focus-box-shadow);
  }
  .ag-picker-field-button {
    background-color: var(--grid-background-color);
    color: var(--grid-secondary-foreground-color);
  }
  .ag-dialog.ag-color-dialog {
    border-radius: 5px;
  }
  .ag-color-picker .ag-picker-field-display {
    height: var(--grid-icon-size);
  }
  .ag-color-panel {
    padding: var(--grid-grid-size);
  }
  .ag-spectrum-color {
    background-color: red;
    border-radius: 2px;
  }
  .ag-spectrum-tools {
    padding: 10px;
  }
  .ag-spectrum-sat {
    background-image: linear-gradient(to right, white, rgba(204, 154, 129, 0));
  }
  .ag-spectrum-val {
    background-image: linear-gradient(to top, black, rgba(204, 154, 129, 0));
  }
  .ag-spectrum-dragger {
    border-radius: 12px;
    height: 12px;
    width: 12px;
    border: 1px solid #fff;
    background: #000;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.24);
  }
  .ag-spectrum-hue-background {
    border-radius: 2px;
  }
  .ag-spectrum-alpha-background {
    border-radius: 2px;
  }
  .ag-spectrum-tool {
    margin-bottom: 10px;
    height: 11px;
    border-radius: 2px;
  }
  .ag-spectrum-slider {
    margin-top: -12px;
    width: 13px;
    height: 13px;
    border-radius: 13px;
    background-color: #f8f8f8;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  }
  .ag-recent-color {
    margin: 0 3px;
  }
  .ag-recent-color:first-child {
    margin-left: 0;
  }
  .ag-recent-color:last-child {
    margin-right: 0;
  }
  .ag-dnd-ghost {
    border: var(--grid-borders) var(--grid-border-color);
    background: var(--grid-background-color);
    border-radius: var(--grid-card-radius);
    box-shadow: var(--grid-card-shadow);
    padding: var(--grid-grid-size);
    overflow: hidden;
    text-overflow: ellipsis;
    border: var(--grid-borders-secondary) var(--grid-secondary-border-color);
    color: var(--grid-secondary-foreground-color);
    height: var(--grid-header-height) !important;
    line-height: var(--grid-header-height);
    margin: 0;
    padding: 0 calc(var(--grid-grid-size) * 2);
    transform: translateY(calc(var(--grid-grid-size) * 2));
  }
  .ag-dnd-ghost-icon {
    margin-right: var(--grid-grid-size);
    color: var(--grid-foreground-color);
  }
  .ag-popup-child:not(.ag-tooltip-custom) {
    box-shadow: var(--grid-popup-shadow);
  }
  .ag-dragging-range-handle .ag-dialog,
  .ag-dragging-fill-handle .ag-dialog {
    opacity: 0.7;
    pointer-events: none;
  }
  .ag-dialog {
    border-radius: var(--grid-border-radius);
    border: var(--grid-borders) var(--grid-border-color);
  }
  .ag-panel {
    background-color: var(--grid-background-color);
  }
  .ag-panel-title-bar {
    background-color: var(--grid-header-background-color);
    color: var(--grid-header-foreground-color);
    height: var(--grid-header-height);
    padding: var(--grid-grid-size) var(--grid-cell-horizontal-padding);
    border-bottom: var(--grid-borders) var(--grid-border-color);
  }
  .ag-ltr .ag-panel-title-bar-button {
    margin-left: var(--grid-grid-size);
  }
  .ag-rtl .ag-panel-title-bar-button {
    margin-right: var(--grid-grid-size);
  }
  .ag-tooltip {
    background-color: var(--grid-header-background-color);
    color: var(--grid-foreground-color);
    padding: var(--grid-grid-size);
    border: var(--grid-borders) var(--grid-border-color);
    border-radius: var(--grid-card-radius);
    transition: opacity 1s;
    white-space: normal;
  }
  .ag-tooltip.ag-tooltip-hiding {
    opacity: 0;
  }
  .ag-tooltip-custom {
    transition: opacity 1s;
  }
  .ag-tooltip-custom.ag-tooltip-hiding {
    opacity: 0;
  }
  .ag-ltr .ag-column-select-indent-1 {
    padding-left: calc(1 * var(--grid-column-select-indent-size));
  }
  .ag-rtl .ag-column-select-indent-1 {
    padding-right: calc(1 * var(--grid-column-select-indent-size));
  }
  .ag-ltr .ag-column-select-indent-2 {
    padding-left: calc(2 * var(--grid-column-select-indent-size));
  }
  .ag-rtl .ag-column-select-indent-2 {
    padding-right: calc(2 * var(--grid-column-select-indent-size));
  }
  .ag-ltr .ag-column-select-indent-3 {
    padding-left: calc(3 * var(--grid-column-select-indent-size));
  }
  .ag-rtl .ag-column-select-indent-3 {
    padding-right: calc(3 * var(--grid-column-select-indent-size));
  }
  .ag-ltr .ag-column-select-indent-4 {
    padding-left: calc(4 * var(--grid-column-select-indent-size));
  }
  .ag-rtl .ag-column-select-indent-4 {
    padding-right: calc(4 * var(--grid-column-select-indent-size));
  }
  .ag-ltr .ag-column-select-indent-5 {
    padding-left: calc(5 * var(--grid-column-select-indent-size));
  }
  .ag-rtl .ag-column-select-indent-5 {
    padding-right: calc(5 * var(--grid-column-select-indent-size));
  }
  .ag-ltr .ag-column-select-indent-6 {
    padding-left: calc(6 * var(--grid-column-select-indent-size));
  }
  .ag-rtl .ag-column-select-indent-6 {
    padding-right: calc(6 * var(--grid-column-select-indent-size));
  }
  .ag-ltr .ag-column-select-indent-7 {
    padding-left: calc(7 * var(--grid-column-select-indent-size));
  }
  .ag-rtl .ag-column-select-indent-7 {
    padding-right: calc(7 * var(--grid-column-select-indent-size));
  }
  .ag-ltr .ag-column-select-indent-8 {
    padding-left: calc(8 * var(--grid-column-select-indent-size));
  }
  .ag-rtl .ag-column-select-indent-8 {
    padding-right: calc(8 * var(--grid-column-select-indent-size));
  }
  .ag-ltr .ag-column-select-indent-9 {
    padding-left: calc(9 * var(--grid-column-select-indent-size));
  }
  .ag-rtl .ag-column-select-indent-9 {
    padding-right: calc(9 * var(--grid-column-select-indent-size));
  }
  .ag-column-select-header-icon {
    cursor: pointer;
  }
  .ag-keyboard-focus .ag-column-select-header-icon:focus {
    outline: none;
  }
  .ag-keyboard-focus .ag-column-select-header-icon:focus::after {
    content: '';
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 0;
    left: 0;
    display: block;
    width: calc(100% - 0px);
    height: calc(100% - 0px);
    border: 1px solid;
    border-color: var(--grid-input-focus-border-color);
  }
  .ag-ltr .ag-column-group-icons:not(:last-child),
  .ag-ltr .ag-column-select-header-icon:not(:last-child),
  .ag-ltr .ag-column-select-header-checkbox:not(:last-child),
  .ag-ltr .ag-column-select-header-filter-wrapper:not(:last-child),
  .ag-ltr .ag-column-select-checkbox:not(:last-child),
  .ag-ltr .ag-column-select-column-drag-handle:not(:last-child),
  .ag-ltr .ag-column-select-column-group-drag-handle:not(:last-child),
  .ag-ltr .ag-column-select-column-label:not(:last-child) {
    margin-right: var(--grid-widget-horizontal-spacing);
  }
  .ag-rtl .ag-column-group-icons:not(:last-child),
  .ag-rtl .ag-column-select-header-icon:not(:last-child),
  .ag-rtl .ag-column-select-header-checkbox:not(:last-child),
  .ag-rtl .ag-column-select-header-filter-wrapper:not(:last-child),
  .ag-rtl .ag-column-select-checkbox:not(:last-child),
  .ag-rtl .ag-column-select-column-drag-handle:not(:last-child),
  .ag-rtl .ag-column-select-column-group-drag-handle:not(:last-child),
  .ag-rtl .ag-column-select-column-label:not(:last-child) {
    margin-left: var(--grid-widget-horizontal-spacing);
  }
  .ag-keyboard-focus .ag-column-select-virtual-list-item:focus {
    outline: none;
  }
  .ag-keyboard-focus .ag-column-select-virtual-list-item:focus::after {
    content: '';
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 1px;
    left: 1px;
    display: block;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border: 1px solid;
    border-color: var(--grid-input-focus-border-color);
  }
  .ag-column-select-column-group:not(:last-child),
  .ag-column-select-column:not(:last-child) {
    margin-bottom: var(--grid-widget-vertical-spacing);
  }
  .ag-column-select-column-readonly,
  .ag-column-select-column-group-readonly {
    color: var(--grid-disabled-foreground-color);
    pointer-events: none;
  }
  .ag-ltr .ag-column-select-add-group-indent {
    margin-left: calc(var(--grid-icon-size) + var(--grid-grid-size) * 2);
  }
  .ag-rtl .ag-column-select-add-group-indent {
    margin-right: calc(var(--grid-icon-size) + var(--grid-grid-size) * 2);
  }
  .ag-column-select-virtual-list-viewport {
    padding: calc(var(--grid-widget-container-vertical-padding) * 0.5) 0;
  }
  .ag-column-select-virtual-list-item {
    padding: 0 var(--grid-widget-container-horizontal-padding);
  }
  .ag-rtl {
    text-align: right;
  }
  .ag-root-wrapper {
    border: var(--grid-borders) var(--grid-border-color);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-1 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 1);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-1 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 1);
  }
  .ag-ltr .ag-row-group-indent-1 {
    padding-left: calc(1 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-1 {
    padding-right: calc(1 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-1 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-1 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-2 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 2);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-2 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 2);
  }
  .ag-ltr .ag-row-group-indent-2 {
    padding-left: calc(2 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-2 {
    padding-right: calc(2 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-2 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-2 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-3 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 3);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-3 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 3);
  }
  .ag-ltr .ag-row-group-indent-3 {
    padding-left: calc(3 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-3 {
    padding-right: calc(3 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-3 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-3 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-4 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 4);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-4 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 4);
  }
  .ag-ltr .ag-row-group-indent-4 {
    padding-left: calc(4 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-4 {
    padding-right: calc(4 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-4 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-4 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-5 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 5);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-5 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 5);
  }
  .ag-ltr .ag-row-group-indent-5 {
    padding-left: calc(5 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-5 {
    padding-right: calc(5 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-5 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-5 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-6 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 6);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-6 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 6);
  }
  .ag-ltr .ag-row-group-indent-6 {
    padding-left: calc(6 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-6 {
    padding-right: calc(6 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-6 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-6 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-7 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 7);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-7 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 7);
  }
  .ag-ltr .ag-row-group-indent-7 {
    padding-left: calc(7 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-7 {
    padding-right: calc(7 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-7 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-7 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-8 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 8);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-8 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 8);
  }
  .ag-ltr .ag-row-group-indent-8 {
    padding-left: calc(8 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-8 {
    padding-right: calc(8 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-8 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-8 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-9 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 9);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-9 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 9);
  }
  .ag-ltr .ag-row-group-indent-9 {
    padding-left: calc(9 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-9 {
    padding-right: calc(9 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-9 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-9 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-10 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 10);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-10 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 10);
  }
  .ag-ltr .ag-row-group-indent-10 {
    padding-left: calc(10 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-10 {
    padding-right: calc(10 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-10 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-10 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-11 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 11);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-11 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 11);
  }
  .ag-ltr .ag-row-group-indent-11 {
    padding-left: calc(11 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-11 {
    padding-right: calc(11 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-11 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-11 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-12 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 12);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-12 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 12);
  }
  .ag-ltr .ag-row-group-indent-12 {
    padding-left: calc(12 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-12 {
    padding-right: calc(12 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-12 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-12 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-13 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 13);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-13 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 13);
  }
  .ag-ltr .ag-row-group-indent-13 {
    padding-left: calc(13 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-13 {
    padding-right: calc(13 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-13 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-13 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-14 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 14);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-14 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 14);
  }
  .ag-ltr .ag-row-group-indent-14 {
    padding-left: calc(14 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-14 {
    padding-right: calc(14 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-14 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-14 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-15 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 15);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-15 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 15);
  }
  .ag-ltr .ag-row-group-indent-15 {
    padding-left: calc(15 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-15 {
    padding-right: calc(15 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-15 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-15 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-16 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 16);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-16 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 16);
  }
  .ag-ltr .ag-row-group-indent-16 {
    padding-left: calc(16 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-16 {
    padding-right: calc(16 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-16 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-16 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-17 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 17);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-17 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 17);
  }
  .ag-ltr .ag-row-group-indent-17 {
    padding-left: calc(17 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-17 {
    padding-right: calc(17 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-17 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-17 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-18 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 18);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-18 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 18);
  }
  .ag-ltr .ag-row-group-indent-18 {
    padding-left: calc(18 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-18 {
    padding-right: calc(18 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-18 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-18 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-19 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 19);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-19 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 19);
  }
  .ag-ltr .ag-row-group-indent-19 {
    padding-left: calc(19 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-19 {
    padding-right: calc(19 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-19 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-19 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-20 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 20);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-20 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 20);
  }
  .ag-ltr .ag-row-group-indent-20 {
    padding-left: calc(20 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-20 {
    padding-right: calc(20 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-20 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-20 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-21 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 21);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-21 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 21);
  }
  .ag-ltr .ag-row-group-indent-21 {
    padding-left: calc(21 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-21 {
    padding-right: calc(21 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-21 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-21 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-22 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 22);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-22 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 22);
  }
  .ag-ltr .ag-row-group-indent-22 {
    padding-left: calc(22 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-22 {
    padding-right: calc(22 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-22 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-22 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-23 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 23);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-23 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 23);
  }
  .ag-ltr .ag-row-group-indent-23 {
    padding-left: calc(23 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-23 {
    padding-right: calc(23 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-23 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-23 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-24 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 24);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-24 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 24);
  }
  .ag-ltr .ag-row-group-indent-24 {
    padding-left: calc(24 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-24 {
    padding-right: calc(24 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-24 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-24 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-25 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 25);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-25 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 25);
  }
  .ag-ltr .ag-row-group-indent-25 {
    padding-left: calc(25 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-25 {
    padding-right: calc(25 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-25 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-25 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-26 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 26);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-26 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 26);
  }
  .ag-ltr .ag-row-group-indent-26 {
    padding-left: calc(26 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-26 {
    padding-right: calc(26 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-26 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-26 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-27 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 27);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-27 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 27);
  }
  .ag-ltr .ag-row-group-indent-27 {
    padding-left: calc(27 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-27 {
    padding-right: calc(27 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-27 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-27 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-28 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 28);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-28 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 28);
  }
  .ag-ltr .ag-row-group-indent-28 {
    padding-left: calc(28 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-28 {
    padding-right: calc(28 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-28 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-28 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-29 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 29);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-29 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 29);
  }
  .ag-ltr .ag-row-group-indent-29 {
    padding-left: calc(29 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-29 {
    padding-right: calc(29 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-29 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-29 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-30 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 30);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-30 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 30);
  }
  .ag-ltr .ag-row-group-indent-30 {
    padding-left: calc(30 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-30 {
    padding-right: calc(30 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-30 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-30 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-31 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 31);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-31 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 31);
  }
  .ag-ltr .ag-row-group-indent-31 {
    padding-left: calc(31 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-31 {
    padding-right: calc(31 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-31 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-31 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-32 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 32);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-32 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 32);
  }
  .ag-ltr .ag-row-group-indent-32 {
    padding-left: calc(32 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-32 {
    padding-right: calc(32 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-32 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-32 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-33 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 33);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-33 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 33);
  }
  .ag-ltr .ag-row-group-indent-33 {
    padding-left: calc(33 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-33 {
    padding-right: calc(33 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-33 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-33 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-34 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 34);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-34 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 34);
  }
  .ag-ltr .ag-row-group-indent-34 {
    padding-left: calc(34 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-34 {
    padding-right: calc(34 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-34 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-34 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-35 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 35);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-35 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 35);
  }
  .ag-ltr .ag-row-group-indent-35 {
    padding-left: calc(35 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-35 {
    padding-right: calc(35 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-35 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-35 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-36 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 36);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-36 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 36);
  }
  .ag-ltr .ag-row-group-indent-36 {
    padding-left: calc(36 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-36 {
    padding-right: calc(36 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-36 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-36 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-37 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 37);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-37 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 37);
  }
  .ag-ltr .ag-row-group-indent-37 {
    padding-left: calc(37 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-37 {
    padding-right: calc(37 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-37 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-37 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-38 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 38);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-38 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 38);
  }
  .ag-ltr .ag-row-group-indent-38 {
    padding-left: calc(38 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-38 {
    padding-right: calc(38 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-38 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-38 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-39 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 39);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-39 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 39);
  }
  .ag-ltr .ag-row-group-indent-39 {
    padding-left: calc(39 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-39 {
    padding-right: calc(39 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-39 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-39 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-40 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 40);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-40 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 40);
  }
  .ag-ltr .ag-row-group-indent-40 {
    padding-left: calc(40 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-40 {
    padding-right: calc(40 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-40 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-40 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-41 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 41);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-41 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 41);
  }
  .ag-ltr .ag-row-group-indent-41 {
    padding-left: calc(41 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-41 {
    padding-right: calc(41 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-41 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-41 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-42 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 42);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-42 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 42);
  }
  .ag-ltr .ag-row-group-indent-42 {
    padding-left: calc(42 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-42 {
    padding-right: calc(42 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-42 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-42 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-43 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 43);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-43 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 43);
  }
  .ag-ltr .ag-row-group-indent-43 {
    padding-left: calc(43 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-43 {
    padding-right: calc(43 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-43 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-43 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-44 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 44);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-44 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 44);
  }
  .ag-ltr .ag-row-group-indent-44 {
    padding-left: calc(44 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-44 {
    padding-right: calc(44 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-44 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-44 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-45 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 45);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-45 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 45);
  }
  .ag-ltr .ag-row-group-indent-45 {
    padding-left: calc(45 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-45 {
    padding-right: calc(45 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-45 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-45 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-46 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 46);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-46 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 46);
  }
  .ag-ltr .ag-row-group-indent-46 {
    padding-left: calc(46 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-46 {
    padding-right: calc(46 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-46 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-46 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-47 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 47);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-47 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 47);
  }
  .ag-ltr .ag-row-group-indent-47 {
    padding-left: calc(47 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-47 {
    padding-right: calc(47 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-47 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-47 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-48 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 48);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-48 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 48);
  }
  .ag-ltr .ag-row-group-indent-48 {
    padding-left: calc(48 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-48 {
    padding-right: calc(48 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-48 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-48 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-49 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 49);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-49 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 49);
  }
  .ag-ltr .ag-row-group-indent-49 {
    padding-left: calc(49 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-49 {
    padding-right: calc(49 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-49 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-49 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-50 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 50);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-50 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 50);
  }
  .ag-ltr .ag-row-group-indent-50 {
    padding-left: calc(50 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-50 {
    padding-right: calc(50 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-50 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-50 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-51 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 51);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-51 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 51);
  }
  .ag-ltr .ag-row-group-indent-51 {
    padding-left: calc(51 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-51 {
    padding-right: calc(51 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-51 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-51 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-52 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 52);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-52 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 52);
  }
  .ag-ltr .ag-row-group-indent-52 {
    padding-left: calc(52 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-52 {
    padding-right: calc(52 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-52 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-52 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-53 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 53);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-53 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 53);
  }
  .ag-ltr .ag-row-group-indent-53 {
    padding-left: calc(53 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-53 {
    padding-right: calc(53 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-53 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-53 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-54 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 54);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-54 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 54);
  }
  .ag-ltr .ag-row-group-indent-54 {
    padding-left: calc(54 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-54 {
    padding-right: calc(54 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-54 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-54 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-55 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 55);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-55 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 55);
  }
  .ag-ltr .ag-row-group-indent-55 {
    padding-left: calc(55 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-55 {
    padding-right: calc(55 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-55 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-55 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-56 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 56);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-56 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 56);
  }
  .ag-ltr .ag-row-group-indent-56 {
    padding-left: calc(56 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-56 {
    padding-right: calc(56 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-56 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-56 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-57 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 57);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-57 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 57);
  }
  .ag-ltr .ag-row-group-indent-57 {
    padding-left: calc(57 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-57 {
    padding-right: calc(57 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-57 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-57 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-58 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 58);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-58 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 58);
  }
  .ag-ltr .ag-row-group-indent-58 {
    padding-left: calc(58 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-58 {
    padding-right: calc(58 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-58 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-58 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-59 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 59);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-59 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 59);
  }
  .ag-ltr .ag-row-group-indent-59 {
    padding-left: calc(59 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-59 {
    padding-right: calc(59 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-59 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-59 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-60 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 60);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-60 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 60);
  }
  .ag-ltr .ag-row-group-indent-60 {
    padding-left: calc(60 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-60 {
    padding-right: calc(60 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-60 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-60 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-61 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 61);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-61 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 61);
  }
  .ag-ltr .ag-row-group-indent-61 {
    padding-left: calc(61 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-61 {
    padding-right: calc(61 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-61 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-61 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-62 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 62);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-62 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 62);
  }
  .ag-ltr .ag-row-group-indent-62 {
    padding-left: calc(62 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-62 {
    padding-right: calc(62 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-62 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-62 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-63 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 63);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-63 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 63);
  }
  .ag-ltr .ag-row-group-indent-63 {
    padding-left: calc(63 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-63 {
    padding-right: calc(63 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-63 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-63 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-64 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 64);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-64 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 64);
  }
  .ag-ltr .ag-row-group-indent-64 {
    padding-left: calc(64 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-64 {
    padding-right: calc(64 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-64 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-64 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-65 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 65);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-65 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 65);
  }
  .ag-ltr .ag-row-group-indent-65 {
    padding-left: calc(65 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-65 {
    padding-right: calc(65 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-65 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-65 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-66 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 66);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-66 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 66);
  }
  .ag-ltr .ag-row-group-indent-66 {
    padding-left: calc(66 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-66 {
    padding-right: calc(66 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-66 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-66 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-67 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 67);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-67 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 67);
  }
  .ag-ltr .ag-row-group-indent-67 {
    padding-left: calc(67 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-67 {
    padding-right: calc(67 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-67 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-67 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-68 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 68);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-68 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 68);
  }
  .ag-ltr .ag-row-group-indent-68 {
    padding-left: calc(68 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-68 {
    padding-right: calc(68 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-68 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-68 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-69 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 69);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-69 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 69);
  }
  .ag-ltr .ag-row-group-indent-69 {
    padding-left: calc(69 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-69 {
    padding-right: calc(69 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-69 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-69 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-70 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 70);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-70 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 70);
  }
  .ag-ltr .ag-row-group-indent-70 {
    padding-left: calc(70 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-70 {
    padding-right: calc(70 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-70 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-70 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-71 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 71);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-71 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 71);
  }
  .ag-ltr .ag-row-group-indent-71 {
    padding-left: calc(71 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-71 {
    padding-right: calc(71 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-71 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-71 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-72 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 72);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-72 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 72);
  }
  .ag-ltr .ag-row-group-indent-72 {
    padding-left: calc(72 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-72 {
    padding-right: calc(72 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-72 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-72 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-73 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 73);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-73 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 73);
  }
  .ag-ltr .ag-row-group-indent-73 {
    padding-left: calc(73 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-73 {
    padding-right: calc(73 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-73 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-73 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-74 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 74);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-74 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 74);
  }
  .ag-ltr .ag-row-group-indent-74 {
    padding-left: calc(74 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-74 {
    padding-right: calc(74 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-74 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-74 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-75 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 75);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-75 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 75);
  }
  .ag-ltr .ag-row-group-indent-75 {
    padding-left: calc(75 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-75 {
    padding-right: calc(75 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-75 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-75 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-76 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 76);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-76 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 76);
  }
  .ag-ltr .ag-row-group-indent-76 {
    padding-left: calc(76 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-76 {
    padding-right: calc(76 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-76 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-76 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-77 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 77);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-77 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 77);
  }
  .ag-ltr .ag-row-group-indent-77 {
    padding-left: calc(77 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-77 {
    padding-right: calc(77 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-77 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-77 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-78 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 78);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-78 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 78);
  }
  .ag-ltr .ag-row-group-indent-78 {
    padding-left: calc(78 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-78 {
    padding-right: calc(78 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-78 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-78 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-79 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 79);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-79 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 79);
  }
  .ag-ltr .ag-row-group-indent-79 {
    padding-left: calc(79 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-79 {
    padding-right: calc(79 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-79 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-79 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-80 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 80);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-80 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 80);
  }
  .ag-ltr .ag-row-group-indent-80 {
    padding-left: calc(80 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-80 {
    padding-right: calc(80 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-80 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-80 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-81 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 81);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-81 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 81);
  }
  .ag-ltr .ag-row-group-indent-81 {
    padding-left: calc(81 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-81 {
    padding-right: calc(81 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-81 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-81 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-82 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 82);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-82 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 82);
  }
  .ag-ltr .ag-row-group-indent-82 {
    padding-left: calc(82 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-82 {
    padding-right: calc(82 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-82 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-82 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-83 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 83);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-83 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 83);
  }
  .ag-ltr .ag-row-group-indent-83 {
    padding-left: calc(83 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-83 {
    padding-right: calc(83 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-83 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-83 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-84 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 84);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-84 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 84);
  }
  .ag-ltr .ag-row-group-indent-84 {
    padding-left: calc(84 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-84 {
    padding-right: calc(84 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-84 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-84 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-85 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 85);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-85 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 85);
  }
  .ag-ltr .ag-row-group-indent-85 {
    padding-left: calc(85 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-85 {
    padding-right: calc(85 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-85 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-85 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-86 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 86);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-86 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 86);
  }
  .ag-ltr .ag-row-group-indent-86 {
    padding-left: calc(86 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-86 {
    padding-right: calc(86 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-86 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-86 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-87 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 87);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-87 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 87);
  }
  .ag-ltr .ag-row-group-indent-87 {
    padding-left: calc(87 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-87 {
    padding-right: calc(87 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-87 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-87 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-88 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 88);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-88 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 88);
  }
  .ag-ltr .ag-row-group-indent-88 {
    padding-left: calc(88 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-88 {
    padding-right: calc(88 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-88 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-88 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-89 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 89);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-89 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 89);
  }
  .ag-ltr .ag-row-group-indent-89 {
    padding-left: calc(89 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-89 {
    padding-right: calc(89 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-89 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-89 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-90 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 90);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-90 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 90);
  }
  .ag-ltr .ag-row-group-indent-90 {
    padding-left: calc(90 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-90 {
    padding-right: calc(90 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-90 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-90 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-91 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 91);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-91 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 91);
  }
  .ag-ltr .ag-row-group-indent-91 {
    padding-left: calc(91 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-91 {
    padding-right: calc(91 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-91 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-91 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-92 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 92);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-92 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 92);
  }
  .ag-ltr .ag-row-group-indent-92 {
    padding-left: calc(92 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-92 {
    padding-right: calc(92 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-92 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-92 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-93 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 93);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-93 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 93);
  }
  .ag-ltr .ag-row-group-indent-93 {
    padding-left: calc(93 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-93 {
    padding-right: calc(93 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-93 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-93 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-94 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 94);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-94 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 94);
  }
  .ag-ltr .ag-row-group-indent-94 {
    padding-left: calc(94 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-94 {
    padding-right: calc(94 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-94 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-94 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-95 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 95);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-95 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 95);
  }
  .ag-ltr .ag-row-group-indent-95 {
    padding-left: calc(95 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-95 {
    padding-right: calc(95 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-95 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-95 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-96 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 96);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-96 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 96);
  }
  .ag-ltr .ag-row-group-indent-96 {
    padding-left: calc(96 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-96 {
    padding-right: calc(96 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-96 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-96 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-97 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 97);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-97 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 97);
  }
  .ag-ltr .ag-row-group-indent-97 {
    padding-left: calc(97 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-97 {
    padding-right: calc(97 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-97 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-97 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-98 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 98);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-98 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 98);
  }
  .ag-ltr .ag-row-group-indent-98 {
    padding-left: calc(98 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-98 {
    padding-right: calc(98 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-98 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-98 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-99 {
    padding-left: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 99);
  }
  .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-99 {
    padding-right: calc(var(--grid-cell-horizontal-padding) + var(--grid-row-group-indent-size) * 99);
  }
  .ag-ltr .ag-row-group-indent-99 {
    padding-left: calc(99 * var(--grid-row-group-indent-size));
  }
  .ag-rtl .ag-row-group-indent-99 {
    padding-right: calc(99 * var(--grid-row-group-indent-size));
  }
  .ag-ltr .ag-row-level-99 .ag-pivot-leaf-group {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-level-99 .ag-pivot-leaf-group {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-ltr .ag-row-group-leaf-indent {
    margin-left: var(--grid-row-group-indent-size);
  }
  .ag-rtl .ag-row-group-leaf-indent {
    margin-right: var(--grid-row-group-indent-size);
  }
  .ag-value-change-delta {
    padding-right: 2px;
  }
  .ag-value-change-delta-up {
    color: var(--grid-value-change-delta-up-color);
  }
  .ag-value-change-delta-down {
    color: var(--grid-value-change-delta-down-color);
  }
  .ag-value-change-value {
    background-color: transparent;
    border-radius: 1px;
    padding-left: 1px;
    padding-right: 1px;
    transition: background-color 1s;
  }
  .ag-value-change-value-highlight {
    background-color: var(--grid-value-change-value-highlight-background-color);
    transition: background-color 0.1s;
  }
  .ag-cell-data-changed {
    background-color: var(--grid-value-change-value-highlight-background-color) !important;
  }
  .ag-cell-data-changed-animation {
    background-color: transparent;
  }
  .ag-cell-highlight {
    background-color: var(--grid-range-selection-highlight-color) !important;
  }
  .ag-row {
    height: var(--grid-row-height);
    background-color: var(--grid-background-color);
    color: var(--grid-data-color);
    border-bottom: var(--grid-borders-row) var(--grid-row-border-color);
  }
  .ag-row-highlight-above::after,
  .ag-row-highlight-below::after {
    content: '';
    position: absolute;
    width: calc(100% - 1px);
    height: 1px;
    background-color: var(--grid-range-selection-border-color);
    left: 1px;
  }
  .ag-row-highlight-above::after {
    top: -1px;
  }
  .ag-row-highlight-above.ag-row-first::after {
    top: 0;
  }
  .ag-row-highlight-below::after {
    bottom: 0;
  }
  .ag-row-odd {
    background-color: var(--grid-odd-row-background-color);
  }
  .ag-body-horizontal-scroll:not(.ag-scrollbar-invisible) .ag-horizontal-left-spacer:not(.ag-scroller-corner) {
    border-right: var(--grid-borders-critical) var(--grid-border-color);
  }
  .ag-body-horizontal-scroll:not(.ag-scrollbar-invisible) .ag-horizontal-right-spacer:not(.ag-scroller-corner) {
    border-left: var(--grid-borders-critical) var(--grid-border-color);
  }
  .ag-row-selected::before {
    content: '';
    background-color: var(--grid-selected-row-background-color);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .ag-row-hover:not(.ag-full-width-row)::before,
  .ag-row-hover.ag-full-width-row.ag-row-group::before {
    content: '';
    background-color: var(--grid-row-hover-color);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }
  .ag-row-hover.ag-full-width-row.ag-row-group > * {
    position: relative;
  }
  .ag-row-hover.ag-row-selected::before {
    background-color: var(--grid-row-hover-color);
    background-image: linear-gradient(
      var(--grid-selected-row-background-color),
      var(--grid-selected-row-background-color)
    );
  }
  .ag-column-hover {
    background-color: var(--grid-column-hover-color);
  }
  .ag-ltr .ag-right-aligned-cell {
    text-align: right;
  }
  .ag-rtl .ag-right-aligned-cell {
    text-align: left;
  }
  .ag-ltr .ag-right-aligned-cell .ag-cell-value,
  .ag-ltr .ag-right-aligned-cell .ag-group-value {
    margin-left: auto;
  }
  .ag-rtl .ag-right-aligned-cell .ag-cell-value,
  .ag-rtl .ag-right-aligned-cell .ag-group-value {
    margin-right: auto;
  }
  .ag-cell,
  .ag-full-width-row .ag-cell-wrapper.ag-row-group {
    border: 1px solid transparent;
    line-height: min(var(--grid-line-height, calc(var(--grid-row-height) - 2px)), var(--grid-row-height) - 2px);
    padding-left: calc(var(--grid-cell-horizontal-padding) - 1px);
    padding-right: calc(var(--grid-cell-horizontal-padding) - 1px);
    -webkit-font-smoothing: subpixel-antialiased;
  }
  .ag-row > .ag-cell-wrapper {
    padding-left: calc(var(--grid-cell-horizontal-padding) - 1px);
    padding-right: calc(var(--grid-cell-horizontal-padding) - 1px);
  }
  .ag-row-dragging {
    cursor: move;
    opacity: 0.5;
  }
  .ag-cell-inline-editing {
    border: var(--grid-borders) var(--grid-border-color);
    background: var(--grid-background-color);
    border-radius: var(--grid-card-radius);
    box-shadow: var(--grid-card-shadow);
    padding: var(--grid-grid-size);
    padding: 0;
    height: 100%;
    background-color: var(--grid-control-panel-background-color);
  }
  .ag-popup-editor {
    border: var(--grid-borders) var(--grid-border-color);
    background: var(--grid-background-color);
    border-radius: var(--grid-card-radius);
    box-shadow: var(--grid-card-shadow);
    padding: var(--grid-grid-size);
    background-color: var(--grid-control-panel-background-color);
    padding: 0;
  }
  .ag-large-text-input {
    height: auto;
    padding: var(--grid-cell-horizontal-padding);
  }
  .ag-details-row {
    padding: calc(var(--grid-grid-size) * 5);
    background-color: var(--grid-background-color);
  }
  .ag-layout-auto-height .ag-center-cols-clipper,
  .ag-layout-auto-height .ag-center-cols-container,
  .ag-layout-print .ag-center-cols-clipper,
  .ag-layout-print .ag-center-cols-container {
    min-height: 50px;
  }
  .ag-overlay-loading-wrapper {
    background-color: var(--grid-modal-overlay-background-color);
  }
  /*.ag-overlay-loading-center {
    border: var(--grid-borders) var(--grid-border-color);
    background: var(--grid-background-color);
    border-radius: var(--grid-card-radius);
    box-shadow: var(--grid-card-shadow);
    padding: var(--grid-grid-size);
  }
  */
  .ag-overlay-loading-center {
    padding: var(--grid-grid-size);
  }
  .ag-overlay-no-rows-wrapper.ag-layout-auto-height {
    padding-top: 30px;
  }
  .ag-loading {
    padding-left: var(--grid-cell-horizontal-padding);
    display: flex;
    height: 100%;
    align-items: center;
  }
  .ag-loading-icon {
    padding-right: var(--grid-cell-widget-spacing);
  }
  .ag-icon-loading {
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .ag-floating-top {
    border-bottom: var(--grid-borders-critical) var(--grid-border-color);
  }
  .ag-floating-bottom {
    border-top: var(--grid-borders-critical) var(--grid-border-color);
  }
  .ag-ltr .ag-cell {
    border-right: var(--grid-cell-horizontal-border);
  }
  .ag-rtl .ag-cell {
    border-left: var(--grid-cell-horizontal-border);
  }
  .ag-ltr .ag-cell {
    border-right-width: 1px;
  }
  .ag-rtl .ag-cell {
    border-left-width: 1px;
  }
  .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left):not(.ag-cell-range-single-cell) {
    border-left: var(--grid-borders-critical) var(--grid-border-color);
  }
  .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right):not(.ag-cell-range-single-cell) {
    border-right: var(--grid-borders-critical) var(--grid-border-color);
  }
  .ag-cell-range-selected:not(.ag-cell-focus),
  .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing) {
    background-color: var(--grid-range-selection-background-color);
  }
  .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart,
  .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing).ag-cell-range-chart {
    background-color: var(--grid-range-selection-chart-background-color) !important;
  }
  .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart.ag-cell-range-chart-category,
  .ag-body-viewport:not(.ag-has-focus)
    .ag-cell-range-single-cell:not(.ag-cell-inline-editing).ag-cell-range-chart.ag-cell-range-chart-category {
    background-color: var(--grid-range-selection-chart-category-background-color) !important;
  }
  .ag-cell-range-selected-1:not(.ag-cell-focus),
  .ag-root:not(.ag-context-menu-open)
    .ag-body-viewport:not(.ag-has-focus)
    .ag-cell-range-selected-1:not(.ag-cell-inline-editing) {
    background-color: var(--grid-range-selection-background-color);
  }
  .ag-cell-range-selected-2:not(.ag-cell-focus),
  .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-2 {
    background-color: var(--grid-range-selection-background-color-2);
  }
  .ag-cell-range-selected-3:not(.ag-cell-focus),
  .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-3 {
    background-color: var(--grid-range-selection-background-color-3);
  }
  .ag-cell-range-selected-4:not(.ag-cell-focus),
  .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-4 {
    background-color: var(--grid-range-selection-background-color-4);
  }
  .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top {
    border-top-color: var(--grid-range-selection-border-color);
    border-top-style: var(--grid-range-selection-border-style);
  }
  .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right {
    border-right-color: var(--grid-range-selection-border-color);
    border-right-style: var(--grid-range-selection-border-style);
  }
  .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom {
    border-bottom-color: var(--grid-range-selection-border-color);
    border-bottom-style: var(--grid-range-selection-border-style);
  }
  .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left {
    border-left-color: var(--grid-range-selection-border-color);
    border-left-style: var(--grid-range-selection-border-style);
  }
  .ag-ltr .ag-cell-focus:not(.ag-cell-range-selected):focus-within,
  .ag-ltr .ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected),
  .ag-ltr .ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group,
  .ag-ltr .ag-cell-range-single-cell,
  .ag-ltr .ag-cell-range-single-cell.ag-cell-range-handle,
  .ag-rtl .ag-cell-focus:not(.ag-cell-range-selected):focus-within,
  .ag-rtl .ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected),
  .ag-rtl .ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group,
  .ag-rtl .ag-cell-range-single-cell,
  .ag-rtl .ag-cell-range-single-cell.ag-cell-range-handle {
    border: 1px solid;
    border-color: var(--grid-range-selection-border-color);
    border-style: var(--grid-range-selection-border-style);
    outline: initial;
  }
  .ag-cell.ag-selection-fill-top,
  .ag-cell.ag-selection-fill-top.ag-cell-range-selected {
    border-top: 1px dashed;
    border-top-color: var(--grid-range-selection-border-color);
  }
  .ag-ltr .ag-cell.ag-selection-fill-right,
  .ag-ltr .ag-cell.ag-selection-fill-right.ag-cell-range-selected {
    border-right: 1px dashed var(--grid-range-selection-border-color) !important;
  }
  .ag-rtl .ag-cell.ag-selection-fill-right,
  .ag-rtl .ag-cell.ag-selection-fill-right.ag-cell-range-selected {
    border-left: 1px dashed var(--grid-range-selection-border-color) !important;
  }
  .ag-cell.ag-selection-fill-bottom,
  .ag-cell.ag-selection-fill-bottom.ag-cell-range-selected {
    border-bottom: 1px dashed;
    border-bottom-color: var(--grid-range-selection-border-color);
  }
  .ag-ltr .ag-cell.ag-selection-fill-left,
  .ag-ltr .ag-cell.ag-selection-fill-left.ag-cell-range-selected {
    border-left: 1px dashed var(--grid-range-selection-border-color) !important;
  }
  .ag-rtl .ag-cell.ag-selection-fill-left,
  .ag-rtl .ag-cell.ag-selection-fill-left.ag-cell-range-selected {
    border-right: 1px dashed var(--grid-range-selection-border-color) !important;
  }
  .ag-fill-handle,
  .ag-range-handle {
    position: absolute;
    width: 6px;
    height: 6px;
    bottom: -1px;
    background-color: var(--grid-range-selection-border-color);
  }
  .ag-ltr .ag-fill-handle,
  .ag-ltr .ag-range-handle {
    right: -1px;
  }
  .ag-rtl .ag-fill-handle,
  .ag-rtl .ag-range-handle {
    left: -1px;
  }
  .ag-fill-handle {
    cursor: cell;
  }
  .ag-range-handle {
    cursor: nwse-resize;
  }
  .ag-cell-inline-editing {
    border-color: var(--grid-input-focus-border-color) !important;
  }
  .ag-menu {
    border: var(--grid-borders) var(--grid-border-color);
    background: var(--grid-background-color);
    border-radius: var(--grid-card-radius);
    box-shadow: var(--grid-card-shadow);
    padding: var(--grid-grid-size);
    padding: 0;
  }
  .ag-menu-list {
    cursor: default;
    padding: var(--grid-grid-size) 0;
  }
  .ag-menu-separator {
    height: calc(var(--grid-grid-size) * 2 + 1px);
  }
  .ag-menu-separator-part::after {
    content: '';
    display: block;
    border-top: var(--grid-borders-critical) var(--grid-border-color);
  }
  .ag-menu-option-active,
  .ag-compact-menu-option-active {
    background-color: var(--grid-row-hover-color);
  }
  .ag-menu-option-part,
  .ag-compact-menu-option-part {
    line-height: var(--grid-icon-size);
    padding: calc(var(--grid-grid-size) + 2px) 0;
  }
  .ag-menu-option-disabled,
  .ag-compact-menu-option-disabled {
    opacity: 0.5;
  }
  .ag-menu-option-icon,
  .ag-compact-menu-option-icon {
    width: var(--grid-icon-size);
  }
  .ag-ltr .ag-menu-option-icon,
  .ag-ltr .ag-compact-menu-option-icon {
    padding-left: calc(var(--grid-grid-size) * 2);
  }
  .ag-rtl .ag-menu-option-icon,
  .ag-rtl .ag-compact-menu-option-icon {
    padding-right: calc(var(--grid-grid-size) * 2);
  }
  .ag-menu-option-text,
  .ag-compact-menu-option-text {
    padding-left: calc(var(--grid-grid-size) * 2);
    padding-right: calc(var(--grid-grid-size) * 2);
  }
  .ag-ltr .ag-menu-option-shortcut,
  .ag-ltr .ag-compact-menu-option-shortcut {
    padding-right: var(--grid-grid-size);
  }
  .ag-rtl .ag-menu-option-shortcut,
  .ag-rtl .ag-compact-menu-option-shortcut {
    padding-left: var(--grid-grid-size);
  }
  .ag-menu-option-popup-pointer,
  .ag-compact-menu-option-popup-pointer {
    padding-right: var(--grid-grid-size);
  }
  .ag-tabs {
    min-width: var(--grid-tab-min-width);
  }
  .ag-tabs-header {
    width: 100%;
    display: flex;
  }
  .ag-tab {
    border-bottom: var(--grid-selected-tab-underline-width) solid transparent;
    transition: border-bottom var(--grid-selected-tab-underline-transition-speed);
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .ag-keyboard-focus .ag-tab:focus {
    outline: none;
  }
  .ag-keyboard-focus .ag-tab:focus::after {
    content: '';
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid;
    border-color: var(--grid-input-focus-border-color);
  }
  .ag-tab-selected {
    border-bottom-color: var(--grid-selected-tab-underline-color);
  }
  .ag-menu-header {
    color: var(--grid-secondary-foreground-color);
  }
  .ag-filter-separator {
    border-top: var(--grid-borders-critical) var(--grid-border-color);
  }
  .ag-menu:not(.ag-tabs) .ag-filter-select {
    min-width: calc(var(--grid-menu-min-width) - 2 * var(--grid-widget-container-horizontal-padding) - 2px);
  }
  .ag-tabs .ag-filter-select {
    min-width: calc(var(--grid-tab-min-width) - 2 * var(--grid-widget-container-horizontal-padding) - 2px);
  }
  .ag-filter-select .ag-picker-field-wrapper {
    width: 0;
  }
  .ag-filter-condition-operator {
    height: 17px;
  }
  .ag-ltr .ag-filter-condition-operator-or {
    margin-left: calc(var(--grid-grid-size) * 2);
  }
  .ag-rtl .ag-filter-condition-operator-or {
    margin-right: calc(var(--grid-grid-size) * 2);
  }
  .ag-set-filter-select-all {
    padding-top: var(--grid-widget-container-vertical-padding);
  }
  .ag-set-filter-list,
  .ag-filter-no-matches {
    height: calc(var(--grid-list-item-height) * 6);
  }
  .ag-set-filter-filter {
    margin-top: var(--grid-widget-container-vertical-padding);
    margin-left: var(--grid-widget-container-horizontal-padding);
    margin-right: var(--grid-widget-container-horizontal-padding);
  }
  .ag-filter-to {
    margin-top: var(--grid-widget-vertical-spacing);
  }
  .ag-mini-filter {
    margin: var(--grid-widget-container-vertical-padding) var(--grid-widget-container-horizontal-padding);
  }
  .ag-set-filter-item {
    margin: 0 var(--grid-widget-container-horizontal-padding);
  }
  .ag-ltr .ag-set-filter-item-value {
    margin-left: var(--grid-widget-container-horizontal-padding);
  }
  .ag-rtl .ag-set-filter-item-value {
    margin-right: var(--grid-widget-container-horizontal-padding);
  }
  .ag-filter-apply-panel {
    padding: var(--grid-widget-container-vertical-padding) var(--grid-widget-container-horizontal-padding);
    border-top: var(--grid-borders-secondary) var(--grid-secondary-border-color);
  }
  .ag-filter-apply-panel-button {
    line-height: 1.5;
  }
  .ag-keyboard-focus .ag-column-select-header:focus {
    outline: none;
  }
  .ag-keyboard-focus .ag-column-select-header:focus::after {
    content: '';
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid;
    border-color: var(--grid-input-focus-border-color);
  }
  .ag-column-select-header {
    height: var(--grid-header-height);
    align-items: center;
    padding: 0 var(--grid-widget-container-horizontal-padding);
    border-bottom: var(--grid-borders-secondary) var(--grid-secondary-border-color);
  }
  .ag-column-panel-column-select {
    border-bottom: var(--grid-borders-secondary) var(--grid-secondary-border-color);
    border-top: var(--grid-borders-secondary) var(--grid-secondary-border-color);
  }
  .ag-column-group-icons,
  .ag-column-select-header-icon {
    color: var(--grid-secondary-foreground-color);
  }
  .ag-column-select-list .ag-list-item-hovered::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--grid-range-selection-border-color);
  }
  .ag-column-select-list .ag-item-highlight-top::after {
    top: 0;
  }
  .ag-column-select-list .ag-item-highlight-bottom::after {
    bottom: 0;
  }
  .ag-header {
    background-color: var(--grid-header-background-color);
    border-bottom: var(--grid-borders-critical) var(--grid-border-color);
  }
  .ag-header-row {
    color: var(--grid-header-foreground-color);
    height: var(--grid-header-height);
    font-size: var(--grid-header-font-size);
    font-weight: var(--grid-header-font-weight);
  }

  .ag-pinned-right-header {
    border-left: var(--grid-borders-critical) var(--grid-border-color);
  }
  .ag-pinned-left-header {
    border-right: var(--grid-borders-critical) var(--grid-border-color);
  }
  .ag-ltr .ag-header-cell:not(.ag-right-aligned-header) .ag-header-label-icon {
    margin-left: var(--grid-grid-size);
  }
  .ag-rtl .ag-header-cell:not(.ag-right-aligned-header) .ag-header-label-icon {
    margin-right: var(--grid-grid-size);
  }
  .ag-ltr .ag-header-cell.ag-right-aligned-header .ag-header-label-icon {
    margin-right: var(--grid-grid-size);
  }
  .ag-rtl .ag-header-cell.ag-right-aligned-header .ag-header-label-icon {
    margin-left: var(--grid-grid-size);
  }
  .ag-header-cell,
  .ag-header-group-cell {
    padding-left: var(--grid-cell-horizontal-padding);
    padding-right: var(--grid-cell-horizontal-padding);
  }
  .ag-header-cell.ag-header-cell-moving,
  .ag-header-group-cell.ag-header-cell-moving {
    background-color: var(--grid-header-cell-moving-background-color);
  }
  .ag-keyboard-focus .ag-header-cell:focus {
    outline: none;
  }
  .ag-keyboard-focus .ag-header-cell:focus::after {
    content: '';
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid;
    border-color: var(--grid-input-focus-border-color);
  }
  .ag-keyboard-focus .ag-header-group-cell:focus {
    outline: none;
  }
  .ag-keyboard-focus .ag-header-group-cell:focus::after {
    content: '';
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid;
    border-color: var(--grid-input-focus-border-color);
  }
  .ag-header-icon {
    color: var(--grid-secondary-foreground-color);
  }
  .ag-header-expand-icon {
    cursor: pointer;
  }
  .ag-ltr .ag-header-expand-icon {
    padding-left: 4px;
  }
  .ag-rtl .ag-header-expand-icon {
    padding-right: 4px;
  }
  .ag-header-row:not(:first-child) .ag-header-cell,
  .ag-header-row:not(:first-child) .ag-header-group-cell.ag-header-group-cell-with-group {
    border-top: var(--grid-borders-critical) var(--grid-border-color);
  }
  .ag-header-group-cell:not(.ag-column-resizing)
    + .ag-header-group-cell:not(.ag-column-hover):not(.ag-header-cell-moving):hover,
  .ag-header-group-cell:not(.ag-column-resizing) + .ag-header-group-cell:not(.ag-column-hover).ag-column-resizing,
  .ag-header-cell:not(.ag-column-resizing) + .ag-header-cell:not(.ag-column-hover):not(.ag-header-cell-moving):hover,
  .ag-header-cell:not(.ag-column-resizing) + .ag-header-cell:not(.ag-column-hover).ag-column-resizing,
  .ag-header-group-cell:first-of-type:not(.ag-header-cell-moving):hover,
  .ag-header-group-cell:first-of-type.ag-column-resizing,
  .ag-header-cell:not(.ag-column-hover):first-of-type:not(.ag-header-cell-moving):hover,
  .ag-header-cell:not(.ag-column-hover):first-of-type.ag-column-resizing {
    background-color: var(--grid-header-cell-hover-background-color);
  }
  .ag-header-cell::after,
  .ag-header-group-cell::after {
    content: '';
    position: absolute;
    z-index: 1;
    display: var(--grid-header-column-separator-display);
    width: var(--grid-header-column-separator-width);
    height: var(--grid-header-column-separator-height);
    top: calc(50% - var(--grid-header-column-separator-height) * 0.5);
    background-color: var(--grid-header-column-separator-color);
  }
  .ag-ltr .ag-header-cell::after,
  .ag-ltr .ag-header-group-cell::after {
    right: 0;
  }
  .ag-rtl .ag-header-cell::after,
  .ag-rtl .ag-header-group-cell::after {
    left: 0;
  }
  .ag-header-cell-resize {
    display: flex;
    align-items: center;
  }
  .ag-header-cell-resize::after {
    content: '';
    position: absolute;
    z-index: 1;
    display: var(--grid-header-column-resize-handle-display);
    left: calc(50% - var(--grid-header-column-resize-handle-width));
    width: var(--grid-header-column-resize-handle-width);
    height: var(--grid-header-column-resize-handle-height);
    top: calc(50% - var(--grid-header-column-resize-handle-height) * 0.5);
    background-color: var(--grid-header-column-resize-handle-color);
  }
  .ag-pinned-right-header .ag-header-cell-resize::after {
    left: 50%;
  }
  .ag-ltr .ag-header-select-all {
    margin-right: var(--grid-cell-horizontal-padding);
  }
  .ag-rtl .ag-header-select-all {
    margin-left: var(--grid-cell-horizontal-padding);
  }
  .ag-ltr .ag-floating-filter-button {
    margin-left: calc(var(--grid-grid-size) * 3);
  }
  .ag-rtl .ag-floating-filter-button {
    margin-right: calc(var(--grid-grid-size) * 3);
  }
  .ag-floating-filter-button-button {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    appearance: none;
    background: transparent;
    border: none;
    height: var(--grid-icon-size);
    padding: 0;
    width: var(--grid-icon-size);
  }
  .ag-filter-loading {
    background-color: var(--grid-control-panel-background-color);
    height: 100%;
    padding: var(--grid-widget-container-vertical-padding) var(--grid-widget-container-horizontal-padding);
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .ag-paging-panel {
    border-top: 1px solid;
    border-top-color: var(--grid-border-color);
    color: var(--grid-secondary-foreground-color);
    height: var(--grid-header-height);
  }
  .ag-paging-panel > * {
    margin: 0 var(--grid-cell-horizontal-padding);
  }
  .ag-paging-button {
    cursor: pointer;
  }
  .ag-paging-button.ag-disabled {
    cursor: default;
    color: var(--grid-disabled-foreground-color);
  }
  .ag-keyboard-focus .ag-paging-button:focus {
    outline: none;
  }
  .ag-keyboard-focus .ag-paging-button:focus::after {
    content: '';
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 0;
    left: 0;
    display: block;
    width: calc(100% - 0px);
    height: calc(100% - 0px);
    border: 1px solid;
    border-color: var(--grid-input-focus-border-color);
  }
  .ag-paging-button,
  .ag-paging-description {
    margin: 0 var(--grid-grid-size);
  }
  .ag-status-bar {
    border-top: var(--grid-borders) var(--grid-border-color);
    color: var(--grid-disabled-foreground-color);
    padding-right: calc(var(--grid-grid-size) * 4);
    padding-left: calc(var(--grid-grid-size) * 4);
    line-height: 1.5;
  }
  .ag-status-name-value-value {
    color: var(--grid-foreground-color);
  }
  .ag-status-bar-center {
    text-align: center;
  }
  .ag-status-name-value {
    margin-left: var(--grid-grid-size);
    margin-right: var(--grid-grid-size);
    padding-top: calc(var(--grid-grid-size) * 2);
    padding-bottom: calc(var(--grid-grid-size) * 2);
  }
  .ag-column-drop-cell {
    background: var(--grid-chip-background-color);
    border-radius: calc(var(--grid-grid-size) * 4);
    height: calc(var(--grid-grid-size) * 4);
    padding: 0 calc(var(--grid-grid-size) * 0.5);
    border: 1px solid transparent;
  }
  .ag-keyboard-focus .ag-column-drop-cell:focus {
    outline: none;
  }
  .ag-keyboard-focus .ag-column-drop-cell:focus::after {
    content: '';
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 2px;
    left: 2px;
    display: block;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 1px solid;
    border-color: var(--grid-input-focus-border-color);
  }
  .ag-column-drop-cell-text {
    margin: 0 var(--grid-grid-size);
  }
  .ag-column-drop-cell-button {
    min-width: calc(var(--grid-grid-size) * 4);
    margin: 0 calc(var(--grid-grid-size) * 0.5);
    color: var(--grid-secondary-foreground-color);
  }
  .ag-column-drop-cell-drag-handle {
    margin-left: calc(var(--grid-grid-size) * 2);
  }
  .ag-column-drop-cell-ghost {
    opacity: 0.5;
  }
  .ag-column-drop-horizontal {
    background-color: var(--grid-control-panel-background-color);
    color: var(--grid-secondary-foreground-color);
    height: var(--grid-row-height);
    border-bottom: var(--grid-borders) var(--grid-border-color);
  }
  .ag-ltr .ag-column-drop-horizontal {
    padding-left: var(--grid-cell-horizontal-padding);
  }
  .ag-rtl .ag-column-drop-horizontal {
    padding-right: var(--grid-cell-horizontal-padding);
  }
  .ag-ltr .ag-column-drop-horizontal-half-width:not(:last-child) {
    border-right: var(--grid-borders) var(--grid-border-color);
  }
  .ag-rtl .ag-column-drop-horizontal-half-width:not(:last-child) {
    border-left: var(--grid-borders) var(--grid-border-color);
  }
  .ag-column-drop-horizontal-cell-separator {
    margin: 0 var(--grid-grid-size);
    color: var(--grid-secondary-foreground-color);
  }
  .ag-column-drop-horizontal-empty-message {
    color: var(--grid-disabled-foreground-color);
  }
  .ag-ltr .ag-column-drop-horizontal-icon {
    margin-right: var(--grid-cell-horizontal-padding);
  }
  .ag-rtl .ag-column-drop-horizontal-icon {
    margin-left: var(--grid-cell-horizontal-padding);
  }
  .ag-column-drop-vertical-list {
    padding-bottom: var(--grid-grid-size);
    padding-right: var(--grid-grid-size);
    padding-left: var(--grid-grid-size);
  }
  .ag-column-drop-vertical-cell {
    margin-top: var(--grid-grid-size);
  }
  .ag-column-drop-vertical {
    min-height: 50px;
    border-bottom: var(--grid-borders-secondary) var(--grid-secondary-border-color);
  }
  .ag-column-drop-vertical.ag-last-column-drop {
    border-bottom: none;
  }
  .ag-column-drop-vertical-icon {
    margin-left: var(--grid-grid-size);
    margin-right: var(--grid-grid-size);
  }
  .ag-column-drop-vertical-empty-message {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    color: var(--grid-disabled-foreground-color);
    margin-top: var(--grid-grid-size);
  }
  .ag-select-agg-func-popup {
    border: var(--grid-borders) var(--grid-border-color);
    background: var(--grid-background-color);
    border-radius: var(--grid-card-radius);
    box-shadow: var(--grid-card-shadow);
    padding: var(--grid-grid-size);
    background: var(--grid-background-color);
    height: calc(var(--grid-grid-size) * 5 * 3.5);
    padding: 0;
  }
  .ag-select-agg-func-virtual-list-item {
    cursor: default;
    padding-left: calc(var(--grid-grid-size) * 2);
  }
  .ag-select-agg-func-virtual-list-item:hover {
    background-color: var(--grid-selected-row-background-color);
  }
  .ag-keyboard-focus .ag-select-agg-func-virtual-list-item:focus {
    outline: none;
  }
  .ag-keyboard-focus .ag-select-agg-func-virtual-list-item:focus::after {
    content: '';
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 1px;
    left: 1px;
    display: block;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border: 1px solid;
    border-color: var(--grid-input-focus-border-color);
  }
  .ag-sort-indicator-container {
    display: flex;
  }
  /*.ag-ltr .ag-sort-indicator-icon {
    padding-left: var(--grid-grid-size);
  }
  .ag-rtl .ag-sort-indicator-icon {
    padding-right: var(--grid-grid-size);
  }*/
  .ag-chart {
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .ag-chart-components-wrapper {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
  }
  .ag-chart-title-edit {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    text-align: center;
  }
  .ag-chart-title-edit.currently-editing {
    display: inline-block;
  }
  .ag-chart-canvas-wrapper {
    position: relative;
    flex: 1 1 auto;
    overflow: hidden;
  }
  .ag-charts-canvas {
    display: block;
  }
  .ag-chart-menu {
    position: absolute;
    top: 10px;
    width: 24px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .ag-ltr .ag-chart-menu {
    right: 20px;
  }
  .ag-rtl .ag-chart-menu {
    left: 20px;
  }
  .ag-chart-docked-container {
    position: relative;
    width: 0;
    min-width: 0;
    transition: min-width 0.4s;
  }
  .ag-chart-menu-hidden ~ .ag-chart-docked-container {
    max-width: 0;
    overflow: hidden;
  }
  .ag-chart-tabbed-menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .ag-chart-tabbed-menu-header {
    flex: none;
    user-select: none;
    cursor: default;
  }
  .ag-chart-tabbed-menu-body {
    display: flex;
    flex: 1 1 auto;
    align-items: stretch;
    overflow: hidden;
  }
  .ag-chart-tab {
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
  }
  .ag-chart-settings {
    overflow-x: hidden;
  }
  .ag-chart-settings-wrapper {
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
  }
  .ag-chart-settings-nav-bar {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    padding: 0 10px;
    user-select: none;
  }
  .ag-chart-settings-card-selector {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1 1 auto;
    height: 100%;
    padding: 0 10px;
  }
  .ag-chart-settings-card-item {
    cursor: pointer;
    width: 10px;
    height: 10px;
    background-color: #000;
    position: relative;
  }
  .ag-chart-settings-card-item.ag-not-selected {
    opacity: 0.2;
  }
  .ag-chart-settings-card-item::before {
    content: ' ';
    display: block;
    position: absolute;
    background-color: transparent;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -10px;
    width: 20px;
    height: 20px;
  }
  .ag-chart-settings-prev,
  .ag-chart-settings-next {
    position: relative;
    flex: none;
  }
  .ag-chart-settings-prev-button,
  .ag-chart-settings-next-button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
  .ag-chart-settings-mini-charts-container {
    position: relative;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .ag-chart-settings-mini-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
  }
  .ag-chart-settings-mini-wrapper.ag-animating {
    transition: left 0.3s;
    transition-timing-function: ease-in-out;
  }
  .ag-chart-mini-thumbnail {
    cursor: pointer;
  }
  .ag-chart-mini-thumbnail-canvas {
    display: block;
  }
  .ag-chart-data-wrapper,
  .ag-chart-format-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    user-select: none;
  }
  .ag-chart-data-wrapper {
    height: 100%;
    overflow-y: auto;
  }
  .ag-chart-data-section,
  .ag-chart-format-section {
    display: flex;
    margin: 0;
  }
  .ag-chart-empty-text {
    display: flex;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .ag-chart .ag-chart-menu {
    opacity: 0;
    pointer-events: none;
  }
  .ag-chart-menu-hidden:hover .ag-chart-menu {
    opacity: 1;
    pointer-events: all;
  }
  .ag-charts-font-size-color {
    display: flex;
    align-self: stretch;
    justify-content: space-between;
  }
  .ag-charts-data-group-item {
    position: relative;
  }
  .ag-chart-menu {
    border-radius: var(--grid-card-radius);
    background: var(--grid-background-color);
  }
  .ag-chart-menu-icon {
    opacity: 0.5;
    line-height: 24px;
    font-size: 24px;
    width: 24px;
    height: 24px;
    margin: 2px 0;
    cursor: pointer;
    border-radius: var(--grid-card-radius);
    color: var(--grid-secondary-foreground-color);
  }
  .ag-chart-menu-icon:hover {
    opacity: 1;
  }
  .ag-chart-mini-thumbnail {
    border: 1px solid var(--grid-secondary-border-color);
    border-radius: 5px;
    margin: 5px;
  }
  .ag-chart-mini-thumbnail:nth-last-child(3),
  .ag-chart-mini-thumbnail:nth-last-child(3) ~ .ag-chart-mini-thumbnail {
    margin-left: auto;
    margin-right: auto;
  }
  .ag-ltr .ag-chart-mini-thumbnail:first-child {
    margin-left: 0;
  }
  .ag-rtl .ag-chart-mini-thumbnail:first-child {
    margin-right: 0;
  }
  .ag-ltr .ag-chart-mini-thumbnail:last-child {
    margin-right: 0;
  }
  .ag-rtl .ag-chart-mini-thumbnail:last-child {
    margin-left: 0;
  }
  .ag-chart-mini-thumbnail.ag-selected {
    border-color: var(--grid-minichart-selected-chart-color);
  }
  .ag-chart-settings-card-item {
    background: var(--grid-foreground-color);
    width: 8px;
    height: 8px;
    border-radius: 4px;
  }
  .ag-chart-settings-card-item.ag-selected {
    background-color: var(--grid-minichart-selected-page-color);
  }
  .ag-chart-data-column-drag-handle {
    margin-left: var(--grid-grid-size);
  }
  .ag-charts-settings-group-title-bar,
  .ag-charts-data-group-title-bar,
  .ag-charts-format-top-level-group-title-bar {
    border-top: var(--grid-borders-secondary) var(--grid-secondary-border-color);
  }
  .ag-charts-settings-group-container {
    padding: var(--grid-grid-size);
  }
  .ag-charts-data-group-container {
    padding: calc(var(--grid-widget-container-vertical-padding) * 0.5) var(--grid-widget-container-horizontal-padding);
  }
  .ag-charts-data-group-container .ag-charts-data-group-item:not(.ag-charts-format-sub-level-group) {
    height: var(--grid-list-item-height);
  }
  .ag-charts-data-group-container .ag-list-item-hovered::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--grid-range-selection-border-color);
  }
  .ag-charts-data-group-container .ag-item-highlight-top::after {
    top: 0;
  }
  .ag-charts-data-group-container .ag-item-highlight-bottom::after {
    bottom: 0;
  }
  .ag-charts-format-top-level-group-container {
    margin-left: calc(var(--grid-grid-size) * 2);
    padding: var(--grid-grid-size);
  }
  .ag-charts-format-top-level-group-item {
    margin: var(--grid-grid-size) 0;
  }
  .ag-charts-format-sub-level-group-container {
    padding: var(--grid-widget-container-vertical-padding) var(--grid-widget-container-horizontal-padding);
    padding-bottom: calc(var(--grid-widget-container-vertical-padding) - var(--grid-widget-vertical-spacing));
  }
  .ag-charts-format-sub-level-group-container > * {
    margin-bottom: var(--grid-widget-vertical-spacing);
  }
  .ag-charts-group-container.ag-group-container-horizontal {
    padding: var(--grid-grid-size);
  }
  .ag-chart-data-section,
  .ag-chart-format-section {
    display: flex;
    margin: 0;
  }
  .ag-chart-menu-panel {
    background-color: var(--grid-control-panel-background-color);
  }
  .ag-ltr .ag-chart-menu-panel {
    border-left: solid 1px var(--grid-border-color);
  }
  .ag-rtl .ag-chart-menu-panel {
    border-right: solid 1px var(--grid-border-color);
  }
  .ag-date-time-list-page-title-bar {
    display: flex;
  }
  .ag-date-time-list-page-title {
    flex-grow: 1;
    text-align: center;
  }
  .ag-date-time-list-page-column-labels-row,
  .ag-date-time-list-page-entries-row {
    display: flex;
  }
  .ag-date-time-list-page-column-label,
  .ag-date-time-list-page-entry {
    flex-basis: 0;
    flex-grow: 1;
  }
  .ag-date-time-list-page-entry {
    cursor: pointer;
    text-align: center;
  }
  .ag-date-time-list-page-column-label {
    text-align: center;
  }
  input[class^='ag-'][type='range'] {
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    background: none;
    overflow: visible;
  }
  input[class^='ag-'][type='range']::-webkit-slider-runnable-track {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 3px;
    background-color: var(--grid-border-color);
    border-radius: var(--grid-border-radius);
    border-radius: var(--grid-checkbox-border-radius);
  }
  input[class^='ag-'][type='range']::-moz-range-track {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 3px;
    background-color: var(--grid-border-color);
    border-radius: var(--grid-border-radius);
    border-radius: var(--grid-checkbox-border-radius);
  }
  input[class^='ag-'][type='range']::-ms-track {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 3px;
    background-color: var(--grid-border-color);
    border-radius: var(--grid-border-radius);
    border-radius: var(--grid-checkbox-border-radius);
    color: transparent;
    width: calc(100% - 2px);
  }
  input[class^='ag-'][type='range']::-webkit-slider-thumb {
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    width: var(--grid-icon-size);
    height: var(--grid-icon-size);
    background-color: var(--grid-background-color);
    border: 1px solid;
    border-color: var(--grid-checkbox-unchecked-color);
    border-radius: var(--grid-icon-size);
    transform: translateY(calc(var(--grid-icon-size) * -0.5 + 1.5px));
  }
  input[class^='ag-'][type='range']::-ms-thumb {
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    width: var(--grid-icon-size);
    height: var(--grid-icon-size);
    background-color: var(--grid-background-color);
    border: 1px solid;
    border-color: var(--grid-checkbox-unchecked-color);
    border-radius: var(--grid-icon-size);
  }
  input[class^='ag-'][type='range']::-moz-ag-range-thumb {
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    width: var(--grid-icon-size);
    height: var(--grid-icon-size);
    background-color: var(--grid-background-color);
    border: 1px solid;
    border-color: var(--grid-checkbox-unchecked-color);
    border-radius: var(--grid-icon-size);
  }
  input[class^='ag-'][type='range']:focus {
    outline: none;
  }
  input[class^='ag-'][type='range']:focus::-webkit-slider-thumb {
    box-shadow: var(--grid-input-focus-box-shadow);
    border-color: var(--grid-checkbox-checked-color);
  }
  input[class^='ag-'][type='range']:focus::-ms-thumb {
    box-shadow: var(--grid-input-focus-box-shadow);
    border-color: var(--grid-checkbox-checked-color);
  }
  input[class^='ag-'][type='range']:focus::-moz-ag-range-thumb {
    box-shadow: var(--grid-input-focus-box-shadow);
    border-color: var(--grid-checkbox-checked-color);
  }
  input[class^='ag-'][type='range']:active::-webkit-slider-runnable-track {
    background-color: var(--grid-input-focus-border-color);
  }
  input[class^='ag-'][type='range']:active::-moz-ag-range-track {
    background-color: var(--grid-input-focus-border-color);
  }
  input[class^='ag-'][type='range']:active::-ms-track {
    background-color: var(--grid-input-focus-border-color);
  }
  input[class^='ag-'][type='range']:disabled {
    opacity: 0.5;
  }

  .ag-input-field-input {
    width: 100%;
    min-width: 0;
  }
  .ag-checkbox-input-wrapper {
    font-family: var(--grid-icon-font-family);
    font-size: var(--grid-icon-size);
    line-height: var(--grid-icon-size);
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: var(--grid-icon-size);
    height: var(--grid-icon-size);
    background-color: var(--grid-checkbox-background-color);
    border-radius: var(--grid-checkbox-border-radius);
    display: inline-block;
    vertical-align: middle;
    flex: none;
  }
  .ag-checkbox-input-wrapper input,
  .ag-checkbox-input-wrapper input {
    -webkit-appearance: none;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  .ag-checkbox-input-wrapper:focus-within,
  .ag-checkbox-input-wrapper:active {
    outline: none;
    box-shadow: var(--grid-input-focus-box-shadow);
  }
  .ag-checkbox-input-wrapper.ag-disabled {
    opacity: 0.5;
  }
`;
