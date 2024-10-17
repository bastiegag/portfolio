import React from 'react';
import config from '@/config';

export const DebugName = ({
	name,
	x,
	y,
}: {
	name: string;
	x?: number;
	y?: number;
}) => {
	x = x ? x / 2 : 0;
	y = y ? y / 2 : 0;

	return (
		config.debug && (
			<React.Fragment>
				<text
					x={x}
					y={y}
					fill="black"
					fontSize="5"
					dominantBaseline="middle"
					textAnchor="middle"
				>
					{name}
				</text>
			</React.Fragment>
		)
	);
};
