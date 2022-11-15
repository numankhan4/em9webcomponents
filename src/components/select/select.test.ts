import { expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type em9Select from './select';

describe('<em9-select>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<em9Select>(html`
      <em9-select>
        <em9-menu-item value="option-1">Option 1</em9-menu-item>
        <em9-menu-item value="option-2">Option 2</em9-menu-item>
        <em9-menu-item value="option-3">Option 3</em9-menu-item>
      </em9-select>
    `);
    await expect(el).to.be.accessible();
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<em9Select>(html`
      <em9-select disabled>
        <em9-menu-item value="option-1">Option 1</em9-menu-item>
        <em9-menu-item value="option-2">Option 2</em9-menu-item>
        <em9-menu-item value="option-3">Option 3</em9-menu-item>
      </em9-select>
    `);
    expect(el.dropdown.disabled).to.be.true;
    expect(el.control.tabIndex).to.equal(-1);
  });

  it('should focus the select when clicking on the label', async () => {
    const el = await fixture<em9Select>(html`
      <em9-select label="Select One">
        <em9-menu-item value="option-1">Option 1</em9-menu-item>
        <em9-menu-item value="option-2">Option 2</em9-menu-item>
        <em9-menu-item value="option-3">Option 3</em9-menu-item>
      </em9-select>
    `);
    const label = el.shadowRoot!.querySelector('[part="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('em9-focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  it('should emit em9-change when the value changes', async () => {
    const el = await fixture<em9Select>(html`
      <em9-select>
        <em9-menu-item value="option-1">Option 1</em9-menu-item>
        <em9-menu-item value="option-2">Option 2</em9-menu-item>
        <em9-menu-item value="option-3">Option 3</em9-menu-item>
      </em9-select>
    `);
    const changeHandler = sinon.spy();

    el.addEventListener('em9-change', changeHandler);
    el.value = 'option-2';
    await waitUntil(() => changeHandler.calledOnce);

    expect(changeHandler).to.have.been.calledOnce;
  });

  it('should open the menu when any letter key is pressed with em9-select is on focus', async () => {
    const el = await fixture<em9Select>(html`
      <em9-select>
        <em9-menu-item value="option-1">Option 1</em9-menu-item>
        <em9-menu-item value="option-2">Option 2</em9-menu-item>
        <em9-menu-item value="option-3">Option 3</em9-menu-item>
      </em9-select>
    `);
    const control = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__control')!;
    control.focus();
    await sendKeys({ press: 'r' });
    await el.updateComplete;

    expect(control.getAttribute('aria-expanded')).to.equal('true');
  });

  it('should not open the menu when ctrl + R is pressed with em9-select is on focus', async () => {
    const el = await fixture<em9Select>(html`
      <em9-select>
        <em9-menu-item value="option-1">Option 1</em9-menu-item>
        <em9-menu-item value="option-2">Option 2</em9-menu-item>
        <em9-menu-item value="option-3">Option 3</em9-menu-item>
      </em9-select>
    `);
    const control = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__control')!;
    control.focus();
    await sendKeys({ down: 'Control' });
    await sendKeys({ press: 'r' });
    await sendKeys({ up: 'Control' });
    await el.updateComplete;
    expect(control.getAttribute('aria-expanded')).to.equal('false');
  });

  it('should focus on the custom control when constraint validation occurs', async () => {
    const el = await fixture<HTMLFormElement>(html`
      <form>
        <em9-select required>
          <em9-menu-item value="option-1">Option 1</em9-menu-item>
          <em9-menu-item value="option-2">Option 2</em9-menu-item>
          <em9-menu-item value="option-3">Option 3</em9-menu-item>
        </em9-select>
      </form>
    `);
    const select = el.querySelector('em9-select')!;
    el.requestSubmit();

    expect(select.shadowRoot!.activeElement).to.equal(select.control);
  });

  it('should update the display label when a menu item changes', async () => {
    const el = await fixture<em9Select>(html`
      <em9-select value="option-1">
        <em9-menu-item value="option-1">Option 1</em9-menu-item>
        <em9-menu-item value="option-2">Option 2</em9-menu-item>
        <em9-menu-item value="option-3">Option 3</em9-menu-item>
      </em9-select>
    `);
    const displayLabel = el.shadowRoot!.querySelector('[part="display-label"]')!;
    const menuItem = el.querySelector('em9-menu-item')!;

    expect(displayLabel.textContent?.trim()).to.equal('Option 1');
    menuItem.textContent = 'updated';

    await oneEvent(el, 'em9-label-change');
    await el.updateComplete;

    expect(displayLabel.textContent?.trim()).to.equal('updated');
  });
});
