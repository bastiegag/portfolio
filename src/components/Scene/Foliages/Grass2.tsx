import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import { useParallax } from 'hooks';
import { IFoliagesProps } from './';

const CustomSvg = styled('g', {
	name: 'grass-2',
	slot: 'Root',
})(() => ({}));

export const Grass2 = ({ params }: IFoliagesProps) => {
	const id = React.useId();
	const colors = useTheme().palette.scene;

	useParallax(`#${CSS.escape(id)}`, params.x, params.y, params.m);

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to(`#${CSS.escape(id)}-grass`, {
			duration: params.duration,
			skewX: params.skewX,
			ease: params.ease,
			svgOrigin: '21 13',
		});
	});

	return (
		<CustomSvg
			id={id}
			className="grass grass-2"
			transform={`translate(${params.x},${params.y})`}
		>
			<g id={`${id}-grass`} className="animate-color">
				<path
					fill={colors.foliage.dark}
					d="M3.6,11.1L0,10.9c.7-3.3,0-5.6,0-5.6h2.7c0,0,1.5,2.6.9,5.8ZM39.6,5.8l-1.5-.4s2-2.6,1.7-2.9-3.4-1.7-3.4-1.7c0,0-3.1,4.4-3.5,4.8-.4.4,1.5-3.6,1.5-3.6,0,0-1.3-.8-6.9-.6l-4.4,8.2,19.9,3.2-3.4-6.9ZM18.8,11.1L25.3,1.9h-4.5c0-.1-.2.3-.5,1.1s-1.7,2.3-1.7,2.3c0,0,.6-1.2.9-2.1.3-.9,0-3.2,0-3.2-.7,4.2-3.2,5.3-3.2,5.3l1.5-3.4-2.6.3s-.4,2.3-4.1,6.7l7.6,2.2Z"
				/>
				<path
					fill={colors.foliage.main}
					d="M7.4,12.7C6.4,8.6,2.6,4.2,2.6,4.2l4.4-.6s1.4,2.5,1.4,2.3c0-.2-.9-4.1-.9-4.1l4.4.8.8,2.1v-2.3c0,0,.7.1.7.1l.4,3.2,1.9-3,2.2.9,3.8.3-2.2,4s2-2.6,3.6-4.2c0,0-1.5,3.1-1.4,3.4,0,.3.5,1.9.5,1.9l.6-3.1,3.3,1.2.2,2.3.9-2.6,2.8.8-1.1,2.8,1.1,2.4H7.4Z"
				/>
			</g>
		</CustomSvg>
	);
};
