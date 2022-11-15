# Icon

[component-header:em9-icon]

Icons are symbols that can be used to represent various options within an application.

em9-Library comes bundled with over 6000 icons courtesy of the [em9 Icons](https://webcomponents-qa.mycardplace.com/components/icon) project. These icons are part of the `default` icon library. If you prefer, you can register [custom icon libraries](#icon-libraries) as well.

Depending on how you're loading em9-Library, you may need to copy icon assets and/or [set the base path](getting-started/installation#setting-the-base-path) so em9-Library knows where to load them from. Otherwise, icons may not appear and you'll see 404 Not Found errors in the dev console.

## Default Icons

All available icons in the `default` icon library are shown below. Click or tap on any icon to copy its name, then you can use it in your HTML like this.

```html
<em9-icon name="icon-name-here"></em9-icon>
```

<div class="icon-search">
  <div class="icon-search-controls">
    <em9-input placeholder="Search Icons" clearable>
      <em9-icon slot="prefix" name="broken-filter-search"></em9-icon>
    </em9-input>
    <em9-select value="outline">
                <em9-menu-label>Iconsax</em9-menu-label>
                <em9-menu-item value="bold">Bold</em9-menu-item>
                <em9-menu-item value="broken">Broken</em9-menu-item>
                <em9-menu-item value="bulk">Bulk</em9-menu-item>
                <em9-menu-item value="linear">Linear</em9-menu-item>
                <em9-menu-item value="outline">Outline</em9-menu-item>
                <em9-menu-item value="twotone">Twotone</em9-menu-item>
                <em9-divider></em9-divider>
                <em9-menu-label>Custom Icons</em9-menu-label>
                <em9-menu-item value="cs-bold">Bold</em9-menu-item>
                <em9-menu-item value="cs-broken">Broken</em9-menu-item>
                <em9-menu-item value="cs-bulk">Bulk</em9-menu-item>
                <em9-menu-item value="cs-linear">Linear</em9-menu-item>
                <em9-menu-item value="cs-outline">Outline</em9-menu-item>
                <em9-menu-item value="cs-twotone">Twotone</em9-menu-item>
                <em9-divider></em9-divider>
                <em9-menu-item value="">All icons</em9-menu-item>
    </em9-select>
  </div>
  <div class="icon-list"></div>
  <input type="text" class="icon-copy-input" aria-hidden="true" tabindex="-1">
</div>

## Examples

### Colors

Icons inherit their color from the current text color. Thus, you can set the `color` property on the `<em9-icon>` element or an ancestor to change the color.

```html preview
<div style="font-size: 42px; color: #e41b54;">
  <em9-icon name="bold-triangle"></em9-icon>
  <em9-icon name="bold-archive-add"></em9-icon>
  <em9-icon name="bold-battery-charging"></em9-icon>
  <em9-icon name="bold-call-add"></em9-icon>
</div>
<div style="font-size: 42px; color: #155eef;">
 <em9-icon name="bulk-triangle"></em9-icon>
  <em9-icon name="bulk-archive-add"></em9-icon>
  <em9-icon name="bulk-battery-charging"></em9-icon>
  <em9-icon name="bulk-call-add"></em9-icon>
</div>
<div style="font-size: 42px; color: #09904f;">
  <em9-icon name="broken-triangle"></em9-icon>
  <em9-icon name="broken-archive-add"></em9-icon>
  <em9-icon name="broken-battery-charging"></em9-icon>
  <em9-icon name="broken-call-add"></em9-icon>
</div>
<div style="font-size: 42px; color: #3e4784;">
  <em9-icon name="twotone-triangle"></em9-icon>
  <em9-icon name="twotone-archive-add"></em9-icon>
  <em9-icon name="twotone-battery-charging"></em9-icon>
  <em9-icon name="twotone-call-add"></em9-icon>
</div>
```

```jsx react
import { em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div style={{ color: '#4a90e2' }}>
      <em9Icon name="exclamation-triangle"></em9Icon>
      <em9Icon name="archive"></em9Icon>
      <em9Icon name="battery-charging"></em9Icon>
      <em9Icon name="bell"></em9Icon>
    </div>
    <div style={{ color: '#9013fe' }}>
      <em9Icon name="clock"></em9Icon>
      <em9Icon name="cloud"></em9Icon>
      <em9Icon name="download"></em9Icon>
      <em9Icon name="file-earmark"></em9Icon>
    </div>
    <div style={{ color: '#417505' }}>
      <em9Icon name="flag"></em9Icon>
      <em9Icon name="heart"></em9Icon>
      <em9Icon name="image"></em9Icon>
      <em9Icon name="lightning"></em9Icon>
    </div>
    <div style={{ color: '#f5a623' }}>
      <em9Icon name="mic"></em9Icon>
      <em9Icon name="search"></em9Icon>
      <em9Icon name="star"></em9Icon>
      <em9Icon name="trash"></em9Icon>
    </div>
  </>
);
```

### Sizing

Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.

```html preview
<div style="font-size: 42px;">
  <em9-icon name="bold-triangle"></em9-icon>
<em9-icon name="bold-archive-add"></em9-icon>
<em9-icon name="bold-battery-charging"></em9-icon>
<em9-icon name="bold-call-add"></em9-icon>
<em9-icon name="bulk-triangle"></em9-icon>
<em9-icon name="bulk-archive-add"></em9-icon>
<em9-icon name="bulk-battery-charging"></em9-icon>
<em9-icon name="bulk-call-add"></em9-icon>
<em9-icon name="broken-triangle"></em9-icon>
<em9-icon name="broken-archive-add"></em9-icon>
<em9-icon name="broken-battery-charging"></em9-icon>
<em9-icon name="broken-call-add"></em9-icon>
<em9-icon name="twotone-triangle"></em9-icon>
<em9-icon name="twotone-archive-add"></em9-icon>
<em9-icon name="twotone-battery-charging"></em9-icon>
<em9-icon name="twotone-call-add"></em9-icon>
</div>
```

```jsx react
import { em9Icon } from 'em9webcomponents/dist/react';

const App = () => (
  <div style={{ fontSize: '32px' }}>
    <em9Icon name="exclamation-triangle" />
    <em9Icon name="archive" />
    <em9Icon name="battery-charging" />
    <em9Icon name="bell" />
    <em9Icon name="clock" />
    <em9Icon name="cloud" />
    <em9Icon name="download" />
    <em9Icon name="file-earmark" />
    <em9Icon name="flag" />
    <em9Icon name="heart" />
    <em9Icon name="image" />
    <em9Icon name="lightning" />
    <em9Icon name="mic" />
    <em9Icon name="search" />
    <em9Icon name="star" />
    <em9Icon name="trash" />
  </div>
);
```

### Labels

For non-decorative icons, use the `label` attribute to announce it to assistive devices.

```html preview
<div style="font-size: 50px; color: red;">
<em9-icon name="bulk-empty-wallet-tick" label="Add to favorites"></em9-icon>
</div>
```

```jsx react
import { em9Icon } from 'em9webcomponents/dist/react';

const App = () => <em9Icon name="star-fill" label="Add to favorites" />;
```

### Custom Icons

Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).

