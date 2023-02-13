# kulay

[![npm version](https://img.shields.io/npm/v/kulay)](https://www.npmjs.com/package/kulay)
[![npm downloads](https://img.shields.io/npm/dw/kulay.svg)](https://www.npmjs.com/package/kulay)
[![CodeFactor](https://www.codefactor.io/repository/github/flzyy/kulay/badge)](https://www.codefactor.io/repository/github/flzyy/kulay)

> Lightweight terminal text styling.

```ts
import kulay from "kulay";

console.log(kulay.bold.blue("I'm bold ", "blue "));
```

## Why kulay?

- 0 dependencies and less than 3 kilobytes unpacked (1.424kb tar and gzipped).
- Simple chainable api.
- Typescript support.

## API

### `kulay.<style>[.<style>...](...string)`

Chainable styles using `getter` style syntax and with the last one being a function that accepts a string or multiple strings. Order does not matter, however if there are conflicting options the last will be used, eg. `kulay.red.yellow.green()` is equivalent to `kulay.green()`

#### Usage

```js
import kulay from "kulay";

kulay.bold.underline.red("Hello World!");
```

### `supportsColor`

A boolean value of whether or not color is supported in the current terminal.

#### Usage

```js
import { isColorSupported } from "kulay";

console.log(isColorSupported); // true or false
```

### `colors`

Corresponding ansi color codes for each color.

#### Usage

```js
import { colors } from "kulay";

console.log(colors);

/**
 * {
 *   reset: 0,
 *   bold: 1,
 *   dim: 2,
 *   underscore: 4,
 *   blink: 5,
 *    ...
 *   bgYellowBright: 103,
 *   bgBlueBright: 104,
 *   bgMagentaBright: 105,
 *   bgCyanBright: 106,
 *   bgWhiteBright: 107,
 * }
 */
```

## Styles

- `reset` - Reset the current style.
- `bold` - Make the text bold.
- `dim` - Make the text have lower opacity.
- `italic` - Make the text italic. (Not widely supported)
- `underline` - Put a horizontal line below the text. (Not widely supported)
- `overline` - Put a horizontal line above the text. (Not widely supported)
- `inverse` - Invert background and foreground colors.
- `hidden` - Print the text but make it invisible.
- `strikethrough` - Puts a horizontal line through the center of the text. (Not widely supported)

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `blackBright` (alias: `gray`, `grey`)
- `redBright`
- `greenBright`
- `yellowBright`
- `blueBright`
- `magentaBright`
- `cyanBright`
- `whiteBright`

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`
- `bgBlackBright` (alias: `bgGray`, `bgGrey`)
- `bgRedBright`
- `bgGreenBright`
- `bgYellowBright`
- `bgBlueBright`
- `bgMagentaBright`
- `bgCyanBright`
- `bgWhiteBright`

## Benchmarks

Simple:

```diff
  chalk        x 4,147,286 ops/sec ±1.95% (85 runs sampled)
+ kulay        x 3,251,276 ops/sec ±1.13% (91 runs sampled)
  kleur        x 1,101,796 ops/sec ±1.96% (89 runs sampled)
  colors       x 176,744 ops/sec ±1.90% (91 runs sampled)
  ansi-colors  x 161,759 ops/sec ±0.62% (94 runs sampled)
  picocolors   x 774,232 ops/sec ±0.61% (94 runs sampled)
  colorette    x 755,651 ops/sec ±0.92% (91 runs sampled)
```

Long String (268435440):

```diff
  chalk        x 34.96 ops/sec ±2.92% (61 runs sampled)
+ kulay        x 3,217,027 ops/sec ±2.20% (86 runs sampled)
  kleur        x 8.70 ops/sec ±4.02% (26 runs sampled)
  colors       x 1.52 ops/sec ±16.64% (9 runs sampled)
  ansi-colors  x 1.58 ops/sec ±16.62% (9 runs sampled)
  picocolors   x 1.85 ops/sec ±8.15% (9 runs sampled)
  colorette    x 2.00 ops/sec ±5.26% (9 runs sampled)
```

Package Size (via `sizet-cli@1.0.8`):

```diff
  chalk@latest:
    ● Tarred and Gzipped: 13.351kb
    ● Unpacked: 43.568kb

+ kulay@latest:
+   ● Tarred and Gzipped: 1.458kb
+   ● Unpacked: 2.905kb

  kleur@latest:
    ● Tarred and Gzipped: 6.154kb
    ● Unpacked: 20.25kb

  colors@latest:
    ● Tarred and Gzipped: 11.181kb
    ● Unpacked: 39.506kb

  ansi-colors@latest:
    ● Tarred and Gzipped: 8.731kb
    ● Unpacked: 26.143kb

  picocolors@latest:
    ● Tarred and Gzipped: 2.41kb
    ● Unpacked: 5.655kb

  colorette@latest:
    ● Tarred and Gzipped: 5.019kb
    ● Unpacked: 16.978kb
```

With the following hardware:

- Processor: _AMD Ryzen 5 3400G with Radeon Vega Graphics_
- Total Physical Memory: _14,246 MB_
- Windows version: _Windows 11 Pro 22H2_
