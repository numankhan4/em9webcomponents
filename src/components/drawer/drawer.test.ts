// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type em9Drawer from './drawer';

describe('<em9-drawer>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<em9Drawer>(html`
      <em9-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</em9-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<em9Drawer>(
      html` <em9-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</em9-drawer> `
    );
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.true;
  });

  it('should emit em9-show and em9-after-show when calling show()', async () => {
    const el = await fixture<em9Drawer>(html`
      <em9-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</em9-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('em9-show', showHandler);
    el.addEventListener('em9-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit em9-hide and em9-after-hide when calling hide()', async () => {
    const el = await fixture<em9Drawer>(html`
      <em9-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</em9-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('em9-hide', hideHandler);
    el.addEventListener('em9-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should emit em9-show and em9-after-show when setting open = true', async () => {
    const el = await fixture<em9Drawer>(html`
      <em9-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</em9-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('em9-show', showHandler);
    el.addEventListener('em9-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit em9-hide and em9-after-hide when setting open = false', async () => {
    const el = await fixture<em9Drawer>(html`
      <em9-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</em9-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('em9-hide', hideHandler);
    el.addEventListener('em9-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should not close when em9-request-close is prevented', async () => {
    const el = await fixture<em9Drawer>(html`
      <em9-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</em9-drawer>
    `);
    const overlay = el.shadowRoot!.querySelector<HTMLElement>('[part="overlay"]')!;

    el.addEventListener('em9-request-close', event => {
      event.preventDefault();
    });
    overlay.click();

    expect(el.open).to.be.true;
  });

  it('should allow initial focus to be set', async () => {
    const el = await fixture<em9Drawer>(html` <em9-drawer><input /></em9-drawer> `);
    const input = el.querySelector<HTMLInputElement>('input')!;
    const initialFocusHandler = sinon.spy((event: InputEvent) => {
      event.preventDefault();
      input.focus();
    });

    el.addEventListener('em9-initial-focus', initialFocusHandler);
    el.show();

    await waitUntil(() => initialFocusHandler.calledOnce);

    expect(initialFocusHandler).to.have.been.calledOnce;
    expect(document.activeElement).to.equal(input);
  });
});
