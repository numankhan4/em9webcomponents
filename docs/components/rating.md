# Rating

[component-header:em9-rating]

Ratings give users a way to quickly view and provide feedback.

```html preview
<em9-rating></em9-rating>
```

```jsx react
import { em9Rating } from 'em9webcomponents/dist/react';

const App = () => <em9Rating />;
```

## Examples

### Maximum Value

Ratings are 0-5 by default. To change the maximum possible value, use the `max` attribute.

```html preview
<em9-rating max="3"></em9-rating>
```

```jsx react
import { em9Rating } from 'em9webcomponents/dist/react';

const App = () => <em9Rating max={3} />;
```

### Precision

Use the `precision` attribute to let users select fractional ratings.

```html preview
<em9-rating precision="0.5" value="2.5"></em9-rating>
```

```jsx react
import { em9Rating } from 'em9webcomponents/dist/react';

const App = () => <em9Rating precision={0.5} value={2.5} />;
```

## Symbol Sizes

Set the `--symbol-size` custom property to adjust the size.

```html preview
<em9-rating style="--symbol-size: 2rem;"></em9-rating>
```

```jsx react
import { em9Rating } from 'em9webcomponents/dist/react';

const App = () => <em9Rating style={{ '--symbol-size': '2rem' }} />;
```

### Readonly

Use the `readonly` attribute to display a rating that users can't change.

```html preview
<em9-rating readonly value="3"></em9-rating>
```

```jsx react
import { em9Rating } from 'em9webcomponents/dist/react';

const App = () => <em9Rating readonly value={3} />;
```

### Disabled

Use the `disable` attribute to disable the rating.

```html preview
<em9-rating disabled value="3"></em9-rating>
```

```jsx react
import { em9Rating } from 'em9webcomponents/dist/react';

const App = () => <em9Rating disabled value={3} />;
```

### Custom Icons

You can provide custom icons by passing a function to the `getSymbol` property.

```html preview
<em9-rating class="rating-hearts" style="--symbol-color-active: #ff4136;"></em9-rating>

<script>
  const rating = document.querySelector('.rating-hearts');
  rating.getSymbol = () => '<em9-icon name="heart-fill"></em9-icon>';
</script>
```

```jsx react
import 'em9webcomponents/dist/components/icon/icon';
import { em9Rating } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Rating
    getSymbol={() => '<em9-icon name="heart-fill"></em9-icon>'}
    style={{ '--symbol-color-active': '#ff4136' }}
  />
);
```

### Value-based Icons

You can also use the `getSymbol` property to render different icons based on value.

```html preview
<em9-rating class="rating-emojis"></em9-rating>

<script>
  const rating = document.querySelector('.rating-emojis');

  rating.getSymbol = value => {
    const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
    return `<em9-icon name="${icons[value - 1]}"></em9-icon>`;
  };
</script>
```

```jsx react
import 'em9webcomponents/dist/components/icon/icon';
import { em9Rating, em9Icon } from 'em9webcomponents/dist/react';

function getSymbol(value) {
  const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
  return `<em9Icon name="${icons[value - 1]}"></em9Icon>`;
}

const App = () => <em9Rating getSymbol={getSymbol} />;
```

[component-metadata:em9-rating]
