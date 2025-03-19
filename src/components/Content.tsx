import React, { ReactNode } from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

import { Scene } from 'components';

export interface ContentPropsType {
	children: ReactNode;
}

export const Content = ({ children }: ContentPropsType) => {
	return (
		<Box
			sx={{
				position: 'relative',
				zIndex: 2,
				p: 6,
			}}
		>
			{children}
		</Box>
	);
};
