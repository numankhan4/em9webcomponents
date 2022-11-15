# Tab Group

[component-header:em9-tab-group]

Tab groups organize content into a container that shows one section at a time.

Tab groups make use of [tabs](/components/tab) and [tab panels](/components/tab-panel). Each tab must be slotted into the `nav` slot and its `panel` must refer to a tab panel of the same name.

```html preview
<em9-tab-group>
  <em9-tab slot="nav" panel="general">General</em9-tab>
  <em9-tab slot="nav" panel="custom">Custom</em9-tab>
  <em9-tab slot="nav" panel="advanced">Advanced</em9-tab>
  <em9-tab slot="nav" panel="disabled" disabled>Disabled</em9-tab>

  <em9-tab-panel name="general">This is the general tab panel.</em9-tab-panel>
  <em9-tab-panel name="custom">This is the custom tab panel.</em9-tab-panel>
  <em9-tab-panel name="advanced">This is the advanced tab panel.</em9-tab-panel>
  <em9-tab-panel name="disabled">This is a disabled tab panel.</em9-tab-panel>
</em9-tab-group>
```

```jsx react
import { em9Tab, em9TabGroup, em9TabPanel } from 'em9webcomponents/dist/react';

const App = () => (
  <em9TabGroup>
    <em9Tab slot="nav" panel="general">
      General
    </em9Tab>
    <em9Tab slot="nav" panel="custom">
      Custom
    </em9Tab>
    <em9Tab slot="nav" panel="advanced">
      Advanced
    </em9Tab>
    <em9Tab slot="nav" panel="disabled" disabled>
      Disabled
    </em9Tab>

    <em9TabPanel name="general">This is the general tab panel.</em9TabPanel>
    <em9TabPanel name="custom">This is the custom tab panel.</em9TabPanel>
    <em9TabPanel name="advanced">This is the advanced tab panel.</em9TabPanel>
    <em9TabPanel name="disabled">This is a disabled tab panel.</em9TabPanel>
  </em9TabGroup>
);
```

## Examples

### Tabs on Bottom

Tabs can be shown on the bottom by setting `placement` to `bottom`.

```html preview
<em9-tab-group placement="bottom">
  <em9-tab slot="nav" panel="general">General</em9-tab>
  <em9-tab slot="nav" panel="custom">Custom</em9-tab>
  <em9-tab slot="nav" panel="advanced">Advanced</em9-tab>
  <em9-tab slot="nav" panel="disabled" disabled>Disabled</em9-tab>

  <em9-tab-panel name="general">This is the general tab panel.</em9-tab-panel>
  <em9-tab-panel name="custom">This is the custom tab panel.</em9-tab-panel>
  <em9-tab-panel name="advanced">This is the advanced tab panel.</em9-tab-panel>
  <em9-tab-panel name="disabled">This is a disabled tab panel.</em9-tab-panel>
</em9-tab-group>
```

```jsx react
import { em9Tab, em9TabGroup, em9TabPanel } from 'em9webcomponents/dist/react';

const App = () => (
  <em9TabGroup placement="bottom">
    <em9Tab slot="nav" panel="general">
      General
    </em9Tab>
    <em9Tab slot="nav" panel="custom">
      Custom
    </em9Tab>
    <em9Tab slot="nav" panel="advanced">
      Advanced
    </em9Tab>
    <em9Tab slot="nav" panel="disabled" disabled>
      Disabled
    </em9Tab>

    <em9TabPanel name="general">This is the general tab panel.</em9TabPanel>
    <em9TabPanel name="custom">This is the custom tab panel.</em9TabPanel>
    <em9TabPanel name="advanced">This is the advanced tab panel.</em9TabPanel>
    <em9TabPanel name="disabled">This is a disabled tab panel.</em9TabPanel>
  </em9TabGroup>
);
```

### Tabs on Start

Tabs can be shown on the starting side by setting `placement` to `start`.

