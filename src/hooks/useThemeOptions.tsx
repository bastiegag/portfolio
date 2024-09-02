import { ThemeContext, ThemeContextProvider } from 'context';
import { useContextWrapper } from 'hooks';

export const useThemeOptions = () =>
	useContextWrapper(ThemeContext, {
		contextName: useThemeOptions.name,
		providerName: ThemeContextProvider.name,
	});
