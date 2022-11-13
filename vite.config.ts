/// <reference types="vitest" />

import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/roundDecimal.ts'),
      name: 'roundDecimal',
      formats: ['es', 'cjs', 'umd', 'iife'],
      fileName: 'round-decimal',
    },
  },
  test: {
    coverage: {
      reporter: ['lcov', 'text', 'text-summary'],
    },
  },
});
