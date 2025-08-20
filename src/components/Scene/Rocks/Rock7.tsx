import React, { useId } from 'react';
import { styled, useTheme } from '@mui/system';

import { IRockProps } from './';
import { useParallax } from 'hooks';

const CustomSvg = styled('g', {
	name: 'rock-7',
	slot: 'Root',
})(() => ({}));

export const Rock7 = ({ params, invert }: IRockProps) => {
	const id = React.useId();
	const colors = useTheme().palette.scene;

	const posY = invert ? params.y + 236 : params.y;

	useParallax(`#${CSS.escape(id)}`, params.x, posY, params.m);

	return (
		<React.Fragment>
			<CustomSvg
				id={id}
				className="rock rock-7 animate-color inset-light"
				transform={
					invert
						? `translate(${params.x},${posY}) scale(1,-1)`
						: `translate(${params.x},${posY})`
				}
			>
				<path
					fill={colors.rock[500]}
					d="M0,118.5l9.3-45.3,5.5-2.3,3.8-38.4,4.7-13.9S32.5,6,51.2,0l13.6,8.4,11.2,67,11.1,27.6.6,18.1L0,118.5Z"
				/>
				<path
					fill={colors.rock[400]}
					d="M23.3,18.6l-4.7,13.9-3.8,38.4,5.1,5.4,5.4,9.1,6.9,2.3,14.4-43.2,1.9-.7,6.9-24.3,6.9-4.4,2.5-6.7L51.2,0s-18.3,4.7-27.9,18.6Z"
				/>
				<path
					fill={colors.rock[800]}
					d="M17,77.7l-3.1,40.4,10.6-1.1.8-31.6-4-6.8-4.3-.9ZM46.6,44.5l-14.4,43.2,7.4,32,7.8.2v-57.4c-.1,0-.8-18-.8-18Z"
				/>
				<path
					fill={colors.rock[600]}
					d="M39.6,119.7l-30.5-.9,15.4-1.8.8-31.6,6.9,2.3,7.4,32ZM71.1,46.4l-6.3-38-2.5,6.7-3,31.9-4.3,11.4.4-38.9-6.9,24.3.4,17.7-1.5,3.3v55.2c0,0,19.2.6,19.2.6l7.9-35.1-3.3-39h0ZM32.2,72.8l.8-11.3,3.8-6.7,6.4-17.3-6.9,22.8-4.1,12.5Z"
				/>
				<path
					fill={colors.rock[200]}
					d="M9.3,73.2l7.7,4.5,4.3.9-1.7-3.9-4.8-3.9-5.5,2.3ZM23.3,18.6l24.4-.8,14.6-2.7,2.5-6.7L51.2,0s-21.2,4.7-27.9,18.6Z"
				/>
				<path
					className="rock-fade"
					fill={colors.sky.light}
					fillOpacity={params.distance ? `${params.distance}%` : '0'}
					d="M0,118.5l9.3-45.3,5.5-2.3,3.8-38.4,4.7-13.9S32.5,6,51.2,0l13.6,8.4,11.2,67,11.1,27.6.6,18.1L0,118.5Z"
				/>
			</CustomSvg>
		</React.Fragment>
	);
};
