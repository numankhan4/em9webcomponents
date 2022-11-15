# Typography Tokens

Typography tokens are used to maintain a consistent set of font styles throughout your app.

## Font Family

The default font stack is designed to be simple and highly available on as many devices as possible.

| Token             | Value                                                                                                                                         | Example                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `--em9-font-sans`  |  Helvetica | <span style="font-family: var(--em9-font-sans)">The quick brown fox jumped over the lazy dog.</span>  |
| `--em9-font-serif` | Georgia, 'Times New Roman', serif                                                                                                             | <span style="font-family: var(--em9-font-serif)">The quick brown fox jumped over the lazy dog.</span> |
| `--em9-font-mono`  | Menlo, Monaco, 'Courier New', monospace                                                                                                       | <span style="font-family: var(--em9-font-mono)">The quick brown fox jumped over the lazy dog.</span>  |

## Font Size Display

Font sizes use `rem` units so they scale with the base font size. The pixel values displayed are based on a 16px font size.

| Token                     | Value           | Example                                                                                                                                                                                                                                                                                                                                     |
| ------------------------- | --------------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--em9-font-size-display-2xl` | 4.5rem (72px) | <span style="line-height: calc(var(--em9-spacing-20) + var(--em9-spacing-2-5));font-size: var(--em9-font-size-display-2xl)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span> |
| `--em9-font-size-display-xl`  | 3.75rem (60px)  | <span style="line-height:var(--em9-spacing-18);font-size: var(--em9-font-size-display-xl)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                                  |
| `--em9-font-size-display-lg`    | 3rem (48px) | <span style="line-height:var(--em9-spacing-15);font-size: var(--em9-font-size-display-lg)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                                  |
| `--em9-font-size-display-md`   | 2.25rem (36px)     | <span style="line-height:var(--em9-spacing-11); font-size: var(--em9-font-size-display-md)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                                 |
| `--em9-font-size-display-mds`   | 2rem (32px)     | <span style="line-height:var(--em9-spacing-10); font-size: var(--em9-font-size-display-mds)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                                |
| `--em9-font-size-display-sm`    | 1.875rem (30px)  | <span style="line-height: calc(var(--em9-spacing-9) + var(--em9-spacing-0-5)); font-size: var(--em9-font-size-display-sm)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>  |
| `--em9-font-size-display-smd`  | 1.75rem (28px)   | <span style="line-height:var(--em9-spacing-9); font-size: var(--em9-font-size-display-smd)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                                 |
| `--em9-font-size-display-smm` | 1.625rem (26px)  | <span style="line-height:var(--em9-spacing-8);font-size: var(--em9-font-size-display-smm)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                                  |
| `--em9-font-size-display-xs` | 1.5rem (24px)     | <span style="line-height:var(--em9-spacing-8); font-size: var(--em9-font-size-display-xs)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                                  |
| `--em9-font-size-display-xss` | 1.375rem (22px)   | <span style="line-height:var(--em9-spacing-7); font-size: var(--em9-font-size-display-xss)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                                 |



## Font Size Text

Font sizes use `rem` units so they scale with the base font size. The pixel values displayed are based on a 16px font size.

| Token                       | Value           | Example                                                                                                                                                                                                                                                                                                                                 |
|-----------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--em9-font-size-text-xxxl` | 1.5rem (24px)   | <span style="line-height: var(--em9-spacing-7); font-size: var(--em9-font-size-text-xxxl)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                              |
| `--em9-font-size-text-xxl`  | 1.375rem (22px) | <span style="line-height: var(--em9-spacing-7); font-size: var(--em9-font-size-text-xxl)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                               |
| `--em9-font-size-text-xl`   | 1.25rem (20px)  | <span style="line-height: var(--em9-spacing-7); font-size: var(--em9-font-size-text-xl)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                                |
| `--em9-font-size-text-lg`   | 1.125rem (18px) | <span style="line-height: calc(var(--em9-spacing-6) + 2px); font-size: var(--em9-font-size-text-lg)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                    |
| `--em9-font-size-text-md`   | 1rem (16px)     | <span style="line-height: var(--em9-spacing-6); font-size: var(--em9-font-size-text-md)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                                |
| `--em9-font-size-text-sm`   | 0.875 (14px)    | <span style="line-height: calc(var(--em9-spacing-6) + var(--em9-spacing-0-5)); font-size: var(--em9-font-size-text-sm)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span> |
| `--em9-font-size-text-xs`   | 0.875rem (12px) | <span style="line-height: var(--em9-spacing-5); font-size: var(--em9-font-size-text-xs)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                                |
| `--em9-font-size-text-xxs`  | 0.625rem (10px) | <span style="line-height: var(--em9-spacing-5); font-size: var(--em9-font-size-text-xxs)"><span style="font-weight: var(--em9-font-weight-normal) ">D</span> <span style="font-weight: var(--em9-font-weight-semibold) ">S</span> <span style="font-weight: var(--em9-font-weight-bold) ">M</span></span>                               |



## Font Weight

| Token                       | Value | Example                                                                                                         |
| --------------------------- | ----- | --------------------------------------------------------------------------------------------------------------- |
| `--em9-font-weight-light`    | 300   | <span style="font-weight: var(--em9-font-weight-light);">The quick brown fox jumped over the lazy dog.</span>    |
| `--em9-font-weight-normal`   | 400   | <span style="font-weight: var(--em9-font-weight-normal);">The quick brown fox jumped over the lazy dog.</span>   |
| `--em9-font-weight-semibold` | 500   | <span style="font-weight: var(--em9-font-weight-semibold);">The quick brown fox jumped over the lazy dog.</span> |
| `--em9-font-weight-bold`     | 700   | <span style="font-weight: var(--em9-font-weight-bold);">The quick brown fox jumped over the lazy dog.</span>     |

## Letter Spacing

| Token                        | Value    | Example                                                                                                             |
| ---------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| `--em9-letter-spacing-denser` | ?        | <span style="letter-spacing: var(--em9-letter-spacing-denser);">The quick brown fox jumped over the lazy dog.</span> |
| `--em9-letter-spacing-dense`  | -0.015em | <span style="letter-spacing: var(--em9-letter-spacing-dense);">The quick brown fox jumped over the lazy dog.</span>  |
| `--em9-letter-spacing-normal` | normal   | <span style="letter-spacing: var(--em9-letter-spacing-normal);">The quick brown fox jumped over the lazy dog.</span> |
| `--em9-letter-spacing-loose`  | 0.075em  | <span style="letter-spacing: var(--em9-letter-spacing-loose);">The quick brown fox jumped over the lazy dog.</span>  |
| `--em9-letter-spacing-looser` | ?        | <span style="letter-spacing: var(--em9-letter-spacing-looser);">The quick brown fox jumped over the lazy dog.</span> |

## Line Height

| Token                     | Value | Example                                                                                                                                                                                                       |
| ------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--em9-line-height-denser` | ?     | <div style="line-height: var(--em9-line-height-denser);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
| `--em9-line-height-dense`  | 1.4   | <div style="line-height: var(--em9-line-height-dense);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
| `--em9-line-height-normal` | 1.8   | <div style="line-height: var(--em9-line-height-normal);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
| `--em9-line-height-loose`  | 2.2   | <div style="line-height: var(--em9-line-height-loose);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
| `--em9-line-height-looser` | ?     | <div style="line-height: var(--em9-line-height-looser);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
