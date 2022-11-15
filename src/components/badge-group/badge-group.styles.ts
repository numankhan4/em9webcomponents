import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    --em9-rightbadgegroup-padding-right: 0;
  }

  .badge-group {
    margin-right: var(--em9-spacing-3);
    display: inline-flex;
    align-items: center;
    border-radius: var(--em9-spacing-1);
    padding: var(--em9-spacing-1);
    font-size: var(--em9-font-size-small);
    background-color: var(--em9-color-primary-100);
    mix-blend-mode: normal;
    line-height: var(--em9-line-height-denser);
  }
  .badge-group.badge-right {
    flex-flow: row-reverse;
  }
  .badge-group.badge-group-gray-lighter,
  .badge-group.badge-group-gray {
    background-color: var(--em9-color-gray-50);
    color: var(--em9-color-gray-700);
  }
  .badge-group.badge-group-gray-light {
    background-color: var(--em9-color-gray-100);
    color: var(--em9-color-gray-700);
  }
  .badge-group.badge-group-primary-light {
    background-color: var(--em9-color-primary-100);
    color: var(--em9-color-primary-700);
  }
  .badge-group.badge-group-primary-lighter,
  .badge-group.badge-group-primary {
    background-color: var(--em9-color-primary-50);
    color: var(--em9-color-primary-700);
  }

  .badge-group.badge-group-success-light {
    background-color: var(--em9-color-success-100);
    color: var(--em9-color-success-700);
  }
  .badge-group.badge-group-success-lighter,
  .badge-group.badge-group-success {
    background-color: var(--em9-color-success-50);
    color: var(--em9-color-success-700);
  }

  .badge-group.badge-group-warning-light {
    background-color: var(--em9-color-orange-100);
    color: var(--em9-color-warning-700);
  }
  .badge-group.badge-group-warning-lighter,
  .badge-group.badge-group-warning {
    background-color: var(--em9-color-orange-50);
    color: var(--em9-color-warning-700);
  }

  .badge-group.badge-group-danger-light {
    background-color: var(--em9-color-danger-100);
    color: var(--em9-color-danger-700);
  }
  .badge-group.badge-group-danger-lighter,
  .badge-group.badge-group-danger {
    background-color: var(--em9-color-danger-50);
    color: var(--em9-color-danger-700);
  }

  /*sizes*/
  :host([size='large']) .badge-title {
    font-weight: var(--em9-font-weight-light);
    padding: 0 var(--em9-spacing-2) 0 var(--em9-spacing-3);
  }
  :host([size='medium']) .badge-title {
    font-size: var(--em9-font-size-x-small);
    font-weight: var(--em9-font-weight-semibold);
    padding: 0px var(--em9-spacing-1-5);
  }

  /*bage right*/
  :host([size='medium']) .badge-right .badge-title {
    padding: 0 var(--em9-spacing-2);
  }
  :host([size='large']) .badge-right .badge-title {
    padding: 0 var(--em9-spacing-3-5) 0 var(--em9-spacing-2-5);
  }

  .badge-parent {
    line-height: var(-em9-line-height-denser);
  }

  .badge-group-icon {
    padding-right: var(--em9-spacing-1-5);
  }

  .badge-right .badge-group-icon {
    padding-right: var(--em9-rightbadgegroup-padding-right);
    padding-left: var(--em9-spacing-1-5);
  }
`;
