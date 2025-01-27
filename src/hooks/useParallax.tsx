import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export const useParallax = (
	element: string,
	position: { x: number; y: number },
	offset: { x: number; y: number },
	multiplier: { x: number; y: number }
) => {
	useGSAP(() => {
		const mX = multiplier.x / 1000;
		const mY = multiplier.y / 1000;
		const posX = position.x - offset.x * mX;
		const posY = position.y - offset.y * mY;

		gsap.to(element, { x: posX, y: posY });
	}, [offset]);
};
