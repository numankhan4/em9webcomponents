import { ifDefined } from 'lit/directives/if-defined.js';
import type { noDataType } from './data-table-types';
import type { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export class CustomNoRowsOverlay implements ICellRendererComp {
  eGui!: HTMLElement;
  //overlayGridApi: GridApi;
  init(params: ICellRendererParams & { noRowsMessageFunc: () => string }) {
    const stringOfArray: string = params.noRowsMessageFunc();
    this.eGui = document.createElement('div');
    this.eGui.classList.add('nodata');
    if (stringOfArray !== 'No Error type define') {
      const noDataObj: noDataType = JSON.parse(stringOfArray) as noDataType;
      let description = noDataObj.description;
      if (noDataObj.type === 'noSearch') {
        description = description.replace('$filterText', `"${noDataObj.filterValue}"`);
      }
      const warning = noDataObj.type === 'noData' ? 'warning__icon' : '';
      this.eGui.innerHTML = `
            <div class="ag-overlay-loading-center">

                <div part="icon" class="nodata_table__icon ${warning}">
                  <em9-icon name=${noDataObj.icon}></em9-icon>
                </div>
                <h2 part="heading" class="nodata_table_heading">${noDataObj.heading}</h2>
                <p class="nodata_table_description" part="description">${description}</p>

              ${noDataObj.secondaryBtn !== undefined ? noDataObj.secondaryBtn : ''}${
        ifDefined(noDataObj.primaryBtn !== undefined) ? noDataObj.primaryBtn : ''
      }

            </div>
        `;
    } else {
      console.log(stringOfArray);
      this.eGui.innerHTML = `<i class="far fa-frown">${stringOfArray}</i>`;
    }
  }

  getGui() {
    return this.eGui;
  }

  refresh(params: ICellRendererParams): boolean {
    console.log('params', params);

    return false;
  }
}
