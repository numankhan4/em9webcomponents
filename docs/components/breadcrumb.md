# Breadcrumb

[component-header:em9-breadcrumb]

Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.

Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.

```html preview
<em9-breadcrumb>
  <em9-breadcrumb-item>Catalog</em9-breadcrumb-item>
  <em9-breadcrumb-item>Clothing</em9-breadcrumb-item>
  <em9-breadcrumb-item>Women's</em9-breadcrumb-item>
  <em9-breadcrumb-item>Shirts &amp; Tops</em9-breadcrumb-item>
</em9-breadcrumb>
```

```jsx react
import { em9Breadcrumb, em9BreadcrumbItem } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Breadcrumb>
    <em9BreadcrumbItem>Catalog</em9BreadcrumbItem>
    <em9BreadcrumbItem>Clothing</em9BreadcrumbItem>
    <em9BreadcrumbItem>Women's</em9BreadcrumbItem>
    <em9BreadcrumbItem>Shirts &amp; Tops</em9BreadcrumbItem>
  </em9Breadcrumb>
);
```

## Examples

### Breadcrumb Links

By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you'll need to add event listeners to handle clicks.

For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an `href` attribute to it. Now, when the user activates it, they'll be taken to the corresponding page — no event listeners required.

```html preview
<em9-breadcrumb>
  <em9-breadcrumb-item href="https://example.com/home">Homepage</em9-breadcrumb-item>

  <em9-breadcrumb-item href="https://example.com/home/services">Our Services</em9-breadcrumb-item>

  <em9-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</em9-breadcrumb-item>

  <em9-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</em9-breadcrumb-item>
</em9-breadcrumb>
```

```jsx react
import { em9Breadcrumb, em9BreadcrumbItem } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Breadcrumb>
    <em9BreadcrumbItem href="https://example.com/home">Homepage</em9BreadcrumbItem>

    <em9BreadcrumbItem href="https://example.com/home/services">Our Services</em9BreadcrumbItem>

    <em9BreadcrumbItem href="https://example.com/home/services/digital">Digital Media</em9BreadcrumbItem>

    <em9BreadcrumbItem href="https://example.com/home/services/digital/web-design">Web Design</em9BreadcrumbItem>
  </em9Breadcrumb>
);
```

### Custom Separators

Use the `separator` slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.

```html preview
<em9-breadcrumb>
  <em9-icon name="dot" slot="separator"></em9-icon>
  <em9-breadcrumb-item>First</em9-breadcrumb-item>
  <em9-breadcrumb-item>Second</em9-breadcrumb-item>
  <em9-breadcrumb-item>Third</em9-breadcrumb-item>
</em9-breadcrumb>

<br />

<em9-breadcrumb>
  <em9-icon name="arrow-right" slot="separator"></em9-icon>
  <em9-breadcrumb-item>First</em9-breadcrumb-item>
  <em9-breadcrumb-item>Second</em9-breadcrumb-item>
  <em9-breadcrumb-item>Third</em9-breadcrumb-item>
</em9-breadcrumb>

<br />

<em9-breadcrumb>
  <span slot="separator">/</span>
  <em9-breadcrumb-item>First</em9-breadcrumb-item>
  <em9-breadcrumb-item>Second</em9-breadcrumb-item>
  <em9-breadcrumb-item>Third</em9-breadcrumb-item>
</em9-breadcrumb>
```

```jsx react
import 'em9webcomponents/dist/components/icon/icon.js';
import { em9Breadcrumb, em9BreadcrumbItem, em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Breadcrumb>
      <em9Icon name="dot" slot="separator" />
      <em9BreadcrumbItem>First</em9BreadcrumbItem>
      <em9BreadcrumbItem>Second</em9BreadcrumbItem>
      <em9BreadcrumbItem>Third</em9BreadcrumbItem>
    </em9Breadcrumb>

    <br />

    <em9Breadcrumb>
      <em9Icon name="arrow-right" slot="separator" />
      <em9BreadcrumbItem>First</em9BreadcrumbItem>
      <em9BreadcrumbItem>Second</em9BreadcrumbItem>
      <em9BreadcrumbItem>Third</em9BreadcrumbItem>
    </em9Breadcrumb>

    <br />

    <em9Breadcrumb>
      <span slot="separator">/</span>
      <em9BreadcrumbItem>First</em9BreadcrumbItem>
      <em9BreadcrumbItem>Second</em9BreadcrumbItem>
      <em9BreadcrumbItem>Third</em9BreadcrumbItem>
    </em9Breadcrumb>
  </>
);
```

