import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMediaQuery, useTheme } from '@mui/material';

import { useOffset } from 'hooks';
import config from '@/config';

/**
 * Custom hook that creates smooth parallax effects based on mouse movement
 *
 * Uses GSAP's quickTo method for performant animations and responds to mouse position
 * changes from the offset context. Effects are only applied on large screens (lg breakpoint).
 *
 * @param element - CSS selector or element ID to apply parallax effect to
 * @param x - Base X position for the element
 * @param y - Base Y position for the element
 * @param m - Multiplier object controlling parallax intensity for x and y axes
 * @param options - Configuration object for enabling different effects
 * @param options.pos - Enable position-based parallax (true, 'x', 'y', or false). Defaults to true.
 * @param options.scale - Enable scale transformation based on vertical mouse position. Defaults to false.
 * @param options.skew - Enable skew transformation for horizontal parallax. Defaults to false.
 */
export const useParallax = (
	element: string,
	x: number,
	y: number,
	m: { x: number; y: number },
	{
		pos = true,
		scale = false,
		skew = false,
	}: { pos?: boolean | 'x' | 'y'; scale?: boolean; skew?: boolean } = {}
) => {
	const theme = useTheme();
	const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
	const { offset } = useOffset();

	// GSAP quickTo refs for smooth, performant animations
	const xTo = useRef<((value: number) => void) | null>(null);
	const yTo = useRef<((value: number) => void) | null>(null);
	const skewTo = useRef<((value: number) => void) | null>(null);
	const scaleTo = useRef<((value: number) => void) | null>(null);

	// Initialize GSAP quickTo functions for smooth animations
	useGSAP(() => {
		if (!config.parallaxEnabled) return;

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
	}, [element]);

	// Apply transformations based on mouse position
	useEffect(() => {
		if (!config.parallaxEnabled) return;

		if (isLargeScreen) {
			// Apply horizontal parallax if enabled
			const shouldMoveX = pos === true || pos === 'x';
			if (shouldMoveX && xTo.current) {
				const posX = x - (offset.dist.x * m.x) / 300;
				xTo.current(posX);
			}

			// Apply vertical parallax if enabled
			const shouldMoveY = pos === true || pos === 'y';
			if (shouldMoveY && yTo.current) {
				const posY = y - (offset.dist.y * m.y) / 300;
				yTo.current(posY);
			}

			// Apply scale transformation if enabled
			if (scale && scaleTo.current) {
				scaleTo.current(offset.scale);
			}

			// Apply skew transformation if enabled
			if (skew && skewTo.current) {
				skewTo.current(offset.skew);
			}
		} else {
			// Reset to base values on smaller screens
			xTo.current?.(x);
			yTo.current?.(y);
			scaleTo.current?.(1);
			skewTo.current?.(0);
		}
	}, [offset, isLargeScreen, pos, scale, skew, x, y, m.x, m.y]);
};
