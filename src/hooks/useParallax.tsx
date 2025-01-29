import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { useOffset, useThemeOptions } from 'hooks';

export const useParallax = (
	element: string,
	x: number,
	y: number,
	multiplier: number
) => {
	const { themeOptions, setThemeOptions } = useThemeOptions();
	const { offset, setOffset } = useOffset();

	useGSAP(() => {
		if (themeOptions.parallax) {
			const posX = x - (offset.x * multiplier) / 600;
			const posY = y - (offset.y * multiplier) / 600;

			gsap.to(element, { x: posX, y: posY });
		} else {
			gsap.to(element, { x: x, y: y });
		}
	}, [offset]);
};
