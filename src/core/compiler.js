import { readFileSync } from "fs";
import path from "path";
import { compileTemplate } from "./mustache.js";

/**
 * Compiles a list of blocks into a single markdown string.
 *
 * @param {Array} layout - The layout configuration defining block structure.
 * @param {Object} config - The variables for mustache templates.
 * @param {string} layoutFilePath - The file path of the layout JSON file.
 * @returns {string} - The compiled markdown string.
 */
export function compileBlocks(layout, config, layoutFilePath) {
  console.log("Compiling layout:", layout);

  // Resolve the directory of the layout file
  const layoutDir = path.dirname(layoutFilePath);

  return layout
    .map((section) => {
      let output = "";

      if (section.title) {
        output += `# ${section.title}\n\n`;
      }
      if (section.subtitle) {
        output += `## ${section.subtitle}\n\n`;
      }
      if (section.description) {
        output += `${section.description}\n\n`;
      }
      if (section.file) {
        const filePath = path.resolve(layoutDir, section.file);
        const fileContent = readFileSync(filePath, "utf-8");
        output += `${compileTemplate(fileContent, config)}\n\n`;
      }

      return output;
    })
    .join("");
}
