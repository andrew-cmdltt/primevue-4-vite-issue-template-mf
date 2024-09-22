import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  build: { target: 'ES2022' },
  plugins: [
    vue(),
    federation({
      name: 'host-app',
      remotes: {
          remote_app: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: ['vue']
  })
  ],
});
