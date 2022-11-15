/* eslint-disable import/order */

import type {
  ColDef,
  GridReadyEvent,
  ColumnResizedEvent,
  RowSelectedEvent,
  RowClickedEvent,
  GridApi,
  GridOptions
} from 'ag-grid-community';
import { Grid } from 'ag-grid-community';
import { LitElement, html } from 'lit';
import { customElement, property, query, queryAll, state } from 'lit/decorators.js';
import { emit, waitForEvent } from '../../internal/event';
import styles from './data-table.styles';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { CustomLoadingCellRenderer } from './customLoadingCellRenderer';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CustomLoadingOverlay } from './customLoadingOverlay';
import { CustomNoRowsOverlay } from './customNoRowsOverlay';
import type { noDataType } from './data-table-types';
import perfectScrollbar from 'perfect-scrollbar';

/**
 * @since 1.0
 * @status experimental
 *
 * @dependency em9-example
 *
 * @event em9-grid-row-click - Emitted after the row clicked and all animations are complete.
 * @event em9-grid-ready - Emitted when grid is ready and initialized.
 * @event em9-column-resize - Emitted when column is resized.
 * @event em9-clear - Emitted when the clear button is activated.
 * @event em9-grid-table - Emitted grid is initialized for grid table ref.
 * @slot - The default slot.
 * @slot example - An example slot.
 * @slot rowDataInput - The row Data Input.
 * @slot customHeader - Slot for user defined header if  attribute customHeader="true"
 * @slot selected-badge - Slot for User defined badge if  attribute customHeader="false" and defaultLeftHeader="true"
 * @slot right-header - Slot for right side of header if  attribute customHeader="false"
 * @slot left-header - Slot for right side of header if  attribute customHeader="false"  and defaultLeftHeader="false"
 * @slot customHeader - Slot for user defined filter if  attribute customFilter="true"
 * @slot left-filter - Slot for left side if  attribute filterBlock available and if  attribute customFilter="false"
 * @slot right-filter - Slot for Right side if  attribute filterBlock available and if  attribute customFilter="false" and defaultRightFilter="false"
 *
 * @csspart gridContainer - The component's internal wrapper.
 * @csspart gridHeader - The component's Header wrapper.
 * @csspart gridHeaderLeft - The component's Header left part wrapper.
 * @csspart gridHeading - The component's Header Heading.
 * @csspart gridDescription - The component's Header Description.
 * @csspart gridHeaderRight - The component's Header Right part wrapper.
 * @csspart gridFilter - The component's Filter block  wrapper.
 * @csspart gridFilterLeft - The component's Filter block left part wrapper.
 * @csspart gridFilterRight - The component's Filter block right part wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */

@customElement('em9-data-table')
export default class em9DataTable extends LitElement {
  static styles = styles;
  static idRegex: RegExp;

