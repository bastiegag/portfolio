import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import fr from '../locales/fr.json';

const resources = {
	en: {
		translation: en,
	},
	fr: {
		translation: fr,
	},
};

const browserLanguage = navigator.language.split('-')[0];
const defaultLanguage = ['en', 'fr'].includes(browserLanguage)
	? browserLanguage
	: 'en';

i18n.use(initReactI18next).init({
	resources,
	lng: localStorage.getItem('language') || defaultLanguage,
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
