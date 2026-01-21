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
		sourcemap: true,
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
					if (id.includes('src/components/Scene/')) return 'scene';
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
			assets: resolve(root, 'assets'),
			components: resolve(root, 'components'),
			context: resolve(root, 'context'),
			hooks: resolve(root, 'hooks'),
			layouts: resolve(root, 'layouts'),
			pages: resolve(root, 'pages'),
			routes: resolve(root, 'routes'),
			theme: resolve(root, 'theme'),
			utils: resolve(root, 'utils'),
		},
	},
});
