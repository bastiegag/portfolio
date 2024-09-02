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
	'.ocean-back': {
		fill: 'url(#ocean-gradient)',
	},
}));

export const Ocean = () => {
	gsap.registerPlugin(useGSAP);

	const colors = useTheme().palette.scene.ocean;

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
		<CustomSvg transform={`translate(0,280)`}>
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
					<stop offset=".2" stopColor={colors.back.light} />
					<stop offset="1" stopColor={colors.back.dark} />
				</radialGradient>
			</defs>
			<rect className="ocean-back" width="1000" height="120" />
			<g filter="url(#waterFilter)">
				<rect className="ocean-back" width="1000" height="120" />
				<Waves />
				<GroundWaves />
			</g>
			<Horizon />
		</CustomSvg>
	);
};
