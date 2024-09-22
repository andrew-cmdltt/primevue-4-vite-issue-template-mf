import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  build: { target: 'ES2022' },
  plugins: [
    vue(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      exposes: {
        './app': './src/ServiceBootloader.js',
      },
      shared: ['vue'],
    }),
  ],
});
