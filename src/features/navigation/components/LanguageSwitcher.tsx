import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Typography } from '@mui/material';

import { useCursor } from '@shared/components/cursor/cursor.state';

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const { setCursor } = useCursor();

	const toggleLanguage = useCallback(() => {
		const newLanguage = i18n.language === 'fr' ? 'en' : 'fr';
		i18n.changeLanguage(newLanguage);
		localStorage.setItem('language', newLanguage);
	}, [i18n]);

	const handleMouseEnter = useCallback(() => {
		setCursor({ hover: true });
	}, [setCursor]);

	const handleMouseLeave = useCallback(() => {
		setCursor({ hover: false });
	}, [setCursor]);

	const displayLanguage = i18n.language === 'fr' ? 'EN' : 'FR';

	return (
		<IconButton
			size="large"
			onClick={toggleLanguage}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Typography variant="h6" fontWeight="bold">
				{displayLanguage}
			</Typography>
		</IconButton>
	);
};
