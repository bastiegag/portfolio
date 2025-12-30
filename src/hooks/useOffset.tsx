import { OffsetContext, OffsetProvider } from 'context';
import { useContextWrapper } from 'hooks';

/**
 * Custom hook to access the Offset context
 *
 * Provides access to mouse position offset data including position, distance from center,
 * scale, and skew values used for parallax effects and mouse-driven animations.
 * Must be used within an OffsetProvider component, otherwise will throw an error.
 *
 * @returns The offset context value containing position and transformation data
 * @throws {Error} When used outside of OffsetProvider
 */
export const useOffset = () =>
	useContextWrapper(OffsetContext, {
		contextName: useOffset.name,
		providerName: OffsetProvider.name,
	});
