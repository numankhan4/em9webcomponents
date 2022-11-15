# Popup

[component-header:em9-popup]

This component's name is inspired by [`<popup>`](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Popup/explainer.md). It uses [Floating UI](https://floating-ui.com/) under the hood to provide a well-tested, lightweight, and fully declarative positioning utility for tooltips, dropdowns, and more.

Popup doesn't provide any styles — just positioning! The popup's preferred placement, distance, and skidding (offset) can be configured using attributes. An arrow that points to the anchor can be shown and customized to your liking. Additional positioning options are available and described in more detail below.

```html preview
<div class="popup-overview">
  <em9-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </em9-popup>

  <div class="popup-overview-options">
    <em9-select label="Placement" name="placement" value="top" class="popup-overview-select">
      <em9-menu-item value="top">top</em9-menu-item>
      <em9-menu-item value="top-start">top-start</em9-menu-item>
      <em9-menu-item value="top-end">top-end</em9-menu-item>
      <em9-menu-item value="bottom">bottom</em9-menu-item>
      <em9-menu-item value="bottom-start">bottom-start</em9-menu-item>
      <em9-menu-item value="bottom-end">bottom-end</em9-menu-item>
      <em9-menu-item value="right">right</em9-menu-item>
      <em9-menu-item value="right-start">right-start</em9-menu-item>
      <em9-menu-item value="right-end">right-end</em9-menu-item>
      <em9-menu-item value="left">left</em9-menu-item>
      <em9-menu-item value="left-start">left-start</em9-menu-item>
      <em9-menu-item value="left-end">left-end</em9-menu-item>
    </em9-select>
    <em9-input type="number" name="distance" label="distance" value="0"></em9-input>
    <em9-input type="number" name="skidding" label="Skidding" value="0"></em9-input>
  </div>

  <div class="popup-overview-options">
    <em9-switch name="active" checked>Active</em9-switch>
    <em9-switch name="arrow">Arrow</em9-switch>
  </div>
</div>

<script>
  const container = document.querySelector('.popup-overview');
  const popup = container.querySelector('em9-popup');
  const select = container.querySelector('em9-select[name="placement"]');
  const distance = container.querySelector('em9-input[name="distance"]');
  const skidding = container.querySelector('em9-input[name="skidding"]');
  const active = container.querySelector('em9-switch[name="active"]');
  const arrow = container.querySelector('em9-switch[name="arrow"]');

  select.addEventListener('em9-change', () => (popup.placement = select.value));
  distance.addEventListener('em9-input', () => (popup.distance = distance.value));
  skidding.addEventListener('em9-input', () => (popup.skidding = skidding.value));
  active.addEventListener('em9-change', () => (popup.active = active.checked));
  arrow.addEventListener('em9-change', () => (popup.arrow = arrow.checked));
</script>

<style>
  .popup-overview em9-popup {
    --arrow-color: var(--em9-color-primary-600);
  }

  .popup-overview span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px;
  }

  .popup-overview .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }

  .popup-overview-options {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 1rem;
  }

  .popup-overview-options em9-select {
    width: 160px;
  }

  .popup-overview-options em9-input {
    width: 100px;
  }

  .popup-overview-options + .popup-overview-options {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { SlPopup, SlSelect, SlMenuItem, SlInput, SlSwitch } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-overview em9-popup {
    --arrow-color: var(--em9-color-primary-600);
  }

  .popup-overview span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px;
  }

  .popup-overview .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }

  .popup-overview-options {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 1rem;
  }

  .popup-overview-options em9-select {
    width: 160px;
  }

  .popup-overview-options em9-input {
    width: 100px;
  }

  .popup-overview-options + .popup-overview-options {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');
  const [distance, setDistance] = useState(0);
  const [skidding, setSkidding] = useState(0);
  const [active, setActive] = useState(true);
  const [arrow, setArrow] = useState(false);

  return (
    <>
      <div className="popup-overview">
        <SlPopup
          placement={placement}
          active={active || null}
          distance={distance}
          skidding={skidding}
          arrow={arrow || null}
        >
          <span slot="anchor" />
          <div className="box" />
        </SlPopup>

        <div className="popup-overview-options">
          <SlSelect
            label="Placement"
            name="placement"
            value={placement}
            className="popup-overview-select"
            onSlChange={event => setPlacement(event.target.value)}
          >
            <SlMenuItem value="top">top</SlMenuItem>
            <SlMenuItem value="top-start">top-start</SlMenuItem>
            <SlMenuItem value="top-end">top-end</SlMenuItem>
            <SlMenuItem value="bottom">bottom</SlMenuItem>
            <SlMenuItem value="bottom-start">bottom-start</SlMenuItem>
            <SlMenuItem value="bottom-end">bottom-end</SlMenuItem>
            <SlMenuItem value="right">right</SlMenuItem>
            <SlMenuItem value="right-start">right-start</SlMenuItem>
            <SlMenuItem value="right-end">right-end</SlMenuItem>
            <SlMenuItem value="left">left</SlMenuItem>
            <SlMenuItem value="left-start">left-start</SlMenuItem>
            <SlMenuItem value="left-end">left-end</SlMenuItem>
          </SlSelect>
          <SlInput
            type="number"
            name="distance"
            label="distance"
            value={distance}
            onSlInput={event => setDistance(event.target.value)}
          />
          <SlInput
            type="number"
            name="skidding"
            label="Skidding"
            value={skidding}
            onSlInput={event => setSkidding(event.target.value)}
          />
        </div>

        <div className="popup-overview-options">
          <SlSwitch checked={active} onSlChange={event => setActive(event.target.checked)}>
            Active
          </SlSwitch>
          <SlSwitch checked={arrow} onSlChange={event => setArrow(event.target.checked)}>
            Arrow
          </SlSwitch>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

?> A popup's anchor should not be styled with `display: contents` since the coordinates will not be eligible for calculation. However, if the anchor is a `<slot>` element, popup will use the first assigned element as the anchor. This behavior allows other components to pass anchors through more easily via composition.

## Examples

### Activating

Popups are inactive and hidden until the `active` attribute is applied. Removing the attribute will tear down all positioning logic and listeners, meaning you can have many idle popups on the page without affecting performance.

```html preview
<div class="popup-active">
  <em9-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </em9-popup>

  <br />
  <em9-switch checked>Active</em9-switch>
