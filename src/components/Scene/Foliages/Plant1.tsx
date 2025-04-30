import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import { useParallax } from 'hooks';
import { IFoliagesProps } from './';

const CustomSvg = styled('g', {
	name: 'plant-1',
	slot: 'Root',
})(() => ({}));

export const Plant1 = ({ params }: IFoliagesProps) => {
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
			skewX: params.skewX,
			ease: params.ease(),
			svgOrigin: '30 24',
		});
	});

	return (
		<CustomSvg
			id={id}
			className="plant plant-1"
			transform={`translate(${params.x},${params.y})`}
		>
			<g id={`${id}-skew`} className="animate-color">
				<path
					fill={colors.foliage.main}
					d="M52.2,10.8c-2.1,2.6-3.7,4.8-3.7,4.8l2.9-5.6c-.8-.7-1.6-1.3-2.4-2-.6,1.1-1.1,2.1-1.1,1.9s0-1.5.1-2.6c-1.5-1.1-3.1-2.1-4.9-3-.6,1.2-1.5,3.1-2.6,6.2,0,0,.6-4,.8-7.1-2.5-1.2-5.3-2.1-8.3-2.7,0,1.4-.2,4.6-.2,4.3s-.4-2.7-.7-4.4c-.5,0-1.1-.2-1.6-.3-.9-.1-1.8-.2-2.6-.3l1.6,7.4L26.2,0c-2.5-.1-4.9,0-7.1.3l2.7,4.3L17.2.7c-3.5.7-6.6,1.9-9.1,3.6l7.7,5.7L7.1,5c-1.2.9-2.3,2-3.3,3.2,2.1.7,7.5,2.5,8,2.6.4.1-5-.8-8.8-1.5C.4,13.2-.6,18.1.4,24h60.8c-.2-2.4-3.3-8.1-9-13.2Z"
				/>
				<path
					fill={colors.foliage.light}
					d="M46.3,20.3l7-8.5c.7.7,1.3,1.4,1.9,2l-8.9,6.5ZM45.9,6c-1.1,3.3-5.1,13.2-5.1,13.2l2.6.5,6-11.3c-.2-.1-.3-.3-.5-.4-.6,1.1-1.1,2.1-1.1,1.9s0-1.5.1-2.6c-.7-.5-1.3-.9-2-1.3ZM22.9,12.1L12.4,2.1c-1.1.4-2.1.9-3.1,1.5,4.7,3.2,12.8,9.5,12.8,9.5l.8-.9Z"
				/>
				<path
					fill={colors.foliage.dark}
					d="M16.5.8c.2,0,.5-.1.7-.2l4.5,4L19.1.4c.4,0,.7,0,1.1-.1,2.9,5.1,5.8,12.4,5.8,12.4,0,0-4.5-7.8-9.4-11.8ZM32.8,18.9s1.1-6.2,2.4-17.6c-.7-.2-1.4-.4-2.2-.5,0,1.4-.2,4.6-.2,4.3s-.4-2.7-.7-4.4c-.2,0-.3,0-.5,0,.7,6.1,1.1,18.4,1.1,18.4ZM3,9.3c-.5.8-1,1.6-1.4,2.4,7.8.6,18.4,4.1,18.4,4.1l.9-1S11.3,9.1,4.4,7.6c-.2.2-.4.4-.5.6,2.1.7,7.5,2.5,8,2.6.4.1-5-.8-8.8-1.5Z"
				/>
			</g>
		</CustomSvg>
	);
};
