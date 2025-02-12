import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import { Horizon } from './Horizon';
import { Waves } from './Waves';
import { GroundWaves } from './GroundWaves';

const CustomSvg = styled('g', {
	name: 'ocean',
	slot: 'Root',
})(() => ({
	'.ocean-shape': {
		fill: 'url(#ocean-gradient)',
	},
}));

export const Ocean = () => {
	const colors = useTheme().palette.scene;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to('#turbulence', {
			attr: { values: '180' },
			duration: 3,
			ease: 'none',
		});
		timeline.to('#turbulence', {
			attr: { values: '359' },
			duration: 3,
			ease: 'none',
		});
	});

	return (
		<CustomSvg className="animate-gradient" transform={`translate(0,280)`}>
			<filter
				id="waterReflection"
				x="0%"
				y="0%"
				width="100%"
				height="100%"
			>
				<feTurbulence
					baseFrequency="0.1 0.1"
					type="turbulence"
					result="noise"
					seed="3"
					numOctaves="10"
					stitchTiles="noStitch"
				/>
				<feColorMatrix type="hueRotate" id="turbulence" values="0" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0
               0 0 0 0 0
               0 0 0 0 0
               1 0 0 0 0"
				/>
				<feDisplacementMap in="SourceGraphic" scale="15" />
			</filter>
			<filter id="waterFilter" x="0%" y="0%" width="100%" height="100%">
				<feTurbulence
					baseFrequency="0.02 0.2"
					type="turbulence"
					result="noise"
					seed="3"
					numOctaves="1"
					stitchTiles="noStitch"
				/>
				<feColorMatrix type="hueRotate" id="turbulence" values="0" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0
               0 0 0 0 0
               0 0 0 0 0
               1 0 0 0 0"
				/>
				<feDisplacementMap in="SourceGraphic" scale="15" />
			</filter>
			<filter id="waterRipple" x="0%" y="0%" width="100%" height="100%">
				<feTurbulence
					baseFrequency="0.005 0.3"
					type="turbulence"
					result="noise"
					seed="3"
					numOctaves="1"
					stitchTiles="noStitch"
				/>
				<feColorMatrix type="hueRotate" id="turbulence" values="0" />
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
					id="ocean-gradient"
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
				<linearGradient
					id="wave-gradient"
					x1="0%"
					x2="0%"
					y1="0%"
					y2="100%"
				>
					<stop offset="0%" stopColor={colors.water.dark} />
					<stop offset="100%" stopColor={colors.water.light} />
				</linearGradient>
			</defs>
			<rect className="ocean-shape" width="1000" height="120" />
			<Horizon
				params={{ x: 0, y: 2, m: { x: 2, y: 1 }, opacity: 0.75 }}
			/>
			<g filter="url(#waterFilter)">
				<rect
					className="ocean-shape"
					width="1000"
					height="120"
					fillOpacity="0.5"
				/>
				<Waves
					params={{ x: 0, y: 0, m: { x: 8, y: 8 }, opacity: 0.75 }}
				/>
				<GroundWaves
					params={{ x: 0, y: 45, m: { x: 13, y: 13 }, opacity: 0.25 }}
				/>
				<GroundWaves
					params={{ x: 0, y: 60, m: { x: 16, y: 16 }, opacity: 0.5 }}
				/>
				<Horizon
					params={{ x: 0, y: 0, m: { x: 2, y: 1 }, opacity: 0.25 }}
				/>
				<Horizon
					params={{ x: 0, y: 15, m: { x: 2, y: 1 }, opacity: 0.15 }}
				/>
			</g>
			<Horizon
				params={{ x: 0, y: 0, m: { x: 2, y: 1 }, opacity: 0.25 }}
			/>
		</CustomSvg>
	);
};
