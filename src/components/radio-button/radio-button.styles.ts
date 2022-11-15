import { css } from 'lit';
import buttonStyles from '../button/button.styles';

export default css`
  ${buttonStyles}
  label {
    display: inline-block;
    position: relative;
  }
  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }

  .button--small {
    font-size: var(--em9-font-size-text-sm);
    min-height: var(--em9-spacing-9);
    line-height: calc(var(--em9-spacing-9) - var(--em9-input-border-width) * 2);
    padding: 0 var(--em9-spacing-3-5);
  }
  .button--medium {
    font-size: var(--em9-font-size-text-sm);
    min-height: var(--em9-spacing-10);
    padding: 0 var(--em9-spacing-4);
  }
  .button--large {
    font-size: var(--em9-font-size-text-md);
    min-height: var(--em9-spacing-11);
    padding: 0 var(--em9-spacing-4-5);
  }
  :host([size='medium']) [part='base'],
  :host([size='small']) [part='base'],
  :host([size='large']) [part='base'] {
    padding: 0;
  }
  .button--pill.button--small {
    border-radius: var(--em9-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--em9-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--em9-input-height-large);
  }
  :host(.em9-button-group__button--inner) .button {
    border-radius: 0px;
  }
`;