```html preview
<em9-icon src="https://raw.githubusercontent.com/malikfaizanhaider/iconsax/main/iconsax/broken-bitcoin-refresh.svg" style="font-size: 8rem;"></em9-icon>
```

```jsx react
import { em9Icon } from 'em9webcomponents/dist/react';

const App = () => <em9Icon src="https://em9.style/assets/images/shoe.svg" style={{ fontSize: '8rem' }}></em9Icon>;
```

## Icon Libraries

You can register additional icons to use with the `<em9-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.

em9-Library ships with two built-in icon libraries, `default` and `system`. The [default icon library](#customizing-the-default-library) contains all of the icons in the Bootstrap Icons project. The [system icon library](#customizing-the-system-library) contains only a small subset of icons that are used internally by em9-Library components.

To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor` or `stroke="currentColor"` to the SVG element using this function.

Here's an example that registers an icon library located in the `/assets/icons` directory.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('my-icons', {
    resolver: name => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

To display an icon, set the `library` and `name` attributes of an `<em9-icon>` element.

```html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<em9-icon library="my-icons" name="smile"></em9-icon>
```

If an icon is used before registration occurs, it will be empty initially but shown when registered.

The following examples demonstrate how to register a number of popular, open source icon libraries via CDN. Feel free to adapt the code as you see fit to use your own origin or naming conventions.

### icon Sax

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';
  registerIconLibrary('icons', {
    resolver: name => {
      let folder = 'outline';
      const nameSplit = name.split('-');
      folder = nameSplit[nameSplit.length - 1];

      const printName = nameSplit.pop();
      const path = `/assets/icons/${folder}/${nameSplit}.svg`;

      return path;
    },
    mutator: svg => {
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('fill', 'currentColor');
    }
  });
</script>
<div style="font-size:72px; ">
  <em9-icon library="icons" name="bill-bulk"></em9-icon>
  <em9-icon library="icons" name="bill-bold"></em9-icon>
  <em9-icon library="icons" name="bill-outline"></em9-icon>
  <em9-icon library="icons" name="bill-linear"></em9-icon>
  <em9-icon library="icons" name="bill-twotone"></em9-icon>
  <em9-icon library="icons" name="bill-broken"></em9-icon>
