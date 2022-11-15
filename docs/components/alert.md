# Alert

[component-header:em9-alert]

Alerts are used to display important messages inline or as toast notifications.

```html preview
<em9-alert open>
  <em9-icon slot="icon" name="info-circle"></em9-icon>
  <strong>This is super informative</strong> <br />
  This is a standard alert. You can customize its content and even the icon.
</em9-alert>
```

```jsx react
import { em9Alert, em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Alert open>
    <em9Icon slot="icon" name="info-circle" />
    This is a standard alert. You can customize its content and even the icon.
  </em9Alert>
);
```

?> Alerts will not be visible if the `open` attribute is not present.

## Examples

```html preview
<em9-alert open>
  <em9-avatar
    slot="avatar"
    image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a gray tabby kitten looking down"
  ></em9-avatar>
  <strong>This is super informative</strong> <br />
  This is a standard alert. You can customize its content and even the icon.
  <a href="#" slot="link1" style="color:var(--em9-color-gray-500);text-decoration:none;">Dismiss</a>
  <a href="#" slot="link2" style="color:var(--em9-color-primary-700);text-decoration:none;">View changes</a>
</em9-alert>
<br />
<em9-alert open>
  <em9-avatar
    slot="avatar"
    image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a gray tabby kitten looking down"
  ></em9-avatar>
  <strong>This is super informative</strong> <br />
  This is a standard alert. You can customize its content and even the icon.
</em9-alert>

<br />
<em9-alert open iconCenter>
  <em9-avatar
    slot="avatar"
    image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a gray tabby kitten looking down"
  ></em9-avatar>
  <strong>This is super informative</strong>
</em9-alert>

<br />
<em9-alert open>
  <strong>This is super informative</strong>
</em9-alert>
```

```jsx react
import { em9Alert, em9Avatar } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Alert open>
      <em9Avatar
        slot="avatar"
        image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        label="Avatar of a gray tabby kitten looking down"
      ></em9Avatar>
      <strong>This is super informative</strong> <br />
      This is a standard alert. You can customize its content and even the icon.
      <a href="#" slot="link1" style="color:var(--em9-color-gray-500);text-decoration:none;">
        Dismiss
      </a>
      <a href="#" slot="link2" style="color:var(--em9-color-primary-700);text-decoration:none;">
        View changes
      </a>
    </em9Alert>
    <br />
    <em9Alert open>
      <em9Avatar
        slot="avatar"
        image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        label="Avatar of a gray tabby kitten looking down"
      ></em9Avatar>
      <strong>This is super informative</strong> <br />
      This is a standard alert. You can customize its content and even the icon.
    </em9Alert>

    <br />
    <em9Alert open iconCenter>
      <em9Avatar
        slot="avatar"
        image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        label="Avatar of a gray tabby kitten looking down"
      ></em9Avatar>
      <strong>This is super informative</strong>
    </em9Alert>

    <br />
    <em9Alert open>
      <strong>This is super informative</strong>
    </em9Alert>
  </>
);
```

### Variants Themes

```html preview
<em9-alert open variant="primary">
  <em9-icon slot="icon" name="info-circle"></em9-icon>
  <span slot="title">I'm Title</span>
  This is a standard alert. You can customize its content and even the icon.
</em9-alert>
```

```jsx react
import { em9Alert, em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
  <em9Alert open variant="primary">
    <em9Icon slot="icon" name="info-circle"></em9Icon>
    <span slot="title">I'm Title</span>
    This is a standard alert. You can customize its content and even the icon.
  </em9Alert>
);
```

## Image

```html preview
<em9-alert open leftImg="/assets/images/alert-left.png">
  <strong>This is super informative</strong> <br />
  This is a standard alert. You can customize its content and even the icon.
  <a href="#" slot="link1" style="color:var(--em9-color-gray-500);text-decoration:none;">Dismiss</a>
  <a href="#" slot="link2" style="color:var(--em9-color-primary-700);text-decoration:none;">View changes</a>
</em9-alert>

<br />

<em9-alert open leftImg="/assets/images/alert-left.png">
  <strong>This is super informative</strong> <br />
  This is a standard alert. You can customize its content and even the icon.
</em9-alert>
<br />

<em9-alert open leftImg="/assets/images/alert-left.png">
  <strong>This is super informative</strong>
</em9-alert>
```

