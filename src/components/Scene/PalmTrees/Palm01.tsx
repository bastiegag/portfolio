import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

const CustomSvg = styled('g', {
	name: 'palm01',
	slot: 'Root',
})(() => ({
	'.palm-leaf-3': {
		fill: 'url(#palm01-leaf-gradient-3)',
	},
	'.palm-leaf-4': {
		fill: 'url(#palm01-leaf-gradient-4)',
	},
	'.palm-leaf-2': {
		fill: 'url(#palm01-leaf-gradient-2)',
	},
	'.palm-leaf-5': {
		fill: 'url(#palm01-leaf-gradient-5)',
	},
	'.palm-shade': {
		opacity: 0.5,
		mixBlendMode: 'multiply',
	},
	'.palm-mid-right': {
		fill: 'url(#palm01-mid-right-gradient)',
	},
	'.palm-leaf-lighter': {
		fill: 'url(#palm01-leaf-lighter-gradient)',
	},
	'.palm-mid-left': {
		fill: 'url(#palm01-mid-left-gradient)',
	},
	'.palm-trunk-light': {
		fill: 'url(#palm01-trunk-light-gradient)',
	},
	'.palm-leaf-dark': {
		fill: 'url(#palm01-leaf-dark-gradient)',
	},
	'.palm-leaf-light-2': {
		fill: 'url(#palm01-leaf-light-gradient-2)',
	},
	'.palm-leaf-light': {
		fill: 'url(#palm01-leaf-light-gradient)',
	},
	'.palm-trunk-dark': {
		fill: 'url(#palm01-trunk-dark-gradient)',
	},
	'.palm-leaf': {
		fill: 'url(#palm01-leaf-gradient)',
	},
	'.palm-leaf-light-3': {
		fill: 'url(#palm01-leaf-light-gradient-2)',
	},
	'.palm-leaf-dark-2': {
		fill: 'url(#palm01-leaf-dark-gradient-2)',
	},
	'.palm-leaf-dark-3': {
		fill: 'url(#palm01-leaf-dark-gradient-3)',
	},
	'.palm-mid-left-2': {
		fill: 'url(#palm01-mid-left-gradient-2)',
	},
	'.palm-mid-right-2': {
		fill: 'url(#palm01-mid-right-gradient-2)',
	},
	'.palm-mid-right-3': {
		fill: 'url(#palm01-mid-right-gradient-3)',
	},
	'.palm-leaf-lighter-2': {
		fill: 'url(#palm01-leaf-lighter-gradient-2)',
	},
}));

