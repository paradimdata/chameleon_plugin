import { resolve } from 'path';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';
import { compileClient } from 'pug';
import inject from '@rollup/plugin-inject';

function pugPlugin() {
  return {
    name: 'pug',
    transform(src: string, id: string) {
      if (id.endsWith('.pug')) {
        return {
          code: `${compileClient(src, { filename: id })}\nexport default template`,
          map: null,
        };
      }
    },
  };
}

export default defineConfig({
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    pugPlugin(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'test/'],
      extension: ['.js', '.ts', '.vue'],
    }),
  ],
  optimizeDeps: {
    include: ['jquery'],
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'main.js'),
      name: 'GirderPluginChameleon',
      fileName: (format) =>
        format === 'umd' ? 'girder-plugin-chameleon.umd.cjs' : 'girder-plugin-chameleon',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      output: {
        globals: {
          '@girder/core': 'girder.core'
        }
      },
      external: ['@girder/core']
    }
  }
});

