import React, { ReactNode } from 'react';
import { styled, useTheme } from '@mui/system';
import { Box } from '@mui/material';

const CustomSvg = styled('svg', {
	name: 'paper',
	slot: 'Root',
})(() => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
}));

export interface PaperPropsType {
	children: ReactNode;
}

export const Paper = ({ children }: PaperPropsType) => {
	const id = React.useId();
	const colors = useTheme().palette.scene;

	return (
		<>
			{children}
			<CustomSvg
				id={id}
				className="animate-all"
				viewBox="0 0 247.04 240.6"
				preserveAspectRatio="none"
			>
				<path
					className="main"
					fill={colors.paper.main}
					d="M3.53,3.65c3.92,62.96.65,178.36-3.53,230.67,44.33,6.45,229.26,7.63,247.04,4.92-5.75-53.64-3.4-173.43,0-237.32C200.49-2.07,55.06.99,3.53,3.65Z"
				/>
			</CustomSvg>
		</>
	);
};
