import { expect, fixture, html } from '@open-wc/testing';

describe('<em9-tag-credit-card-input>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <em9-tag-credit-card-input></em9-tag-credit-card-input> `);

    expect(el).to.exist;
  });
});