```jsx react
import { em9Alert } from 'em9webcomponents/dist/react';
const App = () => (
  <>
    <em9Alert open leftImg="/assets/images/alert-left.png">
      <strong>This is super informative</strong> <br />
      This is a standard alert. You can customize its content and even the icon.
      <a href="#" slot="link1" style="color:var(--em9-color-gray-500);text-decoration:none;">
        Dismiss
      </a>
      <a href="#" slot="link2" style="color:var(--em9-color-primary-700);text-decoration:none;">
        View changes
      </a>
    </em9Alert>

    <br />

    <em9Alert open leftImg="/assets/images/alert-left.png">
      <strong>This is super informative</strong> <br />
      This is a standard alert. You can customize its content and even the icon.
    </em9Alert>
    <br />

    <em9Alert open leftImg="/assets/images/alert-left.png">
      <strong>This is super informative</strong>
    </em9Alert>
  </>
);
```

### Variants

Set the `variant` attribute to change the alert's variant.

```html preview
<em9-alert variant="primary" open>
  <em9-icon slot="icon" name="info-circle"></em9-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</em9-alert>

<br />

<em9-alert variant="success" open>
  <em9-icon slot="icon" name="check2-circle"></em9-icon>
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</em9-alert>

<br />

<em9-alert variant="neutral" open>
  <em9-icon slot="icon" name="gear"></em9-icon>
  <strong>Your settings have been updated</strong><br />
  Settings will take affect on next login.
</em9-alert>

<br />

<em9-alert variant="warning" open>
  <em9-icon slot="icon" name="exclamation-triangle"></em9-icon>
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</em9-alert>

<br />

<em9-alert variant="danger" open>
  <em9-icon slot="icon" name="exclamation-octagon"></em9-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</em9-alert>
```

```jsx react
import { em9Alert, em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Alert variant="primary" open>
      <em9Icon slot="icon" name="info-circle" />
      <strong>This is super informative</strong>
      <br />
      You can tell by how pretty the alert is.
    </em9Alert>

    <br />

    <em9Alert variant="success" open>
      <em9Icon slot="icon" name="check2-circle" />
      <strong>Your changes have been saved</strong>
      <br />
      You can safely exit the app now.
    </em9Alert>

    <br />

    <em9Alert variant="neutral" open>
      <em9Icon slot="icon" name="gear" />
      <strong>Your settings have been updated</strong>
      <br />
      Settings will take affect on next login.
    </em9Alert>

    <br />

    <em9Alert variant="warning" open>
      <em9Icon slot="icon" name="exclamation-triangle" />
      <strong>Your session has ended</strong>
      <br />
      Please login again to continue.
    </em9Alert>

    <br />

    <em9Alert variant="danger" open>
      <em9Icon slot="icon" name="exclamation-octagon" />
      <strong>Your account has been deleted</strong>
      <br />
      We're very sorry to see you go!
    </em9Alert>
  </>
);
```

### Vertical Designs

Set the `layout` attribute to change the alert's Layout.

```html preview
<em9-alert variant="primary" open layout="vertical">
  <em9-icon slot="icon" name="info-circle"></em9-icon>
  <strong>This is super informative</strong><br />
  Your team has made changes to your company profile since you last logged in.
  <a href="#" slot="link1" style="color:var(--em9-color-gray-500);text-decoration:none;">Dismiss</a>
  <a href="#" slot="link2" style="color:var(--em9-color-primary-700);text-decoration:none;">View changes</a>
</em9-alert>
<br />
<em9-alert variant="neutral" open layout="vertical">
  <em9-icon slot="icon" name="info-circle"></em9-icon>
  <strong>This is super informative</strong><br />
  Your team has made changes to your company profile since you last logged in.
</em9-alert>
<br />
<em9-alert variant="neutral" open layout="vertical">
  <em9-icon slot="icon" name="info-circle"></em9-icon>
  <strong>This is super informative</strong>
</em9-alert>
<br />
<em9-alert open layout="vertical">
  <em9-avatar
    slot="avatar"
    image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a gray tabby kitten looking down"
  ></em9-avatar>
  <strong>This is super informative</strong> <br />
  Your team has made changes to your company profile since you last logged in.
</em9-alert>

<br />
<em9-alert variant="primary" open layout="vertical" closable class="alert-closable">
  <strong>This is super informative</strong><br />
  Your team has made changes to your company profile since you last logged in.
  <img src="/assets/images/alert-img.png" />
  <a href="#" slot="link1" style="color:var(--em9-color-gray-500);text-decoration:none;">Dismiss</a>
  <a href="#" slot="link2" style="color:var(--em9-color-primary-700);text-decoration:none;">View changes</a>
</em9-alert>
<br />
<em9-alert variant="primary" open layout="vertical" closable class="alert-closable">
  <strong>This is super informative</strong><br />
  Your team has made changes to your company profile since you last logged in.
  <img src="/assets/images/alert-img.png" />
</em9-alert>
<br />
<em9-alert variant="primary" open layout="vertical" closable class="alert-closable">
  <strong>This is super informative</strong>
  <img src="/assets/images/alert-img.png" />
</em9-alert>
```

