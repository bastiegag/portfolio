import { PopperContext, PopperProvider } from 'context';
import { useContextWrapper } from 'hooks';

/**
 * Custom hook to access the Popper context
 *
 * Provides access to popper-related state and functionality for positioning elements
 * relative to other elements (tooltips, dropdowns, etc.). Must be used within a
 * PopperProvider component, otherwise will throw an error.
 *
 * @returns The popper context value containing popper state and control methods
 * @throws {Error} When used outside of PopperProvider
 */
export const usePopper = () =>
	useContextWrapper(PopperContext, {
		contextName: usePopper.name,
		providerName: PopperProvider.name,
	});
