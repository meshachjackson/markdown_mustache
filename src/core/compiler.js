const { renderTemplate } = require("./mustache");

/**
 * Compiles an array of blocks with a provided configuration.
 *
 * @param {string[]} blocks - Array of block templates to compile.
 * @param {object} config - Configuration object for Mustache placeholders.
 * @returns {string} - Compiled blocks joined as a single string.
 */
function compileBlocks(blocks, config) {
  if (!Array.isArray(blocks)) {
    throw new Error("Blocks must be a non-empty array of strings.");
  }
  if (blocks.length === 0) {
    return ""; // Return empty string for empty blocks array
  }
  if (typeof config !== "object" || config === null) {
    throw new Error("Config must be a valid object.");
  }

  console.log("Compiling blocks with config:", blocks);

  return (
    blocks
      .map((block) => {
        if (typeof block !== "string") {
          throw new Error("Each block must be a string.");
        }
        // Render the block and ensure undefined/null is converted to an empty string
        return renderTemplate(block, config) || "";
      })
      .join("\n\n") + "\n\n"
  ); // Ensure proper separation between blocks and append trailing newline
}

module.exports = { compileBlocks };
