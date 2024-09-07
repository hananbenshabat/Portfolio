import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr()],
    css: { postcss: { plugins: [tailwindcss()] } },
    build: { outDir: '../dist' }
});
