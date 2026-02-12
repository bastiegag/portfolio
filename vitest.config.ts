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
			'@assets': path.resolve(__dirname, './src/assets'),
			'@core': path.resolve(__dirname, './src/core'),
			'@features': path.resolve(__dirname, './src/features'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@tests': path.resolve(__dirname, './src/__tests__'),
		},
	},
});
