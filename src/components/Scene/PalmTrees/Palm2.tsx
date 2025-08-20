import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import { useParallax } from 'hooks';
import { IPalmProps } from './';

const CustomSvg = styled('g', {
	name: 'palm-2',
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

export const Palm2 = ({ params }: IPalmProps) => {
	const id = React.useId();
	const colors = useTheme().palette.scene;

	useParallax(`#${CSS.escape(id)}`, params.x, params.y, params.m);

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to(`#${CSS.escape(id)}`, {
			duration: params.palmDuration,
			rotation: params.palmRotation,
			ease: params.ease(),
			svgOrigin: '544 288',
		});

		for (let i = 1; i <= 7; i++) {
			const leafTimeline = gsap.timeline({
				repeat: -1,
				repeatRefresh: true,
			});

			leafTimeline.to(`#${CSS.escape(id)}-${i}`, {
				duration: params.leafDuration,
				rotation: params.leafRotation,
				ease: params.ease(),
				svgOrigin: '65 16',
			});
		}
	});

	return (
		<CustomSvg
			id={id}
			className="palm palm-2 animate-color"
			transform={`translate(${params.x},${params.y})`}
		>
			<g id={`${id}-1`} className="leaf">
				<path
					fill={colors.palm.darker}
					d="M55.5,18.2s4.5,11.9,11,20.2l5-4-3.3,5.2s5.6,7.3,15.5,13.4v-15.5l-4.2-1.6,4.2.8s.7-16.2,0-19.6c-.7-3.5-28.2,1.2-28.2,1.2h0Z"
				/>
				<path
					className="leaf-dark"
					fill={colors.black}
					d="M65.7,37.3l4-9.4s1.5,1.4,5.9,8c4.4,6.6,8.1,17.1,8.1,17.1v-15.5l-4.2-1.6,4.2.8-1.7-11.1-10.9-9.4-15.6,2.1c3.8,10.3,10.2,19,10.2,19Z"
				/>
			</g>
			<path
				id={`${id}-2`}
				className="leaf"
				fill={colors.palm.darker}
				d="M48.2,23.6s3.4,19.1,4.3,21.3c.9,2.3,4.5,7.4,4.5,7.4,0,0,4.6-8.5,5.4-13,.9-4.5,3.2-15.8,3.2-15.8h-17.4,0Z"
			/>
			<g className="trunk inset-light">
				<path
					className="trunk-dark"
					fill={colors.trunk.dark}
					d="M49.3,167.3s12.2-59.8,12.8-83c.3-10,.3-64.8.3-64.8l1.9-.4s1,59.4,1.3,66.8-8.1,81.4-8.1,81.4h-8.2Z"
				/>
				<path
					className="trunk-light"
					fill={colors.trunk.light}
					d="M63.6,44.3c.6.9.5,36.2,0,41.6-.5,5.3-1.2,12.2-1.2,12.2l-1.6,1.4s1.1-8.5,1.3-15.2.4-42,.4-42c0,0,.5,1.2,1.1,2Z"
				/>
			</g>
			<g id={`${id}-3`} className="leaf inset-light">
				<path
					fill={colors.palm.dark}
					d="M62.4,16.4s10.3-9.5,15.4-11.2c5-1.7,23.9.2,26.4,1.6s9.8,9.5,9.8,9.5l-8.7-.7-1-5.1-.4,4.9s-9.8.3-14.1.6c-4.3.3-11.4,1.4-11.4,1.4l-3.5-2.2,1.1,2.2s-10.4.3-13.5-1.1h-.1Z"
				/>
				<path
					className="leaf-dark"
					fill={colors.black}
					d="M103.9,15.4l.5-8.3s-1.1-.3-2.8-.5l-3.1,9s5.4-.2,5.4-.2Z"
				/>
				<path
					className="leaf-backlight"
					fill={colors.palm.light}
					d="M67.8,11.8s9.4-5.6,12.5-6.4,21.5.6,23.6,1.7c2.1,1,10.1,9.3,10.1,9.3,0,0-6.5-7.7-9.8-9.6s-20.3-3.5-25.9-1.7c-5.5,1.8-10.6,6.8-10.6,6.8h.1Z"
				/>
			</g>
			<g id={`${id}-4`} className="leaf inset-light">
				<path
					fill={colors.palm.dark}
					d="M67,15.8s-2-13.1-3.7-15.4c-1.7-2.3-19,5.7-19,5.7l13.1,6.3s9.6,3.4,9.6,3.4Z"
				/>
				<path
					className="leaf-backlight"
					fill={colors.palm.light}
					d="M58.2.7s3.5-.4,4.7.4c1.2.8,3.6,11.7,3.6,11.7,0,0-1.7-11-3.2-12.4-1-1-5.1.3-5.1.3Z"
				/>
			</g>
			<g id={`${id}-5`} className="leaf inset-light">
				<path
					fill={colors.palm.darker}
					d="M5.1,19.8s20.9,1.4,28.7,3,22.6-2.3,22.6-2.3l-16-12.7h-13.7L5.1,19.8Z"
				/>
				<path
					fill={colors.palm.dark}
					d="M62.4,13.9S45.7,3.9,39.5,1.9C33.3,0,12.5,9.8,0,19.9c0,0,14.5.3,23.9,0l4.1-5.7-1.3,5.7s10.5.1,17.7.6,18.1-2.5,18.1-2.5v-4h0Z"
				/>
				<path
					className="leaf-dark"
					fill={colors.black}
					d="M26.7,19.9l3.6-16.5s2.5-1.4,5.8-1l-1.2,17.7s-8.2-.2-8.2-.2Z"
				/>
				<path
					className="leaf-light"
					fill={colors.white}
					d="M20.7,7.5l-3.5,12.5h6.7c0-.2,4.1-5.8,4.1-5.8l1.1-10.3-8.4,3.6Z"
				/>
				<path
					className="leaf-backlight"
					fill={colors.palm.light}
					d="M3.9,16.9S26.4,3.8,33.7,2.8c7.3-1,15.5,3.6,15.5,3.6,0,0-8-4.3-10.8-4.8S23.4,3.4,3.9,16.9Z"
				/>
			</g>
			<g id={`${id}-6`} className="leaf">
				<path
					fill={colors.palm.main}
					d="M62.4,17.9s18.6-4.9,24.2-3.5c5.7,1.4,18,10.4,18,10.4h-4.9l6,2.5s4.8,8.3,6.7,21.6l-15.5-5.7-2.4-2.4-3,.2s-16.9-15.8-18.2-16.7c-1.2-.8-10.9-3.5-10.9-3.5v-2.8h0Z"
				/>
				<path
					fill={colors.palm.light}
					d="M72.9,17.2s10,2.6,13.8,4.6c3.8,1.9,25.7,27.1,25.7,27.1,0,0-1-10.1-6.6-21.7l-5.4-2.2,4.4-.2s-11.7-8.7-18-10.4-18.9,0-18.9,0l5.1,2.8h-.1Z"
				/>
				<path
					className="leaf-dark"
					fill={colors.black}
					d="M92.5,26.7l-1,14.3,3-.2-.4-12.4-1.6-1.7ZM75.5,26.2v-8.3c0,0,2.5-4.2,2.5-4.2h-.9s-8.3,9-8.3,9c0,0,3.8,1.2,4.5,1.6s2.2,1.9,2.2,1.9ZM100.4,25l-10.2-.8-2.3-2h13.3l3.7,2.6-4.4.2Z"
				/>
				<path
					className="leaf-light"
					fill={colors.white}
					d="M105.8,27.2h-12.4l8.4,9.2,8.1,1.1s-1.8-5.7-4-10.3Z"
				/>
				<path
					fill={colors.palm.lighter}
					d="M73.6,17.4s9.9,2.4,13.7,4.3c3.8,1.9,17.5,17.4,17.5,17.4l7.6,9.8-15.7-17.5s-7.9-8.4-9.7-9.3c-1.8-.9-14-4.9-14-4.9l.6.2Z"
				/>
			</g>
			<g id={`${id}-7`} className="leaf inset-light">
				<path
					fill={colors.palm.main}
					d="M65.6,14.1s-5.4-7.8-11.8-9.5c0,0-5.2-.4-10.9,8.9l6.4,2.8h-7.3s-5.9,14-6.4,19.9c-.4,6,2,18.7,2,18.7,0,0,11.9-11.2,18.3-18.5l-2.8-8.6,5.3,5.6,19.8-21.2s-5.5.2-12.7,1.8h0Z"
				/>
				<path
					fill={colors.palm.light}
					d="M53.2,19.1c-3.2,2.2-11.9,15.3-13,18.9s-2.6,16.9-2.6,16.9c0,0-2.3-11.8-2-18.6.2-6.8,6.4-20,6.4-20h7.2l-6.3-2.8s4.9-8.6,10.9-8.9c0,0,8.6,1.8,11.7,9.4,0,0-9.1,2.9-12.3,5.1Z"
				/>
				<path
					className="leaf-dark"
					fill={colors.black}
					d="M58.4,33.4l-8.6-9.1,3.2-3.9,9.7,8.4-4.2,4.5ZM42.9,13.5l11.2,5,5.8-2.4-14.7-5.9s-1.3,1.6-2.3,3.3Z"
				/>
				<path
					className="leaf-light"
					fill={colors.white}
					d="M35.7,35.4l5.5.9,8.8-13.5-10.6-.2s-3.5,8.7-3.6,12.9Z"
				/>
				<path
					fill={colors.palm.lighter}
					d="M37.6,54.9s2.3-14.2,3.1-16.9c.7-2.7,12.2-17.2,13.9-18.9,1.7-1.6,11-5.1,11-5.1,0,0-9.5,3.1-12.7,5.1s-12,16.6-12.7,18.6c-.8,2-2.6,17.2-2.6,17.2Z"
				/>
			</g>
		</CustomSvg>
	);
};
