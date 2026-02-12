import { ReactNode } from 'react';
import { Box, styled } from '@mui/material';

import { Scene } from './Scene';

const ContainerRoot = styled(Box, {
	name: 'Container',
	slot: 'root',
})(({ theme }) => ({
	height: '100vh',
	overflow: 'hidden',
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	[theme.breakpoints.down('md')]: {
		overflowX: 'auto',
		overflowY: 'hidden',
	},
}));

export interface ContainerProps {
	children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
	return (
		<>
			{children}
			<ContainerRoot className="Container-root">
				<Scene />
			</ContainerRoot>
		</>
	);
};
