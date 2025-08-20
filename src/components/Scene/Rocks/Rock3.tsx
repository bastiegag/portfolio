import React, { useId } from 'react';
import { styled, useTheme } from '@mui/system';

import { IRockProps } from './';
import { useParallax } from 'hooks';

const CustomSvg = styled('g', {
	name: 'rock-3',
	slot: 'Root',
})(() => ({}));

export const Rock3 = ({ params }: IRockProps) => {
	const id = React.useId();
	const colors = useTheme().palette.scene;

	useParallax(`#${CSS.escape(id)}`, params.x, params.y, params.m);

	return (
		<React.Fragment>
			<CustomSvg
				id={id}
				className="rock rock-3 animate-color inset-light"
				transform={`translate(${params.x},${params.y})`}
			>
				<path
					fill={colors.rock[500]}
					d="M46.5,32.6v-5.9l-5.1-4.7-2.2-12.5L28,.9s-8.4-2.3-14.8,2.4l-4.4,21.6-6,1.8L0,33.9l28.4.4s18.1-1.7,18.1-1.7Z"
				/>
				<path
					fill={colors.rock[400]}
					d="M8.8,24.8l8.2-.9,4.2-5.5,5.6-5.2,12.4-3.7L28,.9s-8.8-2.4-14.8,2.4l-4.4,21.5Z"
				/>
				<polygon
					fill={colors.rock[800]}
					points="26.8 13.2 25.3 25.1 10.8 28.5 10.7 34.1 28.4 34.3 46.5 32.6 46.5 26.7 39.2 25.1 41.4 22 39.2 9.5 26.8 13.2"
				/>
				<path
					fill={colors.rock[200]}
					d="M2.8,26.7l8,1.8,14.5-3.4-8.3-1.2-8.2.9-6,1.9ZM26.8,13.2l12.4-3.7L28,.9s-9.9-3-14.8,2.4l13.6,9.9Z"
				/>
				<path
					fill={colors.rock[100]}
					d="M23.4,10.8l6.3,1.6-3.3,3.5-3-5.1ZM8.6,28h4.4s-2.2,1.9-2.2,1.9l-2.2-1.9Z"
				/>
				<path
					className="rock-fade"
					fill={colors.sky.light}
					fillOpacity={params.distance ? `${params.distance}%` : '0'}
					d="M46.5,32.6v-5.9l-5.1-4.7-2.2-12.5L28,.9s-8.4-2.3-14.8,2.4l-4.4,21.6-6,1.8L0,33.9l28.4.4s18.1-1.7,18.1-1.7Z"
				/>
			</CustomSvg>
		</React.Fragment>
	);
};
