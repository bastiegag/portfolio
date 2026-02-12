import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');

export default defineConfig({
	base: './',
	define: {},
	server: {
		open: true,
		host: true,
		port: 5182,
		watch: {
			usePolling: true,
		},
	},
	build: {
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('src/hooks')) return 'hooks';
					if (
						id.includes('node_modules/react') ||
						id.includes('node_modules/react-dom') ||
						id.includes('node_modules/@mui/')
					) {
						return 'vendor';
					}
					// Scene feature modules
					if (
						id.includes('src/features/scene-island/') ||
						id.includes('src/features/scene-environment/') ||
						id.includes('src/features/scene-interactive/') ||
						id.includes('src/shared/components/Scene/')
					) {
						return 'scene';
					}
					if (id.includes('node_modules/gsap')) return 'gsap';
				},
			},
		},
		chunkSizeWarningLimit: 1024, // Suppress warning for large vendor chunk
	},
	publicDir: 'public',
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(root, ''),
			'@assets': resolve(root, 'assets'),
			'@core': resolve(root, 'core'),
			'@features': resolve(root, 'features'),
			'@shared': resolve(root, 'shared'),
			'@tests': resolve(root, '__tests__'),
		},
	},
});
