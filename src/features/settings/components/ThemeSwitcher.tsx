import { useCallback } from 'react';
import { IconButton } from '@mui/material';

import { MoonIcon, SunIcon } from '@shared/components/Icons';
import { useCursor } from '@shared/components/cursor/cursor.state';
import { useSettings } from '../state/settings.state';

export const ThemeSwitcher = () => {
	const { settings, setTime } = useSettings();
	const { setCursor } = useCursor();

	const handleMouseEnter = useCallback(
		() => setCursor({ hover: true }),
		[setCursor],
	);

	const handleMouseLeave = useCallback(
		() => setCursor({ hover: false }),
		[setCursor],
	);

	const handleToggleTheme = useCallback(() => {
		setTime((prev) => (prev === 'night' ? 'day' : 'night'));
	}, [setTime]);

	return (
		<IconButton
			size="large"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleToggleTheme}
		>
			{settings.time === 'night' ? (
				<SunIcon size={32} />
			) : (
				<MoonIcon size={32} />
			)}
		</IconButton>
	);
};
