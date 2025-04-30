import React from 'react';
import { styled } from '@mui/material';

import { Sky } from './Sky';
import { Ocean } from './Ocean';
import { Island } from './Island';
import { Ripples } from './Ripples';
import { PalmTrees } from './PalmTrees';
import { Rocks } from './Rocks';
import { Foliages } from './Foliages';
import { Objects } from './Objects';

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
}));

export interface SceneComponentProps {
	params: {
		x: number;
		y: number;
		m: { x: number; y: number };
		opacity?: number;
		scale?: number;
	};
}

export const Scene = () => {
	useMousePosition();

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
			<Ocean />
			<Sky />
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
