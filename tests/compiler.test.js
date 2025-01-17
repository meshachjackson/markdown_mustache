// Unit tests for the compiler
import { compileBlocks } from '../src/core/compiler';

test('compiles blocks correctly', () => {
  const config = { blocks: [] };
  expect(() => compileBlocks(config)).not.toThrow();
});
