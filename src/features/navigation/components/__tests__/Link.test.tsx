import { describe, it, expect } from 'vitest';

// Simple unit test for the component
describe('Link', () => {
	it('should exist and be importable', async () => {
		const module = await import('../Link');
		expect(module.Link).toBeDefined();
		expect(typeof module.Link).toBe('function');
	});

	it('should be a valid React component', async () => {
		const module = await import('../Link');
		const Component = module.Link;
		// Check it's a function (functional component)
		expect(typeof Component).toBe('function');
	});
});
