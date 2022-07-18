import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'node_modules/bootstrap/dist/css/bootstrap.css',
                'resources/js/app.js',
                'resources/js/three.js',
            ],
            refresh: true,
        }),
    ],
});