</div>
```

```jsx react
import {  em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
	<>
		<script type="module">
		  import { registerIconLibrary } from '/dist/utilities/icon-library.js';
		  registerIconLibrary('icons', {
			resolver: name => {
			  let folder = 'outline';
			  const nameSplit = name.split('-');
			  folder = nameSplit[nameSplit.length - 1];

			  const printName = nameSplit.pop();
			  const path = `/assets/icons/${folder}/${nameSplit}.svg`;

			  return path;
			},
			mutator: svg => {
			  svg.setAttribute('stroke', 'currentColor');
			  svg.setAttribute('fill', 'currentColor');
			}
		  });
		</script>
		<div style="font-size:72px; ">
		  <em9Icon library="icons" name="bill-bulk"></em9Icon>
		  <em9Icon library="icons" name="bill-bold"></em9Icon>
		  <em9Icon library="icons" name="bill-outline"></em9Icon>
		  <em9Icon library="icons" name="bill-linear"></em9Icon>
		  <em9Icon library="icons" name="bill-twotone"></em9Icon>
		  <em9Icon library="icons" name="bill-broken"></em9Icon>
		</div>
	</>
);
```

### Boxicons

This will register the [Boxicons](https://boxicons.com/) library using the jsDelivr CDN. This library has three variations: regular (`bx-*`), solid (`bxs-*`), and logos (`bxl-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Creative Commons 4.0 License](https://github.com/atisawd/boxicons#license).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('boxicons', {
    resolver: name => {
      let folder = 'regular';
      if (name.substring(0, 4) === 'bxs-') folder = 'solid';
      if (name.substring(0, 4) === 'bxl-') folder = 'logos';
      return `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${folder}/${name}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px; color:red;">
  <em9-icon library="boxicons" name="bx-bot"></em9-icon>

  <em9-icon library="boxicons" name="bx-cookie"></em9-icon>

  <em9-icon library="boxicons" name="bx-joystick"></em9-icon>

  <em9-icon library="boxicons" name="bx-save"></em9-icon>
  <em9-icon library="boxicons" name="bx-server"></em9-icon>
  <em9-icon library="boxicons" name="bx-wine"></em9-icon>
  <br />
  <em9-icon library="boxicons" name="bxs-bot"></em9-icon>
  <em9-icon library="boxicons" name="bxs-cookie"></em9-icon>
  <em9-icon library="boxicons" name="bxs-joystick"></em9-icon>
  <em9-icon library="boxicons" name="bxs-save"></em9-icon>
  <em9-icon library="boxicons" name="bxs-server"></em9-icon>
  <em9-icon library="boxicons" name="bxs-wine"></em9-icon>
  <br />
  <em9-icon library="boxicons" name="bxl-apple"></em9-icon>
  <em9-icon library="boxicons" name="bxl-chrome"></em9-icon>
  <em9-icon library="boxicons" name="bxl-edge"></em9-icon>
  <em9-icon library="boxicons" name="bxl-firefox"></em9-icon>
  <em9-icon library="boxicons" name="bxl-opera"></em9-icon>
  <em9-icon library="boxicons" name="bxl-microsoft"></em9-icon>
</div>
```

````jsx react
import {  em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
	<>
		<script type="module">
		  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

		  registerIconLibrary('boxicons', {
			resolver: name => {
			  let folder = 'regular';
			  if (name.substring(0, 4) === 'bxs-') folder = 'solid';
			  if (name.substring(0, 4) === 'bxl-') folder = 'logos';
			  return `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${folder}/${name}.svg`;
			},
			mutator: svg => svg.setAttribute('fill', 'currentColor')
		  });
		</script>

		<div style="font-size: 24px; color:red;">
		  <em9Icon library="boxicons" name="bx-bot"></em9Icon>

		  <em9Icon library="boxicons" name="bx-cookie"></em9Icon>

		  <em9Icon library="boxicons" name="bx-joystick"></em9Icon>

		  <em9Icon library="boxicons" name="bx-save"></em9Icon>
		  <em9Icon library="boxicons" name="bx-server"></em9Icon>
		  <em9Icon library="boxicons" name="bx-wine"></em9Icon>
		  <br />
		  <em9Icon library="boxicons" name="bxs-bot"></em9Icon>
		  <em9Icon library="boxicons" name="bxs-cookie"></em9Icon>
		  <em9Icon library="boxicons" name="bxs-joystick"></em9Icon>
		  <em9Icon library="boxicons" name="bxs-save"></em9Icon>
		  <em9Icon library="boxicons" name="bxs-server"></em9Icon>
		  <em9Icon library="boxicons" name="bxs-wine"></em9Icon>
		  <br />
		  <em9Icon library="boxicons" name="bxl-apple"></em9Icon>
		  <em9Icon library="boxicons" name="bxl-chrome"></em9Icon>
		  <em9Icon library="boxicons" name="bxl-edge"></em9Icon>
		  <em9Icon library="boxicons" name="bxl-firefox"></em9Icon>
		  <em9Icon library="boxicons" name="bxl-opera"></em9Icon>
		  <em9Icon library="boxicons" name="bxl-microsoft"></em9Icon>
		</div>
	</>
);
### Lucide

This will register the [Lucide](https://lucide.dev/) icon library using the jsDelivr CDN. This project is a community-maintained fork of the popular [Feather](https://feathericons.com/) icon library.

Icons in this library are licensed under the [MIT License](https://github.com/lucide-icons/lucide/blob/master/LICENSE).

```html preview
<div style="font-size: 24px;">
  <em9-icon library="lucide" name="feather"></em9-icon>
  <em9-icon library="lucide" name="pie-chart"></em9-icon>
  <em9-icon library="lucide" name="settings"></em9-icon>
  <em9-icon library="lucide" name="map-pin"></em9-icon>
  <em9-icon library="lucide" name="printer"></em9-icon>
  <em9-icon library="lucide" name="shopping-cart"></em9-icon>
</div>

<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('lucide', {
    resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${name}.svg`
  });
</script>
````

```jsx react
import {  em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
	<>
		<div style="font-size: 24px;">
		  <em9Icon library="lucide" name="feather"></em9Icon>
		  <em9Icon library="lucide" name="pie-chart"></em9Icon>
		  <em9Icon library="lucide" name="settings"></em9Icon>
		  <em9Icon library="lucide" name="map-pin"></em9Icon>
		  <em9Icon library="lucide" name="printer"></em9Icon>
		  <em9Icon library="lucide" name="shopping-cart"></em9Icon>
		</div>

		<script type="module">
		  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

		  registerIconLibrary('lucide', {
			resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${name}.svg`
		  });
		</script>
	</>
);
```

### Font Awesome

This will register the [Font Awesome Free](https://fontawesome.com/) library using the jsDelivr CDN. This library has three variations: regular (`far-*`), solid (`fas-*`), and brands (`fab-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt). Some of the icons that appear on the Font Awesome website require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('fa', {
    resolver: name => {
      const filename = name.replace(/^fa[rbs]-/, '');
      let folder = 'regular';
      if (name.substring(0, 4) === 'fas-') folder = 'solid';
      if (name.substring(0, 4) === 'fab-') folder = 'brands';
      return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <em9-icon library="fa" name="far-bell"></em9-icon>
  <em9-icon library="fa" name="far-comment"></em9-icon>
  <em9-icon library="fa" name="far-hand-point-right"></em9-icon>
  <em9-icon library="fa" name="far-hdd"></em9-icon>
  <em9-icon library="fa" name="far-heart"></em9-icon>
  <em9-icon library="fa" name="far-star"></em9-icon>
  <br />
  <em9-icon library="fa" name="fas-archive"></em9-icon>
  <em9-icon library="fa" name="fas-book"></em9-icon>
  <em9-icon library="fa" name="fas-chess-knight"></em9-icon>
  <em9-icon library="fa" name="fas-dice"></em9-icon>
  <em9-icon library="fa" name="fas-pizza-slice"></em9-icon>
  <em9-icon library="fa" name="fas-scroll"></em9-icon>
  <br />
  <em9-icon library="fa" name="fab-apple"></em9-icon>
  <em9-icon library="fa" name="fab-chrome"></em9-icon>
  <em9-icon library="fa" name="fab-edge"></em9-icon>
  <em9-icon library="fa" name="fab-firefox"></em9-icon>
  <em9-icon library="fa" name="fab-opera"></em9-icon>
  <em9-icon library="fa" name="fab-microsoft"></em9-icon>
</div>
```

```jsx react
import {  em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
	<>
		<script type="module">
		  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

		  registerIconLibrary('fa', {
			resolver: name => {
			  const filename = name.replace(/^fa[rbs]-/, '');
			  let folder = 'regular';
			  if (name.substring(0, 4) === 'fas-') folder = 'solid';
			  if (name.substring(0, 4) === 'fab-') folder = 'brands';
			  return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
			},
			mutator: svg => svg.setAttribute('fill', 'currentColor')
		  });
		</script>

		<div style="font-size: 24px;">
		  <em9Icon library="fa" name="far-bell"></em9Icon>
		  <em9Icon library="fa" name="far-comment"></em9Icon>
		  <em9Icon library="fa" name="far-hand-point-right"></em9Icon>
		  <em9Icon library="fa" name="far-hdd"></em9Icon>
		  <em9Icon library="fa" name="far-heart"></em9Icon>
		  <em9Icon library="fa" name="far-star"></em9Icon>
		  <br />
		  <em9Icon library="fa" name="fas-archive"></em9Icon>
		  <em9Icon library="fa" name="fas-book"></em9Icon>
		  <em9Icon library="fa" name="fas-chess-knight"></em9Icon>
		  <em9Icon library="fa" name="fas-dice"></em9Icon>
		  <em9Icon library="fa" name="fas-pizza-slice"></em9Icon>
		  <em9Icon library="fa" name="fas-scroll"></em9Icon>
		  <br />
		  <em9Icon library="fa" name="fab-apple"></em9Icon>
		  <em9Icon library="fa" name="fab-chrome"></em9Icon>
		  <em9Icon library="fa" name="fab-edge"></em9Icon>
		  <em9Icon library="fa" name="fab-firefox"></em9Icon>
		  <em9Icon library="fa" name="fab-opera"></em9Icon>
		  <em9Icon library="fa" name="fab-microsoft"></em9Icon>
		</div>
	</>
);
```

### Heroicons

This will register the [Heroicons](https://heroicons.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('heroicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@0.4.2/outline/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <em9-icon library="heroicons" name="chat"></em9-icon>
  <em9-icon library="heroicons" name="cloud"></em9-icon>
  <em9-icon library="heroicons" name="cog"></em9-icon>
  <em9-icon library="heroicons" name="document-text"></em9-icon>
  <em9-icon library="heroicons" name="gift"></em9-icon>
  <em9-icon library="heroicons" name="volume-up"></em9-icon>
</div>
```

```jsx react
import {  em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
	<>
		<script type="module">
		  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

		  registerIconLibrary('heroicons', {
			resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@0.4.2/outline/${name}.svg`
		  });
		</script>

		<div style="font-size: 24px;">
		  <em9Icon library="heroicons" name="chat"></em9Icon>
		  <em9Icon library="heroicons" name="cloud"></em9Icon>
		  <em9Icon library="heroicons" name="cog"></em9Icon>
		  <em9Icon library="heroicons" name="document-text"></em9Icon>
		  <em9Icon library="heroicons" name="gift"></em9Icon>
		  <em9Icon library="heroicons" name="volume-up"></em9Icon>
		</div>
	</>
);
```

### Iconoir

This will register the [Iconoir](https://iconoir.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/lucaburgio/iconoir/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('iconoir', {
    resolver: name => `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <em9-icon library="iconoir" name="check-circled-outline"></em9-icon>
  <em9-icon library="iconoir" name="drawer"></em9-icon>
  <em9-icon library="iconoir" name="keyframes"></em9-icon>
  <em9-icon library="iconoir" name="headset-help"></em9-icon>
  <em9-icon library="iconoir" name="color-picker"></em9-icon>
  <em9-icon library="iconoir" name="wifi"></em9-icon>
