/**
 * Sample test data for components
 * Use this for consistent test data across test files
 */

/**
 * Sample palm tree positions for testing
 */
export const mockPalmTreeData = [
	{
		id: 'palm-1',
		x: 100,
		y: 200,
		scale: 1,
		variant: 1,
		depth: 0.5,
	},
	{
		id: 'palm-2',
		x: 300,
		y: 250,
		scale: 0.8,
		variant: 2,
		depth: 0.3,
	},
];

/**
 * Sample rock positions for testing
 */
export const mockRockData = [
	{
		id: 'rock-1',
		x: 150,
		y: 180,
		scale: 1.2,
		variant: 1,
		depth: 0.4,
	},
	{
		id: 'rock-2',
		x: 400,
		y: 220,
		scale: 0.9,
		variant: 2,
		depth: 0.6,
	},
];

/**
 * Sample cloud data for testing
 */
export const mockCloudData = [
	{
		id: 'cloud-1',
		x: 50,
		y: 50,
		scale: 1,
		variant: 1,
		speed: 0.5,
	},
	{
		id: 'cloud-2',
		x: 400,
		y: 100,
		scale: 0.8,
		variant: 2,
		speed: 0.3,
	},
];

/**
 * Sample foliage data for testing
 */
export const mockFoliageData = [
	{
		id: 'grass-1',
		type: 'grass' as const,
		x: 200,
		y: 300,
		scale: 1,
		variant: 1,
	},
	{
		id: 'plant-1',
		type: 'plant' as const,
		x: 250,
		y: 280,
		scale: 0.9,
		variant: 2,
	},
];

/**
 * Sample config for testing
 */
export const mockConfig = {
	sceneWidth: 800,
	sceneHeight: 600,
	parallaxEnabled: true,
	cursorEnabled: true,
	cloudsSpeed: 0.5,
	mail: 'test@example.com',
	github: 'https://github.com/test',
	vimeo: 'https://vimeo.com/test',
	instagram: 'https://instagram.com/test',
	linkedin: 'https://linkedin.com/in/test',
};

/**
 * Sample mouse position for testing
 */
export const mockMousePosition = {
	x: 400,
	y: 300,
};

/**
 * Sample parallax offset calculation
 */
export const calculateMockParallaxOffset = (
	depth: number,
	mouseX: number,
	mouseY: number,
	centerX: number = 400,
	centerY: number = 300,
) => {
	const deltaX = mouseX - centerX;
	const deltaY = mouseY - centerY;
	return {
		x: deltaX * depth * 0.05,
		y: deltaY * depth * 0.05,
	};
};

/**
 * Sample SVG path for testing
 */
export const mockSvgPath = 'M10 10 L20 20 L30 10 Z';

/**
 * Mock navigation items
 */
export const mockNavigationItems = [
	{ label: 'Home', href: '/', external: false },
	{ label: 'About', href: '/about', external: false },
	{ label: 'GitHub', href: 'https://github.com/test', external: true },
];

/**
 * Mock theme colors
 */
export const mockThemeColors = {
	day: {
		primary: '#000000',
		secondary: '#ffffff',
		background: '#f5f5f5',
	},
	night: {
		primary: '#ffffff',
		secondary: '#000000',
		background: '#1a1a1a',
	},
};
