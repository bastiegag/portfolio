import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import { useParallax } from 'hooks';
import { IFoliagesProps } from './';

const CustomSvg = styled('g', {
	name: 'plant-4',
	slot: 'Root',
})(() => ({
	'.leaf-light, .leaf-dark': {
		opacity: 0.25,
	},
	'.leaf-dark': {
		mixBlendMode: 'multiply',
	},
	'.leaf-light': {
		mixBlendMode: 'overlay',
	},
}));

export const Plant4 = ({ params }: IFoliagesProps) => {
	const id = React.useId();
	const colors = useTheme().palette.scene;

	useParallax(`#${CSS.escape(id)}`, params.x, params.y, params.m);

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to(`#${CSS.escape(id)}-skew`, {
			duration: params.duration,
			rotation: params.rotation,
			skewX: params.skewX,
			ease: params.ease(),
			svgOrigin: '33 21',
		});

		for (let i = 1; i <= 4; i++) {
			let leafTimeline = gsap.timeline({
				repeat: -1,
				repeatRefresh: true,
			});

			leafTimeline.to(`#${CSS.escape(id)}-${i}`, {
				duration: params.duration,
				rotation: params.rotation,
				ease: params.ease(),
				svgOrigin: '33 21',
			});
		}
	});

	return (
		<CustomSvg
			id={id}
			className="plant plant-4 animate-color"
			transform={`translate(${params.x},${params.y})`}
		>
			<g id={`${id}-skew`} className="animate-color">
				<g id={`${id}-1`} className="leaf">
					<path
						fill={colors.foliage.main}
						d="M26.8,18.9s1.7-8,3.5-10.4c1.8-2.5,11.4-7.9,13.1-8.1,1.7-.2,7.8,1.2,7.8,1.2l-4.3,2.6-2.2-2.1,1.5,2.5s-4.6,3.4-6.5,5-4.9,4.5-4.9,4.5h-2.4c0,.1,1.3.8,1.3.8,0,0-4.8,3.6-6.8,4h0Z"
					/>
					<path
						fill={colors.black}
						className="leaf-dark"
						d="M46.2,4.5l-2.4-3.9s-.6-.2-1.8.5l1.6,5.4,2.6-2h0Z"
					/>
					<path
						className="leaf-backlight"
						fill={colors.foliage.lighter}
						d="M27.8,14.9s2.6-5.7,3.8-7.2S41.9.8,43.3.6c1.3-.2,8,.9,8,.9,0,0-6.4-1.3-7.8-1.2-1.5.1-11.1,5.3-13.1,8.1-1.9,2.8-2.5,6.5-2.5,6.5Z"
					/>
				</g>
				<g id={`${id}-2`} className="leaf">
					<path
						fill={colors.foliage.dark}
						d="M62.1,15.5s-11.9,2.6-16.2,4.2-14.4,0-14.4,0l9.3-7.9,7.8-1.2,13.4,5Z"
					/>
					<path
						fill={colors.foliage.light}
						d="M28.7,17.1s8.7-7.2,12.1-8.9,16.2,2.2,24.2,6.9c0,0-8.3,1.4-13.7,2.1l-2.8-2.9,1.3,3.1s-6,1-10.1,1.9c-4,.9-10.6.1-10.6.1l-.4-2.3h0Z"
					/>
					<path
						fill={colors.white}
						className="leaf-light"
						d="M52,9.9l3,6.7-3.7.5-2.8-2.9-2-5.8s3.4.4,5.5,1.5Z"
					/>
					<path
						fill={colors.black}
						className="leaf-dark"
						d="M49.7,17.4l-3.6-8.9s-1.5-.6-3.4-.1l2.3,9.9s4.6-.8,4.6-.8ZM35.4,19.7l-3.1-5.5-.8.7s.3,3.5,0,4.8c0,0,2.4.1,3.9.1h0Z"
					/>
					<path
						className="leaf-backlight"
						fill={colors.foliage.lighter}
						d="M44.2,8.3c-4.2,0-9.1,3.7-9.1,3.7,0,0,4.3-3.4,5.9-3.9s9.3-.3,21.6,5.8c0,0-14.2-5.7-18.5-5.6h0Z"
					/>
				</g>
				<g id={`${id}-3`} className="leaf">
					<path
						fill={colors.foliage.main}
						d="M30.6,18.8s-3.3-10.7-5.7-13.1C22.5,3.4,14.3,0,14.3,0l1.5,2.5L12.7.3S7.1.5,0,3.6l7.5,5.8,2,.4.8,1.5s13,3.5,13.8,3.9c.8.4,5.1,4.4,5.1,4.4l1.3-.9h0Z"
					/>
					<path
						fill={colors.foliage.light}
						d="M21.3,8C19.3,6.6,0,3.6,0,3.6,0,3.6,5.8.8,12.7.3l3.1,2.2-1.5-2.5s7.8,3,10.5,5.7,4.7,9.9,4.7,9.9c0,0-1.8-2.7-8.2-7.5Z"
					/>
					<path
						fill={colors.white}
						className="leaf-light"
						d="M16.5,6.4l-7.1-1.4-2.9-3.7S10.2.3,12.7.3l3.8,6.1Z"
					/>
					<path
						fill={colors.black}
						className="leaf-dark"
						d="M16.9,6.8l-6.5,4.6-.8-1.5,6-3.4,1.3.3ZM15.5,2.3l3.3,4.5,1.7.6-3.8-6.2L14.3,0l1.2,2.3ZM13.2,12.2l8.4-4,2.8-3s.6.3,2,2.5c0,0-7,1.8-13,4.4h-.2s0,0,0,0Z"
					/>
					<path
						className="leaf-backlight"
						fill={colors.foliage.lighter}
						d="M27.4,13.2s-4.2-4.2-6.4-5.5c-2.1-1.3-14-3.3-14-3.3L0,3.6l13.3,2.4s6.5,1.3,7.5,2c1,.6,6.5,5.2,6.5,5.2h0Z"
					/>
				</g>
				<g id={`${id}-4`} className="leaf">
					<path
						fill={colors.foliage.main}
						d="M26.5,15.8l-1.5-7.8s-6.6.3-7.4.8C16.7,9.2.2,14.7.2,14.7c0,0,6.9,3.4,11.3,5.2l1.6-2-1.1,2.5s5.5,1.1,9.9,1.3c4.3.2,8.5-2.5,8.5-2.5l-4-3.5Z"
					/>
					<path
						fill={colors.foliage.light}
						d="M26.5,15.8s-5.6-2.6-8-2.8S.2,14.7.2,14.7c0,0,10.8-4.3,17.3-6,6.6-1.7,7.4-.8,7.4-.8l1.5,7.8Z"
					/>
					<polygon
						fill={colors.black}
						className="leaf-dark"
						points="12.1 20.4 15.3 12.9 18.1 13.1 15.7 21 12.1 20.4"
					/>
					<path
						fill={colors.white}
						className="leaf-light"
						d="M18.2,12.4l2.7.8-2.1-4.9s-2.9.8-4,1.1l3.4,3h0Z"
					/>
					<path
						className="leaf-backlight"
						fill={colors.foliage.lighter}
						d="M26.5,15.8s-6.1-3.1-8-3.3C16.6,12.1.2,14.7.2,14.7c0,0,15.2-1.8,17.9-1.7,2.8.2,8.4,2.7,8.4,2.7Z"
					/>
				</g>
			</g>
		</CustomSvg>
	);
};
