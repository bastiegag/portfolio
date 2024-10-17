import React from 'react';

import { Clothesline } from './Clothesline';
import { Bottle } from './Bottle';
import { Firecamp } from './Firecamp';
import { Smoke } from './Smoke';

export const Objects = () => {
    return (
        <React.Fragment>
            <Clothesline params={{ x: 660, y: 244 }} />
            <Bottle params={{ x: 720, y: 326 }} />
            <Firecamp params={{ x: 157, y: 119 }} />
            {/* <Smoke params={{ x: 193, y: 110 }} /> */}
        </React.Fragment>
    );
};
