import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import { serialize } from '../../utilities/form';
import type em9Input from './input';

describe('<em9-input>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<em9Input>(html` <em9-input label="Name"></em9-input> `);
    await expect(el).to.be.accessible();
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<em9Input>(html` <em9-input disabled></em9-input> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part="input"]')!;

    expect(input.disabled).to.be.true;
  });

  // describe('value methods', () => {
  //   it('should set the value as a date when using valueAsDate', async () => {
  //     const el = await fixture<em9Input>(html` <em9-input type="date"></em9-input> `);
  //     const today = new Date();

  //     el.valueAsDate = today;

  //     expect(el.value).to.equal(today.toISOString().split('T')[0]);
  //   });

  //   it('should set the value as a number when using valueAsNumber', async () => {
  //     const el = await fixture<em9Input>(html` <em9-input type="number"></em9-input> `);
  //     const num = 12345;

  //     el.valueAsNumber = num;

  //     expect(el.value).to.equal(num.toString());
  //   });
  // });

  it('should focus the input when clicking on the label', async () => {
    const el = await fixture<em9Input>(html` <em9-input label="Name"></em9-input> `);
    const label = el.shadowRoot!.querySelector('[part="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('em9-focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<em9Input>(html` <em9-input></em9-input> `);
      expect(el.invalid).to.be.false;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<em9Input>(html` <em9-input required></em9-input> `);
      expect(el.reportValidity()).to.be.false;
      expect(el.invalid).to.be.true;
    });

    it('should be invalid when the pattern does not match', async () => {
      const el = await fixture<em9Input>(html` <em9-input pattern="^test" value="fail"></em9-input> `);
      expect(el.invalid).to.be.true;
      expect(el.reportValidity()).to.be.false;
    });

    it('should be invalid when required and disabled is removed', async () => {
      const el = await fixture<em9Input>(html` <em9-input disabled required></em9-input> `);
      el.disabled = false;
      await el.updateComplete;
      expect(el.invalid).to.be.true;
    });
  });

  describe('when serializing', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><em9-input name="a" value="1"></em9-input></form> `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('1');
    });

    it('should serialize its name and value with JSON', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><em9-input name="a" value="1"></em9-input></form> `);
      const json = serialize(form);
      expect(json.a).to.equal('1');
    });
  });

  describe('when submitting a form', () => {
    it('should submit the form when pressing enter in a form without a submit button', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><em9-input></em9-input></form> `);
      const input = form.querySelector('em9-input')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

      form.addEventListener('submit', submitHandler);
      input.focus();
      await sendKeys({ press: 'Enter' });
      await waitUntil(() => submitHandler.calledOnce);

      expect(submitHandler).to.have.been.calledOnce;
    });

    it('should prevent submission when pressing enter in an input and canceling the keydown event', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><em9-input></em9-input></form> `);
      const input = form.querySelector('em9-input')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
      const keydownHandler = sinon.spy((event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
      });

      form.addEventListener('submit', submitHandler);
      input.addEventListener('keydown', keydownHandler);
      input.focus();
      await sendKeys({ press: 'Enter' });
      await waitUntil(() => keydownHandler.calledOnce);

      expect(keydownHandler).to.have.been.calledOnce;
      expect(submitHandler).to.not.have.been.called;
    });
  });

  describe('when calling HTMLFormElement.reportValidity()', () => {
    it('should be invalid when the input is empty and form.reportValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <em9-input required value=""></em9-input>
          <em9-button type="submit">Submit</em9-button>
        </form>
      `);

      expect(form.reportValidity()).to.be.false;
    });

    it('should be valid when the input is empty, reportValidity() is called, and the form has novalidate', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <em9-input required value=""></em9-input>
          <em9-button type="submit">Submit</em9-button>
        </form>
      `);

      expect(form.reportValidity()).to.be.true;
    });

    it('should be invalid when a native input is empty and form.reportValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <input required value=""></input>
          <em9-button type="submit">Submit</em9-button>
        </form>
      `);

      expect(form.reportValidity()).to.be.false;
    });
  });
});
