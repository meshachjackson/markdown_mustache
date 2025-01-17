import { compileBlocks } from "../src/core/compiler";

test("Example test", () => {
  const result = compileBlocks(["block1", "block2"], {});
  expect(result).toBe("Compiled: block1\nCompiled: block2");
});

test("adds 1 + 2 to equal 3", () => {
  const sum = (a, b) => a + b;
  expect(sum(1, 2)).toBe(3);
});
l