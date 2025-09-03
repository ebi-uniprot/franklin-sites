/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'rollup';

import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import svgr from '@svgr/rollup';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  input: 'src/components/index.ts',
  output: {
    file: 'dist/franklin-components.js',
    format: 'es',
    sourcemap: true,
  },
  external: ['react', 'react-dom'],
  plugins: [
    nodeResolve({
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    esbuild({
      sourceMap: true,
      minify: false,
      target: 'es2019',
      jsx: 'automatic',
    }),
    svgr(),
    postcss({
      extract: 'franklin.css',
      sourceMap: true,
      minimize: true,
    }),
    json({
      compact: true,
      namedExports: false,
    }),
    visualizer({
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
      template: 'treemap',
      open: false,
    }),
  ],
});
