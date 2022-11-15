import { css } from 'lit';
//import { avatar } from 'src/react/avatar';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
    --em9-badge-left-icon-size: 12px;
    --em9-badge-border-color: transparent;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: solid 1px var(--em9-badge-border-color);
    border-radius: var(--em9-spacing-1);
    white-space: nowrap;
    user-select: none;
    cursor: inherit;
    line-height: var(--em9-line-height-denser);
    /*min-height: var(--em9-spacing-6);*/
    padding: var(--em9-spacing-1) var(--em9-spacing-2-5);
    font-size: var(--em9-font-size-small);
    font-weight: var(--em9-font-weight-normal);
  }
  :host [part='base'] {
    background: var(--em9-color-gray-100);
    border-color: var(--em9-color-gray-100);
    color: var(--em9-color-gray-700);
  }

  .badge.badge--medium {
    line-height: var(--em9-line-height-denser);
    padding: var(--em9-spacing-1) var(--em9-spacing-2-5);
    font-size: var(--em9-font-size-text-sm);
  }
  .badge.badge--small {
    line-height: var(--em9-line-height-denser);
    padding: var(--em9-spacing-1) var(--em9-spacing-2);
    font-size: var(--em9-font-size-x-small);
  }
  .badge.badge--large {
    line-height: var(--em9-line-height-denser);
    padding: var(--em9-spacing-1-5) var(--em9-spacing-3);
    font-size: var(--em9-font-size-text-sm);
  }

  .badge.badge--has--img.badge--small {
    padding: var(--em9-spacing-0-5) var(--em9-spacing-2) var(--em9-spacing-0-5) var(--em9-spacing-0-5);
  }
  .badge.badge--has--img.badge--medium {
    padding: var(--em9-spacing-1) var(--em9-spacing-2) var(--em9-spacing-1) var(--em9-spacing-1);
  }
  .badge.badge--has--img.badge--large {
    padding: var(--em9-spacing-1-5) var(--em9-spacing-2-5) var(--em9-spacing-1-5) var(--em9-spacing-1);
  }
  .badge.badge--has--img slot[name='prefix']::slotted(em9-avatar) {
    padding-right: var(--em9-spacing-1-5);
    --size: 16px;
  }
  .badge.badge--has--prefix--icon slot[name='prefix']::slotted(em9-icon) {
    padding-right: 4px;
  }
  .badge.badge--has--only--icon.badge--small {
    padding: 2px;
  }
  .badge.badge--has--only--icon.badge--medium {
    padding: 4px;
  }
  .badge.badge--has--only--icon.badge--large {
    padding: 6px;
  }
  .badge.badge--medium.badge--has--prefix--icon {
    padding: 4px 6px;
  }
  .badge.badge--small.badge--has--prefix--icon {
    padding: 4px 6px 4px 4px;
  }
  .badge.badge--large.badge--has--prefix--icon {
    padding: 6px 8px;
  }
  .badge.badge--has--suffix--icon slot[name='suffix']::slotted(em9-icon) {
    padding-left: 4px;
  }

  .badge.badge--medium.badge--has--suffix--icon {
    padding: 4px 5px 4px 8px;
  }
  .badge.badge--small.badge--has--suffix--icon {
    padding: 4px 6px;
  }
  .badge.badge--large.badge--has--suffix--icon {
    padding: 6px 10px;
  }
  /*.badge--icon {
    font-size: var(--em9-badge-left-icon-size);
    padding-right: var(--em9-spacing-1-5);
  }
  .badge.badge--has--img {
    padding: 0 var(--em9-spacing-2) 0 var(--em9-spacing-1);
  }
  .badge.badge--has--right--icon {
    padding-right: var(--em9-spacing-1-5);
  }

  .badge--img {
    margin-right: 6px;
    border-radius: var(--em9-border-radius-circle);
    font-size: var(--em9-font-size-medium);
  }
  .badge--right--icon {
    cursor: pointer;
    font-size: var(--em9-font-size-small);
    padding-left: var(--em9-spacing-1);
  }*/
  /* Pill modifier */
  .badge--pill {
    border-radius: var(--em9-border-radius-pill);
  }

  /* Circle modifier */
  .badge.badge--circle {
    border-radius: var(--em9-border-radius-circle);
    padding: 0;
  }

  .badge.badge--circle.badge--small {
    width: var(--em9-spacing-5-5);
    height: var(--em9-spacing-5-5);
    line-height: unset;
  }
  .badge.badge--circle.badge--medium {
    height: var(--em9-spacing-6);
    width: var(--em9-spacing-6);
    line-height: unset;
  }
  .badge.badge--circle.badge--large {
    width: var(--em9-spacing-7);
    height: var(--em9-spacing-7);
    line-height: 1;
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  :host([variant='primary']) .badge--pulse,
  :host([variant='light-primary']) .badge--pulse {
    --pulse-color: var(--em9-color-primary-600);
  }

  :host([variant='success']) .badge--pulse,
  :host([variant='light-success']) .badge--pulse {
    --pulse-color: var(--em9-color-success-600);
  }

  :host([variant='pink']) .badge--pulse,
  :host([variant='light-pink']) .badge--pulse {
    --pulse-color: var(--em9-color-pink-600);
  }

  :host([variant='warning']) .badge--pulse,
  :host([variant='light-warning']) .badge--pulse {
    --pulse-color: var(--em9-color-warning-600);
  }

  :host([variant='danger']) .badge--pulse,
  :host([variant='light-danger']) .badge--pulse {
    --pulse-color: var(--em9-color-danger-600);
  }
  :host([variant='primary']) .badge--pulse,
  :host([variant='light-primary']) .badge--pulse {
    --pulse-color: var(--em9-color-primary-600);
  }

  :host([variant='rose']) .badge--pulse,
  :host([variant='light-rose']) .badge--pulse {
    --pulse-color: var(--em9-color-rose-600);
  }

  :host([variant='indigo']) .badge--pulse,
  :host([variant='light-indigo']) .badge--pulse {
    --pulse-color: var(--em9-color-indigo-600);
  }

  :host([variant='purple']) .badge--pulse,
  :host([variant='light-purple']) .badge--pulse {
    --pulse-color: var(--em9-color-purple-600);
  }

  :host([variant='gray-blue']) .badge--pulse,
  :host([variant='light-gray-blue']) .badge--pulse {
    --pulse-color: var(--em9-color-gray-blue-600);
  }
  :host([variant='rose']) .badge--pulse,
  :host([variant='light-rose']) .badge--pulse {
    --pulse-color: var(--em9-color-rose-600);
  }

  :host([variant='orange']) .badge--pulse,
  :host([variant='orange']) .badge--pulse {
    --pulse-color: var(--em9-color-orange-600);
  }

  :host([variant='blue']) .badge--pulse,
  :host([variant='light-blue']) .badge--pulse {
    --pulse-color: var(--em9-color-purple-600);
  }

  :host([variant='lighter-blue']) .badge--pulse {
    --pulse-color: var(--em9-color-blue-light-600);
  }
  :host([variant='light-gray']) .badge--pulse {
    --pulse-color: var(--em9-color-gray-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
  :host([variant='lighter-success']) [part='base'] {
    background: var(--em9-color-neutral-0);
    border-color: var(--em9-color-neutral-0);
    color: var(--em9-color-success-700);
  }
  :host([variant='lighter-warning']) [part='base'] {
    background: var(--em9-color-neutral-0);
    border-color: var(--em9-color-neutral-0);
    color: var(--em9-color-warning-700);
  }

  :host([variant='lighter-danger']) [part='base'] {
    background: var(--em9-color-neutral-0);
    border-color: var(--em9-color-neutral-0);
    color: var(--em9-color-danger-700);
  }
  :host([variant='lighter-primary']) [part='base'] {
    background: var(--em9-color-neutral-0);
    border-color: var(--em9-color-neutral-0);
    color: var(--em9-color-primary-700);
  }
  :host([variant='lighter-gray']) [part='base'] {
    background: var(--em9-color-neutral-0);
    border-color: var(--em9-color-neutral-0);
    color: var(--em9-color-gray-700);
  }
  :host([variant='gray']) [part='base'] {
    background: var(--em9-color-gray-700);
    border-color: var(--em9-color-gray-700);
    color: var(--em9-color-neutral-0);
  }
  :host([variant='danger']) [part='base'] {
    background: var(--em9-color-danger-500);
    border-color: var(--em9-color-danger-500);
    color: var(--em9-color-neutral-0);
  }

  :host([variant='warning']) [part='base'] {
    background: var(--em9-color-warning-500);
    border-color: var(--em9-color-warning-500);
    color: var(--em9-color-neutral-0);
  }
  :host([variant='success']) [part='base'] {
    background: var(--em9-color-success-500);
    border-color: var(--em9-color-success-500);
    color: var(--em9-color-neutral-0);
  }
  :host([variant='gray-blue']) [part='base'] {
    background: var(--em9-color-gray-blue-500);
    border-color: var(--em9-color-gray-blue-500);
    color: var(--em9-color-neutral-0);
  }
  :host([variant='blue']) [part='base'] {
    background: var(--em9-color-blue-600);
    border-color: var(--em9-color-blue-600);
    color: var(--em9-color-neutral-0);
  }
  :host([variant='purple']) [part='base'] {
    background: var(--em9-color-purple-500);
    border-color: var(--em9-color-purple-500);
    color: var(--em9-color-neutral-0);
  }

  :host([variant='primary']) [part='base'] {
    background: var(--em9-color-primary-500);
    border-color: var(--em9-color-primary-500);
    color: var(--em9-color-neutral-0);
  }
  :host([variant='indigo']) [part='base'] {
    background: var(--em9-color-indigo-500);
    border-color: var(--em9-color-indigo-500);
    color: var(--em9-color-neutral-0);
  }
  :host([variant='pink']) [part='base'] {
    background: var(--em9-color-pink-500);
    border-color: var(--em9-color-pink-500);
    color: var(--em9-color-neutral-0);
  }
  :host([variant='rose']) [part='base'] {
    background: var(--em9-color-rose-500);
    border-color: var(--em9-color-rose-500);
    color: var(--em9-color-neutral-0);
  }
  :host([variant='orange']) [part='base'] {
    background: var(--em9-color-orange-500);
    border-color: var(--em9-color-orange-500);
    color: var(--em9-color-neutral-0);
  }

  :host([variant='light-gray']) [part='base'] {
    background: var(--em9-color-gray-100);
    border-color: var(--em9-color-gray-100);
    color: var(--em9-color-gray-700);
  }

  :host([variant='light-primary']) [part='base'] {
    background: var(--em9-color-primary-50);
    border-color: var(--em9-color-primary-50);
    color: var(--em9-color-primary-700);
  }
  :host([variant='light-danger']) [part='base'] {
    background: var(--em9-color-danger-50);
    border-color: var(--em9-color-danger-50);
    color: var(--em9-color-danger-700);
  }
  :host([variant='light-warning']) [part='base'] {
    background: var(--em9-color-warning-50);
    border-color: var(--em9-color-warning-50);
    color: var(--em9-color-warning-600);
  }
  :host([variant='light-success']) [part='base'] {
    background: var(--em9-color-success-50);
    border-color: var(--em9-color-success-50);
    color: var(--em9-color-success-700);
  }
  :host([variant='light-gray-blue']) [part='base'] {
    background: var(--em9-color-gray-blue-50);
    border-color: var(--em9-color-gray-blue-50);
    color: var(--em9-color-gray-blue-700);
  }
  :host([variant='lighter-blue']) [part='base'] {
    background: var(--em9-color-blue-light-50);
    border-color: var(--em9-color-blue-light-50);
    color: var(--em9-color-blue-light-700);
  }
  :host([variant='light-blue']) [part='base'] {
    background: var(--em9-color-blue-50);
    border-color: var(--em9-color-blue-50);
    color: var(--em9-color-blue-700);
  }
  :host([variant='light-indigo']) [part='base'] {
    background: var(--em9-color-indigo-50);
    border-color: var(--em9-color-indigo-50);
    color: var(--em9-color-indigo-700);
  }
  :host([variant='light-purple']) [part='base'] {
    background: var(--em9-color-purple-50);
    border-color: var(--em9-color-purple-50);
    color: var(--em9-color-purple-700);
  }
  :host([variant='light-pink']) [part='base'] {
    background: var(--em9-color-pink-50);
    border-color: var(--em9-color-pink-50);
    color: var(--em9-color-pink-700);
  }
  :host([variant='light-rose']) [part='base'] {
    background: var(--em9-color-rose-50);
    border-color: var(--em9-color-rose-50);
    color: var(--em9-color-rose-700);
  }
  :host([variant='light-orange']) [part='base'] {
    background: var(--em9-color-orange-50);
    border-color: var(--em9-color-orange-50);
    color: var(--em9-color-orange-600);
  }
  /*outline light variants*/
  :host([variant='light-gray'][outline]) [part='base'] {
    border-color: var(--em9-color-gray-700);
    color: var(--em9-color-gray-900);
  }

  :host([variant='light-primary'][outline]) [part='base'] {
    border-color: var(--em9-color-primary-700);
    color: var(--em9-color-gray-900);
  }
  :host([variant='light-danger'][outline]) [part='base'] {
    border-color: var(--em9-color-danger-700);
    color: var(--em9-color-gray-900);
  }
  :host([variant='light-warning'][outline]) [part='base'] {
    border-color: var(--em9-color-warning-700);
    color: var(--em9-color-gray-900);
  }
  :host([variant='light-success'][outline]) [part='base'] {
    border-color: var(--em9-color-success-700);
    color: var(--em9-color-gray-900);
  }
  :host([variant='light-gray-blue'][outline]) [part='base'] {
    border-color: var(--em9-color-gray-blue-700);
    color: var(--em9-color-gray-900);
  }
  :host([variant='lighter-blue'][outline]) [part='base'] {
    border-color: var(--em9-color-blue-light-700);
    color: var(--em9-color-gray-900);
  }
  :host([variant='light-blue'][outline]) [part='base'] {
    border-color: var(--em9-color-blue-700);
    color: var(--em9-color-gray-900);
  }
  :host([variant='light-indigo'][outline]) [part='base'] {
    border-color: var(--em9-color-indigo-700);
    color: var(--em9-color-gray-900);
  }
  :host([variant='light-purple'][outline]) [part='base'] {
    border-color: var(--em9-color-purple-700);
    color: var(--em9-color-gray-900);
  }
  :host([variant='light-pink'][outline]) [part='base'] {
    border-color: var(--em9-color-pink-700);
    color: var(--em9-color-gray-900);
  }
  :host([variant='light-rose'][outline]) [part='base'] {
    border-color: var(--em9-color-rose-700);
    color: var(--em9-color-gray-900);
  }
  :host([variant='light-orange'][outline]) [part='base'] {
    border-color: var(--em9-color-orange-700);
    color: var(--em9-color-gray-900);
  }
  /*outline light variants*/
  :host([variant='light-gray'][outline]) [part='base'] .badge--icon--common,
  :host([variant='light-gray'][outline]) [part='base'] ::slotted(.badge--icon--common) {
    color: var(--em9-color-gray-700);
  }

  :host([variant='light-primary'][outline]) [part='base'] .badge--icon--common,
  :host([variant='light-primary'][outline]) [part='base'] ::slotted(.badge--icon--common) {
    color: var(--em9-color-primary-700);
  }
  :host([variant='light-danger'][outline]) [part='base'] .badge--icon--common,
  :host([variant='light-danger'][outline]) [part='base'] ::slotted(.badge--icon--common) {
    color: var(--em9-color-danger-700);
  }
  :host([variant='light-warning'][outline]) [part='base'] .badge--icon--common,
  :host([variant='light-warning'][outline]) [part='base'] ::slotted(.badge--icon--common) {
    color: var(--em9-color-warning-700);
  }
  :host([variant='light-success'][outline]) [part='base'] .badge--icon--common,
  :host([variant='light-success'][outline]) [part='base'] ::slotted(.badge--icon--common) {
    color: var(--em9-color-success-700);
  }
  :host([variant='light-gray-blue'][outline]) [part='base'] .badge--icon--common,
  :host([variant='light-gray-blue'][outline]) [part='base'] ::slotted(.badge--icon--common) {
    color: var(--em9-color-gray-blue-700);
  }
  :host([variant='lighter-blue'][outline]) [part='base'] .badge--icon--common,
  :host([variant='lighter-blue'][outline]) [part='base'] ::slotted(.badge--icon--common) {
    color: var(--em9-color-blue-light-700);
  }
  :host([variant='light-blue'][outline]) [part='base'] .badge--icon--common,
  :host([variant='light-blue'][outline]) [part='base'] ::slotted(.badge--icon--common) {
    color: var(--em9-color-blue-700);
  }
  :host([variant='light-indigo'][outline]) [part='base'] .badge--icon--common,
  :host([variant='light-indigo'][outline]) [part='base'] ::slotted(.badge--icon--common) {
    color: var(--em9-color-indigo-700);
  }
  :host([variant='light-purple'][outline]) [part='base'] .badge--icon--common,
  :host([variant='light-purple'][outline]) [part='base'] ::slotted(.badge--icon--common) {
    color: var(--em9-color-purple-700);
  }
  :host([variant='light-pink'][outline]) [part='base'] .badge--icon--common,
  :host([variant='light-pink'][outline]) [part='base'] ::slotted(.badge--icon--common) {
    color: var(--em9-color-pink-700);
  }
  :host([variant='light-rose'][outline]) [part='base'] .badge--icon--common,
  :host([variant='light-rose'][outline]) [part='base'] ::slotted(.badge--icon--common) {
    color: var(--em9-color-rose-700);
  }
  :host([variant='light-orange'][outline]) [part='base'] .badge--icon--common,
  :host([variant='light-orange'][outline]) [part='base'] ::slotted(.badge--icon--common) {
    color: var(--em9-color-orange-700);
  }
`;
