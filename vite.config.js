import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';

export default defineConfig(({ mode }) => {
    return {
        base: mode === 'production' ? '/krds_test_vite/' : '/',
        plugins: [
            react(),
            AutoImport({
                imports: ['react'],
                dts: true
            })
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    }
});
