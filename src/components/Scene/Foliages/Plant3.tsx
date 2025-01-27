import { useId } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { styled, useTheme } from "@mui/system";

import { FoliagesProps } from "./";

const CustomSvg = styled("g", {
	name: "plant-3",
	slot: "Root",
})(() => ({
	".leaf-light, .leaf-dark": {
		opacity: 0.25,
	},
	".leaf-dark": {
		mixBlendMode: "multiply",
	},
	".leaf-light": {
		mixBlendMode: "overlay",
	},
}));

export const Plant3 = ({ params }: FoliagesProps) => {
	gsap.registerPlugin(useGSAP);

	const id = useId();
	const colors = useTheme().palette.scene;

	useGSAP(() => {
		for (let i = 1; i <= 4; i++) {
			const leafTimeline = gsap.timeline({
				repeat: -1,
				repeatRefresh: true,
			});

			leafTimeline.to(`#${CSS.escape(id)}-${i}`, {
				duration: params.duration,
				rotation: params.rotation,
				ease: params.ease,
				svgOrigin: "33 27",
			});
		}
	});

	return (
		<CustomSvg
			id={id}
			className="plant plant-3 animate-color"
			transform={`translate(${params.x},${params.y})`}
		>
			<g id={`${id}-1`} className="leaf">
				<path
					fill={colors.foliage.dark}
					d="M55.3,2.3s-8.3,10-10.9,14.2-10.7,9.2-10.7,9.2l1.1-12.6,5.8-6.2,14.6-4.6Z"
				/>
				<path
					fill={colors.foliage.main}
					d="M28.3,25.6s2.6-11.8,4.3-15.4c1.8-3.6,15.1-8.8,24.9-10.2,0,0-6,6.7-10.2,10.8l-4.3-.6,3.1,1.8s-4.4,4.8-7.3,8.2-8.8,7.1-8.8,7.1l-1.8-1.7h0Z"
				/>
				<path
					fill={colors.black}
					className="leaf-dark"
					d="M46.2,12.1l-9-5.4s-1.7.5-2.9,2.2l8.5,7,3.4-3.8Z"
				/>
				<path
					fill={colors.white}
					className="leaf-light"
					d="M43.1,4.1l7.1,3.7-2.9,3c0,0-4.4-.6-4.4-.6l-5.1-3.9,5.2-2.3Z"
				/>
				<path
					className="leaf-backlight"
					fill={colors.foliage.lighter}
					d="M54.5.5s-15.5,4.6-19,7.5c-3.6,2.9-5,8.5-5,8.5,0,0,1.5-5.4,2.4-6.9S40.1,3.5,54.5.5Z"
				/>
			</g>
			<g id={`${id}-2`} className="leaf">
				<path
					fill={colors.foliage.main}
					d="M30.6,26s5.7-10.5,8.8-12.4c3.1-2,12.4-3.7,12.4-3.7l-2.1,2.2,3.7-1.6s5.8,1.4,12.6,6.2l-9.2,4.5h-2.1c0,0-1.2,1.5-1.2,1.5,0,0-14.3.9-15.3,1.1-.9.2-6.2,3.4-6.2,3.4l-1.3-1.2h0Z"
				/>
				<path
					fill={colors.foliage.light}
					d="M34.7,21s5.4-3.4,8-4.2c2.5-.9,23.2,0,23.2,0,0,0-5-3.9-12.6-6.3l-3.3,1.5,1.8-2.1s-8.9,1.6-12.4,3.7-8.1,8.5-8.1,8.5l3.4-1.1s0,0,0,0Z"
				/>
				<path
					fill={colors.black}
					className="leaf-dark"
					d="M47.4,16.3l6,6.6,1.2-1.4-5.8-5.1s-1.4,0-1.4,0ZM39.9,23.7l-3.7-3.5-.8-2.9-.4.4.5,7.6s2.2-1.2,2.6-1.3,1.8-.2,1.8-.2ZM50,12l-4.7,4.2-1.9.2,5.7-6,2.8-.6-1.8,2.1h0Z"
				/>
				<path
					fill={colors.white}
					className="leaf-light"
					d="M53.3,10.5l-5.3,5.6h7.7c0,.1,4-3,4-3,0,0-3.3-1.6-6.3-2.6h0Z"
				/>
				<path
					className="leaf-backlight"
					fill={colors.foliage.lighter}
					d="M35.1,20.8s5.3-3.4,7.8-4.3c2.5-.9,15.3-.4,15.3-.4l7.7.8-14.6-.4s-7.2,0-8.3.4c-1.2.4-8.2,4.2-8.2,4.2l.3-.2Z"
				/>
			</g>
			<g id={`${id}-3`} className="leaf">
				<path
					fill={colors.foliage.main}
					d="M28.4,19s4-4.3,4.2-8.4c0,0-.4-3.2-6.8-5.5l-.9,4.2-.9-4.4s-9.3-1.8-12.9-1.3C7.4,4.2,0,7.3,0,7.3,0,7.3,8.3,13,13.6,16l4.9-2.8-2.7,3.9,15.4,9.3s-.8-3.3-2.7-7.5h0Z"
				/>
				<path
					fill={colors.foliage.light}
					d="M23.7,12.1c-1.7-1.7-10.8-5.2-13.1-5.4S0,7.3,0,7.3C0,7.3,6.9,4.3,11,3.6c4.2-.8,13,1.3,13,1.3l.9,4.4.9-4.2s5.9,1.9,6.8,5.5c0,0,0,5.5-4.2,8.3,0,0-2.9-5.1-4.7-6.8Z"
				/>
				<path
					fill={colors.black}
					className="leaf-dark"
					d="M15.7,17.1l4.4-6.4,2.8,1.4-3.8,7-3.3-2h0ZM25.8,5.1l-1.6,7.4,2.2,3.2,1.7-9.7s-1.1-.6-2.3-1Z"
				/>
				<path
					fill={colors.white}
					className="leaf-light"
					d="M11.6,3.6l.2,3.5,9.3,3.6-1.2-6.5s-5.7-1-8.3-.5h0Z"
				/>
				<path
					className="leaf-backlight"
					fill={colors.foliage.lighter}
					d="M0,7.3s8.9-.4,10.7-.3c1.7,0,12,5.2,13.3,6,1.2.8,4.5,6,4.5,6,0,0-3.1-5.4-4.7-7s-11.6-5.1-12.9-5.3c-1.3-.2-10.8.6-10.8.6Z"
				/>
			</g>
			<g id={`${id}-4`} className="leaf">
				<path
					fill={colors.foliage.main}
					d="M31.5,27.9s-5.1-7.1-8-8.7c-2.8-1.7-14.6-2.9-16.2-2.3S.2,21.4.2,21.4l5.4.7,1.2-3-.4,3s5.9,1.4,8.5,2.1c2.6.7,6.8,2.3,6.8,2.3l2.4-.9-.9,1.2s6.3,1.5,8.3,1h0s0,0,0,0Z"
				/>
				<path
					fill={colors.black}
					className="leaf-dark"
					d="M6.5,22.1l.7-5.1s.7,0,1.8,0l.8,5.9-3.3-.8Z"
				/>
				<path
					className="leaf-backlight"
					fill={colors.foliage.lighter}
					d="M28.8,24.4s-5-4.6-6.8-5.5-13.1-2.3-14.6-1.9c-1.4.3-7.3,4.4-7.3,4.4,0,0,4.9-3.9,7.2-4.6s12.8.4,16,2.2c3.1,1.8,5.6,5.5,5.6,5.5h0s0,0,0,0Z"
				/>
			</g>
		</CustomSvg>
	);
};
