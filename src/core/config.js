// Configuration loader and validator
import fs from 'fs';

export function loadConfig(configPath) {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  validateConfig(config);
  return config;
}

function validateConfig(config) {
  if (!config.blocks) {
    throw new Error("Invalid configuration: 'blocks' is required");
  }
}
