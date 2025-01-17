const { compileBlocks } = require("../src/core/compiler");

const mockConfig = {
  key1: "value1",
  key2: "value2",
};

test("compiles multiple blocks into a single string", () => {
  const blocks = ["{{key1}}", "{{key2}}"];
  const result = compileBlocks(blocks, mockConfig);
  expect(result).toBe("value1\n\nvalue2\n\n");
});

test("handles empty blocks array", () => {
  const blocks = [];
  const result = compileBlocks(blocks, mockConfig);
  expect(result).toBe("");
});

test("handles missing variables gracefully", () => {
  const blocks = ["{{key1}}", "{{missingKey}}"];
  const result = compileBlocks(blocks, mockConfig);
  expect(result).toBe("value1\n\n\n\n");
});

test("throws error for invalid blocks input", () => {
  expect(() => compileBlocks(null, mockConfig)).toThrow(
    "Blocks must be a non-empty array of strings."
  );
  expect(() => compileBlocks("notAnArray", mockConfig)).toThrow(
    "Blocks must be a non-empty array of strings."
  );
});

test("throws error for invalid config input", () => {
  const blocks = ["{{key1}}"];
  expect(() => compileBlocks(blocks, null)).toThrow(
    "Config must be a valid object."
  );
  expect(() => compileBlocks(blocks, "notAnObject")).toThrow(
    "Config must be a valid object."
  );
});
