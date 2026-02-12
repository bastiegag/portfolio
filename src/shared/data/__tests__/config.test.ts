import { describe, it, expect } from 'vitest';
import config from '../config';

describe('config', () => {
	it('should have required scene dimensions', () => {
		expect(config.sceneWidth).toBeDefined();
		expect(config.sceneHeight).toBeDefined();
		expect(typeof config.sceneWidth).toBe('number');
		expect(typeof config.sceneHeight).toBe('number');
		expect(config.sceneWidth).toBeGreaterThan(0);
		expect(config.sceneHeight).toBeGreaterThan(0);
	});

	it('should have boolean feature flags', () => {
		expect(typeof config.parallaxEnabled).toBe('boolean');
		expect(typeof config.cursorEnabled).toBe('boolean');
	});

	it('should have valid email format', () => {
		expect(config.mail).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
	});

	it('should have valid URLs for social links', () => {
		const urlFields = ['github', 'linkedin'];

		urlFields.forEach((field) => {
			const url = config[field as keyof typeof config];
			expect(url).toBeDefined();
			expect(typeof url).toBe('string');
			expect(url).toMatch(/^https?:\/\/.+/);
		});
	});

	it('should have positive clouds speed', () => {
		expect(config.cloudsSpeed).toBeGreaterThan(0);
	});
});