```jsx react
import { em9Alert, em9Icon , em9Avatar } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Alert variant="primary" open layout="vertical">
      <em9Icon slot="icon" name="info-circle"></em9-icon>
      <strong>This is super informative</strong><br />
      Your team has made changes to your company profile since you last logged in.
      <a href="#" slot="link1" style="color:var(--em9-color-gray-500);text-decoration:none;">Dismiss</a>
      <a href="#" slot="link2" style="color:var(--em9-color-primary-700);text-decoration:none;">View changes</a>
    </em9Alert>
    <br />
    <em9Alert variant="neutral" open layout="vertical">
      <em9Icon slot="icon" name="info-circle"></em9-icon>
      <strong>This is super informative</strong><br />
      Your team has made changes to your company profile since you last logged in.
    </em9Alert>
    <br />
    <em9Alert variant="neutral" open layout="vertical">
      <em9Icon slot="icon" name="info-circle"></em9-icon>
      <strong>This is super informative</strong>
    </em9Alert>
    <br />
    <em9Alert open layout="vertical">
      <em9Avatar
        slot="avatar"
        image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        label="Avatar of a gray tabby kitten looking down"
      ></em9Avatar>
      <strong>This is super informative</strong> <br />
      Your team has made changes to your company profile since you last logged in.
    </em9Alert>

    <br />
    <em9Alert variant="primary" open layout="vertical" closable class="alert-closable">
      <strong>This is super informative</strong><br />
      Your team has made changes to your company profile since you last logged in.
      <img src="/assets/images/alert-img.png" />
      <a href="#" slot="link1" style="color:var(--em9-color-gray-500);text-decoration:none;">Dismiss</a>
      <a href="#" slot="link2" style="color:var(--em9-color-primary-700);text-decoration:none;">View changes</a>
    </em9Alert>
    <br />
    <em9Alert variant="primary" open layout="vertical" closable class="alert-closable">
      <strong>This is super informative</strong><br />
      Your team has made changes to your company profile since you last logged in.
      <img src="/assets/images/alert-img.png" />
    </em9Alert>
    <br />
    <em9Alert variant="primary" open layout="vertical" closable class="alert-closable">
      <strong>This is super informative</strong>
      <img src="/assets/images/alert-img.png" />
    </em9Alert>
  </>
);
```

### Alert With Progress Bar

```html preview
<em9-alert variant="danger" open>
  <em9-icon slot="icon" name="exclamation-octagon"></em9-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!

  <div style="padding-top:var(--em9-spacing-4);">
    <em9-progress-bar value="60" valPosition="bottom"></em9-progress-bar>
  </div>
  <a href="#" style="color:var(--em9-gray-600);text-decuration:none;" slot="link1" class="no-underline text-gray"
    >Dismiss</a
  >
  <a href="#" style="text-decuration:none;" slot="link2" class="no-underline">View changes</a>
</em9-alert>
<br />
<em9-alert variant="success" open>
  <em9-icon slot="icon" name="exclamation-octagon"></em9-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
  <div style="padding-top:var(--em9-spacing-4);">
    <em9-progress-bar value="60" valPosition="bottom"></em9-progress-bar>
  </div>
</em9-alert>
<br />
<em9-alert variant="primary" open>
  <em9-icon slot="icon" name="exclamation-octagon"></em9-icon>
  <strong>Your account has been deleted</strong>
  <div style="padding-top:var(--em9-spacing-4);">
    <em9-progress-bar value="60" valPosition="bottom"></em9-progress-bar>
  </div>
</em9-alert>
```

