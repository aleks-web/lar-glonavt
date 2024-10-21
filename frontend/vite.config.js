import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), svgLoader()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
            '@scss': path.resolve(__dirname, './src/assets/scss'),
            '@uisvg': path.resolve(__dirname, './src/assets/ui/svg')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@scss/main.scss";'
            }
        }
    }
})
