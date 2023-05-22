import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { fileURLToPath, URL } from 'url';

export default defineConfig({
    resolve: {
        alias: {
            vue: '@vue/compat', '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    }, plugins: [vue()],
});
