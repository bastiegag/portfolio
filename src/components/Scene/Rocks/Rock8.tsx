import React, { useId } from 'react';
import { styled, useTheme } from '@mui/system';

import { IRockProps } from './';
import { useParallax } from 'hooks';

const CustomSvg = styled('g', {
	name: 'rock-8',
	slot: 'Root',
})(() => ({}));

export const Rock8 = ({ params }: IRockProps) => {
	const id = React.useId();
	const colors = useTheme().palette.scene;

	useParallax(`#${CSS.escape(id)}`, params.x, params.y, params.m);

	return (
		<React.Fragment>
			<CustomSvg
				id={id}
				className="rock rock-8 animate-color"
				transform={`translate(${params.x},${params.y})`}
			>
				<path
					fill={colors.rock[500]}
					d="M.6,7.2L7.3.7,16.2,0s6.9,4.4,9.7,8.7l1.5,5.7-11.2,3.3-13.7.3-2.5-2L.6,7.2Z"
				/>
				<path
					fill={colors.rock[600]}
					d="M13.3,9.4l2.9,8.3,11.2-3.3-1.5-5.7s-1.5-2.3-4.8-5.1l-7.8,5.7Z"
				/>
				<path
					fill={colors.rock[400]}
					d="M.6,7.2s.6,2.1,8.5,2.2c7.9.1,11.9-5.7,11.9-5.7L17,0s-6.5-.3-9.7.7C4.1,1.8.6,7.2.6,7.2Z"
				/>
				<path
					fill={colors.rock[300]}
					d="M.6,7.2S2.7,3.1,6.3,1.2l14.8,2.4s-1.2,2.9-7.8,5.7c0,0-10.1,1.1-12.7-2.2Z"
				/>
				<polygon
					fill={colors.rock[200]}
					points="11.2 9.6 13.8 10.7 15.2 8.5 11.2 9.6"
				/>
				{/* <path
                    className="backlight"
                    clipPath={`url(#${id}-backlight-mask)`}
                    d="M25.9,8.74s-.09-.13-.24-.34c-.83-1.18-1.93-2.36-3.1-3.45-.44-.42-.92-.86-1.46-1.32h-.05c-.44-.38-.88-.73-1.3-1.06L17,.04s-6.5-.3-9.7.7c-.47.16-.95.43-1.43.75C2.78,3.33.89,6.7.63,7.18c0,0,0,0,0,0-.02.04-.04.06-.04.06l-.6,8.8,2.5,2,13.7-.3,11.2-3.3-1.5-5.7Z"
                />
                <defs>
                    <clipPath
                        id={`${id}-backlight-mask`}
                        className="backlight-mask"
                    >
                        <path d="M25.9,8.74s-.09-.13-.24-.34c-.83-1.18-1.93-2.36-3.1-3.45-.44-.42-.92-.86-1.46-1.32h-.05c-.44-.38-.88-.73-1.3-1.06L17,.04s-6.5-.3-9.7.7c-.47.16-.95.43-1.43.75C2.78,3.33.89,6.7.63,7.18c0,0,0,0,0,0-.02.04-.04.06-.04.06l-.6,8.8,2.5,2,13.7-.3,11.2-3.3-1.5-5.7Z" />
                    </clipPath>
                </defs> */}
			</CustomSvg>
		</React.Fragment>
	);
};
