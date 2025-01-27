import React from 'react';

import { Cloud1 } from './Cloud1';
import { Cloud2 } from './Cloud2';
import { Cloud3 } from './Cloud3';
import { Cloud4 } from './Cloud4';
import { Cloud5 } from './Cloud5';
import { Cloud6 } from './Cloud6';
import { Cloud7 } from './Cloud7';

export interface CloudProps {
    params: {
        y: number;
        distance?: number;
    };
}

export const Clouds = () => {
    return (
        <React.Fragment>
            <Cloud7 params={{ y: 140, distance: 40 }} />
            <Cloud6 params={{ y: 160, distance: 40 }} />
            <Cloud5 params={{ y: 120, distance: 50 }} />
            <Cloud4 params={{ y: 196, distance: 30 }} />
            <Cloud3 params={{ y: 175, distance: 20 }} />
            <Cloud2 params={{ y: 150 }} />
            <Cloud1 params={{ y: 190 }} />
        </React.Fragment>
    );
};
