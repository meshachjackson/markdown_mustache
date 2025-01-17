// compiler.js
import { renderTemplate } from "./mustache.js";

/**
 * Compiles a list of blocks using a configuration object.
 *
 * @param {string[]} blocks - Array of template blocks to compile.
 * @param {object} config - Configuration object with key-value pairs for rendering.
 * @returns {string} - Compiled string.
 */
export const compileBlocks = (blocks, config) => {
  if (!Array.isArray(blocks) || blocks.length === 0) {
    throw new Error("Blocks must be a non-empty array of strings.");
  }
  if (typeof config !== "object" || config === null) {
    throw new Error("Config must be a valid object.");
  }

  return blocks
    .map((block) => {
      if (typeof block !== "string") {
        throw new Error("Each block must be a string.");
      }
      return renderTemplate(block, config) || "";
    })
    .join("\n\n"); // Ensure proper separation between blocks
};
