# Responsive Media

[component-header:em9-responsive-media]

Displays media in the desired aspect ratio.

You can slot in any [replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element), including `<iframe>`, `<img>`, and `<video>`. As the element's width changes, its height will resize proportionally. Only one element should be slotted into the container. The default aspect ratio is `16:9`.

```html preview
<em9-responsive-media>
  <img
    src="https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80"
    alt="A train riding through autumn foliage with mountains in the distance."
  />
</em9-responsive-media>
```

```jsx react
import { em9ResponsiveMedia } from 'em9webcomponents/dist/react';

const App = () => (
  <em9ResponsiveMedia>
    <img
      src="https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80"
      alt="A train riding through autumn foliage with mountains in the distance."
    />
  </em9ResponsiveMedia>
);
```

## Examples

### Responsive Images

The following image maintains a `4:3` aspect ratio as its container is resized.

```html preview
<em9-responsive-media aspect-ratio="4:3">
  <img
    src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80"
    alt="Two blue chairs on a sandy beach."
  />
</em9-responsive-media>
```

```jsx react
import { em9ResponsiveMedia } from 'em9webcomponents/dist/react';

const App = () => (
  <em9ResponsiveMedia aspect-ratio="4:3">
    <img
      src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80"
      alt="Two blue chairs on a sandy beach."
    />
  </em9ResponsiveMedia>
);
```

### Responsive Videos

The following video is embedded using an `iframe` and maintains a `16:9` aspect ratio as its container is resized.

```html preview
<em9-responsive-media aspect-ratio="16:9">
  <iframe
    title="Video of the kittens"
    src="https://player.vimeo.com/video/1053647?title=0&byline=0&portrait=0"
    frameborder="0"
    allow="autoplay; fullscreen"
    allowfullscreen
  ></iframe>
</em9-responsive-media>
```

```jsx react
import { em9ResponsiveMedia } from 'em9webcomponents/dist/react';

const App = () => (
  <em9ResponsiveMedia aspect-ratio="16:9">
    <iframe
      title="Video of the kittens"
      src="https://player.vimeo.com/video/1053647?title=0&byline=0&portrait=0"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    />
  </em9ResponsiveMedia>
);
```

[component-metadata:em9-responsive-media]
