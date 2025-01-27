import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { styled, useTheme } from "@mui/system";

import { Link } from "components";
import config from "@/config";

const CustomSvg = styled("g", {
	name: "deck",
	slot: "Root",
})(({ theme }) => ({
	".deck-ripple": {
		mixBlend: "overlay",
		opacity: 0.75,
		...theme.applyStyles("dark", {
			opacity: 0.25,
		}),
	},
	".deck-glass": {
		opacity: 0.9,
	},
}));

export interface DeckProps {
	params: {
		x: number;
		y: number;
		scale?: number;
	};
}

export const Deck = ({ params }: DeckProps) => {
	gsap.registerPlugin(useGSAP);

	const id = React.useId();
	const colors = useTheme().palette.scene;
	const width = 82;
	const height = 55;

	useGSAP(() => {
		const randDur = gsap.utils.random(1.5, 2.5, true);
		const randY = gsap.utils.random(-2, 2, true);

		let newDur = randDur();
		let newY = randY();

		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
			defaults: {
				ease: "power1.inOut",
				duration: 1.5,
			},
			onRepeat: () => {
				newDur = randDur();
				newY = randY();
			},
		});

		timeline.to(".deck-water-level", {
			duration: () => newDur,
			y: () => newY,
		});
	});

	return (
		<React.Fragment>
			<Link to="/projets" title="Projets" tab={false}>
				<CustomSvg
					className="deck link animate-all"
					transform={`translate(${params.x},${params.y})`}
					strokeWidth="0"
				>
					<svg
						width={params.scale ? width * params.scale : width}
						height={params.scale ? height * params.scale : height}
						viewBox={`0 0 ${width} ${height}`}
					>
						<defs>
							<clipPath
								id="deck-top-mask"
								className="deck-water-level animate"
							>
								<path d="M72.5,39.1c-6.5,0-12.4-4-12.4-4l-37.8,2s-3.1,4-9.6,4S0,37.2,0,37.2v18.4h82.4v-20.6s-3.4,4.2-9.9,4.2Z" />
							</clipPath>
							<clipPath
								id="deck-bottom-mask"
								className="deck-water-level animate"
							>
								<path d="M0,0v37.2s6.1,3.9,12.6,3.9,9.6-4,9.6-4l37.8-2s5.9,4,12.4,4,9.9-4.2,9.9-4.2V0H0Z" />
							</clipPath>
						</defs>
						<g
							className="lower-right-stud"
							clipPath="url(#deck-top-mask)"
							filter="url(#waterReflection)"
							opacity="0.35"
						>
							<path
								className="main"
								fill={colors.wood.main}
								d="M68.8,11c1.3,6.3,1.9,44.1,1.9,44.1,1.4.9,5.1.7,5.6,0,0,0,.9-39.1,1.8-44-.4-1.4-7.8-1.7-9.3,0Z"
							/>
							<path
								className="dark"
								fill={colors.wood.dark}
								d="M72.9,10c-1.8,0-3.5.4-4.1,1.1,1.3,6.3,1.9,44.1,1.9,44.1.7.5,2.1.6,3.4.6-.3-9.5-1.6-32.8.6-45.6-.5,0-1.1-.1-1.8-.2Z"
							/>
							<path
								className="darker"
								fill={colors.wood.darker}
								d="M71.9,55.6c-.5-7.5-1.4-29.8-1.4-45.3-.8.2-1.5.4-1.8.8,1.3,6.3,1.9,44.1,1.9,44.1.3.2.8.4,1.3.4Z"
							/>
							<path
								className="lighter"
								fill={colors.wood.lighter}
								d="M72.2,9.9c-2.3,0-4.6.5-2.9,2s5,1.3,6.6.3,2.3-.7,2.1-1.1c-.4-.9-2.1-1.3-5.9-1.2Z"
							/>
							<path
								className="light"
								fill={colors.wood.light}
								d="M76,10.4c.5.2,0,.5-.6.8-.9.5-3,.9-4,0-.7-.6-.3-.9.5-1-1.5,0-2.7.5-1.5,1.3,1.3,1,4.1.6,5.4,0,.9-.5,2.4-.6.3-1.1Z"
							/>
						</g>
						<g
							className="deck-water-level animate"
							filter="url(#waterRipple)"
						>
							<path
								fill={colors.white}
								className="deck-ripple animate"
								d="M80.6,38.4c-2.3-2-16.7-1.4-13.9,1.2,2.8,2.6,15.2-.1,13.9-1.2ZM68.1,39.2c-.9-.4,8.4-1.3,10.4-.4s-8.7,1.2-10.4.4Z"
							/>
						</g>
						<g
							className="lower-right-stud"
							clipPath="url(#deck-bottom-mask)"
						>
							<path
								className="main"
								fill={colors.wood.main}
								d="M68.8,11c1.3,6.3,1.9,44.1,1.9,44.1,1.4.9,5.1.7,5.6,0,0,0,.9-39.1,1.8-44-.4-1.4-7.8-1.7-9.3,0Z"
							/>
							<path
								className="dark"
								fill={colors.wood.dark}
								d="M72.9,10c-1.8,0-3.5.4-4.1,1.1,1.3,6.3,1.9,44.1,1.9,44.1.7.5,2.1.6,3.4.6-.3-9.5-1.6-32.8.6-45.6-.5,0-1.1-.1-1.8-.2Z"
							/>
							<path
								className="darker"
								fill={colors.wood.darker}
								d="M71.9,55.6c-.5-7.5-1.4-29.8-1.4-45.3-.8.2-1.5.4-1.8.8,1.3,6.3,1.9,44.1,1.9,44.1.3.2.8.4,1.3.4Z"
							/>
							<path
								className="lighter"
								fill={colors.wood.lighter}
								d="M72.2,9.9c-2.3,0-4.6.5-2.9,2s5,1.3,6.6.3,2.3-.7,2.1-1.1c-.4-.9-2.1-1.3-5.9-1.2Z"
							/>
							<path
								className="light"
								fill={colors.wood.light}
								d="M76,10.4c.5.2,0,.5-.6.8-.9.5-3,.9-4,0-.7-.6-.3-.9.5-1-1.5,0-2.7.5-1.5,1.3,1.3,1,4.1.6,5.4,0,.9-.5,2.4-.6.3-1.1Z"
							/>
						</g>
						<g
							className="lower-left-stud"
							clipPath="url(#deck-top-mask)"
							filter="url(#waterReflection)"
							opacity="0.35"
						>
							<path
								className="main"
								fill={colors.wood.main}
								d="M5.6,12.5c.6,2.2,5.2,42.3,5.2,42.3,0,0,3.1,1.3,5.9-.1,0,0-3.3-37.7-2-41.9,0,0,0-.8-1.9-1.1s-5.8,0-7.2.8Z"
							/>
							<path
								className="dark"
								fill={colors.wood.dark}
								d="M11.7,14l-5.3-1.8c-.3.1-.6.2-.8.4.6,2.2,5.2,42.3,5.2,42.3,0,0,1.6.7,3.5.5-.9-6.1-4-30.4-2.5-41.4Z"
							/>
							<path
								className="darker"
								fill={colors.wood.darker}
								d="M5.6,12.6c.7,2.9,5.1,42.3,5.1,42.3,0,0,.3.1.9.3-.6-4.7-3.1-23.8-3.9-41l-2.1-1.5Z"
							/>
							<path
								className="lighter"
								fill={colors.wood.lighter}
								d="M9.9,14.4c-3.3.5-4.4-1.1-4.3-1.9s2.8-1,4.5-1.1,4.3.3,4.5,1.4-1.8,1.2-4.7,1.6Z"
							/>
							<path
								className="light"
								fill={colors.wood.light}
								d="M10.7,13.3c-1.8.2-2.4-.5-2.4-.9,0-.2.4-.3.9-.4-1,0-2.1.2-2.2.6,0,.5.7,1.4,2.9,1.1,2-.2,3.2-.6,3.2-.9,0,0,0,0,0,0-.3.2-1.2.4-2.5.6Z"
							/>
						</g>
						<g
							className="deck-water-level animate"
							filter="url(#waterRipple)"
						>
							<path
								fill={colors.white}
								className="deck-ripple animate"
								d="M19.4,40.5c-2.3-2-16.7-1.4-13.9,1.2,2.8,2.6,15.2-.1,13.9-1.2ZM6.9,41.3c-.9-.4,8.4-1.3,10.4-.4s-8.7,1.2-10.4.4Z"
							/>
						</g>
						<g
							className="lower-left-stud"
							clipPath="url(#deck-bottom-mask)"
						>
							<path
								className="main"
								fill={colors.wood.main}
								d="M5.6,12.5c.6,2.2,5.2,42.3,5.2,42.3,0,0,3.1,1.3,5.9-.1,0,0-3.3-37.7-2-41.9,0,0,0-.8-1.9-1.1s-5.8,0-7.2.8Z"
							/>
							<path
								className="dark"
								fill={colors.wood.dark}
								d="M11.7,14l-5.3-1.8c-.3.1-.6.2-.8.4.6,2.2,5.2,42.3,5.2,42.3,0,0,1.6.7,3.5.5-.9-6.1-4-30.4-2.5-41.4Z"
							/>
							<path
								className="darker"
								fill={colors.wood.darker}
								d="M5.6,12.6c.7,2.9,5.1,42.3,5.1,42.3,0,0,.3.1.9.3-.6-4.7-3.1-23.8-3.9-41l-2.1-1.5Z"
							/>
							<path
								className="lighter"
								fill={colors.wood.lighter}
								d="M9.9,14.4c-3.3.5-4.4-1.1-4.3-1.9s2.8-1,4.5-1.1,4.3.3,4.5,1.4-1.8,1.2-4.7,1.6Z"
							/>
							<path
								className="light"
								fill={colors.wood.light}
								d="M10.7,13.3c-1.8.2-2.4-.5-2.4-.9,0-.2.4-.3.9-.4-1,0-2.1.2-2.2.6,0,.5.7,1.4,2.9,1.1,2-.2,3.2-.6,3.2-.9,0,0,0,0,0,0-.3.2-1.2.4-2.5.6Z"
							/>
						</g>
						<g className="planks">
							<polygon
								className="light"
								fill={colors.wood.light}
								points="35.3 0 76.8 0 77.4 5.9 79.7 14.7 78.8 18.2 79.7 18.2 82.4 24.8 80.1 29.5 51.6 30.3 50.6 31.5 2.7 33.7 0 27.7 11 20.3 10.8 18.4 16.5 14.6 18.1 14.6 17.8 13.5 25.2 8.7 29.3 8.5 29.1 5.4 35.3 0"
							/>
							<path
								className="lightless"
								fill={colors.wood.lightless}
								d="M77.2,3.8C64.9,1.9,40.8,0,30.2,4.7L35.3,0h41.5s.4,3.7.4,3.7ZM60.1,7s-4,1.7,0,2.2,17.9.2,17.9.2c0,0-10.4,3.5-19.5,4s-12.6.8-8.9-1.8-18.2-4.8-27.3,2l8,.2c2.5-3.5,13.6-4.4,16.2-3.2s.1,2.3-2,3.5c0,0,4.1.7,8.6.6s14.5-.9,25.3-5.1v-.8c-.1,0-4.8.5-11.2.3s-8.7,0-7-2ZM38.4,14.7c10.4,0,27.7.8,27.1,1.9s-31.6,0-31.9,1.5l8.4,1.2,36.8-1.1,1-3.5h-41.3ZM80.3,19.7c-3.4,1-19.9,6.9-29.2.7,0,.2-29.6-1.8-28.1-1.2s6.8,2.9-5,5.3c-11.8,2.4-10.2-2.1-10.2-2.1L0,27.7l12.1-.5s12-4.4,28.5-5.9c12-1.1,9.7,1.9,15.5,2.3s14.1.8,24.9-2.1l-.7-1.9Z"
							/>
							<path
								className="main"
								fill={colors.wood.main}
								d="M76.9,1.1L47.9,0h28.9s.1,1.1.1,1.1ZM23.4,13.6c3.4-2.7,13.1-4.4,13.1-4.4-10.6.5-18.7,4.3-18.7,4.3h5.6ZM29.1,5.4s5.8-3.1,15.5-3.6,20,.4,20,.4c0,0-23.4-2.9-33.9,1.8l-1.6,1.4Z"
							/>
							<path
								className="dark"
								fill={colors.wood.dark}
								d="M59.2,7.7h-14.1l-15.8.8-.2-3,48.3.5-18.2,1.8ZM17.8,13.5l.3,1h61.6c0,0-61.9-1-61.9-1ZM11,20.3l58-1.3-26-.3-9.4-.8-22.8.4.2,2ZM82.4,24.8h-31c0,0-27.1,1.5-27.3,1.5S0,27.7,0,27.7l2.7,6,47.9-2.2.9-1.2,28.5-.8,2.3-4.8ZM79.2,16.7l.6-2h-.9s.3,2,.3,2Z"
							/>
							<path
								className="darker"
								fill={colors.wood.darker}
								d="M40.7,7.7l-.7-2.2,1.1-1.7-.4,3.9ZM70.6,3.6l.7,2.9.8-.6-1.5-2.3ZM35,22.2l-7.7,3.9.8,5.5,1.3-5.6,5.6-3.8ZM43,22.5l-2.4,2.9,2.2,3.6v-6.5Z"
							/>
						</g>
						<g className="upper-left-stud">
							<path
								className="main"
								fill={colors.wood.main}
								d="M14.6,12.8s0-.8-1.9-1.1c-2.1-.3-5.8,0-7.2.8.2.8.9,6.1,1.7,12.8.7.3,1.8.4,3.2.4s3.1-.4,4-.9c-.3-5.9-.3-10.7,0-12Z"
							/>
							<path
								className="dark"
								fill={colors.wood.dark}
								d="M6.4,12.1c-.3.1-.6.2-.8.4.2.8.9,6.1,1.7,12.8.7.3,1.8.4,3.2.4s.5,0,.8,0c-.2-4.5-.1-8.6.3-11.7l-5.3-1.8Z"
							/>
							<path
								className="darker"
								fill={colors.wood.darker}
								d="M7.3,25.3c.3.1.7.2,1.1.3-.3-3.8-.5-7.7-.7-11.5l-2.1-1.5c.2,1,.9,6.2,1.7,12.7Z"
							/>
							<g className="rope">
								<path
									className="light"
									fill={colors.rope.light}
									d="M6.7,20.8c2.6,2.4,5.7,1.7,7.4,0,1.2-.7.5,1.8.5,1.8,0,0,1.2.7.1,2.1-1.3,1.4-5,2.2-7.3,1.2-1.3-.4-.7-1.9-.7-1.9,0,0-1.5-2.2,0-3.1Z"
								/>
								<path
									className="dark"
									fill={colors.rope.dark}
									d="M9.4,25.6c-1.4-.1-1.7-1.1-.9-1.4.5-.2,2.5-.4,3.8-.8-1.7.3-4.3.4-4.9,0-.9-.4-1.6-1.5-.1-2.3l-.5-.4c-1.5,1.1,0,3.1,0,3.1,0,0-.6,1.5.7,1.9,1.9.8,4.6.4,6.3-.5-.8.3-3,.4-4.3.3Z"
								/>
							</g>
							<path
								className="lighter"
								fill={colors.wood.lighter}
								d="M9.9,14.4c-3.3.5-4.4-1.1-4.3-1.9s2.8-1,4.5-1.1,4.3.3,4.5,1.4-1.8,1.2-4.7,1.6Z"
							/>
							<path
								className="light"
								fill={colors.wood.light}
								d="M10.7,13.3c-1.8.2-2.4-.5-2.4-.9,0-.2.4-.3.9-.4-1,0-2.1.2-2.2.6,0,.5.7,1.4,2.9,1.1,2-.2,3.2-.6,3.2-.9,0,0,0,0,0,0-.3.2-1.2.4-2.5.6Z"
							/>
						</g>
						<g className="upper-right-stud">
							<path
								className="main"
								fill={colors.wood.main}
								d="M73.9,23.6c1.6,0,2.8-.3,3.4-.7.2-5.7.5-10.3.8-11.8-.4-1.4-7.8-1.7-9.3,0,.4,1.8.7,6.4.9,11.8.9.5,2.5.8,4.2.7Z"
							/>
							<path
								className="dark"
								fill={colors.wood.dark}
								d="M68.8,11c.4,1.8.7,6.4.9,11.8.8.4,2.3.8,3.8.7.2-5,.5-9.7,1.2-13.5-.5,0-1.1-.1-1.8-.2-1.8,0-3.5.4-4.1,1.1Z"
							/>
							<path
								className="darker"
								fill={colors.wood.darker}
								d="M68.8,11c.4,1.8.7,6.4.9,11.8.3.1.6.3,1,.4,0-4.5-.1-9-.1-13-.8.2-1.5.4-1.8.8Z"
							/>
							<g className="rope">
								<path
									className="light"
									fill={colors.rope.light}
									d="M69.4,18.3c2.5,2.7,5.9,2.2,7.8.7,1.3-.6.4,1.8.4,1.8,0,0,1.2.8,0,2.1-1.5,1.3-5.4,1.7-7.8.6-1.3-.5-.6-2-.6-2,0,0-1.3-2.3.3-3.1Z"
								/>
								<path
									className="dark"
									fill={colors.rope.dark}
									d="M71.8,23.4c-1.5-.3-1.7-1.2-.8-1.5.5-.2,2.6-.2,4-.4-1.8.1-4.6,0-5.2-.4-1-.5-1.5-1.7,0-2.3l-.5-.5c-1.7.9-.3,3.1-.3,3.1,0,0-.7,1.5.6,2,1.9.9,4.8.8,6.6,0-.9.3-3.2.2-4.5,0Z"
								/>
							</g>
							<path
								className="lighter"
								fill={colors.wood.lighter}
								d="M72.2,9.9c-2.3,0-4.6.5-2.9,2s5,1.3,6.6.3,2.3-.7,2.1-1.1c-.4-.9-2.1-1.3-5.9-1.2Z"
							/>
							<path
								className="light"
								fill={colors.wood.light}
								d="M76,10.4c.5.2,0,.5-.6.8-.9.5-3,.9-4,0-.7-.6-.3-.9.5-1-1.5,0-2.7.5-1.5,1.3,1.3,1,4.1.6,5.4,0,.9-.5,2.4-.6.3-1.1Z"
							/>
						</g>
						<g className="hammer">
							<path
								className="main"
								fill={colors.rock[600]}
								d="M55.8,4.4c-.3,0-7.7,2.5-7.9,2.7s.7,3.5.7,3.5l.4,1,7.5-1.5.6-1.7s-1-3.9-1.3-3.9Z"
							/>
							<path
								className="dark"
								fill={colors.rock[800]}
								d="M57.1,8.2c-.2-.2-8.1,1.7-8.4,1.9s.2,1.2.3,1.4,7.2-1.3,7.5-1.5.7-1.7.5-1.8Z"
							/>
							<path
								className="main"
								fill={colors.wood.main}
								d="M54.3,9.5c.2.4,1.3,4.7,3.7,8.9,2.4,4.2-3.4,3.3-3.8,3s-.4-1.3-.4-2.2-1.3-6.5-1.9-8.7c-.2-.9,2.1-1.4,2.4-1Z"
							/>
							<path
								className="dark"
								fill={colors.wood.dark}
								d="M58.2,18.8c-.9.4-2.3.8-4.4,1,0,.8.2,1.3.4,1.5.4.3,5.8,1.1,4-2.6Z"
							/>
							<path
								className="hammer-back"
								strokeWidth="0.65"
								fill="transparent"
								d="M58.3,20.8s0,0,0-.1c0,0,0-.1,0-.2,0,0,0-.1,0-.2,0,0,0-.2,0-.3,0,0,0-.1,0-.2,0,0,0-.2,0-.3,0,0,0-.2,0-.3,0-.1,0-.2-.1-.4,0,0,0,0,0-.1,0,0,0,0,0,0,0-.1-.1-.3-.2-.4-1.8-3.1-2.8-6.2-3.3-7.8,1-.2,1.8-.4,1.9-.5.3-.2.6-1.4.6-1.7h0s-1-3.9-1.3-4-7.7,2.5-7.9,2.7c-.1.2.7,3.3.7,3.5,0,.4.3.8.4,1,0,0,1.5-.1,3-.4.6,2.5,1.7,7.3,1.7,8.1,0,.2,0,.5,0,.7,0,.5,0,.8.2,1.1,0,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,.1.1.2,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,0,0,.2,0,0,0,0,0,.1,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,.1,0,.2,0,0,0,.2,0,.3,0,0,0,.1,0,.2,0,0,0,.2,0,.3,0,0,0,.1,0,.2,0,0,0,.2,0,.3,0,0,0,.1,0,.2,0,0,0,.2,0,.3,0,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,.1,0,.2,0,0,0,.1,0,.2-.1,0,0,0,0,.1-.1,0,0,.1-.1.1-.2Z"
							/>
						</g>
					</svg>
				</CustomSvg>
			</Link>
		</React.Fragment>
	);
};
