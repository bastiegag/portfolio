import React, { useId } from 'react';
import { styled, useTheme } from '@mui/material';

import { IRockProps } from './';
import { useParallax } from 'hooks';

const CustomSvg = styled('g', {
	name: 'rock-2',
	slot: 'Root',
})(() => ({}));

export const Rock2 = ({ params }: IRockProps) => {
	const id = React.useId();
	const colors = useTheme().vars.palette;

	useParallax(`#${CSS.escape(id)}`, params.x, params.y, params.m);

	return (
		<React.Fragment>
			<CustomSvg
				id={id}
				className="rock rock-2 animate-color"
				transform={`translate(${params.x},${params.y})`}
			>
				<polygon
					fill={colors.rock[500]}
					points="33.3 21 30.8 11.6 27.5 11.4 14.6 0 7.3 3.3 0 22.7 33.3 21"
				/>
				<path
					fill={colors.rock[400]}
					d="M7.3,3.3l3.3,7.1s12.1,2.3,16.9,1L14.6,0l-7.3,3.3Z"
				/>
				<polygon
					fill={colors.rock[200]}
					points="27.5 11.4 19.6 11.6 27.5 13 30.8 11.6 27.5 11.4"
				/>
				<polygon
					fill={colors.rock[800]}
					points="10.6 10.4 8.4 21 0 22.7 33.3 21 30.8 11.6 27.5 13 26.1 18.9 18.3 20.3 19.6 11.6 10.6 10.4"
				/>
				<path
					fill={colors.rock[100]}
					d="M25.6,12.7h2.9c0,0-1.2,1.3-1.2,1.3l-1.7-1.3ZM10.2,9.5l2.2,1.2-2,1-.2-2.2Z"
				/>
				<polygon
					className="rock-fade"
					fill={colors.sky.light}
					fillOpacity={params.distance ? `${params.distance}%` : '0'}
					points="33.3 21 30.8 11.6 27.5 11.4 14.6 0 7.3 3.3 0 22.7 33.3 21"
				/>
			</CustomSvg>
		</React.Fragment>
	);
};
