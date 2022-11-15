import { expect, fixture, html } from '@open-wc/testing';

describe('<em9-split-panel>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <em9-split-panel></em9-split-panel> `);

    expect(el).to.exist;
  });
});
