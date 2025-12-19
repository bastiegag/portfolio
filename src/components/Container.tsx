import { JSX, ReactNode } from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

import { Scene } from 'components';

const ContainerRoot = styled(Box, {
	name: 'Container',
	slot: 'root',
})(() => ({
	height: '100vh',
	overflow: 'hidden',
	position: 'relative',
	width: '100%',
}));

export interface ContainerProps {
	children: ReactNode;
}

export const Container = ({ children }: ContainerProps): JSX.Element => {
	return (
		<>
			{children}
			<ContainerRoot className="Container-root">
				<Box
					sx={{
						height: '100%',
						left: '50%',
						minWidth: '100%',
						position: 'absolute',
						top: '50%',
						transform: 'translateX(-50%) translateY(-50%)',
					}}
				>
					<Scene />
				</Box>
			</ContainerRoot>
		</>
	);
};
