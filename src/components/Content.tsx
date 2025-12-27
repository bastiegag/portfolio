import { JSX, ReactNode } from 'react';
import { Box } from '@mui/material';

export interface ContentProps {
	children: ReactNode;
}

export const Content = ({ children }: ContentProps): JSX.Element => {
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
