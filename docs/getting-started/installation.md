# Installation

You can use em9-Library via CDN or by installing it locally. You can also [cherry pick](#cherry-picking) individual components for faster load times.

If you're using a framework, make sure to check out the pages for [React](/frameworks/react), [Vue](/frameworks/vue), and [Angular](/frameworks/angular).

## CDN Installation (Easiest)

The easiest way to install em9-Library is with the CDN. Just add the following tags to your page to get all components and the default light theme.

```html
<!-- https://cdn.jsdelivr.net/npm/em9webcomponents@%VERSION%/dist/themes/light.css -->
<!-- https://cdn.jsdelivr.net/npm/em9webcomponents@%VERSION%/dist/em9.js -->
<link rel="stylesheet" href="https://numanulaq.com/dist/themes/light.css" />
<script type="module" src="https://numanulaq.com/dist/em9Library.js"></script>
```

?> If you're only using a handful of components, it will be more efficient to [cherry pick](#cherry-picking) the ones you need.

### Dark Theme

If you prefer to use the [dark theme](/getting-started/themes#dark-theme) instead, use this code and add `<html class="em9-theme-dark">` to the page.

```html
<link rel="stylesheet" href="https://numanulaq.com/dist/themes/dark.css" />
<script type="module" src="https://numanulaq.com/dist/em9Library.js"></script>
```

### Light & Dark Theme

If you want to load the light or dark theme based on the user's `prefers-color-scheme` setting, use this. The `media` attributes ensure that only the user's preferred theme stylesheet loads and the `onload` attribute sets the appropriate [theme class](/getting-started/themes) on the `<html>` element.

```html
<link
  rel="stylesheet"
  media="(prefers-color-scheme:light)"
  href="https://cdn.jsdelivr.net/npm/em9webcomponents@%VERSION%/dist/themes/light.css"
/>
<link
  rel="stylesheet"
  media="(prefers-color-scheme:dark)"
  href="https://cdn.jsdelivr.net/npm/em9webcomponents@%VERSION%/dist/themes/dark.css"
  onload="document.documentElement.classList.add('em9-theme-dark');"
/>
<script type="module" src="https://numanulaq.com/dist/em9Library.js"></script>
```

Now you can [start using em9-Library!](/getting-started/usage)

## Cherry Picking

The previous approach is the _easiest_ way to load em9-Library, but easy isn't always efficient. You'll incur the full size of the library even if you only use a handful of components. This is convenient for prototyping or if you're using most of the components, but it may result in longer load times in production. To improve this, you can cherry pick the components you need.

Cherry picking can be done from your local install or [directly from the CDN](https://cdn.jsdelivr.net/npm/@webcomponents/em9webcomponents@%VERSION%/). This will limit the number of files the browser has to download and reduce the amount of bytes being transferred. The disadvantage is that you need to load components manually.

Here's an example that loads only the button component. Again, if you're not using a module resolver, you'll need to adjust the path to point to the folder em9-Library is in.

```html
<link rel="stylesheet" href="/path/to/em9/dist/themes/light.css" />

<script type="module" data-em9lib="/path/to/em9/dist">
  import 'em9webcomponents/dist/components/button/button.js';

  // <em9-button> is ready to use!
</script>
```

You can copy and paste the code to import a component from the "Importing" section of the component's documentation. Note that some components have dependencies that are automatically imported when you cherry pick. If a component has dependencies, they will be listed in the "Dependencies" section of its docs.

!> Never cherry pick components or utilities from `em9Library.js` as this will cause the browser to load the entire library. Instead, cherry pick from specific modules as shown above.

!> You will see files named `chunk.[hash].js` in the `chunks` directory. Never import these files directly, as they are generated and change from version to version.

## Bundling

em9-Library is distributed as a collection of standard ES modules that [all modern browsers can understand](https://caniuse.com/es6-module). However, importing a lot of modules can result in a lot of HTTP requests and potentially longer load times. Using a CDN can alleviate this, but some users may wish to further optimize their imports with a bundler.

To use em9-Library with a bundler, first install em9-Library along with your bundler of choice.

```bash
npm install em9webcomponents
```

Now it's time to configure your bundler. Configurations vary for each tool, but here are some examples to help you get started.

- [Example webpack config](https://github.com/em9-style/webpack-example/blob/master/webpack.config.js)
- [Example Rollup config](https://github.com/em9-style/rollup-example/blob/master/rollup.config.js)

Once your bundler is configured, you'll be able to import em9-Library components and utilities.

```js
import 'em9webcomponents/dist/themes/light.css';
import 'em9webcomponents/dist/components/button/button.js';
import 'em9webcomponents/dist/components/icon/icon.js';
import 'em9webcomponents/dist/components/input/input.js';
import 'em9webcomponents/dist/components/rating/rating.js';
import { setBasePath } from 'em9webcomponents/dist/utilities/base-path.js';

// Set the base path to the folder you copied em9-Library's assets to
setBasePath('/path/to/em9/dist');

// <em9-button>, <em9-icon>, <em9-input>, and <em9-rating> are ready to use!
```

!> Component modules include side effects for registration purposes. Because of this, importing directly from `@webcomponents/em9webcomponents` may result in a larger bundle size than necessary. For optimal tree shaking, always cherry pick, i.e. import components and utilities from their respective files, as shown above.