export const Palm01 = () => {
	gsap.registerPlugin(useGSAP);

	const colors = useTheme().palette.scene.palm;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to('.palm01', {
			rotation: 'random(-2,2)',
			duration: gsap.utils.random(2, 5),
			ease: 'power2.inOut',
			svgOrigin: '360 280',
		});

		for (let i = 1; i <= 7; i++) {
			const leafTimeline = gsap.timeline({
				repeat: -1,
				repeatRefresh: true,
			});

			leafTimeline.to(`.palm01 .leaf0${i}`, {
				rotation: 'random(-3,3)',
				duration: gsap.utils.random(2, 3),
				ease: 'power2.inOut',
				svgOrigin: '50 20',
			});
		}
	});

	return (
		<CustomSvg className="palm01" transform={`translate(290,110)`}>
			<defs>
				<linearGradient
					id="palm01-leaf-dark-gradient"
					x1="89"
					y1="80.1"
					x2="89"
					y2="42.9"
					gradientTransform="translate(73.2 -78.2) rotate(129.9) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.leaf.olive} />
					<stop offset="1" stopColor={colors.leaf.fern} />
				</linearGradient>
				<linearGradient
					id="palm01-trunk-dark-gradient"
					x1="60"
					y1="168.5"
					x2="60"
					y2="20.1"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.trunk.mid} />
					<stop offset="1" stopColor={colors.trunk.dark} />
				</linearGradient>
				<linearGradient
					id="palm01-trunk-light-gradient"
					x1="60.9"
					y1="147.4"
					x2="60.9"
					y2="44.6"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.trunk.light} />
					<stop offset="1" stopColor={colors.trunk.mid} />
				</linearGradient>
				<linearGradient
					id="palm01-leaf-dark-gradient-2"
					x1="74.7"
					y1="58.6"
					x2="74.7"
					y2="29.9"
					gradientTransform="translate(107.6 -10.5) rotate(168.9) scale(1 -1)"
					xlinkHref="#palm01-leaf-dark-gradient"
				/>
				<linearGradient
					id="palm01-leaf-gradient"
					x1="61.8"
					y1="13.2"
					x2="113.3"
					y2="13.2"
					gradientTransform="translate(107.6 -10.5) rotate(168.9) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.leaf.sahara} />
					<stop offset="1" stopColor={colors.leaf.olivedrab} />
				</linearGradient>
				<linearGradient
					id="palm01-leaf-dark-gradient-3"
					x1="31"
					y1="25.2"
					x2="31"
					y2="10"
					gradientTransform="translate(107.6 -10.5) rotate(168.9) scale(1 -1)"
					xlinkHref="#palm01-leaf-dark-gradient"
				/>
				<linearGradient
					id="palm01-leaf-gradient-2"
					x1="43.6"
					y1="10"
					x2="66.3"
					y2="10"
					xlinkHref="#palm01-leaf-gradient"
				/>
				<linearGradient
					id="palm01-leaf-gradient-3"
					x1="-.7"
					y1="13.2"
					x2="61.8"
					y2="13.2"
					xlinkHref="#palm01-leaf-gradient"
				/>
				<linearGradient
					id="palm01-leaf-gradient-4"
					x1="86.7"
					y1="51"
					x2="86.7"
					y2="16.3"
					xlinkHref="#palm01-leaf-gradient"
				/>
				<linearGradient
					id="palm01-leaf-light-gradient"
					x1="89.4"
					y1="51"
					x2="89.4"
					y2="15.8"
					gradientTransform="translate(107.6 -10.5) rotate(168.9) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.leaf.rioja} />
					<stop offset="1" stopColor={colors.leaf.luxor} />
				</linearGradient>
				<linearGradient
					id="palm01-mid-left-gradient"
					x1="72.9"
					y1="35.2"
					x2="111.7"
					y2="35.2"
					gradientTransform="translate(107.6 -10.5) rotate(168.9) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.leaf.alpine} />
					<stop offset="1" stopColor={colors.leaf.barbeery} />
				</linearGradient>
				<linearGradient
					id="palm01-mid-right-gradient"
					x1="3.2"
					y1="11.4"
					x2="48.5"
					y2="11.4"
					gradientTransform="translate(107.6 -10.5) rotate(168.9) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.leaf.barbeery} />
					<stop offset="1" stopColor={colors.leaf.alpine} />
				</linearGradient>
				<linearGradient
					id="palm01-mid-right-gradient-2"
					x1="57.5"
					y1="8.5"
					x2="65.9"
					y2="8.5"
					xlinkHref="#palm01-mid-right-gradient"
				/>
				<linearGradient
					id="palm01-mid-right-gradient-3"
					x1="67.1"
					y1="12.6"
					x2="113.3"
					y2="12.6"
					xlinkHref="#palm01-mid-right-gradient"
				/>
				<linearGradient
					id="palm01-leaf-lighter-gradient"
					x1="101.1"
					y1="39.6"
					x2="101.1"
					y2="29.3"
					gradientTransform="translate(107.6 -10.5) rotate(168.9) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.leaf.barbeery} />
					<stop offset="1" stopColor={colors.leaf.erals} />
				</linearGradient>
				<linearGradient
					id="palm01-leaf-light-gradient-2"
					x1="22.9"
					y1="22.1"
					x2="22.9"
					y2="5.9"
					gradientTransform="translate(107.6 -10.5) rotate(168.9) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.leaf.rioja} />
					<stop offset="1" stopColor={colors.leaf.alpine} />
				</linearGradient>
				<linearGradient
					id="palm01-leaf-gradient-5"
					x1="46.3"
					y1="55"
					x2="38.1"
					y2="13"
					gradientTransform="matrix(1,0,0,1,0,0)"
					xlinkHref="#palm01-leaf-gradient"
				/>
				<linearGradient
					id="palm01-leaf-light-gradient-2"
					x1="42"
					y1="55.8"
					x2="33.8"
					y2="13.8"
					gradientTransform="matrix(1,0,0,1,0,0)"
					xlinkHref="#palm01-leaf-light-gradient"
				/>
				<linearGradient
					id="palm01-mid-left-gradient-2"
					x1="50.3"
					y1="34.7"
					x2="26.4"
					y2="39.4"
					gradientTransform="matrix(1,0,0,1,0,0)"
					xlinkHref="#palm01-mid-left-gradient"
				/>
				<linearGradient
					id="palm01-leaf-lighter-gradient-2"
					x1="35.2"
					y1="30.6"
					x2="33.8"
					y2="23.3"
					gradientTransform="matrix(1,0,0,1,0,0)"
					xlinkHref="#palm01-leaf-lighter-gradient"
				/>
			</defs>
			<g className="leaf07">
				<path
					className="palm-leaf-dark"
					d="M60.1,8.2s6.2,11.1,8.4,21.4l-6.3,1.3,6.1.8s2,9,.3,20.4l-11.9-10,1.5-4.2-2.1,3.7s-12.8-9.9-15.1-12.6c-2.2-2.7,19-20.9,19-20.9Z"
				/>
				<path
					className="palm-shade"
					fill={colors.leaf.maverick}
					d="M68.2,28.2l-9.8-2.8s0,2,2.3,9.7c2.3,7.7,8,17.1,8,17.1l-11.9-10,1.5-4.2-2.1,3.7-2.4-2-5-6.3,5.2-14.3,7.4,1.5,6.5,6,.4,1.7Z"
				/>
			</g>
			<g className="leaf06">
				<path
					className="palm-leaf-dark-2"
					d="M48.6,31.5s.4,19.4-.1,21.8c-.5,2.4-3,8.1-3,8.1,0,0-6.1-7.5-7.8-11.7-1.7-4.2-6.2-14.9-6.2-14.9l17.1-3.3Z"
				/>
			</g>
			<g className="trunk">
				<path
					className="palm-trunk-dark"
					d="M67.7,168.5s-.4-63.2-2.9-76.7c-2.5-13.4-19.8-70.6-19.8-70.6l2.9-1.2s16.5,55.8,19.8,72c3,14.8,7.2,76.5,7.2,76.5h-7.2Z"
				/>
				<path
					className="palm-trunk-light"
					d="M51.6,44.6s1.8,3.6,3.1,5.5c1.7,2.6,10.6,34.6,11.8,40.6,1.2,6.1,3.6,52.1,3.6,52.1l-3,4.5s-1.2-48.7-2.4-55.5c-1.7-9.8-13.2-47.2-13.2-47.2Z"
				/>
			</g>
			<g className="leaf05">
				<path
					className="palm-leaf"
					d="M50.5,19.5s-12-7.3-17.2-8c-5.3-.7-23.4,4.8-25.6,6.7-2.2,1.9-7.8,11.2-7.8,11.2l8.4-2.3v-5.2s1.3,4.8,1.3,4.8c0,0,9.7-1.6,14-2.2,4.3-.6,11.5-.8,11.5-.8l3-2.9-.7,2.4s10.2-1.7,13-3.7Z"
				/>
				<path
					className="palm-mid-right-3"
					d="M44.5,16.1s-10.3-3.7-13.5-3.9c-3.2-.2-21,4.7-22.8,6.2-1.8,1.4-8.2,11.1-8.2,11.1,0,0,5.9-9.5,7.8-11.2s19.8-7.4,25.6-6.7c5.8.7,11.1,4.5,11.1,4.5Z"
				/>
				<path
					className="palm-shade"
					fill={colors.leaf.maverick}
					d="M9.7,26.7l-2.3-7.6s1.2-1.1,2.8-1.7l4.9,8.4-5.4.9Z"
				/>
			</g>
			<g className="leaf04">
				<path
					className="palm-leaf-2"
					d="M45.9,19.8s-.6-13.2.6-15.8c1.2-2.5,19.8,1.9,19.8,1.9l-11.7,8.7-8.7,5.2Z"
				/>
				<path
					className="palm-mid-right-2"
					d="M51.7,3.3s-3.5.2-4.5,1.3c-1,1-1.3,12.2-1.3,12.2,0,0-.5-11.1.7-12.8.8-1.2,5.1-.7,5.1-.7Z"
				/>
			</g>
			<g className="leaf03">
				<path
					className="palm-leaf-dark-3"
					d="M107.5,11.9s-20.3,5.4-27.6,8.4c-7.3,3-24.7.9-24.7.9l15.4-14.3,13.4-2.6,23.5,7.6Z"
				/>{' '}
				<path
					className="palm-leaf-3"
					d="M50.1,17.1S64.6,4,70.3.9s28,2.6,42.2,10c0,0-14.1,3-23.4,4.6l-5.1-4.8,2.4,5.3s-10.3,2.1-17.2,4c-6.9,1.8-18.3,1-18.3,1l-.8-4Z"
				/>
				<path
					className="palm-mid-right"
					d="M108.1,8.8S83.5.2,76.2.7c-7.3.4-14.5,6.6-14.5,6.6,0,0,7-5.7,9.7-6.7,2.7-1,15-1.2,36.7,8.3Z"
				/>
				<path
					className="palm-shade"
					fill={colors.leaf.maverick}
					d="M86.3,16l-6.3-15.1s-3.1-.9-6.2,0l4.5,16.8,8-1.7Z"
				/>
				<path
					className="palm-leaf-light-2"
					d="M89.9,3.2l5.6,11.2-6.5,1.2-5.1-4.8-3.9-9.8s6.4.2,9.9,2.2Z"
				/>
				<path
					className="palm-shade"
					fill={colors.leaf.maverick}
					d="M62,21.2l-5.8-9.5-1.4,1.3s.9,6,.4,8.2h6.8Z"
				/>
			</g>
			<g className="leaf02">
				<path
					className="palm-leaf-4"
					d="M50.8,21s-19.2-1.2-24.5,1.2c-5.3,2.4-15.7,13.6-15.7,13.6l4.9-.9-5.4,3.6s-3,9.2-2.4,22.5l14-8.6,1.9-2.9,3-.4s13.6-18.8,14.6-19.9c1.1-1.1,10.1-5.5,10.1-5.5l-.6-2.7Z"
				/>{' '}
				<path
					className="palm-leaf-light"
					d="M40.5,22.3s-9.3,4.5-12.7,7.1S7.8,61,7.8,61c0,0-.6-11.1,2.4-22.5l4.9-3.2-4.4.6s9.8-10.8,15.7-13.6c5.9-2.8,18.6-3.6,18.6-3.6l-4.5,3.7Z"
				/>{' '}
				<path
					className="palm-mid-left"
					d="M39.8,22.6s-9.3,4.2-12.7,6.9c-3.4,2.6-13.8,20.5-13.8,20.5l-5.5,11,12-20s6.1-9.7,7.7-10.9c1.6-1.2,12.3-7.4,12.3-7.4Z"
				/>{' '}
				<polygon
					className="palm-shade"
					fill={colors.leaf.maverick}
					points="23.1 35.8 26.7 49.1 23.7 49.5 21.8 37.7 23.1 35.8"
				/>{' '}
				<polygon
					className="palm-shade"
					fill={colors.leaf.maverick}
					points="15.1 35.2 24.4 32.6 26.4 30.2 14 32.6 10.7 35.8 15.1 35.2"
				/>
				<path
					className="palm-leaf-lighter"
					d="M10.2,38.4l11.7-2.2-6.6,10.5-7.1,2.6s.6-7.4,2.1-10.9Z"
				/>
				<path
					className="palm-shade"
					fill={colors.leaf.maverick}
					d="M29.6,45.2l-1.3-16.5-3.1-5.9s1.5-1.2,5.5-2.1c0,0-1.8,13.2-1.2,24.5Z"
				/>
				<path
					className="palm-shade"
					fill={colors.leaf.maverick}
					d="M39.5,31.6l-1.4-8-3.4-3.7.9-.2,9.8,7.1s-3.4,1.8-3.7,2.1c-.4.3-2.2,2.7-2.2,2.7Z"
				/>
			</g>
			<g className="leaf01">
				<path
					className="palm-leaf-5"
					d="M46.6,16l-13.6-2s-3.2,10.9-2.9,12.5c.3,1.6,0,31.6,0,31.6,0,0,9.5-9.3,14.9-15.5l-2.4-3.7,3.4,3.1s4.9-8.4,7.7-15.3c2.8-6.9.8-15.2.8-15.2l-7.9,4.5Z"
				/>{' '}
				<path
					className="palm-leaf-light-3"
					d="M46.6,16s-7.4,7.7-9,11.5c-1.6,3.8-7.5,30.6-7.5,30.6,0,0-.9-19.9,0-31.6s2.9-12.5,2.9-12.5l13.6,2Z"
				/>{' '}
				<path
					className="palm-mid-left-2"
					d="M46.6,16s-8.4,8.2-9.9,11.1c-1.6,2.9-6.6,31.1-6.6,31.1,0,0,5.6-25.7,7.4-30.1,1.8-4.4,9.1-12.1,9.1-12.1Z"
				/>{' '}
				<polygon
					className="palm-shade"
					fill={colors.leaf.maverick}
					points="46 42 35.9 33.4 37.5 28 48.8 36.2 46 42"
				/>{' '}
				<path
					className="palm-leaf-lighter-2"
					d="M29.8,31.6l6.7-4.1,2.9-4-9,.4s-.5,5.7-.5,7.7Z"
				/>
			</g>
		</CustomSvg>
	);
};
