import { useId } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/material';

import { GroundWaves } from './GroundWaves';
import { Horizon } from './Horizon';
import { Ripples } from './Ripples';
import { Waves } from './Waves';

const WaterRoot = styled('g', {
	name: 'Water',
	slot: 'root',
})();

const WaterBackground = styled('rect', {
	name: 'Water',
	slot: 'background',
})(() => ({ fill: 'url(#water-gradient)' }));

export const Water = () => {
	const id = CSS.escape(useId());
	const colors = useTheme().vars.palette;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to('.turbulence', {
			attr: { values: '180' },
			duration: 3,
			ease: 'none',
		});

		timeline.to('.turbulence', {
			attr: { values: '359' },
			duration: 3,
			ease: 'none',
		});
	});

	return (
		<WaterRoot
			id={id}
			className="Water-root animate-gradient animate-color"
			transform={`translate(0,280)`}
		>
			<filter id="water-filter" x="0%" y="0%" width="100%" height="100%">
				<feTurbulence
					baseFrequency="0.015 0.25"
					type="turbulence"
					result="noise"
					seed="3"
					numOctaves="1"
					stitchTiles="noStitch"
				/>
				<feColorMatrix
					type="hueRotate"
					className="turbulence"
					values="0"
				/>
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0
               0 0 0 0 0
               0 0 0 0 0
               1 0 0 0 0"
				/>
				<feDisplacementMap in="SourceGraphic" scale="15" />
			</filter>
			<defs>
				<radialGradient
					id="water-gradient"
					cx="499.1"
					cy="121.3"
					fx="499.1"
					fy="121.3"
					r="664.6"
					gradientTransform="translate(0 88.7) scale(1 .3)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset=".2" stopColor={colors.water.light} />
					<stop offset="1" stopColor={colors.water.dark} />
				</radialGradient>
			</defs>
			<WaterBackground
				className="Water-background"
				width="1000"
				height="125"
			/>
			<Horizon x={0} y={2} modifier={{ x: 2, y: 1 }} opacity={0.75} />
			<g filter="url(#water-filter)">
				<WaterBackground
					className="Water-background"
					width="1000"
					height="130"
					fillOpacity="0.5"
				/>
				<Waves x={0} y={0} modifier={{ x: 8, y: 8 }} opacity={0.75} />
				<GroundWaves
					x={0}
					y={45}
					modifier={{ x: 13, y: 13 }}
					opacity={0.25}
				/>
				<GroundWaves
					x={0}
					y={60}
					modifier={{ x: 16, y: 16 }}
					opacity={0.5}
				/>
				<Horizon x={0} y={0} modifier={{ x: 2, y: 1 }} opacity={0.25} />
				<Horizon
					x={0}
					y={15}
					modifier={{ x: 2, y: 1 }}
					opacity={0.15}
				/>
			</g>
			<Horizon x={0} y={0} modifier={{ x: 2, y: 1 }} opacity={0.25} />
			<Ripples x={0} y={50} modifier={{ x: 15, y: 15 }} />
		</WaterRoot>
	);
};
