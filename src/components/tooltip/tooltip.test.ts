import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type em9Tooltip from './tooltip';

describe('<em9-tooltip>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<em9Tooltip>(html`
      <em9-tooltip content="This is a tooltip" open>
        <em9-button>Hover Me</em9-button>
      </em9-tooltip>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<em9Tooltip>(html`
      <em9-tooltip content="This is a tooltip">
        <em9-button>Hover Me</em9-button>
      </em9-tooltip>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.true;
  });

  it('should emit em9-show and em9-after-show when calling show()', async () => {
    const el = await fixture<em9Tooltip>(html`
      <em9-tooltip content="This is a tooltip">
        <em9-button>Hover Me</em9-button>
      </em9-tooltip>
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
    const el = await fixture<em9Tooltip>(html`
      <em9-tooltip content="This is a tooltip" open>
        <em9-button>Hover Me</em9-button>
      </em9-tooltip>
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
    const el = await fixture<em9Tooltip>(html`
      <em9-tooltip content="This is a tooltip">
        <em9-button>Hover Me</em9-button>
      </em9-tooltip>
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
    const el = await fixture<em9Tooltip>(html`
      <em9-tooltip content="This is a tooltip" open>
        <em9-button>Hover Me</em9-button>
      </em9-tooltip>
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

  it('should hide the tooltip when tooltip is visible and disabled becomes true', async () => {
    const el = await fixture<em9Tooltip>(html`
      <em9-tooltip content="This is a tooltip" open>
        <em9-button>Hover Me</em9-button>
      </em9-tooltip>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('em9-hide', hideHandler);
    el.addEventListener('em9-after-hide', afterHideHandler);
    el.disabled = true;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });
});
