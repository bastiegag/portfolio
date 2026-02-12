import { useId } from 'react';
import { styled, useTheme } from '@mui/material';

import { useParallax } from '@shared/hooks/parallax/useParallax';
import { useSettings } from '@features/settings';

const MOON_SIZE = 20;

export interface MoonProps {
	modifier: {
		x: number;
		y: number;
	};
	x: number;
	y: number;
}

const MoonRoot = styled('g', {
	name: 'Moon',
	slot: 'root',
})<{ 'data-night': boolean }>(({ 'data-night': isNight }) => ({
	opacity: isNight ? 1 : 0,
	transition: 'opacity 0.3s ease',
	width: MOON_SIZE * 2,
	height: MOON_SIZE * 2,
}));

export const Moon = ({ modifier, x, y }: MoonProps) => {
	const id = CSS.escape(useId());
	const { settings } = useSettings();
	const colors = useTheme().vars.palette;

	useParallax(`#${id}`, x, y, modifier);

	return (
		<MoonRoot
			id={id}
			className="Moon-root"
			data-night={settings.time === 'night'}
			strokeWidth="0"
		>
			<circle
				cx={MOON_SIZE}
				cy={MOON_SIZE}
				r={MOON_SIZE}
				fill={colors.base.white}
			/>
		</MoonRoot>
	);
};
