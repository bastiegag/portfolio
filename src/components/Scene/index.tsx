import React from 'react';
import { styled, useTheme } from '@mui/material';

import { useParallax } from 'hooks';
import { Sky } from './Sky';
import { Water } from './Water';
import { Island } from './Island';
//import { Ripples } from './Ripples';
import { PalmTrees } from './PalmTrees';
import { Rocks } from './Rocks';
import { Foliages } from './Foliages';
import { Objects } from './Objects';
import { Firecamp, Clothesline } from 'components/Scene/Objects';
import { Rock4, Rock5, Rock6, Rock7 } from 'components/Scene/Rocks';

import { useMousePosition } from 'hooks';
// import config from '@/config';

const CustomSvg = styled('svg', {
	name: 'scene',
	slot: 'Root',
})(() => ({
	height: '100%',
	width: 'auto',
	minWidth: '100%',
	'.island': {
		transform: 'scale(0.85) translateY(12px) translateX(2%)',
		transformOrigin: '50% 50%',
	},
	'.reflections': {
		filter: 'brightness(0.75)',
	},
}));

export interface SceneComponentProps {
	params: {
		x: number;
		y: number;
		m: { x: number; y: number };
		opacity?: number;
		scale?: number;
	};
	invert?: boolean;
}

export const Scene = () => {
	const colors = useTheme().palette;

	useMousePosition();
	useParallax('#background', 0, 0, { x: 0, y: 1 });

	return (
		<CustomSvg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="0 0 1000 400"
			id="scene"
			preserveAspectRatio="xMidYMid slice"
		>
			<g id="background">
				<Water />
				<Sky />
			</g>
			<g className="island">
				<Island params={{ x: 17, y: 286, m: { x: 15, y: 10 } }} />
				{/*<Ripples
					params={{
						x: -25,
						y: 325,
						m: { x: 15, y: 10 },
					}}
				/>*/}

				<PalmTrees />
				<Rocks />
				{/*<Foliages />*/}
				{/*<Objects />*/}
			</g>
		</CustomSvg>
	);
};
