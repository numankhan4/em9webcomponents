import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import type em9Divider from './divider';

describe('<em9-divider>', () => {
  describe('defaults ', () => {
    it('passes accessibility test', async () => {
      const el = await fixture<em9Divider>(html` <em9-divider></em9-divider> `);
      await expect(el).to.be.accessible();
    });

    it('default properties', async () => {
      const el = await fixture<em9Divider>(html` <em9-divider></em9-divider> `);

      expect(el.vertical).to.be.false;
      expect(el.getAttribute('role')).to.equal('separator');
      expect(el.getAttribute('aria-orientation')).to.equal('horizontal');
    });
  });

  describe('vertical property change ', () => {
    it('aria-orientation is updated', async () => {
      const el = await fixture<em9Divider>(html` <em9-divider></em9-divider> `);

      el.vertical = true;
      await elementUpdated(el);

      expect(el.getAttribute('aria-orientation')).to.equal('vertical');
    });
  });
});
