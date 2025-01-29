import React from 'react';

import { Rock1 } from './Rock1';
import { Rock2 } from './Rock2';
import { Rock3 } from './Rock3';
import { Rock4 } from './Rock4';
import { Rock5 } from './Rock5';
import { Rock6 } from './Rock6';
import { Rock7 } from './Rock7';

export interface IRockProps {
	params: {
		distance?: number;
		multiplier: number;
		x: number;
		y: number;
	};
}

export const Rocks = () => {
	return (
		<React.Fragment>
			<Rock7 params={{ x: 356, y: 170, multiplier: 11, distance: 0 }} />
			<Rock6 params={{ x: 304, y: 230, multiplier: 11, distance: 0 }} />
			<Rock5 params={{ x: 600, y: 245, multiplier: 11, distance: 0 }} />
			<Rock4 params={{ x: 400, y: 143, multiplier: 11 }} />
			<Rock3 params={{ x: 329, y: 261, multiplier: 12 }} />
			<Rock2 params={{ x: 284, y: 274, multiplier: 12, distance: 0 }} />
			<Rock1 params={{ x: 404, y: 278, multiplier: 12 }} />
		</React.Fragment>
	);
};
