# Tab Panel

[component-header:em9-tab-panel]

Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.

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

?> Additional demonstrations can be found in the [tab group examples](/components/tab-group).

[component-metadata:em9-tab-panel]
