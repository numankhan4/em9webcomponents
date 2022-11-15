import { expect, fixture, html } from '@open-wc/testing';
import type em9Spinner from './spinner';

describe('<em9-spinner>', () => {
  let el: em9Spinner;

  describe('when provided no parameters', () => {
    before(async () => {
      el = await fixture<em9Spinner>(html` <em9-spinner></em9-spinner> `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should have a role of "status".', () => {
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
      const base = el.shadowRoot!.querySelector('[part="base"]')!;
      expect(base).have.attribute('role', 'status');
    });
  });
});
