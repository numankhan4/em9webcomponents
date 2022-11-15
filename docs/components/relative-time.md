# Relative Time

[component-header:em9-relative-time]

Outputs a localized time phrase relative to the current date and time.

Localization is handled by the browser's [`Intl.RelativeTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat). No language packs are required.

```html preview
<!-- em9-Library 2 release date 🎉 -->
<em9-relative-time date="2020-07-15T09:17:00-04:00"></em9-relative-time>
```

```jsx react
import { em9RelativeTime } from 'em9webcomponents/dist/react';

const App = () => <em9RelativeTime date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines when the date/time is calculated from. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript.

?> When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.

!> The `Intl.RelativeTimeFormat` API is available [in all major browsers](https://caniuse.com/mdn-javascript_builtins_intl_relativetimeformat), but it only became available to Safari in version 14. If you need to support Safari 13, you'll need to [use a polyfill](https://github.com/catamphetamine/relative-time-format).

## Examples

### Keeping Time in Sync

Use the `sync` attribute to update the displayed value automatically as time passes.

```html preview
<div class="relative-time-sync">
  <em9-relative-time sync></em9-relative-time>
</div>

<script>
  const container = document.querySelector('.relative-time-sync');
  const relativeTime = container.querySelector('em9-relative-time');

  relativeTime.date = new Date(new Date().getTime() - 60000);
</script>
```

```jsx react
import { em9RelativeTime } from 'em9webcomponents/dist/react';

const date = new Date(new Date().getTime() - 60000);

const App = () => <em9RelativeTime date={date} sync />;
```

### Formatting Styles

You can change how the time is displayed using the `format` attribute. Note that some locales may display the same values for `narrow` and `short` formats.

```html preview
<em9-relative-time date="2020-07-15T09:17:00-04:00" format="narrow"></em9-relative-time><br />
<em9-relative-time date="2020-07-15T09:17:00-04:00" format="short"></em9-relative-time><br />
<em9-relative-time date="2020-07-15T09:17:00-04:00" format="long"></em9-relative-time>
```

```jsx react
import { em9RelativeTime } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9RelativeTime date="2020-07-15T09:17:00-04:00" format="narrow" />
    <br />
    <em9RelativeTime date="2020-07-15T09:17:00-04:00" format="short" />
    <br />
    <em9RelativeTime date="2020-07-15T09:17:00-04:00" format="long" />
  </>
);
```

### Localization

Use the `lang` attribute to set the desired locale.

```html preview
English: <em9-relative-time date="2020-07-15T09:17:00-04:00" lang="en-US"></em9-relative-time><br />
Chinese: <em9-relative-time date="2020-07-15T09:17:00-04:00" lang="zh-CN"></em9-relative-time><br />
German: <em9-relative-time date="2020-07-15T09:17:00-04:00" lang="de"></em9-relative-time><br />
Greek: <em9-relative-time date="2020-07-15T09:17:00-04:00" lang="el"></em9-relative-time><br />
Russian: <em9-relative-time date="2020-07-15T09:17:00-04:00" lang="ru"></em9-relative-time>
```

```jsx react
import { em9RelativeTime } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    English: <em9RelativeTime date="2020-07-15T09:17:00-04:00" lang="en-US" />
    <br />
    Chinese: <em9RelativeTime date="2020-07-15T09:17:00-04:00" lang="zh-CN" />
    <br />
    German: <em9RelativeTime date="2020-07-15T09:17:00-04:00" lang="de" />
    <br />
    Greek: <em9RelativeTime date="2020-07-15T09:17:00-04:00" lang="el" />
    <br />
    Russian: <em9RelativeTime date="2020-07-15T09:17:00-04:00" lang="ru" />
  </>
);
```

[component-metadata:em9-relative-time]
