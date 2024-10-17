import React from 'react';
import { gsap } from 'gsap';

import { Palm1 } from './Palm1';
import { Palm2 } from './Palm2';
import { Palm3 } from './Palm3';

export interface PalmProps {
	params: {
		palmDuration: number;
		palmRotation: string;
		leafDuration: number;
		leafRotation: string;
		ease: string;
		x: number;
		y: number;
	};
}

export const PalmTrees = () => {
	const palmAnimation = {
		palmDuration: gsap.utils.random(2, 5),
		palmRotation: 'random(-2,2)',
		leafDuration: gsap.utils.random(2, 3),
		leafRotation: 'random(-3,3)',
		ease: 'power1.inOut',
	};

	return (
		<React.Fragment>
			<Palm1 params={{ ...palmAnimation, x: 290, y: 110 }} />
			<Palm2 params={{ ...palmAnimation, x: 494, y: 86 }} />
			<Palm3 params={{ ...palmAnimation, x: 588, y: 128 }} />
		</React.Fragment>
	);
};
