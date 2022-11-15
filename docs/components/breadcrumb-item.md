# Breadcrumb Item

[component-header:em9-breadcrumb-item]

Breadcrumb Items are used inside [breadcrumbs](/components/breadcrumb) to represent different links.

```html preview
<em9-breadcrumb>
  <em9-breadcrumb-item>
    <em9-icon slot="prefix" name="house"></em9-icon>
    Home
  </em9-breadcrumb-item>
  <em9-breadcrumb-item>Clothing</em9-breadcrumb-item>
  <em9-breadcrumb-item>Shirts</em9-breadcrumb-item>
</em9-breadcrumb>
```

```jsx react
import { em9Breadcrumb, em9BreadcrumbItem, em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Breadcrumb>
    <em9BreadcrumbItem>
      <em9Icon slot="prefix" name="house"></em9Icon>
      Home
    </em9BreadcrumbItem>
    <em9BreadcrumbItem>Clothing</em9BreadcrumbItem>
    <em9BreadcrumbItem>Shirts</em9BreadcrumbItem>
  </em9Breadcrumb>
);
```

?> Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).

[component-metadata:em9-breadcrumb-item]
