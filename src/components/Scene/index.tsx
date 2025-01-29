import React from 'react';
import { styled } from '@mui/system';

import { Sky } from './Sky';
import { Ocean } from './Ocean';
import { Island } from './Island';
import { Ripples } from './Ripples';
import { PalmTrees } from './PalmTrees';
import { Rocks } from './Rocks';
import { Foliages } from './Foliages';
import { Objects } from './Objects';

import { useOffset } from 'hooks';
import config from '@/config';

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

export const Scene = () => {
	const w = config.sceneWidth;
	const h = config.sceneHeight;

	const { offset, setOffset } = useOffset();

	const handleMouseMove = (e: React.MouseEvent<HTMLOrSVGElement>) => {
		const scene = document.getElementById('scene');
		const sw = scene ? scene.getBoundingClientRect().width : 0;

		const dx = (e.nativeEvent.offsetX * w) / sw - w / 2;
		const dy = (e.nativeEvent.offsetY * h) / window.innerHeight - h / 2;

		setOffset({ x: dx, y: dy });
	};

	return (
		<CustomSvg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="0 0 1000 400"
			id="scene"
			preserveAspectRatio="xMidYMid slice"
			onMouseMove={(e) => handleMouseMove(e)}
		>
			<Ocean />
			<Sky />
			<g className="island">
				<Island params={{ x: 17, y: 286, multiplier: 15 }} />
				<Ripples params={{ x: -25, y: 325, multiplier: 20 }} />
				<PalmTrees />
				<Rocks />
				<Foliages />
				<Objects />
			</g>
		</CustomSvg>
	);
};
