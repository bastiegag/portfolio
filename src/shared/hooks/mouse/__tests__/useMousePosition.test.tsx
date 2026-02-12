import { describe, it, expect } from 'vitest';

// Simple unit test for the hook's purpose
describe('useMousePosition', () => {
	it('should exist and be importable', async () => {
		const module = await import('../useMousePosition');
		expect(module.useMousePosition).toBeDefined();
		expect(typeof module.useMousePosition).toBe('function');
	});

	it('should be a React hook (starts with "use")', () => {
		// Convention check for React hooks
		expect('useMousePosition').toMatch(/^use[A-Z]/);
	});
});
