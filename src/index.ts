/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { isatty } from "tty";

// https://github.com/alexeyraspopov/picocolors/blob/main/picocolors.js
const supportsColor =
  !("NO_COLOR" in process.env || process.argv.includes("--no-color")) &&
  ("FORCE_COLOR" in process.env ||
    process.argv.includes("--color") ||
    process.platform === "win32" ||
    (isatty(1) && process.env.TERM !== "dumb") ||
    "CI" in process.env);

const colors = {
  reset: 0,
  bold: 1,
  dim: 2,
  italic: 3,
  underline: 4,
  overline: 53,
  blink: 5,
  reverse: 7,
  hidden: 8,
  strikethrough: 9,

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

type Kulay = {
  [key in keyof typeof colors]: Kulay;
} & ((...text: unknown[]) => string);

const createKulay = (supportColor: boolean = supportsColor): Kulay => {
  let c = "";
  const kulay = function (...text: unknown[]): string {
    if (c && supportColor) {
      const result = `${c}${text.join("")}\x1b[0m`;
      c = "";
      return result;
    } else {
      return `${text.join("")}`;
    }
  } as Kulay;

  // https://stackoverflow.com/questions/68387483/how-does-nodejs-module-chalks-chaining-syntax-work
  for (const [key, value] of Object.entries(colors)) {
    Object.defineProperty(kulay, key, {
      get() {
        c += `\x1b[${value}m`;
        return kulay;
      },
    });
  }

  return kulay;
};

export default createKulay();
export { colors, createKulay, Kulay, supportsColor };