</div>

<style>
  .popup-active span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px;
  }

  .popup-active .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }
</style>

<script>
  const container = document.querySelector('.popup-active');
  const popup = container.querySelector('em9-popup');
  const active = container.querySelector('em9-switch');

  active.addEventListener('em9-change', () => (popup.active = active.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { SlPopup, SlSwitch } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-active span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px;
  }

  .popup-active .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }
`;

const App = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="popup-active">
        <SlPopup placement="top" active={active}>
          <span slot="anchor" />
          <div className="box" />
        </SlPopup>

        <br />
        <SlSwitch checked={active} onSlChange={event => setActive(event.target.checked)}>
          Active
        </SlSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### External Anchors

By default, anchors are slotted into the popup using the `anchor` slot. If your anchor needs to live outside of the popup, you can pass the anchor's `id` to the `anchor` attribute. Alternatively, you can pass an element reference to the `anchor` property to achieve the same effect without using an `id`.

```html preview
<span id="external-anchor"></span>

<em9-popup anchor="external-anchor" placement="top" active>
  <div class="box"></div>
</em9-popup>

<style>
  #external-anchor {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px 0 0 50px;
  }

  #external-anchor ~ em9-popup .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }
</style>
```

```jsx react
import { SlPopup } from '@shoelace-style/shoelace/dist/react';

const css = `
  #external-anchor {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px 0 0 50px;
  }

  #external-anchor ~ em9-popup .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }
`;

