import { Box, styled } from '@mui/material';

import { Scene } from './Scene';
import type { WithChildren } from '@shared/types';

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

export type ContainerProps = WithChildren;

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
