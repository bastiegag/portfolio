import { SettingsContext, SettingsProvider } from 'context';
import { useContextWrapper } from 'hooks';

/**
 * Custom hook to access the Settings context
 *
 * Provides access to application settings and preferences such as theme, locale, and
 * other user-configurable options. Must be used within a SettingsProvider component,
 * otherwise will throw an error.
 *
 * @returns The settings context value containing settings state and update methods
 * @throws {Error} When used outside of SettingsProvider
 */
export const useSettings = () =>
	useContextWrapper(SettingsContext, {
		contextName: useSettings.name,
		providerName: SettingsProvider.name,
	});
