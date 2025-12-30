import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setup.ts',
		css: true,
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			exclude: [
				'node_modules/',
				'src/test/',
				'**/*.d.ts',
				'**/*.config.*',
				'**/mockData',
				'**/types',
			],
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			assets: path.resolve(__dirname, './src/assets'),
			components: path.resolve(__dirname, './src/components'),
			context: path.resolve(__dirname, './src/context'),
			hooks: path.resolve(__dirname, './src/hooks'),
			layouts: path.resolve(__dirname, './src/layouts'),
			pages: path.resolve(__dirname, './src/pages'),
			routes: path.resolve(__dirname, './src/routes'),
			theme: path.resolve(__dirname, './src/theme'),
			utils: path.resolve(__dirname, './src/utils'),
		},
	},
});
