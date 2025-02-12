import React, { useId } from 'react';
import { styled, useTheme } from '@mui/system';

import { IRockProps } from './';
import { useParallax } from 'hooks';

const CustomSvg = styled('g', {
	name: 'rock-7',
	slot: 'Root',
})(() => ({}));

export const Rock7 = ({ params }: IRockProps) => {
	const id = React.useId();
	const colors = useTheme().palette.scene;

	useParallax(`#${CSS.escape(id)}`, params.x, params.y, params.m);

	return (
		<React.Fragment>
			<CustomSvg
				id={id}
				className="rock rock-7 animate-color"
				transform={`translate(${params.x},${params.y})`}
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
					d="M39.6,119.7l-30.5-.9,15.4-1.8.8-31.6,6.9,2.3,7.4,32ZM71.1,46.4l-6.3-38-2.5,6.7-3,31.9-4.3,11.4.4-38.9-6.9,24.3.4,17.7-1.5,3.3v55.2c.1,0,19.2.6,19.2.6l7.9-35.1-3.3-39Z"
				/>
				<polygon
					fill={colors.rock[600]}
					points="32.2 72.8 33 61.5 36.8 54.8 43.2 37.5 36.3 60.3 32.2 72.8"
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
				{/* <path
                    className="backlight"
                    clipPath={`url(#${id}-backlight-mask)`}
                    d="M87.7,121.1l-.6-18.1-11.1-27.6-4.77-28.52-.03-.38-.04-.04-6.36-38.06L51.2,0s-21.2,4.7-27.9,18.6l-4.7,13.9-3.79,38.31h0s-5.5,2.29-5.5,2.29v.1L0,118.5l9.31.28-.21.02,30.5.9,6.48.17,1.32.04v.09c.1,0,19.2.6,19.2.6l.03-.12,21.07.62Z"
                />
                <defs>
                    <clipPath
                        id={`${id}-backlight-mask`}
                        className="backlight-mask"
                    >
                        <path d="M87.7,121.1l-.6-18.1-11.1-27.6-4.77-28.52-.03-.38-.04-.04-6.36-38.06L51.2,0s-21.2,4.7-27.9,18.6l-4.7,13.9-3.79,38.31h0s-5.5,2.29-5.5,2.29v.1L0,118.5l9.31.28-.21.02,30.5.9,6.48.17,1.32.04v.09c.1,0,19.2.6,19.2.6l.03-.12,21.07.62Z" />
                    </clipPath>
                </defs> */}
			</CustomSvg>
		</React.Fragment>
	);
};
