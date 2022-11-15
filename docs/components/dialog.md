<!-- cspell:dictionaries lorem-ipsum -->

# Dialog

[component-header:em9-dialog]

Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.

```html preview
<em9-dialog label="Dialog" class="dialog-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <em9-button slot="footer" variant="primary">Close</em9-button>
</em9-dialog>

<em9-button>Open Dialog</em9-button>

<script>
  const dialog = document.querySelector('.dialog-overview');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('em9-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Dialog } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Dialog label="Dialog" open={open} onem9Hide={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <em9Button slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </em9Button>
      </em9Dialog>

      <em9Button onClick={() => setOpen(true)}>Open Dialog</em9Button>
    </>
  );
};
```

## Customizable Dialog

### left Align Layout

```html preview
<em9-dialog label="Blog post published" class="custom-dialog dialog1" headerArt="linear-user-add">
  <p>This blog post has been published. Team members will be able to edit this post and republish changes.</p>
  <footer slot="footer">
    <em9-button variant="secondary gray" size="large" class="cancel-btn">Cancel</em9-button>
    <em9-button variant="primary" size="large">Confirm</em9-button>
  </footer>
</em9-dialog>
<em9-button>Let Layout</em9-button>
<style>
  .custom-dialog [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .custom-dialog [slot='footer'] em9-button {
    width: 100%;
  }
  .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
    margin-right: 12px;
  }
  @media (max-width: 400px) {
    .custom-dialog [slot='footer'] {
      flex-direction: column;
    }
    .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
      margin-right: 0;
      margin-bottom: var(--em9-spacing-3);
    }
  }
</style>
<script>
  const dialog = document.querySelector('.dialog1');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('[slot="footer"] .cancel-btn');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Dialog } from 'em9webcomponents/dist/react';
const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Dialog
        className="custom-dialog dialog1"
        label="Blog post published"
        headerArt="linear-user-add"
        open={open}
        onem9Hide={() => setOpen(false)}
      >
        <p>This blog post has been published. Team members will be able to edit this post and republish changes.</p>
        <footer slot="footer">
          <em9Button slot="footer" variant="secondary gray" onClick={() => setOpen(false)}>
            Close
          </em9Button>
          <em9Button slot="footer" variant="primary">
            Confirm
          </em9Button>
        </footer>
      </em9Dialog>

      <em9Button onClick={() => setOpen(true)}>Open Dialog</em9Button>
    </>
  );
};
// Place the css in stylesheet.
.custom-dialog [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .custom-dialog [slot='footer'] em9-button {
    width: 100%;
  }
  .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
    margin-right: 12px;
  }
  @media (max-width: 400px) {
    .custom-dialog [slot='footer'] {
      flex-direction: column;
    }
    .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
      margin-right: 0;
      margin-bottom: var(--em9-spacing-3);
    }
  }
```

### Center Align Layout

```html preview
<em9-dialog
  label="Blog post published"
  class="custom-dialog dialog2"
  headerArt="linear-tick-circle"
  layout="layoutCenter"
>
  <p>This blog post has been published. Team members will be able to edit this post and republish changes.</p>
  <footer slot="footer">
    <em9-button variant="secondary gray" size="large" class="cancel-btn">Cancel</em9-button>
    <em9-button variant="primary" size="large">Confirm</em9-button>
  </footer>
</em9-dialog>
<em9-button>Center Layout</em9-button>
<style>
  .custom-dialog [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .custom-dialog [slot='footer'] em9-button {
    width: 100%;
  }
  .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
    margin-right: 12px;
  }
  .custom-dialog.dialog2::part(art-frame) {
    color: var(--em9-color-success-600);
    background-color: var(--em9-color-success-100);
    border-color: var(--em9-color-success-50);
  }
  @media (max-width: 400px) {
    .custom-dialog [slot='footer'] {
      flex-direction: column;
    }
    .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
      margin-right: 0;
      margin-bottom: var(--em9-spacing-3);
    }
  }
</style>
<script>
  const dialog2 = document.querySelector('.dialog2');
  const openButton2 = dialog2.nextElementSibling;
  const closeButton2 = dialog2.querySelector('[slot="footer"] .cancel-btn');

  openButton2.addEventListener('click', () => dialog2.show());
  closeButton2.addEventListener('click', () => dialog2.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Dialog } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Dialog
        className="custom-dialog dialog2"
        label="Blog post published"
        headerArt="linear-tick-circle"
        layout="layoutCenter"
        open={open}
        onem9Hide={() => setOpen(false)}
      >
        <p>This blog post has been published. Team members will be able to edit this post and republish changes.</p>
        <footer slot="footer">
          <em9Button slot="footer" variant="secondary gray" onClick={() => setOpen(false)}>
            Close
          </em9Button>
          <em9Button slot="footer" variant="primary">
            Confirm
          </em9Button>
        </footer>
      </em9Dialog>

      <em9Button onClick={() => setOpen(true)}>Open Dialog</em9Button>
    </>
  );
};
// Place the css in stylesheet.
.custom-dialog [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .custom-dialog [slot='footer'] em9-button {
    width: 100%;
  }
  .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
    margin-right: 12px;
  }
  .custom-dialog.dialog2::part(art-frame) {
    color: var(--em9-color-success-600);
    background-color: var(--em9-color-success-100);
    border-color: var(--em9-color-success-50);
  }
  @media (max-width: 400px) {
    .custom-dialog [slot='footer'] {
      flex-direction: column;
    }
    .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
      margin-right: 0;
      margin-bottom: var(--em9-spacing-3);
    }
  }
```

