import { compileBlocks } from "../src/core/compiler.js";

describe("Compiler Module Tests", () => {
  const mockVariables = { name: "World", key1: "Value1" };
  const mockLayout = [
    {
      title: "Introduction",
      subtitle: "Welcome",
      description: "Hello, {{name}}!",
      file: "block1.md",
    },
  ];

  const mockFileSystem = {
    "block1.md": "This is block 1 content.",
  };

  const mockFileReader = async (filePath) => mockFileSystem[filePath];

  test("Compiles multiple blocks into a single string", async () => {
    const result = await compileBlocks(
      mockLayout,
      mockVariables,
      "",
      mockFileReader
    );
    expect(result).toContain("# Introduction\n\n");
    expect(result).toContain("## Welcome\n\n");
    expect(result).toContain("Hello, World!");
    expect(result).toContain("This is block 1 content.");
  });

  test("Handles missing variables gracefully", async () => {
    const incompleteVariables = {};
    const result = await compileBlocks(
      mockLayout,
      incompleteVariables,
      "",
      mockFileReader
    );
    expect(result).toContain("Hello, !");
  });

  test("Throws error for invalid layout input", async () => {
    await expect(compileBlocks(null, mockVariables)).rejects.toThrow(
      "Layout must be an array."
    );
  });
});
