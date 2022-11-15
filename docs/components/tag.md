# Tag

[component-header:em9-tag]

Tags are used as labels to organize things or to indicate a selection.

```html preview
<em9-tag>Primary</em9-tag>
```

```jsx react
import { em9Tag } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Tag>Primary</em9Tag>
  </>
);
```

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html preview
<div style="display:flex; gap:20px;flex-wrap: wrap;max-width:320px;align-items:center">
  <em9-tag size="small">Label</em9-tag>
  <em9-tag size="medium">Label</em9-tag>
  <em9-tag size="large">Label</em9-tag>
</div>
```

```jsx react
import { em9Tag } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', maxWidth: '320px', alignItems: 'center' }}>
      <em9Tag size="small">Small</em9Tag>
      <em9Tag size="medium">Medium</em9Tag>
      <em9Tag size="large">Large</em9Tag>
    </div>
  </>
);
```

### tags with badges

Use the `slot="suffix"` with badge.

```html preview
<div style="display:flex; gap:20px;flex-wrap: wrap;max-width:320px;align-items:center">
  <em9-tag size="small">
    Label
    <em9-badge class="badge-tag-small" slot="suffix" variant="light-gray" size="small" style="margin:1px 0 1px 4px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag size="medium">
    Label
    <em9-badge
      slot="suffix"
      variant="light-gray"
      size="small"
      class="badge-tag-medium"
      style="margin-inline-start: 5px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag size="large">
    Label
    <em9-badge slot="suffix" variant="light-gray" class="badge-tag-large" style="margin-inline-start: 6px;"
      >5</em9-badge
    >
  </em9-tag>
</div>
<style>
  .badge-tag-small::part(base) {
    padding: 1px 3px;
    font-weight: 500;
  }
  .badge-tag-medium::part(base) {
    padding: 2px 5px;
    font-weight: 500;
  }
  .badge-tag-large::part(base) {
    padding: 2px 5px;
    font-weight: 300;
  }
</style>
```

```jsx react
import { em9Tag, em9Badge } from 'em9webcomponents/dist/react';
const css = `
  .badge-tag-small::part(base) {
    padding: 1px 3px;
    font-weight: 500;
  }
  .badge-tag-medium::part(base) {
    padding: 2px 5px;
    font-weight: 500;
  }
  .badge-tag-large::part(base) {
    padding: 2px 5px;
    font-weight: 300;
  }
`;
const App = () => (
  <>
    <div style="display:flex; gap:20px;flex-wrap: wrap;max-width:320px;align-items:center">
      <em9Tag size="small">
        Label
        <em9Badge
          slot="suffix"
          variant="light-gray"
          size="small"
          className="badge-tag-small"
          style={{ margin: '1px 0 1px 4px' }}
        >
          5
        </em9Badge>
      </em9Tag>
      <em9Tag size="medium">
        Label
        <em9Badge
          slot="suffix"
          variant="light-gray"
          size="small"
          className="badge-tag-medium"
          style={{ marginInlineStart: '5px' }}
        >
          5
        </em9Badge>
      </em9Tag>
      <em9Tag size="large">
        Label
        <em9Badge slot="suffix" variant="light-gray" className="badge-tag-large" style={{ marginInlineStart: '6px' }}>
          5
        </em9Badge>
      </em9Tag>
      <style>{css}</style>
    </div>
  </>
);
```

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html preview
<div style="display:flex; gap:20px;flex-wrap: wrap;max-width:320px;align-items:center">
  <em9-tag size="small" pill>Small</em9-tag>
  <em9-tag size="medium" pill>Medium</em9-tag>
  <em9-tag size="large" pill>Large</em9-tag>
</div>
```

```jsx react
import { em9Tag } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', maxWidth: '320px', alignItems: 'center' }}>
      <em9Tag size="small" pill>
        Small
      </em9Tag>
      <em9Tag size="medium" pill>
        Medium
      </em9Tag>
      <em9Tag size="large" pill>
        Large
      </em9Tag>
    </div>
  </>
);
```

### Tags with Checkbox

```html preview
<div style="display:flex; gap:20px;flex-wrap: wrap;max-width:320px;align-items:center">
  <em9-tag size="small" class="tag-sm-onlyCheckbox">
    <em9-checkbox slot="prefix" size="xsmall" style="margin:1px 4px 1px 0;"></em9-checkbox>
    Label
  </em9-tag>
  <em9-tag class="tag-md-onlyCheckbox" size="medium">
    <em9-checkbox slot="prefix" size="small" style="margin-inline-end:5px"></em9-checkbox>
    Label
  </em9-tag>
  <em9-tag class="tag-lg-onlyCheckbox checkboxTagLg" size="large">
    <em9-checkbox slot="prefix" size="medium" style="margin-inline-end:6px"></em9-checkbox>
    Label
  </em9-tag>
  <em9-tag size="small" class="tag-sm-onlyCheckbox ">
    <em9-checkbox slot="prefix" size="xsmall" style="margin:2px 4px 2px 0;"></em9-checkbox>
    Label
    <em9-badge
      class="badge-checkboxTag-small"
      slot="suffix"
      variant="light-gray"
      size="small"
      style="margin-inline-start: 4px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag class="tag-md-checkbox checkboxPrefixSuffix" size="medium">
    <em9-checkbox slot="prefix" size="small" style="margin-inline-end:5px"></em9-checkbox>
    Label
    <em9-badge
      slot="suffix"
      variant="light-gray"
      size="small"
      class="badge-checkboxTag-medium"
      style="margin-inline-start: 5px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag class="tag-lg-checkbox" size="large">
    <em9-checkbox slot="prefix" size="medium" style="margin-inline-end:6px"></em9-checkbox>
    Label
    <em9-badge slot="suffix" variant="light-gray" class="badge-checkboxTag-large" style="margin-inline-start: 6px;"
      >5</em9-badge
    >
  </em9-tag>
</div>
<style>
  .tag-lg-onlyCheckbox em9-checkbox::part(checkbox__label),
  .tag-md-onlyCheckbox em9-checkbox::part(checkbox__label),
  .tag-sm-onlyCheckbox em9-checkbox::part(checkbox__label) {
    padding: 0px;
  }
  .checkboxPrefixSuffix::part(base) {
    --em9-tag-padding: 2px 2px 2px 4px;
  }
  .badge-checkboxTag-small::part(base) {
    padding: 1px 3px;
  }
  .badge-checkboxTag-medium::part(base) {
    padding: 2px 5px;
  }
  .badge-checkboxTag-large::part(base) {
    padding: 2px 5px;
  }
</style>
```

```jsx react
import { em9Tag ,em9Checkbox } from 'em9webcomponents/dist/react';
cont css=`
 .tag-lg-onlyCheckbox em9-checkbox::part(checkbox__label),
 .tag-md-onlyCheckbox em9-checkbox::part(checkbox__label),
 .tag-sm-onlyCheckbox em9-checkbox::part(checkbox__label) {
    padding: 0px;
  }
  .checkboxPrefixSuffix::part(base) {
    --em9-tag-padding: 2px 2px 2px 4px;
  }
  .badge-checkboxTag-small::part(base) {
    padding: 1px 3px;
  }
  .badge-checkboxTag-medium::part(base) {
    padding: 2px 5px;
  }
  .badge-checkboxTag-large::part(base) {
    padding: 2px 5px;
  }`;
const App = () => (
  <>
    <div style={{display:'flex', gap:'20px',flexWrap: 'wrap', maxWidth:'320px',alignItems:'center'}}>
      <em9Tag size="small" class="tag-sm-onlyCheckbox">
        <em9Checkbox slot="prefix" size="xsmall" style={{"margin":"1px 4px 1px 0"}}></em9Checkbox>
        Label
      </em9Tag>
      <em9Tag class="tag-md-onlyCheckbox" size="medium">
        <em9Checkbox slot="prefix" size="small" style={{"marginInlineEnd":"5px"}}></em9Checkbox>
        Label
      </em9Tag>
      <em9Tag class="tag-lg-onlyCheckbox checkboxTagLg" size="large">
        <em9Checkbox slot="prefix" size="medium" style={{"marginInlineEnd":"6px"}}></em9Checkbox>
        Label
      </em9Tag>
      <em9Tag size="small" class="tag-sm-onlyCheckbox ">
        <em9Checkbox slot="prefix" size="xsmall" style={{"margin":"1px 0"}}></em9Checkbox>
        Label
        <em9Badge class="badge-checkboxTag-small" slot="suffix" variant="light-gray" size="small" style={{"marginInlineStart":"4px"}}
          >5</em9Badge
        >
      </em9Tag>
      <em9Tag class="tag-md-checkbox checkboxPrefixSuffix" size="medium">
        <em9Checkbox slot="prefix" size="small" style={{"marginInlineEnd":"5px"}}></em9Checkbox>
        Label
        <em9Badge
          slot="suffix"
          variant="light-gray"
          size="small"
          class="badge-checkboxTag-medium"
          style={{"marginInlineStart":"5px"}}
          >5</em9Badge
        >
      </em9Tag>
      <em9Tag class="tag-lg-checkbox" size="large">
        <em9Checkbox slot="prefix" size="medium" style={{"marginInlineEnd":"6px"}}></em9Checkbox>
        Label
        <em9Badge slot="suffix" variant="light-gray" class="badge-checkboxTag-large" style={{"marginInlineStart":"6px"}}
          >5</em9Badge
        >
      </em9Tag>
      <style>{css}</style>
      </div>
  </>
);
```

