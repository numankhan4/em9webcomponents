import { expect, fixture, html } from '@open-wc/testing';

describe('<em9-table>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <em9-table></em9-table> `);

    expect(el).to.exist;
  });
});
