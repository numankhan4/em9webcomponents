import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emit } from '../../internal/event';
import { watch } from '../../internal/watch';
import styles from './table.styles';

/**
 * @since 1.0
 * @status experimental
 *
 * @dependency em9-example
 *
 * @event em9-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('em9-table')
export default class em9Table extends LitElement {
  static styles = styles;

  /** An example property. */
  @property() headCells = ['1', '2', '3', '4'];
  @property() tableData = [
    ['q', 'b', 'c', 'd'],
    ['a', 'b', 'c', 'd'],
    ['a', 'b', 'c', 'd'],
    ['a', 'b', 'c', 'd']
  ];

  @watch('someProp')
  doSomething() {
    // Example event
    emit(this, 'em9-event-name');
  }
  arrangeHeader(arr: string[]) {
    return arr.map(e => html`<td class="headerCell">${e}</td>`);
  }
  arrangedata(arr: string[][]) {
    return arr.map(
      e =>
        html`<tr>
          ${e.map(j => html`<td>${j}</td>`)}
        </tr>`
    );
  }
  handleSearch() {
    const tempData = this.tableData;

    const rowIndex = tempData.findIndex(arr => arr.includes('a'));
    console.log(rowIndex);
  }
  render() {
    const tableHead = this.arrangeHeader(this.headCells);
    const tableData = this.arrangedata(this.tableData);
    this.handleSearch();
    return html`
      <table border="1" cellspacing="0" cellpadding="10" class="data-table">
        <thead>
          <tr>
            ${tableHead}
          </tr>
        </thead>
        <tbody>
          ${tableData}
        </tbody>
      </table>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-table': em9Table;
  }
}