```jsx react
import { em9Alert, em9Icon, em9ProgressBar } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Alert variant="danger" open>
      <em9Icon slot="icon" name="exclamation-octagon"></em9Icon>
      <strong>Your account has been deleted</strong>
      <br />
      We're very sorry to see you go!
      <div style="padding-top:var(--em9-spacing-4);">
        <em9ProgressBar value="60" valPosition="bottom"></em9ProgressBar>
      </div>
      <a href="#" style="color:var(--em9-gray-600);text-decuration:none;" slot="link1" class="no-underline text-gray">
        Dismiss
      </a>
      <a href="#" style="text-decuration:none;" slot="link2" class="no-underline">
        View changes
      </a>
    </em9Alert>
    <br />
    <em9Alert variant="success" open>
      <em9Icon slot="icon" name="exclamation-octagon"></em9Icon>
      <strong>Your account has been deleted</strong>
      <br />
      We're very sorry to see you go!
      <div style="padding-top:var(--em9-spacing-4);">
        <em9ProgressBar value="60" valPosition="bottom"></em9ProgressBar>
      </div>
    </em9Alert>
    <br />
    <em9Alert variant="primary" open>
      <em9Icon slot="icon" name="exclamation-octagon"></em9Icon>
      <strong>Your account has been deleted</strong>
      <div style="padding-top:var(--em9-spacing-4);">
        <em9ProgressBar value="60" valPosition="bottom"></em9ProgressBar>
      </div>
    </em9Alert>
  </>
);
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html preview
<em9-alert variant="success" open closable class="alert-closable" iconCenter>
  <em9-icon slot="icon" name="info-circle"></em9-icon>
  You can close this alert any time!
</em9-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('em9-after-hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

```jsx react
import { useState } from 'react';
import { em9Alert, em9Icon } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(true);

  function handleHide() {
    setOpen(false);
    setTimeout(() => setOpen(true), 2000);
  }

  return (
    <em9Alert open={open} closable onSlAfterHide={handleHide}>
      <em9Icon slot="icon" name="info-circle" />
      You can close this alert any time!
    </em9Alert>
  );
};
```

### Without Icons

Icons are optional. Simply omit the `icon` slot if you don't want them.

```html preview
<em9-alert variant="primary" open> Nothing fancy here, just a simple alert. </em9-alert>
```

```jsx react
import { em9Alert } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Alert variant="primary" open>
    Nothing fancy here, just a simple alert.
  </em9Alert>
);
```

### Duration

Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.

```html preview
<div class="alert-duration">
  <em9-button variant="primary">Show Alert</em9-button>

  <em9-alert variant="primary" duration="3000" closable>
    <em9-icon slot="icon" name="info-circle"></em9-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </em9-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('em9-button');
  const alert = container.querySelector('em9-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration em9-alert {
    margin-top: var(--em9-spacing-medium);
  }
</style>
```

```jsx react
import { useState } from 'react';
import { em9Alert, em9Button, em9Icon } from 'em9webcomponents/dist/react';

