import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

export interface ContentPropsType {
	children: ReactNode;
}

export const Content = ({ children }: ContentPropsType) => {
	return (
		<Box
			className="animate-all clearfix"
			sx={{
				position: 'relative',
				zIndex: 2,
				p: 2,
			}}
		>
			{children}
		</Box>
	);
};