### Left Aside Layout

```html preview
<em9-dialog
  label="Blog post published"
  class="custom-dialog dialog3"
  headerArt="linear-discover-1"
  layout="layoutAsideLeft"
>
  <p>This blog post has been published. Team members will be able to edit this post and republish changes.</p>
  <footer slot="footer">
    <em9-checkbox label="Don’t show again"></em9-checkbox>
    <em9-button variant="secondary gray" size="large" class="cancel-btn">Cancel</em9-button>
    <em9-button variant="primary" size="large">Confirm</em9-button>
  </footer>
</em9-dialog>
<em9-button>Left Aside Layout</em9-button>
<style>
  .custom-dialog [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .custom-dialog [slot='footer'] em9-button {
    width: 100%;
  }
  .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
    margin-right: 12px;
  }
  .custom-dialog.dialog3 {
    --width: 34rem;
  }
  .custom-dialog.dialog3 [slot='footer'] em9-checkbox {
    width: 100%;
  }
  .custom-dialog.dialog3 [slot='footer'] em9-button {
    width: auto;
  }
  .custom-dialog.dialog3::part(art-frame) {
    color: var(--em9-color-warning-600);
    background-color: var(--em9-color-warning-100);
    border-color: var(--em9-color-warning-50);
  }
  @media (max-width: 400px) {
    .custom-dialog [slot='footer'] {
      flex-direction: column;
    }
    .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
      margin-right: 0;
      margin-bottom: var(--em9-spacing-3);
    }
  }
</style>
<script>
  const dialog3 = document.querySelector('.dialog3');
  const openButton3 = dialog3.nextElementSibling;
  const closeButton3 = dialog3.querySelector('[slot="footer"] .cancel-btn');

  openButton3.addEventListener('click', () => dialog3.show());
  closeButton3.addEventListener('click', () => dialog3.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Dialog, em9Checkbox } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Dialog
        className="custom-dialog dialog2"
        label="Blog post published"
        headerArt="linear-tick-circle"
        layout="layoutCenter"
        open={open}
        onem9Hide={() => setOpen(false)}
      >
        <p>This blog post has been published. Team members will be able to edit this post and republish changes.</p>
        <footer slot="footer">
          <em9Checkbox label="Don’t show again"></em9Checkbox>
          <em9Button slot="footer" variant="secondary gray" onClick={() => setOpen(false)}>
            Close
          </em9Button>
          <em9Button slot="footer" variant="primary">
            Confirm
          </em9Button>
        </footer>
      </em9Dialog>

      <em9Button onClick={() => setOpen(true)}>Open Dialog</em9Button>
    </>
  );
};
// Place the css in stylesheet.
.custom-dialog [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .custom-dialog [slot='footer'] em9-button {
    width: 100%;
  }
  .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
    margin-right: 12px;
  }
  .custom-dialog.dialog3 {
    --width: 34rem;
  }
  .custom-dialog.dialog3 [slot='footer'] em9-checkbox {
    width: 100%;
  }
  .custom-dialog.dialog3 [slot='footer'] em9-button {
    width: auto;
  }
  .custom-dialog.dialog3::part(art-frame) {
    color: var(--em9-color-warning-600);
    background-color: var(--em9-color-warning-100);
    border-color: var(--em9-color-warning-50);
  }
  @media (max-width: 400px) {
    .custom-dialog [slot='footer'] {
      flex-direction: column;
    }
    .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
      margin-right: 0;
      margin-bottom: var(--em9-spacing-3);
    }
  }
```

