import { describe, it, expect } from 'vitest';

// Simple integration test for Main layout
describe('Main', () => {
	it('should exist and be importable', async () => {
		const module = await import('../Main');
		expect(module.Main).toBeDefined();
		expect(typeof module.Main).toBe('function');
	});

	it('should be a valid React component', async () => {
		const module = await import('../Main');
		const Component = module.Main;
		expect(typeof Component).toBe('function');
	});
});
