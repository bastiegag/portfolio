import { useId } from 'react';
import { styled, useTheme } from '@mui/material';

import { useParallax } from '@shared/hooks/parallax/useParallax';
import { useSettings } from '@features/settings';

const RIPPLE_PATHS = [
	'M639,63.5c1.5.3-91.4,1.8-96.6,0-5.3-1.8,83.4-2.9,96.6,0Z',
	'M533.4,62c2.5.8-23.2,1.8-28.9-.2-5.7-2,24.2-1.4,28.9.2Z',
	'M635.2,53.9c-.7,1.1-14.9,1.2-15.1,0s15.8-1.1,15.1,0Z',
	'M277.6,37.7s-51.2-3-68.1,0c-16.8,3-39.6,4.9-80.8,5.1-41.2.1-63.6-9.7-86.7-11.8S0,29.5,0,29.5v7.8s28.8-6.3,59.6.4c30.9,6.7,23.7,9.7,61.9,11.5,38.2,1.8,71.6-8.1,91.8-9.9,20.2-1.8,52.5-3.4,64.3-1.6Z',
	'M81.5,0s-13.1,2-13.7,2.8,79.4,6.6,141.5,7.1c62.1.5,68.2,2.1,66.9,3.7-1.2,1.6-6,5.5-4.6,9.5,1.4,4.1,41.4,22.4,284,16.5,0,0-75.2,6-135.6,6.5-60.4.5-65.7-4.7-89.4-7.9-23.7-3.2-68-7.5-73-10.8-5-3.4,16.4-8.9,16.2-12.8-.2-4-90.1,2.3-127,0-36.9-2.3-14.8-4.5-15.7-5.9-.9-1.4-34.3,0-54.6-2-20.3-1.9-16.8-2.6-16.8-2.6L81.5,0Z',
	'M880.3,6.2s29.2,4.6,29.6,4.9c.5.3-39.1-2.7-39.2,0-.1,2.7,12.8,3.2,12.8,8.5s-124.1,16.5-184.5,18.1c0,0,39.8,2.5,69.4.9,29.6-1.6,26-4.1,48.9-7.3,22.9-3.2,71.8-5.9,79.5-8.9,7.8-3-23.4-9.5-24.6-10.6-1.2-1.1,40.6,1.6,43.5.6,2.9-1-35.4-6.2-35.4-6.2Z',
];

export interface RipplesProps {
	modifier: {
		x: number;
		y: number;
	};
	x: number;
	y: number;
}

const RipplesRoot = styled('g', {
	name: 'Ripples',
	slot: 'root',
})<{ 'data-night': boolean }>(({ 'data-night': night }) => ({
	opacity: night ? 0.5 : 1,
	mixBlendMode: 'soft-light',
}));

export const Ripples = ({ modifier, x, y }: RipplesProps) => {
	const id = CSS.escape(useId());
	const colors = useTheme().vars.palette;
	const { settings } = useSettings();

	useParallax(`#${id}`, x, y, modifier, {
		skew: true,
	});

	return (
		<RipplesRoot
			id={id}
			data-night={settings.time === 'night'}
			transform={`translate(${x},${y})`}
			fill={colors.base.white}
			className="Ripples-root"
			filter="url(#water-filter)"
		>
			{RIPPLE_PATHS.map((d, index) => (
				<path key={index} d={d} />
			))}
		</RipplesRoot>
	);
};