### Complex UI

```html preview
<em9-dialog label="Add your team members" class="custom-dialog dialog4" layout="layoutCenter">
  <div class="avatar-group" slot="headerArt">
    <em9-avatar
      image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png"
      label="Avatar 1 of 4"
    ></em9-avatar>

    <em9-avatar
      image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png"
      label="Avatar 2 of 4"
    ></em9-avatar>

    <em9-avatar
      image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png"
      label="Avatar 3 of 4"
    ></em9-avatar>
  </div>
  <p>This blog post has been published. Team members will be able to edit this post and republish changes.</p>
  <ul class="add-member-list">
    <li>
      <em9-checkbox size="medium">
        <em9-avatar
          slot="label"
          image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png"
          name="Amir Wain"
          info="Chief Executive Officer"
          label="Amir Wain"
        ></em9-avatar>
      </em9-checkbox>
      <em9-button
        slot="suffix"
        href="https://example.com/"
        size="xx-small"
        style="margin-right:10px"
        variant="link gray"
        >Admin</em9-button
      >
    </li>
    <li>
      <em9-checkbox size="medium">
        <em9-avatar
          slot="label"
          image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png"
          name="Amir Wain"
          info="Chief Executive Officer"
          label="Amir Wain"
        ></em9-avatar>
      </em9-checkbox>
      <em9-button
        slot="suffix"
        href="https://example.com/"
        size="xx-small"
        style="margin-right:10px"
        variant="link gray"
        >Admin</em9-button
      >
    </li>
  </ul>
  <footer slot="footer">
    <em9-button variant="secondary gray" size="large" class="cancel-btn">Cancel</em9-button>
    <em9-button variant="primary" size="large">Confirm</em9-button>
  </footer>
</em9-dialog>
<em9-button>Complex UI</em9-button>

<style>
  .custom-dialog [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .custom-dialog [slot='footer'] em9-button {
    width: 100%;
  }
  .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
    margin-right: 12px;
  }
  .avatar-group {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .avatar-group em9-avatar {
    transform: scale(1.3);
    position: relative;
    top: 12px;
  }
  .avatar-group em9-avatar:nth-child(2) {
    transform: scale(1.5);
    z-index: 999;
    top: 9px;
    position: relative;
  }

  .avatar-group em9-avatar::part(base) {
    border: solid 2px var(--em9-color-neutral-0);
  }
  .custom-dialog .add-member-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    text-align: left;
    margin: 20px 0 0;
  }
  .custom-dialog .add-member-list li {
    margin-bottom: var(--em9-spacing-3);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .custom-dialog.dialog4::part(header-art) {
    margin-bottom: var(--em9-spacing-8);
  }
  @media (max-width: 400px) {
    .custom-dialog [slot='footer'] {
      flex-direction: column;
    }
    .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
      margin-right: 0;
      margin-bottom: var(--em9-spacing-3);
    }
  }
</style>

<script>
  const dialog4 = document.querySelector('.dialog4');
  const openButton4 = dialog4.nextElementSibling;
  const closeButton4 = dialog4.querySelector('[slot="footer"] .cancel-btn');

  openButton4.addEventListener('click', () => dialog4.show());
  closeButton4.addEventListener('click', () => dialog4.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Dialog, em9Button, em9Avatar } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Dialog
        className="custom-dialog dialog4"
        label="Blog post published"
        layout="layoutCenter"
        open={open}
        onem9Hide={() => setOpen(false)}
      >
        <div class="avatar-group" slot="headerArt">
          <em9Avatar
            image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png"
            label="Avatar 1 of 4"
          ></em9Avatar>

          <em9Avatar
            image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png"
            label="Avatar 2 of 4"
          ></em9Avatar>

          <em9Avatar
            image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png"
            label="Avatar 3 of 4"
          ></em9Avatar>
        </div>
        <p>This blog post has been published. Team members will be able to edit this post and republish changes.</p>
        <ul class="add-member-list">
          <li>
            <em9-checkbox size="medium" label="Numan Ul haq">
              <em9Avatar
                slot="label"
                image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png"
                name="Amir Wain"
                info="Chief Executive Officer"
                label="Amir Wain"
              ></em9Avatar>
            </em9-checkbox>
            <em9Button
              slot="suffix"
              href="https://example.com/"
              size="xx-small"
              style="margin-right:10px"
              variant="link gray"
            >
              Admin
            </em9Button>
          </li>
          <li>
            <em9-checkbox size="medium" label="Numan Ul haq" subLabel="Architect">
              <em9Avatar
                slot="label"
                image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png"
                name="Amir Wain"
                info="Chief Executive Officer"
                label="Amir Wain"
              ></em9Avatar>
            </em9-checkbox>
            <em9Button
              slot="suffix"
              href="https://example.com/"
              size="xx-small"
              style="margin-right:10px"
              variant="link gray"
            >
              Admin
            </em9Button>
          </li>
        </ul>
        <footer slot="footer">
          <em9Button slot="footer" variant="secondary gray" onClick={() => setOpen(false)}>
            Close
          </em9Button>
          <em9Button slot="footer" variant="primary">
            Confirm
          </em9Button>
        </footer>
      </em9Dialog>

      <em9Button onClick={() => setOpen(true)}>Open Dialog</em9Button>
    </>
  );
};
// Place the css in stylesheet.
.custom-dialog [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .custom-dialog [slot='footer'] em9-button {
    width: 100%;
  }
  .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
    margin-right: 12px;
  }
  .avatar-group {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .avatar-group em9-avatar {
    transform: scale(1.3);
    position: relative;
    top: 12px;
  }
  .avatar-group em9-avatar:nth-child(2) {
    transform: scale(1.5);
    z-index: 999;
    top: 9px;
    position: relative;
  }

  .avatar-group em9-avatar::part(base) {
    border: solid 2px var(--em9-color-neutral-0);
  }
  .custom-dialog .add-member-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    text-align: left;
    margin: 20px 0 0;
  }
  .custom-dialog .add-member-list li {
    margin-bottom: var(--em9-spacing-3);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .custom-dialog.dialog4::part(header-art) {
    margin-bottom: var(--em9-spacing-8);
  }
  @media (max-width: 400px) {
    .custom-dialog [slot='footer'] {
      flex-direction: column;
    }
    .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
      margin-right: 0;
      margin-bottom: var(--em9-spacing-3);
    }
  }
```

