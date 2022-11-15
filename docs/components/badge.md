# Badge

[component-header:em9-badge]

Badges are used to draw attention and display statuses or counts.

```html preview
<em9-badge> Badge</em9-badge>
```

```jsx react
import { em9Badge } from 'em9webcomponents/dist/react';

const App = () => <em9Badge>Badge</em9Badge>;
```

## Examples

### Variants

Set the `variant` attribute to change the badge's variant.

```html preview
<div>
  <em9-badge variant="danger">Danger</em9-badge>
  <em9-badge variant="warning">Warning</em9-badge>
  <em9-badge variant="success">Success</em9-badge>
  <em9-badge variant="gray-blue">Gray blue</em9-badge>
  <em9-badge variant="blue">Blue</em9-badge>
  <em9-badge variant="primary">Primary</em9-badge>
  <em9-badge variant="indigo">Indigo</em9-badge>
  <em9-badge variant="purple">Purple</em9-badge>
  <em9-badge variant="pink">Pink</em9-badge>
  <em9-badge variant="rose">Rose</em9-badge>
  <em9-badge variant="orange">Orange</em9-badge>
</div>
<br />
<div>
  <em9-badge variant="light-gray">Light Gray</em9-badge>
  <em9-badge variant="lighter-blue">Blue light</em9-badge>
  <em9-badge variant="light-danger">Danger</em9-badge>
  <em9-badge variant="light-warning">Warning</em9-badge>
  <em9-badge variant="light-success">Success</em9-badge>
  <em9-badge variant="light-gray-blue">Gray blue</em9-badge>
  <em9-badge variant="light-blue">Blue</em9-badge>
  <em9-badge variant="light-primary">Primary</em9-badge>
  <em9-badge variant="light-indigo">Indigo</em9-badge>
  <em9-badge variant="light-purple">Purple</em9-badge>
  <em9-badge variant="light-pink">Pink</em9-badge>
  <em9-badge variant="light-rose">Rose</em9-badge>
  <em9-badge variant="light-orange">Orange</em9-badge>
</div>
```

```jsx react
import { em9Badge } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div>
      <em9Badge variant="danger">Danger</em9Badge>
      <em9Badge variant="warning">Warning</em9Badge>
      <em9Badge variant="success">Success</em9Badge>
      <em9Badge variant="gray-blue">Gray blue</em9Badge>
      <em9Badge variant="blue">Blue</em9Badge>
      <em9Badge variant="primary">Primary</em9Badge>
      <em9Badge variant="indigo">Indigo</em9Badge>
      <em9Badge variant="purple">Purple</em9Badge>
      <em9Badge variant="pink">Pink</em9Badge>
      <em9Badge variant="rose">Rose</em9Badge>
      <em9Badge variant="orange">Orange</em9Badge>
    </div>
    <br />
    <div>
      <em9Badge variant="light-gray">Light Gray</em9Badge>
      <em9Badge variant="lighter-blue">Blue light</em9Badge>
      <em9Badge variant="light-danger">Danger</em9Badge>
      <em9Badge variant="light-warning">Warning</em9Badge>
      <em9Badge variant="light-success">Success</em9Badge>
      <em9Badge variant="light-gray-blue">Gray blue</em9Badge>
      <em9Badge variant="light-blue">Blue</em9Badge>
      <em9Badge variant="light-primary">Primary</em9Badge>
      <em9Badge variant="light-indigo">Indigo</em9Badge>
      <em9Badge variant="light-purple">Purple</em9Badge>
      <em9Badge variant="light-pink">Pink</em9Badge>
      <em9Badge variant="light-rose">Rose</em9Badge>
      <em9Badge variant="light-orange">Orange</em9Badge>
    </div>
  </>
);
```

### Light Outline

Set the `outline` attribute to add the border on the light variants of badge's .

