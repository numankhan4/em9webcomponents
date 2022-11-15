import type { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';

export class CustomLoadingOverlay implements ICellRendererComp {
  eGui!: HTMLElement;

  init() {
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = `<em9-spinner style="font-size: 2rem;"></em9-spinner>`;
  }

  getGui() {
    return this.eGui;
  }

  refresh(params: ICellRendererParams): boolean {
    console.log('params', params);
    return false;
  }
}
