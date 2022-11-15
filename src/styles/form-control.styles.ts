import { css } from 'lit';

export default css`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--em9-input-label-color);
    margin-bottom: var(--em9-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--em9-input-label-font-size-small);
    line-height: var(--em9-line-height-20);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--em9-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--em9-input-label-font-size-large);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--em9-input-help-text-color);
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--em9-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--em9-input-help-text-font-size-small);
    line-height: var(--em9-line-height-18);
    margin-block-start: var(--em9-spacing-1-5);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--em9-input-help-text-font-size-medium);
    line-height: var(--em9-line-height-26);
    margin-block-start: var(--em9-spacing-1-5);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--em9-input-help-text-font-size-large);
    line-height: var(--em9-line-height-24);
    margin-block-start: var(--em9-spacing-1-5);
  }
  .form-control__help-text.form-control__help-text-invalid{
    color:var(--em9-color-danger-500);
  }
  .form-control__label [part="required"] {
    color:var(--em9-color-danger-500);
    width: 4px;
    margin-inline-start: 2px;
  }
`;
