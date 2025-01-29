import React from 'react';
import { gsap } from 'gsap';

import { Palm1 } from './Palm1';
import { Palm2 } from './Palm2';
import { Palm3 } from './Palm3';

export interface IPalmProps {
	params: {
		palmDuration: number;
		palmRotation: string;
		leafDuration: number;
		leafRotation: string;
		ease: string;
		x: number;
		y: number;
		multiplier: number;
	};
}

export const PalmTrees = () => {
	const palmAnimation = {
		palmDuration: gsap.utils.random(3, 5),
		palmRotation: 'random(-2,2)',
		leafDuration: gsap.utils.random(3, 5),
		leafRotation: 'random(-4,4)',
		ease: 'power1.inOut',
	};

	return (
		<React.Fragment>
			<Palm1
				params={{ ...palmAnimation, x: 286, y: 110, multiplier: 10 }}
			/>
			<Palm2
				params={{ ...palmAnimation, x: 494, y: 86, multiplier: 10 }}
			/>
			<Palm3
				params={{ ...palmAnimation, x: 588, y: 126, multiplier: 10 }}
			/>
		</React.Fragment>
	);
};
