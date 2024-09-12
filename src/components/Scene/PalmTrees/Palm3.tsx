import { useId } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import { PalmProps } from './';

const CustomSvg = styled('g', {
	name: 'palm',
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

export const Palm3 = ({ position }: PalmProps) => {
	gsap.registerPlugin(useGSAP);

	const id = useId();
	const colors = useTheme().palette.scene;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to(`#${CSS.escape(id)}`, {
			rotation: 'random(-2,2)',
			duration: gsap.utils.random(2, 5),
			ease: 'power2.inOut',
			svgOrigin: '593 293',
		});

		for (let i = 1; i <= 7; i++) {
			const leafTimeline = gsap.timeline({
				repeat: -1,
				repeatRefresh: true,
			});

			leafTimeline.to(`#${CSS.escape(id)}-${i}`, {
				rotation: 'random(-3,3)',
				duration: gsap.utils.random(2, 3),
				// ease: 'power2.inOut',
				svgOrigin: '91 25',
			});
		}
	});

	return (
		<CustomSvg
			id={id}
			className="palm palm-3"
			transform={`translate(${position[0]},${position[1]})`}
		>
			<g id={`${id}-1`} className="leaf">
				<path
					fill={colors.leaf.darker}
					d="M79.8,42.1l5.5.2-5.2,2.1s1.8,8.9,10.8,24.4l5.1-10.1-5.1-6.7,5.7,5.3s4.8-12.8,4.8-22.3-1.2-13-1.2-13c0,0-12.4-6.4-16.5-.2,0,0-4.7,10.9-3.9,20.3Z"
				/>
				<path
					className="leaf-dark"
					fill={colors.palm.dark}
					d="M90.9,68.8l-1.4-33.6.8-14.3-8.5,6.2-1.7,7.2s-.6,4.8-.3,7.8l5.5.2-5.2,2.1s3.7,13.3,10.8,24.4Z"
				/>
			</g>
			<path
				id={`${id}-2`}
				className="leaf"
				fill={colors.leaf.darker}
				d="M91,17.5s18-5.6,23.2-5.4c5.2.1,24.1,19.2,24.1,19.2,0,0-13.7-1.3-16.9-2.5-3.2-1.2-12.4-4.7-12.4-4.7h-15l-3.1-6.6h0Z"
			/>
			<path
				id={`${id}-3`}
				className="leaf"
				fill={colors.leaf.darker}
				d="M79.7,16.8s-13.3,1.3-20.9,3.3-24.6,18.5-24.6,18.5c0,0,6.9-.3,12.5-2l1.7-7v6.3s12.5-.6,19.6-5.3c7.1-4.7,8.7-11.4,8.7-11.4l3-2.5h0Z"
			/>
			<g className="trunk">
				<path
					className="trunk-dark"
					fill={colors.trunk.dark}
					d="M0,172.6s24.4-86.2,32.2-103.2c7.7-17,53.2-48.4,53.2-48.4l2.9,2.9s-36.8,23.6-50.5,45.2c-13.7,21.5-29.3,103.4-29.3,103.4H0Z"
				/>
				<path
					className="trunk-light"
					fill={colors.trunk.light}
					d="M7.3,147.2s6.1-6.1,7.1-8.5,14-59.2,21.6-70.3c8.2-12,16.6-18,16.6-18l1.5-5.2s-17,13.8-21.9,24.2c-4.9,10.5-19.9,57.5-24.8,77.8h0Z"
				/>
			</g>
			<g id={`${id}-4`} className="leaf">
				<path
					fill={colors.leaf.main}
					d="M90.3,22.3s27.7-8.1,34.8-8.8c7-.6,31.6,5.1,31.6,5.1l-6.8,1.9-6.4-2.9,4.1,4s-19,4-21.1,4.8l-2.3-.8-2.7.8s-5.9,2.4-12.4,2.2-18.7-6.4-18.7-6.4h-.1Z"
				/>
				<path
					className="leaf-dark"
					fill={colors.palm.dark}
					d="M115.4,28.1l-2.4-12-3.7.9,2.1,11.6,4-.5ZM126.5,26.4l-2.5-12.5.2,11.7,2.3.8ZM135.6,14.8l9.2,7.4,2.8-.6-4.1-4-3.5-2-4.4-.7Z"
				/>
				<path
					className="leaf-light"
					fill={colors.palm.light}
					d="M124,13.9l2.5,12.5,7.3-1.8-3.2-10.7s-4.2-.5-6.5,0Z"
				/>
				<path
					fill={colors.leaf.lighter}
					d="M96,20.7s23.7-6.3,29.2-6.6c5.5-.4,31.5,4.5,31.5,4.5,0,0-23.4-5.7-30.8-5.2-7.4.5-26.5,6-29.9,7.3Z"
				/>
			</g>
			<g id={`${id}-5`} className="leaf">
				<path
					fill={colors.leaf.darker}
					d="M40.2,9.5s7.9,2.8,18.6,4.4c10.7,1.7,20.2,1.5,20.2,1.5l3.6-8-8.6-5.4s-24.7,3-33.8,7.5Z"
				/>
				<path
					fill={colors.leaf.dark}
					d="M91,18.4S81.8,2.6,78.5.6c-3.3-2-21.3,1.3-38.3,8.9,0,0,12.5,1.8,16.1,2.1l2.8-6.8-1.1,6.8h13.7l4.9-6.8-4,8.5,2.3,1.7,5.7-3.9-4.3,4.4s5.7,2.9,14.7,2.9Z"
				/>
				<path
					className="leaf-dark"
					fill={colors.palm.dark}
					d="M58,11.6l1.4-8.6,1.6-.4,1.9,9h-4.9ZM69.7,11.6l8.5-10.5-1.6,3.9-4.8,6.6h-2Z"
				/>
				<polygon
					className="leaf-light"
					fill={colors.palm.light}
					points="58.9 3.1 56.3 11.6 50.4 10.9 55.5 4 58.9 3.1"
				/>
				<path
					fill={colors.leaf.light}
					d="M75.9.4c5.3.8,15.1,18,15.1,18,0,0-8.5-15.4-12.5-17.8s-16.9.9-26.9,4.5c0,0,19.1-5.5,24.3-4.7Z"
				/>
			</g>
			<g id={`${id}-6`} className="leaf">
				<path
					fill={colors.leaf.darker}
					d="M98.6,27.2s8.9,20.2,22.8,32.3l-1.8-19.8-5.6-9.6s-15.4-2.9-15.4-2.9Z"
				/>
				<path
					fill={colors.leaf.light}
					d="M88.2,21.6s21.6,3.7,29.3,8.5c7.8,4.8,5.6,37,5.6,37l-9.9-32.8-25.5-11.1-.6-1.2,1.1-.3h0Z"
				/>
				<path
					fill={colors.leaf.main}
					d="M87,21.9s23.8,4.4,27.5,9.6c3.6,5.2,8.6,35.6,8.6,35.6l-10-7.9,4.1-10.3-5.1,8.6-6.3-9.3,4.7-11.5-6.2,10.1-1.4-1.3,6.4-11.4-7.8,9.2s-11.1-14.6-14.4-21.3h0Z"
				/>
				<polygon
					className="leaf-dark"
					fill={colors.palm.dark}
					points="112.1 57.5 110.1 54.5 118.2 43.1 119.3 45.5 112.1 57.5"
				/>
				<path
					className="leaf-light"
					fill={colors.palm.light}
					d="M114.6,31.2l5.4,1.9s1.9,4.1,2.4,8.5l-4.3-1s-1.7-5.4-3.5-9.4Z"
				/>
				<path
					fill={colors.leaf.lighter}
					d="M90.7,22.7s21.1,6.5,23.6,9.3c2.5,2.7,5.8,21.2,6,22.4s2.8,12.7,2.8,12.7c0,0-1.8-10.9-1.8-13.2s-3.4-18.4-6.7-22.7c-3.3-4.2-23.9-8.5-23.9-8.5Z"
				/>
			</g>
			<g id={`${id}-7`} className="leaf">
				<path
					fill={colors.leaf.main}
					d="M92.4,22.3l-4.3-2.5,2.8,3.4-11.7,15.7-6-8.4,4.2,10.6c-7.9,5.5-19.2,10.9-19.2,10.9-2-11.3,0-23.3,0-23.3l9.7-1.1-8.5-1.1s14.6-16.6,19.8-16c5,.5,16.3,10.8,16.9,11.4h0l-3.7.4Z"
				/>
				<path
					fill={colors.leaf.light}
					d="M96.1,21.9c-.6-.4-10.1-6.5-12-6.5s-5.9,1.3-11.8,8.6c-6,7.3-14.1,27.9-14.1,27.9-2-11.3,0-23.2,0-23.2l9.7-1.1-8.5-1.1s14.6-16.7,19.8-16.1c5,.5,16.9,11.5,16.9,11.5Z"
				/>
				<path
					className="leaf-dark"
					fill={colors.palm.dark}
					d="M79.2,38.9l-8.8-12.3,1.2-1.7,12.4,7.5-4.8,6.5ZM59.4,26.5l10.1,1.2.3-.5-9.4-1.8-1,1.1ZM92.4,22.3l-10.6-6.1,3-.2,9.8,6.1-2.2.2Z"
				/>
				<path
					className="leaf-light"
					fill={colors.palm.light}
					d="M69.8,27.3l5.6-7.8-7-2.3s-5.8,5.5-8.1,8.2l9.4,1.8Z"
				/>
				<path
					fill={colors.leaf.lighter}
					d="M58.2,52s3.3-9.7,6.8-16.7c3.4-7,7.9-13.5,11-16.3,3.1-2.7,7.1-4.1,9-4,2,.1,11.1,6.9,11.1,6.9,0,0-8.4-5.6-11.3-5.8s-9.3,4.7-11.9,7.3c-2.6,2.6-8.1,14.6-9,16-.9,1.4-5.7,12.6-5.7,12.6Z"
				/>
			</g>
		</CustomSvg>
	);
};
