import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
    align-items: center;
    --size: 2.5rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-width: var(--size);
    min-height: var(--size);
    background-color: var(--em9-color-neutral-400);
    font-family: var(--em9-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--em9-font-weight-normal);
    color: var(--em9-color-neutral-0);
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--em9-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--em9-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  [part="detail"] {
    font-family: var(--em9-font-sans);
    margin-left: calc(var(--size) * 0.3);
  }

  [part="name"] {
    color: var(--em9-color-gray-700);
    font-weight: var(--em9-font-weight-600);
    font-size: calc(var(--size) * 0.35);
    line-height: calc(var(--size) * 0.5);
  }

  [part="info"] {
    font-size: calc(var(--size) * 0.3);
    color: var(--em9-color-gray-600);
    font-weight: var(--em9-font-weight-normal);
    line-height: calc(var(--size) * 0.45);
  }
  // style an slot with host
  [part="status"]{
    z-index: 6;
  }
`;
