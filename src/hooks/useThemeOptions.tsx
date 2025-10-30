import { ThemeContext, ThemeProvider } from 'context';
import { useContextWrapper } from 'hooks';

export const useThemeOptions = () =>
	useContextWrapper(ThemeContext, {
		contextName: useThemeOptions.name,
		providerName: ThemeProvider.name,
	});
