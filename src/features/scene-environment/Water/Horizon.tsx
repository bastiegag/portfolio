import { useId } from 'react';
import { styled, useTheme } from '@mui/material';

import { useParallax } from '@shared/hooks/parallax/useParallax';

const HORIZON_PATH =
	'M1000,0v8.1s-118.6,1-197.2,0-131.4-1.5-131.4-1.5c0,0,88.2-.3,117.6-2.3,29.5-2,40.3-1.7,40.3-1.7,0,0-509-1-589.8,0-80.7,1-198.1,1.7-198.1,1.7,0,0,229.9.2,296.7,0,66.7-.2,333.2,2.3,333.2,2.3L0,8.5V0h1000Z';

export interface HorizonProps {
	modifier: {
		x: number;
		y: number;
	};
	opacity: number;
	x: number;
	y: number;
}

const HorizonRoot = styled('g', {
	name: 'Horizon',
	slot: 'root',
})(() => ({ mixBlendMode: 'multiply' }));

export const Horizon = ({ modifier, opacity, y }: HorizonProps) => {
	const id = CSS.escape(useId());
	const color = useTheme().vars.palette;

	useParallax(`#${id}`, 0, y, modifier);

	return (
		<HorizonRoot
			id={id}
			transform={`translate(0,${y})`}
			className="Horizon-root"
			fill={color.water.dark}
			fillOpacity={opacity ?? 1}
		>
			<path d={HORIZON_PATH} />
		</HorizonRoot>
	);
};