```html preview
<div>
  <em9-badge variant="light-gray" outline>Light Gray</em9-badge>
  <em9-badge variant="lighter-blue" outline>Blue light</em9-badge>
  <em9-badge variant="light-danger" outline>Danger</em9-badge>
  <em9-badge variant="light-warning" outline>Warning</em9-badge>
  <em9-badge variant="light-success" outline>Success</em9-badge>
  <em9-badge variant="light-gray-blue" outline>Gray blue</em9-badge>
  <em9-badge variant="light-blue" outline>Blue</em9-badge>
  <em9-badge variant="light-primary" outline>Primary</em9-badge>
  <em9-badge variant="light-indigo" outline>Indigo</em9-badge>
  <em9-badge variant="light-purple" outline>Purple</em9-badge>
  <em9-badge variant="light-pink" outline>Pink</em9-badge>
  <em9-badge variant="light-rose" outline>Rose</em9-badge>
  <em9-badge variant="light-orange" outline>Orange</em9-badge>
</div>
```

```jsx react
import { em9Badge } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div>
      <em9Badge variant="light-gray" outline>
        Light Gray
      </em9Badge>
      <em9Badge variant="lighter-blue" outline>
        Blue light
      </em9Badge>
      <em9Badge variant="light-danger" outline>
        Danger
      </em9Badge>
      <em9Badge variant="light-warning" outline>
        Warning
      </em9Badge>
      <em9Badge variant="light-success" outline>
        Success
      </em9Badge>
      <em9Badge variant="light-gray-blue" outline>
        Gray blue
      </em9Badge>
      <em9Badge variant="light-blue" outline>
        Blue
      </em9Badge>
      <em9Badge variant="light-primary" outline>
        Primary
      </em9Badge>
      <em9Badge variant="light-indigo" outline>
        Indigo
      </em9Badge>
      <em9Badge variant="light-purple" outline>
        Purple
      </em9Badge>
      <em9Badge variant="light-pink" outline>
        Pink
      </em9Badge>
      <em9Badge variant="light-rose" outline>
        Rose
      </em9Badge>
      <em9Badge variant="light-orange" outline>
        Orange
      </em9Badge>
    </div>
  </>
);
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html preview
<div>
  <em9-badge variant="danger" pill>Danger</em9-badge>
  <em9-badge variant="warning" pill>Warning</em9-badge>
  <em9-badge variant="success" pill>Success</em9-badge>
  <em9-badge variant="gray-blue" pill>Gray blue</em9-badge>
  <em9-badge variant="blue" pill>Blue</em9-badge>
  <em9-badge variant="primary" pill>Primary</em9-badge>
  <em9-badge variant="indigo" pill>Indigo</em9-badge>
  <em9-badge variant="purple" pill>Purple</em9-badge>
  <em9-badge variant="pink" pill>Pink</em9-badge>
  <em9-badge variant="rose" pill>Rose</em9-badge>
  <em9-badge variant="orange" pill>Orange</em9-badge>
</div>
<br />
<div>
  <em9-badge variant="light-gray" pill>Light Gray</em9-badge>
  <em9-badge variant="lighter-blue" pill>Blue light</em9-badge>
  <em9-badge variant="light-danger" pill>Danger</em9-badge>
  <em9-badge variant="light-warning" pill>Warning</em9-badge>
  <em9-badge variant="light-success" pill>Success</em9-badge>
  <em9-badge variant="light-gray-blue" pill>Gray blue</em9-badge>
  <em9-badge variant="light-blue" pill>Blue</em9-badge>
  <em9-badge variant="light-primary" pill>Primary</em9-badge>
  <em9-badge variant="light-indigo" pill>Indigo</em9-badge>
  <em9-badge variant="light-purple" pill>Purple</em9-badge>
  <em9-badge variant="light-pink" pill>Pink</em9-badge>
  <em9-badge variant="light-rose" pill>Rose</em9-badge>
  <em9-badge variant="light-orange" pill>Orange</em9-badge>
</div>
<br />
<div>
  <em9-badge variant="light-gray" outline pill>Light Gray</em9-badge>
  <em9-badge variant="lighter-blue" outline pill>Blue light</em9-badge>
  <em9-badge variant="light-danger" outline pill>Danger</em9-badge>
  <em9-badge variant="light-warning" outline pill>Warning</em9-badge>
  <em9-badge variant="light-success" outline pill>Success</em9-badge>
  <em9-badge variant="light-gray-blue" outline pill>Gray blue</em9-badge>
  <em9-badge variant="light-blue" outline pill>Blue</em9-badge>
  <em9-badge variant="light-primary" outline pill>Primary</em9-badge>
  <em9-badge variant="light-indigo" outline pill>Indigo</em9-badge>
  <em9-badge variant="light-purple" outline pill>Purple</em9-badge>
  <em9-badge variant="light-pink" outline pill>Pink</em9-badge>
  <em9-badge variant="light-rose" outline pill>Rose</em9-badge>
  <em9-badge variant="light-orange" outline pill>Orange</em9-badge>
</div>
```