### Icon

Use the `prefix` slot to add the icons and input fields like checkbox.

```html preview
<div style="display:flex; gap:20px;flex-wrap: wrap;max-width:320px;align-items:center">
  <em9-tag size="small" class="dotTag">
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      class="dot"
      style="margin:5px 5px 5px 1px;font-size:6px;"
    ></em9-icon>
    Label
  </em9-tag>
  <em9-tag size="medium" class="dotTag">
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      class="dot"
      style="margin:5px 6px 5px 2px;font-size:6px;"
    ></em9-icon>
    Label
  </em9-tag>
  <em9-tag size="large" class="dotTag">
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      class="dot"
      style="margin:6px 7px 6px 5px;font-size:6px;"
    ></em9-icon>
    Label
  </em9-tag>

  <em9-tag size="small" class="dotTag">
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      style="margin:5px 5px 5px 1px;font-size:6px;"
      class="dot"
    ></em9-icon>
    Label
    <em9-badge class="badge-dotTag-small" slot="suffix" variant="light-gray" size="small" style="margin:1px 0 1px 4px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag size="medium" class="tag-md-dotCheckbox dotTag">
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      class="dot"
      style="margin:5px 6px 5px 2px;font-size:6px;"
    ></em9-icon>
    Label
    <em9-badge
      class="badge-dotTag-medium"
      slot="suffix"
      variant="light-gray"
      size="small"
      style="margin-inline-start: 5px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag size="large" class="tag-lg-dotCheckbox dotTag">
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      style="margin:6px 7px 6px 5px;font-size:6px;"
      class="dot"
      class="dot"
    ></em9-icon>
    Label
    <em9-badge
      slot="suffix"
      variant="light-gray"
      size="medium"
      class="badge-dotTag-large"
      style="margin-inline-start: 6px;"
      >5</em9-badge
    >
  </em9-tag>

  <em9-tag size="small" class="tag-sm-dotCheckbox dotTag">
    <em9-checkbox slot="prefix" size="xsmall" style="margin:0 5px 0 0;"></em9-checkbox>
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      style="margin:5px 5px 5px 1px;font-size:6px;"
      class="dot"
    ></em9-icon>
    Label
  </em9-tag>
  <em9-tag size="medium" class="tag-md-dotCheckbox dotTag">
    <em9-checkbox slot="prefix" size="small" style="margin-inline-end:6px"></em9-checkbox>
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      style="margin:5px 6px 5px 0px;font-size:6px;"
      class="dot"
    ></em9-icon>
    Label
  </em9-tag>
  <em9-tag size="large" class="tag-lg-dotCheckbox dotTag">
    <em9-checkbox slot="prefix" size="medium" style="margin-inline-end:7px"></em9-checkbox>
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      style="margin:6px 7px 6px 0px;font-size:6px;"
      class="dot"
    ></em9-icon>
    Label
  </em9-tag>
  <em9-tag size="small" class="tag-sm-dotCheckbox dotTag">
    <em9-checkbox slot="prefix" size="xsmall" style="margin:0 5px 0 0;"></em9-checkbox>
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      style="margin:5px 5px 5px 1px;font-size:6px;"
      class="dot"
    ></em9-icon>
    Label
    <em9-badge class="badge-dotTag-small" slot="suffix" variant="light-gray" size="small" style="margin:1px 0 1px 4px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag size="medium" class="tag-md-dotCheckbox dotTag">
    <em9-checkbox slot="prefix" size="small" style="margin-inline-end:6px"></em9-checkbox>
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      style="margin:5px 6px 5px 0px;font-size:6px"
      class="dot"
    ></em9-icon>
    Label
    <em9-badge
      class="badge-dotTag-medium"
      slot="suffix"
      variant="light-gray"
      size="small"
      style="margin-inline-start: 5px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag size="large" class="tag-lg-dotCheckbox dotTag">
    <em9-checkbox slot="prefix" size="medium" style="margin-inline-end:7px"></em9-checkbox>
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      style="margin:6px 7px 6px 0px;font-size:6px;"
      class="dot"
    ></em9-icon>
    Label
    <em9-badge
      slot="suffix"
      variant="light-gray"
      size="medium"
      class="badge-dotTag-large"
      style="margin-inline-start: 6px;"
      >5</em9-badge
    >
  </em9-tag>
  <style>
    .badge-dotTag-small::part(base) {
      padding: 1px 3px;
      font-weight: 500;
    }
    .badge-dotTag-medium::part(base) {
      padding: 2px 5px;
      font-weight: 500;
    }
    .badge-dotTag-large::part(base) {
      padding: 2px 5px;
      font-weight: 300;
    }
    .tag-sm-dotCheckbox em9-checkbox::part(checkbox__label),
    .tag-md-dotCheckbox em9-checkbox::part(checkbox__label),
    .tag-lg-dotCheckbox em9-checkbox::part(checkbox__label) {
      padding: 0;
    }
    .dot {
      color: var(--em9-color-success-500);
    }
    .dotTag:focus-within .dot {
      color: var(--em9-color-success-200);
    }
  </style>
</div>
```

```jsx react
import { em9Tag,em9Icon,em9Badge,em9Checkbox } from 'em9webcomponents/dist/react';
cont css=`
.badge-dotTag-small::part(base) {
  padding: 1px 3px;
}
.badge-dotTag-medium::part(base) {
  padding: 2px 5px;
}
.badge-dotTag-large::part(base) {
  padding: 2px 5px;
}
.tag-sm-dotCheckbox em9-checkbox::part(checkbox__label),
.tag-md-dotCheckbox em9-checkbox::part(checkbox__label),
.tag-lg-dotCheckbox em9-checkbox::part(checkbox__label) {
  padding: 0;
}
.dot {
  color: var(--em9-color-success-500);
}
.dotTag:focus-within .dot {
  color: var(--em9-color-success-200);
}`;
const App = () => (
  <>
    <div style={{display:'flex', gap:'20px',flexWrap: 'wrap', maxWidth:'320px',alignItems:'center'}}>
      <em9Tag size="small" className="dotTag">
        <em9Icon slot="prefix" name="cs-bold-indicator" className="dot" style={{margin:"5px 5px 5px 1px",fontSize:"6px"}}></em9Icon>
        Label
      </em9Tag>
      <em9Tag size="medium" className="dotTag">
        <em9Icon slot="prefix" name="cs-bold-indicator" className="dot" style={{margin:"5px 6px 5px 2px",fontSize:"6px"}}></em9Icon>
        Label
      </em9Tag>
      <em9Tag size="large" className="dotTag">
        <em9Icon slot="prefix" name="cs-bold-indicator" className="dot" style={{margin:"6px 7px 6px 5px",fontSize:"6px"}}></em9Icon>
        Label
      </em9Tag>

      <em9Tag size="small" className="dotTag">
        <em9Icon slot="prefix" name="cs-bold-indicator" style={{margin:"5px 5px 5px 1px",fontSize:"6px"}} className="dot"></em9Icon>
        Label
        <em9Badge className="badge-dotTag-small" slot="suffix" variant="light-gray" size="small" style={{margin:"1px 0 1px 4px"}}>5</em9Badge>
      </em9Tag>
      <em9Tag size="medium" className="dotTag">
        <em9Icon slot="prefix" name="cs-bold-indicator" className="dot" style={{margin:"5px 6px 5px 2px",fontSize:"6px"}}></em9Icon>
        Label
        <em9Badge className="badge-dotTag-medium" slot="suffix" variant="light-gray" size="small" style={{"marginInlineStart":"5px"}}>5</em9Badge>
      </em9Tag>
      <em9Tag size="large" className="dotTag">
        <em9Icon slot="prefix" name="cs-bold-indicator" style={{margin:"6px 7px 6px 5px",fontSize:"6px"}} className="dot"></em9Icon>
        Label
        <em9Badge slot="suffix" variant="light-gray" size="medium" className="badge-dotTag-large" style={{"marginInlineStart":"6px"}}>5</em9Badge>
      </em9Tag>

      <em9Tag size="small" className="tag-sm-dotCheckbox dotTag">
        <em9Checkbox slot="prefix" size="xsmall" style={{margin:"0 5px 0 0"}}></em9Checkbox>
        <em9Icon slot="prefix" name="cs-bold-indicator" style={{margin:"5px 5px 5px 1px",fontSize:"6px"}} className="dot"></em9Icon>
        Label
      </em9Tag>
      <em9Tag size="medium" className="tag-md-dotCheckbox dotTag">
        <em9Checkbox slot="prefix" size="small" style={{"marginInlineEnd":"6px"}}></em9Checkbox>
        <em9Icon slot="prefix" name="cs-bold-indicator" style={{margin:"5px 6px 5px 0px",fontSize:"6px"}} className="dot"></em9Icon>
        Label
      </em9Tag>
      <em9Tag size="large" className="tag-lg-dotCheckbox dotTag">
        <em9Checkbox slot="prefix" size="medium" style={{"marginInlineEnd":"7px"}}></em9Checkbox>
        <em9Icon slot="prefix" name="cs-bold-indicator" style={{margin:"6px 8px 6px 0px",fontSize:"6px"}} className="dot"></em9Icon>
        Label
      </em9Tag>
      <em9Tag size="small" className="tag-sm-dotCheckbox dotTag">
        <em9Checkbox slot="prefix" size="xsmall" style={{margin:"0 5px 0 0"}}></em9Checkbox>
        <em9Icon slot="prefix" name="cs-bold-indicator" style={{margin:"5px 5px 5px 1px",fontSize:"6px"}} className="dot"></em9Icon>
        Label
        <em9Badge className="badge-dotTag-small" slot="suffix" variant="light-gray" size="small" style={{margin:"1px 0 1px 4px"}}>5</em9Badge>
      </em9Tag>
      <em9Tag size="medium" className="tag-md-dotCheckbox dotTag">
        <em9Checkbox slot="prefix" size="small" style={{"marginInlineEnd":"6px"}}></em9Checkbox>
        <em9Icon slot="prefix" name="cs-bold-indicator" style={{margin:"5px 6px 5px 0px",fontSize:"6px"}} className="dot"></em9Icon>
        Label
        <em9Badge className="badge-dotTag-medium"slot="suffix" variant="light-gray"size="small" style={{"marginInlineStart": "5px"}}>5</em9Badge>
      </em9Tag>
      <em9Tag size="large" className="tag-lg-dotCheckbox dotTag">
        <em9Checkbox slot="prefix" size="medium" style={{"marginInlineEnd":"7px"}}></em9Checkbox>
        <em9Icon slot="prefix" name="cs-bold-indicator" style={{margin:"6px 8px 6px 0px",fontSize:"6px"}} className="dot"></em9Icon>
        Label
        <em9Badge slot="suffix" variant="light-gray"size="medium" className="badge-dotTag-large" style={{"marginInlineStart":"6px"}}>5</em9Badge>
      </em9Tag>
      <style>{css}</style>
    </div>
  </>
);
```

