import React, { useId } from 'react';
import { styled, useTheme } from '@mui/system';

import { IRockProps } from './';
import { useParallax } from 'hooks';

const CustomSvg = styled('g', {
	name: 'rock-5',
	slot: 'Root',
})(() => ({}));

export const Rock5 = ({ params }: IRockProps) => {
	const id = React.useId();
	const colors = useTheme().palette.scene;

	useParallax(`#${CSS.escape(id)}`, params.x, params.y, params.multiplier);

	return (
		<React.Fragment>
			<CustomSvg
				id={id}
				className="rock rock-5 animate-color"
				transform={`translate(${params.x},${params.y})`}
			>
				<path
					fill={colors.rock[500]}
					d="M0,53.4l8.8-19.9,4.1-2.4L26.1,3.3s8.1-3.3,14.3-2.7l5.5,23.7,4.9.7,2.6,25.3,8.1,3.2v5.9L0,53.4Z"
				/>
				<path
					fill={colors.rock[400]}
					d="M26.1,3.3l-13.2,27.8-4.1,2.4L1.6,49.8l25.3-4.6,4.9-7.5,4.1-3.9,4.4-18.1V.6s-7-1.8-14.3,2.7h.1ZM45.9,24.3l-2.6,5.6-1.1,5.9,7-2.6,1.6-8.3-4.9-.6Z"
				/>
				<path
					fill={colors.rock[800]}
					d="M40.4,15.7l2.9,14.2,2.6-5.6L40.4.6v15.1ZM49.2,33.2l-1,16.6-7.8,2.1,1.8-16.1-6.2-2-4.2,3.9-4.8,7.5,1.5,7.4-10.1,1.3H5l56.5,5.4v-5.9l-7,2.3-23.8-2,20.1-1.1,2.6-2.3-2.6-25.4-1.6,8.3ZM49.2,33.2l-1,16.6,2.6,2.8,2.6-2.3-2.6-25.4-1.6,8.3Z"
				/>
				<path
					fill={colors.rock[300]}
					d="M13,31.1l17.8-3.4,7.9-15.5,1.7-11.5s-5.9-.7-14.3,2.6l-13.2,27.8h0Z"
				/>
				<path
					fill={colors.rock[200]}
					d="M50.8,52.6l-20.1,1.1s20.5,1.8,23.8,2,7-2.3,7-2.3l-8.1-3.1-2.6,2.3ZM26.1,3.3l12,3.6,2.3.2V.6s-7.5-2.6-14.3,2.7Z"
				/>
				<path
					fill={colors.rock[100]}
					d="M46,34.4l3.7-4-.5,2.8-3.2,1.2ZM33.8,35.8l3.1-6-.9,4-2.2,2Z"
				/>
				<path
					className="rock-fade"
					fill={colors.sky.light}
					fillOpacity={params.distance ? `${params.distance}%` : '0'}
					d="M0,53.4l8.8-19.9,4.1-2.4L26.1,3.3s8.1-3.3,14.3-2.7l5.5,23.7,4.9.7,2.6,25.3,8.1,3.2v5.9L0,53.4Z"
				/>
				{/* <path
                    className="backlight"
                    clipPath={`url(#${id}-backlight-mask)`}
                    d="M53.4,50.33l-2.6-25.4-4.9-.6L40.4.63s-7.2-2.48-13.89,2.41c-.17.1-.34.18-.51.29h.1l-13.2,27.8-4.1,2.4L0,53.43l5.12.5h-.12l6.14.59,50.36,4.91v-6l-8.1-3.1Z"
                />
                <defs>
                    <clipPath
                        id={`${id}-backlight-mask`}
                        className="backlight-mask"
                    >
                        <path d="M53.4,50.33l-2.6-25.4-4.9-.6L40.4.63s-7.2-2.48-13.89,2.41c-.17.1-.34.18-.51.29h.1l-13.2,27.8-4.1,2.4L0,53.43l5.12.5h-.12l6.14.59,50.36,4.91v-6l-8.1-3.1Z" />
                    </clipPath>
                </defs> */}
			</CustomSvg>
		</React.Fragment>
	);
};
