import React from 'react';

import { Rock1 } from './Rock1';
import { Rock2 } from './Rock2';
import { Rock3 } from './Rock3';
import { Rock4 } from './Rock4';
import { Rock5 } from './Rock5';
import { Rock6 } from './Rock6';
import { Rock7 } from './Rock7';

export interface RockProps {
	distance?: number;
}

export const Rocks = () => {
	return (
		<React.Fragment>
			<Rock7 distance={10} />
			<Rock6 distance={20} />
			<Rock5 distance={10} />
			<Rock4 />
			<Rock3 />
			<Rock2 distance={5} />
			<Rock1 />
		</React.Fragment>
	);
};
