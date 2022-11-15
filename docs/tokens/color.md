# Color Tokens

Color tokens help maintain consistent use of color throughout your app. em9-Library provides palettes for theme colors and primitives that you can use as a foundation for your design system.

Color tokens are referenced using the `--em9-color-{name}-{n}` CSS custom property, where `{name}` is the name of the palette and `{n}` is the numeric value of the desired swatch.

## Product Design Colors

Theme tokens give you a semantic way to reference colors in your app. The primary palette is typically based on a brand color, whereas success, neutral, warning, and danger are used to visualize actions that correspond to their respective meanings.

Our design system leverages a purposeful set of color styles as the perfect starting point for any brand or project. When it comes to color, contrast is critical for ensuring text is legible. We've added WCAG 2.1 contrast ratios to our color system so you can make sure you're designing with accessibility in mind.

### Brand colors
These are the main colors that make up the majority of the colors used in the design system.


<div class="color-palette">
  <div class="color-palette__name">
    Primary Solid<br>
    <code>--em9-color-primary-<em>{n}</em></code>
  </div>
  <div class="color-palette__example">Primary<div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-primary-500);"> 500</div></div>
  <div class="color-palette__example">Warning<div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-warning-500);">500</div> </div>
  <div class="color-palette__example">Burgundy<div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-burgundy-500);">500</div> </div>
  <div class="color-palette__example">White<div class="color-palette__swatch color-palette__swatch--border" style="color: var(--em9-color-black); background-color: var(--em9-color-white);">500</div></div>
  <div class="color-palette__example">Black<div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-black);">500</div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Secondary Solid<br>
    <code>--em9-color-primary-<em>{n}</em></code>
  </div>
  <div class="color-palette__example">success<div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-success-500);">500</div> </div>
  <div class="color-palette__example">error<div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-danger-500);">600</div> </div>
  <div class="color-palette__example">gray<div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-500);">500</div> </div>
  <div class="color-palette__example">gray<div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-900);">900</div> </div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Primary<br>
    <code>--em9-color-primary-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="font-weight: var(--em9-font-weight-semibold); background-color: var(--em9-color-primary-25); color: var(--em9-color-primary-700)">25</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="font-weight: var(--em9-font-weight-semibold); background-color: var(--em9-color-primary-50); color: var(--em9-color-primary-700)">50</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="font-weight: var(--em9-font-weight-semibold); background-color: var(--em9-color-primary-100); color: var(--em9-color-primary-700)">100</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="font-weight: var(--em9-font-weight-semibold); background-color: var(--em9-color-primary-200); color: var(--em9-color-primary-700)">200</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="font-weight: var(--em9-font-weight-semibold); background-color: var(--em9-color-primary-300); color: var(--em9-color-white)">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="font-weight: var(--em9-font-weight-semibold); background-color: var(--em9-color-primary-400); color: var(--em9-color-white)">400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="font-weight: var(--em9-font-weight-semibold); background-color: var(--em9-color-primary-500); color: var(--em9-color-white)">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="font-weight: var(--em9-font-weight-semibold); background-color: var(--em9-color-primary-600); color: var(--em9-color-white)">600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="font-weight: var(--em9-font-weight-semibold); background-color: var(--em9-color-primary-700); color: var(--em9-color-white)">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="font-weight: var(--em9-font-weight-semibold); background-color: var(--em9-color-primary-800); color: var(--em9-color-white)">800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="font-weight: var(--em9-font-weight-semibold); background-color: var(--em9-color-primary-900); color: var(--em9-color-white)">900</div></div>
  
</div>
<div class="color-palette">
  <div class="color-palette__name">
    Burgundy<br>
    <code>--em9-color-burgundy-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-burgundy-25); color: var(--em9-color-burgundy-700)">25</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-burgundy-50); color: var(--em9-color-burgundy-700)">50</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-burgundy-100); color: var(--em9-color-burgundy-700)">100</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-burgundy-200); color: var(--em9-color-burgundy-700)">200</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-burgundy-300);color: var(--em9-color-white);">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-burgundy-400);color: var(--em9-color-white);">400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-burgundy-500);color: var(--em9-color-white);">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-burgundy-600);color: var(--em9-color-white);">600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-burgundy-700);color: var(--em9-color-white);">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-burgundy-800);color: var(--em9-color-white);">800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-burgundy-900);color: var(--em9-color-white);">900</div></div>
  
