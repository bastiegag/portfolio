import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMediaQuery, useTheme } from '@mui/material';

import { useOffset } from 'hooks';
import config from '@/config';

export const useParallax = (
	element: string,
	x: number,
	y: number,
	m: {
		x: number;
		y: number;
	},
	{
		pos = true,
		scale = false,
		skew = false,
	}: { pos?: boolean | 'x' | 'y'; scale?: boolean; skew?: boolean } = {}
) => {
	const theme = useTheme();
	const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
	const { offset } = useOffset();
	const xTo = useRef<Function>(null);
	const yTo = useRef<Function>(null);
	const skewTo = useRef<Function>(null);
	const scaleTo = useRef<Function>(null);

	if (!config.parallaxEnabled) return null;

	useEffect(() => {
		if (isLargeScreen) {
			if (pos == true || pos == 'x') {
				const posX = x - (offset.dist.x * m.x) / 300;
				if (xTo.current) xTo.current(posX);
			}
			if (pos == true || pos == 'y') {
				const posY = y - (offset.dist.y * m.y) / 300;
				if (yTo.current) yTo.current(posY);
			}
			if (scale) {
				if (scaleTo.current) scaleTo.current(offset.scale);
			}
			if (skew) {
				if (skewTo.current) skewTo.current(offset.skew);
			}
		} else {
			if (xTo.current) xTo.current(x);
			if (yTo.current) yTo.current(y);
			if (scaleTo.current) scaleTo.current(1);
			if (skewTo.current) skewTo.current(0);
		}
	}, [offset, isLargeScreen, pos, scale, skew, x, y, m]);

	useGSAP(() => {
		(xTo.current = gsap.quickTo(element, 'x', {
			duration: 0.75,
			ease: 'power3',
		})),
			(yTo.current = gsap.quickTo(element, 'y', {
				duration: 0.75,
				ease: 'power3',
			})),
			(skewTo.current = gsap.quickTo(element, 'skewX', {
				duration: 0.75,
				ease: 'power3',
			}));
		// scaleTo.current = gsap.quickTo(element, 'scaleY', {
		// 	duration: 0.75,
		// 	ease: 'power3',
		// });
	}, [element]);
};
