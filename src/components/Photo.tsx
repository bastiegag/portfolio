import React, { ReactNode } from 'react';
import { styled, useTheme } from '@mui/system';

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
		<CustomSvg id={id} viewBox="0 0 69.9 72.5">
			<polygon
				fill={colors.black}
				fillOpacity="0.15"
				points="2.8 5.6 37.8 1.6 65 3.5 66.7 39.8 69.2 72.4 32.5 72.5 1.5 72.5 4.2 47.4 2.8 5.6"
			/>
			<polygon
				className="main"
				fill={colors.white}
				points="0 2.6 36.6 .6 67.2 0 68.1 35.3 69.9 70.5 32.8 71.6 1.6 72.4 1.7 47.5 0 2.6"
			/>
			<image
				xlinkHref={src}
				mask="url(#svgmask1)"
				width="100%"
				height="100%"
				preserveAspectRatio="xMidYMid slice"
			></image>
			<mask id="svgmask1">
				<polygon
					fill={colors.white}
					points="3.4 6.1 23.2 4.9 27.3 4.3 64.1 3 65.7 57.5 47 58.4 5.1 60.1 4.8 27.1 3.4 6.1"
				/>
			</mask>
		</CustomSvg>
	);
};