  /** Sets the unique id of table*/
  @property() id: string;
  /** Indicates whether or not the alert is open. You can use this in lieu of the show/hide methods. */
  @property({ type: Boolean }) loaded = false;
  @property({ type: RegExp, reflect: false }) idRegex = new RegExp(/^#[a-zA-Z]+.*$/i, 'g');
  /** Set rowDataInput to Array of Objects, one Object per Row*/
  @property({ type: Array }) rowDataInput: [] = null;
  /** Set colDataInput to Array of Objects. Each Column Definition results in one Column.*/
  @property({ type: Array }) colDataInput: ColDef[] = [];
  /** Set paginationEnable true to enable the pagination*/
  @property({ type: Boolean }) paginationEnable;
  /** If you set paginationAutoPageSize=true the grid will automatically show as many rows in each page as it can fit*/
  @property({ type: Boolean, reflect: true }) paginationAutoPageSize = false;
  @property({ type: Boolean, reflect: true }) suppressPaginationPanel = true;
  @property({ type: Boolean, reflect: true }) suppressScrollOnNewData = true;
  @property({ type: Boolean, reflect: false }) suppressDragLeaveHidesColumns = true;
  /** Type of row selection, set to either 'single' or 'multiple' to enable selection.
   * 'single' will use single row selection, such that when you select a row, any previously selected row gets unselected. 'multiple' allows multiple rows to be selected.*/
  @property({ type: String }) rowSelection: 'single' | 'multiple' = undefined;
  /** The height in pixels for the row containing the column label header. If not specified, it uses the theme value of `header-height`. */
  @property({ type: Number }) headerHeight = 44;
  /** Default row height in pixels.*/
  @property({ type: Number }) rowHeight = 72;
  /** To make the currently visible columns fit the screen.*/
  @property({ type: Boolean }) sizeColumnsToFit = false;
  /** represents the total count of data available from the source.*/
  @property({ type: Number }) totalCount = 0;
  /** represents the current active page. We'll use a 1-based */
  @property({ type: Number }) currentPage = 1;
  /** represents the maximum data that is visible in a single page. */
  @property({ type: Number }) pageSize = 100;
  /** represents the min number of page buttons to be shown on each side of the current page button. Defaults to 1.*/
  @property({ type: Number }) siblingCount = 5;
  /**To show table header block*/
  @property({ type: Boolean, reflect: true }) headerBlock = false;
  /** Data table User wants to use own structure in header*/
  @property({ type: Boolean }) customHeader = false;
  /** Default structure for left side of Header*/
  @property({ type: Boolean }) customLeftHeader = false;
  /** header value in default structure*/
  @property({ type: String }) gridHeading = '';
  /**Description value in default left header structure*/
  @property({ type: String }) gridDescription = '';
  /**To show table filter block*/
  @property({ type: Boolean, reflect: true }) filterBlock = false;
  /**Data table User wants to use own structure in Filter block*/
  @property({ type: Boolean }) customFilter = false;
  /**Gives Default structure for Right side of Filter*/
  @property({ type: Boolean, reflect: true }) customRightFilter = false;
  /** represents the Messages in case of no Data exists or filter data is not found .
   * Use $filterText in description as a placeholder to show searched text in description
   */
  @property({ type: Array }) notFound: noDataType[] = [
    {
      heading: 'Something went wrong...',
      description:
        'We had some trouble loading this page. Please refresh the page to try again or get in touch if the problem sticks around!',
      type: 'noData',
      icon: 'outline-info-circle'
    },
    {
      heading: 'No vendors found',
      description: 'Your search $filterText did not match any vendors. Please try again or create add a new vendor.',
      type: 'noSearch',
      icon: 'outline-search-normal-1'
    }
  ];

  @queryAll('.pagination_item') paginationItems: NodeListOf<HTMLDivElement>;
  @query('.em9-grid') em9Table: HTMLElement;
  @query('.filter-text-box') searchFilter: HTMLInputElement;
  @query('.resize-observer-overview') paginationResizer: HTMLInputElement;
  @query('.ag-body-viewport') gridBodyViewPort: HTMLElement;
  @query('.ag-body-horizontal-scroll-viewport') gridBodyHorizontalViewPort: HTMLElement;
  @queryAll('.clear-btn') clearButton: NodeListOf<HTMLDivElement>;

  @state()
  _isData = false;
  _defaultData = [...this.notFound];
  @state()
  _isSearchFound = false;
  searchFilterValue = '';
  gridApi: GridApi;
  gridOptions: GridOptions;
  @state()
  hidePageRange: boolean;
  @state()
  headerCollapsed: boolean;
  @state()
  filterCollapsed: boolean;
  range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  DOTS = '...';
  scrollBarVertical: perfectScrollbar;
  scrollBarHorizontal: perfectScrollbar;

  constructor() {
    super();
  }

  render() {
    return html`
    <div class="resize-observer-overview">
      <em9-resize-observer>
      <div part="gridContainer" class="em9-grid-container">
        ${
          this.headerBlock
            ? html`${this.customHeader
                ? html`<slot name="customHeader"></slot>`
                : html`
            <div part="gridHeader" class=${classMap({
              'em9-grid-header': true,
              'em9-grid-header-md': this.headerCollapsed
            })}
        >
              <div part="gridHeaderLeft" class="left-header">
              ${
                !this.customLeftHeader
                  ? html`
                <div class="em9-grid-heading-block">
                  ${
                    ifDefined(this.gridHeading)
                      ? html`<h2 part="gridHeading" class="em9-grid-heading">${this.gridHeading}</h2>`
                      : ''
                  }
                  <slot name="selected-badge"><slot>
                </div>
                ${
                  ifDefined(this.gridDescription)
                    ? html`<p part="gridDescription" class="em9-grid-description">${this.gridDescription}</p>`
                    : ''
                }
              `
                  : html`<slot name="left-header"><slot></slot></slot>`
              }
              </div>
              <div part="gridHeaderRight" class="right-header">
                  <slot name="right-header"><slot>
              </div>
            </div>`}`
            : ''
        }
        ${
          this.filterBlock
            ? html` ${this.customFilter
                ? html`<slot name="UserDefineFilter"></slot>`
                : html` <div
                    part="gridFilter"
                    class=${classMap({
                      'em9-grid-filter': true,
                      'em9-grid-filter-md': this.filterCollapsed
                    })}
                  >
                    <div part="gridFilterLeft" class="filter-left">
                      <slot name="left-filter"></slot>
                    </div>
                    <div part="gridFilterRight" class="filter-right">
                      ${!this.customRightFilter
                        ? html` <em9-input
                            part="gridFilterInput"
                            type="text"
                            @keyup="${this.onFilterTextBoxChanged}"
                            class="filter-text-box"
                            placeholder="Search"
                          >
                            <em9-icon name="outline-search-normal-1" slot="suffix"></em9-icon>
                          </em9-input>`
                        : html` <slot name="right-filter"></slot> `}
                    </div>
                  </div>`}`
            : ''
        }

        <div id="table_${this.id}" class="em9-grid em9-grid-default-theme"></div>
        ${this.paginationTemplate()}
        </div>
      </div>
      </em9-resize-observer>
    </div>
    `;
  }
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(this.searchFilter?.value);
    this.searchFilterValue = this.searchFilter?.value;
    setTimeout(() => {
      const gridContainer = this.renderRoot.querySelector('.ag-center-cols-container');
      //console.log(gridContainer.childNodes.length);
      if (gridContainer.childNodes.length <= 0 && this.searchFilter?.value) {
        //console.log(`value here${this.searchFilterValue}`);
        this._isSearchFound = true;
        this.gridApi.showNoRowsOverlay();
      } else {
        this._isSearchFound = false;
        if (this.rowDataInput.length <= 0) {
          this.gridApi.showNoRowsOverlay();
        } else {
          this.gridApi.hideOverlay();
        }
      }
    }, 400);
  }
  clearSearch() {
    //console.log('clearing', this);
    emit(this, 'em9-clear');
    this.searchFilter.value = '';
    this.gridApi.setQuickFilter('');
    this.gridApi.hideOverlay();
  }
  getRowData() {
    this.setLoading(true);
    // eslint-disable-next-line no-new
    new Grid(this.em9Table, this.gridOptions);
    this.setLoading(false);
  }
  async firstUpdated() {
    this.gridOptions = {
      columnDefs: null,
      defaultColDef: {
        cellClass: 'cell-wrap-text',
        wrapText: true
      },
      rowData: null,
      suppressDragLeaveHidesColumns: this.suppressDragLeaveHidesColumns,
      rowSelection: this.rowSelection,
      headerHeight: this.headerHeight,
      rowHeight: this.rowHeight,
      pagination: true,
      suppressPaginationPanel: this.suppressPaginationPanel,
      suppressScrollOnNewData: this.suppressScrollOnNewData,
      paginationAutoPageSize: this.paginationAutoPageSize,
      paginationPageSize: this.pageSize,
      animateRows: true,
      loadingOverlayComponent: CustomLoadingOverlay,
      loadingOverlayComponentParams: {
        loadingMessage: 'One moment please...'
      },
      noRowsOverlayComponent: CustomNoRowsOverlay,
      noRowsOverlayComponentParams: {
        noRowsMessageFunc: () => {
          const notFoundTemp = this.notFound;
          const defaultObj = this._defaultData;
          let noDataObj: noDataType;
          if (this._isSearchFound && this.rowDataInput.length > 0) {
            noDataObj = this.dataIsNotFoundTemplate(notFoundTemp, defaultObj);
          } else {
            noDataObj = this.noDataTemplate(notFoundTemp, defaultObj);
          }
          if (this.searchFilterValue.length > 20) {
            this.searchFilterValue = `${this.searchFilterValue.substring(0, 20)}...`;
          }
          noDataObj['filterValue'] = this.searchFilterValue;
          return `${noDataObj !== undefined ? JSON.stringify(noDataObj) : 'No Error type define'}`;
        }
      },

      loadingCellRenderer: CustomLoadingCellRenderer,
      loadingCellRendererParams: {
        loadingMessage: 'One moment please...'
      },
      icons: {
        checkboxChecked: "<img src='../assets/grid-assets/ascending-icon.svg' alt='icon'/>",
        checkboxUnchecked: "<img src='../assets/grid-assets/ascending-icon.svg' alt='icon'/>",
        checkboxIndeterminate: "<img src='../assets/grid-assets/ascending-icon.svg' alt='icon'/>",
        sortAscending: "<em9-icon name='linear-arrow-down-1'></em9-icon>",
        sortDescending: "<em9-icon name='outline-arrow-up-3'></em9-icon>"
      },
      // EVENTS
      // Add event handlers
      onRowClicked: event => this.rowClick(event),
      onColumnResized: event => this.columnResized(event),
      onGridReady: params => this.gridReady(params),
      onRowSelected: params => this.gridRowSelected(params)
    };

    await this.updateComplete;
    this.getRowData();

    const resizeObserver = this.paginationResizer?.querySelector('em9-resize-observer');
    resizeObserver.addEventListener('em9-resize', (event: CustomEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const elementWidth: unknown = event.detail.entries[0].borderBoxSize[0].inlineSize;
      if (elementWidth < 786 && elementWidth > 580) {
        this.headerCollapsed = true;
        this.filterCollapsed = true;
      } else if (elementWidth <= 580) {
        this.hidePageRange = true;
      } else {
        this.hidePageRange = false;
        this.headerCollapsed = false;
        this.filterCollapsed = false;
      }
    });

    this.gridBodyViewPort ? (this.scrollBarVertical = new perfectScrollbar(this.gridBodyViewPort)) : null;
    this.gridBodyHorizontalViewPort
      ? (this.scrollBarHorizontal = new perfectScrollbar(this.gridBodyHorizontalViewPort))
      : null;
  }