</div>
```

```jsx react
import {  em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
	<>
		<script type="module">
		  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

		  registerIconLibrary('iconoir', {
			resolver: name => `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${name}.svg`
		  });
		</script>

		<div style="font-size: 24px;">
		  <em9Icon library="iconoir" name="check-circled-outline"></em9Icon>
		  <em9Icon library="iconoir" name="drawer"></em9Icon>
		  <em9Icon library="iconoir" name="keyframes"></em9Icon>
		  <em9Icon library="iconoir" name="headset-help"></em9Icon>
		  <em9Icon library="iconoir" name="color-picker"></em9Icon>
		  <em9Icon library="iconoir" name="wifi"></em9Icon>
		</div>
	</>
);
```

### Ionicons

This will register the [Ionicons](https://ionicons.com/) library using the jsDelivr CDN. This library has three variations: outline (default), filled (`*-filled`), and sharp (`*-sharp`). A mutator function is required to polyfill a handful of styles we're not including.

Icons in this library are licensed under the [MIT License](https://github.com/ionic-team/ionicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('ionicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
    mutator: svg => {
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('stroke', 'currentColor');
      [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
      [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
    }
  });
</script>

<div style="font-size: 24px;">
  <em9-icon library="ionicons" name="alarm"></em9-icon>
  <em9-icon library="ionicons" name="american-football"></em9-icon>
  <em9-icon library="ionicons" name="bug"></em9-icon>
  <em9-icon library="ionicons" name="chatbubble"></em9-icon>
  <em9-icon library="ionicons" name="settings"></em9-icon>
  <em9-icon library="ionicons" name="warning"></em9-icon>
  <br />
  <em9-icon library="ionicons" name="alarm-outline"></em9-icon>
  <em9-icon library="ionicons" name="american-football-outline"></em9-icon>
  <em9-icon library="ionicons" name="bug-outline"></em9-icon>
  <em9-icon library="ionicons" name="chatbubble-outline"></em9-icon>
  <em9-icon library="ionicons" name="settings-outline"></em9-icon>
  <em9-icon library="ionicons" name="warning-outline"></em9-icon>
  <br />
  <em9-icon library="ionicons" name="alarm-sharp"></em9-icon>
  <em9-icon library="ionicons" name="american-football-sharp"></em9-icon>
  <em9-icon library="ionicons" name="bug-sharp"></em9-icon>
  <em9-icon library="ionicons" name="chatbubble-sharp"></em9-icon>
  <em9-icon library="ionicons" name="settings-sharp"></em9-icon>
  <em9-icon library="ionicons" name="warning-sharp"></em9-icon>
</div>
```