### Prefixes

Use the `prefix` slot to add content before any breadcrumb item.

```html preview
<em9-breadcrumb>
  <em9-breadcrumb-item>
    <em9-icon slot="prefix" name="house"></em9-icon>
    Home
  </em9-breadcrumb-item>
  <em9-breadcrumb-item>Articles</em9-breadcrumb-item>
  <em9-breadcrumb-item>Traveling</em9-breadcrumb-item>
</em9-breadcrumb>
```

```jsx react
import { em9Breadcrumb, em9BreadcrumbItem, em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Breadcrumb>
    <em9BreadcrumbItem>
      <em9Icon slot="prefix" name="house" />
      Home
    </em9BreadcrumbItem>
    <em9BreadcrumbItem>Articles</em9BreadcrumbItem>
    <em9BreadcrumbItem>Traveling</em9BreadcrumbItem>
  </em9Breadcrumb>
);
```

### Suffixes

Use the `suffix` slot to add content after any breadcrumb item.

```html preview
<em9-breadcrumb>
  <em9-breadcrumb-item>Documents</em9-breadcrumb-item>
  <em9-breadcrumb-item>Policies</em9-breadcrumb-item>
  <em9-breadcrumb-item>
    Security
    <em9-icon slot="suffix" name="shield-lock"></em9-icon>
  </em9-breadcrumb-item>
</em9-breadcrumb>
```

```jsx react
import { em9Breadcrumb, em9BreadcrumbItem, em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Breadcrumb>
    <em9BreadcrumbItem>Documents</em9BreadcrumbItem>
    <em9BreadcrumbItem>Policies</em9BreadcrumbItem>
    <em9BreadcrumbItem>
      Security
      <em9Icon slot="suffix" name="shield-lock"></em9Icon>
    </em9BreadcrumbItem>
  </em9Breadcrumb>
);
```

### With Dropdowns

Dropdown menus can be placed in a prefix or suffix slot to provide additional options.

```html preview
<em9-breadcrumb>
  <em9-breadcrumb-item>Homepage</em9-breadcrumb-item>
  <em9-breadcrumb-item>Our Services</em9-breadcrumb-item>
  <em9-breadcrumb-item>Digital Media</em9-breadcrumb-item>
  <em9-breadcrumb-item>
    Web Design
    <em9-dropdown slot="suffix">
      <em9-button slot="trigger" size="small" circle>
        <em9-icon label="More options" name="three-dots"></em9-icon>
      </em9-button>
      <em9-menu>
        <em9-menu-item checked>Web Design</em9-menu-item>
        <em9-menu-item>Web Development</em9-menu-item>
        <em9-menu-item>Marketing</em9-menu-item>
      </em9-menu>
    </em9-dropdown>
  </em9-breadcrumb-item>
</em9-breadcrumb>
```

```jsx react
import {
  SlBreadcrumb,
  em9BreadcrumbItem,
  SlButton,
  SlDropdown,
  SlIcon,
  SlMenu,
  em9MenuItem
} from 'em9webcomponents/dist/react';

const App = () => (
  <em9Breadcrumb>
    <em9BreadcrumbItem>Homepage</em9BreadcrumbItem>
    <em9BreadcrumbItem>Our Services</em9BreadcrumbItem>
    <em9BreadcrumbItem>Digital Media</em9BreadcrumbItem>
    <em9BreadcrumbItem>
      Web Design
      <em9Dropdown slot="suffix">
        <em9Button slot="trigger" size="small" circle>
          <em9Icon label="More options" name="three-dots"></em9Icon>
        </em9Button>
        <em9Menu>
          <em9MenuItem checked>Web Design</em9MenuItem>
          <em9MenuItem>Web Development</em9MenuItem>
          <em9MenuItem>Marketing</em9MenuItem>
        </em9Menu>
      </em9Dropdown>
    </em9BreadcrumbItem>
  </em9Breadcrumb>
);
```

[component-metadata:em9-breadcrumb]
