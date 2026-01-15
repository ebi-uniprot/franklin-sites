/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  // This whole block can be removed once we move away from Sass
  css: {
    preprocessorOptions: {
      scss: {
        // Silence specific Sass deprecations
        silenceDeprecations: ['import', 'global-builtin', 'if-function'],
      },
    },
  },

  // Only build-specific options are needed since we use this for library build
  build: {
    lib: {
      entry: 'src/components/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format: string) => `franklin-components.${format}.js`,
      cssFileName: 'franklin',
    },
    outDir: 'dist',
    sourcemap: true,
    target: 'es2019',
    minify: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      plugins: [
        visualizer({
          filename: 'dist/stats.html',
          template: 'treemap',
          gzipSize: true,
          brotliSize: true,
          open: false,
        }),
      ],
    },
  },
  plugins: [react(), svgrPlugin({ include: '**/*.svg' })],
});
