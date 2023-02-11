import { describe, it } from "node:test";
import { equal } from "node:assert/strict";
import { colors, createKulay } from "../src/index.js";

const text = ["Hello World", "!"];
const kulay = createKulay(true);
const kulayNoColor = createKulay(false);

describe("kulay", () => {
  it("should return colorless when called directly", () => {
    equal(kulay(...text), `${text.join("")}`);
  });
  for (const [key, value] of Object.entries(colors)) {
    it(`${key} === \x1b[${value}m${text.join("")}\x1b[0m`, () => {
      equal(
        kulay[key](...text),
        `\x1b[${value}m${text.join("")}\x1b[0m`,
      );
    });
  }
});

describe("kulayNoColor", () => {
  it("should return colorless when called directly", () => {
    equal(kulayNoColor(...text), `${text.join("")}`);
  });
  for (const [key] of Object.entries(colors)) {
    it(`${key} === ${text.join("")}`, () => {
      equal(
        kulayNoColor[key](...text),
        `${text.join("")}`,
      );
    });
  }
});