```jsx react
import { em9Badge } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div>
      <em9Badge variant="danger" pill>
        Danger
      </em9Badge>
      <em9Badge variant="warning" pill>
        Warning
      </em9Badge>
      <em9Badge variant="success" pill>
        Success
      </em9Badge>
      <em9Badge variant="gray-blue" pill>
        Gray blue
      </em9Badge>
      <em9Badge variant="blue" pill>
        Blue
      </em9Badge>
      <em9Badge variant="primary" pill>
        Primary
      </em9Badge>
      <em9Badge variant="indigo" pill>
        Indigo
      </em9Badge>
      <em9Badge variant="purple" pill>
        Purple
      </em9Badge>
      <em9Badge variant="pink" pill>
        Pink
      </em9Badge>
      <em9Badge variant="rose" pill>
        Rose
      </em9Badge>
      <em9Badge variant="orange" pill>
        Orange
      </em9Badge>
    </div>
    <br />
    <div>
      <em9Badge variant="light-gray" pill>
        Light Gray
      </em9Badge>
      <em9Badge variant="lighter-blue" pill>
        Blue light
      </em9Badge>
      <em9Badge variant="light-danger" pill>
        Danger
      </em9Badge>
      <em9Badge variant="light-warning" pill>
        Warning
      </em9Badge>
      <em9Badge variant="light-success" pill>
        Success
      </em9Badge>
      <em9Badge variant="light-gray-blue" pill>
        Gray blue
      </em9Badge>
      <em9Badge variant="light-blue" pill>
        Blue
      </em9Badge>
      <em9Badge variant="light-primary" pill>
        Primary
      </em9Badge>
      <em9Badge variant="light-indigo" pill>
        Indigo
      </em9Badge>
      <em9Badge variant="light-purple" pill>
        Purple
      </em9Badge>
      <em9Badge variant="light-pink" pill>
        Pink
      </em9Badge>
      <em9Badge variant="light-rose" pill>
        Rose
      </em9Badge>
      <em9Badge variant="light-orange" pill>
        Orange
      </em9Badge>
    </div>
    <br />
    <div>
      <em9Badge variant="light-gray" outline pill>
        Light Gray
      </em9Badge>
      <em9Badge variant="lighter-blue" outline pill>
        Blue light
      </em9Badge>
      <em9Badge variant="light-danger" outline pill>
        Danger
      </em9Badge>
      <em9Badge variant="light-warning" outline pill>
        Warning
      </em9Badge>
      <em9Badge variant="light-success" outline pill>
        Success
      </em9Badge>
      <em9Badge variant="light-gray-blue" outline pill>
        Gray blue
      </em9Badge>
      <em9Badge variant="light-blue" outline pill>
        Blue
      </em9Badge>
      <em9Badge variant="light-primary" outline pill>
        Primary
      </em9Badge>
      <em9Badge variant="light-indigo" outline pill>
        Indigo
      </em9Badge>
      <em9Badge variant="light-purple" outline pill>
        Purple
      </em9Badge>
      <em9Badge variant="light-pink" outline pill>
        Pink
      </em9Badge>
      <em9Badge variant="light-rose" outline pill>
        Rose
      </em9Badge>
      <em9Badge variant="light-orange" outline pill>
        Orange
      </em9Badge>
    </div>
  </>
);
```

### Icon Badges

