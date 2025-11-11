#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const basePath = '/my-portfolio/storybook';
const iframeHtmlPath = join(__dirname, '../storybook-static/iframe.html');

try {
  let content = readFileSync(iframeHtmlPath, 'utf-8');

  // Fix the vite-inject-mocker-entry.js path
  content = content.replace('src="/vite-inject-mocker-entry.js"', `src="${basePath}/vite-inject-mocker-entry.js"`);

  writeFileSync(iframeHtmlPath, content, 'utf-8');
  console.log('✓ Fixed base path in iframe.html');
} catch (error) {
  console.error('Error fixing base path:', error);
  process.exit(1);
}
