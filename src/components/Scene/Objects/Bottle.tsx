import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import { Link } from 'components';
import config from '@/config';

const CustomSvg = styled('g', {
    name: 'bottle',
    slot: 'Root',
})(({ theme }) => ({
    '.action': {
        transition: 'all 0.3s esae-out !important',
    },
    '&:hover .action': {
        transform: 'translateY(-5px) translateX(1px)',
    },
    '.bottle-ripple': {
        mixBlend: 'overlay',
        opacity: 0.75,
        fill: theme.palette.common.white,
        ...theme.applyStyles('dark', {
            opacity: 0.25,
        }),
    },
}));

export interface BottleProps {
    params: {
        x: number;
        y: number;
    };
}

export const Bottle = ({ params }: BottleProps) => {
    gsap.registerPlugin(useGSAP);

    const id = React.useId();
    const colors = useTheme().palette.scene;

    useGSAP(() => {
        const randDur = gsap.utils.random(1.5, 2.5, true);
        const randY = gsap.utils.random(-2, 2, true);

        let newDur = randDur();
        let newY = randY();

        const timeline = gsap.timeline({
            repeat: -1,
            repeatRefresh: true,
            defaults: {
                ease: 'power1.inOut',
                duration: 1.5,
            },
            onRepeat: () => {
                newDur = randDur();
                newY = randY();
            },
        });

        timeline.to('.water-level', {
            duration: () => newDur,
            y: () => newY,
        });
    });

    return (
        <React.Fragment>
            <Link url={`mailto:${config.mail}`} title="Contact" tab={false}>
                <CustomSvg
                    className="bottle link animate-all"
                    transform={`translate(${params.x},${params.y})`}
                >
                    <defs>
                        <clipPath id="top-mask" className="water-level animate">
                            <path d="M19.5,29.1s-3.1,2.6-9.6,2.6-12.4-2.6-12.4-2.6v23h22v-23Z" />
                        </clipPath>
                        <clipPath
                            id="bottom-mask"
                            className="water-level animate"
                        >
                            <path d="M-2.6-19.9V27.7s5.9,4,12.4,4,9.6-4,9.6-4V-19.9H-2.6Z" />
                        </clipPath>
                    </defs>
                    <g
                        id={`${id}-bottom`}
                        clipPath="url(#top-mask)"
                        filter="url(#waterFilter)"
                        opacity="0.35"
                    >
                        <g className="action animate-all">
                            <path
                                className="main"
                                fill={colors.bottle.main}
                                d="M10.5,47.9c-2.8,1.3-8.6,0-10.2-1.5s.2-19.2,2.2-25.6,5.7-5.7,6.3-6.4.8-2.3,1-3.5c.1-.7.2-1.2.2-1.2l4.2.8s-.2.5-.4,1.1c0,.3-.2.6-.3,1-.3,1-.3,2-.2,2.8.2.8,3.6,2,3.6,7.9s-5.4,24.2-6.5,24.6Z"
                            />
                            <path
                                className="dark"
                                fill={colors.bottle.dark}
                                d="M3.1,46.8c0,.8-1.6.1-2.2-.4-.9-.7,0-18.8,2.1-25.2s5.7-5.7,6.3-6.4.8-2.3,1-3.5c.1-.7.2-1.2.2-1.2l1.3.2s-.2.4-.4,1c0,.3-.3,1.5-.4,1.8-.3,1-.6,2.2-1.2,3.4-1.4,2-3,2.9-4.3,8.6s-2.6,13.9-2.4,21.5Z"
                            />
                            <path
                                className="main"
                                fill={colors.bottle.main}
                                d="M15.9,9.4c-.2,1-.8,2-.8,2-.4.1-.9.2-1.4.3-1.4,0-2.9-.3-4-.7-.7-.3-1.2-.5-1.2-.5-.2-1-.3-2.4-.1-3.1,0,0,0-.2,0-.2,0-.2.9-.5.9-.5,3.4.2,5,1.1,6.2,2.1.2.2.3.3.3.5,0,0,0,0,0,0Z"
                            />
                            <path
                                className="dark"
                                fill={colors.bottle.dark}
                                d="M10.2,8.3c-.1,3,4.5,3,4,3-1.4,0-2.8-.2-3.8-.5-.7-.3-1.2-.5-1.2-.5-.2-1-.4-2-.2-2.6,0,0,.8.5,1.2.6Z"
                            />
                            <path
                                className="hole"
                                d="M9.2,7.1c2.6,1.8,6.2,2,6.2,2,0,0-1.5-1.1-2.9-1.5-2.4-.6-3.4-.5-3.4-.5Z"
                            />
                            <path
                                className="light"
                                fill={colors.bottle.light}
                                d="M10.2,17.5c1.7.9,4.1.8,4.2.4s-1.7-1.7-2.5-1.8-1.9,1.2-1.6,1.4Z"
                            />
                        </g>
                    </g>
                    <g filter="url(#waterFilter)">
                        <path
                            className="bottle-ripple water-level"
                            d="M23.9,30.2c2.6,1.2-23.1,4.1-28.9,1.3-5.8-2.8,24.1-3.5,28.9-1.3Z"
                        />
                    </g>
                    <g id={`${id}-top`} clipPath="url(#bottom-mask)">
                        <g className="action">
                            <path
                                className="main"
                                fill={colors.bottle.main}
                                d="M10.5,47.9c-2.8,1.3-8.6,0-10.2-1.5s.2-19.2,2.2-25.6,5.7-5.7,6.3-6.4.8-2.3,1-3.5c.1-.7.2-1.2.2-1.2l4.2.8s-.2.5-.4,1.1c0,.3-.2.6-.3,1-.3,1-.3,2-.2,2.8.2.8,3.6,2,3.6,7.9s-5.4,24.2-6.5,24.6Z"
                            />
                            <path
                                className="dark"
                                fill={colors.bottle.dark}
                                d="M3.1,46.8c0,.8-1.6.1-2.2-.4-.9-.7,0-18.8,2.1-25.2s5.7-5.7,6.3-6.4.8-2.3,1-3.5c.1-.7.2-1.2.2-1.2l1.3.2s-.2.4-.4,1c0,.3-.3,1.5-.4,1.8-.3,1-.6,2.2-1.2,3.4-1.4,2-3,2.9-4.3,8.6s-2.6,13.9-2.4,21.5Z"
                            />
                            <path
                                className="main"
                                fill={colors.bottle.main}
                                d="M15.9,9.4c-.2,1-.8,2-.8,2-.4.1-.9.2-1.4.3-1.4,0-2.9-.3-4-.7-.7-.3-1.2-.5-1.2-.5-.2-1-.3-2.4-.1-3.1,0,0,0-.2,0-.2,0-.2.9-.5.9-.5,3.4.2,5,1.1,6.2,2.1.2.2.3.3.3.5,0,0,0,0,0,0Z"
                            />
                            <path
                                className="dark"
                                fill={colors.bottle.dark}
                                d="M10.2,8.3c-.1,3,4.5,3,4,3-1.4,0-2.8-.2-3.8-.5-.7-.3-1.2-.5-1.2-.5-.2-1-.4-2-.2-2.6,0,0,.8.5,1.2.6Z"
                            />
                            <path
                                className="hole"
                                d="M9.2,7.1c2.6,1.8,6.2,2,6.2,2,0,0-1.5-1.1-2.9-1.5-2.4-.6-3.4-.5-3.4-.5Z"
                            />
                            <path
                                className="light"
                                fill={colors.bottle.light}
                                d="M10.2,17.5c1.7.9,4.1.8,4.2.4s-1.7-1.7-2.5-1.8-1.9,1.2-1.6,1.4Z"
                            />
                            <g className="message">
                                <path
                                    fill={colors.message.light}
                                    d="M11.4,0s-.8,4.3-1,7.8c0,0,2.5,1.1,4.2,1.1,0,0,1.2-3.5,2.3-6.8,0,0-2.1-2.6-5.5-2.1Z"
                                />
                                <path
                                    fill={colors.message.dark}
                                    d="M14.2.8c-1.6-.6-2.4-.3-2.4-.3.8,1,1.2,1.8,2,2.1h.3s-.5,5.2-.5,5.2l1.2-5.1h.3c1,0,1.2-.5,1.2-.5,0,0-.3-.7-2.1-1.5Z"
                                />
                            </g>
                        </g>
                    </g>
                </CustomSvg>
            </Link>
        </React.Fragment>
    );
};
