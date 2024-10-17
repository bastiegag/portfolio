import { useId } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import { FoliagesProps } from './';

const CustomSvg = styled('g', {
	name: 'leaf',
	slot: 'Root',
})(() => ({}));

export const Leaf4 = ({ params }: FoliagesProps) => {
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
			svgOrigin: '2 27',
		});
	});

	return (
		<CustomSvg
			className="leaf leaf-4"
			transform={`translate(${params.x},${params.y})`}
		>
			<g id={id}>
				<path
					fill={colors.leaf.dark}
					d="M32.4,22.6s-2.8-.6-3.5-.8l-1.9-1.5.8-2.8-1.7,2-3.3-2.6c-.5-.9-.9-1.9-1.3-2.7l5.7-3.2-6,2.5c-.6-1.8-.9-3.2-.9-3.2l-3.1-5.9,19.9-3c.5,1.5-.1,3.7-.5,5.4-1.8.2-3.1.3-3.1.3,0,0,1.5.3,2.9.6-.3.9-.5,1.6-.6,1.8l-3.1-.9,3,1.2c-.1.6-.4,2.5,0,4.9h-2c0-.1,2.2.8,2.2.8.3,1.2.8,2.5,1.6,3.7,1.4,2.1,3.9,4.3,3.9,4.3,0,0-4.5,0-8.9-.8ZM3.2,27.3s1.3-8.4,3.7-12c2.3-3.5,4.5-5.3,4.5-5.3l-2-2.7s-3,6.8-3.7,8S0,26.2,0,26.2l3.2,1.1Z"
				/>
				<path
					fill={colors.leaf.main}
					d="M5.5,15.7c4.9-2.8,18.3-5.2,18.3-5.2l-1.8-3.2,3,3.4s1.5-.9,3.8-2.9l-2.1-2.3,3.2,2.1.5-.4-2.9-3.1,4.3,2.3,5.4-4.9s-10.6-1.5-11.5-1.5S9.5,2.8,9.5,2.8l-1.2,2.5,1.1.2,2.3.6c-1.5-.2-2.8-.3-3.9.1l-2.4,9.4Z"
				/>
				<path
					fill={colors.leaf.darker}
					d="M19.2,11.4c-4.2.9-10.3,2.4-13.4,4.1,3.6-4.6,8.3-9.4,10.2-11.3.6,1.1,2,3.8,3.2,7.2ZM9.5,2.9l7.6.5-3.7-1.3c-2.2.4-3.8.7-3.8.7h0ZM30.3,7.1h0s-2.9-3.1-2.9-3.1l4.3,2.3,1.4-1.3L22.8.9l7.5,6.2ZM20.2,2l-.6.3,5.9,8.1c.6-.4,1.7-1.2,3.1-2.4L20.2,2Z"
				/>
			</g>
		</CustomSvg>
	);
};
