import { SettingsContext, SettingsProvider } from 'context';
import { useContextWrapper } from 'hooks';

export const useSettings = () =>
	useContextWrapper(SettingsContext, {
		contextName: useSettings.name,
		providerName: SettingsProvider.name,
	});