const css = `
  .alert-duration em9-alert {
    margin-top: var(--em9-spacing-medium);
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="alert-duration">
        <em9Button variant="primary" onClick={() => setOpen(true)}>
          Show Alert
        </em9Button>

        <em9Alert variant="primary" duration="3000" open={open} closable onSlAfterHide={() => setOpen(false)}>
          <em9Icon slot="icon" name="info-circle" />
          This alert will automatically hide itself after three seconds, unless you interact with it.
        </em9Alert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Toast Notifications

To display an alert as a toast notification, or "toast", create the alert and call its `toast()` method. This will move the alert out of its position in the DOM and into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call `toast()` again later on.

You should always use the `closable` attribute so users can dismiss the notification. It's also common to set a reasonable `duration` when the notification doesn't require acknowledgement.

```html preview
<div class="alert-toast">
  <em9-button variant="primary">Primary</em9-button>
  <em9-button variant="success">Success</em9-button>
  <em9-button variant="neutral">Neutral</em9-button>
  <em9-button variant="warning">Warning</em9-button>
  <em9-button variant="danger">Danger</em9-button>

  <em9-alert variant="primary" duration="3000" closable>
    <em9-icon slot="icon" name="info-circle"></em9-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </em9-alert>

  <em9-alert variant="success" duration="3000" closable>
    <em9-icon slot="icon" name="check2-circle"></em9-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </em9-alert>

  <em9-alert variant="neutral" duration="3000" closable>
    <em9-icon slot="icon" name="gear"></em9-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take affect on next login.
  </em9-alert>

  <em9-alert variant="warning" duration="3000" closable>
    <em9-icon slot="icon" name="exclamation-triangle"></em9-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </em9-alert>

  <em9-alert variant="danger" duration="3000" closable>
    <em9-icon slot="icon" name="exclamation-octagon"></em9-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </em9-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
    const button = container.querySelector(`em9-button[variant="${variant}"]`);
    const alert = container.querySelector(`em9-alert[variant="${variant}"]`);

    button.addEventListener('click', () => alert.toast());
  });
</script>
```

```jsx react
import { useRef } from 'react';
import { em9Alert, em9Button, em9Icon } from 'em9webcomponents/dist/react';

function showToast(alert) {
  alert.toast();
}

const App = () => {
  const primary = useRef(null);
  const success = useRef(null);
  const neutral = useRef(null);
  const warning = useRef(null);
  const danger = useRef(null);

  return (
    <>
      <em9Button variant="primary" onClick={() => primary.current.toast()}>
        Primary
      </em9Button>

      <em9Button variant="success" onClick={() => success.current.toast()}>
        Success
      </em9Button>

      <em9Button variant="neutral" onClick={() => neutral.current.toast()}>
        Neutral
      </em9Button>

      <em9Button variant="warning" onClick={() => warning.current.toast()}>
        Warning
      </em9Button>

      <em9Button variant="danger" onClick={() => danger.current.toast()}>
        Danger
      </em9Button>

      <em9Alert ref={primary} variant="primary" duration="3000" closable>
        <em9Icon slot="icon" name="info-circle" />
        <strong>This is super informative</strong>
        <br />
        You can tell by how pretty the alert is.
      </em9Alert>

      <em9Alert ref={success} variant="success" duration="3000" closable>
        <em9Icon slot="icon" name="check2-circle" />
        <strong>Your changes have been saved</strong>
        <br />
        You can safely exit the app now.
      </em9Alert>

      <em9Alert ref={neutral} variant="neutral" duration="3000" closable>
        <em9Icon slot="icon" name="gear" />
        <strong>Your settings have been updated</strong>
        <br />
        Settings will take affect on next login.
      </em9Alert>

      <em9Alert ref={warning} variant="warning" duration="3000" closable>
        <em9Icon slot="icon" name="exclamation-triangle" />
        <strong>Your session has ended</strong>
        <br />
        Please login again to continue.
      </em9Alert>

      <em9Alert ref={danger} variant="danger" duration="3000" closable>
        <em9Icon slot="icon" name="exclamation-octagon" />
        <strong>Your account has been deleted</strong>
        <br />
        We're very sorry to see you go!
      </em9Alert>
    </>
  );
};
```

### Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the `toast()` method as shown in the example below.

```html preview
<div class="alert-toast-wrapper">
  <em9-button variant="primary">Create Toast</em9-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('em9-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(message, variant = 'icon-primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('em9-alert'), {
      variant,
      closable: true,
      duration: duration,
      innerHTML: `
        <em9-icon name="${icon}" slot="icon"></em9-icon>
        ${escapeHtml(message)}
      `
    });

    document.body.append(alert);
    return alert.toast();
  }

  button.addEventListener('click', () => {
    notify(`This is custom toast #${++count}`);
  });
