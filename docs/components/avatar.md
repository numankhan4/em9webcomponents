# Avatar

[component-header:em9-avatar]

Avatars are used to represent a person or object.

By default, a generic icon will be shown. You can personalize avatars by adding custom icons, initials, and images. You should always provide a `label` for assistive devices.

```html preview
<em9-avatar label="User avatar"></em9-avatar>
<br>
<br>
<br>
<em9-avatar image="https://em9cdn.b-cdn.net/wp-content/uploads/2018/01/Amir-Wain.png"name="Amir Wain" info="Chief Executive Officer" label="Amir Wain">
  
</em9-avatar>
```

```jsx react
import { em9Avatar } from 'em9webcomponents/dist/react';

const App = () => <em9Avatar label="User avatar" />;
```

## Examples

### Images

To use an image for the avatar, set the `image` and `label` attributes. This will take priority and be shown over initials and icons.

```html preview
<em9-avatar
  image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a gray tabby kitten looking down"
></em9-avatar>
```

```jsx react
import { em9Avatar } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Avatar
    image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a gray tabby kitten looking down"
  />
);
```

### Initials

When you don't have an image to use, you can set the `initials` attribute to show something more personalized than an icon.

```html preview
<em9-avatar initials="em9" label="Avatar with initials: SL"></em9-avatar>
```

```jsx react
import { em9Avatar } from 'em9webcomponents/dist/react';

const App = () => <em9Avatar initials="em9" label="Avatar with initials: SL" />;
```

### Custom Icons

When no image or initials are set, an icon will be shown. The default avatar shows a generic "user" icon, but you can customize this with the `icon` slot.

```html preview
<em9-avatar label="Avatar with an image icon">
  <em9-icon slot="icon" name="outline-bluetooth"></em9-icon>
</em9-avatar>

<em9-avatar label="Avatar with an archive icon">
  <em9-icon slot="icon" name="bulk-colorfilter"></em9-icon>
</em9-avatar>

<em9-avatar label="Avatar with a briefcase icon">
  <em9-icon slot="icon" name="bulk-ghost"></em9-icon>
</em9-avatar>
```

```jsx react
import { em9Avatar, em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Avatar label="Avatar with an image icon">
      <em9Icon slot="icon" name="image" />
    </em9Avatar>

    <em9Avatar label="Avatar with an archive icon">
      <em9Icon slot="icon" name="archive" />
    </em9Avatar>

    <em9Avatar label="Avatar with a briefcase icon">
      <em9Icon slot="icon" name="briefcase" />
    </em9Avatar>
  </>
);
```

### Shapes

Avatars can be shaped using the `shape` attribute.

```html preview
<em9-avatar shape="square" label="Square avatar"></em9-avatar>
<em9-avatar shape="rounded" label="Rounded avatar"></em9-avatar>
<em9-avatar shape="circle" label="Circle avatar"></em9-avatar>
```

```jsx react
import { em9Avatar, em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Avatar shape="square" label="Square avatar" />
    <em9Avatar shape="rounded" label="Rounded avatar" />
    <em9Avatar shape="circle" label="Circle avatar" />
  </>
);
```

### Avatar Groups

You can group avatars with a few lines of CSS.

```html preview
<div class="avatar-group" style="display: flex">
  <em9-avatar
    image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
    label="Avatar 1 of 4"
  ></em9-avatar>

  <em9-avatar
    image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 2 of 4"
  ></em9-avatar>

  <em9-avatar
    image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 3 of 4"
  ></em9-avatar>

  <em9-avatar
    image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
    label="Avatar 4 of 4"
  ></em9-avatar>
</div>

<style>
  .avatar-group em9-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group em9-avatar::part(base) {
    border: solid 2px var(--em9-color-neutral-0);
  }
</style>
```

```jsx react
import { em9Avatar, em9Icon } from 'em9webcomponents/dist/react';

const css = `
  .avatar-group em9-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group em9-avatar::part(base) {
    border: solid 2px var(--em9-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="avatar-group">
      <em9Avatar
        image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
        label="Avatar 1 of 4"
      />

      <em9Avatar
        image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 2 of 4"
      />

      <em9Avatar
        image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 3 of 4"
      />

      <em9Avatar
        image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
        label="Avatar 4 of 4"
      />
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:em9-avatar]
