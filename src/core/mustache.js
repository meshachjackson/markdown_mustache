// Mustache templating wrapper
import mustache from 'mustache';
export function renderTemplate(template, variables) {
  return mustache.render(template, variables);
}
