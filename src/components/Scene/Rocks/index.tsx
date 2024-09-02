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
			<defs>
				<filter
					id="rockBlur"
					x="0"
					y="0"
					xmlns="http://www.w3.org/2000/svg"
				>
					<feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
				</filter>
			</defs>
			{/* <g filter="url(#rockBlur)"> */}
			<Rock07 />
			<Rock06 />
			{/* </g> */}
			<Rock05 />
			<Rock04 />
			<Rock03 />
			<Rock02 />
			<Rock01 />
		</React.Fragment>
	);
};
