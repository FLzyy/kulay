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

type Kulay =
  & {
    [key in keyof typeof colors]: Kulay;
  }
  & {
    (...text: unknown[]): string;
    c: string;
  };

const createKulay = (supportsColor: boolean): Kulay => {
  const kulay = function (...text: unknown[]): string {
    if (kulay.c) {
      const result = `${kulay.c}${text.join("")}\x1b[0m`;
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
        kulay.c += supportsColor ? `\x1b[${value}m` : "";
        return kulay;
      },
    });
  }

  return kulay;
};

const kulay = createKulay(supportsColor);

export default kulay;
export { colors, createKulay, Kulay, kulay, supportsColor };
