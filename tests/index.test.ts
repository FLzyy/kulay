import { describe, it } from "node:test";
import { equal } from "node:assert/strict";
import kulay, { colors } from "../src/index.js";

const text = ["Hello World", "!"];

describe("kulay", () => {
  it("should return colorless when called directly", () => {
    equal(kulay(...text), `${text.join()}`);
  });
  for (const [key, value] of Object.entries(colors)) {
    it(`${key} === \\x1b[${value as number}m${text.join("")}\\x1b[0m`, () => {
      equal(
        kulay[key](...text),
        `\x1b[${value as number}m${text.join("")}\x1b[0m`
      );
    });
  }
});
