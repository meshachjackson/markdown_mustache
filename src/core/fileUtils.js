// File handling utilities
import fs from 'fs';
import path from 'path';

export function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

export function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf-8');
}
