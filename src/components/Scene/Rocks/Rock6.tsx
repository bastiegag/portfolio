import React, { useId } from 'react';
import { styled, useTheme } from '@mui/material';

import { IRockProps } from './';
import { useParallax } from 'hooks';

const CustomSvg = styled('g', {
	name: 'rock-6',
	slot: 'Root',
})(() => ({}));

export const Rock6 = ({ params, invert }: IRockProps) => {
	const id = React.useId();
	const colors = useTheme().vars.palette;

	useParallax(`#${CSS.escape(id)}`, params.x, params.y, params.m);

	return (
		<React.Fragment>
			<CustomSvg
				id={id}
				className="rock rock-6 animate-color"
				transform={`translate(${params.x},${params.y})`}
			>
				<path
					fill={colors.rock[500]}
					d="M0,63.8l4.6-23.1,2-2.7,4.8-24.8L20.3,0s7.9,2.3,11.5,6.6v22.2l3.3,4,7.1,23.4v7.5L0,63.9h0Z"
				/>
				<path
					fill={colors.rock[400]}
					d="M11.4,13.2l-4.8,24.8,2.4,4.1h8l4.5-9L30.3,5.1s-3.9-3.5-10-5.1c0,0-8.3,10.1-8.9,13.2Z"
				/>
				<polygon
					fill={colors.rock[800]}
					points="17 42.1 17 62.3 14.1 63.8 25 62.9 36.4 56.2 37.3 40.1 35.1 32.8 31.7 34.6 24.9 51.8 24.9 36.1 31.8 28.8 31.8 6.6 30.3 5.1 21.5 33.1 17 42.1"
				/>
				<path
					fill={colors.rock[200]}
					d="M31.8,28.8l-6.9,7.3,6.8-1.5,3.4-1.8-3.3-4ZM4.6,40.7l4.4,1.4-2.4-4.1-2,2.7ZM26.2,12.5l4.1-7.4s-3.2-3.9-10-5.1c0,0-8.2,9.2-8.9,13.2l14.8-.7Z"
				/>
				<path
					className="rock-fade"
					fill={colors.sky.light}
					fillOpacity={params.distance ? `${params.distance}%` : '0'}
					d="M0,63.8l4.6-23.1,2-2.7,4.8-24.8L20.3,0s7.9,2.3,11.5,6.6v22.2l3.3,4,7.1,23.4v7.5L0,63.9h0Z"
				/>
			</CustomSvg>
		</React.Fragment>
	);
};
