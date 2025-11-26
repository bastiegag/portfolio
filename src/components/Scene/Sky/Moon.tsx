import { useId } from 'react';
import { styled, useTheme } from '@mui/material';

import { useParallax, useSettings } from 'hooks';
import { SceneComponentProps } from 'components/Scene';

const MoonRoot = styled('g', {
	name: 'Moon',
	slot: 'root',
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
	const id = CSS.escape(useId());
	const colors = useTheme().vars.palette;
	const size = 20;

	useParallax(`#${id}`, params.x, params.y, params.m);

	return (
		<MoonRoot
			id={id}
			className="Moon-root"
			transform={`translate(${params.x},${params.y})`}
			strokeWidth="0"
		>
			<circle cx={size} cy={size} r={size} fill={colors.base.white} />
		</MoonRoot>
	);
};
