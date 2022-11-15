# Vue (version 2)

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use em9-Library in your Vue apps with ease.

!> These instructions are for Vue 2. If you're using Vue 3 or above, please see the [Vue 3 instructions](/frameworks/vue).

## Installation

To add em9-Library to your Vue app, install the package from npm.

```bash
npm install em9webcomponents
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
import 'em9webcomponents/dist/themes/light.css';
import { setBasePath } from 'em9webcomponents/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/em9webcomponents@%VERSION%/dist/');
```

?> If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/@webcomponents/em9webcomponents/dist/assets` into a public folder in your app. Then you can point the base path to that folder instead.

## Configuration

You'll need to tell Vue to ignore em9-Library components. This is pretty easy because they all start with `em9-`.

```js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('em9-');

app.mount('#app');
```

Now you can start using em9-Library components in your app!

## Usage

### Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute.

```html
<em9-color-picker :swatches.prop="mySwatches" />
```

### Two-way Binding

One caveat is there's currently [no support for v-model on custom elements](https://github.com/vuejs/vue/issues/7830), but you can still achieve two-way binding manually.

```html
<!-- This doesn't work -->
<em9-input v-model="name">
  <!-- This works, but it's a bit longer -->
  <em9-input :value="name" @input="name = $event.target.value"></em9-input
></em9-input>
```

If that's too verbose for your liking, you can use a custom directive instead. [This utility](https://www.npmjs.com/package/@em9-style/vue-em9-model) adds a custom directive that will work just like `v-model` but for em9-Library components. To install it, use this command.

```bash
npm install @em9-style/vue-em9-model
```

Next, import the directive and enable it like this.

```js
import em9-LibraryModelDirective from '@em9-style/vue-em9-model';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(em9ModelDirective);

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('em9-');

app.mount('#app');
```

Now you can use the `v-em9-model` directive to keep your data in sync!

```html
<em9-input v-em9-model="name"></em9-input>
```

?> Are you using em9-Library with Vue? [Help us improve this page!](https://github.com/em9-style/em9/blob/next/docs/frameworks/vue.md)
