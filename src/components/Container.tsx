import React, { ReactNode } from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

import { Scene } from 'components';

const Fullscreen = styled(Box, {
	name: 'fullscreen',
	slot: 'Root',
})(() => ({
	width: '100%',
	height: '100vh',
	position: 'relative',
	overflow: 'hidden',
}));

export interface ContainerPropsType {
	children: ReactNode;
}

export const Container = ({ children }: ContainerPropsType) => {
	return (
		<>
			{children}
			<Fullscreen>
				<Box
					sx={{
						minWidth: '100%',
						height: '100%',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translateX(-50%) translateY(-50%)',
					}}
				>
					<Scene />
				</Box>
			</Fullscreen>
		</>
	);
};