</div>


<div class="color-palette">
  <div class="color-palette__name">
    Warning<br>
    <code>--em9-color-warning-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-warning-25); color: var(--em9-color-warning-700)">25 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-warning-50); color: var(--em9-color-warning-700)">50 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-warning-100); color: var(--em9-color-warning-700)">100</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-warning-200); color: var(--em9-color-warning-700)">200</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-warning-300); color: var(--em9-color-white);">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-warning-400); color: var(--em9-color-white);">400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-warning-500); color: var(--em9-color-white);">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-warning-600); color: var(--em9-color-white);">600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-warning-700); color: var(--em9-color-white);">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-warning-800); color: var(--em9-color-white);">800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-warning-900); color: var(--em9-color-white);">900</div></div>
</div>
<div class="color-palette">
  <div class="color-palette__name">
    Danger<br>
    <code>--em9-color-danger-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-danger-700);background-color: var(--em9-color-danger-25);">25 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-danger-700);background-color: var(--em9-color-danger-50);">50 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-danger-700);background-color: var(--em9-color-danger-100);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-danger-700);background-color: var(--em9-color-danger-200);">200</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-danger-300);">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-danger-400);">400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-danger-500);">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-danger-600);">600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-danger-700);">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-danger-800);">800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-danger-900);">900</div></div>
</div>
<div class="color-palette">
  <div class="color-palette__name">
    Success<br>
    <code>--em9-color-success-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-success-700);background-color: var(--em9-color-success-25);">25 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-success-700);background-color: var(--em9-color-success-50);">50 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-success-700);background-color: var(--em9-color-success-100);">100 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-success-700);background-color: var(--em9-color-success-200);">200</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-success-300);">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-success-400);">400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-success-500);">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-success-600);">600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-success-700);">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-success-800);">800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-success-900);">900</div></div>
</div>


<div class="color-palette">
  <div class="color-palette__name">
    Gray (Typography)<br>
    <code>--em9-color-gray-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-500); background-color: var(--em9-color-gray-25);">25 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-500); background-color: var(--em9-color-gray-50);">50 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-500); background-color: var(--em9-color-gray-100);">100 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-500); background-color: var(--em9-color-gray-200);">200</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-300);">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-400);">400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-500);">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-600);">600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-700);">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-800);">800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-900);">900</div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Black & White<br>
    <code>--em9-color-neutral-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch color-palette__swatch--border" style="color: var(--em9-color-neutral-1000); background-color: var(--em9-color-neutral-0);">0</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch " style="color: var(--em9-color-neutral-0); background-color: var(--em9-color-neutral-1000);">1000</div></div>
</div>

?> Looking for an easy way to customize your theme? [Try the color token generator!](https://codepen.io/claviska/full/QWveRgL)

## Secondary Colors

Additional palettes are provided in the form of color primitives. Use these when you need arbitrary colors that don't have semantic meaning. Color primitives are derived from the fantastic [Tailwind color palette](https://tailwindcss.com/docs/customizing-colors).

<div class="color-palette">
  <div class="color-palette__name">
    Gray Blue<br>
    <code>--em9-color-gray-blue-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-blue-500);background-color: var(--em9-color-gray-blue-25);">25</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-blue-500);background-color: var(--em9-color-gray-blue-50);">50</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-blue-500);background-color: var(--em9-color-gray-blue-100);">100</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-blue-500);background-color: var(--em9-color-gray-blue-200);">200</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-gray-blue-300);">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-gray-blue-400);">400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-gray-blue-500);">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-gray-blue-600);">600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-gray-blue-700);">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-gray-blue-800);">800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-gray-blue-900);">900</div></div>  
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Gray Cool<br>
    <code>--em9-color-gray-cool-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-cool-500); background-color: var(--em9-color-gray-cool-25);">25 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-cool-500); background-color: var(--em9-color-gray-cool-50);">50 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-cool-500); background-color: var(--em9-color-gray-cool-100);">100</div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-cool-500); background-color: var(--em9-color-gray-cool-200);">200</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-cool-300);">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-cool-400);">400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-cool-500);">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-cool-600);">600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-cool-700);">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-cool-800);">800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-cool-900);">900</div></div>  
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Gray Modern<br>
    <code>--em9-color-gray-modern-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-modern-500); background-color: var(--em9-color-gray-modern-25);">25</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-modern-500); background-color: var(--em9-color-gray-modern-50);">50 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-modern-500); background-color: var(--em9-color-gray-modern-100);">100 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-modern-500); background-color: var(--em9-color-gray-modern-200);">200 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-modern-300);">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-modern-400);">400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-modern-500);">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-modern-600);">600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-modern-700);">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-modern-800);">800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-modern-900);">900</div></div>  
