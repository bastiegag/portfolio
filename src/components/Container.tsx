import { JSX, ReactNode } from 'react';
import { Box, styled } from '@mui/material';

import { Scene } from 'components';

/**
 * Styled root container component
 * - Full viewport height with centered content
 * - Hidden overflow on desktop, horizontal scroll on mobile
 * - Serves as backdrop for the Scene component
 */
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

/**
 * Props for the Container component
 */
export interface ContainerProps {
	/** Child elements to render above the scene */
	children: ReactNode;
}

/**
 * Main container component that wraps the application layout
 *
 * Renders children first (allowing content to appear above the scene),
 * followed by the decorative Scene component in the background.
 *
 * @param props - Component props
 * @returns Container with children and background scene
 */
export const Container = ({ children }: ContainerProps): JSX.Element => {
	return (
		<>
			{children}
			<ContainerRoot className="Container-root">
				<Scene />
			</ContainerRoot>
		</>
	);
};
