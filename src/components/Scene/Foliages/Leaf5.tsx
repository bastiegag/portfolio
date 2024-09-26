import { useId } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import { FoliagesProps } from './';

const CustomSvg = styled('g', {
	name: 'leaf',
	slot: 'Root',
})(() => ({}));

export const Leaf5 = ({ params }: FoliagesProps) => {
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
			svgOrigin: '34 31',
		});
	});

	return (
		<CustomSvg
			className="leaf leaf-5"
			transform={`translate(${params.x},${params.y})`}
		>
			<g id={id}>
				<path
					fill={colors.leaf.dark}
					d="M13.3.3l-11.3.2L.8,3l1.4,1.2-1.8-.3L0,6.1c2.6.5,4.7.6,6.5.6v-1.1l1.2,1c3.4-.2,4.8-1.2,4.8-1.2,6.4-1.2,7.5-.9.7-5.2h.1Z"
				/>
				<path
					fill={colors.leaf.main}
					d="M27.9,17.3c-.9-1-2.4-10.5-4.3-12.5S16.9.8,14.8.2C12.7-.4,2,.5,2,.5c.5.5,1.7.9,2.9,1.7,2.5,0,5.4,0,5.4,0,0,0-3.2.4-5.1.7,1.4,1.1,2.7,2.4,5.2,4.2l4.6-.8-2.8,1.5c.6.5,2.4,2.3,2.4,2.3,1.2-1,2.8-2.2,3.1-2.3.6-.2,3.5.2,3.5.2,0,0-3,0-3.3.5-.2.3-1.1,1-2.2,2.3,5.4,4.5,9.9,6.2,11.1,7.3,1.3,1.2,3.7,5.6,5.9,12l4.2,1.3c-3.4-3.1-8.2-13.1-9-14.1Z"
				/>
				<path
					fill={colors.leaf.dark}
					d="M36.9,31.4c-3.1-2.8-7.3-11.2-8.7-13.5-.9-.3-2.1-.8-3.7-1.2,1.1.6,1.9,1.1,2.3,1.4,1.3,1.2,3.7,5.6,5.9,12,0,0,4.2,1.3,4.2,1.3Z"
				/>
				<path
					fill={colors.leaf.light}
					d="M27.5,16.6c-.7-1.9-1.7-7-2.9-9.9-1.9-1.4-5.2-3.4-8.4-5-.5-.2-1.7-.7-1.5-1.6C14.3,0,13.4,0,12.4,0c1.3.3,2,.9,2.2.9.3.1,3.3,3.3,6.2,6.9h.3-.2c2.7,3.4,5.5,7.1,6.7,8.7v.2Z"
				/>
			</g>
		</CustomSvg>
	);
};
