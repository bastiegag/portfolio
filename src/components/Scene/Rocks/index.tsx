import React from 'react';

import { Rock01 } from './Rock01';
import { Rock02 } from './Rock02';
import { Rock03 } from './Rock03';
import { Rock04 } from './Rock04';
import { Rock05 } from './Rock05';
import { Rock06 } from './Rock06';
import { Rock07 } from './Rock07';

export const Rocks = () => {
	return (
		<React.Fragment>
			<Rock07 />
			<Rock06 />
			<Rock05 />
			<Rock04 />
			<Rock03 />
			<Rock02 />
			<Rock01 />
		</React.Fragment>
	);
};
