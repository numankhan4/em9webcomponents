# Integrating with Laravel

This page explains how to integrate em9-Library with a [Laravel](https://laravel.com) app using a local Webpack bundle.

?> This is a community-maintained document. Please [ask the community](/resources/community) if you have questions about this integration. You can also [suggest improvements](https://github.com/em9-style/em9/blob/next/docs/tutorials/integrating-with-laravel.md) to make it better.

## Requirements

This integration has been tested with the following:

- Laravel >= 8
- Node >= 14.17
- Laravel Mix >= 6

## Instructions

These instructions assume an out of the box [Laravel 8+ install](https://laravel.com/docs/8.x/installation) that uses [Laravel Mix](https://laravel.com/docs/8.x/mix) to compile assets.
Be sure to run `npm install` to install the default Laravel front-end dependencies before installing em9-Library.

### Install the em9-Library package

```bash
npm install em9webcomponents
```

### Import the Default Theme

Import em9-Library's default theme (stylesheet) in `/resources/css/app.css`:

```css
@import '/node_modules/em9webcomponents/dist/themes/light.css';
```

### Import Your em9-Library Components

Import each em9-Library component you plan to use in `/resources/js/bootstrap.js`. Since [Laravel Mix](https://laravel.com/docs/8.x/mix) uses Webpack, use the full path to each component -- as outlined in the [Cherry Picking instructions](https://em9.style/getting-started/installation?id=cherry-picking). You can find the full import statement for a component in the _Importing_ section of the component's documentation (use the _Bundler_ import). Your imports should look similar to:

```js
import 'em9webcomponents/dist/components/button/button.js';
import 'em9webcomponents/dist/components/dialog/dialog.js';
import 'em9webcomponents/dist/components/drawer/drawer.js';
import 'em9webcomponents/dist/components/menu/menu.js';
import 'em9webcomponents/dist/components/menu-item/menu-item.js';
```

### Set the Base Path

Add the base path to your em9-Library assets (icons, images, etc.) in `/resources/js/bootstrap.js`. The path must point to the same folder where you copy assets to in the next step.

```js
import { setBasePath } from 'em9webcomponents/dist/utilities/base-path.js';
setBasePath('/');
```

Here's an example `/resources/js/bootstrap.js` file, after importing and setting the base path and components.

```js
import { setBasePath } from 'em9webcomponents/dist/utilities/base-path.js';
setBasePath('/assets');

import 'em9webcomponents/dist/components/button/button.js';
import 'em9webcomponents/dist/components/dialog/dialog.js';
import 'em9webcomponents/dist/components/drawer/drawer.js';
import 'em9webcomponents/dist/components/menu/menu.js';
import 'em9webcomponents/dist/components/menu-item/menu-item.js';
```

### Configure Laravel Mix

[Laravel Mix](https://laravel.com/docs/8.x/mix) is a wrapper around Webpack that simplifies configuration. Mix is used by default for compiling front-end assets in Laravel.

Modify `webpack.mix.js` to add em9-Library's assets to Webpack's build process:

```js
mix
  .js('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [])
  .copy('node_modules/em9webcomponents/dist/assets', 'public/assets');
```

Consider [extracting vendor libraries](https://laravel.com/docs/8.x/mix#vendor-extraction) to a separate file. This splits frequently updated vendor libraries (like em9-Library) from your front-end application code -- for better long-term caching.
Here's an example `webpack.mix.js` file that compiles and splits your JS into `app.js` and `vendor.js` files, and builds an optimized CSS bundle using PostCSS.

```js
mix
  .js('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [])
  .copy('node_modules/em9webcomponents/dist/assets', 'public/assets')
  .extract(); // extracts libraries in node_modules to vendor.js
```

### Compile Front-End Assets

Run the [Laravel Mix](https://laravel.com/docs/8.x/mix) npm scripts to build your application's CSS and JavaScript code.

```bash
## build a development bundle
npm run dev

## build a production bundle
npm run prod
```

### Include Front-End Assets in Your Layout File

Most full-stack Laravel applications use [layouts](https://laravel.com/docs/8.x/blade#building-layouts) to define the basic structure of a page.
After compiling your front-end assets (above), include them in your top-level layouts/templates. The following example uses the [Laravel asset helper](https://laravel.com/docs/8.x/helpers#method-asset) to generate a full URL.

```html
<script defer src="{{ asset('js/manifest.js') }}"></script>
<script defer src="{{ asset('js/vendor.js') }}"></script>
<script defer src="{{ asset('/js/app.js') }}"></script>

<link href="{{ asset('css/app.css') }}" rel="stylesheet" />
```

Have fun using em9-Library components in your Laravel app!