const App = () => {
  return (
    <>
      <span id="external-anchor" />

      <SlPopup anchor="external-anchor" placement="top" active>
        <div class="box" />
      </SlPopup>

      <style>{css}</style>
    </>
  );
};
```

### Placement

Use the `placement` attribute to tell the popup the preferred placement of the popup. Note that the actual position will vary to ensure the panel remains in the viewport if you're using positioning features such as `flip` and `shift`.

Since placement is preferred when using `flip`, you can observe the popup's current placement when it's active by looking at the `data-current-placement` attribute. This attribute will update as the popup flips to find available space and it will be removed when the popup is deactivated.

```html preview
<div class="popup-placement">
  <em9-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </em9-popup>

  <em9-select label="Placement" value="top">
    <em9-menu-item value="top">top</em9-menu-item>
    <em9-menu-item value="top-start">top-start</em9-menu-item>
    <em9-menu-item value="top-end">top-end</em9-menu-item>
    <em9-menu-item value="bottom">bottom</em9-menu-item>
    <em9-menu-item value="bottom-start">bottom-start</em9-menu-item>
    <em9-menu-item value="bottom-end">bottom-end</em9-menu-item>
    <em9-menu-item value="right">right</em9-menu-item>
    <em9-menu-item value="right-start">right-start</em9-menu-item>
    <em9-menu-item value="right-end">right-end</em9-menu-item>
    <em9-menu-item value="left">left</em9-menu-item>
    <em9-menu-item value="left-start">left-start</em9-menu-item>
    <em9-menu-item value="left-end">left-end</em9-menu-item>
  </em9-select>
</div>

<style>
  .popup-placement span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px;
  }

  .popup-placement .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }

  .popup-placement em9-select {
    max-width: 280px;
  }
</style>

<script>
  const container = document.querySelector('.popup-placement');
  const popup = container.querySelector('em9-popup');
  const select = container.querySelector('em9-select');

  select.addEventListener('em9-change', () => (popup.placement = select.value));
</script>
```

```jsx react
import { useState } from 'react';
import { SlPopup, SlSelect, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-placement span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px;
  }

  .popup-placement .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }

  .popup-placement em9-select {
    max-width: 280px;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');

  return (
    <div className="popup-active">
      <div className="popup-placement">
        <SlPopup placement={placement} active>
          <span slot="anchor" />
          <div className="box" />
        </SlPopup>

        <SlSelect label="Placement" value={placement} onSlChange={event => setPlacement(event.target.value)}>
          <SlMenuItem value="top">top</SlMenuItem>
          <SlMenuItem value="top-start">top-start</SlMenuItem>
          <SlMenuItem value="top-end">top-end</SlMenuItem>
          <SlMenuItem value="bottom">bottom</SlMenuItem>
          <SlMenuItem value="bottom-start">bottom-start</SlMenuItem>
          <SlMenuItem value="bottom-end">bottom-end</SlMenuItem>
          <SlMenuItem value="right">right</SlMenuItem>
          <SlMenuItem value="right-start">right-start</SlMenuItem>
          <SlMenuItem value="right-end">right-end</SlMenuItem>
          <SlMenuItem value="left">left</SlMenuItem>
          <SlMenuItem value="left-start">left-start</SlMenuItem>
          <SlMenuItem value="left-end">left-end</SlMenuItem>
        </SlSelect>
      </div>

      <style>{css}</style>
    </div>
  );
};
```

### Distance

Use the `distance` attribute to change the distance between the popup and its anchor. A positive value will move the popup further away and a negative value will move it closer.

```html preview
<div class="popup-distance">
  <em9-popup placement="top" distance="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </em9-popup>

  <em9-range min="-50" max="50" step="1" value="0" label="Distance"></em9-range>
</div>

<style>
  .popup-distance span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px;
  }

  .popup-distance .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }

  .popup-distance em9-range {
    max-width: 260px;
  }
</style>

<script>
  const container = document.querySelector('.popup-distance');
  const popup = container.querySelector('em9-popup');
  const distance = container.querySelector('em9-range');

  distance.addEventListener('em9-change', () => (popup.distance = distance.value));
