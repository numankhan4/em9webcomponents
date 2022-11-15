# Badge Group

[component-header:em9-badge-group]

Badges help highlight important information, such as notifications or new and unread messages. They’re primarily used for communicating secondary or additional information to text.

```html preview
<em9-badge-group>
  <em9-badge slot="badge" variant="primary">Basic Badge</em9-badge>
  I'm a badge Group Message
</em9-badge-group>
```

```jsx react
import { em9BadgeGroup, em9Badge } from 'em9webcomponents/dist/react';
const App = () => (
  <em9BadgeGroup>
    <em9Badge slot="badge" variant="primary">
      Basic Badge
    </em9Badge>
    I'm a badge Group Message
  </em9BadgeGroup>
);
```

## Examples

### Variants

Set the `variant` attribute to change the badge's variant.

```html preview
<em9-badge-group variant="gray-lighter">
  <em9-badge slot="badge" variant="lighter-gray">New feature</em9-badge>
  We’ve just released a new feature
</em9-badge-group>
<br />
<em9-badge-group variant="gray-light">
  <em9-badge slot="badge" variant="light-gray" style="mix-blend-mode: multiply;">Basic Badge</em9-badge>
  We’ve just released a new feature
</em9-badge-group>
<br />
<em9-badge-group variant="gray">
  <em9-badge slot="badge" variant="gray">Basic Badge</em9-badge>
  I'm a badge Group Message
</em9-badge-group>
<br />
<em9-badge-group variant="primary-lighter">
  <em9-badge slot="badge" variant="lighter-primary">Basic Badge</em9-badge>
  I'm a badge Group Message
</em9-badge-group>
<br />
<em9-badge-group variant="primary-light">
  <em9-badge slot="badge" variant="light-primary">Basic Badge</em9-badge>
  I'm a badge Group Message
</em9-badge-group>
<br />
<em9-badge-group variant="primary">
  <em9-badge slot="badge" variant="primary">Basic Badge</em9-badge>
  I'm a badge Group Message
</em9-badge-group>
<br />

<em9-badge-group variant="warning-lighter">
  <em9-badge slot="badge" variant="lighter-warning">Basic Badge</em9-badge>
  I'm a badge Group Message
</em9-badge-group>
<br />
<em9-badge-group variant="warning-light">
  <em9-badge slot="badge" variant="light-warning">Basic Badge</em9-badge>
  I'm a badge Group Message
</em9-badge-group>
<br />
<em9-badge-group variant="warning">
  <em9-badge slot="badge" variant="warning">Basic Badge</em9-badge>
  I'm a badge Group Message
</em9-badge-group>
<br />

<em9-badge-group variant="success-lighter">
  <em9-badge slot="badge" variant="lighter-success">Basic Badge</em9-badge>
  I'm a badge Group Message
</em9-badge-group>
<br />
<em9-badge-group variant="success-light">
  <em9-badge slot="badge" variant="light-success">Basic Badge</em9-badge>
  I'm a badge Group Message
</em9-badge-group>
<br />
<em9-badge-group variant="success">
  <em9-badge slot="badge" variant="success">Basic Badge</em9-badge>
  I'm a badge Group Message
</em9-badge-group>
<br />

<em9-badge-group variant="danger-lighter">
  <em9-badge slot="badge" variant="lighter-danger">Basic Badge</em9-badge>
  I'm a badge Group Message
</em9-badge-group>
<br />
<em9-badge-group variant="danger-light">
  <em9-badge slot="badge" variant="light-danger">Basic Badge</em9-badge>
  I'm a badge Group Message
</em9-badge-group>
<br />
<em9-badge-group variant="danger">
  <em9-badge slot="badge" variant="danger">Basic Badge</em9-badge>
  I'm a badge Group Message
</em9-badge-group>
```

```jsx react
import { em9BadgeGroup, em9Badge } from 'em9webcomponents/dist/react';
const App = () => (
  <>
    <em9BadgeGroup variant="gray-lighter">
      <em9Badge slot="badge" variant="lighter-gray">
        New feature
      </em9Badge>
      We’ve just released a new feature
    </em9BadgeGroup>
    <br />
    <em9BadgeGroup variant="gray-light">
      <em9Badge slot="badge" variant="light-gray" style="mix-blend-mode: multiply;">
        Basic Badge
      </em9Badge>
      We’ve just released a new feature
    </em9BadgeGroup>
    <br />
    <em9BadgeGroup variant="gray">
      <em9Badge slot="badge" variant="gray">
        Basic Badge
      </em9Badge>
      I'm a badge Group Message
    </em9BadgeGroup>
    <br />
    <em9BadgeGroup variant="primary-lighter">
      <em9Badge slot="badge" variant="lighter-primary">
        Basic Badge
      </em9Badge>
      I'm a badge Group Message
    </em9BadgeGroup>
    <br />
    <em9BadgeGroup variant="primary-light">
      <em9Badge slot="badge" variant="light-primary">
        Basic Badge
      </em9Badge>
      I'm a badge Group Message
    </em9BadgeGroup>
    <br />
    <em9BadgeGroup variant="primary">
      <em9Badge slot="badge" variant="primary">
        Basic Badge
      </em9Badge>
      I'm a badge Group Message
    </em9BadgeGroup>
    <br />

    <em9BadgeGroup variant="warning-lighter">
      <em9Badge slot="badge" variant="lighter-warning">
        Basic Badge
      </em9Badge>
      I'm a badge Group Message
    </em9BadgeGroup>
    <br />
    <em9BadgeGroup variant="warning-light">
      <em9Badge slot="badge" variant="light-warning">
        Basic Badge
      </em9Badge>
      I'm a badge Group Message
    </em9BadgeGroup>
    <br />
    <em9BadgeGroup variant="warning">
      <em9Badge slot="badge" variant="warning">
        Basic Badge
      </em9Badge>
      I'm a badge Group Message
    </em9BadgeGroup>
    <br />

    <em9BadgeGroup variant="success-lighter">
      <em9Badge slot="badge" variant="lighter-success">
        Basic Badge
      </em9Badge>
      I'm a badge Group Message
    </em9BadgeGroup>
    <br />
    <em9BadgeGroup variant="success-light">
      <em9Badge slot="badge" variant="light-success">
        Basic Badge
      </em9Badge>
      I'm a badge Group Message
    </em9BadgeGroup>
    <br />
    <em9BadgeGroup variant="success">
      <em9Badge slot="badge" variant="success">
        Basic Badge
      </em9Badge>
      I'm a badge Group Message
    </em9BadgeGroup>
    <br />

    <em9BadgeGroup variant="danger-lighter">
      <em9Badge slot="badge" variant="lighter-danger">
        Basic Badge
      </em9Badge>
      I'm a badge Group Message
    </em9BadgeGroup>
    <br />
    <em9BadgeGroup variant="danger-light">
      <em9Badge slot="badge" variant="light-danger">
        Basic Badge
      </em9Badge>
      I'm a badge Group Message
    </em9BadgeGroup>
    <br />
    <em9BadgeGroup variant="danger">
      <em9Badge slot="badge" variant="danger">
        Basic Badge
      </em9Badge>
      I'm a badge Group Message
    </em9BadgeGroup>
  </>
);
```

