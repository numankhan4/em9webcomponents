import { expect, fixture, html } from '@open-wc/testing';

describe('<em9-semi-circle-progress-bar>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <em9-semi-circle-progress-bar></em9-semi-circle-progress-bar> `);

    expect(el).to.exist;
  });
});