```html preview
<div>
  <em9-badge variant="danger" size="small"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="warning" size="large"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="success"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="gray-blue"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="blue"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="primary"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="indigo"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="purple"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="pink"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="rose"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="orange"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
</div>
<br />
<div>
  <em9-badge variant="light-gray"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="lighter-blue"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-danger"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-warning"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-success"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-gray-blue"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-blue"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-primary"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-indigo"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-purple"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-pink"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-rose"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-orange"><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
</div>
<br />
<div>
  <em9-badge variant="light-gray" outline><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="lighter-blue" outline><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-danger" outline><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-warning" outline><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-success" outline><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-gray-blue" outline><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-blue" outline><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-primary" outline><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-indigo" outline><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-purple" outline><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-pink" outline><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-rose" outline><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
  <em9-badge variant="light-orange" outline><em9-icon name="outline-add" label="add"></em9-icon></em9-badge>
</div>
```

```jsx react
import { em9Badge, em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div>
      <em9Badge variant="danger">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="warning">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="success">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="gray-blue">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="blue">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="primary">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="indigo">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="purple">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="pink">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="rose">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="orange">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
    </div>
    <br />
    <div>
      <em9Badge variant="light-gray">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="lighter-blue">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-danger">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-warning">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-success">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-gray-blue">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-blue">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-primary">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-indigo">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-purple">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-pink">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-rose">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-orange">
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
    </div>
    <br />
    <div>
      <em9Badge variant="light-gray" outline>
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="lighter-blue" outline>
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-danger" outline>
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-warning" outline>
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-success" outline>
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-gray-blue" outline>
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-blue" outline>
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-primary" outline>
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-indigo" outline>
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-purple" outline>
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-pink" outline>
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-rose" outline>
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-orange" outline>
        <em9Icon name="outline-add" label="add"></em9Icon>
      </em9Badge>
    </div>
  </>
);
```

### Badge Sizes

Use the `size` attribute to Change the badge size.

```html preview
<div>
  <em9-badge variant="primary" size="small">Primary</em9-badge>
  <em9-badge variant="light-primary" size="small">Primary</em9-badge>
  <em9-badge variant="light-primary" outline size="small">Primary</em9-badge>
</div>
<br />
<div>
  <em9-badge variant="primary">Primary</em9-badge>
  <em9-badge variant="light-primary">Primary</em9-badge>
  <em9-badge variant="light-primary" outline>Primary</em9-badge>
</div>
<br />
<div>
  <em9-badge variant="primary" size="large">Primary</em9-badge>
  <em9-badge variant="light-primary" size="large">Primary</em9-badge>
  <em9-badge variant="light-primary" outline size="large">Primary</em9-badge>
</div>
```

```jsx react
import { em9Badge, em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
  <>
    <div>
      <em9Badge variant="primary" size="small">
        Primary
      </em9Badge>
      <em9Badge variant="light-primary" size="small">
        Primary
      </em9Badge>
      <em9Badge variant="light-primary" outline size="small">
        Primary
      </em9Badge>
    </div>
    <br />
    <div>
      <em9Badge variant="primary">Primary</em9Badge>
      <em9Badge variant="light-primary">Primary</em9Badge>
      <em9Badge variant="light-primary" outline>
        Primary
      </em9Badge>
    </div>
    <br />
    <div>
      <em9Badge variant="primary" size="large">
        Primary
      </em9Badge>
      <em9Badge variant="light-primary" size="large">
        Primary
      </em9Badge>
      <em9Badge variant="light-primary" outline size="large">
        Primary
      </em9Badge>
    </div>
  </>
);
```

### Badges with left Icons

Use the `prefix` slot give badges an icon on the left side.

```html preview
<em9-badge variant="primary">
  <em9-icon slot="prefix" name="bold-settings"></em9-icon>
  Primary
</em9-badge>
<em9-badge variant="success">
  <em9-icon slot="prefix" name="outline-arrow-up-3"></em9-icon>
  Label
</em9-badge>
<em9-badge variant="success" size="small">
  <em9-icon slot="prefix" name="outline-arrow-up-3"></em9-icon>
  Label</em9-badge
>
<em9-badge variant="success" size="large">
  <em9-icon slot="prefix" name="outline-arrow-up-3"></em9-icon>
  Label</em9-badge
>
<em9-badge variant="light-indigo">
  <em9-icon slot="prefix" name="bold-settings"></em9-icon>
  Indigo
</em9-badge>
<em9-badge variant="warning" outline>
  <em9-icon slot="prefix" name="outline-3d-cube-scan"></em9-icon>
  Warning
</em9-badge>
<em9-badge variant="danger">
  <em9-icon slot="prefix" name="outline-3d-cube-scan"></em9-icon>
  Danger
</em9-badge>
```

