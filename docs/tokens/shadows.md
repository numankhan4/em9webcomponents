# Shadows & Blurs




## Examples

### Figma Reference
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fjyzlk4D3oSPok5wIy0aYnS%2Fem9-DSM---Web-UI-Kit%3Fnode-id%3D4890%253A152411" allowfullscreen></iframe>


### Shadows Example
```html preview
<div class="grid">
<div class="shadow-box" style="display: inline-flex; align-items: center; justify-content: center; box-shadow:var(--em9-shadow-xs);">xs</div>
<div class="shadow-box" style="display: inline-flex; align-items: center; justify-content: center; box-shadow:var(--em9-shadow-sm);">sm</div>
<div class="shadow-box" style="display: inline-flex; align-items: center; justify-content: center; box-shadow:var(--em9-shadow-md);">md</div>
<div class="shadow-box" style="display: inline-flex; align-items: center; justify-content: center; box-shadow:var(--em9-shadow-lg);">lg</div>
<div class="shadow-box" style="display: inline-flex; align-items: center; justify-content: center; box-shadow:var(--em9-shadow-xl);">xl</div>
</div>
```


### Marketing Shadows
```html preview
<div class="grid">
<div class="shadow-box" style="display: inline-flex; align-items: center; justify-content: center; font-size: var(--em9-font-size-x-small); box-shadow:var(--em9-shadow-skim-xs);">Skim (xs)</div>
<div class="shadow-box" style="display: inline-flex; align-items: center; justify-content: center; font-size: var(--em9-font-size-x-small); box-shadow:var(--em9-shadow-hover-sm);">Hover (sm)</div>
<div class="shadow-box" style="display: inline-flex; align-items: center; justify-content: center; font-size: var(--em9-font-size-x-small); box-shadow:var(--em9-shadow-lifted-md);">Lifted (md)</div>
<div class="shadow-box" style="display: inline-flex; align-items: center; justify-content: center; font-size: var(--em9-font-size-x-small); box-shadow:var(--em9-shadow-raised-lg);">Raised (lg)</div>
<div class="shadow-box" style="display: inline-flex; align-items: center; justify-content: center; font-size: var(--em9-font-size-x-small); box-shadow:var(--em9-shadow-floating-xl);">Floating (xl)</div>
<div class="shadow-box" style="display: inline-flex; align-items: center; justify-content: center; font-size: var(--em9-font-size-x-small); box-shadow:var(--em9-shadow-floating-2xl);">Floating (2xl)</div>
<div class="shadow-box" style="display: inline-flex; align-items: center; justify-content: center; font-size: var(--em9-font-size-x-small); box-shadow:var(--em9-shadow-floating-3xl);">Floating (3xl)</div>
<div class="shadow-box" style="display: inline-flex; align-items: center; justify-content: center; font-size: var(--em9-font-size-x-small); box-shadow:var(--em9-shadow-outline);">Outline (3xl)</div>
</div>
```

### Blur Example
```html preview
<div class="blur-wrapper">
	<div class="blur-box light" style="backdrop-filter:var(--em9-blur-xs);"></div>
	<div class="blur-box dark" style="backdrop-filter:var(--em9-blur-xs);"></div>
	<div class="blur-box light" style="backdrop-filter:var(--em9-blur-sm);"></div>
	<div class="blur-box dark" style="backdrop-filter:var(--em9-blur-sm);"></div>
	<div class="blur-box light" style="backdrop-filter:var(--em9-blur-md);"></div>
	<div class="blur-box dark" style="backdrop-filter:var(--em9-blur-md);"></div>
	<div class="blur-box light" style="backdrop-filter:var(--em9-blur-lg);"></div>
	<div class="blur-box dark" style="backdrop-filter:var(--em9-blur-lg);"></div>
</div>
```

<style>
	.shadow-box{margin-right:var(--em9-spacing-5) ;width:var(--em9-spacing-20); height:var(--em9-spacing-20); background:var(--em9-color-white); border-radius:var(--em9-border-radius-large);display:inline-block;}
	.blur-wrapper{background:url("https://w0.peakpx.com/wallpaper/251/299/HD-wallpaper-white-triangle-texture-background-elegant-luxury-pattern-premium.jpg") no-repeat center center;background-size:cover; display:flex;flex-flow:row wrap; justify-content:space-around ; }
	.blur-box{width:46%; height:var(--em9-spacing-20); border-radius:var(--em9-border-radius-lg); margin:var(--em9-spacing-2) 0;}
	.blur-box.dark{background:hsla(217, 23%, 27%, 0.3);}
	.blur-box.light{background:hsla(0, 0%, 100%, 0.3);}
  .code-block__preview {background: var(--em9-color-primary-50);}
</style>



