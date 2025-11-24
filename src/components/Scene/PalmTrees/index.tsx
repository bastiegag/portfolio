import { gsap } from 'gsap';

import { Palm1 } from './Palm1';
import { Palm2 } from './Palm2';
import { Palm3 } from './Palm3';

export interface IPalmProps {
	params: {
		palmDuration: () => number;
		palmRotation: () => number;
		leafDuration: () => number;
		leafRotation: () => number;
		ease: () => string;
		x: number;
		y: number;
		m: { x: number; y: number };
	};
}

export const PalmTrees = () => {
	const palmAnimation = {
		palmDuration: gsap.utils.random(2, 3, true),
		palmRotation: gsap.utils.random(-1, 1, true),
		leafDuration: gsap.utils.random(1, 3, true),
		leafRotation: gsap.utils.random(-5, 5, true),
		ease: gsap.utils.random(['sine.inOut', 'sine.in', 'sine.out'], true),
	};

	return (
		<>
			<Palm1
				params={{
					...palmAnimation,
					x: 286,
					y: 110,
					m: { x: 13, y: 10 },
				}}
			/>
			<Palm2
				params={{
					...palmAnimation,
					x: 494,
					y: 86,
					m: { x: 13, y: 10 },
				}}
			/>
			<Palm3
				params={{
					...palmAnimation,
					x: 588,
					y: 126,
					m: { x: 13, y: 10 },
				}}
			/>
		</>
	);
};
