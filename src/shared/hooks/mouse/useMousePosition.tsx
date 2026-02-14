import { useEffect, useMemo } from 'react';

import { useOffset } from '@shared/hooks/offset/offset.state';
import { rafThrottle } from '@shared/utils';
import config from '@shared/data/config';

export const useMousePosition = () => {
	const w = config.sceneWidth;
	const h = config.sceneHeight;
	const { setOffset } = useOffset();

	// Memoize the throttled handler to prevent recreation on every render
	const throttledUpdate = useMemo(
		() =>
			rafThrottle((e: MouseEvent) => {
				const scene = document.getElementById('scene');
				if (!scene) return; // Early return if scene not found

				const sw = scene.getBoundingClientRect().width;
				if (sw === 0) return; // Avoid division by zero

				const x = e.clientX;
				const y = e.clientY;

				const dx = (x * w) / sw - w / 2;
				const dy = (y * h) / window.innerHeight - h / 2;

				const sx = ((dx * 100) / w) * -1 * 0.5;
				const sy = y / window.innerHeight;

				setOffset({
					pos: { x, y },
					dist: { x: dx, y: dy },
					scale: sy,
					skew: sx,
				});
			}),
		[w, h, setOffset],
	);

	useEffect(() => {
		window.addEventListener('mousemove', throttledUpdate);

		return () => {
			window.removeEventListener('mousemove', throttledUpdate);
		};
	}, [throttledUpdate]);
};