```html preview
<em9-tab-group placement="start">
  <em9-tab slot="nav" panel="general">General</em9-tab>
  <em9-tab slot="nav" panel="custom">Custom</em9-tab>
  <em9-tab slot="nav" panel="advanced">Advanced</em9-tab>
  <em9-tab slot="nav" panel="disabled" disabled>Disabled</em9-tab>

  <em9-tab-panel name="general">This is the general tab panel.</em9-tab-panel>
  <em9-tab-panel name="custom">This is the custom tab panel.</em9-tab-panel>
  <em9-tab-panel name="advanced">This is the advanced tab panel.</em9-tab-panel>
  <em9-tab-panel name="disabled">This is a disabled tab panel.</em9-tab-panel>
</em9-tab-group>
```

```jsx react
import { em9Tab, em9TabGroup, em9TabPanel } from 'em9webcomponents/dist/react';

const App = () => (
  <em9TabGroup placement="start">
    <em9Tab slot="nav" panel="general">
      General
    </em9Tab>
    <em9Tab slot="nav" panel="custom">
      Custom
    </em9Tab>
    <em9Tab slot="nav" panel="advanced">
      Advanced
    </em9Tab>
    <em9Tab slot="nav" panel="disabled" disabled>
      Disabled
    </em9Tab>

    <em9TabPanel name="general">This is the general tab panel.</em9TabPanel>
    <em9TabPanel name="custom">This is the custom tab panel.</em9TabPanel>
    <em9TabPanel name="advanced">This is the advanced tab panel.</em9TabPanel>
    <em9TabPanel name="disabled">This is a disabled tab panel.</em9TabPanel>
  </em9TabGroup>
);
```

### Tabs on End

Tabs can be shown on the ending side by setting `placement` to `end`.

```html preview
<em9-tab-group placement="end">
  <em9-tab slot="nav" panel="general">General</em9-tab>
  <em9-tab slot="nav" panel="custom">Custom</em9-tab>
  <em9-tab slot="nav" panel="advanced">Advanced</em9-tab>
  <em9-tab slot="nav" panel="disabled" disabled>Disabled</em9-tab>

  <em9-tab-panel name="general">This is the general tab panel.</em9-tab-panel>
  <em9-tab-panel name="custom">This is the custom tab panel.</em9-tab-panel>
  <em9-tab-panel name="advanced">This is the advanced tab panel.</em9-tab-panel>
  <em9-tab-panel name="disabled">This is a disabled tab panel.</em9-tab-panel>
</em9-tab-group>
```

```jsx react
import { em9Tab, em9TabGroup, em9TabPanel } from 'em9webcomponents/dist/react';

const App = () => (
  <em9TabGroup placement="end">
    <em9Tab slot="nav" panel="general">
      General
    </em9Tab>
    <em9Tab slot="nav" panel="custom">
      Custom
    </em9Tab>
    <em9Tab slot="nav" panel="advanced">
      Advanced
    </em9Tab>
    <em9Tab slot="nav" panel="disabled" disabled>
      Disabled
    </em9Tab>

    <em9TabPanel name="general">This is the general tab panel.</em9TabPanel>
    <em9TabPanel name="custom">This is the custom tab panel.</em9TabPanel>
    <em9TabPanel name="advanced">This is the advanced tab panel.</em9TabPanel>
    <em9TabPanel name="disabled">This is a disabled tab panel.</em9TabPanel>
  </em9TabGroup>
);
```

### Closable Tabs

Add the `closable` attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.

