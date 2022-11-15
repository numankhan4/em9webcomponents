# Format Date

[component-header:em9-format-date]

Formats a date/time using the specified locale and options.

Localization is handled by the browser's [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required.

```html preview
<!-- em9-Library 2 release date 🎉 -->
<em9-format-date date="2020-07-15T09:17:00-04:00"></em9-format-date>
```

```jsx react
import { em9FormatDate } from 'em9webcomponents/dist/react';

const App = () => <em9FormatDate date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines the date/time to use when formatting. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript. If omitted, the current date/time will be assumed.

?> When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.

## Examples

### Date & Time Formatting

Formatting options are based on those found in the [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead.

```html preview
<!-- Human-readable date -->
<em9-format-date month="long" day="numeric" year="numeric"></em9-format-date><br />

<!-- Time -->
<em9-format-date hour="numeric" minute="numeric"></em9-format-date><br />

<!-- Weekday -->
<em9-format-date weekday="long"></em9-format-date><br />

<!-- Month -->
<em9-format-date month="long"></em9-format-date><br />

<!-- Year -->
<em9-format-date year="numeric"></em9-format-date><br />

<!-- No formatting options -->
<em9-format-date></em9-format-date>
```

```jsx react
import { em9FormatDate } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    {/* Human-readable date */}
    <em9FormatDate month="long" day="numeric" year="numeric" />
    <br />

    {/* Time */}
    <em9FormatDate hour="numeric" minute="numeric" />
    <br />

    {/* Weekday */}
    <em9FormatDate weekday="long" />
    <br />

    {/* Month */}
    <em9FormatDate month="long" />
    <br />

    {/* Year */}
    <em9FormatDate year="numeric" />
    <br />

    {/* No formatting options */}
    <em9FormatDate />
  </>
);
```

### Hour Formatting

By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the `hour-format` attribute to `12` or `24`.

```html preview
<em9-format-date hour="numeric" minute="numeric" hour-format="12"></em9-format-date><br />
<em9-format-date hour="numeric" minute="numeric" hour-format="24"></em9-format-date>
```

```jsx react
import { em9FormatDate } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9FormatDate hour="numeric" minute="numeric" hour-format="12" />
    <br />
    <em9FormatDate hour="numeric" minute="numeric" hour-format="24" />
  </>
);
```

### Localization

Use the `lang` attribute to set the date/time formatting locale.

```html preview
English: <em9-format-date lang="en"></em9-format-date><br />
French: <em9-format-date lang="fr"></em9-format-date><br />
Russian: <em9-format-date lang="ru"></em9-format-date>
```

```jsx react
import { em9FormatDate } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    English: <em9FormatDate lang="en" />
    <br />
    French: <em9FormatDate lang="fr" />
    <br />
    Russian: <em9FormatDate lang="ru" />
  </>
);
```

[component-metadata:em9-format-date]