```jsx react
import { em9Badge, em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
  <>
    <em9Badge variant="primary">
      <em9Icon slot="prefix" name="bold-settings"></em9Icon>
      Primary
    </em9Badge>
    <em9Badge variant="success">
      <em9Icon slot="prefix" name="outline-arrow-up-3"></em9Icon>
      Label
    </em9Badge>
    <em9Badge variant="success" size="small">
      <em9Icon slot="prefix" name="outline-arrow-up-3"></em9Icon>
      Label
    </em9Badge>
    <em9Badge variant="success" size="large">
      <em9Icon slot="prefix" name="outline-arrow-up-3"></em9Icon>
      Label
    </em9Badge>
    <em9Badge variant="light-indigo">
      <em9Icon slot="prefix" name="bold-settings"></em9Icon>
      Indigo
    </em9Badge>
    <em9Badge variant="warning" outline>
      <em9Icon slot="prefix" name="outline-3d-cube-scan"></em9Icon>
      Warning
    </em9Badge>
    <em9Badge variant="danger">
      <em9Icon slot="prefix" name="outline-3d-cube-scan"></em9Icon>
      Danger
    </em9Badge>
  </>
);
```

### Badges with image

Use the em9-avatar in `prefix` to add images in badge.

```html preview
<em9-badge variant="light-primary" size="small" outline>
  <em9-avatar slot="prefix" image="/assets/images/AU.svg"></em9-avatar>
  Label
</em9-badge>
<em9-badge variant="light-primary" size="small">
  <em9-avatar slot="prefix" image="/assets/images/AU.svg"></em9-avatar>
  Label
</em9-badge>
<em9-badge variant="primary" size="small">
  <em9-avatar slot="prefix" image="/assets/images/AU.svg"></em9-avatar>
  Label
</em9-badge>
<br /><br />
<em9-badge variant="light-success" outline>
  <em9-avatar slot="prefix" image="/assets/images/AU.svg"></em9-avatar>
  Label
</em9-badge>
<em9-badge variant="light-success">
  <em9-avatar slot="prefix" image="/assets/images/AU.svg"></em9-avatar>
  Label
</em9-badge>
<em9-badge variant="success">
  <em9-avatar slot="prefix" image="/assets/images/AU.svg"></em9-avatar>
  Label
</em9-badge>
<br /><br />
<em9-badge variant="light-danger" size="large" outline>
  <em9-avatar slot="prefix" image="/assets/images/AU.svg"></em9-avatar>
  Label
</em9-badge>
<em9-badge variant="light-danger" size="large">
  <em9-avatar slot="prefix" image="/assets/images/AU.svg"></em9-avatar>
  Label
</em9-badge>
<em9-badge variant="danger" size="large">
  <em9-avatar slot="prefix" image="/assets/images/AU.svg"></em9-avatar>
  Label
</em9-badge>
```

```jsx react
import { em9Badge, em9Avatar } from 'em9webcomponents/dist/react';
const App = () => (
  <>
    <em9Badge variant="light-primary" size="small" outline>
      <em9Avatar slot="prefix" image="/assets/images/AU.svg"></em9Avatar>
      Label
    </em9Badge>
    <em9Badge variant="light-primary" size="small">
      <em9Avatar slot="prefix" image="/assets/images/AU.svg"></em9Avatar>
      Label
    </em9Badge>
    <em9Badge variant="primary" size="small">
      <em9Avatar slot="prefix" image="/assets/images/AU.svg"></em9Avatar>
      Label
    </em9Badge>
    <br />
    <br />
    <em9Badge variant="light-success" outline>
      <em9Avatar slot="prefix" image="/assets/images/AU.svg"></em9Avatar>
      Label
    </em9Badge>
    <em9Badge variant="light-success">
      <em9Avatar slot="prefix" image="/assets/images/AU.svg"></em9Avatar>
      Label
    </em9Badge>
    <em9Badge variant="success">
      <em9Avatar slot="prefix" image="/assets/images/AU.svg"></em9Avatar>
      Label
    </em9Badge>
    <br />
    <br />
    <em9Badge variant="light-danger" size="large" outline>
      <em9Avatar slot="prefix" image="/assets/images/AU.svg"></em9Avatar>
      Label
    </em9Badge>
    <em9Badge variant="light-danger" size="large">
      <em9Avatar slot="prefix" image="/assets/images/AU.svg"></em9Avatar>
      Label
    </em9Badge>
    <em9Badge variant="danger" size="large">
      <em9Avatar slot="prefix" image="/assets/images/AU.svg"></em9Avatar>
      Label
    </em9Badge>
  </>
);
```

