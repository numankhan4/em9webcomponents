import { expect, fixture, html } from '@open-wc/testing';
import type em9Breadcrumb from './breadcrumb';

describe('<em9-breadcrumb>', () => {
  let el: em9Breadcrumb;

  describe('when provided a standard list of el-breadcrumb-item children and no parameters', () => {
    before(async () => {
      el = await fixture<em9Breadcrumb>(html`
        <em9-breadcrumb>
          <em9-breadcrumb-item>Catalog</em9-breadcrumb-item>
          <em9-breadcrumb-item>Clothing</em9-breadcrumb-item>
          <em9-breadcrumb-item>Women's</em9-breadcrumb-item>
          <em9-breadcrumb-item>Shirts &amp; Tops</em9-breadcrumb-item>
        </em9-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should render em9-icon as separator', () => {
      expect(el.querySelectorAll('em9-icon').length).to.eq(4);
    });

    it('should attach aria-current "page" on the last breadcrumb item.', () => {
      const breadcrumbItems = el.querySelectorAll('em9-breadcrumb-item');
      const lastNode = breadcrumbItems[3];
      expect(lastNode).attribute('aria-current', 'page');
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "separator" to support Custom Separators', () => {
    before(async () => {
      el = await fixture<em9Breadcrumb>(html`
        <em9-breadcrumb>
          <span class="replacement-separator" slot="separator">/</span>
          <em9-breadcrumb-item>First</em9-breadcrumb-item>
          <em9-breadcrumb-item>Second</em9-breadcrumb-item>
          <em9-breadcrumb-item>Third</em9-breadcrumb-item>
        </em9-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should accept "separator" as an assigned child in the shadow root', () => {
      const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name=separator]')!;
      const childNodes = slot.assignedNodes({ flatten: true });

      expect(childNodes.length).to.eq(1);
    });

    it('should replace the em9-icon separator with the provided separator', () => {
      expect(el.querySelectorAll('.replacement-separator').length).to.eq(4);
      expect(el.querySelectorAll('em9-icon').length).to.eq(0);
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "prefix" to support prefix icons', () => {
    before(async () => {
      el = await fixture<em9Breadcrumb>(html`
        <em9-breadcrumb>
          <em9-breadcrumb-item>
            <span class="prefix-example" slot="prefix">/</span>
            Home
          </em9-breadcrumb-item>
          <em9-breadcrumb-item>First</em9-breadcrumb-item>
          <em9-breadcrumb-item>Second</em9-breadcrumb-item>
          <em9-breadcrumb-item>Third</em9-breadcrumb-item>
        </em9-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "suffix" to support suffix icons', () => {
    before(async () => {
      el = await fixture<em9Breadcrumb>(html`
        <em9-breadcrumb>
          <em9-breadcrumb-item>First</em9-breadcrumb-item>
          <em9-breadcrumb-item>Second</em9-breadcrumb-item>
          <em9-breadcrumb-item>Third</em9-breadcrumb-item>
          <em9-breadcrumb-item>
            <span class="prefix-example" slot="suffix">/</span>
            Security
          </em9-breadcrumb-item>
        </em9-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });
  });
});