</script>
```

```jsx react
import { em9Button , em9Alert , em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
	<>
		<div class="alert-toast-wrapper">
		  <em9Button variant="primary">Create Toast</em9Button>
		</div>

		<script>
		  const container = document.querySelector('.alert-toast-wrapper');
		  const button = container.querySelector('em9Button');
		  let count = 0;

		  // Always escape HTML for text arguments!
		  function escapeHtml(html) {
			const div = document.createElement('div');
			div.textContent = html;
			return div.innerHTML;
		  }

		  // Custom function to emit toast notifications
		  function notify(message, variant = 'icon-primary', icon = 'info-circle', duration = 3000) {
			const alert = Object.assign(document.createElement('em9Alert'), {
			  variant,
			  closable: true,
			  duration: duration,
			  innerHTML: `
				<em9Icon name="${icon}" slot="icon"></em9Icon>
				${escapeHtml(message)}
			  `
			});

			document.body.append(alert);
			return alert.toast();
		  }

		  button.addEventListener('click', () => {
			notify(`This is custom toast #${++count}`);
		  });
		</script>
	</>
);
```

### The Toast Stack

The toast stack is a fixed position singleton element created and managed internally by the alert component. It will be added and removed from the DOM as needed when toasts are shown. When more than one toast is visible, they will stack vertically in the toast stack.

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting `.em9-toast-stack` in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

```css
.em9-toast-stack {
  left: 0;
  right: auto;
}
```

?> By design, it is not possible to show toasts in more than one stack simultaneously. Such behavior is confusing and makes for a poor user experience.

### Alerts

```html preview
<em9-alert open variant="primary" type="alert" closable
  ><em9-icon name="info-circle" slot="icon"></em9-icon>Tickets moved successfully
  <em9-button variant="primary" size="xx-small" pill>xx-Small</em9-button></em9-alert
>
<br />
<em9-alert open variant="success" type="alert" closable>Lorem ipsum dolor sit amet consectetur.</em9-alert>
<br />
<em9-alert open variant="danger" type="alert" closable>Lorem ipsum dolor sit amet consectetur.</em9-alert>
<br />
<em9-alert open variant="warning" type="alert" closable>Lorem ipsum dolor sit amet consectetur.</em9-alert>
<br />
<em9-alert open variant="neutral" type="alert" closable>Lorem ipsum dolor sit amet consectetur.</em9-alert>
```

```jsx react
import { em9Alert, em9Icon, em9button } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Alert open variant="primary" type="alert" closable>
      <em9Icon name="info-circle" slot="icon"></em9Icon>Tickets moved successfully
      <em9button variant="primary" size="xx-small" pill>
        xx-Small
      </em9button>
    </em9Alert>
    <br />
    <em9Alert open variant="success" type="alert" closable>
      Lorem ipsum dolor sit amet consectetur.
    </em9Alert>
    <br />
    <em9Alert open variant="danger" type="alert" closable>
      Lorem ipsum dolor sit amet consectetur.
    </em9Alert>
    <br />
    <em9Alert open variant="warning" type="alert" closable>
      Lorem ipsum dolor sit amet consectetur.
    </em9Alert>
    <br />
    <em9Alert open variant="neutral" type="alert" closable>
      Lorem ipsum dolor sit amet consectetur.
    </em9Alert>
  </>
);
```

### Plain Alerts

```html preview
<em9-alert open type="plain" variant="primary" closable>
  <em9-icon slot="icon" name="info-circle"></em9-icon>
  <span slot="plain-alert-title">This is super informative</span>
  This is a standard alert. You can customize its content and even the icon.
  <a href="#" class="alert-link" slot="link1">Link 1</a>
  <a href="#" class="alert-link" slot="link2">Link 2</a>
</em9-alert>
<style>
  alert-link {
    text-decoration: none;
    font-weight: 500;
  }
</style>
```

```jsx react
import { em9Alert, em9Icon, em9button } from 'em9webcomponents/dist/react';
const css = `
   alert-link {
      text-decoration: none;
      font-weight: 500;
    }
`;
const App = () => (
  <>
    <em9Alert open type="plain" variant="primary" closable>
      <em9Icon slot="icon" name="info-circle"></em9Icon>
      <span slot="plain-alert-title">This is super informative</span>
      This is a standard alert. You can customize its content and even the icon.
      <a href="#" class="alert-link" slot="link1">
        Link 1
      </a>
      <a href="#" class="alert-link" slot="link2">
        Link 2
      </a>
    </em9Alert>
    <style>{css}</style>
  </>
);
```

[component-metadata:em9-alert]