Calendar variation

```html preview
<div style="display:flex; gap:20px;flex-wrap: wrap;max-width:320px;align-items:center">
  <em9-tag size="small">
    <em9-icon slot="prefix" name="linear-calendar-add" style="margin-right:4px;font-size:16px;"></em9-icon>
    Label
  </em9-tag>
  <em9-tag size="medium">
    <em9-icon slot="prefix" name="linear-calendar-add" style="margin-right:7px;font-size:16px;"></em9-icon>
    Label
  </em9-tag>
  <em9-tag size="large">
    <em9-icon slot="prefix" name="linear-calendar-add" style="margin:1px 8px 1px 2px;font-size:16px;"></em9-icon>
    Label
  </em9-tag>

  <em9-tag size="small">
    <em9-icon slot="prefix" name="linear-calendar-add" style="margin: 1px 4px 1px 0;font-size:16px;"></em9-icon>
    Label
    <em9-badge
      class="badge-calendarTag-small"
      slot="suffix"
      variant="light-gray"
      size="small"
      style="margin-inline-start: 4px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag size="medium" class="calendarTag">
    <em9-icon slot="prefix" name="linear-calendar-add" style="margin-right:6px;font-size:16px;"></em9-icon>
    Label
    <em9-badge
      slot="suffix"
      variant="light-gray"
      size="small"
      class="badge-calendarTag-medium"
      style="margin-inline-start: 5px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag size="large">
    <em9-icon slot="prefix" name="linear-calendar-add" style="margin:1px 8px 1px 2px;font-size:16px;"></em9-icon>
    Label
    <em9-badge slot="suffix" variant="light-gray" class="badge-calendarTag-large" style="margin-inline-start: 6px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag size="small">
    <em9-checkbox slot="prefix" size="xsmall" style="margin:1px 6px 1px 0;"></em9-checkbox>
    <em9-icon slot="prefix" name="linear-calendar-add" style="margin-right:4px;font-size:16px;"></em9-icon>
    Label
  </em9-tag>
  <em9-tag size="medium" class="tag-md-calendarCheckbox">
    <em9-checkbox
      slot="prefix"
      size="small"
      class="tag-md-calendarCheckbox"
      style="margin-inline-end:6px"
    ></em9-checkbox>
    <em9-icon slot="prefix" name="linear-calendar-add" style="margin-right:5px;font-size:16px;"></em9-icon>
    Label
  </em9-tag>
  <em9-tag class="tag-lg-calendarCheckbox" size="large">
    <em9-checkbox slot="prefix" size="medium" style="margin-inline-end:6px"></em9-checkbox>
    <em9-icon slot="prefix" name="linear-calendar-add" style="margin:1px 4px 1px 2px;font-size:16px;"></em9-icon>
    Label
  </em9-tag>
  <em9-tag size="small" class="calendarTagBadgeCheckboxSm">
    <em9-checkbox slot="prefix" size="xsmall" style="margin:1px 4px 1px 0;"></em9-checkbox>
    <em9-icon slot="prefix" name="linear-calendar-add" style="margin-right:4px;font-size:16px;"></em9-icon>
    Label
    <em9-badge
      class="badge-calendarTag-small"
      slot="suffix"
      variant="light-gray"
      size="small"
      style="margin-inline-start: 4px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag size="medium" class="tag-md-calendarCheckbox calendarTagBadgeCheckboxMd">
    <em9-checkbox slot="prefix" size="small" style="margin-inline-end:5px"></em9-checkbox>
    <em9-icon slot="prefix" name="linear-calendar-add" style="margin-right:5px;font-size:16px;"></em9-icon>
    Label
    <em9-badge
      class="badge-tag-small"
      slot="suffix"
      variant="light-gray"
      size="small"
      class="badge-calendarTag-medium"
      style="margin-inline-start: 5px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag class="tag-lg-calendarCheckbox" size="large">
    <em9-checkbox slot="prefix" size="medium" style="margin-inline-end:5px"></em9-checkbox>
    <em9-icon slot="prefix" name="linear-calendar-add" style="margin:1px 5px 1px 2px;font-size:16px;"></em9-icon>
    Label
    <em9-badge slot="suffix" variant="light-gray" class="badge-calendarTag-large" style="margin-inline-start: 6px;"
      >5</em9-badge
    >
  </em9-tag>
</div>
<style>
  .badge-calendarTag-small::part(base) {
    padding: 1px 3px;
    font-weight: 500;
  }
  .badge-calendarTag-medium::part(base) {
    padding: 2px 5px;
    font-weight: 500;
  }
  .badge-calendarTag-large::part(base) {
    padding: 2px 5px;
    font-weight: 300;
  }
  .calendarTag::part(base) {
    --em9-tag-padding: 2px 2px 2px 4px;
  }
  .calendarTagBadgeCheckboxSm::part(base) {
    --em9-tag-padding: 3px 4px;
  }
  .calendarTagBadgeCheckboxMd::part(base) {
    --em9-tag-padding: 3px 4px;
  }
</style>
```

```jsx react
import {em9Tag,em9Icon,em9Badge,em9Checkbox} from 'em9webcomponents/dist/react';
 const css=`
 .badge-calendarTag-small::part(base) {
  padding: 1px 3px;
  font-weight:500;
}
.badge-calendarTag-medium::part(base) {
  padding: 2px 5px;
  font-weight:500;
}
.badge-calendarTag-large::part(base) {
  padding: 2px 5px;
  font-weight:300;
}
.calendarTag::part(base) {
  --em9-tag-padding: 2px 2px 2px 4px;
}
.calendarTagBadgeCheckboxSm::part(base) {
  --em9-tag-padding: 3px 4px;
}