  async updated(changedProperties: Map<string, unknown>) {
    await this.updateComplete;
    if (changedProperties.has('rowDataInput')) {
      const oldValue = changedProperties.get('rowDataInput');
      const newValue = this.rowDataInput;

      if (newValue && oldValue === null) {
        this.gridApi?.setRowData(this.rowDataInput);
        this.gridApi?.setColumnDefs(this.colDataInput);
        if (this.sizeColumnsToFit) {
          this.sizeToFit();
        }
        this.gridApi?.paginationSetPageSize(this.pageSize);

        const em9GridTableEvent = new CustomEvent('em9-grid-table', {
          detail: this
        });
        this.dispatchEvent(em9GridTableEvent);
        if (this.scrollBarVertical || this.scrollBarHorizontal) {
          this.scrollBarVertical.update();
          this.scrollBarHorizontal.update();
        }
      }
    }
  }

  // No Data Template
  dataIsNotFoundTemplate(notFoundTemp: noDataType[], defaultObj: noDataType[]): noDataType {
    const userNodata = notFoundTemp.find(({ type }) => type === 'noSearch');
    const defaultNoData = defaultObj.find(({ type }) => type === 'noSearch');
    if (userNodata !== undefined) {
      userNodata.heading === undefined ? (userNodata['heading'] = defaultNoData.heading) : '';
      userNodata.description === undefined ? (userNodata['description'] = defaultNoData.description) : '';
      userNodata.icon === undefined ? (userNodata['icon'] = defaultNoData.icon) : '';
    }
    return userNodata === undefined ? defaultNoData : userNodata;
  }
  // No Data Template
  noDataTemplate(notFoundTemp: noDataType[], defaultObj: noDataType[]): noDataType {
    const userNodata = notFoundTemp.find(({ type }) => type === 'noData');
    const defaultNoData = defaultObj.find(({ type }) => type === 'noData');
    if (userNodata !== undefined) {
      userNodata.heading === undefined ? (userNodata['heading'] = defaultNoData.heading) : '';
      userNodata.description === undefined ? (userNodata['description'] = defaultNoData.description) : '';
      userNodata.icon === undefined ? (userNodata['icon'] = defaultNoData.icon) : '';
      //console.log('userNodata object ', userNodata);
    }
    return userNodata === undefined ? defaultNoData : userNodata;
  }
  /// Emit function when grid row is clicked
  async rowClick(event: RowClickedEvent) {
    const setEvent = new CustomEvent('em9-grid-row-click', {
      detail: event
    });
    this.dispatchEvent(setEvent);

    return waitForEvent(this, 'em9-grid-row-click');
  }
  /// Emit function when grid is ready
  async gridReady(event: GridReadyEvent) {
    this.loaded = true;
    this.gridApi = event.api;
    const setEvent = new CustomEvent('em9-grid-ready', {
      detail: event
    });
    this.dispatchEvent(setEvent);

    return waitForEvent(this, 'em9-grid-ready');
  }
  // Emit function when grid Column Resized
  async columnResized(event: ColumnResizedEvent) {
    const setEvent = new CustomEvent('em9-column-resize', {
      detail: event
    });
    this.dispatchEvent(setEvent);

    return waitForEvent(this, 'em9-column-resize');
  }
  // Emit function when grid row is selected
  async gridRowSelected(event: RowSelectedEvent) {
    const setEvent = new CustomEvent('em9-row-selected', {
      detail: event
    });
    this.dispatchEvent(setEvent);

    return waitForEvent(this, 'em9-row-selected');
  }
  // emit a function when grid is loading
  setLoading(loading: boolean) {
    this.dispatchEvent(new CustomEvent('loading', { detail: { value: loading } }));
  }
  sizeToFit() {
    this.gridOptions?.api.sizeColumnsToFit();
  }

