import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  build: { target: 'ES2022' },
  plugins: [
    vue(),
    federation({
      name: 'app',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './app': './src/ServiceBootloader.js',
      },
      shared: ['vue'],
    }),
  ],
});
