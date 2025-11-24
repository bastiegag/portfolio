import { useId } from 'react';
import { styled, useTheme } from '@mui/material';

import { useParallax, useSettings } from 'hooks';
import { SceneComponentProps } from 'components/Scene';

const SkyMoon = styled('g', {
	name: 'sky',
	slot: 'moon',
})(() => {
	const { settings } = useSettings();

	return {
		opacity: 0,
		...(settings.time === 'night' && {
			opacity: 1,
		}),
	};
});

export const Moon = ({ params }: SceneComponentProps) => {
	const id = useId();
	const colors = useTheme().vars.palette;
	const size = 20;

	useParallax(`#${CSS.escape(id)}`, params.x, params.y, params.m);

	return (
		<SkyMoon
			id={id}
			className="sky-moon animate"
			transform={`translate(${params.x},${params.y})`}
			strokeWidth="0"
		>
			<circle cx={size} cy={size} r={size} fill={colors.base.white} />
		</SkyMoon>
	);
};
