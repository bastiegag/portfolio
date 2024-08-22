import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled } from '@mui/material';

import { Horizon } from './Horizon';
import { Waves } from './Waves';
import { GroundWaves } from './GroundWaves';

export const Ocean = () => {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to('#turbulence', {
			attr: { baseFrequency: '0.02 0.3' },
			duration: 6,
			ease: 'none',
		});
		timeline.to('#turbulence', {
			attr: { baseFrequency: '0.02 0.35' },
			duration: 6,
			ease: 'none',
		});
	});

	const CustomSvg = styled('g', {
		name: 'ocean',
		slot: 'Root',
	})(() => ({
		'.ocean-back': {
			fill: 'url(#ocean-gradient)',
		},
		'.island-water': {
			fill: '#7adec5',
			transform: 'scale(0.85) translateY(-6px) translateX(35px)',
			transformOrigin: '50% 50%',
		},
	}));

	return (
		<CustomSvg
			transform={`translate(0,280)`}
			// xmlns="http://www.w3.org/2000/svg"
			// xmlnsXlink="http://www.w3.org/1999/xlink"
			// version="1.1"
			// viewBox="0 0 1000 120"
			// preserveAspectRatio="xMidYMid slice"
			// width="1000"
			// height="120"
			// y="280"
		>
			<filter id="waterFilter" x="0%" y="0%" width="100%" height="100%">
				<feTurbulence
					// id="turbulence"
					baseFrequency="0.02 0.35"
					type="turbulence"
					result="noise"
					seed="3"
					numOctaves="2"
					stitchTiles="noStitch"
				/>
				<feDisplacementMap
					in="SourceGraphic"
					in2="noise"
					scale="15"
					xChannelSelector="R"
					yChannelSelector="G"
				></feDisplacementMap>
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
					<stop offset=".2" stopColor="#46e7c4" />
					<stop offset=".6" stopColor="#4dbbdc" />
					<stop offset=".8" stopColor="#529fec" />
					<stop offset="1" stopColor="#5495f2" />
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
