import Mustache from "mustache";

/**
 * Compiles a template string with the given variables.
 *
 * @param {string} template - The template string containing Mustache variables.
 * @param {Object} variables - The object containing variables for Mustache.
 * @returns {string} - The compiled template string.
 */
export function compileTemplate(template, variables) {
  return Mustache.render(template, variables);
}
