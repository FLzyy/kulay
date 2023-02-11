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

- 0 dependencies and less than 4 kilobytes.
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

### `isColorSupported`

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
- `inverse`- Invert background and foreground colors.
- `hidden` - Print the text but make it invisible.
- `strikethrough` - Puts a horizontal line through the center of the text. (Not widely supported)
- `visible`- Print the text only when Chalk has a color level above zero. Can be useful for things that are purely cosmetic.

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

```
Benchmark (268435440 string length):
chalk        x 27.90 ops/sec ±4.57% (49 runs sampled)
kulay        x 2,782,473 ops/sec ±2.07% (86 runs sampled)
kleur        x 7.12 ops/sec ±2.14% (22 runs sampled)
colors       x 1.57 ops/sec ±5.67% (8 runs sampled)
ansi-colors  x 1.33 ops/sec ±6.11% (8 runs sampled)
picocolors   x 1.59 ops/sec ±12.56% (8 runs sampled)
colorette    x 1.57 ops/sec ±13.40% (9 runs sampled)
```

With the following hardware:

- Processor: _AMD Ryzen 5 3400G with Radeon Vega Graphics_
- Total Physical Memory: _14,246 MB_
- Windows version: _Windows 11 Pro 22H2_
