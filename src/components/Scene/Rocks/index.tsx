import React from 'react';

import { Rock1 } from './Rock1';
import { Rock2 } from './Rock2';
import { Rock3 } from './Rock3';
import { Rock4 } from './Rock4';
import { Rock5 } from './Rock5';
import { Rock6 } from './Rock6';
import { Rock7 } from './Rock7';
import { Rock8 } from './Rock8';
import { Rock9 } from './Rock9';
import { Rock10 } from './Rock10';

export interface RockProps {
	params: {
		distance?: number;
		x?: number;
		y?: number;
	};
}

export const Rocks = () => {
	return (
		<React.Fragment>
			<Rock9 params={{ x: 160, y: 289 }} />
			<Rock8 params={{ x: 244, y: 286 }} />
			<Rock10 params={{ x: 200, y: 294 }} />
			<Rock7 params={{ x: 356, y: 170, distance: 10 }} />
			<Rock6 params={{ x: 304, y: 230, distance: 20 }} />
			<Rock5 params={{ x: 600, y: 245, distance: 10 }} />
			<Rock4 params={{ x: 400, y: 143 }} />
			<Rock3 params={{ x: 329, y: 261 }} />
			<Rock2 params={{ x: 284, y: 274, distance: 5 }} />
			<Rock1 params={{ x: 404, y: 278 }} />
		</React.Fragment>
	);
};
