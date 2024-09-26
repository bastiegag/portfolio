import { useId } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import { FoliagesProps } from './';

const CustomSvg = styled('g', {
	name: 'leaf',
	slot: 'Root',
})(() => ({}));

export const Leaf2 = ({ params }: FoliagesProps) => {
	gsap.registerPlugin(useGSAP);

	const id = useId();
	const colors = useTheme().palette.scene;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to(`#${CSS.escape(id)}`, {
			duration: params.duration,
			rotation: params.rotation,
			ease: params.ease,
			svgOrigin: '22 22',
		});
	});

	return (
		<CustomSvg
			className="leaf leaf-2"
			transform={`translate(${params.x},${params.y})`}
		>
			<g id={id}>
				<path
					fill={colors.leaf.dark}
					d="M18.7,15.4c0-3,1-6.7,1.1-8.7.1-2,.8-4.5-1.8-6l-8.1,2.3s8.1,3.3,8.4,4.6c.3,1.4-.1,4.9-.2,7.6,0,4,.5,10.1.5,10.1h3.9s-3.5-4.9-3.7-9.9Z"
				/>
				<path
					fill={colors.leaf.main}
					d="M5.3,14.7c.2,0,1.4.8,2.7,1,.7-.5,1.4-1,2-1.4l1.2-1.6-1-.7,1.2.4,1-1.3-4.1-2.1,4.6,1.5,1.2-2.8-1.8-.3,1.8-.2,1-2.3-3.1-1h3.6s2.3-3.2,2.3-3.2C18,.7,9.7,0,9.1,0S.9,1.1.7,1.5l-.2,1.6,2.8.3L.1,3.7s-.5,4.1.7,6.4c1.2,2.3,2,6.5.4,8.1,0,0,3.1,0,4.6-1.2.4-.3.9-.5,1.3-.8-1.1-.4-2-1.6-1.8-1.6Z"
				/>
				<path
					fill={colors.leaf.light}
					d="M11.4,12.4l-1.2-.4,1,.7-.2.3c-2.8-2-4.5-2.7-5.1-2.9l5.8,1.9-.3.4ZM14.7,5.8l-8.6-.4-.2,1.3s4.9.7,7.9,1.6l.3-.8-1.8-.3,1.8-.2.6-1.3ZM7.8.8s5.6,1.1,8.9,1.7l1.3-1.8-8.9-.7h-.8c0,0-.4.8-.4.8Z"
				/>
				<path
					className="shadow"
					fill={colors.leaf.darker}
					d="M.7,1.5l-.2,1.6,2.8.3L.1,3.7s-.5,4.1.7,6.4c1.2,2.3,2,6.5.4,8.1,0,0,0,0,.1,0,3.4-2.7,5-8.3,4.6-10.1-.4-1.6.5-5.5,2.2-8.1C6.1.4.8,1.2.7,1.5Z"
				/>
				<path
					fill={colors.leaf.dark}
					d="M6,8.1c0,.4,0,.9,0,1.5l-4.4,2.4c-.2-.7-.5-1.3-.8-1.9-.2-.4-.4-.9-.5-1.5,3-.6,5.1-1.2,5.6-1.2,0,.3,0,.5,0,.7ZM4.8,13.6H2c0,.4.1.9.1,1.3l2.3-.5c.1-.3.3-.6.4-.8Z"
				/>
			</g>
		</CustomSvg>
	);
};
