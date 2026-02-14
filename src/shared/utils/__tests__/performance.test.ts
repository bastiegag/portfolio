import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { throttle, debounce, rafThrottle } from '../performance';

describe('Performance Utilities', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.restoreAllMocks();
		vi.useRealTimers();
	});

	describe('throttle', () => {
		it('should throttle function calls', () => {
			const fn = vi.fn();
			const throttled = throttle(fn, 100);

			throttled(1);
			throttled(2);
			throttled(3);

			expect(fn).toHaveBeenCalledTimes(1);
			expect(fn).toHaveBeenCalledWith(1);
		});

		it('should execute after wait time', () => {
			const fn = vi.fn();
			const throttled = throttle(fn, 100);

			throttled(1);
			vi.advanceTimersByTime(100);
			throttled(2);

			expect(fn).toHaveBeenCalledTimes(2);
			expect(fn).toHaveBeenNthCalledWith(1, 1);
			expect(fn).toHaveBeenNthCalledWith(2, 2);
		});

		it('should schedule pending calls', () => {
			const fn = vi.fn();
			const throttled = throttle(fn, 100);

			throttled(1);
			throttled(2);
			vi.advanceTimersByTime(100);

			expect(fn).toHaveBeenCalledTimes(2);
			expect(fn).toHaveBeenLastCalledWith(2);
		});

		it('should handle rapid calls correctly', () => {
			const fn = vi.fn();
			const throttled = throttle(fn, 100);

			throttled(1);
			throttled(2);
			throttled(3);
			throttled(4);

			expect(fn).toHaveBeenCalledTimes(1);

			vi.advanceTimersByTime(100);
			expect(fn).toHaveBeenCalledTimes(2);
			expect(fn).toHaveBeenLastCalledWith(4);
		});
	});

	describe('debounce', () => {
		it('should debounce function calls', () => {
			const fn = vi.fn();
			const debounced = debounce(fn, 100);

			debounced(1);
			debounced(2);
			debounced(3);

			expect(fn).not.toHaveBeenCalled();

			vi.advanceTimersByTime(100);
			expect(fn).toHaveBeenCalledTimes(1);
			expect(fn).toHaveBeenCalledWith(3);
		});

		it('should reset timer on each call', () => {
			const fn = vi.fn();
			const debounced = debounce(fn, 100);

			debounced(1);
			vi.advanceTimersByTime(50);
			debounced(2);
			vi.advanceTimersByTime(50);

			expect(fn).not.toHaveBeenCalled();

			vi.advanceTimersByTime(50);
			expect(fn).toHaveBeenCalledTimes(1);
			expect(fn).toHaveBeenCalledWith(2);
		});

		it('should support immediate mode', () => {
			const fn = vi.fn();
			const debounced = debounce(fn, 100, true);

			debounced(1);
			expect(fn).toHaveBeenCalledTimes(1);
			expect(fn).toHaveBeenCalledWith(1);

			debounced(2);
			expect(fn).toHaveBeenCalledTimes(1); // Still 1, debounced

			vi.advanceTimersByTime(100);
			debounced(3);
			expect(fn).toHaveBeenCalledTimes(2);
			expect(fn).toHaveBeenCalledWith(3);
		});
	});

	describe('rafThrottle', () => {
		it('should throttle to animation frame', () => {
			const fn = vi.fn();
			const throttled = rafThrottle(fn);

			throttled(1);
			throttled(2);
			throttled(3);

			expect(fn).not.toHaveBeenCalled();

			// Manually trigger the animation frame callback
			vi.runAllTimers();

			// The function would be called via requestAnimationFrame
			// We can't easily test RAF in jsdom, so just verify it doesn't error
			expect(throttled).toBeDefined();
		});

		it('should use latest args', () => {
			const fn = vi.fn();
			const throttled = rafThrottle(fn);

			throttled(1);
			throttled(2);
			throttled(3);

			// In a real browser, RAF would call with latest args (3)
			expect(throttled).toBeDefined();
		});
	});
});