</script>
```

```jsx react
import { useState } from 'react';
import { SlPopup, SlRange } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-distance span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px;
  }

  .popup-distance .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }

  .popup-distance em9-range {
    max-width: 260px;
  }
`;

const App = () => {
  const [distance, setDistance] = useState(0);

  return (
    <>
      <div className="popup-distance">
        <SlPopup placement="top" distance={distance} active>
          <span slot="anchor" />
          <div class="box" />
        </SlPopup>

        <SlRange
          label="Distance"
          min="-50"
          max="50"
          step="1"
          value={distance}
          onSlChange={event => setDistance(event.target.value)}
        />
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Skidding

The `skidding` attribute is similar to `distance`, but instead allows you to offset the popup along the anchor's axis. Both positive and negative values are allowed.

```html preview
<div class="popup-skidding">
  <em9-popup placement="top" skidding="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </em9-popup>

  <em9-range min="-50" max="50" step="1" value="0" label="Skidding"></em9-range>
</div>

<style>
  .popup-skidding span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px;
  }

  .popup-skidding .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }

  .popup-skidding em9-range {
    max-width: 260px;
  }
</style>

<script>
  const container = document.querySelector('.popup-skidding');
  const popup = container.querySelector('em9-popup');
  const skidding = container.querySelector('em9-range');

  skidding.addEventListener('em9-change', () => (popup.skidding = skidding.value));
</script>
```

```jsx react
import { useState } from 'react';
import { SlPopup, SlRange } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-skidding span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px;
  }

  .popup-skidding .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }

  .popup-skidding em9-range {
    max-width: 260px;
  }
`;

const App = () => {
  const [skidding, setSkidding] = useState(0);

  return (
    <>
      <div className="popup-skidding">
        <SlPopup placement="top" skidding={skidding} active>
          <span slot="anchor"></span>
          <div className="box"></div>
        </SlPopup>

        <SlRange
          label="Skidding"
          min="-50"
          max="50"
          step="1"
          value={skidding}
          onSlChange={event => setSkidding(event.target.value)}
        />
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Arrows

Add an arrow to your popup with the `arrow` attribute. It's usually a good idea to set a `distance` to make room for the arrow. To adjust the arrow's color and size, use the `--arrow-color` and `--arrow-size` custom properties, respectively. You can also target the `arrow` part to add additional styles such as shadows and borders.

By default, the arrow will be aligned as close to the center of the _anchor_ as possible, considering available space and `arrow-padding`. You can use the `arrow-placement` attribute to force the arrow to align to the start, end, or center of the _popup_ instead.

```html preview
<div class="popup-arrow">
  <em9-popup placement="top" arrow arrow-placement="anchor" distance="8" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </em9-popup>

  <div class="popup-arrow-options">
    <em9-select label="Placement" name="placement" value="top" class="popup-overview-select">
      <em9-menu-item value="top">top</em9-menu-item>
      <em9-menu-item value="top-start">top-start</em9-menu-item>
      <em9-menu-item value="top-end">top-end</em9-menu-item>
      <em9-menu-item value="bottom">bottom</em9-menu-item>
      <em9-menu-item value="bottom-start">bottom-start</em9-menu-item>
      <em9-menu-item value="bottom-end">bottom-end</em9-menu-item>
      <em9-menu-item value="right">right</em9-menu-item>
      <em9-menu-item value="right-start">right-start</em9-menu-item>
      <em9-menu-item value="right-end">right-end</em9-menu-item>
      <em9-menu-item value="left">left</em9-menu-item>
      <em9-menu-item value="left-start">left-start</em9-menu-item>
      <em9-menu-item value="left-end">left-end</em9-menu-item>
    </em9-select>

    <em9-select label="Arrow Placement" name="arrow-placement" value="anchor">
      <em9-menu-item value="anchor">anchor</em9-menu-item>
      <em9-menu-item value="start">start</em9-menu-item>
      <em9-menu-item value="end">end</em9-menu-item>
      <em9-menu-item value="center">center</em9-menu-item>
    </em9-select>
  </div>

  <div class="popup-arrow-options">
    <em9-switch name="arrow" checked>Arrow</em9-switch>
  </div>

  <style>
    .popup-arrow em9-popup {
      --arrow-color: var(--em9-color-primary-600);
    }

    .popup-arrow span[slot='anchor'] {
      display: inline-block;
      width: 150px;
      height: 150px;
      border: dashed 2px var(--em9-color-neutral-600);
      margin: 50px;
    }

    .popup-arrow .box {
      width: 100px;
      height: 50px;
      background: var(--em9-color-primary-600);
      border-radius: var(--em9-border-radius-medium);
    }

    .popup-arrow-options {
      display: flex;
      flex-wrap: wrap;
      align-items: end;
      gap: 1rem;
    }

    .popup-arrow-options em9-select {
      width: 160px;
    }

    .popup-arrow-options + .popup-arrow-options {
      margin-top: 1rem;
    }
  </style>

  <script>
    const container = document.querySelector('.popup-arrow');
    const popup = container.querySelector('em9-popup');
    const placement = container.querySelector('[name="placement"]');
    const arrowPlacement = container.querySelector('[name="arrow-placement"]');
    const arrow = container.querySelector('[name="arrow"]');

    placement.addEventListener('em9-change', () => (popup.placement = placement.value));
    arrowPlacement.addEventListener('em9-change', () => (popup.arrowPlacement = arrowPlacement.value));
    arrow.addEventListener('em9-change', () => (popup.arrow = arrow.checked));
  </script>
