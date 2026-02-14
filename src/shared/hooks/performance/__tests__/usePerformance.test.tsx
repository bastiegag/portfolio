import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import {
	useRenderPerformance,
	usePerformanceMarker,
	useLongTaskDetector,
} from '../usePerformance';

describe('useRenderPerformance', () => {
	beforeEach(() => {
		vi.spyOn(console, 'log').mockImplementation(() => {});
	});

	it('should track component renders', () => {
		const { rerender, unmount } = renderHook(() =>
			useRenderPerformance('TestComponent'),
		);

		// Re-render
		rerender();
		rerender();

		unmount();

		// Should have logged mount and unmount
		expect(console.log).toHaveBeenCalled();
	});
});

describe('usePerformanceMarker', () => {
	beforeEach(() => {
		vi.spyOn(console, 'log').mockImplementation(() => {});
	});

	it('should create performance markers', () => {
		const markSpy = vi.spyOn(performance, 'mark');
		const { result } = renderHook(() => usePerformanceMarker());

		result.current.mark('test-mark');
		expect(markSpy).toHaveBeenCalledWith('test-mark');

		markSpy.mockRestore();
	});

	it('should measure performance', () => {
		const measureSpy = vi
			.spyOn(performance, 'measure')
			.mockReturnValue({ duration: 100 } as PerformanceMeasure);
		const { result } = renderHook(() => usePerformanceMarker());

		const duration = result.current.measure('test-measure', 'start-mark');
		expect(measureSpy).toHaveBeenCalledWith(
			'test-measure',
			'start-mark',
			undefined,
		);
		expect(duration).toBe(100);

		measureSpy.mockRestore();
	});

	it('should handle measure errors gracefully', () => {
		const measureSpy = vi
			.spyOn(performance, 'measure')
			.mockImplementation(() => {
				throw new Error('Invalid mark');
			});

		const { result } = renderHook(() => usePerformanceMarker());

		const duration = result.current.measure('test-measure', 'invalid-mark');
		expect(duration).toBe(0);

		measureSpy.mockRestore();
	});
});

describe('useLongTaskDetector', () => {
	it('should initialize without errors', () => {
		const { result } = renderHook(() => useLongTaskDetector());
		expect(result.current).toBeUndefined();
	});

	it('should accept custom threshold', () => {
		const onLongTask = vi.fn();
		expect(() => {
			renderHook(() =>
				useLongTaskDetector({ threshold: 100, onLongTask }),
			);
		}).not.toThrow();
	});
});