```html preview
<em9-dialog label="Blog post published" class="custom-dialog dialog5" headerArt="linear-user-add">
  <p>This blog post has been published. Team members will be able to edit this post and republish changes.</p>
  <footer slot="footer">
    <em9-button variant="secondary gray" size="large" class="cancel-btn">Cancel</em9-button>
    <em9-button variant="primary" size="large">Confirm</em9-button>
  </footer>
</em9-dialog>
<em9-button>Responsive</em9-button>

<style>
  .custom-dialog [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .custom-dialog [slot='footer'] em9-button {
    width: 100%;
  }
  .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
    margin-right: 12px;
  }
  @media (max-width: 400px) {
    .custom-dialog [slot='footer'] {
      flex-direction: column;
    }
    .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
      margin-right: 0;
      margin-bottom: var(--em9-spacing-3);
    }
  }
</style>
<script>
  const dialog5 = document.querySelector('.dialog5');
  const openButton5 = dialog5.nextElementSibling;
  const closeButton5 = dialog5.querySelector('[slot="footer"] .cancel-btn');

  openButton5.addEventListener('click', () => dialog5.show());
  closeButton5.addEventListener('click', () => dialog5.hide());
  </script>
</>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Dialog } from 'em9webcomponents/dist/react';
const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Dialog
        className="custom-dialog dialog5"
        label="Blog post published"
        headerArt="linear-user-add"
        open={open}
        onem9Hide={() => setOpen(false)}
      >
        <p>This blog post has been published. Team members will be able to edit this post and republish changes.</p>
        <footer slot="footer">
          <em9Button slot="footer" variant="secondary gray" onClick={() => setOpen(false)}>
            Close
          </em9Button>
          <em9Button slot="footer" variant="primary">
            Confirm
          </em9Button>
        </footer>
      </em9Dialog>

      <em9Button onClick={() => setOpen(true)}>Open Dialog</em9Button>
    </>
  );
};
// Place the css in stylesheet.
.custom-dialog [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .custom-dialog [slot='footer'] em9-button {
    width: 100%;
  }
  .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
    margin-right: 12px;
  }
  @media (max-width: 400px) {
    .custom-dialog [slot='footer'] {
      flex-direction: column;
    }
    .custom-dialog [slot='footer'] em9-button:not(:last-of-type) {
      margin-right: 0;
      margin-bottom: var(--em9-spacing-3);
    }
  }
```