</div>
```

```jsx react
import { useState } from 'react';
import { SlPopup, SlSelect, SlMenuItem, SlSwitch } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-arrow em9-popup {
    --arrow-color: var(--em9-color-primary-600);
  }

  .popup-arrow span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px;
  }

  .popup-arrow .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }

  .popup-arrow-options {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 1rem;
  }

  .popup-arrow-options em9-select {
    width: 160px;
  }

  .popup-arrow-options + .popup-arrow-options {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');
  const [arrowPlacement, setArrowPlacement] = useState('anchor');
  const [arrow, setArrow] = useState(true);

  return (
    <>
      <div className="popup-arrow">
        <SlPopup placement={placement} arrow={arrow || null} arrow-placement={arrowPlacement} distance="8" active>
          <span slot="anchor" />
          <div className="box" />
        </SlPopup>

        <div className="popup-arrow-options">
          <SlSelect
            label="Placement"
            name="placement"
            value={placement}
            className="popup-overview-select"
            onSlChange={event => setPlacement(event.target.value)}
          >
            <SlMenuItem value="top">top</SlMenuItem>
            <SlMenuItem value="top-start">top-start</SlMenuItem>
            <SlMenuItem value="top-end">top-end</SlMenuItem>
            <SlMenuItem value="bottom">bottom</SlMenuItem>
            <SlMenuItem value="bottom-start">bottom-start</SlMenuItem>
            <SlMenuItem value="bottom-end">bottom-end</SlMenuItem>
            <SlMenuItem value="right">right</SlMenuItem>
            <SlMenuItem value="right-start">right-start</SlMenuItem>
            <SlMenuItem value="right-end">right-end</SlMenuItem>
            <SlMenuItem value="left">left</SlMenuItem>
            <SlMenuItem value="left-start">left-start</SlMenuItem>
            <SlMenuItem value="left-end">left-end</SlMenuItem>
          </SlSelect>

          <SlSelect
            label="Arrow Placement"
            name="arrow-placement"
            value={arrowPlacement}
            onSlChange={event => setArrowPlacement(event.target.value)}
          >
            <SlMenuItem value="anchor">anchor</SlMenuItem>
            <SlMenuItem value="start">start</SlMenuItem>
            <SlMenuItem value="end">end</SlMenuItem>
            <SlMenuItem value="center">center</SlMenuItem>
          </SlSelect>
        </div>

        <div className="popup-arrow-options">
          <SlSwitch name="arrow" checked={arrow} onSlChange={event => setArrow(event.target.checked)}>
            Arrow
          </SlSwitch>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Syncing with the Anchor's Dimensions

Use the `sync` attribute to make the popup the same width or height as the anchor element. This is useful for controls that need the popup to stay the same width or height as the trigger.

```html preview
<div class="popup-sync">
  <em9-popup placement="top" sync="width" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </em9-popup>

  <em9-select value="width" label="Sync">
    <em9-menu-item value="width">Width</em9-menu-item>
    <em9-menu-item value="height">Height</em9-menu-item>
    <em9-menu-item value="both">Both</em9-menu-item>
    <em9-menu-item value="">None</em9-menu-item>
  </em9-select>
</div>

<style>
  .popup-sync span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px;
  }

  .popup-sync .box {
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }

  .popup-sync em9-select {
    width: 160px;
  }
</style>

<script>
  const container = document.querySelector('.popup-sync');
  const popup = container.querySelector('em9-popup');
  const fixed = container.querySelector('em9-switch');
  const sync = container.querySelector('em9-select');

  sync.addEventListener('em9-change', () => (popup.sync = sync.value));
</script>
```

```jsx react
import { useState } from 'react';
import { SlPopup, SlSelect, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-sync span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 50px;
  }

  .popup-sync .box {
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }

  .popup-sync em9-switch {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [sync, setSync] = useState('width');

  return (
    <>
      <div class="popup-sync">
        <SlPopup placement="top" sync={sync} active>
          <span slot="anchor" />
          <div class="box" />
        </SlPopup>

        <SlSelect value={sync} label="Sync" onSlChange={event => setSync(event.target.value)}>
          <SlMenuItem value="width">Width</SlMenuItem>
          <SlMenuItem value="height">Height</SlMenuItem>
          <SlMenuItem value="both">Both</SlMenuItem>
          <SlMenuItem value="">None</SlMenuItem>
        </SlSelect>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Positioning Strategy

By default, the popup is positioned using an absolute positioning strategy. However, if your anchor is fixed or exists within a container that has `overflow: auto|hidden`, the popup risks being clipped. To work around this, you can use a fixed positioning strategy by setting the `strategy` attribute to `fixed`.

The fixed positioning strategy reduces jumpiness when the anchor is fixed and allows the popup to break out containers that clip. When using this strategy, it's important to note that the content will be positioned _relative to its containing block_, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

In this example, you can see how the popup breaks out of the overflow container when it's fixed. The fixed positioning strategy tends to be less performant than absolute, so avoid using it unnecessarily.

Toggle the switch and scroll the container to see the difference.

```html preview
<div class="popup-strategy">
  <div class="overflow">
    <em9-popup placement="top" strategy="fixed" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </em9-popup>
  </div>

  <em9-switch checked>Fixed</em9-switch>
</div>

<style>
  .popup-strategy .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--em9-color-neutral-200);
    overflow: auto;
  }

  .popup-strategy span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-strategy .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }

  .popup-strategy em9-switch {
    margin-top: 1rem;
  }
