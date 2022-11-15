<!-- cspell:dictionaries lorem-ipsum -->

# Details

[component-header:em9-details]

Details show a brief summary and expand to show additional content.

```html preview
<em9-details summary="Toggle Me">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</em9-details>
```

```jsx react
import { em9Details } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Details summary="Toggle Me">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </em9Details>
);
```

## Examples

### Disabled

Use the `disable` attribute to prevent the details from expanding.

```html preview
<em9-details summary="Disabled" disabled>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</em9-details>
```

```jsx react
import { em9Details } from 'em9webcomponents/dist/react';

const App = () => (
  <em9Details summary="Disabled" disabled>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </em9Details>
);
```

### Grouping Details

Details are designed to function independently, but you can simulate a group or "accordion" where only one is shown at a time by listening for the `em9-show` event.

```html preview
<div class="details-group-example">
  <em9-details summary="First" open>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </em9-details>

  <em9-details summary="Second">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </em9-details>

  <em9-details summary="Third">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </em9-details>
</div>

<script>
  const container = document.querySelector('.details-group-example');

  // Close all other details when one is shown
  container.addEventListener('em9-show', event => {
    [...container.querySelectorAll('em9-details')].map(details => (details.open = event.target === details));
  });
</script>

<style>
  .details-group-example em9-details:not(:last-of-type) {
    margin-bottom: var(--em9-spacing-2x-small);
  }
</style>
```

```jsx react
import { em9Details } from 'em9webcomponents/dist/react';
const css=`  .details-group-example em9Details:not(:last-of-type) {
    margin-bottom: var(--em9-spacing-2x-small);
`;
const App = () => (
  <>
    <div class="details-group-example">
      <em9Details summary="First" open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </em9Details>

      <em9Details summary="Second">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </em9Details>

      <em9Details summary="Third">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </em9Details>
    </div>

    <script>
      const container = document.querySelector('.details-group-example');

      // Close all other details when one is shown
      container.addEventListener('em9-show', event => {
        [...container.querySelectorAll('em9Details')].map(details => (details.open = event.target === details));
      });
    </script>

    <style>{css}</style>
  </>
);
```

[component-metadata:em9-details]