```html preview
<em9-tab-group class="tabs-closable">
  <em9-tab slot="nav" panel="general">General</em9-tab>
  <em9-tab slot="nav" panel="closable-1" closable>Closable 1</em9-tab>
  <em9-tab slot="nav" panel="closable-2" closable>Closable 2</em9-tab>
  <em9-tab slot="nav" panel="closable-3" closable>Closable 3</em9-tab>

  <em9-tab-panel name="general">This is the general tab panel.</em9-tab-panel>
  <em9-tab-panel name="closable-1">This is the first closable tab panel.</em9-tab-panel>
  <em9-tab-panel name="closable-2">This is the second closable tab panel.</em9-tab-panel>
  <em9-tab-panel name="closable-3">This is the third closable tab panel.</em9-tab-panel>
</em9-tab-group>

<script>
  const tabGroup = document.querySelector('.tabs-closable');

  tabGroup.addEventListener('em9-close', async event => {
    const tab = event.target;
    const panel = tabGroup.querySelector(`em9-tab-panel[name="${tab.panel}"]`);

    // Show the previous tab if the tab is currently active
    if (tab.active) {
      tabGroup.show(tab.previousElementSibling.panel);
    }

    // Remove the tab + panel
    tab.remove();
    panel.remove();
  });
</script>
```

```jsx react
import { em9Tab, em9TabGroup, em9TabPanel } from 'em9webcomponents/dist/react';

const App = () => {
  function handleClose(event) {
    //
    // This is a crude example that removes the tab and its panel from the DOM.
    // There are better ways to manage tab creation/removal in React, but that
    // would significantly complicate the example.
    //
    const tab = event.target;
    const tabGroup = tab.closest('em9-tab-group');
    const tabPanel = tabGroup.querySelector(`[aria-labelledby="${tab.id}"]`);

    tab.remove();
    tabPanel.remove();
  }

  return (
    <em9TabGroup className="tabs-closable" onSlClose={handleClose}>
      <em9Tab slot="nav" panel="general">
        General
      </em9Tab>
      <em9Tab slot="nav" panel="closable-1" closable onSlClose={handleClose}>
        Closable 1
      </em9Tab>
      <em9Tab slot="nav" panel="closable-2" closable onSlClose={handleClose}>
        Closable 2
      </em9Tab>
      <em9Tab slot="nav" panel="closable-3" closable onSlClose={handleClose}>
        Closable 3
      </em9Tab>

      <em9TabPanel name="general">This is the general tab panel.</em9TabPanel>
      <em9TabPanel name="closable-1">This is the first closable tab panel.</em9TabPanel>
      <em9TabPanel name="closable-2">This is the second closable tab panel.</em9TabPanel>
      <em9TabPanel name="closable-3">This is the third closable tab panel.</em9TabPanel>
    </em9TabGroup>
  );
};
```

### Scrolling Tabs

When there are more tabs than horizontal space allows, the nav will be scrollable.

