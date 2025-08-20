import React, { ReactNode } from 'react';
import { styled, useTheme } from '@mui/system';

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
				viewBox="0 0 246.7 239.8"
				preserveAspectRatio="none"
			>
				<polygon
					className="main"
					fill={colors.about.bg}
					points="3.5 4.6 2.9 91.2 3.5 101.7 0 235.2 72.5 238.3 168.9 235.9 246.7 236.5 241.7 145.1 243 137.6 245.2 2.7 155.4 0 139.3 1.5 3.5 4.6"
				/>
			</CustomSvg>
		</>
	);
};
