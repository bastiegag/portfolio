/**
 * Performance Monitoring Utilities
 * General performance tracking and profiling for React components
 */
import { useEffect, useRef, useCallback } from 'react';

export interface PerformanceMarkerOptions {
	/** Name of the performance marker */
	name: string;
	/** Optional metadata */
	metadata?: Record<string, unknown>;
}

/**
 * Hook to measure component render performance
 * Tracks mount, update, and unmount times
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   useRenderPerformance('MyComponent');
 *   return <div>...</div>;
 * }
 * ```
 */
export function useRenderPerformance(componentName: string) {
	const renderCountRef = useRef(0);
	const mountTimeRef = useRef<number>(0);

	useEffect(() => {
		// Track mount time
		if (renderCountRef.current === 0) {
			mountTimeRef.current = performance.now();
			if (import.meta.env.DEV) {
				console.log(`[Performance] ${componentName} mounted`);
			}
		}

		renderCountRef.current += 1;

		// Track unmount
		return () => {
			const lifetime = performance.now() - mountTimeRef.current;
			if (import.meta.env.DEV) {
				console.log(
					`[Performance] ${componentName} unmounted after ${lifetime.toFixed(2)}ms (${renderCountRef.current} renders)`,
				);
			}
		};
	}, [componentName]);

	// Log re-renders in development
	useEffect(() => {
		if (import.meta.env.DEV && renderCountRef.current > 1) {
			console.log(
				`[Performance] ${componentName} re-rendered (count: ${renderCountRef.current})`,
			);
		}
	});
}

/**
 * Hook to create performance markers for async operations
 * Useful for tracking animation durations, API calls, etc.
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { mark, measure } = usePerformanceMarker();
 *
 *   const handleLoad = async () => {
 *     mark('data-load-start');
 *     await fetchData();
 *     measure('data-load', 'data-load-start');
 *   };
 * }
 * ```
 */
export function usePerformanceMarker() {
	const mark = useCallback((name: string) => {
		if (typeof performance !== 'undefined' && performance.mark) {
			performance.mark(name);
			if (import.meta.env.DEV) {
				console.log(`[Performance] Mark: ${name}`);
			}
		}
	}, []);

	const measure = useCallback(
		(name: string, startMark: string, endMark?: string) => {
			if (typeof performance !== 'undefined' && performance.measure) {
				try {
					const measurement = performance.measure(
						name,
						startMark,
						endMark,
					);
					if (import.meta.env.DEV) {
						console.log(
							`[Performance] Measure: ${name} = ${measurement.duration.toFixed(2)}ms`,
						);
					}
					return measurement.duration;
				} catch (e) {
					if (import.meta.env.DEV) {
						console.warn(
							`[Performance] Failed to measure ${name}:`,
							e,
						);
					}
					return 0;
				}
			}
			return 0;
		},
		[],
	);

	const clearMarks = useCallback((name?: string) => {
		if (typeof performance !== 'undefined' && performance.clearMarks) {
			performance.clearMarks(name);
		}
	}, []);

	const clearMeasures = useCallback((name?: string) => {
		if (typeof performance !== 'undefined' && performance.clearMeasures) {
			performance.clearMeasures(name);
		}
	}, []);

	return {
		mark,
		measure,
		clearMarks,
		clearMeasures,
	};
}

/**
 * Hook to track long tasks that block the main thread
 * Useful for identifying performance bottlenecks
 *
 * @example
 * ```tsx
 * function App() {
 *   useLongTaskDetector({
 *     threshold: 50, // ms
 *     onLongTask: (duration) => {
 *       console.warn(`Long task detected: ${duration}ms`);
 *     },
 *   });
 * }
 * ```
 */
export function useLongTaskDetector(
	options: {
		threshold?: number;
		onLongTask?: (duration: number, entry: PerformanceEntry) => void;
	} = {},
) {
	const { threshold = 50, onLongTask } = options;

	useEffect(() => {
		if (
			typeof window === 'undefined' ||
			!('PerformanceObserver' in window)
		) {
			return;
		}

		try {
			const observer = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					if ('duration' in entry && entry.duration > threshold) {
						if (import.meta.env.DEV) {
							console.warn(
								`[Performance] Long task detected: ${entry.duration.toFixed(2)}ms`,
							);
						}
						onLongTask?.(entry.duration, entry);
					}
				}
			});

			observer.observe({ type: 'longtask', buffered: true });

			return () => {
				observer.disconnect();
			};
		} catch (e) {
			if (import.meta.env.DEV) {
				console.warn('Long task observation not supported:', e);
			}
		}
	}, [threshold, onLongTask]);
}