</div>


<div class="color-palette">
  <div class="color-palette__name">
    Gray Neutral<br>
    <code>--em9-color-gray-neutral-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-neutral-500); background-color: var(--em9-color-gray-neutral-25);">25 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-neutral-500); background-color: var(--em9-color-gray-neutral-50);">50 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-neutral-500); background-color: var(--em9-color-gray-neutral-100);">100</div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-neutral-500); background-color: var(--em9-color-gray-neutral-200);">200</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-neutral-300);">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-neutral-400);">400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-neutral-500);">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-neutral-600);">600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-neutral-700);">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-neutral-800);">800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-neutral-900);">900</div></div>  
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Gray Iron<br>
    <code>--em9-color-gray-iron-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-iron-500); background-color: var(--em9-color-gray-iron-25);">25 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-iron-500); background-color: var(--em9-color-gray-iron-50);">50 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-iron-500); background-color: var(--em9-color-gray-iron-100);">100</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-iron-500); background-color: var(--em9-color-gray-iron-200);">200</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-iron-300);">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-iron-400);">400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-iron-500);">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-iron-600);">600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-iron-700);">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-iron-800);">800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-iron-900);">900</div></div>  
</div>


<div class="color-palette">
  <div class="color-palette__name">
    Gray True<br>
    <code>--em9-color-gray-true-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-true-500); background-color: var(--em9-color-gray-true-25);">25 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-true-500); background-color: var(--em9-color-gray-true-50);">50 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-true-500); background-color: var(--em9-color-gray-true-100);">100</div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-true-500); background-color: var(--em9-color-gray-true-200);">200</div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-true-300);">300</div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-true-400);">400</div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-true-500);">500</div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-true-600);">600</div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-true-700);">700</div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-true-800);">800</div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-true-900);">900</div> </div>  
</div>


<div class="color-palette">
  <div class="color-palette__name">
    Gray Warm<br>
    <code>--em9-color-gray-warm-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-warm-500); background-color: var(--em9-color-gray-warm-25);">25 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-warm-500); background-color: var(--em9-color-gray-warm-50);">50 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-warm-500); background-color: var(--em9-color-gray-warm-100);">100</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-gray-warm-500); background-color: var(--em9-color-gray-warm-200);">200</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-warm-300);">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-warm-400);">400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-warm-500);">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-warm-600);">600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-warm-700);">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-warm-800);">800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-gray-warm-900);">900</div></div>  
</div>


<div class="color-palette">
  <div class="color-palette__name">
    Moss<br>
    <code>--em9-color-moss-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-moss-700);background-color: var(--em9-color-moss-25);">25 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-moss-700);background-color: var(--em9-color-moss-50);">50 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-moss-700);background-color: var(--em9-color-moss-100);">100</div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-moss-700);background-color: var(--em9-color-moss-200);">200</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-moss-300);">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-moss-400);">400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-moss-500);">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-moss-600);">600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-moss-700);">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-moss-800);">800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-moss-900);">900</div></div>  
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Green Light<br>
    <code>--em9-color-green-light-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-green-light-700);background-color: var(--em9-color-green-light-25);">25 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-green-light-700);background-color: var(--em9-color-green-light-50);">50 </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-green-light-700);background-color: var(--em9-color-green-light-100);">100</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-green-light-700);background-color: var(--em9-color-green-light-200);">200</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-green-light-300);">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-green-light-400);">400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-green-light-500);">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-green-light-600);">600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-green-light-700);">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-green-light-800);">800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-green-light-900);">900</div></div>  
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Green<br>
    <code>--em9-color-green-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-green-700);background-color: var(--em9-color-green-25);">25  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-green-700);background-color: var(--em9-color-green-50);">50  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-green-700);background-color: var(--em9-color-green-100);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-green-700);background-color: var(--em9-color-green-200);">200 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-green-300);">300 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-green-400);">400 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-green-500);">500 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-green-600);">600 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-green-700);">700 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-green-800);">800 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-green-900);">900 </div></div>