```jsx react
import {  em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
	<>
		<script type="module">
		  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

		  registerIconLibrary('ionicons', {
			resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
			mutator: svg => {
			  svg.setAttribute('fill', 'currentColor');
			  svg.setAttribute('stroke', 'currentColor');
			  [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
			  [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
			}
		  });
		</script>

		<div style="font-size: 24px;">
		  <em9Icon library="ionicons" name="alarm"></em9Icon>
		  <em9Icon library="ionicons" name="american-football"></em9Icon>
		  <em9Icon library="ionicons" name="bug"></em9Icon>
		  <em9Icon library="ionicons" name="chatbubble"></em9Icon>
		  <em9Icon library="ionicons" name="settings"></em9Icon>
		  <em9Icon library="ionicons" name="warning"></em9Icon>
		  <br />
		  <em9Icon library="ionicons" name="alarm-outline"></em9Icon>
		  <em9Icon library="ionicons" name="american-football-outline"></em9Icon>
		  <em9Icon library="ionicons" name="bug-outline"></em9Icon>
		  <em9Icon library="ionicons" name="chatbubble-outline"></em9Icon>
		  <em9Icon library="ionicons" name="settings-outline"></em9Icon>
		  <em9Icon library="ionicons" name="warning-outline"></em9Icon>
		  <br />
		  <em9Icon library="ionicons" name="alarm-sharp"></em9Icon>
		  <em9Icon library="ionicons" name="american-football-sharp"></em9Icon>
		  <em9Icon library="ionicons" name="bug-sharp"></em9Icon>
		  <em9Icon library="ionicons" name="chatbubble-sharp"></em9Icon>
		  <em9Icon library="ionicons" name="settings-sharp"></em9Icon>
		  <em9Icon library="ionicons" name="warning-sharp"></em9Icon>
		</div>
	</>
);
```

### Jam Icons

