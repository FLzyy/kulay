/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { isatty } from "tty";

interface Colors {
  reset: number;
  bold: number;
  dim: number;
  underscore: number;
  blink: number;
  reverse: number;
  hidden: number;
  black: number;
  red: number;
  green: number;
  yellow: number;
  blue: number;
  magenta: number;
  cyan: number;
  white: number;
  blackBright: number;
  gray: number;
  grey: number;
  redBright: number;
  greenBright: number;
  yellowBright: number;
  blueBright: number;
  magentaBright: number;
  cyanBright: number;
  whiteBright: number;
  bgBlack: number;
  bgRed: number;
  bgGreen: number;
  bgYellow: number;
  bgBlue: number;
  bgMagenta: number;
  bgCyan: number;
  bgWhite: number;
  bgBlackBright: number;
  bgGray: number;
  bgGrey: number;
  bgRedBright: number;
  bgGreenBright: number;
  bgYellowBright: number;
  bgBlueBright: number;
  bgMagentaBright: number;
  bgCyanBright: number;
  bgWhiteBright: number;
}

interface Kulay {
  (...text: string[]): string;
  c: string;
  get reset(): this;
  get bold(): this;
  get dim(): this;
  get underscore(): this;
  get blink(): this;
  get reverse(): this;
  get hidden(): this;
  get black(): this;
  get red(): this;
  get green(): this;
  get yellow(): this;
  get blue(): this;
  get magenta(): this;
  get cyan(): this;
  get white(): this;
  get blackBright(): this;
  get gray(): this;
  get grey(): this;
  get redBright(): this;
  get greenBright(): this;
  get yellowBright(): this;
  get blueBright(): this;
  get magentaBright(): this;
  get cyanBright(): this;
  get whiteBright(): this;
  get bgBlack(): this;
  get bgRed(): this;
  get bgGreen(): this;
  get bgYellow(): this;
  get bgBlue(): this;
  get bgMagenta(): this;
  get bgCyan(): this;
  get bgWhite(): this;
  get bgBlackBright(): this;
  get bgGray(): this;
  get bgGrey(): this;
  get bgRedBright(): this;
  get bgGreenBright(): this;
  get bgYellowBright(): this;
  get bgBlueBright(): this;
  get bgMagentaBright(): this;
  get bgCyanBright(): this;
  get bgWhiteBright(): this;
}

const colors: Colors = {
  reset: 0,
  bold: 1,
  dim: 2,
  underscore: 4,
  blink: 5,
  reverse: 7,
  hidden: 8,

  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,

  blackBright: 90,
  gray: 90,
  grey: 90,
  redBright: 91,
  greenBright: 92,
  yellowBright: 93,
  blueBright: 94,
  magentaBright: 95,
  cyanBright: 96,
  whiteBright: 97,

  bgBlack: 40,
  bgRed: 41,
  bgGreen: 42,
  bgYellow: 43,
  bgBlue: 44,
  bgMagenta: 45,
  bgCyan: 46,
  bgWhite: 47,

  bgBlackBright: 100,
  bgGray: 100,
  bgGrey: 100,
  bgRedBright: 101,
  bgGreenBright: 102,
  bgYellowBright: 103,
  bgBlueBright: 104,
  bgMagentaBright: 105,
  bgCyanBright: 106,
  bgWhiteBright: 107,
};

// https://github.com/alexeyraspopov/picocolors/blob/main/picocolors.js
const isColorSupported =
  !("NO_COLOR" in process.env || process.argv.includes("--no-color")) &&
  ("FORCE_COLOR" in process.env ||
    process.argv.includes("--color") ||
    process.platform === "win32" ||
    (isatty(1) && process.env.TERM !== "dumb") ||
    "CI" in process.env);

const kulay = function (...text: unknown[]): string {
  if (kulay.c) {
    const result = `${this.c}${text.join("")}\x1b[0m`;
    kulay.c = "";
    return result;
  } else {
    return `${text.join("")}`;
  }
} as Kulay;
kulay.c = "";

// https://stackoverflow.com/questions/68387483/how-does-nodejs-module-chalks-chaining-syntax-work
for (const [key, value] of Object.entries(colors)) {
  Object.defineProperty(kulay, key, {
    get() {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      this.c += isColorSupported ? `\x1b[${value}m` : "";
      return kulay;
    },
    enumerable: true,
  });
}

export default kulay;
export { Colors, colors, isColorSupported, Kulay, kulay };
