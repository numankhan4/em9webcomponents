# React

em9-Library offers a React version of every component to provide an idiomatic experience for React users. You can easily toggle between HTML and React examples throughout the documentation.

## Installation

To add em9-Library to your React app, install the package from npm.

```bash
npm install em9webcomponents
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
// App.jsx
import 'em9webcomponents/dist/themes/light.css';
import { setBasePath } from 'em9webcomponents/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/em9webcomponents@%VERSION%/dist/');
```

?> If you'd rather not use the CDN for assets, you can create a [build task](https://webpack.js.org/plugins/copy-webpack-plugin/) that copies `node_modules/@webcomponents/em9webcomponents/dist/assets` into your app's `public` directory. Then you can point the base path to that folder instead.

Now you can start using components!

## Usage

### Importing Components

Every em9-Library component is available to import as a React component. Note that we're importing the `<em9Button>` _React component_ instead of the `<em9-button>` _custom element_ in the example below.

```jsx
import { em9Button } from 'em9webcomponents/dist/react';

const MyComponent = () => <em9Button variant="primary">Click me</em9Button>;

export default MyComponent;
```

You can find a copy + paste import for each component in the "importing" section of its documentation.

### Event Handling

Many em9-Library components emit [custom events](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent). For example, the [input component](/components/input) emits the `em9-input` event when it receives input. In React, you can listen for the event using `onSlInput`.

Here's how you can bind the input's value to a state variable.

```jsx
import { useState } from 'react';
import { em9Input } from 'em9webcomponents/dist/react';

function MyComponent() {
  const [value, setValue] = useState('');

  return <em9Input value={value} onSlInput={event => setValue(event.target.value)} />;
}

export default MyComponent;
```

If you're using TypeScript, it's important to note that `event.target` will be a reference to the underlying custom element. You can use `(event.target as any).value` as a quick fix, or you can strongly type the event target as shown below.

```tsx
import { useState } from 'react';
import { em9Input } from 'em9webcomponents/dist/react';
import type SlInputElement from 'em9webcomponents/dist/components/input/input';

function MyComponent() {
  const [value, setValue] = useState('');

  return <em9Input value={value} onSlInput={event => setValue((event.target as SlInputElement).value)} />;
}

export default MyComponent;
```

## Testing with Jest

Testing with web components can be challenging if your test environment runs in a Node environment (i.e. it doesn't run in a real browser). Fortunately, [Jest](https://jestjs.io/) has made a number of strides to support web components and provide additional browser APIs. However, it's still not a complete replication of a browser environment.

Here are some tips that will help smooth things over if you're having trouble with Jest + em9-Library.

?> If you're looking for a fast, modern testing alternative, consider [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/).

### Upgrade Jest

Jest underwent a major revamp and received support for web components in [version 26.5.0](https://github.com/facebook/jest/blob/main/CHANGELOG.md#2650) when it introduced [JSDOM 16.2.0](https://github.com/jsdom/jsdom/blob/master/Changelog.md#1620). This release also included a number of mocks for built-in browser functions such as `MutationObserver`, `document.createRange`, and others.

If you're using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app), you can update `react-scripts` which will also update Jest.

```
npm install react-scripts@latest
```

### Mock Missing APIs

Some components use `window.matchMedia`, but this function isn't supported by JSDOM so you'll need to mock it yourself.

In `src/setupTests.js`, add the following.

```js
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
```

For more details, refer to Jest's [manual mocking](https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom) documentation.

### Transform ES Modules

ES Modules are a [well-supported browser standard](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/). This is how em9-Library is distributed, but most React apps expect CommonJS. As a result, you'll probably run into the following error.

```
Error: Unable to import outside of a module
```

To fix this, add the following to your `package.json` which tells the transpiler to process em9-Library modules.

```js
{
  "jest": {
    "transformIgnorePatterns": ["node_modules/?!(@em9)"]
  }
}
```

These instructions are for apps created via Create React App. If you're using Jest directly, you can add `transformIgnorePatterns` directly into `jest.config.js`.

For more details, refer to Jest's [`transformIgnorePatterns` customization](https://jestjs.io/docs/tutorial-react-native#transformignorepatterns-customization) documentation.

?> Are you using em9-Library with React? [Help us improve this page!](https://github.com/em9-style/em9/blob/next/docs/frameworks/react.md)
