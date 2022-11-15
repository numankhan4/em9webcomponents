import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import type em9Switch from './switch';

describe('<em9-switch>', () => {
  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<em9Switch>(html` <em9-switch disabled></em9-switch> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;

    expect(input.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<em9Switch>(html` <em9-switch></em9-switch> `);

    expect(el.invalid).to.be.false;
  });

  it('should fire em9-change when clicked', async () => {
    const el = await fixture<em9Switch>(html` <em9-switch></em9-switch> `);
    setTimeout(() => el.shadowRoot!.querySelector('input')!.click());
    const event = (await oneEvent(el, 'em9-change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire em9-change when toggled with spacebar', async () => {
    const el = await fixture<em9Switch>(html` <em9-switch></em9-switch> `);
    el.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = (await oneEvent(el, 'em9-change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire em9-change when toggled with the right arrow', async () => {
    const el = await fixture<em9Switch>(html` <em9-switch></em9-switch> `);
    el.focus();
    setTimeout(() => sendKeys({ press: 'ArrowRight' }));
    const event = (await oneEvent(el, 'em9-change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire em9-change when toggled with the left arrow', async () => {
    const el = await fixture<em9Switch>(html` <em9-switch checked></em9-switch> `);
    el.focus();
    setTimeout(() => sendKeys({ press: 'ArrowLeft' }));
    const event = (await oneEvent(el, 'em9-change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.false;
  });

  it('should not fire em9-change when checked is set by javascript', async () => {
    const el = await fixture<em9Switch>(html` <em9-switch></em9-switch> `);
    el.addEventListener('em9-change', () => expect.fail('event fired'));
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });
});
