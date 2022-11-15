import { expect, fixture, html } from '@open-wc/testing';

describe('<em9-animated-image>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <em9-animated-image></em9-animated-image> `);

    expect(el).to.exist;
  });
});
