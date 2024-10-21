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
            '@less': path.resolve(__dirname, './src/assets/less'),
            '@uisvg': path.resolve(__dirname, './src/assets/ui/svg')
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                additionalData: '@import "@less/main.less";'
            }
        }
    }
})
