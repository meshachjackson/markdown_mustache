import path from "path";
import { renderTemplate } from "./mustache.js";

/**
 * Compiles layout into a markdown string.
 * @param {object[]} layout - Layout configuration.
 * @param {object} config - Variables for rendering.
 * @param {string} layoutDir - Directory containing the layout-related files.
 * @returns {string} - Compiled markdown string.
 */
export async function compileBlocks(layout, config, layoutDir = "") {
  if (!Array.isArray(layout)) {
    throw new Error("Layout must be an array.");
  }
  if (typeof config !== "object" || config === null) {
    throw new Error("Config must be a valid object.");
  }

  const compiledSections = await Promise.all(
    layout.map(async (section) => {
      const title = section.title ? `# ${section.title}\n\n` : "";
      const subtitle = section.subtitle ? `## ${section.subtitle}\n\n` : "";
      const description = section.description
        ? `${renderTemplate(section.description, config)}\n\n`
        : "";
      const fileContent = section.file
        ? await fs.readFile(path.resolve(layoutDir, section.file), "utf-8")
        : "";

      return title + subtitle + description + fileContent;
    })
  );

  return compiledSections.join("\n\n");
}
