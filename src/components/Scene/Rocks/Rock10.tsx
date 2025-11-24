import React, { useId } from 'react';
import { styled, useTheme } from '@mui/material';

import { IRockProps } from './';
import { useParallax } from 'hooks';

const CustomSvg = styled('g', {
	name: 'rock-10',
	slot: 'Root',
})(() => ({
	'.flick': {
		opacity: 0,
	},
}));

export const Rock10 = ({ params }: IRockProps) => {
	const id = React.useId();
	const colors = useTheme().vars.palette;

	useParallax(`#${CSS.escape(id)}`, params.x, params.y, params.m);

	return (
		<React.Fragment>
			<CustomSvg
				id={id}
				className="rock rock-10 animate-color"
				transform={`translate(${params.x},${params.y})`}
			>
				<path
					fill={colors.rock[500]}
					d="M0,12.9l.7,1.6h11.4l24.8-1.7,3.4.5,6.1-1.7,1.1-5-9.4-1.6L34.5.1C22.9,0,8.5,3.8,8.5,3.8L2.8,8,0,12.9Z"
				/>
				<polygon
					fill={colors.rock[600]}
					points="27.4 6.1 28.3 12.6 26.7 13.5 32.8 13 32.6 9.9 41.2 9.9 40.3 13.3 46.4 11.6 47.5 6.6 38.1 5.1 34.5 .1 27.4 6.1"
				/>
				<path
					fill={colors.rock[400]}
					d="M8.5,3.8S4,6.5,2.8,8c0,0,10.4.7,17,0,6.6-.7,14.2-4.6,14.2-4.6l.5-3.2s-11.3-1.2-26,3.7Z"
				/>
				<path
					fill={colors.rock[400]}
					d="M38.1,5.1l-2.8,3.1-2.6,1.8s6.4.2,8.6,0c2.2-.2,6.3-3.3,6.3-3.3l-9.4-1.6Z"
				/>
				<path
					fill={colors.rock[300]}
					d="M2.8,8s1.3-1.6,5.7-4.1l19.2,1.2,6.4-1.8s-6.7,3.7-12.5,4.7c0,0-10.9.7-18.7,0Z"
				/>
				<path
					fill={colors.rock[300]}
					d="M35.2,8.1l2.8-3.1,9.4,1.6s-4,1.3-12.3,1.5Z"
				/>
				<polygon
					fill={colors.rock[200]}
					points="25.2 7.1 27.6 7.6 29 5.7 25.2 7.1"
				/>
				<polygon
					fill={colors.rock[200]}
					points="39.8 10 40.9 11 42.7 9.5 39.8 10"
				/>

				<g className="flick" fill={colors.fire.dark}>
					<path d="M35.2,8.1l2.8-3.1,9.4,1.6s-4,1.3-12.3,1.5Z" />
					<path d="M2.8,8s1.3-1.6,5.7-4.1l19.2,1.2,6.4-1.8s-6.7,3.7-12.5,4.7c0,0-10.9.7-18.7,0Z" />
					<path d="M8.5,3.8S4,6.5,2.8,8c0,0,10.4.7,17,0,6.6-.7,14.2-4.6,14.2-4.6l.5-3.2s-11.3-1.2-26,3.7Z" />
				</g>
			</CustomSvg>
		</React.Fragment>
	);
};
