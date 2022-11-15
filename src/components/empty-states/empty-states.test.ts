import { expect, fixture, html } from '@open-wc/testing';

describe('<em9-empty-states>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <em9-empty-states></em9-empty-states> `);

    expect(el).to.exist;
  });
});
