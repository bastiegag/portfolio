import React from 'react';
import { gsap } from 'gsap';

import { Grass1 } from './Grass1';
import { Grass2 } from './Grass2';
import { Grass3 } from './Grass3';
import { Leaf1 } from './Leaf1';
import { Leaf2 } from './Leaf2';
import { Leaf3 } from './Leaf3';
import { Leaf4 } from './Leaf4';
import { Leaf5 } from './Leaf5';
import { Leaf6 } from './Leaf6';
import { Plant1 } from './Plant1';

export interface FoliagesProps {
	params: {
		duration: number;
		skewX?: string;
		rotation?: string;
		ease: string;
		x: number;
		y: number;
	};
}

export const Foliages = () => {
	const grassAnimation = {
		duration: gsap.utils.random(1.5, 2.5),
		skewX: 'random(-10,10)',
		ease: 'power1.inOut',
	};

	const plantAnimation = {
		duration: gsap.utils.random(2, 3),
		skewX: 'random(-6,6)',
		ease: 'power1.inOut',
	};

	const leafAnimation = {
		duration: gsap.utils.random(1.5, 2.5),
		rotation: 'random(-4,4)',
		ease: 'power1.inOut',
	};

	return (
		<React.Fragment>
			<Grass3 params={{ ...grassAnimation, x: 528, y: 288 }} />
			<Plant1 params={{ ...plantAnimation, x: 570, y: 277 }} />
			<Grass2 params={{ ...grassAnimation, x: 596, y: 290 }} />
			<Grass1 params={{ ...grassAnimation, x: 500, y: 293 }} />
			<Grass2 params={{ ...grassAnimation, x: 415, y: 287 }} />
			<Grass1 params={{ ...grassAnimation, x: 430, y: 293 }} />
			<Grass3 params={{ ...grassAnimation, x: 360, y: 283 }} />
			<Grass2 params={{ ...grassAnimation, x: 280, y: 286 }} />
			<Grass1 params={{ ...grassAnimation, x: 310, y: 288 }} />
			<Leaf1 params={{ ...leafAnimation, x: 366, y: 270 }} />
			<Leaf2 params={{ ...leafAnimation, x: 385, y: 279 }} />
			<Leaf3 params={{ ...leafAnimation, x: 408, y: 270 }} />
			<Leaf4 params={{ ...leafAnimation, x: 530, y: 280 }} />
			<Leaf5 params={{ ...leafAnimation, x: 496, y: 276 }} />
			<Leaf6 params={{ ...leafAnimation, x: 524, y: 270 }} />
		</React.Fragment>
	);
};
