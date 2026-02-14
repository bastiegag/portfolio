/**
 * Performance Utilities
 * Throttle and debounce functions for optimizing expensive operations
 */

/**
 * Creates a throttled function that only invokes the provided function at most once
 * per every wait milliseconds. Useful for rate-limiting expensive operations like
 * scroll handlers, resize handlers, and mouse move events.
 *
 * @param fn - The function to throttle
 * @param wait - The number of milliseconds to throttle invocations to
 * @returns A throttled version of the function
 *
 * @example
 * ```ts
 * const throttledHandler = throttle((e: MouseEvent) => {
 *   console.log(e.clientX, e.clientY);
 * }, 16); // ~60fps
 *
 * window.addEventListener('mousemove', throttledHandler);
 * ```
 */
export function throttle<T extends (...args: Parameters<T>) => ReturnType<T>>(
	fn: T,
	wait: number,
): (...args: Parameters<T>) => void {
	let lastCall = 0;
	let timeoutId: ReturnType<typeof setTimeout> | null = null;

	return function throttled(...args: Parameters<T>): void {
		const now = Date.now();
		const timeSinceLastCall = now - lastCall;

		// Clear any pending timeout
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}

		if (timeSinceLastCall >= wait) {
			// Enough time has passed, execute immediately
			lastCall = now;
			fn(...args);
		} else {
			// Not enough time has passed, schedule for later
			const remainingTime = wait - timeSinceLastCall;
			timeoutId = setTimeout(() => {
				lastCall = Date.now();
				fn(...args);
				timeoutId = null;
			}, remainingTime);
		}
	};
}

/**
 * Creates a debounced function that delays invoking the provided function until after
 * wait milliseconds have elapsed since the last time the debounced function was invoked.
 * Useful for input validation, search queries, and window resize handlers.
 *
 * @param fn - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @param immediate - If true, trigger the function on the leading edge instead of trailing
 * @returns A debounced version of the function
 *
 * @example
 * ```ts
 * const debouncedSearch = debounce((query: string) => {
 *   fetchResults(query);
 * }, 300);
 *
 * input.addEventListener('input', (e) => debouncedSearch(e.target.value));
 * ```
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
	fn: T,
	wait: number,
	immediate = false,
): (...args: Parameters<T>) => void {
	let timeoutId: ReturnType<typeof setTimeout> | null = null;

	return function debounced(...args: Parameters<T>): void {
		const callNow = immediate && !timeoutId;

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			timeoutId = null;
			if (!immediate) {
				fn(...args);
			}
		}, wait);

		if (callNow) {
			fn(...args);
		}
	};
}

/**
 * Creates a function that is restricted to invoking fn once per animation frame.
 * Useful for visual updates that should sync with the browser's repaint cycle.
 *
 * @param fn - The function to throttle to animation frames
 * @returns A function throttled to requestAnimationFrame
 *
 * @example
 * ```ts
 * const rafHandler = rafThrottle((scrollY: number) => {
 *   element.style.transform = `translateY(${scrollY}px)`;
 * });
 *
 * window.addEventListener('scroll', () => rafHandler(window.scrollY));
 * ```
 */
export function rafThrottle<
	T extends (...args: Parameters<T>) => ReturnType<T>,
>(fn: T): (...args: Parameters<T>) => void {
	let rafId: number | null = null;
	let latestArgs: Parameters<T> | null = null;

	const throttledFn = (): void => {
		if (latestArgs) {
			fn(...latestArgs);
			latestArgs = null;
		}
		rafId = null;
	};

	return function rafThrottled(...args: Parameters<T>): void {
		latestArgs = args;

		if (rafId === null) {
			rafId = requestAnimationFrame(throttledFn);
		}
	};
}
