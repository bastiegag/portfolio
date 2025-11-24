import { useId } from 'react';
import { styled } from '@mui/material';

import { useParallax } from 'hooks';
import { SceneComponentProps } from 'components/Scene';

const CustomSvg = styled('g', {
	name: 'water',
	slot: 'ground-waves',
})(() => ({ mixBlendMode: 'multiply' }));

export interface GroundWavesProps {
	params: {
		y: number;
		multiplier: number;
		opacity?: number;
	};
}

export const GroundWaves = ({ params }: SceneComponentProps) => {
	const id = useId();

	useParallax(`#${CSS.escape(id)}`, 0, params.y, params.m, {
		skew: true,
	});

	return (
		<CustomSvg
			id={id}
			transform={`translate(0,${params.y})`}
			className="water-ground-waves animate"
			fill="url(#water-wave-gradient)"
			fillOpacity={params.opacity && params.opacity}
		>
			<path d="M875.7,64.8s-185.6-4.9-297.1-11.7C404.9,42.5,363.6,10.8,267.7,2.4,171.8-5.9,0,9.9,0,9.9v9.1s129.1-10.4,277.6,3.8c148.5,14.1,306.9,42,397,42h201.2Z" />
			<path d="M569.8,64.8s-147.1-6.3-267.2-21.9C154,23.5,0,41,0,41v8.4s158.6-19.1,279.4-6.4c120.8,12.6,188.2,18.9,256.1,21.8h34.3Z" />
		</CustomSvg>
	);
};