### Badges with right icon

Use the `suffix` slot to give badges right icons.

```html preview
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-badge variant="light-danger" size="small" outline>
    Label
    <em9-icon slot="suffix" name="linear-arrow-right"></em9-icon>
  </em9-badge>
  <em9-badge variant="light-danger" size="small">
    Label
    <em9-icon slot="suffix" name="linear-arrow-right"></em9-icon>
  </em9-badge>
  <em9-badge variant="danger" size="small" outline>
    Label
    <em9-icon slot="suffix" name="linear-arrow-right"></em9-icon>
  </em9-badge>
</div>
<br />
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-badge variant="light-success" outline>
    Label
    <em9-icon slot="suffix" name="linear-arrow-right"></em9-icon>
  </em9-badge>
  <em9-badge variant="light-success">
    Label
    <em9-icon slot="suffix" name="linear-arrow-right"></em9-icon>
  </em9-badge>
  <em9-badge variant="success">
    Label
    <em9-icon slot="suffix" name="linear-arrow-right"></em9-icon>
  </em9-badge>
</div>
<br />
<div style="display:flex; gap:10px;flex-wrap: wrap;">
  <em9-badge variant="light-primary" size="large" outline>
    Label
    <em9-icon slot="suffix" name="linear-arrow-right"></em9-icon>
  </em9-badge>
  <em9-badge variant="light-primary" size="large">
    Label
    <em9-icon slot="suffix" name="linear-arrow-right"></em9-icon>
  </em9-badge>
  <em9-badge variant="primary" size="large" outline>
    Label
    <em9-icon slot="suffix" name="linear-arrow-right"></em9-icon>
  </em9-badge>
</div>
```

```jsx react
import { em9Badge, em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
  <>
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Badge variant="light-danger" size="small" outline>
        Label
        <em9Icon slot="suffix" name="linear-arrow-right"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-danger" size="small">
        Label
        <em9Icon slot="suffix" name="linear-arrow-right"></em9Icon>
      </em9Badge>
      <em9Badge variant="danger" size="small" outline>
        Label
        <em9Icon slot="suffix" name="linear-arrow-right"></em9Icon>
      </em9Badge>
    </div>
    <br />
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Badge variant="light-success" outline>
        Label
        <em9Icon slot="suffix" name="linear-arrow-right"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-success">
        Label
        <em9Icon slot="suffix" name="linear-arrow-right"></em9Icon>
      </em9Badge>
      <em9Badge variant="success">
        Label
        <em9Icon slot="suffix" name="linear-arrow-right"></em9Icon>
      </em9Badge>
    </div>
    <br />
    <div style="display:flex; gap:10px;flex-wrap: wrap;">
      <em9Badge variant="light-primary" size="large" outline>
        Label
        <em9Icon slot="suffix" name="linear-arrow-right"></em9Icon>
      </em9Badge>
      <em9Badge variant="light-primary" size="large">
        Label
        <em9Icon slot="suffix" name="linear-arrow-right"></em9Icon>
      </em9Badge>
      <em9Badge variant="primary" size="large" outline>
        Label
        <em9Icon slot="suffix" name="linear-arrow-right"></em9Icon>
      </em9Badge>
    </div>
  </>
);
```

### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html preview
<div class="badge-pulse">
  <em9-badge variant="primary" size="small" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
  <em9-badge variant="success" size="small" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
  <em9-badge variant="indigo" size="small" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
  <em9-badge variant="warning" size="small" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
  <em9-badge variant="danger" size="small" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
</div>
<br />
<div class="badge-pulse">
  <em9-badge variant="primary" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
  <em9-badge variant="success" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
  <em9-badge variant="indigo" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
  <em9-badge variant="warning" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
  <em9-badge variant="danger" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
</div>
<br />
<div class="badge-pulse">
  <em9-badge variant="primary" size="large" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
  <em9-badge variant="success" size="large" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
  <em9-badge variant="indigo" size="large" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
  <em9-badge variant="warning" size="large" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
  <em9-badge variant="danger" size="large" pulse><em9-icon name="twotone-heart"></em9-icon></em9-badge>
</div>

<style>
  .badge-pulse em9-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx react
import { em9Badge, em9Icon } from 'em9webcomponents/dist/react';

const css = `
  .badge-pulse em9-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div class="badge-pulse">
      <em9Badge variant="primary" size="small" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
      <em9Badge variant="success" size="small" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
      <em9Badge variant="indigo" size="small" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
      <em9Badge variant="warning" size="small" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
      <em9Badge variant="danger" size="small" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
    </div>
    <br />
    <div class="badge-pulse">
      <em9Badge variant="primary" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
      <em9Badge variant="success" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
      <em9Badge variant="indigo" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
      <em9Badge variant="warning" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
      <em9Badge variant="danger" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
    </div>
    <br />
    <div class="badge-pulse">
      <em9Badge variant="primary" size="large" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
      <em9Badge variant="success" size="large" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
      <em9Badge variant="indigo" size="large" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
      <em9Badge variant="warning" size="large" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
      <em9Badge variant="danger" size="large" pulse>
        <em9Icon name="twotone-heart"></em9Icon>
      </em9Badge>
    </div>

    <style>{css}</style>
  </>
);
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html preview
<div style="display:flex; gap:20px;flex-wrap: wrap;">
  <em9-button>
    Requests
    <em9-badge>30</em9-badge>
  </em9-button>

  <em9-button style="margin-inline-start: 1rem;">
    Warnings
    <em9-badge variant="warning">8</em9-badge>
  </em9-button>

  <em9-button style="margin-inline-start: 1rem;">
    Errors
    <em9-badge variant="danger">6</em9-badge>
  </em9-button>
</div>
```

```jsx react
import { em9Badge, em9Button } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div style="display:flex; gap:20px;flex-wrap: wrap;">
      <em9Button>
        Requests
        <em9Badge>30</em9Badge>
      </em9Button>

      <em9Button style={{ marginInlineStart: '1rem' }}>
        Warnings
        <em9Badge variant="warning">8</em9Badge>
      </em9Button>

      <em9Button style={{ marginInlineStart: '1rem' }}>
        Errors
        <em9Badge variant="danger">6</em9Badge>
      </em9Button>
    </div>
  </>
);
```

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html preview
<em9-menu style="max-width: 240px;">
  <em9-menu-label>Messages</em9-menu-label>
  <em9-menu-item>Comments <em9-badge slot="suffix" variant="indigo">4</em9-badge></em9-menu-item>
  <em9-menu-item>Replies <em9-badge slot="suffix" variant="indigo">12</em9-badge></em9-menu-item>
</em9-menu>
```

```jsx react
import { em9Badge, em9Button, em9Menu, em9MenuItem, em9MenuLabel } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Menu
    style={{
      maxWidth: '240px',
      border: 'solid 1px var(--em9-panel-border-color)',
      borderRadius: 'var(--em9-border-radius-medium)'
    }}
  >
    <em9MenuLabel>Messages</em9MenuLabel>
    <em9MenuItem>
      Comments
      <em9Badge slot="suffix" variant="indigo">
        4
      </em9Badge>
    </em9MenuItem>
    <em9MenuItem>
      Replies
      <em9Badge slot="suffix" variant="indigo">
        12
      </em9Badge>
    </em9MenuItem>
  </em9Menu>
);
```

[component-metadata:em9-badge]
