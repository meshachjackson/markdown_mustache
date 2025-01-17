const Mustache = require("mustache");

/**
 * Renders a template string with the provided data using Mustache.
 *
 * @param {string} template - The Mustache template string.
 * @param {object} data - The data object to inject into the template.
 * @returns {string} - The rendered template.
 * @throws {Error} - If the template or data is invalid.
 *
 * @example
 * const template = "Hello, {{name}}!";
 * const data = { name: "World" };
 * console.log(renderTemplate(template, data)); // Output: "Hello, World!"
 */
const renderTemplate = (template, data) => {
  if (typeof template !== "string") {
    throw new Error("Template must be a string.");
  }
  if (typeof data !== "object" || data === null) {
    throw new Error("Data must be a valid object.");
  }

  try {
    return Mustache.render(template, data);
  } catch (err) {
    throw new Error(`Failed to render template: ${err.message}`);
  }
};

module.exports = { renderTemplate };
