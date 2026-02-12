import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme, Box, SxProps, Theme } from '@mui/material';

import { useCursor } from './cursor.state';
import config from '@shared/data/config';

const CursorRoot = styled('svg', {
	name: 'cursor',
	slot: 'root',
})(() => ({}));

const CURSOR_SIZE = 16;
const CURSOR_CONTAINER_SIZE = CURSOR_SIZE * 2;
const CURSOR_VIEWBOX = '0 0 86.75 84.53';
const CURSOR_Z_INDEX = 5000;

const cursorSx: SxProps<Theme> = {
	display: { xs: 'none', lg: 'block' },
	height: CURSOR_CONTAINER_SIZE,
	pointerEvents: 'none',
	position: 'absolute',
	width: CURSOR_CONTAINER_SIZE,
	zIndex: CURSOR_Z_INDEX,
};

export const Cursor = () => {
	const colors = useTheme().vars.palette;
	const { cursor } = useCursor();

	useGSAP(() => {
		// Center the cursor on its position
		gsap.set('#cursor', { xPercent: -50, yPercent: -50 });

		// Create optimized setters for x/y position updates
		const xSetter = gsap.quickSetter('#cursor', 'x', 'px');
		const ySetter = gsap.quickSetter('#cursor', 'y', 'px');

		const handleMouseMove = (e: MouseEvent) => {
			xSetter(e.x);
			ySetter(e.y);
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});

	if (!config.cursorEnabled) return null;

	return (
		<Box id="cursor" sx={cursorSx}>
			<CursorRoot
				viewBox={CURSOR_VIEWBOX}
				width={CURSOR_SIZE}
				height={CURSOR_SIZE}
			>
				<path
					fill={
						cursor.hover ? colors.cursor.light : colors.base.white
					}
					d="M.8,9.68c-.27-.65-.54-1.4-.8-2.22l2.47-2.01L5.38,0c10.05,8.76,27.76,25.93,27.76,25.93,0,0,2.92,1.79,6.07,4.25l-1.56,4.41-6.84,5.43C14.88,24.64,1.53,11.43.8,9.68ZM35.76,50.29l-5.62-2.02L.03,77.82l5.96,3.68,5.56.79c8.05-8.51,20.35-22.1,26.88-29.53l-2.68-2.46ZM54.99,46.36l-5.06,2.11-4.25,5.84c12.18,11.65,24.11,22.96,31.8,30.22l4.51-7.98c-6.49-7.67-17.52-19.85-26.99-30.18ZM50.23,36.19l4.95,2.12c2.58-1.59,4.48-2.65,4.48-2.65,0,0,16.87-17.7,27.09-29.15l-8.33-5.63-32,31.4,3.81,3.9Z"
				/>
			</CursorRoot>
		</Box>
	);
};
