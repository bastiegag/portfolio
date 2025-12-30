import { useEffect } from 'react';

import { useOffset } from 'hooks';
import config from '@/config';

/**
 * Custom hook that tracks mouse position and calculates scene-relative coordinates
 *
 * Listens to mouse movement and computes various transformations relative to the scene dimensions.
 * Updates the offset context with position, distance from center, scale, and skew values
 * that can be used for parallax effects and other mouse-driven animations.
 *
 * Calculations performed:
 * - Absolute mouse position (x, y)
 * - Distance from scene center (dx, dy)
 * - Vertical scale factor based on viewport height
 * - Horizontal skew factor for parallax effects
 */
export const useMousePosition = () => {
	// Get scene dimensions from config
	const w = config.sceneWidth;
	const h = config.sceneHeight;
	const { setOffset } = useOffset();

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) => {
			// Get the actual rendered scene element to calculate proper scaling
			const scene = document.getElementById('scene');
			const sw = scene ? scene.getBoundingClientRect().width : 0;

			// Get raw mouse coordinates
			const x = e.clientX;
			const y = e.clientY;

			// Calculate distance from scene center in scene coordinate space
			const dx = (x * w) / sw - w / 2;
			const dy = (y * h) / window.innerHeight - h / 2;

			// Calculate skew factor (inverted horizontal movement, scaled to 50%)
			const sx = ((dx * 100) / w) * -1 * 0.5;
			// Calculate scale factor based on vertical position
			const sy = y / window.innerHeight;

			// Update offset context with all calculated values
			setOffset({
				pos: { x, y },
				dist: { x: dx, y: dy },
				scale: sy,
				skew: sx,
			});
		};

		// Attach mouse move listener
		window.addEventListener('mousemove', updateMousePosition);

		// Cleanup listener on unmount
		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, [w, h, setOffset]);
};
