import { useEffect } from 'react';

import { useOffset } from '@shared/hooks/offset/offset.state';
import config from '@shared/data/config';

export const useMousePosition = () => {
	const w = config.sceneWidth;
	const h = config.sceneHeight;
	const { setOffset } = useOffset();

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) => {
			const scene = document.getElementById('scene');
			const sw = scene ? scene.getBoundingClientRect().width : 0;

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
		};

		window.addEventListener('mousemove', updateMousePosition);

		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, [w, h, setOffset]);
};
