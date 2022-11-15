import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    background-color: var(--em9-panel-background-color);
    border: solid var(--em9-panel-border-width) var(--em9-color-gray-100);
    // padding: var(--em9-spacing-4);
    border-radius: var(--em9-border-radius-large);
    font-family: var(--em9-font-sans);
    font-size: var(--em9-font-size-small);
    font-weight: var(--em9-font-weight-normal);
    line-height: 1.6;
    color: var(--em9-color-neutral-700);
    margin: inherit;
  }
  .alert:not(.alert--type-plain) {
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  }
  .alert:not(.alert--vertical){
    display: flex;
    align-items: stretch;
  }

  .alert.alert--type-notification {
    max-width:380px;
  }
  .alert:not(.alert--has-icon):not(.linear--alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button,
  .alert:not(.alert--has-avatar) .alert__avatar{
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content:center;
  }

  .alert:not(.alert--type-plain):not(.linear--alert--has-icon) .alert__icon{
    font-size: var(--em9-font-size-large);
    border-radius:var(--em9-border-radius-circle);
    height:var(--em9-spacing-10);
    width:var(--em9-spacing-10);
    border-width:var(--em9-spacing-1-5);
    border-style:solid;
  }

  .alert__avatar{
    display:flex;
  }

  .alert:not(.content-middle) .alert__avatar,.alert:not(.content-middle):not(.linear--alert--has-icon) .alert__icon{
    margin: var(--em9-spacing-4) 0 0 var(--em9-spacing-4);
  }

  .alert.content-middle .alert__icon, .alert.content-middle .alert__avatar{
    margin: 0 0 0 var(--em9-spacing-4);
    align-self: center;
  }
  .alert.alert--type-plain .alert__icon{
    height:var(--em9-spacing-6);
    width:var(--em9-spacing-6);
  }
  .alert__left_mg{
    width:80px;
  }

  .alert__links{
    padding-top:var(--em9-spacing-2);
  }

  .alert__link{
      font-weight: var(--em9-font-weight-semibold);
      font-size: var(--em9-font-size-small);
  }

  .alert__link:first-child{
    margin-right:10px;
  }

 a {
  text-decuration:none;
  }

.alert--type-alert.alert--default {
  border-color: var(--em9-color-gray-100);
  background-color:var(--em9-color-neutral-0);
  color:var(--em9-color-gray-500);
}

.alert--type-alert.alert--primary {
    border-color: var(--em9-color-primary-600);
    background-color:var(--em9-color-primary-50);
    color:var(--em9-color-primary-700);
  }

  .alert--primary.alert--type-notification .alert__icon {
    color: var(--em9-color-primary-600);
    background-color:var(--em9-color-primary-100);
    border-color:var(--em9-color-primary-50);
  }

  .alert--type-alert.alert--success {
    border-color: var(--em9-color-success-600);
    background-color:var(--em9-color-success-50);
    color:var(--em9-color-success-600);
  }

  .alert--success.alert--type-notification .alert__icon {
    color: var(--em9-color-success-600);
    background-color:var(--em9-color-success-100);
    border-color:var(--em9-color-success-50);
  }

  .alert--type-alert.alert--neutral {
    border-color: var(--em9-color-neutral-600);
    background-color:var(--em9-color-neutral-50);
    color:var(--em9-color-neutral-600);
  }

  .alert--neutral.alert--type-notification .alert__icon {
    color: var(--em9-color-neutral-600);
    background-color:var(--em9-color-neutral-100);
    border-color:var(--em9-color-neutral-50);
  }

  .alert--type-alert.alert--warning {
    border-color: var(--em9-color-warning-600);
    background-color:var(--em9-color-orange-100);
    color:var(--em9-color-warning-600);
  }

  .alert--warning.alert--type-notification .alert__icon {
    color: var(--em9-color-warning-600);
    background-color:var(--em9-color-orange-100);
    border-color:var(--em9-color-orange-50);
  }

  .alert--type-alert.alert--danger {
    border-color: var(--em9-color-danger-600);
    background-color:var(--em9-color-danger-50);
    color:var(--em9-color-danger-600);

  }

  .alert--danger.alert--type-notification .alert__icon {
    color: var(--em9-color-danger-600);
    background-color:var(--em9-color-danger-100);
    border-color:var(--em9-color-danger-50);
  }

  .alert__message {
    flex: 1 1;
    overflow: hidden;
  }

  .alert:not(.alert--vertical):not(.alert--type-plain) .alert__message{
    padding: var(--em9-spacing-4) var(--em9-spacing-5);
  }
  .alert.alert--type-plain:not(.alert--vertical) .alert__message{
    padding: var(--em9-spacing-4) var(--em9-spacing-3);
  }
  .alert.alert--vertical .alert__message{
    padding: var(--em9-spacing-3) var(--em9-spacing-5);
  }

  .alert__close-button {
    position:absolute;
    top:var(--em9-spacing-1-5);
    right:0;
    font-size: var(--em9-font-size-large);
  }


  /* Alerts Styles */
  .linear--alert {
    display: flex;
    flex-flow:row wrap;
    justify-content: start;
    align-items:center;
    border-radius: var(--em9-border-radius-large);
    padding: var(--em9-spacing-3) var(--em9-spacing-5);
    font-size: var(--em9-font-size-small);
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    max-width:350px;
  }
  .linear--alert--msg{
    font-weight: var(--em9-font-weight-semibold);
    // max-width:60%;
    // text-overflow-ellipses;
    // overflow:hidden;
    // white-space:nowrap;
  }
  .linear--alert--has-icon .alert__icon{
    margin-right:var(--em9-spacing-3-5);
  }
  .linear--alert .alert__close-button{
    top:0;
    height:34px;
    bottom:0;
    margin:auto;
  }
  .linear--alert .alert-title{
    margin-right:var(--em9-spacing-3);
    display: inline-flex;
    align-items:center;
    border-radius: var(--em9-border-radius-pill);
    padding:var(--em9-spacing-1);
    padding-right:var(--em9-spacing-4);
    font-size: var(--em9-font-size-small);
    font-weight: var(--em9-font-weight-semibold);
  }
  .linear--alert .linear--alert--msg{
    display: inline-block;
  }

.linear--alert.linear--alert--primary {
  background-color: var(--em9-color-primary-50);
}
.linear--alert.linear--alert--primary .linear--alert--msg, .linear--alert.linear--alert--primary .alert__icon{
  color:var(--em9-color-primary-600);
}



.linear--alert.linear--alert--success {
  background-color: var(--em9-color-success-50);
}
.linear--alert.linear--alert--success .linear--alert--msg, .linear--alert.linear--alert--success .alert__icon{
  color:var(--em9-color-success-600);
}



.linear--alert.linear--alert--warning {
  background-color: var(--em9-color-orange-50);
}
.linear--alert.linear--alert--warning .linear--alert--msg, .linear--alert.linear--alert--warning .alert__icon{
  color:var(--em9-color-warning-600);
}


.linear--alert.linear--alert--danger {
  background-color: var(--em9-color-danger-50);
}
.linear--alert.linear--alert--danger .linear--alert--msg, .linear--alert.linear--alert--danger .alert__icon{
  color:var(--em9-color-danger-600);
}
.linear--alert.linear--alert--neutral {
  background-color: var(--em9-color-neutral-50);
}
.linear--alert.linear--alert--neutral .linear--alert--msg, .linear--alert.linear--alert--neutral .alert__icon{
  color:var(--em9-color-neutral-600);
}











/* Plain Alerts Styles */



.alert--type-plain.alert--primary {
  border-color:var(--em9-color-primary-300);
  background-color: var(--em9-color-primary-25);
}
.alert--type-plain.alert--primary .alert-title{
  color: var(--em9-color-primary-800);
}
.alert--type-plain.alert--primary .alert__message, .alert--type-plain.alert--primary .alert__icon{
  color:var(--em9-color-primary-600);
}
.alert--type-plain.alert--primary  a{
  color: var(--em9-color-primary-700);
}
.alert--type-plain.alert--primary  a:hover:not(:disabled){
  color: var(--em9-color-primary-800);
}




.alert--type-plain.alert--success {
  border-color:var(--em9-color-success-300);
  background-color: var(--em9-color-success-25);
}
.alert--type-plain.alert--success .alert-title{
  color: var(--em9-color-success-800);
}
.alert--type-plain.alert--success .alert__message, .alert--type-plain.alert--success .alert__icon{
  color:var(--em9-color-success-600);
}
.alert--type-plain.alert--success  a{
  color: var(--em9-color-success-700);
}

.alert--type-plain.alert--success a:hover:not(:disabled){
  color: var(--em9-color-success-800);
}


.alert--type-plain.alert--warning {
  border-color:var(--em9-color-warning-300);
  background-color: var(--em9-color-orange-520;
}
.alert--type-plain.alert--warning .alert-title{
  color: var(--em9-color-warning-800);
}
.alert--type-plain.alert--warning .alert__message, .alert--type-plain.alert--warning .alert__icon{
  color:var(--em9-color-warning-600);
}
.alert--type-plain.alert--warning  a{
  color: var(--em9-color-warning-700);
}
.alert--type-plain.alert--warning  a:hover:not(:disabled){
  color: var(--em9-color-warning-800);
}



.alert--type-plain.alert--danger {
  border-color:var(--em9-color-danger-300);
  background-color: var(--em9-color-danger-25);
}
.alert--type-plain.alert--danger .alert-title{
  color: var(--em9-color-danger-800);
}
.alert--type-plain.alert--danger .alert__message, .alert--type-plain.alert--danger .alert__icon{
  color:var(--em9-color-danger-600);
}
.alert--type-plain.alert--danger  a{
  color: var(--em9-color-danger-700);
}
.alert--type-plain.alert--danger  a:hover:not(:disabled){
  color: var(--em9-color-danger-800);
}

.alert--type-plain.alert--neutral {
  border-color:var(--em9-color-neutral-300);
  background-color: var(--em9-color-neutral-25);
}
.alert--type-plain.alert--neutral .alert-title{
  color: var(--em9-color-neutral-800);
}
.alert--type-plain.alert--neutral .alert__message, .alert--type-plain.alert--neutral .alert__icon{
  color:var(--em9-color-neutral-600);
}
.alert--type-plain.alert--neutral  a{
  color: var(--em9-color-neutral-700);
}
.alert--type-plain.alert--neutral  a:hover:not(:disabled){
  color: var(--em9-color-neutral-800);
}
`;