</div>


<div class="color-palette">
  <div class="color-palette__name">
    Teal<br>
    <code>--em9-color-teal-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-teal-700);background-color: var(--em9-color-teal-25);">25  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-teal-700);background-color: var(--em9-color-teal-50);">50  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-teal-700);background-color: var(--em9-color-teal-100);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-teal-700);background-color: var(--em9-color-teal-200);">200 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-teal-300);">300 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-teal-400);">400 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-teal-500);">500 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-teal-600);">600 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-teal-700);">700 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-teal-800);">800 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-teal-900);">900 </div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Cyan<br>
    <code>--em9-color-cyan-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-cyan-700);background-color: var(--em9-color-cyan-25);">25  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-cyan-700);background-color: var(--em9-color-cyan-50);">50  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-cyan-700);background-color: var(--em9-color-cyan-100);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-cyan-700);background-color: var(--em9-color-cyan-200);">200 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-cyan-300);">300 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-cyan-400);">400 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-cyan-500);">500 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-cyan-600);">600 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-cyan-700);">700 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-cyan-800);">800 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-cyan-900);">900 </div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Blue Light<br>
    <code>--em9-color-blue-light-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-blue-light-700); background-color: var(--em9-color-blue-light-25);">25  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-blue-light-700); background-color: var(--em9-color-blue-light-50);">50  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-blue-light-700); background-color: var(--em9-color-blue-light-100);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-blue-light-700); background-color: var(--em9-color-blue-light-200);">200 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-blue-light-300);">300 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-blue-light-400);">400 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-blue-light-500);">500 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-blue-light-600);">600 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-blue-light-700);">700 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-blue-light-800);">800 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-blue-light-900);">900 </div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Blue<br>
    <code>--em9-color-blue-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-blue-700);background-color: var(--em9-color-blue-25);">25  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-blue-700);background-color: var(--em9-color-blue-50);">50  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-blue-700);background-color: var(--em9-color-blue-100);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-blue-700);background-color: var(--em9-color-blue-200);">200 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-blue-300);">300 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-blue-400);">400 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-blue-500);">500 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-blue-600);">600 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-blue-700);">700 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-blue-800);">800 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-blue-900);">900 </div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Blue Dark<br>
    <code>--em9-color-blue-dark-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-blue-dark-700); background-color: var(--em9-color-blue-dark-25);">25  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-blue-dark-700); background-color: var(--em9-color-blue-dark-50);">50  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-blue-dark-700); background-color: var(--em9-color-blue-dark-100);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-blue-dark-700); background-color: var(--em9-color-blue-dark-200);">200 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-blue-dark-300);">300 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-blue-dark-400);">400 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-blue-dark-500);">500 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-blue-dark-600);">600 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-blue-dark-700);">700 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-blue-dark-800);">800 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-blue-dark-900);">900 </div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Indigo<br>
    <code>--em9-color-indigo-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-indigo-700); background-color: var(--em9-color-indigo-25);">25  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-indigo-700); background-color: var(--em9-color-indigo-50);">50  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-indigo-700); background-color: var(--em9-color-indigo-100);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-indigo-700); background-color: var(--em9-color-indigo-200);">200 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-indigo-300);">300 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-indigo-400);">400 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-indigo-500);">500 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-indigo-600);">600 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-indigo-700);">700 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-indigo-800);">800 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-indigo-900);">900 </div></div>
</div>


<div class="color-palette">
  <div class="color-palette__name">
    Violet<br>
    <code>--em9-color-violet-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-violet-700); background-color: var(--em9-color-violet-25);">25  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-violet-700); background-color: var(--em9-color-violet-50);">50  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-violet-700); background-color: var(--em9-color-violet-100);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-violet-700); background-color: var(--em9-color-violet-200);">200 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-violet-300);">300 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-violet-400);">400 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-violet-500);">500 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-violet-600);">600 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-violet-700);">700 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-violet-800);">800 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-violet-900);">900 </div></div>
</div>



