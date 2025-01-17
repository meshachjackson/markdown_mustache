import Mustache from "mustache";

/**
 * Renders a template using Mustache with the provided data.
 * @param {string} template - The Mustache template string.
 * @param {object} data - The data object for rendering the template.
 * @returns {string} - Rendered string.
 */
export function renderTemplate(template, data) {
  if (typeof template !== "string") {
    throw new Error("Template must be a string.");
  }
  if (typeof data !== "object" || data === null) {
    throw new Error("Data must be a valid object.");
  }
  return Mustache.render(template, data);
}
