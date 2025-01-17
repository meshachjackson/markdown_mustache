// CLI Script
import { program } from "commander";
import { compileBlocks } from "../core/compiler.js";
import { readConfig } from "../core/config.js";
import { readFileContent, writeFileContent } from "../core/fileUtils.js";

program
  .option("-i, --input <path>", "Input file path")
  .option("-c, --config <path>", "Configuration file path")
  .option("-o, --output <path>", "Output file path")
  .action(async (options) => {
    const { input, config, output } = options;

    try {
      const inputBlocks = (await readFileContent(input)).split("\n\n");
      const configData = await readConfig(config);
      const compiled = compileBlocks(inputBlocks, configData);
      await writeFileContent(output, compiled);

      console.log(`Compiled output written to ${output}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  });

program.parse(process.argv);
