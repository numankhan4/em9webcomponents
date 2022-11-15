import { expect, fixture, html } from '@open-wc/testing';

describe('<em9-popup>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <em9-popup></em9-popup> `);

    expect(el).to.exist;
  });
});
