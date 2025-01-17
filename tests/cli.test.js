import { execSync } from "child_process";

describe("CLI Tests", () => {
  test("Generates markdown output from input and config", () => {
    const layout = JSON.stringify([
      {
        title: "Test Title",
        subtitle: "Test Subtitle",
        description: "Hello, {{name}}!",
      },
    ]);
    const config = JSON.stringify({ name: "World" });

    const result = execSync(
      `node src/cli/index.js -i ${JSON.stringify(layout)} -c ${JSON.stringify(
        config
      )}`,
      { encoding: "utf-8" }
    );

    expect(result).toContain("# Test Title");
    expect(result).toContain("## Test Subtitle");
    expect(result).toContain("Hello, World!");
  });
});
