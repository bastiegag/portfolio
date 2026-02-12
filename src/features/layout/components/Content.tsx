import { ReactNode } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

export interface ContentProps {
	children: ReactNode;
}

const contentSx: SxProps<Theme> = {
	position: 'relative',
	zIndex: 2,
	p: 2,
};

export const Content = ({ children }: ContentProps) => {
	return (
		<Box className="animate-all clearfix" sx={contentSx}>
			{children}
		</Box>
	);
};
