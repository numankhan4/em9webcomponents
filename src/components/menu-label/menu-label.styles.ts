import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu-label {
    font-family: var(--em9-font-sans);
    font-size: var(--em9-font-size-small);
    font-weight: var(--em9-font-weight-semibold);
    line-height: var(--em9-line-height-normal);
    letter-spacing: var(--em9-letter-spacing-normal);
    color: var(--em9-color-neutral-500);
    padding: var(--em9-spacing-2x-small) var(--em9-spacing-x-large);
    user-select: none;
  }
`;
