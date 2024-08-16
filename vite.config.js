import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	base: './',
	define: {},
	server: {
		open: false,
		host: true,
		port: 5182,
		watch: {
			usePolling: true,
		},
	},
	publicDir: 'public',
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@layouts': path.resolve(__dirname, './src/layouts'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@routes': path.resolve(__dirname, './src/routes'),
			'@theme': path.resolve(__dirname, './src/theme'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
});
