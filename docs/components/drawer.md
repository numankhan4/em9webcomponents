<!-- cspell:dictionaries lorem-ipsum -->

# Drawer

[component-header:em9-drawer]

Drawers slide in from a container to expose additional options and information.

```html preview
<em9-drawer label="Drawer" class="drawer-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <em9-button slot="footer" variant="primary">Close</em9-button>
</em9-drawer>

<em9-button>Open Drawer</em9-button>

<script>
  const drawer = document.querySelector('.drawer-overview');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('em9-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Drawer } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Drawer label="Drawer" open={open} onSlAfterHide={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <em9Button slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </em9Button>
      </em9Drawer>

      <em9Button onClick={() => setOpen(true)}>Open Drawer</em9Button>
    </>
  );
};
```

## Examples

### Slide in From Start

By default, drawers slide in from the end. To make the drawer slide in from the start, set the `placement` attribute to `start`.

```html preview
<em9-drawer label="Drawer" placement="start" class="drawer-placement-start">
  This drawer slides in from the start.
  <em9-button slot="footer" variant="primary">Close</em9-button>
</em9-drawer>

<em9-button>Open Drawer</em9-button>

<script>
  const drawer = document.querySelector('.drawer-placement-start');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('em9-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Drawer } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Drawer label="Drawer" placement="start" open={open} onSlAfterHide={() => setOpen(false)}>
        This drawer slides in from the start.
        <em9Button slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </em9Button>
      </em9Drawer>

      <em9Button onClick={() => setOpen(true)}>Open Drawer</em9Button>
    </>
  );
};
```

### Slide in From Top

To make the drawer slide in from the top, set the `placement` attribute to `top`.

```html preview
<em9-drawer label="Drawer" placement="top" class="drawer-placement-top">
  This drawer slides in from the top.
  <em9-button slot="footer" variant="primary">Close</em9-button>
</em9-drawer>

<em9-button>Open Drawer</em9-button>

<script>
  const drawer = document.querySelector('.drawer-placement-top');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('em9-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Drawer } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Drawer label="Drawer" placement="top" open={open} onSlAfterHide={() => setOpen(false)}>
        This drawer slides in from the top.
        <em9Button slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </em9Button>
      </em9Drawer>

      <em9Button onClick={() => setOpen(true)}>Open Drawer</em9Button>
    </>
  );
};
```

### Slide in From Bottom

To make the drawer slide in from the bottom, set the `placement` attribute to `bottom`.

```html preview
<em9-drawer label="Drawer" placement="bottom" class="drawer-placement-bottom">
  This drawer slides in from the bottom.
  <em9-button slot="footer" variant="primary">Close</em9-button>
</em9-drawer>

<em9-button>Open Drawer</em9-button>

<script>
  const drawer = document.querySelector('.drawer-placement-bottom');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('em9-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Drawer } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Drawer label="Drawer" placement="bottom" open={open} onSlAfterHide={() => setOpen(false)}>
        This drawer slides in from the bottom.
        <em9Button slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </em9Button>
      </em9Drawer>

      <em9Button onClick={() => setOpen(true)}>Open Drawer</em9Button>
    </>
  );
};
```

### Contained to an Element

By default, the drawer slides out of its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport. To make the drawer slide out of its parent element, add the `contained` attribute and `position: relative` to the parent.

```html preview
<div
  style="position: relative; border: solid 2px var(--em9-panel-border-color); height: 300px; padding: 1rem; margin-bottom: 1rem;"
>
  The drawer will be contained to this box. This content won't shift or be affected in any way when the drawer opens.

  <em9-drawer label="Drawer" contained class="drawer-contained" style="--size: 50%;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <em9-button slot="footer" variant="primary">Close</em9-button>
  </em9-drawer>
</div>

<em9-button>Open Drawer</em9-button>

<script>
  const drawer = document.querySelector('.drawer-contained');
  const openButton = drawer.parentElement.nextElementSibling;
  const closeButton = drawer.querySelector('em9-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Drawer } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: 'relative',
          border: 'solid 2px var(--em9-panel-border-color)',
          height: '300px',
          padding: '1rem',
          marginBottom: '1rem'
        }}
      >
        The drawer will be contained to this box. This content won't shift or be affected in any way when the drawer
        opens.
        <em9Drawer
          label="Drawer"
          contained
          open={open}
          onSlAfterHide={() => setOpen(false)}
          style={{ '--size': '50%' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <em9Button slot="footer" variant="primary" onClick={() => setOpen(false)}>
            Close
          </em9Button>
        </em9Drawer>
      </div>

      <em9Button onClick={() => setOpen(true)}>Open Drawer</em9Button>
    </>
  );
};
```