  // Custom pagination Template
  paginationTemplate() {
    if (!this.paginationEnable) {
      return null;
    }
    if (this.currentPage === 0 || this.totalCount < 2) {
      return null;
    }
    return html`<div class="pagination-wrapper">
      <nav aria-label="pagination navigation" class="pagination-root">
        <ul class="pagination-ul">
          <li>
            ${this.hidePageRange
              ? html` <em9-tooltip content="Previous">
                  <em9-button
                    onlyicon
                    variant="secondary gray"
                    size="small"
                    class="pagination_item"
                    data-id="$prev"
                    @click="${this.gridApi ? () => this.onBtnPrev() : false}"
                    ?disabled="${this.currentPage === 1}"
                  >
                    <em9-icon name="outline-arrow-left"></em9-icon>
                  </em9-button>
                </em9-tooltip>`
              : html`<em9-button
                  variant="secondary gray"
                  size="small"
                  class="pagination_item"
                  data-id="$prev"
                  @click="${this.gridApi ? () => this.onBtnPrev() : false}"
                  ?disabled="${this.currentPage === 1}"
                >
                  <em9-icon slot="prefix" name="outline-arrow-left"></em9-icon>
                  Previous
                </em9-button>`}
          </li>
          ${this.hidePageRange
            ? html`<li class="page-summary">Page ${this.currentPage} of ${this.totalCount}</li>`
            : null}
          ${this.paginationRange()?.map(pageNumber => {
            if (pageNumber === this.DOTS) {
              return html`<em9-button
                variant="tertiary gray"
                size="medium"
                class="pagination_item pagination_item_range"
                aria-label="..."
                data-id="null"
                >&#8230;</em9-button
              > `;
            }
            return html`
              <li class=${classMap({ 'selected-page': pageNumber === this.currentPage })}>
                <em9-button
                  variant="tertiary gray"
                  size="medium"
                  class="pagination_item"
                  aria-label="Go to page ${pageNumber}"
                  data-id-range="$${pageNumber}"
                  @click="${this.gridApi ? () => this.onBtnGoToPage(Number(pageNumber)) : false}"
                >
                  ${pageNumber}
                </em9-button>
              </li>
            `;
          })}
          <li>
            ${this.hidePageRange
              ? html`
                  <em9-tooltip content="Next">
                    <em9-button
                      onlyicon
                      variant="secondary gray"
                      size="small"
                      class="pagination_item"
                      data-id="$next"
                      @click="${this.gridApi ? () => this.onBtnNext() : false}"
                      ?disabled="${Math.ceil(this.totalCount / this.pageSize) - this.currentPage === 0}"
                    >
                      <em9-icon name="outline-arrow-right-1"></em9-icon>
                    </em9-button>
                  </em9-tooltip>
                `
              : html` <em9-button
                  variant="secondary gray"
                  size="small"
                  class="pagination_item"
                  data-id="$next"
                  @click="${this.gridApi ? () => this.onBtnNext() : false}"
                  ?disabled="${Math.ceil(this.totalCount / this.pageSize) - this.currentPage === 0}"
                >
                  Next
                  <em9-icon slot="suffix" name="outline-arrow-right-1"></em9-icon>
                </em9-button>`}
          </li>
        </ul>
      </nav>
    </div>`;
  }
  // eslint-disable-next-line consistent-return
  paginationRange() {
    if (this.hidePageRange) {
      return null;
    }
    if (this.totalCount && this.pageSize) {
      const totalPageCount = Math.ceil(this.totalCount / this.pageSize);
      // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
      const totalPageNumbers = this.siblingCount + 5;

      /*
        If the number of pages is less than the page numbers we want to show in our
        paginationComponent, we return the range [1..totalPageCount]
      */
      if (totalPageNumbers >= totalPageCount) {
        return this.range(1, totalPageCount);
      }

      const leftSiblingIndex = Math.max(this.currentPage - this.siblingCount, 1);

      const rightSiblingIndex = Math.min(this.currentPage + this.siblingCount, totalPageCount);

      /*
        We do not want to show dots if there is only one position left
        after/before the left/right page count as that would lead to a change if our Pagination
        component size which we do not want
      */
      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

      const firstPageIndex = 1;
      const lastPageIndex = totalPageCount;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * this.siblingCount;
        const leftRange = this.range(1, leftItemCount);
        return [...leftRange, this.DOTS, totalPageCount];
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * this.siblingCount;
        const rightRange = this.range(totalPageCount - rightItemCount + 1, totalPageCount);
        return [firstPageIndex, this.DOTS, ...rightRange];
      }

      if (shouldShowLeftDots && shouldShowRightDots) {
        const middleRange = this.range(leftSiblingIndex, rightSiblingIndex);
        return [firstPageIndex, this.DOTS, ...middleRange, this.DOTS, lastPageIndex];
      }
    }
  }
  // pagination previous
  onBtnPrev() {
    if (this.gridApi) {
      this.gridApi.paginationGoToPreviousPage();
      this.currentPage--;
    }
  }
  // pagination next
  onBtnNext() {
    if (this.gridApi) {
      this.gridApi.paginationGoToNextPage();
      this.currentPage++;
    }
  }
  // pagination last
  onBtLast() {
    if (this.gridApi) {
      this.gridApi.paginationGoToLastPage();
    }
  }
  // pagination got to page #number
  onBtnGoToPage(page: number) {
    if (this.gridApi) {
      this.gridApi.paginationGoToPage(page - 1);
      this.currentPage = page;
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.clearSearch);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-data-table': em9DataTable;
  }
}
