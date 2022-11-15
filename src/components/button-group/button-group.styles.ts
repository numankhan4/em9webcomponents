import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
  :host([tab])
  {padding:4px;
  background:var(--em9-color-gray-300);
  border:none;
  color:var(--em9-color-gray-600);
  border-radius:4px;
  }
  .button--tabGroup.button-group{gap:4px}

`;
