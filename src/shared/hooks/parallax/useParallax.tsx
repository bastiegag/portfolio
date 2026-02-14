import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMediaQuery, useTheme } from '@mui/material';

import { useOffset } from '@shared/hooks/offset/offset.state';
import config from '@shared/data/config';
import type { Coordinate, ParallaxOptions } from '@shared/types';

export const useParallax = (
	element: string,
	x: number,
	y: number,
	m: Coordinate,
	options: ParallaxOptions = {},
) => {
	const { pos = true, scale = false, skew = false } = options;
	const theme = useTheme();
	const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
	const { offset } = useOffset();

	const [hasError, setHasError] = useState(false);
	const xTo = useRef<((value: number) => void) | null>(null);
	const yTo = useRef<((value: number) => void) | null>(null);
	const skewTo = useRef<((value: number) => void) | null>(null);
	const scaleTo = useRef<((value: number) => void) | null>(null);

	useGSAP(() => {
		if (!config.parallaxEnabled || hasError) return;

		try {
			// Verify element exists before creating animations
			const targetElement = document.querySelector(element);
			if (!targetElement) {
				if (import.meta.env.DEV) {
					console.warn(`[useParallax] Element not found: ${element}`);
				}
				return;
			}

			xTo.current = gsap.quickTo(element, 'x', {
				duration: 0.75,
				ease: 'power3',
			});
			yTo.current = gsap.quickTo(element, 'y', {
				duration: 0.75,
				ease: 'power3',
			});
			skewTo.current = gsap.quickTo(element, 'skewX', {
				duration: 0.75,
				ease: 'power3',
			});
			scaleTo.current = gsap.quickTo(element, 'scaleY', {
				duration: 0.75,
				ease: 'power3',
			});
		} catch (error) {
			if (import.meta.env.DEV) {
				console.error(
					`[useParallax] Failed to initialize animations for ${element}:`,
					error,
				);
			}
			setHasError(true);
		}
	}, [element, hasError]);

	useEffect(() => {
		if (!config.parallaxEnabled || hasError) return;

		try {
			if (isLargeScreen) {
				const shouldMoveX = pos === true || pos === 'x';
				if (shouldMoveX && xTo.current) {
					const posX = x - (offset.dist.x * m.x) / 300;
					xTo.current(posX);
				}

				const shouldMoveY = pos === true || pos === 'y';
				if (shouldMoveY && yTo.current) {
					const posY = y - (offset.dist.y * m.y) / 300;
					yTo.current(posY);
				}

				if (scale && scaleTo.current) {
					scaleTo.current(offset.scale);
				}

				if (skew && skewTo.current) {
					skewTo.current(offset.skew);
				}
			} else {
				xTo.current?.(x);
				yTo.current?.(y);
				scaleTo.current?.(1);
				skewTo.current?.(0);
			}
		} catch (error) {
			if (import.meta.env.DEV) {
				console.error(
					`[useParallax] Animation update failed for ${element}:`,
					error,
				);
			}
			// Gracefully degrade - animations won't work but component still renders
		}
	}, [
		offset,
		isLargeScreen,
		pos,
		scale,
		skew,
		x,
		y,
		m.x,
		m.y,
		element,
		hasError,
	]);

	// Return error state for debugging
	return { hasError };
};