.tag-md-calendarCheckbox em9-checkbox::part(checkbox__label) {
  padding: 2px;
}
.tag-lg-calendarCheckbox em9-checkbox::part(checkbox__label) {
  padding: 3px;
}`;
const App = () => (
  <>
    <div style={{display:'flex', gap:'20px',flexWrap: 'wrap', maxWidth:'320px',alignItems:'center'}}>
      <em9Tag size="small">
        <em9Icon slot="prefix" name="linear-calendar-add" style={{"marginRight":"4px","fontSize":"16px"}}></em9Icon>
        Label
      </em9Tag>
      <em9Tag size="medium">
        <em9Icon slot="prefix" name="linear-calendar-add" style={{"marginRight":"7px","fontSize":"16px"}}></em9Icon>
        Label
      </em9Tag>
      <em9Tag size="large">
        <em9Icon slot="prefix" name="linear-calendar-add" style={{"margin":"1px 8px 1px 2px","fontSize":"16px"}}></em9Icon>
        Label
      </em9Tag>

      <em9Tag size="small">
        <em9Icon slot="prefix" name="linear-calendar-add" style={{"margin":"1px 4px 1px 0","fontSize":"16px"}}></em9Icon>
        Label
        <em9Badge
          class="badge-calendarTag-small"
          slot="suffix"
          variant="light-gray"
          size="small"
          style={{"marginInlineStart":"4px"}}
          >5</em9Badge
        >
      </em9Tag>
      <em9Tag size="medium" class="calendarTag">
        <em9Icon slot="prefix" name="linear-calendar-add" style={{"marginRight":"6px","fontSize":"16px"}}></em9Icon>
        Label
        <em9Badge
          slot="suffix"
          variant="light-gray"
          size="small"
          class="badge-calendarTag-medium"
          style={{"marginInlineStart":"5px"}}
          >5</em9Badge
        >
      </em9Tag>
      <em9Tag size="large">
        <em9Icon slot="prefix" name="linear-calendar-add" style={{"margin":"1px 8px 1px 2px","fontSize":"16px"}}></em9Icon>
        Label
        <em9Badge slot="suffix" variant="light-gray" class="badge-calendarTag-large" style={{"marginInlineStart":"6px"}}
          >5</em9Badge
        >
      </em9Tag>
      <em9Tag size="small">
        <em9Checkbox slot="prefix" size="xsmall" style={{"margin":"1px 6px 1px 0"}}></em9Checkbox>
        <em9Icon slot="prefix" name="linear-calendar-add" style={{"marginRight":"4px","fontSize":"16px"}}></em9Icon>
        Label
      </em9Tag>
      <em9Tag size="medium" class="tag-md-calendarCheckbox">
        <em9Checkbox
          slot="prefix"
          size="small"
          class="tag-md-calendarCheckbox"
          style={{"marginInlineEnd":"6px"}}
        ></em9Checkbox>
        <em9Icon slot="prefix" name="linear-calendar-add" style={{"marginRight":"5px","fontSize":"16px"}}></em9Icon>
        Label
      </em9Tag>
      <em9Tag class="tag-lg-calendarCheckbox" size="large">
        <em9Checkbox slot="prefix" size="medium" style={{"marginInlineEnd":"6px"}}></em9Checkbox>
        <em9Icon slot="prefix" name="linear-calendar-add" style={{"margin":"1px 4px 1px 2px","fontSize":"16px"}}></em9Icon>
        Label
      </em9Tag>
      <em9Tag size="small" class="calendarTagBadgeCheckboxSm">
        <em9Checkbox slot="prefix" size="xsmall" style={{"margin":"1px 4px 1px 0"}}></em9Checkbox>
        <em9Icon slot="prefix" name="linear-calendar-add" style={{"marginRight":"4px","fontSize":"16px"}}></em9Icon>
        Label
        <em9Badge
          class="badge-calendarTag-small"
          slot="suffix"
          variant="light-gray"
          size="small"
          style={{"marginInlineStart":"4px"}}
          >5</em9Badge
        >
      </em9Tag>
      <em9Tag size="medium" class="tag-md-calendarCheckbox calendarTagBadgeCheckboxMd">
        <em9Checkbox slot="prefix" size="small" style={{"marginInlineEnd":"5px"}}></em9Checkbox>
        <em9Icon slot="prefix" name="linear-calendar-add" style={{"marginRight":"5px","fontSize":"16px"}}></em9Icon>
        Label
        <em9Badge
          class="badge-tag-small"
          slot="suffix"
          variant="light-gray"
          size="small"
          class="badge-calendarTag-medium"
          style={{"marginInlineStart":"5px"}}
          >5</em9Badge
        >
      </em9Tag>
      <em9Tag class="tag-lg-calendarCheckbox" size="large">
        <em9Checkbox slot="prefix" size="medium" style={{"marginInlineEnd":"5px"}}></em9Checkbox>
        <em9Icon slot="prefix" name="linear-calendar-add" style={{"margin":"1px 5px 1px 2px","fontSize":"16px"}}></em9Icon>
        Label
        <em9Badge slot="suffix" variant="light-gray" class="badge-calendarTag-large" style={{"marginInlineStart":"6px"}}
          >5</em9Badge
        >
      </em9Tag>
      <style>{css}</style>
    </div>
  </>
```

### Tags with images

Use the `prefix` slot to add images in the Tag.

```html preview
<div style="display:flex; gap:20px;flex-wrap: wrap;max-width:320px;align-items:center">
  <em9-tag size="small">
    <em9-avatar slot="prefix" label="User avatar" style="--size: 16px;margin-right:4px"></em9-avatar>
    Label
  </em9-tag>
  <em9-tag size="medium">
    <em9-avatar slot="prefix" label="User avatar" style="--size: 16px;margin-right:6px"></em9-avatar>
    Label
  </em9-tag>
  <em9-tag size="large" class="custom-large">
    <em9-avatar label="User avatar" slot="prefix" style="--size: 16px;margin-right:6px"></em9-avatar>
    Label
  </em9-tag>

  <em9-tag size="small" class="avatarBadgeTagSm">
    <em9-avatar slot="prefix" label="User avatar" style="--size: 16px;margin-right:4px"></em9-avatar>
    Label
    <em9-badge
      class="badge-avatarTag-small"
      slot="suffix"
      variant="light-gray"
      size="small"
      style="margin-inline-start: 4px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag size="medium" class="avatarBadgeTagMd">
    <em9-avatar slot="prefix" label="User avatar" style="--size: 16px;margin-right:5px"></em9-avatar>
    Label
    <em9-badge
      slot="suffix"
      variant="light-gray"
      size="small"
      class="badge-avatarTag-medium"
      style="margin-inline-start: 5px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag size="large" class="avatarBadgeTagLg">
    <em9-avatar label="User avatar" slot="prefix" style="--size: 16px;margin-right:6px"></em9-avatar>
    Label
    <em9-badge slot="suffix" variant="light-gray" class="badge-avatarTag-large" style="margin-inline-start: 6px;"
      >5</em9-badge
    >
  </em9-tag>

  <em9-tag size="small">
    <em9-checkbox slot="prefix" size="xsmall" style="margin:1px 4px 1px 0;"></em9-checkbox>
    <em9-avatar slot="prefix" label="User avatar" style="--size: 16px;margin-right:4px"></em9-avatar>
    Label
  </em9-tag>
  <em9-tag size="medium" class="tag-md-avatarCheckbox">
    <em9-checkbox slot="prefix" size="small" style="margin-inline-end:5px"></em9-checkbox>
    <em9-avatar slot="prefix" label="User avatar" style="--size: 16px;margin-right:5px"></em9-avatar>
    Label
  </em9-tag>
  <em9-tag size="large" class="tag-lg-avatarCheckbox tagAvatarCheckboxLg">
    <em9-checkbox slot="prefix" size="medium" style="margin-inline-end:6px"></em9-checkbox>
    <em9-avatar label="User avatar" slot="prefix" style="--size: 16px;margin-right:6px"></em9-avatar>
    Label
  </em9-tag>

  <em9-tag size="small" class="avatarBadgeCheckboxTagSm">
    <em9-checkbox slot="prefix" size="xsmall" style="margin:1px 4px 1px 0;"></em9-checkbox>
    <em9-avatar slot="prefix" label="User avatar" style="--size: 16px;margin-right:4px"></em9-avatar>
    Label
    <em9-badge
      class="badge-avatarTag-small"
      slot="suffix"
      variant="light-gray"
      size="small"
      style="margin-inline-start: 4px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag size="medium" class="tag-md-avatarCheckbox avatarBadgeCheckboxTagMd">
    <em9-checkbox slot="prefix" size="small" style="margin-inline-end:5px"></em9-checkbox>
    <em9-avatar slot="prefix" label="User avatar" style="--size: 16px;margin-right:5px"></em9-avatar>
    Label
    <em9-badge
      slot="suffix"
      variant="light-gray"
      size="small"
      class="badge-avatarTag-medium"
      style="margin-inline-start: 5px;"
      >5</em9-badge
    >
  </em9-tag>
  <em9-tag size="large" class="tag-lg-avatarCheckbox">
    <em9-checkbox slot="prefix" size="medium" style="margin-inline-end:6px"></em9-checkbox>
    <em9-avatar label="User avatar" slot="prefix" style="--size: 16px;margin-right:6px"></em9-avatar>
    Label
    <em9-badge slot="suffix" variant="light-gray" class="badge-avatarTag-large" style="margin-inline-start: 6px;"
      >5</em9-badge
    >
  </em9-tag>
</div>
<style>
  .tagAvatarCheckboxLg::part(base) {
    --em9-tag-padding: 4px 9px 4px 4px;
  }
  .avatarBadgeTagSm::part(base) {
    --em9-tag-padding: 3px 4px;
  }
  .avatarBadgeTagMd::part(base) {
    --em9-tag-padding: 2px 2px 2px 4px;
  }
  .avatarBadgeTagLg::part(base) {
    --em9-tag-padding: 3px 4px 3px 6px;
  }
  .avatarBadgeCheckboxTagSm::part(base) {
    --em9-tag-padding: 3px 4px;
  }
  .avatarBadgeCheckboxTagMd::part(base) {
    --em9-tag-padding: 2px 2px 2px 3px;
  }
  .badge-avatarTag-small::part(base) {
    padding: 1px 3px;
    font-weight: 500;
  }
  .badge-avatarTag-medium::part(base) {
    padding: 2px 5px;
    font-weight: 500;
  }
  .badge-avatarTag-large::part(base) {
    padding: 2px 5px;
    font-weight: 300;
  }
  .tag-md-avatarCheckbox em9-checkbox::part(checkbox__label) {
    padding: 2px;
  }
  .tag-lg-avatarCheckbox em9-checkbox::part(checkbox__label) {
    padding: 3px;
  }
  .custom-large::part(base) {
    --em9-tag-padding: 5px 10px 5px 7px;
  }
</style>
```

