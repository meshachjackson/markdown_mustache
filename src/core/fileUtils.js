// fileUtils.js
import fs from "fs/promises";

/**
 * Reads a file and returns its content as a string.
 *
 * @param {string} filePath - Path to the input file.
 * @returns {Promise<string>} - File content.
 */
export const readFileContent = async (filePath) => {
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (err) {
    throw new Error(`Failed to read file: ${err.message}`);
  }
};
/**
 * Writes content to a file.
 *
 * @param {string} filePath - Path to the output file.
 * @param {string} content - Content to write.
 * @returns {Promise<void>}
 */
export const writeFileContent = async (filePath, content) => {
  try {
    await fs.writeFile(filePath, content, "utf-8");
  } catch (err) {
    throw new Error(`Failed to write to file: ${err.message}`);
  }
};
