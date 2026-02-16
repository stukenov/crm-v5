import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/scripts/main.tsx'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@Components': path.resolve(__dirname, './resources/components'),
        }
    }
});
