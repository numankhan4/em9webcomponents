import {css} from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
  }

  .autocomplete::part(panel) {
    overflow: hidden;
  }

  [part="404"] {
    font-family: var(--em9-font-sans);
    color: var(--em9-color-gray-700);
    font-weight: var(--em9-font-weight-400);
    font-size: var(--em9-font-size-small);
    line-height: var(--em9-spacing-large);
    text-align: center;
  }
`;
