// config.js
import fs from "fs/promises";

/**
 * Reads a JSON configuration file and parses it into an object.
 *
 * @param {string} filePath - Path to the configuration file.
 * @returns {Promise<object>} - Parsed configuration object.
 */
export const readConfig = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    throw new Error(`Failed to read config file: ${err.message}`);
  }
};
