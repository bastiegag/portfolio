import React from 'react';
import { styled, useTheme } from '@mui/material';

import { useParallax } from 'hooks';
import { Sky } from './Sky';
import { Water } from './Water';
import { Island } from './Island';
import { PalmTrees } from './PalmTrees';
import { Rocks } from './Rocks';
import { Foliages } from './Foliages';
import { Objects } from './Objects';
import { Firecamp, Clothesline } from 'components/Scene/Objects';
import { Rock4, Rock5, Rock6, Rock7 } from 'components/Scene/Rocks';

import { useMousePosition } from 'hooks';
// import config from '@/config';

const SceneRoot = styled('svg', {
	name: 'Scene',
	slot: 'root',
})();

const SceneBackground = styled('g', {
	name: 'Scene',
	slot: 'background',
})();

const SceneIsland = styled('g', {
	name: 'Scene',
	slot: 'island',
})();

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
				<Island params={{ x: 17, y: 286, m: { x: 15, y: 10 } }} />
				<PalmTrees />
				<Rocks />
				{/*<Foliages />*/}
				{/*<Objects />*/}
			</SceneIsland>
		</SceneRoot>
	);
};
