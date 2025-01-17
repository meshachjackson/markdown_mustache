import { compileBlocks } from "../core/compiler.js";
import { readFileSync } from "fs";
import path from "path";
import { program } from "commander";

program
  .requiredOption("-i, --input <layoutFile>", "Path to the layout JSON file")
  .requiredOption(
    "-c, --config <configFile>",
    "Path to the variables JSON file"
  )
  .parse(process.argv);

const options = program.opts();

try {
  const layoutPath = path.resolve(options.input);
  const configPath = path.resolve(options.config);

  const layout = JSON.parse(readFileSync(layoutPath, "utf-8"));
  const config = JSON.parse(readFileSync(configPath, "utf-8"));

  const layoutDir = path.dirname(layoutPath);
  compileBlocks(layout, config, layoutDir).then((result) => {
    console.log(result);
  });
} catch (error) {
  console.error("Error:", error.message);
}
