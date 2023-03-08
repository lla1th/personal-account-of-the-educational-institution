/** Vite */
import { defineConfig } from 'vite';

/** Vue */
import vue from '@vitejs/plugin-vue';

/** Quasar */
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

/** path - требуется для упращение импортов элементов */
import path from 'path';

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/assets/sass/main.sass',
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
});
