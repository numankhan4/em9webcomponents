import { expect, fixture, html } from '@open-wc/testing';

describe('<em9-badge-group>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <em9-badge-group></em9-badge-group> `);

    expect(el).to.exist;
  });
});
