import React, { ReactNode } from 'react';
import { styled, useTheme } from '@mui/system';
import { Box } from '@mui/material';

const CustomSvg = styled('svg', {
	name: 'Photo',
	slot: 'Root',
})(() => ({}));

export interface PhotoPropsType {
	src: string;
}

export const Photo = ({ src }: PhotoPropsType) => {
	const id = React.useId();
	const colors = useTheme().palette.scene;

	return (
		<CustomSvg id={id} viewBox="0 0 70.37 63.86">
			<path
				className="main"
				fill={colors.white}
				d="M0,3.88c1.05,15.69,1.83,37.66,2.09,59.64,21.19.78,49.94.36,68.28-2.56-1.92-17.48-3.67-39.55-3.15-60.47C42.11-1.09,19.36,1.52,0,3.88Z"
			/>
			<image
				xlinkHref={src}
				mask="url(#svgmask1)"
				width="100%"
				height="100%"
				preserveAspectRatio="xMidYMid slice"
			></image>
			<mask id="svgmask1">
				<path
					fill="#ffffff"
					d="M3.4,6.59c.75,15.07,1.05,27.5,1.7,43.98,20.4-.26,43.15-.76,61.07-2.48-1.05-18.44-1.87-26.81-2.05-44.56-22.68-1.42-43.24.95-60.72,3.07Z"
				/>
			</mask>
		</CustomSvg>
	);
};
