import React from 'react';
import { gsap } from 'gsap';

import { Grass1 } from './Grass1';
import { Grass2 } from './Grass2';
import { Grass3 } from './Grass3';
import { Plant1 } from './Plant1';
import { Plant2 } from './Plant2';
import { Plant3 } from './Plant3';
import { Plant4 } from './Plant4';

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
        duration: gsap.utils.random(1.5, 2.5),
        skewX: 'random(-6,6)',
        rotation: 'random(-3,3)',
        ease: 'power1.inOut',
    };

    return (
        <React.Fragment>
            <Grass3 params={{ ...grassAnimation, x: 528, y: 288 }} />
            <Grass2 params={{ ...grassAnimation, x: 596, y: 290 }} />
            <Plant1 params={{ ...plantAnimation, x: 570, y: 279 }} />
            <Grass1 params={{ ...grassAnimation, x: 500, y: 293 }} />
            <Grass2 params={{ ...grassAnimation, x: 415, y: 287 }} />
            <Grass1 params={{ ...grassAnimation, x: 430, y: 293 }} />
            <Grass3 params={{ ...grassAnimation, x: 360, y: 283 }} />
            <Grass2 params={{ ...grassAnimation, x: 280, y: 286 }} />
            <Grass1 params={{ ...grassAnimation, x: 310, y: 288 }} />
            <Plant2 params={{ ...plantAnimation, x: 490, y: 270 }} />
            <Plant3 params={{ ...plantAnimation, x: 410, y: 280 }} />
            <Plant4 params={{ ...plantAnimation, x: 320, y: 279 }} />
        </React.Fragment>
    );
};
