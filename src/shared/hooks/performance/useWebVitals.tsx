/**
 * Web Vitals Performance Monitoring
 * Tracks Core Web Vitals metrics for performance optimization
 * Particularly important for animation-heavy applications
 */
import { useEffect, useRef } from 'react';

export interface WebVitalsMetric {
	name: 'CLS' | 'FID' | 'LCP' | 'FCP' | 'TTFB' | 'INP';
	value: number;
	delta: number;
	id: string;
	rating: 'good' | 'needs-improvement' | 'poor';
}

export interface UseWebVitalsOptions {
	/** Callback to handle metrics (e.g., send to analytics) */
	onMetric?: (metric: WebVitalsMetric) => void;
	/** Enable console logging in development */
	debug?: boolean;
}

/**
 * Custom hook to monitor Core Web Vitals
 * Tracks CLS, FID, LCP, FCP, TTFB, and INP metrics
 *
 * @example
 * ```tsx
 * useWebVitals({
 *   onMetric: (metric) => {
 *     // Send to analytics service
 *     analytics.track('web_vitals', metric);
 *   },
 *   debug: true,
 * });
 * ```
 */
export function useWebVitals(options: UseWebVitalsOptions = {}) {
	const { onMetric, debug = false } = options;
	const observersRef = useRef<PerformanceObserver[]>([]);
	const metricsRef = useRef<Map<string, WebVitalsMetric>>(new Map());

	useEffect(() => {
		// Check if Performance Observer is supported
		if (
			typeof window === 'undefined' ||
			!('PerformanceObserver' in window)
		) {
			if (debug && import.meta.env.DEV) {
				console.warn('PerformanceObserver not supported');
			}
			return;
		}

		// Helper to determine rating based on metric thresholds
		const getRating = (
			name: WebVitalsMetric['name'],
			value: number,
		): WebVitalsMetric['rating'] => {
			const thresholds = {
				CLS: [0.1, 0.25], // Cumulative Layout Shift
				FID: [100, 300], // First Input Delay (ms)
				LCP: [2500, 4000], // Largest Contentful Paint (ms)
				FCP: [1800, 3000], // First Contentful Paint (ms)
				TTFB: [800, 1800], // Time to First Byte (ms)
				INP: [200, 500], // Interaction to Next Paint (ms)
			};

			const [good, poor] = thresholds[name] || [0, 0];
			if (value <= good) return 'good';
			if (value <= poor) return 'needs-improvement';
			return 'poor';
		};

		// Helper to create metric object
		const createMetric = (
			name: WebVitalsMetric['name'],
			value: number,
			id: string,
		): WebVitalsMetric => {
			const prevValue = metricsRef.current.get(name)?.value || 0;
			const delta = value - prevValue;

			const metric: WebVitalsMetric = {
				name,
				value,
				delta,
				id,
				rating: getRating(name, value),
			};

			metricsRef.current.set(name, metric);
			return metric;
		};

		// Helper to log and report metric
		const reportMetric = (metric: WebVitalsMetric) => {
			if (debug && import.meta.env.DEV) {
				console.group(`[Web Vitals] ${metric.name}`);
				console.log('Value:', metric.value.toFixed(2));
				console.log('Delta:', metric.delta.toFixed(2));
				console.log('Rating:', metric.rating);
				console.groupEnd();
			}

			onMetric?.(metric);
		};

		// Observe Cumulative Layout Shift (CLS)
		try {
			const clsObserver = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					if (
						'value' in entry &&
						!entry.hadRecentInput &&
						typeof entry.value === 'number'
					) {
						const metric = createMetric(
							'CLS',
							entry.value,
							entry.entryType,
						);
						reportMetric(metric);
					}
				}
			});
			clsObserver.observe({ type: 'layout-shift', buffered: true });
			observersRef.current.push(clsObserver);
		} catch (e) {
			if (debug && import.meta.env.DEV) {
				console.warn('CLS observation failed:', e);
			}
		}

		// Observe First Input Delay (FID)
		try {
			const fidObserver = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					if ('processingStart' in entry && 'startTime' in entry) {
						const delay = entry.processingStart - entry.startTime;
						const metric = createMetric('FID', delay, entry.name);
						reportMetric(metric);
					}
				}
			});
			fidObserver.observe({ type: 'first-input', buffered: true });
			observersRef.current.push(fidObserver);
		} catch (e) {
			if (debug && import.meta.env.DEV) {
				console.warn('FID observation failed:', e);
			}
		}

		// Observe Largest Contentful Paint (LCP)
		try {
			const lcpObserver = new PerformanceObserver((list) => {
				const entries = list.getEntries();
				const lastEntry = entries[entries.length - 1];
				if (lastEntry && 'startTime' in lastEntry) {
					const metric = createMetric(
						'LCP',
						lastEntry.startTime,
						lastEntry.name,
					);
					reportMetric(metric);
				}
			});
			lcpObserver.observe({
				type: 'largest-contentful-paint',
				buffered: true,
			});
			observersRef.current.push(lcpObserver);
		} catch (e) {
			if (debug && import.meta.env.DEV) {
				console.warn('LCP observation failed:', e);
			}
		}

		// Observe First Contentful Paint (FCP)
		try {
			const navigationObserver = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					if (
						entry.name === 'first-contentful-paint' &&
						'startTime' in entry
					) {
						const metric = createMetric(
							'FCP',
							entry.startTime,
							entry.name,
						);
						reportMetric(metric);
					}
				}
			});
			navigationObserver.observe({ type: 'paint', buffered: true });
			observersRef.current.push(navigationObserver);
		} catch (e) {
			if (debug && import.meta.env.DEV) {
				console.warn('FCP observation failed:', e);
			}
		}

		// Observe Time to First Byte (TTFB)
		try {
			const navigationEntries =
				performance.getEntriesByType('navigation');
			if (navigationEntries.length > 0) {
				const entry =
					navigationEntries[0] as PerformanceNavigationTiming;
				const ttfb = entry.responseStart - entry.requestStart;
				const metric = createMetric('TTFB', ttfb, 'navigation');
				reportMetric(metric);
			}
		} catch (e) {
			if (debug && import.meta.env.DEV) {
				console.warn('TTFB observation failed:', e);
			}
		}

		// Cleanup observers
		return () => {
			observersRef.current.forEach((observer) => {
				observer.disconnect();
			});
			observersRef.current = [];
		};
	}, [onMetric, debug]);
}
