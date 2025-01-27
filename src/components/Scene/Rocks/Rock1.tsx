import React, { useId } from 'react';
import { styled, useTheme } from '@mui/system';

import { RockProps } from './';

const CustomSvg = styled('g', {
    name: 'rock1',
    slot: 'Root',
})(() => ({}));

export const Rock1 = ({ params }: RockProps) => {
    const colors = useTheme().palette.scene;

    const id = useId();
    const x = typeof params.x == 'undefined' ? 0 : params.x;
    const y = typeof params.y == 'undefined' ? 0 : params.y;

    return (
        <React.Fragment>
            <CustomSvg
                id={`${id}`}
                className="rock rock-1 animate-color"
                transform={`translate(${x},${y})`}
            >
                <polygon
                    fill={colors.rock[500]}
                    points="0 15.4 9.7 1.9 15.9 1.4 36.8 0 41.7 3.3 50.9 19 22.7 19 19 16.7 0 15.4"
                />
                <path
                    fill={colors.rock[200]}
                    d="M9.7,1.9l2.2,3.9,19.4,3.7,10.4-6.2-4.9-3.3s-15.2-.2-27.1,1.9Z"
                />
                <path
                    fill={colors.rock[800]}
                    d="M50.9,19l-9.2-15.7-10.4,6.2.2,7-8.8,2.5M19,16.7l3-9-10.1-1.9-3.7,8.2L0,15.4l18,1.3h1Z"
                />
                <polygon
                    fill={colors.rock[100]}
                    points="29.9 9.2 32.9 8.5 31.3 11.3 29.9 9.2"
                />
                <polygon
                    className="rock-fade"
                    fill={colors.sky.light}
                    fillOpacity={params.distance ? `${params.distance}%` : '0'}
                    points="0 15.4 9.7 1.9 15.9 1.4 36.8 0 41.7 3.3 50.9 19 22.7 19 19 16.7 0 15.4"
                />
            </CustomSvg>
        </React.Fragment>
    );
};