<div class="color-palette">
  <div class="color-palette__name">
    Purple<br>
    <code>--em9-color-purple-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-purple-700); background-color: var(--em9-color-purple-25);">25  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-purple-700); background-color: var(--em9-color-purple-50);">50  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-purple-700); background-color: var(--em9-color-purple-100);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-purple-700); background-color: var(--em9-color-purple-200);">200 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-purple-300);">300 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-purple-400);">400 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-purple-500);">500 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-purple-600);">600 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-purple-700);">700 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-purple-800);">800 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-purple-900);">900 </div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Fuchsia<br>
    <code>--em9-color-fuchsia-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-fuchsia-700);background-color: var(--em9-color-fuchsia-25);">25  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-fuchsia-700);background-color: var(--em9-color-fuchsia-50);">50  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-fuchsia-700);background-color: var(--em9-color-fuchsia-100);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-fuchsia-700);background-color: var(--em9-color-fuchsia-200);">200 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-fuchsia-300);">300 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-fuchsia-400);">400 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-fuchsia-500);">500 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-fuchsia-600);">600 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-fuchsia-700);">700 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-fuchsia-800);">800 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white);background-color: var(--em9-color-fuchsia-900);">900 </div></div>
</div>




<div class="color-palette">
  <div class="color-palette__name">
    Pink<br>
    <code>--em9-color-pink-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-pink-700); background-color: var(--em9-color-pink-25);">25  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-pink-700); background-color: var(--em9-color-pink-50);">50  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-pink-700); background-color: var(--em9-color-pink-100);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-pink-700); background-color: var(--em9-color-pink-200);">200 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-pink-300);">300 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-pink-400);">400 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-pink-500);">500 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-pink-600);">600 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-pink-700);">700 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-pink-800);">800 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background-color: var(--em9-color-pink-900);">900 </div></div>
</div>


<div class="color-palette">
  <div class="color-palette__name">
    Rose<br>
    <code>--em9-color-rose-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-rose-25);color: var(--em9-color-pink-700);">25  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-rose-50);color: var(--em9-color-pink-700);">50  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-rose-100);color: var(--em9-color-pink-700);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-rose-200);color: var(--em9-color-pink-700);">200 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-rose-300);color: var(--em9-color-white);">300 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-rose-400);color: var(--em9-color-white);">400 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-rose-500);color: var(--em9-color-white);">500 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-rose-600);color: var(--em9-color-white);">600 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-rose-700);color: var(--em9-color-white);">700 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-rose-800);color: var(--em9-color-white);">800 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-rose-900);color: var(--em9-color-white);">900 </div></div>
</div>



<div class="color-palette">
  <div class="color-palette__name">
    Orange Dark<br>
    <code>--em9-color-orange-dark-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-dark-25); color: var(--em9-color-orange-700);">25  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-dark-50); color: var(--em9-color-orange-700);">50  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-dark-100); color: var(--em9-color-orange-700);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-dark-200); color: var(--em9-color-orange-700);">200 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-dark-300);color: var(--em9-color-white);">300 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-dark-400);color: var(--em9-color-white);">400 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-dark-500);color: var(--em9-color-white);">500 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-dark-600);color: var(--em9-color-white);">600 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-dark-700);color: var(--em9-color-white);">700 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-dark-800);color: var(--em9-color-white);">800 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-dark-900);color: var(--em9-color-white);">900 </div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Orange<br>
    <code>--em9-color-orange-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-25); color: var(--em9-color-orange-700)">25   </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-50); color: var(--em9-color-orange-700)">50   </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-100); color: var(--em9-color-orange-700)">100  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-200); color: var(--em9-color-orange-700)">200  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-300); color: var(--em9-color-white);">300  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-400); color: var(--em9-color-white);">400  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-500); color: var(--em9-color-white);">500  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-600); color: var(--em9-color-white);">600  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-700); color: var(--em9-color-white);">700  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-800); color: var(--em9-color-white);">800  </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-orange-900); color: var(--em9-color-white);">900  </div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Yellow<br>
    <code>--em9-color-yellow-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-yellow-25); color: var(--em9-color-yellow-700);">25  </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-yellow-50); color: var(--em9-color-yellow-700);">50  </div> </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-yellow-100); color: var(--em9-color-yellow-700);">100 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-yellow-200); color: var(--em9-color-yellow-700);">200 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-yellow-300); color: var(--em9-color-white);">300 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-yellow-400); color: var(--em9-color-white);">400 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-yellow-500); color: var(--em9-color-white);">500 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-yellow-600); color: var(--em9-color-white);">600 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-yellow-700); color: var(--em9-color-white);">700 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-yellow-800); color: var(--em9-color-white);">800 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--em9-color-yellow-900); color: var(--em9-color-white);">900 </div></div>