```html preview
<em9-tab-group>
  <em9-tab slot="nav" panel="tab-1">Tab 1</em9-tab>
  <em9-tab slot="nav" panel="tab-2">Tab 2</em9-tab>
  <em9-tab slot="nav" panel="tab-3">Tab 3</em9-tab>
  <em9-tab slot="nav" panel="tab-4">Tab 4</em9-tab>
  <em9-tab slot="nav" panel="tab-5">Tab 5</em9-tab>
  <em9-tab slot="nav" panel="tab-6">Tab 6</em9-tab>
  <em9-tab slot="nav" panel="tab-7">Tab 7</em9-tab>
  <em9-tab slot="nav" panel="tab-8">Tab 8</em9-tab>
  <em9-tab slot="nav" panel="tab-9">Tab 9</em9-tab>
  <em9-tab slot="nav" panel="tab-10">Tab 10</em9-tab>
  <em9-tab slot="nav" panel="tab-11">Tab 11</em9-tab>
  <em9-tab slot="nav" panel="tab-12">Tab 12</em9-tab>
  <em9-tab slot="nav" panel="tab-13">Tab 13</em9-tab>
  <em9-tab slot="nav" panel="tab-14">Tab 14</em9-tab>
  <em9-tab slot="nav" panel="tab-15">Tab 15</em9-tab>
  <em9-tab slot="nav" panel="tab-16">Tab 16</em9-tab>
  <em9-tab slot="nav" panel="tab-17">Tab 17</em9-tab>
  <em9-tab slot="nav" panel="tab-18">Tab 18</em9-tab>
  <em9-tab slot="nav" panel="tab-19">Tab 19</em9-tab>
  <em9-tab slot="nav" panel="tab-20">Tab 20</em9-tab>

  <em9-tab-panel name="tab-1">Tab panel 1</em9-tab-panel>
  <em9-tab-panel name="tab-2">Tab panel 2</em9-tab-panel>
  <em9-tab-panel name="tab-3">Tab panel 3</em9-tab-panel>
  <em9-tab-panel name="tab-4">Tab panel 4</em9-tab-panel>
  <em9-tab-panel name="tab-5">Tab panel 5</em9-tab-panel>
  <em9-tab-panel name="tab-6">Tab panel 6</em9-tab-panel>
  <em9-tab-panel name="tab-7">Tab panel 7</em9-tab-panel>
  <em9-tab-panel name="tab-8">Tab panel 8</em9-tab-panel>
  <em9-tab-panel name="tab-9">Tab panel 9</em9-tab-panel>
  <em9-tab-panel name="tab-10">Tab panel 10</em9-tab-panel>
  <em9-tab-panel name="tab-11">Tab panel 11</em9-tab-panel>
  <em9-tab-panel name="tab-12">Tab panel 12</em9-tab-panel>
  <em9-tab-panel name="tab-13">Tab panel 13</em9-tab-panel>
  <em9-tab-panel name="tab-14">Tab panel 14</em9-tab-panel>
  <em9-tab-panel name="tab-15">Tab panel 15</em9-tab-panel>
  <em9-tab-panel name="tab-16">Tab panel 16</em9-tab-panel>
  <em9-tab-panel name="tab-17">Tab panel 17</em9-tab-panel>
  <em9-tab-panel name="tab-18">Tab panel 18</em9-tab-panel>
  <em9-tab-panel name="tab-19">Tab panel 19</em9-tab-panel>
  <em9-tab-panel name="tab-20">Tab panel 20</em9-tab-panel>
</em9-tab-group>
```

