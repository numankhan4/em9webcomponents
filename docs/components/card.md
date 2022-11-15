# Card

[component-header:em9-card]

Cards can be used to group related subjects in a container.

```html preview
<em9-card class="card-overview">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
  />

  <strong>Mittens</strong><br />
  This kitten is as cute as he is playful. Bring him home today!<br />
  <small>6 weeks old</small>

  <div slot="footer">
    <em9-button variant="primary" pill>More Info</em9-button>
    <em9-rating></em9-rating>
  </div>
</em9-card>

<style>
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--em9-color-neutral-500);
  }

  .card-overview [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx react
import { em9Button, em9Card, em9Rating } from 'em9webcomponents/dist/react';

const css = `
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--em9-color-neutral-500);
  }

  .card-overview [slot="footer"] {
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  }
`;

const App = () => (
  <>
    <em9Card className="card-overview">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />
      <strong>Mittens</strong>
      <br />
      This kitten is as cute as he is playful. Bring him home today!
      <br />
      <small>6 weeks old</small>
      <div slot="footer">
        <em9Button variant="primary" pill>
          More Info
        </em9Button>
        <em9Rating></em9Rating>
      </div>
    </em9Card>

    <style>{css}</style>
  </>
);
```

## Examples

## Basic Card

Basic cards aren't very exciting, but they can display any content you want them to.

```html preview
<em9-card class="card-basic">
  This is just a basic card. No image, no header, and no footer. Just your content.
</em9-card>

<style>
  .card-basic {
    max-width: 300px;
  }
</style>
```

```jsx react
import { em9Card } from 'em9webcomponents/dist/react';

const css = `
  .card-basic {
    max-width: 300px;
  }
`;

const App = () => (
  <>
    <em9Card className="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </em9Card>

    <style>{css}</style>
  </>
);
```

## Card with Header

Headers can be used to display titles and more.

```html preview
<em9-card class="card-header">
  <div slot="header">
    Header Title

    <em9-icon-button name="gear" label="Settings"></em9-icon-button>
  </div>

  This card has a header. You can put all sorts of things in it!
</em9-card>

<style>
  .card-header {
    max-width: 300px;
  }

  .card-header [slot='header'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header em9-icon-button {
    font-size: var(--em9-font-size-medium);
  }
</style>
```

```jsx react
import { em9Card, em9IconButton } from 'em9webcomponents/dist/react';

const css = `
  .card-header {
    max-width: 300px;
  }

  .card-header [slot="header"] {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header em9-icon-button {
    font-size: var(--em9-font-size-medium);
  }
`;

const App = () => (
  <>
    <em9Card className="card-header">
      <div slot="header">
        Header Title
        <em9IconButton name="gear"></em9IconButton>
      </div>
      This card has a header. You can put all sorts of things in it!
    </em9Card>

    <style>{css}</style>
  </>
);
```

## Card with Footer

Footers can be used to display actions, summaries, or other relevant content.

```html preview
<em9-card class="card-footer">
  This card has a footer. You can put all sorts of things in it!

  <div slot="footer">
    <em9-rating></em9-rating>
    <em9-button slot="footer" variant="primary">Preview</em9-button>
  </div>
</em9-card>

<style>
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx react
import { em9Button, em9Card, em9Rating } from 'em9webcomponents/dist/react';

const css = `
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot="footer"] {
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  }
`;

const App = () => (
  <>
    <em9Card className="card-footer">
      This card has a footer. You can put all sorts of things in it!
      <div slot="footer">
        <em9Rating></em9Rating>
        <em9Button slot="footer" variant="primary">
          Preview
        </em9Button>
      </div>
    </em9Card>

    <style>{css}</style>
  </>
);
```

## Images

Cards accept an `image` slot. The image is displayed atop the card and stretches to fit.

```html preview
<em9-card class="card-image">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
    alt="A kitten walks towards camera on top of pallet."
  />
  This is a kitten, but not just any kitten. This kitten likes walking along pallets.
</em9-card>

<style>
  .card-image {
    max-width: 300px;
  }
</style>
```

```jsx react
import { em9Card } from 'em9webcomponents/dist/react';

const css = `
  .card-image {
    max-width: 300px;
  }
`;

const App = () => (
  <>
    <em9Card className="card-image">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        alt="A kitten walks towards camera on top of pallet."
      />
      This is a kitten, but not just any kitten. This kitten likes walking along pallets.
    </em9Card>

    <style>{css}</style>
  </>
);
```

[component-metadata:em9-card]
