import { useEffect, useRef, useState } from 'react';

/**
 * Options for IntersectionObserver configuration
 */
export interface UseIntersectionObserverOptions {
	/**
	 * Margin around the root element
	 */
	rootMargin?: string;

	/**
	 * Threshold at which to trigger intersection
	 */
	threshold?: number | number[];

	/**
	 * Root element for intersection
	 */
	root?: Element | Document | null;

	/**
	 * Freeze observer after first intersection
	 * Useful for lazy loading that only needs to trigger once
	 */
	freezeOnceVisible?: boolean;

	/**
	 * Enable/disable the observer
	 */
	enabled?: boolean;
}

/**
 * Hook to observe element visibility using IntersectionObserver API
 *
 * Provides efficient viewport visibility detection for performance optimizations
 * like lazy loading, infinite scroll, or animation triggers.
 *
 * @param options - IntersectionObserver configuration
 * @returns Tuple of [ref callback, isIntersecting state, observer entry]
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const [ref, isVisible] = useIntersectionObserver({
 *     threshold: 0.5,
 *     freezeOnceVisible: true
 *   });
 *
 *   return (
 *     <div ref={ref}>
 *       {isVisible && <HeavyComponent />}
 *     </div>
 *   );
 * };
 * ```
 */
export const useIntersectionObserver = (
	options: UseIntersectionObserverOptions = {},
): [
	(node: Element | null) => void,
	boolean,
	IntersectionObserverEntry | undefined,
] => {
	const {
		threshold = 0,
		root = null,
		rootMargin = '0px',
		freezeOnceVisible = false,
		enabled = true,
	} = options;

	const [entry, setEntry] = useState<IntersectionObserverEntry>();
	const [isIntersecting, setIsIntersecting] = useState(false);
	const frozenRef = useRef(false);
	const observerRef = useRef<IntersectionObserver | null>(null);
	const elementRef = useRef<Element | null>(null);

	// Cleanup observer
	const cleanup = () => {
		if (observerRef.current) {
			observerRef.current.disconnect();
			observerRef.current = null;
		}
	};

	// Update intersection state
	const updateIntersection = (entries: IntersectionObserverEntry[]) => {
		const [entry] = entries;
		const isCurrentlyIntersecting = entry.isIntersecting;

		setEntry(entry);

		// If frozen and already visible, don't update
		if (frozenRef.current && isCurrentlyIntersecting) {
			return;
		}

		setIsIntersecting(isCurrentlyIntersecting);

		// Freeze if option enabled and element is visible
		if (freezeOnceVisible && isCurrentlyIntersecting) {
			frozenRef.current = true;
			cleanup();
		}
	};

	// Ref callback to observe element
	const setRef = (node: Element | null) => {
		// Don't update if frozen
		if (frozenRef.current) return;

		// Cleanup previous observer
		cleanup();

		elementRef.current = node;

		// Don't observe if disabled or no element
		if (!enabled || !node) return;

		// Create and start observing
		try {
			observerRef.current = new IntersectionObserver(updateIntersection, {
				threshold,
				root,
				rootMargin,
			});

			observerRef.current.observe(node);
		} catch (error) {
			if (import.meta.env.DEV) {
				console.error(
					'[useIntersectionObserver] Failed to create observer:',
					error,
				);
			}
		}
	};

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			cleanup();
		};
	}, []);

	// Reset frozen state when enabled changes
	useEffect(() => {
		if (!enabled) {
			frozenRef.current = false;
		}
	}, [enabled]);

	return [setRef, isIntersecting, entry];
};
