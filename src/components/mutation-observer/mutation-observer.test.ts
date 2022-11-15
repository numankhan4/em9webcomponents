import { expect, fixture, html } from '@open-wc/testing';

describe('<em9-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <em9-mutation-observer></em9-mutation-observer> `);

    expect(el).to.exist;
  });
});