</style>

<script>
  const container = document.querySelector('.popup-strategy');
  const popup = container.querySelector('em9-popup');
  const fixed = container.querySelector('em9-switch');

  fixed.addEventListener('em9-change', () => (popup.strategy = fixed.checked ? 'fixed' : 'absolute'));
</script>
```

```jsx react
import { useState } from 'react';
import { SlPopup, SlSwitch } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-strategy .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--em9-color-neutral-200);
    overflow: auto;
  }

  .popup-strategy span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-strategy .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }

  .popup-strategy em9-switch {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [fixed, setFixed] = useState(true);

  return (
    <>
      <div className="popup-strategy">
        <div className="overflow">
          <SlPopup placement="top" strategy={fixed ? 'fixed' : 'absolute'} active>
            <span slot="anchor" />
            <div className="box" />
          </SlPopup>
        </div>

        <SlSwitch checked={fixed} onSlChange={event => setFixed(event.target.checked)}>
          Fixed
        </SlSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Flip

When the popup doesn't have enough room in its preferred placement, it can automatically flip to keep it in view. To enable this, use the `flip` attribute. By default, the popup will flip to the opposite placement, but you can configure preferred fallback placements using `flip-fallback-placement` and `flip-fallback-strategy`. Additional options are available to control the flip behavior's boundary and padding.

Scroll the container to see how the popup flips to prevent clipping.

```html preview
<div class="popup-flip">
  <div class="overflow">
    <em9-popup placement="top" flip active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </em9-popup>
  </div>

  <br />
  <em9-switch checked>Flip</em9-switch>
</div>

<style>
  .popup-flip .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--em9-color-neutral-200);
    overflow: auto;
  }

  .popup-flip span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-flip .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }
</style>

<script>
  const container = document.querySelector('.popup-flip');
  const popup = container.querySelector('em9-popup');
  const flip = container.querySelector('em9-switch');

  flip.addEventListener('em9-change', () => (popup.flip = flip.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { SlPopup, SlSwitch } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-flip .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--em9-color-neutral-200);
    overflow: auto;
  }

  .popup-flip span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-flip .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }
`;

const App = () => {
  const [flip, setFlip] = useState(true);

  return (
    <>
      <div className="popup-flip">
        <div className="overflow">
          <SlPopup placement="top" flip={flip} active>
            <span slot="anchor" />
            <div className="box" />
          </SlPopup>
        </div>

        <br />
        <SlSwitch checked={flip} onSlChange={event => setFlip(event.target.checked)}>
          Flip
        </SlSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Flip Fallbacks

While using the `flip` attribute, you can customize the placement of the popup when the preferred placement doesn't have room. For this, use `flip-fallback-placements` and `flip-fallback-strategy`.

If the preferred placement doesn't have room, the first suitable placement found in `flip-fallback-placement` will be used. The value of this attribute must be a string including any number of placements separated by a space, e.g. `"right bottom"`.

If no fallback placement works, the final placement will be determined by `flip-fallback-strategy`. This value can be either `initial` (default), where the placement reverts to the position in `placement`, or `best-fit`, where the placement is chosen based on available space.

Scroll the container to see how the popup changes it's fallback placement to prevent clipping.

```html preview
<div class="popup-flip-fallbacks">
  <div class="overflow">
    <em9-popup placement="top" flip flip-fallback-placements="right bottom" flip-fallback-strategy="initial" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </em9-popup>
  </div>
</div>

<style>
  .popup-flip-fallbacks .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--em9-color-neutral-200);
    overflow: auto;
  }

  .popup-flip-fallbacks span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 250px 50px;
  }

  .popup-flip-fallbacks .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }
</style>
```

```jsx react
import { SlPopup } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-flip-fallbacks .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--em9-color-neutral-200);
    overflow: auto;
  }

  .popup-flip-fallbacks span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 250px 50px;
  }

  .popup-flip-fallbacks .box {
    width: 100px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }
`;

const App = () => {
  return (
    <>
      <div className="popup-flip-fallbacks">
        <div className="overflow">
          <SlPopup placement="top" flip flip-fallback-placements="right bottom" flip-fallback-strategy="initial" active>
            <span slot="anchor" />
            <div className="box" />
          </SlPopup>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Shift

When a popup is longer than its anchor, it risks being clipped by an overflowing container. In this case, use the `shift` attribute to shift the popup along its axis and back into view. You can customize the shift behavior using `shiftBoundary` and `shift-padding`.

Toggle the switch to see the difference.

```html preview
<div class="popup-shift">
  <div class="overflow">
    <em9-popup placement="top" shift shift-padding="10" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </em9-popup>
  </div>

  <em9-switch checked>Shift</em9-switch>
</div>

<style>
  .popup-shift .overflow {
    position: relative;
    border: solid 2px var(--em9-color-neutral-200);
    overflow: auto;
  }

  .popup-shift span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 60px 0 0 10px;
  }

  .popup-shift .box {
    width: 300px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }
</style>

<script>
  const container = document.querySelector('.popup-shift');
  const popup = container.querySelector('em9-popup');
  const shift = container.querySelector('em9-switch');

  shift.addEventListener('em9-change', () => (popup.shift = shift.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { SlPopup, SlSwitch } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-shift .overflow {
    position: relative;
    border: solid 2px var(--em9-color-neutral-200);
    overflow: auto;
  }

  .popup-shift span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 60px 0 0 10px;
  }

  .popup-shift .box {
    width: 300px;
    height: 50px;
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);
  }
`;

const App = () => {
  const [shift, setShift] = useState(true);

  return (
    <>
      <div className="popup-shift">
        <div className="overflow">
          <SlPopup placement="top" shift={shift} shift-padding="10" active>
            <span slot="anchor" />
            <div className="box" />
          </SlPopup>
        </div>

        <SlSwitch checked={shift} onSlChange={event => setShift(event.target.checked)}>
          Shift
        </SlSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Auto-size

Use the `auto-size` attribute to tell the popup to resize when necessary to prevent it from getting clipped. Possible values are `horizontal`, `vertical`, and `both`. You can use `autoSizeBoundary` and `auto-size-padding` to customize the behavior of this option. Auto-size works well with `flip`, but if you're using `auto-size-padding` make sure `flip-padding` is the same value.

When using `auto-size`, one or both of `--auto-size-available-width` and `--auto-size-available-height` will be applied to the host element. These values determine the available space the popover has before clipping will occur. Since they cascade, you can use them to set a max-width/height on your popup's content and easily control its overflow.

Scroll the container to see the popup resize as its available space changes.

```html preview
<div class="popup-auto-size">
  <div class="overflow">
    <em9-popup placement="top" auto-size="both" auto-size-padding="10" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </em9-popup>
  </div>

  <br />
  <em9-switch checked>Auto-size</em9-switch>
</div>

<style>
  .popup-auto-size .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--em9-color-neutral-200);
    overflow: auto;
  }

  .popup-auto-size span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 250px 50px 100px 50px;
  }

  .popup-auto-size .box {
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);

    /* This sets the preferred size of the popup's content */
    width: 100px;
    height: 200px;

    /* This sets the maximum dimensions and allows scrolling when auto-size kicks in */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
    overflow: auto;
  }
</style>

<script>
  const container = document.querySelector('.popup-auto-size');
  const popup = container.querySelector('em9-popup');
  const autoSize = container.querySelector('em9-switch');

  autoSize.addEventListener('em9-change', () => (popup.autoSize = autoSize.checked ? 'both' : ''));
</script>
```

```jsx react
import { useState } from 'react';
import { SlPopup, SlSwitch } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-auto-size .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--em9-color-neutral-200);
    overflow: auto;
  }

  .popup-auto-size span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--em9-color-neutral-600);
    margin: 250px 50px 100px 50px;
  }

  .popup-auto-size .box {
    background: var(--em9-color-primary-600);
    border-radius: var(--em9-border-radius-medium);

    /* This sets the preferred size of the popup's content */
    width: 100px;
    height: 200px;

    /* This sets the maximum dimensions and allows scrolling when auto-size kicks in */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
    overflow: auto;
  }
`;

const App = () => {
  const [autoSize, setAutoSize] = useState(true);

  return (
    <>
      <div className="popup-auto-size">
        <div className="overflow">
          <SlPopup placement="top" auto-size={autoSize ? 'both' || null} auto-size-padding="10" active>
            <span slot="anchor" />
            <div className="box" />
          </SlPopup>
        </div>

        <br />
        <SlSwitch checked={autoSize} onSlChange={event => setAutoSize(event.target.checked)}>
          Auto-size
        </SlSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:em9-popup]