```jsx react
import { em9Tag,em9Icon,em9Badge,em9Checkbox ,em9Avatar } from 'em9webcomponents/dist/react';
 const css=`
.tagAvatarCheckboxLg::part(base) {
    --em9-tag-padding: 4px 9px 4px 4px;
  }
  .avatarBadgeTagSm::part(base) {
    --em9-tag-padding: 3px 4px;
  }
  .avatarBadgeTagMd::part(base) {
    --em9-tag-padding: 2px 2px 2px 4px;
  }
  .avatarBadgeTagLg::part(base) {
    --em9-tag-padding: 3px 4px 3px 6px;
  }
  .avatarBadgeCheckboxTagSm::part(base) {
    --em9-tag-padding: 3px 4px;
  }
  .avatarBadgeCheckboxTagMd::part(base) {
    --em9-tag-padding: 2px 2px 2px 3px;
  }
  .badge-avatarTag-small::part(base) {
    padding: 1px 3px;
    font-weight: 500;
  }
  .badge-avatarTag-medium::part(base) {
    padding: 2px 5px;
    font-weight: 500;
  }
  .badge-avatarTag-large::part(base) {
    padding: 2px 5px;
    font-weight: 300;
  }
  .tag-md-avatarCheckbox em9-checkbox::part(checkbox__label) {
    padding: 2px;
  }
  .tag-lg-avatarCheckbox em9-checkbox::part(checkbox__label) {
    padding: 3px;
  }
  .custom-large::part(base) {
    --em9-tag-padding: 5px 10px 5px 7px;
  }`

const App = () => (
  <>
    <div style={{display:'flex', gap:'20px',flexWrap: 'wrap', maxWidth:'320px',alignItems:'center'}}>
      <em9Tag size="small">
    <em9Avatar slot="prefix" label="User avatar" style={{"--size":"16px","marginRight":"4px"}}></em9Avatar>
    Label
  </em9Tag>
  <em9Tag size="medium">
    <em9Avatar slot="prefix" label="User avatar" style={{"--size":"16px","marginRight":"6px"}}></em9Avatar>
    Label
  </em9Tag>
  <em9Tag size="large" class="custom-large">
    <em9Avatar label="User avatar" slot="prefix" style={{"--size":"16px","marginRight":"6px"}}></em9Avatar>
    Label
  </em9Tag>

  <em9Tag size="small" class="avatarBadgeTagSm">
    <em9Avatar slot="prefix" label="User avatar" style={{"--size":"16px","marginRight":"4px"}}></em9Avatar>
    Label
    <em9Badge
      class="badge-avatarTag-small"
      slot="suffix"
      variant="light-gray"
      size="small"
      style={{"marginInlineStart":"4px"}}
      >5</em9Badge
    >
  </em9Tag>
  <em9Tag size="medium" class="avatarBadgeTagMd">
    <em9Avatar slot="prefix" label="User avatar" style={{"--size":"16px","marginRight":"5px"}}></em9Avatar>
    Label
    <em9Badge
      slot="suffix"
      variant="light-gray"
      size="small"
      class="badge-avatarTag-medium"
      style={{"marginInlineStart":"5px"}}
      >5</em9Badge
    >
  </em9Tag>
  <em9Tag size="large" class="avatarBadgeTagLg">
    <em9Avatar label="User avatar" slot="prefix" style={{"--size":"16px","marginRight":"6px"}}></em9Avatar>
    Label
    <em9Badge slot="suffix" variant="light-gray" class="badge-avatarTag-large" style={{"marginInlineStart":"6px"}}
      >5</em9Badge
    >
  </em9Tag>

  <em9Tag size="small">
    <em9Checkbox slot="prefix" size="xsmall" style={{"margin":"1px 4px 1px 0"}}></em9Checkbox>
    <em9Avatar slot="prefix" label="User avatar" style={{"--size":"16px","marginRight":"4px"}}></em9Avatar>
    Label
  </em9Tag>
  <em9Tag size="medium" class="tag-md-avatarCheckbox">
    <em9Checkbox slot="prefix" size="small" style={{"marginInlineEnd":"5px"}}></em9Checkbox>
    <em9Avatar slot="prefix" label="User avatar" style={{"--size":"16px","marginRight":"5px"}}></em9Avatar>
    Label
  </em9Tag>
  <em9Tag size="large" class="tag-lg-avatarCheckbox tagAvatarCheckboxLg">
    <em9Checkbox slot="prefix" size="medium" style={{"marginInlineEnd":"6px"}}></em9Checkbox>
    <em9Avatar label="User avatar" slot="prefix" style={{"--size":"16px","marginRight":"6px"}}></em9Avatar>
    Label
  </em9Tag>

  <em9Tag size="small" class="avatarBadgeCheckboxTagSm">
    <em9Checkbox slot="prefix" size="xsmall" style={{"margin":"1px 4px 1px 0"}}></em9Checkbox>
    <em9Avatar slot="prefix" label="User avatar" style={{"--size":"16px","marginRight":"4px"}}></em9Avatar>
    Label
    <em9Badge
      class="badge-avatarTag-small"
      slot="suffix"
      variant="light-gray"
      size="small"
      style={{"marginInlineStart":"4px"}}
      >5</em9Badge
    >
  </em9Tag>
  <em9Tag size="medium" class="tag-md-avatarCheckbox avatarBadgeCheckboxTagMd">
    <em9Checkbox slot="prefix" size="small" style={{"marginInlineEnd":"5px"}}></em9Checkbox>
    <em9Avatar slot="prefix" label="User avatar" style={{"--size":"16px","marginRight":"5px"}}></em9Avatar>
    Label
    <em9Badge
      slot="suffix"
      variant="light-gray"
      size="small"
      class="badge-avatarTag-medium"
      style={{"marginInlineStart":"5px"}}
      >5</em9Badge
    >
  </em9Tag>
  <em9Tag size="large" class="tag-lg-avatarCheckbox">
    <em9Checkbox slot="prefix" size="medium" style={{"marginInlineEnd":"6px"}}></em9Checkbox>
    <em9Avatar label="User avatar" slot="prefix" style={{"--size":"16px","marginRight":"6px"}}></em9Avatar>
    Label
    <em9Badge slot="suffix" variant="light-gray" class="badge-avatarTag-large" style={{"marginInlineStart":"6px"}}
      >5</em9Badge
    >
  </em9Tag>
    <style>{css}</style>
    </div>
);
```

### Removable

Use the `removable` attribute to add a remove button to the tag.

