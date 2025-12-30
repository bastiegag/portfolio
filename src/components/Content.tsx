import { JSX, ReactNode } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

/**
 * Props for the Content component
 */
export interface ContentProps {
	/** Child elements to render within the content area */
	children: ReactNode;
}

/**
 * Styles for the content container
 * - Positioned above background with z-index 2
 * - Consistent padding on all sides
 */
const contentSx: SxProps<Theme> = {
	position: 'relative',
	zIndex: 2,
	p: 2,
};

/**
 * Content wrapper component for page content
 *
 * Provides a positioned container with padding and z-index layering
 * to ensure content appears above the background Scene component.
 * Uses animate-all class for smooth transitions during theme changes.
 *
 * @param props - Component props
 * @returns Styled content container with children
 */
export const Content = ({ children }: ContentProps): JSX.Element => {
	return (
		<Box className="animate-all clearfix" sx={contentSx}>
			{children}
		</Box>
	);
};
