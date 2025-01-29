import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import { useParallax, useThemeOptions } from 'hooks';
import { IPalmProps } from './';

const CustomSvg = styled('g', {
	name: 'palm-1',
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

export const Palm1 = ({ params }: IPalmProps) => {
	const id = React.useId();
	const colors = useTheme().palette.scene;
	const { themeOptions, setThemeOptions } = useThemeOptions();

	useParallax(`#${CSS.escape(id)}`, params.x, params.y, params.multiplier);

	useGSAP(() => {
		if (themeOptions.animate) {
			const timeline = gsap.timeline({
				repeat: -1,
				repeatRefresh: true,
			});

			timeline.to(`#${CSS.escape(id)}`, {
				duration: params.palmDuration,
				rotation: params.palmRotation,
				ease: params.ease,
				svgOrigin: '356 280',
			});

			for (let i = 1; i <= 7; i++) {
				const leafTimeline = gsap.timeline({
					repeat: -1,
					repeatRefresh: true,
				});

				leafTimeline.to(`#${CSS.escape(id)}-${i}`, {
					duration: params.leafDuration,
					rotation: params.leafRotation,
					ease: params.ease,
					svgOrigin: '50 20',
				});
			}
		}
	});

	return (
		<CustomSvg
			id={id}
			className="palm palm-1 animate-color"
			transform={`translate(${params.x},${params.y})`}
		>
			<g id={`${id}-1`} className="leaf">
				<path
					fill={colors.palm.darker}
					d="M60.2,8.2s6.2,11.1,8.4,21.4l-6.3,1.3,6.1.8s2,9,.3,20.4l-11.9-10,1.5-4.2-2.1,3.7s-12.8-9.9-15.1-12.6c-2.2-2.7,19-20.9,19-20.9h0Z"
				/>
				<path
					className="leaf-dark"
					fill={colors.black}
					d="M68.3,28.2l-9.8-2.8s0,2,2.3,9.7,7.9,17,7.9,17l-11.9-10,1.5-4.2-2.1,3.7-12.7-10.3,10.6-12.2,7.4,1.5,6.3,5.8.5,1.8Z"
				/>
			</g>
			<g className="trunk">
				<path
					className="trunk-dark"
					fill={colors.trunk.dark}
					d="M67.8,168.5s-.4-63.2-2.9-76.7c-2.5-13.4-19.8-70.6-19.8-70.6l2.9-1.2s16.5,55.8,19.8,72c3,14.8,7.2,76.5,7.2,76.5h-7.2Z"
				/>
				<path
					className="trunk-light"
					fill={colors.trunk.light}
					d="M51.7,43.3s1.9,3.2,3.1,6.7c1.6,3.4,10.6,34.6,11.8,40.6,1.2,6.1,3.6,52.1,3.6,52.1l-2.7,4.8s-1.5-49-2.7-55.8c-1.7-9.8-13.1-48.4-13.1-48.4Z"
				/>
			</g>
			<path
				id={`${id}-2`}
				className="leaf"
				fill={colors.palm.darker}
				d="M48.7,31.5s.4,19.4,0,21.8c-.5,2.4-3,8.1-3,8.1,0,0-6.1-7.5-7.8-11.7s-6.2-14.9-6.2-14.9c0,0,17.1-3.3,17.1-3.3Z"
			/>
			<g id={`${id}-3`} className="leaf">
				<path
					fill={colors.palm.dark}
					d="M50.6,19.5s-12-7.3-17.2-8c-5.3-.7-23.4,4.8-25.6,6.7-2.2,1.9-7.8,11.2-7.8,11.2l8.4-2.3v-5.2l1.3,4.8s9.7-1.6,14-2.2,11.5-.8,11.5-.8l3-2.9-.7,2.4s10.2-1.7,13-3.7h.1Z"
				/>
				<path
					className="leaf-dark"
					fill={colors.black}
					d="M9.7,26.7l-2.1-7.6s.5-1,2.7-1.6l4.9,8.4s-5.5.9-5.5.9Z"
				/>
				<path
					className="leaf-backlight"
					fill={colors.palm.light}
					d="M44.5,16s-10.2-3.6-13.4-3.8-21,4.7-22.8,6.2c-1.8,1.4-8.3,11-8.3,11,0,0,5.9-9.5,7.8-11.2,1.9-1.7,19.8-7.6,25.6-6.7s11.1,4.5,11.1,4.5Z"
				/>
			</g>
			<g id={`${id}-4`} className="leaf">
				<path
					fill={colors.palm.dark}
					d="M46,19.8s-.6-13.2.6-15.8c1.2-2.5,19.8,1.9,19.8,1.9l-11.7,8.7-8.7,5.2Z"
				/>
				<path
					className="leaf-backlight"
					fill={colors.palm.light}
					d="M51.9,3.3s-3.6.1-4.6,1.2c-1,1-1.4,12.6-1.4,12.6,0,0-.3-11.7.9-13.4.7-1.1,5.2-.5,5.2-.5Z"
				/>
			</g>
			<g id={`${id}-5`} className="leaf">
				<path
					fill={colors.palm.darker}
					d="M107.6,11.9s-20.3,5.4-27.6,8.4c-7.3,3-24.7.9-24.7.9l15.4-14.3,13.4-2.6s23.5,7.6,23.5,7.6Z"
				/>
				<path
					fill={colors.palm.light}
					d="M50.2,17.1S64.7,4,70.4.9s28,2.6,42.2,10c0,0-14.1,3-23.4,4.6l-5.1-4.8,2.4,5.3s-10.3,2.1-17.2,4c-6.9,1.8-18.3,1-18.3,1l-.8-4h0Z"
				/>
				<path
					className="leaf-light"
					fill={colors.white}
					d="M89.9,3l5.7,11.3-6.4,1.2-5.1-4.8-3.8-9.9s5.8.4,9.6,2.2Z"
				/>
				<path
					className="leaf-dark"
					fill={colors.black}
					d="M86.5,16l-6.8-15.1s-2.7-.9-5.8,0l4.7,16.8s7.9-1.7,7.9-1.7ZM62,21l-5.8-9.2-1.4,1.2s.8,6,.3,8.2c0,0,4.2,0,6.8-.1Z"
				/>
				<path
					className="leaf-backlight"
					fill={colors.palm.lighter}
					d="M76.3.7c-7.3.4-15.3,7.1-15.3,7.1,0,0,7.2-6.1,9.9-7.1s15.9-1.2,37.6,8.3c0,0-24.9-8.7-32.2-8.2Z"
				/>
			</g>
			<g id={`${id}-6`} className="leaf">
				<path
					fill={colors.palm.main}
					d="M50.9,21s-19.2-1.2-24.5,1.2c-5.3,2.4-15.7,13.6-15.7,13.6l4.9-.9-5.4,3.6s-3,9.2-2.4,22.5l14-8.6,1.9-2.9,3-.4s13.6-18.8,14.6-19.9c1.1-1.1,10.1-5.5,10.1-5.5l-.6-2.7h0Z"
				/>
				<path
					fill={colors.palm.light}
					d="M27.9,29.4c-3.6,2.3-20.1,31.6-20.1,31.6,0,0-.9-11,2.4-22.5l5.4-3.6-4.9.9s9.6-10.7,15.5-13.5c5.9-2.8,18.8-1.6,18.8-1.6,0,0-5.4,1.2-17.1,8.7Z"
				/>
				<path
					className="leaf-light"
					fill={colors.white}
					d="M22.3,36.1l-6.5,10.6-7.7,2.4s.6-6.5,2.1-10.6l12.1-2.4Z"
				/>
				<path
					className="leaf-dark"
					fill={colors.black}
					d="M23.2,35.8l3.5,13.3-3,.4-1.8-11.8,1.3-1.9ZM15.2,35.2l9.3-2.6,2-2.4-12.4,2.4-3.3,3.2,4.4-.6ZM29.7,44.9l-1.3-15.9-3.1-6.3s.8-.8,5.3-1.7c0,0-1.4,12.4-.8,23.7l-.2.3Z"
				/>
				<path
					fill={colors.palm.lighter}
					d="M39.9,22.6s-9.3,4.2-12.7,6.9c-3.4,2.6-13.8,20.5-13.8,20.5l-5.5,11,12-20s6.1-9.7,7.7-10.9c1.6-1.2,12.3-7.4,12.3-7.4h0Z"
				/>
			</g>
			<g id={`${id}-7`} className="leaf">
				<path
					fill={colors.palm.main}
					d="M46.7,16l-13.6-2s-3.2,10.9-2.9,12.5c.3,1.6,0,31.6,0,31.6,0,0,9.5-9.3,14.9-15.5l-2.4-3.7,3.4,3.1s4.9-8.4,7.7-15.3c2.8-6.9.8-15.2.8-15.2,0,0-7.9,4.5-7.9,4.5Z"
				/>
				<path
					fill={colors.palm.light}
					d="M46.7,16s-7.4,7.7-9,11.5-7.5,30.6-7.5,30.6c0,0-.9-19.9,0-31.6s2.9-12.5,2.9-12.5c0,0,13.6,2,13.6,2Z"
				/>
				<polygon
					className="leaf-dark"
					fill={colors.black}
					points="46.1 42 35.7 32.6 37.6 28 49.1 36.5 46.1 42"
				/>
				<path
					className="leaf-light"
					fill={colors.white}
					d="M36.6,27.5l2.9-4-9.1.6s-.4,5.2-.4,7.2l6.7-3.8Z"
				/>
				<path
					fill={colors.palm.lighter}
					d="M46.7,16s-8.4,8.2-9.9,11.1c-1.6,2.9-6.6,31.1-6.6,31.1,0,0,5.6-25.7,7.4-30.1s9.1-12.1,9.1-12.1Z"
				/>
			</g>
		</CustomSvg>
	);
};
