/**
 * Intersection Observer Hooks
 *
 * Provides efficient viewport visibility detection using IntersectionObserver API.
 * Useful for lazy loading, infinite scroll, and animation triggers.
 */

export {
	useIntersectionObserver,
	type UseIntersectionObserverOptions,
} from './useIntersectionObserver';

export { useLazyLoad, type UseLazyLoadOptions } from './useLazyLoad';
