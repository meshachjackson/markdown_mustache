// Updated mustache.test.js
const { renderTemplate } = require("../src/core/mustache");

describe("Mustache Wrapper", () => {
  test("renders template with valid data", () => {
    const template = "Hello, {{name}}!";
    const data = { name: "World" };
    const result = renderTemplate(template, data);
    expect(result).toBe("Hello, World!");
  });

  test("throws error for invalid template", () => {
    expect(() => renderTemplate(null, {})).toThrow(
      "Template must be a string."
    );
  });

  test("throws error for invalid data", () => {
    const template = "Hello, {{name}}!";
    expect(() => renderTemplate(template, null)).toThrow(
      "Data must be a valid object."
    );
  });

  test("handles missing variables gracefully", () => {
    const template = "Hello, {{name}}!";
    const data = {};
    const result = renderTemplate(template, data);
    expect(result).toBe("Hello, !");
  });

  test("renders template with multiple variables", () => {
    const template = "Hello, {{firstName}} {{lastName}}!";
    const data = { firstName: "John", lastName: "Doe" };
    const result = renderTemplate(template, data);
    expect(result).toBe("Hello, John Doe!");
  });
});