This will register the [Jam Icons](https://jam-icons.com/) library using the jsDelivr CDN. This library has two variations: regular (default) and filled (`*-f`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [MIT License](https://github.com/michaelampr/jam/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('jam', {
    resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <em9-icon library="jam" name="calendar"></em9-icon>
  <em9-icon library="jam" name="camera"></em9-icon>
  <em9-icon library="jam" name="filter"></em9-icon>
  <em9-icon library="jam" name="leaf"></em9-icon>
  <em9-icon library="jam" name="picture"></em9-icon>
  <em9-icon library="jam" name="set-square"></em9-icon>
  <br />
  <em9-icon library="jam" name="calendar-f"></em9-icon>
  <em9-icon library="jam" name="camera-f"></em9-icon>
  <em9-icon library="jam" name="filter-f"></em9-icon>
  <em9-icon library="jam" name="leaf-f"></em9-icon>
  <em9-icon library="jam" name="picture-f"></em9-icon>
  <em9-icon library="jam" name="set-square-f"></em9-icon>
</div>
```

```jsx react
import {  em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
	<>
		<script type="module">
		  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

		  registerIconLibrary('jam', {
			resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
			mutator: svg => svg.setAttribute('fill', 'currentColor')
		  });
		</script>

		<div style="font-size: 24px;">
		  <em9Icon library="jam" name="calendar"></em9Icon>
		  <em9Icon library="jam" name="camera"></em9Icon>
		  <em9Icon library="jam" name="filter"></em9Icon>
		  <em9Icon library="jam" name="leaf"></em9Icon>
		  <em9Icon library="jam" name="picture"></em9Icon>
		  <em9Icon library="jam" name="set-square"></em9Icon>
		  <br />
		  <em9Icon library="jam" name="calendar-f"></em9Icon>
		  <em9Icon library="jam" name="camera-f"></em9Icon>
		  <em9Icon library="jam" name="filter-f"></em9Icon>
		  <em9Icon library="jam" name="leaf-f"></em9Icon>
		  <em9Icon library="jam" name="picture-f"></em9Icon>
		  <em9Icon library="jam" name="set-square-f"></em9Icon>
		</div>
	</>
);
```

### Material Icons

This will register the [Material Icons](https://material.io/resources/icons/?style=baseline) library using the jsDelivr CDN. This library has three variations: outline (default), round (`*_round`), and sharp (`*_sharp`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/google/material-design-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <em9-icon library="material" name="notifications"></em9-icon>
  <em9-icon library="material" name="email"></em9-icon>
  <em9-icon library="material" name="delete"></em9-icon>
  <em9-icon library="material" name="volume_up"></em9-icon>
  <em9-icon library="material" name="settings"></em9-icon>
  <em9-icon library="material" name="shopping_basket"></em9-icon>
  <br />
  <em9-icon library="material" name="notifications_round"></em9-icon>
  <em9-icon library="material" name="email_round"></em9-icon>
  <em9-icon library="material" name="delete_round"></em9-icon>
  <em9-icon library="material" name="volume_up_round"></em9-icon>
  <em9-icon library="material" name="settings_round"></em9-icon>
  <em9-icon library="material" name="shopping_basket_round"></em9-icon>
  <br />
  <em9-icon library="material" name="notifications_sharp"></em9-icon>
  <em9-icon library="material" name="email_sharp"></em9-icon>
  <em9-icon library="material" name="delete_sharp"></em9-icon>
  <em9-icon library="material" name="volume_up_sharp"></em9-icon>
  <em9-icon library="material" name="settings_sharp"></em9-icon>
  <em9-icon library="material" name="shopping_basket_sharp"></em9-icon>
</div>
```

```jsx react
import {  em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
	<>
		<script type="module">
		  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

		  registerIconLibrary('material', {
			resolver: name => {
			  const match = name.match(/^(.*?)(_(round|sharp))?$/);
			  return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
			},
			mutator: svg => svg.setAttribute('fill', 'currentColor')
		  });
		</script>

		<div style="font-size: 24px;">
		  <em9Icon library="material" name="notifications"></em9Icon>
		  <em9Icon library="material" name="email"></em9Icon>
		  <em9Icon library="material" name="delete"></em9Icon>
		  <em9Icon library="material" name="volume_up"></em9Icon>
		  <em9Icon library="material" name="settings"></em9Icon>
		  <em9Icon library="material" name="shopping_basket"></em9Icon>
		  <br />
		  <em9Icon library="material" name="notifications_round"></em9Icon>
		  <em9Icon library="material" name="email_round"></em9Icon>
		  <em9Icon library="material" name="delete_round"></em9Icon>
		  <em9Icon library="material" name="volume_up_round"></em9Icon>
		  <em9Icon library="material" name="settings_round"></em9Icon>
		  <em9Icon library="material" name="shopping_basket_round"></em9Icon>
		  <br />
		  <em9Icon library="material" name="notifications_sharp"></em9Icon>
		  <em9Icon library="material" name="email_sharp"></em9Icon>
		  <em9Icon library="material" name="delete_sharp"></em9Icon>
		  <em9Icon library="material" name="volume_up_sharp"></em9Icon>
		  <em9Icon library="material" name="settings_sharp"></em9Icon>
		  <em9Icon library="material" name="shopping_basket_sharp"></em9Icon>
		</div>
	</>
);
```

### Remix Icon

This will register the [Remix Icon](https://remixicon.com/) library using the jsDelivr CDN. This library groups icons by categories, so the name must include the category and icon separated by a slash, as well as the `-line` or `-fill` suffix as needed. A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Remix-Design/RemixIcon/blob/master/License).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('remixicon', {
    resolver: name => {
      const match = name.match(/^(.*?)\/(.*?)?$/);
      match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
      return `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${match[1]}/${match[2]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <em9-icon library="remixicon" name="business/cloud-line"></em9-icon>
  <em9-icon library="remixicon" name="design/brush-line"></em9-icon>
  <em9-icon library="remixicon" name="business/pie-chart-line"></em9-icon>
  <em9-icon library="remixicon" name="development/bug-line"></em9-icon>
  <em9-icon library="remixicon" name="media/image-line"></em9-icon>
  <em9-icon library="remixicon" name="system/alert-line"></em9-icon>
  <br />
  <em9-icon library="remixicon" name="business/cloud-fill"></em9-icon>
  <em9-icon library="remixicon" name="design/brush-fill"></em9-icon>
  <em9-icon library="remixicon" name="business/pie-chart-fill"></em9-icon>
  <em9-icon library="remixicon" name="development/bug-fill"></em9-icon>
  <em9-icon library="remixicon" name="media/image-fill"></em9-icon>
  <em9-icon library="remixicon" name="system/alert-fill"></em9-icon>
</div>
```

```jsx react
import {  em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
	<>
		<script type="module">
		  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

		  registerIconLibrary('remixicon', {
			resolver: name => {
			  const match = name.match(/^(.*?)\/(.*?)?$/);
			  match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
			  return `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${match[1]}/${match[2]}.svg`;
			},
			mutator: svg => svg.setAttribute('fill', 'currentColor')
		  });
		</script>

		<div style="font-size: 24px;">
		  <em9Icon library="remixicon" name="business/cloud-line"></em9Icon>
		  <em9Icon library="remixicon" name="design/brush-line"></em9Icon>
		  <em9Icon library="remixicon" name="business/pie-chart-line"></em9Icon>
		  <em9Icon library="remixicon" name="development/bug-line"></em9Icon>
		  <em9Icon library="remixicon" name="media/image-line"></em9Icon>
		  <em9Icon library="remixicon" name="system/alert-line"></em9Icon>
		  <br />
		  <em9Icon library="remixicon" name="business/cloud-fill"></em9Icon>
		  <em9Icon library="remixicon" name="design/brush-fill"></em9Icon>
		  <em9Icon library="remixicon" name="business/pie-chart-fill"></em9Icon>
		  <em9Icon library="remixicon" name="development/bug-fill"></em9Icon>
		  <em9Icon library="remixicon" name="media/image-fill"></em9Icon>
		  <em9Icon library="remixicon" name="system/alert-fill"></em9Icon>
		</div>
	</>
);
```

## Tabler Icons

This will register the [Tabler Icons](https://tabler-icons.io/) library using the jsDelivr CDN. This library features over 1,950 open source icons.

Icons in this library are licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('tabler', {
    resolver: name => `https://cdn.jsdelivr.net/npm/@tabler/icons@1.68.0/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <em9-icon library="tabler" name="alert-triangle"></em9-icon>
  <em9-icon library="tabler" name="arrow-back"></em9-icon>
  <em9-icon library="tabler" name="at"></em9-icon>
  <em9-icon library="tabler" name="ball-baseball"></em9-icon>
  <em9-icon library="tabler" name="cake"></em9-icon>
  <em9-icon library="tabler" name="files"></em9-icon>
  <br />
  <em9-icon library="tabler" name="keyboard"></em9-icon>
  <em9-icon library="tabler" name="moon"></em9-icon>
  <em9-icon library="tabler" name="pig"></em9-icon>
  <em9-icon library="tabler" name="printer"></em9-icon>
  <em9-icon library="tabler" name="ship"></em9-icon>
  <em9-icon library="tabler" name="toilet-paper"></em9-icon>
</div>
```

```jsx react
import {  em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
	<>
		<script type="module">
		  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

		  registerIconLibrary('tabler', {
			resolver: name => `https://cdn.jsdelivr.net/npm/@tabler/icons@1.68.0/icons/${name}.svg`
		  });
		</script>

		<div style="font-size: 24px;">
		  <em9Icon library="tabler" name="alert-triangle"></em9Icon>
		  <em9Icon library="tabler" name="arrow-back"></em9Icon>
		  <em9Icon library="tabler" name="at"></em9Icon>
		  <em9Icon library="tabler" name="ball-baseball"></em9Icon>
		  <em9Icon library="tabler" name="cake"></em9Icon>
		  <em9Icon library="tabler" name="files"></em9Icon>
		  <br />
		  <em9Icon library="tabler" name="keyboard"></em9Icon>
		  <em9Icon library="tabler" name="moon"></em9Icon>
		  <em9Icon library="tabler" name="pig"></em9Icon>
		  <em9Icon library="tabler" name="printer"></em9Icon>
		  <em9Icon library="tabler" name="ship"></em9Icon>
		  <em9Icon library="tabler" name="toilet-paper"></em9Icon>
		</div>
	</>
);
```

### Unicons

This will register the [Unicons](https://iconscout.com/unicons) library using the jsDelivr CDN. This library has two variations: line (default) and solid (`*-s`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Iconscout/unicons/blob/master/LICENSE). Some of the icons that appear on the Unicons website, particularly many of the solid variations, require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('unicons', {
    resolver: name => {
      const match = name.match(/^(.*?)(-s)?$/);
      return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${match[2] === '-s' ? 'solid' : 'line'}/${
        match[1]
      }.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <em9-icon library="unicons" name="clock"></em9-icon>
  <em9-icon library="unicons" name="graph-bar"></em9-icon>
  <em9-icon library="unicons" name="padlock"></em9-icon>
  <em9-icon library="unicons" name="polygon"></em9-icon>
  <em9-icon library="unicons" name="rocket"></em9-icon>
  <em9-icon library="unicons" name="star"></em9-icon>
  <br />
  <em9-icon library="unicons" name="clock-s"></em9-icon>
  <em9-icon library="unicons" name="graph-bar-s"></em9-icon>
  <em9-icon library="unicons" name="padlock-s"></em9-icon>
  <em9-icon library="unicons" name="polygon-s"></em9-icon>
  <em9-icon library="unicons" name="rocket-s"></em9-icon>
  <em9-icon library="unicons" name="star-s"></em9-icon>
</div>
```

```jsx react
import {  em9Icon } from 'em9webcomponents/dist/react';
const App = () => (
	<>
		<script type="module">
		  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

		  registerIconLibrary('unicons', {
			resolver: name => {
			  const match = name.match(/^(.*?)(-s)?$/);
			  return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${match[2] === '-s' ? 'solid' : 'line'}/${
				match[1]
			  }.svg`;
			},
			mutator: svg => svg.setAttribute('fill', 'currentColor')
		  });
		</script>

		<div style="font-size: 24px;">
		  <em9Icon library="unicons" name="clock"></em9Icon>
		  <em9Icon library="unicons" name="graph-bar"></em9Icon>
		  <em9Icon library="unicons" name="padlock"></em9Icon>
		  <em9Icon library="unicons" name="polygon"></em9Icon>
		  <em9Icon library="unicons" name="rocket"></em9Icon>
		  <em9Icon library="unicons" name="star"></em9Icon>
		  <br />
		  <em9Icon library="unicons" name="clock-s"></em9Icon>
		  <em9Icon library="unicons" name="graph-bar-s"></em9Icon>
		  <em9Icon library="unicons" name="padlock-s"></em9Icon>
		  <em9Icon library="unicons" name="polygon-s"></em9Icon>
		  <em9Icon library="unicons" name="rocket-s"></em9Icon>
		  <em9Icon library="unicons" name="star-s"></em9Icon>
		</div>
	</>
);
```

### Customizing the Default Library

The default icon library contains over 1,300 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These are the icons that display when you use `<em9-icon>` without the `library` attribute. If you prefer to have these icons resolve elsewhere or to a different icon library, register an icon library using the `default` name and a custom resolver.

This example will load the same set of icons from the jsDelivr CDN instead of your local assets folder.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('default', {
    resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${name}.svg`
  });
