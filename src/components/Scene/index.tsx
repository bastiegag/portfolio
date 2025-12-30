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

/**
 * Styled SVG root element for the entire scene
 * - Centered and covers viewport
 * - Responsive positioning for mobile
 */
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

/**
 * Container for background elements (water and sky)
 */
const SceneBackground = styled('g', {
	name: 'Scene',
	slot: 'background',
})();

/**
 * Container for island and foreground elements
 */
const SceneIsland = styled('g', {
	name: 'Scene',
	slot: 'island',
})();

/**
 * SVG viewBox coordinates for the scene
 */
const VIEWBOX = '0 0 1000 400';

/**
 * Main decorative scene component for portfolio background
 *
 * Renders an illustrated island scene with parallax effects and multiple
 * layered elements including sky, water, island, palm trees, rocks, foliage,
 * and various objects (campfire, bottle, map, etc.). Uses mouse position
 * tracking and parallax to create depth and interactivity.
 *
 * Elements are organized in layers:
 * - Background: Water and sky with subtle parallax
 * - Foreground: Island with objects and vegetation
 *
 * @returns SVG scene with parallax-enabled background illustration
 */
export const Scene = () => {
	// Track mouse position for parallax effects
	useMousePosition();

	// Apply parallax effect to background layer
	useParallax('#scene-background', 0, 0, { x: 0, y: 1 });

	return (
		<SceneRoot
			id="scene"
			className="Scene-root"
			viewBox={VIEWBOX}
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
