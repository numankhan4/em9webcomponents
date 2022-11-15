import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu {
    background: var(--em9-panel-background-color);
    border: solid var(--em9-panel-border-width) var(--em9-panel-border-color);
    border-radius: var(--em9-border-radius-medium);
    background: var(--em9-panel-background-color);
    padding: var(--em9-spacing-x-small) 0;
  }

  ::slotted(em9-divider) {
    --spacing: var(--em9-spacing-x-small);
  }
`;