</script>
```

### Customizing the System Library

The system library contains only the icons used internally by em9-Library components. Unlike the default icon library, the system library does not rely on physical assets. Instead, its icons are hard-coded as data URIs into the resolver to ensure their availability.

If you want to change the icons em9-Library uses internally, you can register an icon library using the `system` name and a custom resolver. If you choose to do this, it's your responsibility to provide all of the icons that are required by components. You can reference `src/components/library.system.ts` for a complete list of system icons used by em9-Library.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`
  });
</script>
```

<!-- Supporting scripts and styles for the search utility -->
<script>
  fetch('/dist/assets/iconsax/iconsax.json')
    .then(res => res.json())  
    .then(icons => {
      const container = document.querySelector('.icon-search');
      const input = container.querySelector('em9-input');
      const select = container.querySelector('em9-select');
      const copyInput = container.querySelector('.icon-copy-input');
      const loader = container.querySelector('.icon-loader');
      const list = container.querySelector('.icon-list');
      const queue = [];
      let inputTimeout;

      // Generate icons
      icons.map(i => {
        const item = document.createElement('div');
        item.classList.add('icon-list-item');
        item.setAttribute('data-name', i.name);
        item.setAttribute('data-terms', [i.name, i.title, ...(i.tags || []), ...(i.categories || [])].join(' '));
        item.innerHTML = `
          <svg width="1em" height="1em" fill="currentColor">
            <use xlink:href="/assets/iconsax/iconsax-sprite.svg#${i.name}"></use>
          </svg>      
        `;

        const tooltip = document.createElement('em9-tooltip');
        tooltip.content = i.name;
        
        tooltip.appendChild(item);
        list.appendChild(tooltip);

        item.addEventListener('click', () => {
          copyInput.value = i.name;
          copyInput.select();
          document.execCommand('copy');
          tooltip.content = 'Copied!';
          setTimeout(() => tooltip.content = i.name, 1000);
        });
      });

      // Filter as the user types
      input.addEventListener('em9-input', () => {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
          [...list.querySelectorAll('.icon-list-item')].map(item => {
            const filter = input.value.toLowerCase();
            if (filter === '') {
              item.hidden = false;
            } else {
              const terms = item.getAttribute('data-terms').toLowerCase();
              item.hidden = terms.indexOf(filter) < 0;
            }
          });
        }, 250);
      });

     select.addEventListener('em9-select', () => {
      [...list.querySelectorAll('.icon-list-item')].map(item => {
        const filter = select.value.toLowerCase();
        const terms = item.getAttribute('data-terms').toLowerCase();
        item.hidden = terms.indexOf(filter) < 0;

        if (filter === 'bold') {
          item.hidden = !item.getAttribute('data-name').startsWith('bold');
        } else if (filter === 'broken') {
          item.hidden = !item.getAttribute('data-name').startsWith('broken');
        } else if (filter === 'bulk') {
          item.hidden = !item.getAttribute('data-name').startsWith('bulk');
        } else if (filter === 'linear') {
          item.hidden = !item.getAttribute('data-name').startsWith('linear');
        } else if (filter === 'outline') {
          item.hidden = !item.getAttribute('data-name').startsWith('outline');
        } else if (filter === 'twotone') {
          item.hidden = !item.getAttribute('data-name').startsWith('twotone');
        } else if (filter === 'cs-bold') {
          item.hidden = !item.getAttribute('data-name').startsWith('cs-bold');
        } else if (filter === 'cs-broken') {
          item.hidden = !item.getAttribute('data-name').startsWith('cs-broken');
        } else if (filter === 'cs-bulk') {
          item.hidden = !item.getAttribute('data-name').startsWith('cs-bulk');
        } else if (filter === 'cs-linear') {
          item.hidden = !item.getAttribute('data-name').startsWith('cs-linear');
        } else if (filter === 'cs-outline') {
          item.hidden = !item.getAttribute('data-name').startsWith('cs-outline');
        } else if (filter === 'cs-twotone') {
          item.hidden = !item.getAttribute('data-name').startsWith('cs-twotone');
        }
      });
    });

      // Sort by type and remember preference
      const iconType = localStorage.getItem('em9-icon:type') || 'bulk';
          select.dispatchEvent(new Event('em9-select'));
      list.setAttribute('data-type', select.value);
      select.addEventListener('em9-change', () => {
        list.setAttribute('data-type', select.value);
        localStorage.setItem('em9-icon:type', select.value);
      });
    });
</script>

<style>
  .icon-search {
    border: solid 1px var(--em9-panel-border-color);
    border-radius: var(--em9-border-radius-medium);
    padding: var(--em9-spacing-medium);
  }

  .icon-search [hidden] {
    display: none;
  }

  .icon-search-controls {
    display: flex;
  }

  .icon-search-controls em9-input {
    flex: 1 1 auto;
  }

  .icon-search-controls em9-select {
    width: 10rem;
    flex: 0 0 auto;
    margin-left: 1rem;
  }

  .icon-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
  }

  .icon-list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    margin-top: 1rem;
  }

  .icon-loader[hidden],
  .icon-list[hidden] {
    display: none;
  }

  .icon-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--em9-border-radius-medium);
    font-size: 24px;
    width: 2em;
    height: 2em;
    margin: 0 auto;
    cursor: copy;
    transition: var(--em9-transition-medium) all;
  }

  .icon-list-item:hover {
    background-color: var(--em9-color-primary-50);
    color: var(--em9-color-primary-600);
  }

  .icon-list[data-type="outline"] .icon-list-item[data-name$="-fill"] {
    display: none;
  }

  .icon-list[data-type="fill"] .icon-list-item:not([data-name$="-fill"]) {
    display: none;
  }

  .icon-copy-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 1000px) {
    .icon-list {
      grid-template-columns: repeat(8, 1fr);
    }

    .icon-list-item {
      font-size: 20px;
    }

    .icon-search-controls {
      display: block;
    }

    .icon-search-controls em9-select {
      width: auto;
      margin: 1rem 0 0 0;
    }
  }

  @media screen and (max-width: 500px) {
    .icon-list {
      grid-template-columns: repeat(4, 1fr);
    }    
  }
</style>

[component-metadata:em9-icon]
