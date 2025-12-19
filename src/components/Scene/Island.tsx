import { JSX, useId } from 'react';
import { styled, useTheme } from '@mui/material';

import { useParallax } from 'hooks';
import { Fire } from 'components/Scene/Objects';

const MASK_GRADIENT =
	'linear-gradient(0deg, transparent 75%, rgba(0,0,0,1) 100%)';
const UNDERWATER_PATH =
	'M64.7,29L0,40.9s191,45.6,356.5,50c189.2,5,442.4-11,506.4-39.4,0,0-10-10.1-78.8-17.6-63.3-6.1-719.3-4.8-719.3-4.8h-.1Z';
const SAND_PATH =
	'M801.2,48.7c0,8.4-183.7,23.1-391.5,20.5-198.8-2.5-150.1-23.2-150.3-26.5-.3-4.5-100.5-2.2-217.4-9.6h-.2.2c2.5-.5,27.3-5.3,73.4-10.7h0c53.9-6.4,137-13.6,247.7-15.9,188-3.9,370.1,19.9,444.1,30.9,9,1.3,16.3,2.5,22,3.4-1.7-.2-36-3.8-40.4-.8-3.1,2.1,12.5,3,12.5,8.9v-.2Z';
const WET_SAND_PATH =
	'M801.2,48.7c0,8.4-183.7,23.1-391.5,20.5-198.8-2.5-150.1-23.2-150.3-26.5-.3-4.5-100.5-2.2-217.4-9.6h0s42.6-7.8,73.4-10.8c0,0-35.4,6.6-39.5,9-4.2,2.5,188.8,7.4,189.3,9.1,1.1,3.3-8.6,9-5.8,11.8,6.9,7,119.5,22.2,300.4,12,80.3-4.5,233-15.6,234.7-16.9,1.7-1.3-13.3-7-13.8-8.4-.4-1.1,19.3-1.5,26.5-1.6,9,1.3,16.3,2.5,22,3.4-1.7-.2-36-3.8-40.4-.8-3.1,2.1,12.5,3,12.5,8.9h-.1Z';
const GRASS_PATH =
	'M219.4,12.4s51.4-3.7,54.1-3.2c2.6.6-5.5,4.5-4.6,5.5s66.8-1.3,120-.5c0,0,20.5.3,20.2,1.2-.4,1.2-27.5.1-28.8,3.1s131,6.8,155.5,3.7c3.9-.5-18.6-2.3-16.4-3.6s54.1-2.1,86.2-1.7c27.7.4,38.2-.4,38.2-.4,0,0-88.2-12-197.6-14.5C338.9-.3,219.4,12.4,219.4,12.4Z';

export interface IslandProps {
	x: number;
	y: number;
	modifier: { x: number; y: number };
}

const IslandRoot = styled('g', {
	name: 'Island',
	slot: 'root',
})();

const IslandUnderwater = styled('g', {
	name: 'Island',
	slot: 'underwater',
})(() => ({
	'.masked-path': {
		maskImage: MASK_GRADIENT,
		WebkitMaskImage: MASK_GRADIENT,
	},
}));

const IslandSand = styled('g', {
	name: 'Island',
	slot: 'sand',
})();

const IslandGrass = styled('path', {
	name: 'Island',
	slot: 'grass',
})();

const IslandShadow = styled('path', {
	name: 'Island',
	slot: 'shadow',
})(() => ({
	opacity: 0.2,
	mixBlendMode: 'multiply',
}));

export const Island = ({ x, y, modifier }: IslandProps): JSX.Element => {
	const id = useId();
	const colors = useTheme().vars.palette;

	useParallax(`#${id}`, x, y, modifier);

	return (
		<IslandRoot
			id={id}
			className="Island-root animate-gradient animate-color"
			transform={`translate(${x},${y})`}
		>
			<defs>
				<linearGradient
					id="sand-gradient"
					x1="435.5"
					y1="24.5"
					x2="435.5"
					y2="88.1"
					gradientTransform="translate(0 94) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.sand.dark} />
					<stop offset=".8" stopColor={colors.sand.light} />
				</linearGradient>
				<filter id="underwater-blur" x="0" y="0">
					<feGaussianBlur in="SourceGraphic" stdDeviation="6" />
				</filter>
			</defs>
			<IslandUnderwater
				className="Island-underwater"
				filter="url(#water-filter)"
			>
				<path
					fill={colors.sand.light}
					fillOpacity="40%"
					filter="url(#underwater-blur)"
					transform="scale(1.05 1) translate(-15 0)"
					d={UNDERWATER_PATH}
				/>
				<path
					fill={colors.sand.light}
					fillOpacity="60%"
					transform="scale(1.05 1) translate(-15 0)"
					d={UNDERWATER_PATH}
					className="masked-path"
				/>
				<Fire
					x={180}
					y={-110}
					modifier={{ x: 0, y: 0 }}
					invert={true}
				/>
			</IslandUnderwater>
			<IslandSand className="Island-sand">
				<path fill="url(#sand-gradient)" d={SAND_PATH} />
				<path fill={colors.sand.darker} d={WET_SAND_PATH} />
			</IslandSand>
			<IslandGrass
				className="Island-grass"
				fill={colors.foliage.main}
				d={GRASS_PATH}
			/>
			<IslandShadow
				className="island-shadow"
				d="M267.6,9.5l90.6,2.6,27.2-5.2s150.3,10.1,214,14.9,80.1-.6,80.1-.6c0,0-74.6-10.5-118.5-13.4C517.1,4.8,401.2,0,401.2,0h-30.8l-90.4,7.8-12.3,1.7h-.1Z"
			/>
		</IslandRoot>
	);
};
