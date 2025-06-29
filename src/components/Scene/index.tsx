import React from 'react';
import { styled } from '@mui/material';

import { useParallax } from 'hooks';
import { Sky } from './Sky';
import { Ocean } from './Ocean';
import { Island } from './Island';
import { Ripples } from './Ripples';
import { PalmTrees } from './PalmTrees';
import { Rocks } from './Rocks';
import { Foliages } from './Foliages';
import { Objects } from './Objects';
import { Fire, Firecamp, Clothesline } from 'components/Scene/Objects';
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
	'.island, .reflections': {
		transform: 'scale(0.85) translateY(12px) translateX(2%)',
		transformOrigin: '50% 50%',
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
	useMousePosition();
	useParallax('#background', 0, 0, { x: 0, y: 1 });

	return (
		<CustomSvg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="0 0 1000 400"
			id="scene"
			filter="url(#pixelates)"
			preserveAspectRatio="xMidYMid slice"
		>
			<filter id="pixelate" x="0" y="0">
				<feFlood x="1" y="1" height="0.5" width="0.5" />
				<feComposite width="2" height="2" />
				<feTile result="a" />
				<feComposite in="SourceGraphic" in2="a" operator="in" />
				<feMorphology operator="dilate" radius="2" />
			</filter>
			<g id="background">
				<Ocean />
				<Sky />
			</g>
			<g
				className="reflections"
				filter="url(#waterFilter)"
				opacity="0.35"
			>
				<Clothesline
					params={{ x: 656, y: 240, m: { x: 16, y: 12 }, scale: 1.1 }}
					invert={true}
				/>
				<Rock7
					params={{
						x: 356,
						y: 171,
						m: { x: 14, y: 10 },
						distance: 0,
					}}
					invert={true}
				/>
				<Rock6
					params={{
						x: 304,
						y: 230,
						m: { x: 14, y: 10 },
						distance: 0,
					}}
					invert={true}
				/>
				<Rock5
					params={{
						x: 600,
						y: 245,
						m: { x: 14, y: 10 },
						distance: 0,
					}}
					invert={true}
				/>
				<Rock4
					params={{ x: 400, y: 146, m: { x: 14, y: 10 } }}
					invert={true}
				/>
				<Firecamp
					params={{ x: 157, y: 119, m: { x: 15, y: 10 } }}
					invert={true}
				/>
				<Fire
					params={{ x: 200, y: 196, m: { x: 15, y: 10 } }}
					invert={true}
				/>
			</g>
			<g className="island">
				<Island params={{ x: 17, y: 286, m: { x: 15, y: 10 } }} />
				<Ripples
					params={{
						x: -25,
						y: 325,
						m: { x: 15, y: 10 },
					}}
				/>
				<PalmTrees />
				<Rocks />
				<Foliages />
				<Objects />
			</g>
		</CustomSvg>
	);
};
