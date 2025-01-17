import { compileBlocks } from "../core/compiler.js";
import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { program } from "commander";

program
  .requiredOption("-i, --input <layoutFile>", "Path to the layout JSON file")
  .requiredOption(
    "-c, --config <configFile>",
    "Path to the variables JSON file"
  )
  .requiredOption(
    "-o, --output <outputFile>",
    "Path to the output Markdown file"
  )
  .parse(process.argv);

const options = program.opts();

try {
  const layoutPath = path.resolve(options.input);
  const configPath = path.resolve(options.config);
  const outputPath = path.resolve(options.output);

  const layout = JSON.parse(readFileSync(layoutPath, "utf-8"));
  const config = JSON.parse(readFileSync(configPath, "utf-8"));

  const result = compileBlocks(layout, config, layoutPath);
  writeFileSync(outputPath, result, "utf-8");

  console.log(`Markdown generated successfully at: ${outputPath}`);
} catch (error) {
  console.error("Error:", error.message);
}