## UX Tips

- Use a dialog when you immediately require the user's attention, e.g. confirming a destructive action.
- Always provide an obvious way for the user to dismiss the dialog.
- Don't nest dialogs. It almost always leads to a poor experience for the user.

## Examples

### Custom Width

Use the `--width` custom property to set the dialog's width.

```html preview
<em9-dialog label="Dialog" class="dialog-width" style="--width: 50vw;">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <em9-button slot="footer" variant="primary">Close</em9-button>
</em9-dialog>

<em9-button>Open Dialog</em9-button>

<script>
  const dialog = document.querySelector('.dialog-width');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('em9-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Dialog } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Dialog label="Dialog" open={open} style={{ '--width': '50vw' }} onem9Hide={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <em9Button slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </em9Button>
      </em9Dialog>

      <em9Button onClick={() => setOpen(true)}>Open Dialog</em9Button>
    </>
  );
};
```

### Scrolling

By design, a dialog's height will never exceed that of the viewport. As such, dialogs will not scroll with the page ensuring the header and footer are always accessible to the user.

```html preview
<em9-dialog label="Dialog" class="dialog-scrolling">
  <div style="height: 150vh; border: dashed 2px var(--em9-color-neutral-200); padding: 0 1rem;">
    <p>Scroll down and give it a try! 👇</p>
  </div>
  <em9-button slot="footer" variant="primary">Close</em9-button>
</em9-dialog>

<em9-button>Open Dialog</em9-button>

<script>
  const dialog = document.querySelector('.dialog-scrolling');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('em9-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Dialog } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Dialog label="Dialog" open={open} onem9Hide={() => setOpen(false)}>
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
      </em9Dialog>

      <em9Button onClick={() => setOpen(true)}>Open Dialog</em9Button>
    </>
  );
};
```

### Preventing the Dialog from Closing

By default, dialogs will close when the user clicks the close button, clicks the overlay, or presses the <kbd>Escape</kbd> key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.

To keep the dialog open in such cases, you can cancel the `em9-request-close` event. When canceled, the dialog will remain open and pulse briefly to draw the user's attention to it.

You can use `event.detail.source` to determine what triggered the request to close. This example prevents the dialog from closing when the overlay is clicked, but allows the close button or <kbd>Escape</kbd> to dismiss it.

```html preview
<em9-dialog label="Dialog" class="dialog-deny-close">
  This dialog will not close when you click on the overlay.
  <em9-button slot="footer" variant="primary">Close</em9-button>
</em9-dialog>

<em9-button>Open Dialog</em9-button>

<script>
  const dialog = document.querySelector('.dialog-deny-close');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('em9-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());

  // Prevent the dialog from closing when the user clicks on the overlay
  dialog.addEventListener('em9-request-close', event => {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  });
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Dialog } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  // Prevent the dialog from closing when the user clicks on the overlay
  function handleRequestClose(event) {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  }

  return (
    <>
      <em9Dialog label="Dialog" open={open} onSlRequestClose={handleRequestClose} onem9Hide={() => setOpen(false)}>
        This dialog will not close when you click on the overlay.
        <em9Button slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </em9Button>
      </em9Dialog>

      <em9Button onClick={() => setOpen(true)}>Open Dialog</em9Button>
    </>
  );
};
```

### Customizing Initial Focus

By default, the dialog's panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the dialog. If you want a different element to have focus, add the `autofocus` attribute to it as shown below.

```html preview
<em9-dialog label="Dialog" class="dialog-focus">
  <em9-input autofocus placeholder="I will have focus when the dialog is opened"></em9-input>
  <em9-button slot="footer" variant="primary">Close</em9-button>
</em9-dialog>

<em9-button>Open Dialog</em9-button>

<script>
  const dialog = document.querySelector('.dialog-focus');
  const input = dialog.querySelector('em9-input');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('em9-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { em9Button, em9Dialog, em9Input } from 'em9webcomponents/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <em9Dialog label="Dialog" open={open} onem9Hide={() => setOpen(false)}>
        <em9Input autofocus placeholder="I will have focus when the dialog is opened" />
        <em9Button slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </em9Button>
      </em9Dialog>

      <em9Button onClick={() => setOpen(true)}>Open Dialog</em9Button>
    </>
  );
};
```

?> You can further customize initial focus behavior by canceling the `em9-initial-focus` event and setting focus yourself inside the event handler.

[component-metadata:em9-dialog]
