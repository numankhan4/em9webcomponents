import { expect, fixture, html } from '@open-wc/testing';

describe('<em9-data-table>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <em9-data-table></em9-data-table> `);

    expect(el).to.exist;
  });
});