</div>


## Gradient Colors


<div class="color-palette">
  <div class="color-palette__name">
    Primary<br>
    <code>--em9-gradient-primary-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-gradient-primary-900-800);"></div><div class="gradient-clr">900-800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-gradient-primary-800-700);"></div><div class="gradient-clr">800-700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-gradient-primary-800-600);"></div><div class="gradient-clr">800-600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-gradient-primary-400-500-diagonal);"></div><div class="gradient-clr">400-500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-gradient-primary-500-400);"></div><div class="gradient-clr">500-400</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-gradient-primary-400-500);"></div><div class="gradient-clr">400-500</div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Gray <br>
    <code>--em9-gradient-gray-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-gradient-gray-900-800);"></div><div class="gradient-clr">900-800</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-gradient-gray-800-700);"></div><div class="gradient-clr">800-700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-gradient-gray-800-600);"></div><div class="gradient-clr">800-600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-gradient-gray-800-600-diagonal);"></div><div class="gradient-clr">800-600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-gradient-gray-700-600);"></div><div class="gradient-clr">700-600</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-gradient-gray-600-500);"></div><div class="gradient-clr">600-500</div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Other Gradients <br>
    <code>--em9-gradient-<em>{n}</em></code>
  </div>
  <div class="color-palette__example">warning<div class="color-palette__swatch" style="background: var(--em9-gradient-warning);"></div></div>
  <div class="color-palette__example">danger<div class="color-palette__swatch" style="background: var(--em9-gradient-danger);"></div></div>
  <div class="color-palette__example">gray<div class="color-palette__swatch" style="background: var(--em9-gradient-gray);"></div></div>
</div>


## Marketing Colors

Our design system leverages a purposeful set of color styles as the perfect starting point for any brand or project. When it comes to color, contrast is critical for ensuring text is legible. We've added WCAG 2.1 contrast ratios to our color system so you can make sure you're designing with accessibility in mind.

<div class="color-palette">
  <div class="color-palette__name">
   Primary Colors <br>
    <code>--em9-marketing-color<em>{n}</em></code>
  </div>
  <div class="color-palette__example">primary<div class="color-palette__swatch" style="background: var(--em9-marketing-color-primary);"></div></div>
  <div class="color-palette__example">warning<div class="color-palette__swatch" style="background: var(--em9-marketing-color-warning);"></div></div>
  <div class="color-palette__example">black<div class="color-palette__swatch" style="background: var(--em9-marketing-color-black);"></div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
   Secondary Colors <br>
    <code>--em9-marketing-color<em>{n}</em></code>
  </div>
  <div class="color-palette__example">success<div class="color-palette__swatch" style="background: var(--em9-marketing-color-success);"></div></div>
  <div class="color-palette__example">danger<div class="color-palette__swatch" style="background: var(--em9-marketing-color-danger);"></div></div>
  <div class="color-palette__example">gray<div class="color-palette__swatch" style="background: var(--em9-marketing-color-gray);"></div></div>
  <div class="color-palette__example">gray-light<div class="color-palette__swatch" style="background: var(--em9-marketing-color-gray-light);"></div></div>
</div>

## Base / Supporting colors


<div class="color-palette">
  <div class="color-palette__name">
   Primary Blue <br>
    <code>--em9-marketing-color-primary<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-primary-500); background: var(--em9-marketing-color-primary-25);">25</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background: var(--em9-marketing-color-primary-50);">50</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background: var(--em9-marketing-color-primary-75);">75</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background: var(--em9-marketing-color-primary-100);">100</div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
   Warning <br>
    <code>--em9-marketing-color-warning<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-warning-500); background: var(--em9-marketing-color-warning-25);">25 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background: var(--em9-marketing-color-warning-50);">50 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background: var(--em9-marketing-color-warning-75);">75 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background: var(--em9-marketing-color-warning-100);">100</div></div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
   em9 Black <br>
    <code>--em9-color-black<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-color-black-25);">25 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-color-black-50);">50 </div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background: var(--em9-color-black-100);">100</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background: var(--em9-color-black-300);">300</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background: var(--em9-color-black-500);">500</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background: var(--em9-color-black-700);">700</div></div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="color: var(--em9-color-white); background: var(--em9-color-black);">800</div></div>
</div>

These are the main colors that make up the majority of the colors used in the design system.