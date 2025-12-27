import React from 'react';
import { styled } from '@mui/material';

import { useParallax } from 'hooks';
import { Sky } from './Sky';
import { Water } from './Water';
import { Island } from './Island';
import { PalmTrees } from './PalmTrees';
import { Rocks } from './Rocks';
import { Foliage } from './Foliage';
import {
	Campfire,
	Fire,
	Bottle,
	Map,
	Mug,
	Clothesline,
} from 'components/Scene/Objects';

import { useMousePosition } from 'hooks';
// import config from '@/config';

const SceneRoot = styled('svg', {
	name: 'Scene',
	slot: 'root',
})(({ theme }) => ({
	width: '100%',
	minHeight: '100%',
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	objectFit: 'cover',
	[theme.breakpoints.down('md')]: {
		position: 'relative',
		top: '50%',
		left: '0',
		transform: 'translate(0, -50%)',
		minWidth: '100%',
	},
}));

const SceneBackground = styled('g', {
	name: 'Scene',
	slot: 'background',
})();

const SceneIsland = styled('g', {
	name: 'Scene',
	slot: 'island',
})();

export const Scene = () => {
	useMousePosition();
	useParallax('#scene-background', 0, 0, { x: 0, y: 1 });

	return (
		<SceneRoot
			id="scene"
			className="Scene-root"
			viewBox="0 0 1000 400"
			preserveAspectRatio="xMidYMid slice"
		>
			<SceneBackground className="Scene-background" id="scene-background">
				<Water />
				<Sky />
			</SceneBackground>
			<SceneIsland className="Scene-island">
				<Island x={17} y={286} modifier={{ x: 15, y: 10 }} />
				<PalmTrees />
				<Bottle
					x={720}
					y={326}
					modifier={{ x: 19, y: 13 }}
					scale={0.75}
				/>
				<Campfire x={157} y={119} modifier={{ x: 15, y: 10 }} />
				<Fire x={200} y={196} modifier={{ x: 15, y: 10 }} />
				<Rocks />
				<Foliage />
				<Mug x={158} y={270} modifier={{ x: 15, y: 10 }} />
				<Map x={244} y={296} modifier={{ x: 15, y: 10 }} scale={0.9} />
				<Clothesline
					x={656}
					y={240}
					modifier={{ x: 16, y: 12 }}
					scale={1.1}
				/>
			</SceneIsland>
		</SceneRoot>
	);
};
