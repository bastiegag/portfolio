import {
	useIntersectionObserver,
	type UseIntersectionObserverOptions,
} from './useIntersectionObserver';

/**
 * Options for lazy loading components
 */
export interface UseLazyLoadOptions {
	/**
	 * Margin around the viewport to start loading early
	 * Positive values load content before it enters viewport
	 * @default '200px' - Start loading 200px before visible
	 */
	rootMargin?: string;

	/**
	 * Enable/disable lazy loading
	 * Useful for SSR or testing
	 * @default true
	 */
	enabled?: boolean;

	/**
	 * Threshold for triggering visibility (0-1)
	 * @default 0.01 - Trigger when 1% visible
	 */
	threshold?: number;
}

/**
 * Convenience hook for lazy loading scene components
 *
 * Optimized for SVG scene elements with sensible defaults:
 * - Loads 200px before element enters viewport
 * - Freezes after first load (no unloading)
 * - Low threshold for early triggering
 *
 * @param options - Configuration options
 * @returns Tuple of [ref callback, shouldRender boolean]
 *
 * @example
 * ```tsx
 * const Island = ({ x, y, modifier }: IslandProps) => {
 *   const [ref, shouldRender] = useLazyLoad();
 *
 *   if (!shouldRender) {
 *     return <g ref={ref} />; // Placeholder
 *   }
 *
 *   return (
 *     <g ref={ref}>
 *       {/* Expensive SVG content *\/}
 *     </g>
 *   );
 * };
 * ```
 */
export const useLazyLoad = (
	options: UseLazyLoadOptions = {},
): [(node: Element | null) => void, boolean] => {
	const { rootMargin = '200px', enabled = true, threshold = 0.01 } = options;

	const observerOptions: UseIntersectionObserverOptions = {
		rootMargin,
		threshold,
		freezeOnceVisible: true, // Don't unload once loaded
		enabled,
	};

	const [ref, isVisible] = useIntersectionObserver(observerOptions);

	return [ref, isVisible];
};