```html preview
<div class="tags-removable">
  <div style="display:flex; gap:20px;flex-wrap: wrap;max-width:320px;align-items:center">
    <em9-tag size="small" removable>Label</em9-tag>
    <em9-tag size="medium" removable>Label</em9-tag>
    <em9-tag size="large" removable>Label</em9-tag>
    <em9-tag size="small" class="tag-sm-onlyCheckbox" removable>
      <em9-checkbox slot="prefix" size="xsmall" style="margin:2px 4px 2px 0;"></em9-checkbox>
      Label
    </em9-tag>
    <em9-tag class="tag-md-onlyCheckbox" size="medium" removable>
      <em9-checkbox slot="prefix" size="small" style="margin-inline-end:5px"></em9-checkbox>
      Label
    </em9-tag>
    <em9-tag class="tag-lg-onlyCheckbox checkboxTagLg" size="large" removable>
      <em9-checkbox slot="prefix" size="medium" style="margin-inline-end:6px"></em9-checkbox>
      Label
    </em9-tag>
    <em9-tag size="small" class="dotTag" removable>
      <em9-icon
        slot="prefix"
        name="cs-bold-indicator"
        class="dot"
        style="margin:5px 5px 5px 1px;font-size:6px;"
      ></em9-icon>
      Label
    </em9-tag>
    <em9-tag size="medium" class="dotTag" removable>
      <em9-icon
        slot="prefix"
        name="cs-bold-indicator"
        class="dot"
        style="margin:5px 6px 5px 2px;font-size:6px;"
      ></em9-icon>
      Label
    </em9-tag>
    <em9-tag size="large" class="dotTag" removable>
      <em9-icon
        slot="prefix"
        name="cs-bold-indicator"
        class="dot"
        style="margin:6px 7px 6px 5px;font-size:6px;"
      ></em9-icon>
      Label
    </em9-tag>
    <em9-tag size="small" class="tag-sm-dotCheckbox dotTag" removable>
      <em9-checkbox slot="prefix" size="xsmall" style="margin:0 5px 0 0;"></em9-checkbox>
      <em9-icon
        slot="prefix"
        name="cs-bold-indicator"
        style="margin:5px 5px 5px 1px;font-size:6px;"
        class="dot"
      ></em9-icon>
      Label
    </em9-tag>
    <em9-tag size="medium" class="tag-md-dotCheckbox dotTag" removable>
      <em9-checkbox slot="prefix" size="small" style="margin-inline-end:6px"></em9-checkbox>
      <em9-icon
        slot="prefix"
        name="cs-bold-indicator"
        style="margin:5px 6px 5px 0px;font-size:6px;"
        class="dot"
      ></em9-icon>
      Label
    </em9-tag>
    <em9-tag size="large" class="tag-lg-dotCheckbox dotTag" removable>
      <em9-checkbox slot="prefix" size="medium" style="margin-inline-end:7px"></em9-checkbox>
      <em9-icon
        slot="prefix"
        name="cs-bold-indicator"
        style="margin:6px 7px 6px 0px;font-size:6px;"
        class="dot"
      ></em9-icon>
      Label
    </em9-tag>
    <em9-tag size="small" removable>
      <em9-icon slot="prefix" name="linear-calendar-add" style="margin-right:4px;font-size:16px;"></em9-icon>
      Label
    </em9-tag>
    <em9-tag size="medium" removable>
      <em9-icon slot="prefix" name="linear-calendar-add" style="margin-right:7px;font-size:16px;"></em9-icon>
      Label
    </em9-tag>
    <em9-tag size="large" removable>
      <em9-icon slot="prefix" name="linear-calendar-add" style="margin:1px 8px 1px 2px;font-size:16px;"></em9-icon>
      Label
    </em9-tag>
    <em9-tag size="small" removable>
      <em9-checkbox slot="prefix" size="xsmall" style="margin:1px 6px 1px 0;"></em9-checkbox>
      <em9-icon slot="prefix" name="linear-calendar-add" style="margin-right:4px;font-size:16px;"></em9-icon>
      Label
    </em9-tag>
    <em9-tag size="medium" class="tag-md-calendarCheckbox" removable>
      <em9-checkbox
        slot="prefix"
        size="small"
        class="tag-md-calendarCheckbox"
        style="margin-inline-end:6px"
      ></em9-checkbox>
      <em9-icon slot="prefix" name="linear-calendar-add" style="margin-right:5px;font-size:16px;"></em9-icon>
      Label
    </em9-tag>
    <em9-tag class="tag-lg-calendarCheckbox" size="large" removable>
      <em9-checkbox slot="prefix" size="medium" style="margin-inline-end:6px"></em9-checkbox>
      <em9-icon slot="prefix" name="linear-calendar-add" style="margin:1px 4px 1px 2px;font-size:16px;"></em9-icon>
      Label
    </em9-tag>
    <em9-tag size="small" removable>
      <em9-avatar slot="prefix" label="User avatar" style="--size: 16px;margin-right:4px"></em9-avatar>
      Label
    </em9-tag>
    <em9-tag size="medium" removable>
      <em9-avatar slot="prefix" label="User avatar" style="--size: 16px;margin-right:6px"></em9-avatar>
      Label
    </em9-tag>
    <em9-tag size="large" class="custom-large" removable>
      <em9-avatar label="User avatar" slot="prefix" style="--size: 16px;margin-right:6px"></em9-avatar>
      Label
    </em9-tag>
    <em9-tag size="small" removable>
      <em9-checkbox slot="prefix" size="xsmall" style="margin:1px 4px 1px 0;"></em9-checkbox>
      <em9-avatar slot="prefix" label="User avatar" style="--size: 16px;margin-right:4px"></em9-avatar>
      Label
    </em9-tag>
    <em9-tag size="medium" class="tag-md-avatarCheckbox" removable>
      <em9-checkbox slot="prefix" size="small" style="margin-inline-end:5px"></em9-checkbox>
      <em9-avatar slot="prefix" label="User avatar" style="--size: 16px;margin-right:5px"></em9-avatar>
      Label
    </em9-tag>
    <em9-tag size="large" class="tag-lg-avatarCheckbox tagAvatarCheckboxLg" removable>
      <em9-checkbox slot="prefix" size="medium" style="margin-inline-end:6px"></em9-checkbox>
      <em9-avatar label="User avatar" slot="prefix" style="--size: 16px;margin-right:6px"></em9-avatar>
      Label
    </em9-tag>
  </div>
</div>
<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('em9-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable em9-tag {
    transition: var(--em9-transition-medium) opacity;
  }
  .tagRemovable-lg-onlyCheckbox em9-checkbox::part(checkbox__label) {
    padding: 3.5px;
  }
  .tagRemovable-md-onlyCheckbox em9-checkbox::part(checkbox__label) {
    padding: 2.5px;
  }
  .tagRemovable-sm-onlyCheckbox em9-checkbox::part(checkbox__label) {
    padding: 2px;
  }
  .tag-lg-onlyCheckbox em9-checkbox::part(checkbox__label),
  .tag-md-onlyCheckbox em9-checkbox::part(checkbox__label),
  .tag-sm-onlyCheckbox em9-checkbox::part(checkbox__label) {
    padding: 0px;
  }
  .tag-sm-dotCheckbox em9-checkbox::part(checkbox__label),
  .tag-md-dotCheckbox em9-checkbox::part(checkbox__label),
  .tag-lg-dotCheckbox em9-checkbox::part(checkbox__label) {
    padding: 0;
  }
  .dot {
    color: var(--em9-color-success-500);
  }
  .dotTag:focus .dot {
    color: var(--em9-color-success-200);
  }
  .calendarTag::part(base) {
    --em9-tag-padding: 2px 2px 2px 4px;
  }
  .custom-large::part(base) {
    --em9-tag-padding: 5px 10px 5px 7px;
  }
  .tagAvatarCheckboxLg::part(base) {
    --em9-tag-padding: 4px 9px 4px 4px;
  }
</style>
```

