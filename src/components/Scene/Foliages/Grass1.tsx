import { useId } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import { FoliagesProps } from './';

const CustomSvg = styled('g', {
    name: 'grass',
    slot: 'Root',
})(() => ({}));

export const Grass1 = ({ params }: FoliagesProps) => {
    gsap.registerPlugin(useGSAP);

    const id = useId();
    const colors = useTheme().palette.scene;

    useGSAP(() => {
        const timeline = gsap.timeline({
            repeat: -1,
            repeatRefresh: true,
        });

        timeline.to(`#${CSS.escape(id)}`, {
            duration: params.duration,
            skewX: params.skewX,
            ease: params.ease,
            svgOrigin: '25 11',
        });
    });

    return (
        <CustomSvg
            className="grass grass-1"
            transform={`translate(${params.x},${params.y})`}
        >
            <g id={id} className="animate-color">
                <path
                    fill={colors.foliage.main}
                    d="M0,10.4s1.9-5.4,1.8-5.8,4.6-2.3,4.6-2.3c0,0,1,4.6,1.1,4.8s0-3,0-3l3.1,1.6,6.4-2c-.1,2.6.1,3.9.1,3.9,0-1.3,1.3-4.8,1.3-4.8l4.3.5,5.5-1.5c-.5,2.5-.5,5.6-.5,5.6.8-3.8,1.5-7,1.5-7l2.7,1.4c-.8,1.8-1.2,3.9-1.5,6.1l1.6-4.4,2.2.2c-1.1,2.1-2.1,4.6-2.1,4.6.8-1.6,3-4.4,3-4.4l5,3.2,3.5.4s-.8,1.1-1.3,3.2H0ZM46.7,6.5s.4,1.8.1,3.8h1.2c.1-1.9-1.3-3.8-1.3-3.8ZM49.9,0c-1.5,2.4-1.3,10.3-1.3,10.3h-.5l1.6.2c-.6-3.2.2-10.5.2-10.5Z"
                />
                <polygon
                    fill={colors.foliage.dark}
                    points="10.7 9.8 10.7 5.7 13 5 12.4 9.9 10.7 9.8"
                />
                <path
                    fill={colors.foliage.light}
                    d="M26.3,2.3l2-.5c0,.2,0,.4-.1.7l-2,.4-.8,4.1v-3.9s-1.7.4-1.7.4l-.8,1.5-.2-1.5-3.1-.6,3.3.4,2.6-.7v-1.1s1.3-.8,1.3-.8l-.3,1.6ZM40.2,6.9l-2.3-1.5-3,5.1h7.4c.5-2.1,1.3-3.1,1.3-3.1l-3.5-.4ZM36.4,3.5l-2,4.6,2.5-4-.5-.6Z"
                />
            </g>
        </CustomSvg>
    );
};
