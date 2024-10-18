import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from "@vitejs/plugin-vue";
import path from "path";
import svgLoader from 'vite-svg-loader';

export default defineConfig({
    server: {
        hmr: {
            host: 'localhost'
        }
    },
    plugins: [
        vuePlugin(),
        svgLoader(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/src'),
            '@scss': path.resolve(__dirname, 'resources/js/src/assets/scss'),
            '@uisvg': path.resolve(__dirname, 'resources/js/src/assets/ui/svg')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@scss/main.scss";'
            },
            stylus: {
                additionalData: '@import "@/fonts/inter/stylesheet.css";'
            }
        }
    }
});
