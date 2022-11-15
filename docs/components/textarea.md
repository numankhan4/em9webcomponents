# Textarea

[component-header:em9-textarea]

Textareas collect data from the user and allow multiple lines of text.

```html preview
<em9-textarea label="Message" required autofocus maxlength-"10" maxlength-"15" help-text="This is a error message." size="small"></em9-textarea>
<br>
<em9-textarea name="comments" label="Comments" required autofocus maxlength-"10" maxlength-"15" help-text="This is a error message." size="medium" filled></em9-textarea>
<br>
<em9-textarea name="comments" label="Comments" required autofocus maxlength-"10" maxlength-"15" help-text="This is a error message." size="large" lineStyled></em9-textarea>
```

```jsx react
import { em9Textarea } from 'em9webcomponents/dist/react';

const App = () => <em9Textarea />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<em9-textarea label="Comments"></em9-textarea>
```

```jsx react
import { em9Textarea } from 'em9webcomponents/dist/react';

const App = () => <em9Textarea label="Comments" />;
```

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<em9-textarea label="Feedback" help-text="Please tell us what you think."> </em9-textarea>
```

```jsx react
import { em9Textarea } from 'em9webcomponents/dist/react';

const App = () => <em9Textarea label="Feedback" help-text="Please tell us what you think." />;
```

### Rows

Use the `rows` attribute to change the number of text rows that get shown.

```html preview
<em9-textarea rows="2"></em9-textarea>
```

```jsx react
import { em9Textarea } from 'em9webcomponents/dist/react';

const App = () => <em9Textarea rows={2} />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<em9-textarea placeholder="Type something"></em9-textarea>
```

```jsx react
import { em9Textarea } from 'em9webcomponents/dist/react';

const App = () => <em9Textarea placeholder="Type something" />;
```

### Filled Textareas

Add the `filled` attribute to draw a filled textarea.

```html preview
<em9-textarea placeholder="Type something" filled></em9-textarea>
```

```jsx react
import { em9Textarea } from 'em9webcomponents/dist/react';

const App = () => <em9Textarea placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable a textarea.

```html preview
<em9-textarea placeholder="Textarea" disabled></em9-textarea>
```

```jsx react
import { em9Textarea } from 'em9webcomponents/dist/react';

const App = () => <em9Textarea placeholder="Textarea" disabled />;
```

### Sizes

Use the `size` attribute to change a textarea's size.

```html preview
<em9-textarea placeholder="Small" size="small"></em9-textarea>
<br />
<em9-textarea placeholder="Medium" size="medium"></em9-textarea>
<br />
<em9-textarea placeholder="Large" size="large"></em9-textarea>
```

```jsx react
import { em9Textarea } from 'em9webcomponents/dist/react';

const App = () => (
  <>
    <em9Textarea placeholder="Small" size="small"></em9Textarea>
    <br />
    <em9Textarea placeholder="Medium" size="medium"></em9Textarea>
    <br />
    <em9Textarea placeholder="Large" size="large"></em9Textarea>
  </>
);
```

### Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

```html preview
<em9-textarea resize="none"></em9-textarea>
```

```jsx react
import { em9Textarea } from 'em9webcomponents/dist/react';

const App = () => <em9Textarea resize="none" />;
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

```html preview
<em9-textarea resize="auto"></em9-textarea>
```

```jsx react
import { em9Textarea } from 'em9webcomponents/dist/react';

const App = () => <em9Textarea resize="auto" />;
```

[component-metadata:em9-textarea]