```jsx react
import { em9Tag } from 'em9webcomponents/dist/react';

const css = `
 .tags-removable em9-tag {
    transition: var(--em9-transition-medium) opacity;
  }
  .tagRemovable-lg-onlyCheckbox em9-checkbox::part(checkbox__label) {
    padding: 3.5px;
  }
  .tagRemovable-md-onlyCheckbox em9-checkbox::part(checkbox__label) {
    padding: 2.5px;
  }
  .tagRemovable-sm-onlyCheckbox em9-checkbox::part(checkbox__label) {
    padding: 2px;
  }
  .tag-lg-onlyCheckbox em9-checkbox::part(checkbox__label),
  .tag-md-onlyCheckbox em9-checkbox::part(checkbox__label),
  .tag-sm-onlyCheckbox em9-checkbox::part(checkbox__label) {
    padding: 0px;
  }
  .tag-sm-dotCheckbox em9-checkbox::part(checkbox__label),
  .tag-md-dotCheckbox em9-checkbox::part(checkbox__label),
  .tag-lg-dotCheckbox em9-checkbox::part(checkbox__label) {
    padding: 0;
  }
  .dot {
    color: var(--em9-color-success-500);
  }
  .dotTag:focus .dot {
    color: var(--em9-color-success-200);
  }
  .calendarTag::part(base) {
    --em9-tag-padding: 2px 2px 2px 4px;
  }
  .custom-large::part(base) {
    --em9-tag-padding: 5px 10px 5px 7px;
  }
  .tagAvatarCheckboxLg::part(base) {
    --em9-tag-padding: 4px 9px 4px 4px;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  }

  return (
    <>
      <div className="tags-removable">
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', maxWidth: '320px', alignItems: 'center' }}>
          <em9Tag size="small" removable onem9Remove={handleRemove}>
            Small
          </em9Tag>
          <em9Tag size="medium" removable onem9Remove={handleRemove}>
            Medium
          </em9Tag>
          <em9Tag size="large" removable onem9Remove={handleRemove}>
            Large
          </em9Tag>
          <em9Tag size="small" class="tag-sm-onlyCheckbox" removable onem9Remove={handleRemove}>
            <em9Checkbox slot="prefix" size="xsmall" style={{ margin: '1px 4px 1px 0' }}></em9Checkbox>
            Label
          </em9Tag>
          <em9Tag class="tag-md-onlyCheckbox" size="medium" removable onem9Remove={handleRemove}>
            <em9Checkbox slot="prefix" size="small" style={{ marginInlineEnd: '5px' }}></em9Checkbox>
            Label
          </em9Tag>
          <em9Tag class="tag-lg-onlyCheckbox checkboxTagLg" size="large" removable onem9Remove={handleRemove}>
            <em9Checkbox slot="prefix" size="medium" style={{ marginInlineEnd: '6px' }}></em9Checkbox>
            Label
          </em9Tag>
          <em9Tag size="small" className="dotTag" removable onem9Remove={handleRemove}>
            <em9Icon
              slot="prefix"
              name="cs-bold-indicator"
              className="dot"
              style={{ margin: '5px 5px 5px 1px', fontSize: '6px' }}
            ></em9Icon>
            Label
          </em9Tag>
          <em9Tag size="medium" className="dotTag" removable onem9Remove={handleRemove}>
            <em9Icon
              slot="prefix"
              name="cs-bold-indicator"
              className="dot"
              style={{ margin: '5px 6px 5px 2px', fontSize: '6px' }}
            ></em9Icon>
            Label
          </em9Tag>
          <em9Tag size="large" className="dotTag" removable onem9Remove={handleRemove}>
            <em9Icon
              slot="prefix"
              name="cs-bold-indicator"
              className="dot"
              style={{ margin: '6px 7px 6px 5px', fontSize: '6px' }}
            ></em9Icon>
            Label
          </em9Tag>
          <em9Tag size="small" className="tag-sm-dotCheckbox dotTag" removable onem9Remove={handleRemove}>
            <em9Checkbox slot="prefix" size="xsmall" style={{ margin: '0 5px 0 0' }}></em9Checkbox>
            <em9Icon
              slot="prefix"
              name="cs-bold-indicator"
              style={{ margin: '5px 5px 5px 1px', fontSize: '6px' }}
              className="dot"
            ></em9Icon>
            Label
          </em9Tag>
          <em9Tag size="medium" className="tag-md-dotCheckbox dotTag" removable onem9Remove={handleRemove}>
            <em9Checkbox slot="prefix" size="small" style={{ marginInlineEnd: '6px' }}></em9Checkbox>
            <em9Icon
              slot="prefix"
              name="cs-bold-indicator"
              style={{ margin: '5px 6px 5px 0px', fontSize: '6px' }}
              className="dot"
            ></em9Icon>
            Label
          </em9Tag>
          <em9Tag size="large" className="tag-lg-dotCheckbox dotTag" removable onem9Remove={handleRemove}>
            <em9Checkbox slot="prefix" size="medium" style={{ marginInlineEnd: '7px' }}></em9Checkbox>
            <em9Icon
              slot="prefix"
              name="cs-bold-indicator"
              style={{ margin: '6px 8px 6px 0px', fontSize: '6px' }}
              className="dot"
            ></em9Icon>
            Label
          </em9Tag>
          <em9Tag size="small" removable onem9Remove={handleRemove}>
            <em9Icon slot="prefix" name="linear-calendar-add" style={{ marginRight: '4px', fontSize: '16px' }}></em9Icon>
            Label
          </em9Tag>
          <em9Tag size="medium" removable onem9Remove={handleRemove}>
            <em9Icon slot="prefix" name="linear-calendar-add" style={{ marginRight: '7px', fontSize: '16px' }}></em9Icon>
            Label
          </em9Tag>
          <em9Tag size="large" removable onem9Remove={handleRemove}>
            <em9Icon slot="prefix" name="linear-calendar-add" style={{ margin: '1px 8px 1px 2px', fontSize: '16px' }}></em9Icon>
            Label
          </em9Tag>
          <em9Tag size="small" removable onem9Remove={handleRemove}>
            <em9Checkbox slot="prefix" size="xsmall" style={{ margin: '1px 6px 1px 0' }}></em9Checkbox>
            <em9Icon
              slot="prefix"
              name="linear-calendar-add"
              style={{ marginRight: '4px', fontSize: '16px' }}
            ></em9Icon>
            Label
          </em9Tag>
          <em9Tag size="medium" class="tag-md-calendarCheckbox" removable onem9Remove={handleRemove}>
            <em9Checkbox slot="prefix" size="small" class="tag-md-calendarCheckbox" style={{ marginInlineEnd: '6px' }}></em9Checkbox>
            <em9Icon slot="prefix" name="linear-calendar-add" style={{ marginRight: '5px', fontSize: '16px' }}></em9Icon>
            Label
          </em9Tag>
          <em9Tag class="tag-lg-calendarCheckbox" size="large" removable onem9Remove={handleRemove}>
            <em9Checkbox slot="prefix" size="medium" style={{ marginInlineEnd: '6px' }}></em9Checkbox>
            <em9Icon
              slot="prefix"
              name="linear-calendar-add"
              style={{ margin: '1px 4px 1px 2px', fontSize: '16px' }}
            ></em9Icon>
            Label
          </em9Tag>
          <em9Tag size="small" removable onem9Remove={handleRemove}>
            <em9Avatar slot="prefix" label="User avatar" style={{ '--size': '16px', marginRight: '4px' }}></em9Avatar>
            Label
          </em9Tag>
          <em9Tag size="medium" removable onem9Remove={handleRemove}>
            <em9Avatar slot="prefix" label="User avatar" style={{ '--size': '16px', marginRight: '6px' }}></em9Avatar>
            Label
          </em9Tag>
          <em9Tag size="large" class="custom-large" removable onem9Remove={handleRemove}>
            <em9Avatar label="User avatar" slot="prefix" style={{ '--size': '16px', marginRight: '6px' }}></em9Avatar>
            Label
          </em9Tag>
          <em9Tag size="small" removable onem9Remove={handleRemove}>
            <em9Checkbox slot="prefix" size="xsmall" style={{ margin: '1px 4px 1px 0' }}></em9Checkbox>
            <em9Avatar slot="prefix" label="User avatar" style={{ '--size': '16px', marginRight: '4px' }}></em9Avatar>
            Label
          </em9Tag>
          <em9Tag size="medium" class="tag-md-avatarCheckbox" removable onem9Remove={handleRemove}>
            <em9Checkbox slot="prefix" size="small" style={{ marginInlineEnd: '5px' }}></em9Checkbox>
            <em9Avatar slot="prefix" label="User avatar" style={{ '--size': '16px', marginRight: '5px' }}></em9Avatar>
            Label
          </em9Tag>
          <em9Tag size="large" class="tag-lg-avatarCheckbox tagAvatarCheckboxLg" removable onem9Remove={handleRemove}>
            <em9Checkbox slot="prefix" size="medium" style={{ marginInlineEnd: '6px' }}></em9Checkbox>
            <em9Avatar label="User avatar" slot="prefix" style={{ '--size': '16px', marginRight: '6px' }}></em9Avatar>
            Label
          </em9Tag>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Miscellaneous Chips

You can do custom styling using Parts and variables defined in host.

```html preview
<div class="tags-removable">
  <em9-tag size="small" class="misSmall miscellaneous" removable>
    <em9-icon slot="prefix" name="bulk-tag" style="margin-right:9px;font-size:16px;margin-left: 2px;"></em9-icon>
    <em9-avatar label="User avatar" slot="prefix" style="--size: 16px;margin-right:8px"></em9-avatar>
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      class="indicator"
      style="margin-right:8px;font-size:8px"
    ></em9-icon>
    Scott Bowen
    <em9-badge
      slot="suffix"
      variant="light-gray"
      size="small"
      class="badge-miscellaneousTag-small"
      style="margin-inline-start:6px;"
      >5</em9-badge
    >
  </em9-tag>
  <br /><br />
  <em9-tag size="medium" class="misMedium miscellaneous" removable>
    <em9-icon slot="prefix" name="bulk-tag" style="margin-right:9px;font-size:16px;margin-left: 2px;"></em9-icon>
    <em9-avatar label="User avatar" slot="prefix" style="--size: 16px;margin-right:8px"></em9-avatar>
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      class="indicator"
      style="margin-right:8px;font-size:8px"
    ></em9-icon>
    Scott Bowen
    <em9-badge
      slot="suffix"
      variant="light-gray"
      size="small"
      class="badge-miscellaneousTag-medium"
      style="margin-inline-start: 8px;"
      >5</em9-badge
    >
  </em9-tag>
  <br /><br />
  <em9-tag size="large" class="misLarge miscellaneous" removable>
    <em9-icon slot="prefix" name="bulk-tag" style="margin-right:9px;font-size:20px;margin-left: 2px;"></em9-icon>
    <em9-avatar label="User avatar" slot="prefix" style="--size:22px;margin-right:8px"></em9-avatar>
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      class="indicator"
      style="margin-right:8px;font-size:8px"
    ></em9-icon>
    Scott Bowen
    <em9-badge
      slot="suffix"
      variant="light-gray"
      size="small"
      class="MBadge-tag-large"
      style="margin-inline-start: 10px;"
      >5</em9-badge
    >
  </em9-tag>
  <br /><br />
  <em9-tag size="large" class="misXLarge miscellaneous" removable>
    <em9-icon slot="prefix" name="bulk-tag" style="margin-right:9px;font-size:24px;margin-left: 2px;"></em9-icon>
    <em9-avatar label="User avatar" slot="prefix" style="--size:22px;margin-right:8px"></em9-avatar>
    <em9-icon
      slot="prefix"
      name="cs-bold-indicator"
      class="indicator"
      style="margin-right:8px;font-size:11px"
    ></em9-icon>
    Scott Bowen
    <em9-badge
      slot="suffix"
      variant="light-gray"
      size="small"
      class="MXBadge-tag-large"
      style="margin-inline-start: 10px;"
      >5</em9-badge
    >
  </em9-tag>
  <style>
    .miscellaneous::part(base) {
      --em9-tag-color: var(--em9-color-gray-600);
    }
    .miscellaneous::part(remove-button) {
      --em9-tag-cross-color: var(--em9-color-gray-500);
    }
    .miscellaneous:hover::part(remove-button) {
      --em9-tag-cross-color: var(--em9-color-primary-500);
    }
    .miscellaneous:focus::part(remove-button) {
      --em9-tag-cross-color: var(--em9-color-neutral-0);
    }
    .indicator {
      color: var(--em9-color-success-500);
    }
    .badge-miscellaneousTag-small::part(base) {
      padding: 1px 3px;
      font-weight: 500;
    }
    .badge-miscellaneousTag-medium::part(base) {
      padding: 2px 5px;
      font-weight: 500;
    }
    .MBadge-miscellaneousTag-large::part(base) {
      padding: 3.5px 5px;
      font-weight: 500;
    }
    .MBadge-tag-large::part(base) {
      font-weight: 500;
    }
    .MXBadge-tag-large::part(base) {
      padding: 6px 7px;
      font-weight: 500;
    }
    .misMedium::part(base) {
      --em9-tag-padding: 6px 2px 6px 4px;
    }
    .misSmall::part(remove-button) {
      --em9-tag-cross-font-size: 20px;
      margin-inline-start: 2px;
    }
    .misMedium::part(remove-button) {
      --em9-tag-cross-font-size: 20px;
      margin-inline-start: 4px;
    }
    .misLarge::part(remove-button) {
      --em9-tag-cross-font-size: 20px;
      margin-inline-start: 7px;
    }
    .misLarge::part(base) {
      --em9-tag-padding: 6px 6px 6px 4px;
    }
    .misXLarge::part(base) {
      --em9-tag-padding: 6px;
      --em9-tag-font-size: 20px;
    }
    .misXLarge::part(remove-button) {
      --em9-tag-cross-font-size: 22px;
      margin-inline-start: 6px;
    }
    em9-tag:hover::part(base) {
      --em9-tag-background: var(--em9-color-primary-100);
      --em9-tag-border-color: var(--em9-color-primary-500);
      --em9-tag-color: var(--em9-color-primary-600);
      --em9-tag-cross-color: var(--em9-color-primary-600);
    }
    em9-tag:hover em9-badge::part(base) {
      background: var(--em9-color-primary-500);
      border-color: var(--em9-color-primary-500);
      color: var(--em9-color-neutral-0);
    }
    em9-tag:focus-within .indicator {
      color: var(--em9-color-success-200);
    }
    em9-tag:focus-within::part(base) {
      --em9-tag-background: var(--em9-color-primary-500);
      --em9-tag-border-color: var(--em9-color-primary-500);
      --em9-tag-color: var(--em9-color-neutral-0);
      --em9-tag-cross-color: var(--em9-color-neutral-0);
      outline: none;
    }
    em9-tag:focus-within em9-badge::part(base) {
      background: var(--em9-color-neutral-0);
      color: var(--em9-color-primary-500);
      border-color: var(--em9-color-neutral-0);
    }
  </style>
</div>
```

```jsx react
import { em9Tag } from 'em9webcomponents/dist/react';

const App = () => {
  const css = `
  .miscellaneous::part(base) {
    --em9-tag-color: var(--em9-color-gray-600);
  }
  .miscellaneous::part(remove-button) {
    --em9-tag-cross-color: var(--em9-color-gray-500);
  }
  .miscellaneous:hover::part(remove-button) {
    --em9-tag-cross-color: var(--em9-color-primary-500);
  }
  .miscellaneous:focus-within::part(remove-button) {
    --em9-tag-cross-color: var(--em9-color-neutral-0);
  }
  .indicator {
    color: var(--em9-color-success-500);
  }
  .badge-miscellaneousTag-small::part(base) {
    padding: 1px 3px;
    font-weight: 500;
  }
  .badge-miscellaneousTag-medium::part(base) {
    padding: 2px 5px;
    font-weight: 500;
  }
  .MBadge-miscellaneousTag-large::part(base) {
    padding: 3.5px 5px;
    font-weight: 500;
  }
  .MBadge-tag-large::part(base) {
    font-weight: 500;
  }
  .MXBadge-tag-large::part(base) {
    padding: 6px 7px;
    font-weight: 500;
  }
  .misMedium::part(base) {
    --em9-tag-padding: 6px 2px 6px 4px;
  }
  .misSmall::part(remove-button) {
    --em9-tag-cross-font-size: 20px;
    margin-inline-start: 2px;
  }
  .misMedium::part(remove-button) {
    --em9-tag-cross-font-size: 20px;
    margin-inline-start: 4px;
  }
  .misLarge::part(remove-button) {
    --em9-tag-cross-font-size: 20px;
    margin-inline-start: 7px;
  }
  .misLarge::part(base) {
    --em9-tag-padding: 6px 6px 6px 4px;
  }
  .misXLarge::part(base) {
    --em9-tag-padding: 6px;
    --em9-tag-font-size: 20px;
  }
  .misXLarge::part(remove-button) {
    --em9-tag-cross-font-size: 22px;
    margin-inline-start: 6px;
  }
  em9-tag:hover::part(base) {
    --em9-tag-background: var(--em9-color-primary-100);
    --em9-tag-border-color: var(--em9-color-primary-500);
    --em9-tag-color: var(--em9-color-primary-600);
    --em9-tag-cross-color: var(--em9-color-primary-600);
  }
  em9-tag:hover em9-badge::part(base) {
    background: var(--em9-color-primary-500);
    border-color: var(--em9-color-primary-500);
    color: var(--em9-color-neutral-0);
  }
  em9-tag:focus-within .indicator {
    color: var(--em9-color-success-200);
  }
  em9-tag:focus-within::part(base) {
    --em9-tag-background: var(--em9-color-primary-500);
    --em9-tag-border-color: var(--em9-color-primary-500);
    --em9-tag-color: var(--em9-color-neutral-0);
    --em9-tag-cross-color: var(--em9-color-neutral-0);
    outline: none;
  }
  em9-tag:focus-within em9-badge::part(base) {
    background: var(--em9-color-neutral-0);
    color: var(--em9-color-primary-500);
    border-color: var(--em9-color-neutral-0);
  }`;

  return (
    <>
      <div className="tags-removable">
        <em9Tag size="small" class="misSmall miscellaneous" removable>
          <em9Icon slot="prefix" name="bulk-tag" style={{ marginRight: '9px', fontSize: '16px', marginLeft: '2px' }}></em9Icon>
          <em9Avatar label="User avatar" slot="prefix" style={{ '--size': '16px', marginRight: '8px' }}></em9Avatar>
          <em9Icon
            slot="prefix"
            name="cs-bold-indicator"
            class="indicator"
            style={{ marginRight: '8px', fontSize: '8px' }}
          ></em9Icon>
          Scott Bowen
          <em9-badge
            slot="suffix"
            variant="light-gray"
            size="small"
            class="badge-miscellaneousTag-small"
            style={{ marginInlineStart: '6px' }}
          >
            5
          </em9-badge>
        </em9Tag>
        <br />
        <br />
        <em9Tag size="medium" class="misMedium miscellaneous" removable>
          <em9Icon slot="prefix" name="bulk-tag" style={{ marginRight: '9px', fontSize: '16px', marginLeft: '2px' }}></em9Icon>
          <em9Avatar label="User avatar" slot="prefix" style={{ '--size': '16px', marginRight: '8px' }}></em9Avatar>
          <em9Icon
            slot="prefix"
            name="cs-bold-indicator"
            class="indicator"
            style={{ marginRight: '8px', fontSize: '8px' }}
          ></em9Icon>
          Scott Bowen
          <em9-badge
            slot="suffix"
            variant="light-gray"
            size="small"
            class="badge-miscellaneousTag-medium"
            style={{ marginInlineStart: '8px' }}
          >
            5
          </em9-badge>
        </em9Tag>
        <br />
        <br />
        <em9Tag size="large" class="misLarge miscellaneous" removable>
          <em9Icon slot="prefix" name="bulk-tag" style={{ marginRight: '9px', fontSize: '20px', marginLeft: '2px' }}></em9Icon>
          <em9Avatar label="User avatar" slot="prefix" style={{ '--size': '22px', marginRight: '8px' }}></em9Avatar>
          <em9Icon
            slot="prefix"
            name="cs-bold-indicator"
            class="indicator"
            style={{ marginRight: '8px', fontSize: '8px' }}
          ></em9Icon>
          Scott Bowen
          <em9-badge
            slot="suffix"
            variant="light-gray"
            size="small"
            class="MBadge-tag-large"
            style={{ marginInlineStart: '10px' }}
          >
            5
          </em9-badge>
        </em9Tag>
        <br />
        <br />
        <em9Tag size="large" class="misXLarge miscellaneous" removable>
          <em9Icon slot="prefix" name="bulk-tag" style={{ marginRight: '9px', fontSize: '24px', marginLeft: '2px' }}></em9Icon>
          <em9Avatar label="User avatar" slot="prefix" style={{ '--size': '22px', marginRight: '8px' }}></em9Avatar>
          <em9Icon
            slot="prefix"
            name="cs-bold-indicator"
            class="indicator"
            style={{ marginRight: '8px', fontSize: '11px' }}
          ></em9Icon>
          Scott Bowen
          <em9-badge
            slot="suffix"
            variant="light-gray"
            size="small"
            class="MXBadge-tag-large"
            style={{ marginInlineStart: '10px' }}
          >
            5
          </em9-badge>
        </em9Tag>
        <style>{css}</style>
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:em9-tag]
