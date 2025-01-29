import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import { useParallax } from 'hooks';
import { IFoliagesProps } from './';

const CustomSvg = styled('g', {
	name: 'grass-3',
	slot: 'Root',
})(() => ({}));

export const Grass3 = ({ params }: IFoliagesProps) => {
	const id = React.useId();
	const colors = useTheme().palette.scene;

	useParallax(`#${CSS.escape(id)}`, params.x, params.y, params.multiplier);

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to(`#${CSS.escape(id)}-grass`, {
			duration: params.duration,
			skewX: params.skewX,
			ease: params.ease,
			svgOrigin: '32 15',
		});
	});

	return (
		<CustomSvg
			id={id}
			className="grass grass-3"
			transform={`translate(${params.x},${params.y})`}
		>
			<g id={`${id}-grass`} className="animate-color">
				<path
					fill={colors.foliage.dark}
					d="M64.3,8.8s-2.3.1-2.7,0-2-.5-2-.5v1c-.8-.9-.4-3.2-.4-3.2l-.7,2.5v-1.3c-1.5,0-3.7-.8-3.7-.8l-.4.8v-.8c0,0-1.7-.2-1.7-.2l-.5,1.9v-2.7c-.1,0-2.4-.5-2.4-.5-.4,1.6,0,3.4,0,3.4-1-1.4-.4-4.7-.4-4.7,0,0-1.2,1.4-.4,7.3l15.3-.4v-1.8Z"
				/>
				<path
					fill={colors.foliage.main}
					d="M58.2,6.3c0-.3-1.5,6.4-1.5,6.4v-3.9c0,0-3.2-1.2-3.2-1.2l-.8,4.7-.7-3.2s-3.4.5-4.5.3c-.8,0-5.2-.8-5.2-.8l-.2.8s-.9-4.2-1.5-6.1c-.4-1.2-1.6-2.9-1.6-2.9,0,0,.6,2.2.9,3.4.3,1.5.5,5,.5,5,0,0-.7-3.7-1.3-5.3-.6-1.6-1.9-3.5-1.9-3.5l-9.2.2s1.2,2.4,2.2,5.1c1.1,2.9,1.4,6.2,1.4,6.2l-3.1-5.6-4.7,1.5.2,1.1h-7.3s.8,3.3.8,3.3l-1.9-2.6-6-1.1,2.4,4.6-2.2-1.5H0s3.8,3.5,3.8,3.5l54.3.4c-.4-4.1,0-8.5,0-8.9Z"
				/>
				<path
					fill={colors.foliage.light}
					d="M3.9,14.7h-.1s-3.8-3.5-3.8-3.5h9.8s0,0,0,0l-7.4.7,1.5,2.7ZM16.7,8.5l7.2.3,1.7,2.8-1-4.2,4-1.6-4.7,1.5.2,1.1h-7.3s0,0,0,0ZM12.9,8.4l3.2,4.5-1.9-4.3-1.3-.2Z"
				/>
			</g>
		</CustomSvg>
	);
};