```jsx react
import { em9Tab, em9TabGroup, em9TabPanel } from 'em9webcomponents/dist/react';

const App = () => (
  <em9TabGroup>
    <em9Tab slot="nav" panel="tab-1">
      Tab 1
    </em9Tab>
    <em9Tab slot="nav" panel="tab-2">
      Tab 2
    </em9Tab>
    <em9Tab slot="nav" panel="tab-3">
      Tab 3
    </em9Tab>
    <em9Tab slot="nav" panel="tab-4">
      Tab 4
    </em9Tab>
    <em9Tab slot="nav" panel="tab-5">
      Tab 5
    </em9Tab>
    <em9Tab slot="nav" panel="tab-6">
      Tab 6
    </em9Tab>
    <em9Tab slot="nav" panel="tab-7">
      Tab 7
    </em9Tab>
    <em9Tab slot="nav" panel="tab-8">
      Tab 8
    </em9Tab>
    <em9Tab slot="nav" panel="tab-9">
      Tab 9
    </em9Tab>
    <em9Tab slot="nav" panel="tab-10">
      Tab 10
    </em9Tab>
    <em9Tab slot="nav" panel="tab-11">
      Tab 11
    </em9Tab>
    <em9Tab slot="nav" panel="tab-12">
      Tab 12
    </em9Tab>
    <em9Tab slot="nav" panel="tab-13">
      Tab 13
    </em9Tab>
    <em9Tab slot="nav" panel="tab-14">
      Tab 14
    </em9Tab>
    <em9Tab slot="nav" panel="tab-15">
      Tab 15
    </em9Tab>
    <em9Tab slot="nav" panel="tab-16">
      Tab 16
    </em9Tab>
    <em9Tab slot="nav" panel="tab-17">
      Tab 17
    </em9Tab>
    <em9Tab slot="nav" panel="tab-18">
      Tab 18
    </em9Tab>
    <em9Tab slot="nav" panel="tab-19">
      Tab 19
    </em9Tab>
    <em9Tab slot="nav" panel="tab-20">
      Tab 20
    </em9Tab>

    <em9TabPanel name="tab-1">Tab panel 1</em9TabPanel>
    <em9TabPanel name="tab-2">Tab panel 2</em9TabPanel>
    <em9TabPanel name="tab-3">Tab panel 3</em9TabPanel>
    <em9TabPanel name="tab-4">Tab panel 4</em9TabPanel>
    <em9TabPanel name="tab-5">Tab panel 5</em9TabPanel>
    <em9TabPanel name="tab-6">Tab panel 6</em9TabPanel>
    <em9TabPanel name="tab-7">Tab panel 7</em9TabPanel>
    <em9TabPanel name="tab-8">Tab panel 8</em9TabPanel>
    <em9TabPanel name="tab-9">Tab panel 9</em9TabPanel>
    <em9TabPanel name="tab-10">Tab panel 10</em9TabPanel>
    <em9TabPanel name="tab-11">Tab panel 11</em9TabPanel>
    <em9TabPanel name="tab-12">Tab panel 12</em9TabPanel>
    <em9TabPanel name="tab-13">Tab panel 13</em9TabPanel>
    <em9TabPanel name="tab-14">Tab panel 14</em9TabPanel>
    <em9TabPanel name="tab-15">Tab panel 15</em9TabPanel>
    <em9TabPanel name="tab-16">Tab panel 16</em9TabPanel>
    <em9TabPanel name="tab-17">Tab panel 17</em9TabPanel>
    <em9TabPanel name="tab-18">Tab panel 18</em9TabPanel>
    <em9TabPanel name="tab-19">Tab panel 19</em9TabPanel>
    <em9TabPanel name="tab-20">Tab panel 20</em9TabPanel>
  </em9TabGroup>
);
```

### Manual Activation

When focused, keyboard users can press <kbd>Left</kbd> or <kbd>Right</kbd> to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting `activation="manual"` which will require the user to press <kbd>Space</kbd> or <kbd>Enter</kbd> before showing the tab panel (manual activation).

```html preview
<em9-tab-group activation="manual">
  <em9-tab slot="nav" panel="general">General</em9-tab>
  <em9-tab slot="nav" panel="custom">Custom</em9-tab>
  <em9-tab slot="nav" panel="advanced">Advanced</em9-tab>
  <em9-tab slot="nav" panel="disabled" disabled>Disabled</em9-tab>

  <em9-tab-panel name="general">This is the general tab panel.</em9-tab-panel>
  <em9-tab-panel name="custom">This is the custom tab panel.</em9-tab-panel>
  <em9-tab-panel name="advanced">This is the advanced tab panel.</em9-tab-panel>
  <em9-tab-panel name="disabled">This is a disabled tab panel.</em9-tab-panel>
</em9-tab-group>
```

```jsx react
import { em9Tab, em9TabGroup, em9TabPanel } from 'em9webcomponents/dist/react';

const App = () => (
  <em9TabGroup activation="manual">
    <em9Tab slot="nav" panel="general">
      General
    </em9Tab>
    <em9Tab slot="nav" panel="custom">
      Custom
    </em9Tab>
    <em9Tab slot="nav" panel="advanced">
      Advanced
    </em9Tab>
    <em9Tab slot="nav" panel="disabled" disabled>
      Disabled
    </em9Tab>

    <em9TabPanel name="general">This is the general tab panel.</em9TabPanel>
    <em9TabPanel name="custom">This is the custom tab panel.</em9TabPanel>
    <em9TabPanel name="advanced">This is the advanced tab panel.</em9TabPanel>
    <em9TabPanel name="disabled">This is a disabled tab panel.</em9TabPanel>
  </em9TabGroup>
);
```

[component-metadata:em9-tab-group]
