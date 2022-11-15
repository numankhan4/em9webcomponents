# Visually Hidden

[component-header:em9-visually-hidden]

The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.

According to [The A11Y Project](https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/), "there are real world situations where visually hiding content may be appropriate, while the content should remain available to assistive technologies, such as screen readers. For instance, hiding a search field's label as a common magnifying glass icon is used in its stead."

Since visually hidden content can receive focus when tabbing, the element will become visible when something inside receives focus. This behavior is intentional, as sighted keyboards user won't be able to determine where the focus indicator is without it.

```html preview
<div style="min-height: 100px;">
  <em9-visually-hidden>
    <a href="#">Skip to main content</a>
  </em9-visually-hidden>
</div>
```

```jsx react
import { em9VisuallyHidden } from 'em9webcomponents/dist/react';
const App = () => (
  <div style="min-height: 100px;">
    <em9VisuallyHidden>
      <a href="#">Skip to main content</a>
    </em9VisuallyHidden>
  </div>
);
```

## Examples

### Links That Open in New Windows

In this example, the link will open a new window. Screen readers will announce "opens in a new window" even though the text content isn't visible to sighted users.

```html preview
<a href="https://example.com/" target="_blank">
  Visit External Page
  <em9-icon name="box-arrow-up-right"></em9-icon>
  <em9-visually-hidden>opens in a new window</em9-visually-hidden>
</a>
```

```jsx react
import { em9VisuallyHidden , em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
	<a href="https://example.com/" target="_blank">
	  Visit External Page
	  <em9Iicon name="box-arrow-up-right"></em9Icon>
	  <em9VisuallyHidden>opens in a new window</em9VisuallyHidden>
	</a>
);
```

### Content Conveyed By Context

Adding a title or label may seem redundant at times, but they're very helpful for unsighted users. Rather than omit them, you can provide context to unsighted users with visually hidden content.

```html preview
<em9-card style="width: 100%; max-width: 360px;">
  <header>
    <em9-visually-hidden>Personal Info</em9-visually-hidden>
  </header>
  <em9-input label="Name" style="margin-bottom: .5rem;"></em9-input>
  <em9-input label="Email" type="email"></em9-input>
</em9-card>
```

```jsx react
import { em9VisuallyHidden , em9Input , em9Card } from 'em9webcomponents/dist/react';
const App = () => (
	<em9Card style="width: 100%; max-width: 360px;">
	  <header>
		<em9VisuallyHidden>Personal Info</em9VisuallyHidden>
	  </header>
	  <em9Input label="Name" style="margin-bottom: .5rem;"></em9-input>
	  <em9Input label="Email" type="email"></em9-input>
	</em9Card><em9Card style="width: 100%; max-width: 360px;">
	  <header>
		<em9VisuallyHidden>Personal Info</em9VisuallyHidden>
	  </header>
	  <em9Input label="Name" style="margin-bottom: .5rem;"></em9Input>
	  <em9Input label="Email" type="email"></em9Input>
	</em9Card>
);
```

[component-metadata:em9-visually-hidden]
