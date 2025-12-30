import { useMemo, useState, useEffect, useRef, ReactNode, JSX } from 'react';
import { Popper, Box, Slide, useTheme } from '@mui/material';

import { PopperContext, type PopperContextType } from 'context';

/**
 * Provider component for the Popper context
 *
 * Manages popper state and renders a tooltip that follows the mouse cursor.
 * Provides smooth animations and positioning with MUI Popper and Slide components.
 *
 * @param children - React components that need access to popper context
 */
export const PopperProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	// Initialize popper settings with anchor and title
	const [settings, setSettings] = useState<PopperContextType['settings']>({
		anchorEl: null,
		title: '',
	});

	// Track mount state to prevent SSR issues
	const [mounted, setMounted] = useState(false);

	// Track current mouse position for tooltip positioning
	const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

	// Control slide animation timing
	const [animateIn, setAnimateIn] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	// Initialize mouse tracking after mount
	useEffect(() => {
		queueMicrotask(() => setMounted(true));
		const handleMouseMove = (event: MouseEvent) => {
			setMousePos({ x: event.clientX, y: event.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	// Handle animation timing when popper opens/closes
	useEffect(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		if (settings.anchorEl && mounted) {
			// Delay animation to ensure smooth transition
			timeoutRef.current = setTimeout(() => {
				setAnimateIn(true);
			}, 50);
		} else {
			queueMicrotask(() => setAnimateIn(false));
		}
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [settings.anchorEl, mounted]);

	const colors = useTheme().vars.palette;
	const value = useMemo(() => ({ settings, setSettings }), [settings]);
	const isOpen = Boolean(settings.anchorEl && mounted);

	// Create virtual element that follows mouse cursor
	const virtualElement = {
		getBoundingClientRect: () => ({
			top: mousePos.y,
			left: mousePos.x,
			bottom: mousePos.y,
			right: mousePos.x,
			width: 0,
			height: 0,
			x: mousePos.x,
			y: mousePos.y,
			toJSON: () => ({}),
		}),
	};

	return (
		<PopperContext.Provider value={value}>
			{isOpen && (
				<Popper
					open
					anchorEl={virtualElement as unknown as Element}
					placement="top"
					modifiers={[
						{
							name: 'preventOverflow',
							options: { padding: 8 },
						},
						{
							name: 'offset',
							options: { offset: [0, 0] },
						},
					]}
				>
					<Slide direction="up" in={animateIn}>
						<Box
							sx={{
								backgroundColor: colors.popper.bg,
								borderRadius: '24px',
								color: colors.popper.text,
								py: 0.5,
								px: 2,
								mt: -10,
								fontFamily: '"Chelsea Market", system-ui',
								fontSize: '1rem',
								pointerEvents: 'none',
								visibility: animateIn ? 'visible' : 'hidden',
							}}
						>
							{settings.title}
						</Box>
					</Slide>
				</Popper>
			)}
			{children}
		</PopperContext.Provider>
	);
};
