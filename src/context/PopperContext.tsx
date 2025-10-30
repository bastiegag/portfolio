import React, { createContext, useMemo, useState } from 'react';
import { Popper, Box, Slide } from '@mui/material';
import { useTheme } from '@mui/system';

interface IPopperContext {
	settings: {
		anchorEl: HTMLAnchorElement | null;
		title: string;
	};
	setSettings: React.Dispatch<
		React.SetStateAction<IPopperContext['settings']>
	>;
}

export const PopperContext = createContext<IPopperContext | null>(null);

export const PopperProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [settings, setSettings] = useState<IPopperContext['settings']>({
		anchorEl: null,
		title: '',
	});
	const [mounted, setMounted] = useState(false);
	const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
	const [animateIn, setAnimateIn] = useState(false);
	const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

	React.useEffect(() => {
		setMounted(true);
		const handleMouseMove = (event: MouseEvent) => {
			setMousePos({ x: event.clientX, y: event.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	React.useEffect(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		if (settings.anchorEl && mounted) {
			timeoutRef.current = setTimeout(() => setAnimateIn(true), 0);
		} else {
			setAnimateIn(false);
		}
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [settings.anchorEl, mounted]);

	const colors = useTheme().palette.scene;
	const value = useMemo(() => ({ settings, setSettings }), [settings]);
	const isOpen = Boolean(settings.anchorEl && mounted);

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
					anchorEl={virtualElement as any}
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
