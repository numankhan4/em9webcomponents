import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .radio-group {
    border: solid var(--em9-panel-border-width) var(--em9-panel-border-color);
    border-radius: var(--em9-border-radius-medium);
    padding: var(--em9-spacing-large);
    padding-top: var(--em9-spacing-x-small);
  }

  .radio-group .radio-group__label {
    font-family: var(--em9-input-font-family);
    font-size: var(--em9-input-font-size-medium);
    font-weight: var(--em9-input-font-weight);
    color: var(--em9-input-color);
    padding: 0 var(--em9-spacing-2x-small);
  }

  ::slotted(em9-radio) {
    display: block;
    margin-bottom: var(--em9-spacing-2);
  }

  .radio-group:not(.radio-group--has-fieldset) {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  .radio-group:not(.radio-group--has-fieldset) .radio-group__label {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }
`;