### Custom Size

Use the `--size` custom property to set the drawer's size. This will be applied to the drawer's width or height depending on its `placement`.

```html preview
<em9-drawer label="Drawer" class="drawer-custom-size" style="--size: 50vw;">
  This drawer is always 50% of the viewport.
  <em9-button slot="footer" variant="primary">Close</em9-button>
</em9-drawer>

<em9-button>Open Drawer</em9-button>

<script>
  const drawer = document.querySelector('.drawer-custom-size');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('em9-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Drawer } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Drawer label="Drawer" open={open} onSlAfterHide={() => setOpen(false)} style={{ '--size': '50vw' }}>
        This drawer is always 50% of the viewport.
        <em9Button slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </em9Button>
      </em9Drawer>

      <em9Button onClick={() => setOpen(true)}>Open Drawer</em9Button>
    </>
  );
};
```

### Scrolling

By design, a drawer's height will never exceed 100% of its container. As such, drawers will not scroll with the page to ensure the header and footer are always accessible to the user.

```html preview
<em9-drawer label="Drawer" class="drawer-scrolling">
  <div style="height: 150vh; border: dashed 2px var(--em9-color-neutral-200); padding: 0 1rem;">
    <p>Scroll down and give it a try! 👇</p>
  </div>
  <em9-button slot="footer" variant="primary">Close</em9-button>
</em9-drawer>

<em9-button>Open Drawer</em9-button>

<script>
  const drawer = document.querySelector('.drawer-scrolling');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('em9-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Drawer } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Drawer label="Drawer" open={open} onSlAfterHide={() => setOpen(false)}>
        <div
          style={{
            height: '150vh',
            border: 'dashed 2px var(--em9-color-neutral-200)',
            padding: '0 1rem'
          }}
        >
          <p>Scroll down and give it a try! 👇</p>
        </div>
        <em9Button slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </em9Button>
      </em9Drawer>

      <em9Button onClick={() => setOpen(true)}>Open Drawer</em9Button>
    </>
  );
};
```

### Preventing the Drawer from Closing

By default, drawers will close when the user clicks the close button, clicks the overlay, or presses the <kbd>Escape</kbd> key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.

To keep the drawer open in such cases, you can cancel the `em9-request-close` event. When canceled, the drawer will remain open and pulse briefly to draw the user's attention to it.

You can use `event.detail.source` to determine what triggered the request to close. This example prevents the drawer from closing when the overlay is clicked, but allows the close button or <kbd>Escape</kbd> to dismiss it.

```html preview
<em9-drawer label="Drawer" class="drawer-deny-close">
  This drawer will not close when you click on the overlay.
  <em9-button slot="footer" variant="primary">Close</em9-button>
</em9-drawer>

<em9-button>Open Drawer</em9-button>

<script>
  const drawer = document.querySelector('.drawer-deny-close');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('em9-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());

  // Prevent the drawer from closing when the user clicks on the overlay
  drawer.addEventListener('em9-request-close', event => {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  });
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Drawer } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  // Prevent the drawer from closing when the user clicks on the overlay
  function handleRequestClose(event) {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  }

  return (
    <>
      <em9Drawer label="Drawer" open={open} onSlRequestClose={handleRequestClose} onSlAfterHide={() => setOpen(false)}>
        This drawer will not close when you click on the overlay.
        <em9Button slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Save &amp; Close
        </em9Button>
      </em9Drawer>

      <em9Button onClick={() => setOpen(true)}>Open Drawer</em9Button>
    </>
  );
};
```

### Customizing Initial Focus

By default, the drawer's panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the drawer. If you want a different element to have focus, add the `autofocus` attribute to it as shown below.

```html preview
<em9-drawer label="Drawer" class="drawer-focus">
  <em9-input autofocus placeholder="I will have focus when the drawer is opened"></em9-input>
  <em9-button slot="footer" variant="primary">Close</em9-button>
</em9-drawer>

<em9-button>Open Drawer</em9-button>

<script>
  const drawer = document.querySelector('.drawer-focus');
  const input = drawer.querySelector('em9-input');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('em9-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Drawer, em9Input } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Drawer label="Drawer" open={open} onSlAfterHide={() => setOpen(false)}>
        <em9Input autofocus placeholder="I will have focus when the drawer is opened" />
        <em9Button slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </em9Button>
      </em9Drawer>

      <em9Button onClick={() => setOpen(true)}>Open Drawer</em9Button>
    </>
  );
};
```

?> You can further customize initial focus behavior by canceling the `em9-initial-focus` event and setting focus yourself inside the event handler.
[component-metadata:em9-drawer]
