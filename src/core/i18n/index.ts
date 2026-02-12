import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import fr from './locales/fr.json';

const resources = {
	en: {
		translation: en,
	},
	fr: {
		translation: fr,
	},
};

const getDefaultLanguage = (): string => {
	const supportedLanguages = ['en', 'fr'] as const;

	if (
		typeof navigator !== 'undefined' &&
		typeof navigator.language === 'string'
	) {
		const browserLanguage = navigator.language.split('-')[0];

		if (
			supportedLanguages.includes(
				browserLanguage as (typeof supportedLanguages)[number],
			)
		) {
			return browserLanguage;
		}
	}

	return 'en';
};

const getInitialLanguage = (): string => {
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedLanguage = window.localStorage.getItem('language');

		if (storedLanguage) {
			return storedLanguage;
		}
	}

	return getDefaultLanguage();
};

i18n.use(initReactI18next).init({
	resources,
	lng: getInitialLanguage(),
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
