"use strict";
// @ts-check

import benchmark from "benchmark";
import chalk from "chalk";
import kleur from "kleur";
import {
  blue,
  bgRed,
  bold,
  yellow,
  green,
  red,
  bgCyan,
  bgYellow,
} from "colorette";
import pc from "picocolors";
import c from "ansi-colors";
import colors from "colors/safe.js";
import kulay from "../dist/index.js";

const str = "foobar";

const bench = (name) => {
  console.log(`\n${name}:`);
  const suite = new benchmark.Suite();
  suite
    .on("cycle", (/** @type {{ target: benchmark.Target; }} */ e) =>
      console.log(String(e.target))
    )
    .on("error", (event) => {
      process.stderr.write(kulay.red(event.target.error.toString()) + "\n");
    });
  return suite;
};

process.stdout.write("\x1bc");

bench("Simple")
  .add("  chalk       ", () =>
    chalk.blue.bgRed.bold.green.red.yellow.bgCyan.bgYellow(str)
  )
  .add("+ kulay       ", () =>
    kulay.blue.bgRed.bold.green.red.yellow.bgCyan.bgYellow(str)
  )
  .add("  kleur       ", () =>
    kleur.blue().bgRed().bold().green().red().yellow().bgCyan().bgYellow(str)
  )
  .add("  colors      ", () =>
    colors.blue.bgRed.bold.green.red.yellow.bgCyan.bgYellow(str)
  )
  .add("  ansi-colors ", () =>
    c.blue.bgRed.bold.green.red.yellow.bgCyan.bgYellow(str)
  )
  .add("  picocolors  ", () =>
    pc.bgCyan(
      pc.bgYellow(pc.yellow(pc.red(pc.green(pc.bold(pc.bgRed(pc.blue(str)))))))
    )
  )
  .add("  colorette   ", () =>
    bgCyan(bgYellow(yellow(red(green(bold(bgRed(blue(str))))))))
  )
  .run();
