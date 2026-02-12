/**
 * Popper State Management
 * Consolidated context, provider, and hook for tooltip/popper functionality
 */ /* eslint-disable react-refresh/only-export-components */ import {
	createContext,
	useContext,
	useMemo,
	useState,
	useEffect,
	useRef,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';
import { Popper, Box, Slide, useTheme } from '@mui/material';

// Types
export interface PopperContextType {
	popper: {
		anchorEl: HTMLAnchorElement | null;
		title: string;
	};
	setPopper: Dispatch<SetStateAction<PopperContextType['popper']>>;
}

// Context
const PopperContext = createContext<PopperContextType | null>(null);

// Provider
export const PopperProvider = ({ children }: { children: ReactNode }) => {
	const [popper, setPopper] = useState<PopperContextType['popper']>({
		anchorEl: null,
		title: '',
	});

	const [mounted, setMounted] = useState(false);
	const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
	const [animateIn, setAnimateIn] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		queueMicrotask(() => setMounted(true));
		const handleMouseMove = (event: MouseEvent) => {
			setMousePos({ x: event.clientX, y: event.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	useEffect(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		if (popper.anchorEl && mounted) {
			timeoutRef.current = setTimeout(() => {
				setAnimateIn(true);
			}, 50);
		} else {
			queueMicrotask(() => setAnimateIn(false));
		}
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [popper.anchorEl, mounted]);

	const colors = useTheme().vars.palette;
	const value = useMemo(() => ({ popper, setPopper }), [popper]);
	const isOpen = Boolean(popper.anchorEl && mounted);

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
							{popper.title}
						</Box>
					</Slide>
				</Popper>
			)}
			{children}
		</PopperContext.Provider>
	);
};

// Hook
export const usePopper = () => {
	const context = useContext(PopperContext);

	if (!context) {
		throw new Error('usePopper must be used within a PopperProvider');
	}

	return context;
};