### Badge group with icon

Use `iconname` attribute to addicon.

```html preview
<em9-badge-group variant="gray-lighter" size="medium" iconname="outline-arrow-right-1">
  <em9-badge slot="badge" variant="lighter-gray" size="small">New feature</em9-badge>
  We’ve just released a new feature
</em9-badge-group>
<br />
<em9-badge-group iconname="outline-arrow-right-1">
  <em9-badge slot="badge" variant="lighter-primary">New feature</em9-badge>
  We’ve just released a new feature
</em9-badge-group>
```

```jsx react
import { em9BadgeGroup, em9Badge } from 'em9webcomponents/dist/react';
const App = () => (
  <>
    <em9BadgeGroup variant="gray-lighter" size="medium" iconname="outline-arrow-right-1">
      <em9Badge slot="badge" variant="lighter-gray" size="small">
        New feature
      </em9Badge>
      We’ve just released a new feature
    </em9BadgeGroup>
    <br />
    <em9BadgeGroup iconname="outline-arrow-right-1">
      <em9Badge slot="badge" variant="lighter-primary">
        New feature
      </em9Badge>
      We’ve just released a new feature
    </em9BadgeGroup>
  </>
);
```

### Size

Set the `size` attribute to change the badge's size.

```html preview
<em9-badge-group variant="gray-lighter" iconname="outline-arrow-right-1" size="medium">
  <em9-badge slot="badge" variant="lighter-gray" size="small">New feature</em9-badge>
  We’ve just released a new feature
</em9-badge-group>
<br />
<em9-badge-group variant="gray-lighter" iconname="outline-arrow-right-1">
  <em9-badge slot="badge" variant="lighter-gray">New feature</em9-badge>
  We’ve just released a new feature
</em9-badge-group>
```

```jsx react
import { em9BadgeGroup, em9Badge } from 'em9webcomponents/dist/react';
const App = () => (
  <>
    <em9BadgeGroup variant="gray-lighter" iconname="outline-arrow-right-1" size="medium">
      <em9Badge slot="badge" variant="lighter-gray" size="small">
        New feature
      </em9Badge>
      We’ve just released a new feature
    </em9BadgeGroup>
    <br />
    <em9BadgeGroup variant="gray-lighter" iconname="outline-arrow-right-1">
      <em9Badge slot="badge" variant="lighter-gray">
        New feature
      </em9Badge>
      We’ve just released a new feature
    </em9BadgeGroup>
  </>
);
```

### Badge on the Right

Use `badgeRight` attribute for place badge on right.

```html preview
<em9-badge-group badgeRight variant="gray-lighter" size="medium">
  <em9-badge slot="badge" variant="lighter-gray" size="small"
    ><em9-icon slot="suffix" name="linear-arrow-right"></em9-icon> Success</em9-badge
  >
  You’ve updated your profile and details
</em9-badge-group>
<br />
<em9-badge-group badgeRight>
  <em9-badge slot="badge" variant="lighter-primary">
    <em9-icon slot="suffix" name="linear-arrow-right"></em9-icon>
    Success
  </em9-badge>
  You’ve updated your profile and details
</em9-badge-group>
```

```jsx react
import { em9BadgeGroup, em9Badge } from 'em9webcomponents/dist/react';
const App = () => (
  <>
    <em9BadgeGroup badgeRight variant="gray-lighter" size="medium">
      <em9Badge slot="badge" variant="lighter-gray" rightIcon="outline-arrow-right-1" size="small">
        New feature
      </em9Badge>
      We’ve just released a new feature
    </em9BadgeGroup>
    <br />
    <em9BadgeGroup badgeRight>
      <em9Badge slot="badge" variant="lighter-primary" rightIcon="outline-arrow-right-1">
        New feature
      </em9Badge>
      We’ve just released a new feature
    </em9BadgeGroup>
  </>
);
```

[component-metadata:em9-badge-group]
