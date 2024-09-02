import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import config from '@/config';

const animation = {
	width: 273.1,
	y: 190,
	duration: 3,
	repeatDelay: 0,
	start: 2.5,
};

const CustomSvg = styled('g', {
	name: 'cloud01',
	slot: 'Root',
})(() => ({
	'.cloud-back': {
		fill: 'url(#cloud01-back-gradient)',
	},
	'.cloud-shade': {
		fill: 'url(#cloud01-shade-gradient)',
		mixBlendMode: 'multiply',
	},
	'.cloud-shade, .cloud-shade-2, .cloud-shade-3': {
		mixBlendMode: 'multiply',
	},
	'.cloud-shade-2': {
		fill: 'url(#cloud01-shade2-gradient)',
	},
	'.cloud-shade-3': {
		fill: 'url(#cloud01-shade3-gradient)',
	},
}));

export const Cloud01 = () => {
	gsap.registerPlugin(useGSAP);

	const colors = useTheme().palette.scene.cloud;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatDelay: animation.repeatDelay,
		});

		timeline.fromTo(
			'.cloud01',
			{ x: animation.width * -1 },
			{
				x: config.sceneWidth,
				duration: animation.duration * config.cloudsSpeed,
				ease: 'none',
			}
		);

		// timeline.seek(animation.start * config.cloudsSpeed);
	});

	return (
		<CustomSvg
			className="cloud01"
			transform={`translate(0,${animation.y})`}
		>
			<defs>
				<linearGradient
					id="cloud01-back-gradient"
					x1="136.5"
					y1="916.1"
					x2="136.5"
					y2="873.7"
					gradientTransform="translate(0 -870.2)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.back.dark} />
					<stop offset=".6" stopColor={colors.back.mid} />
					<stop offset="1" stopColor={colors.back.light} />
				</linearGradient>
				<linearGradient
					id="cloud01-shade-gradient"
					x1="217.8"
					y1=".5"
					x2="217.6"
					y2="10.6"
					gradientTransform="translate(0 50) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.shade.dark} />
					<stop offset=".6" stopColor={colors.shade.mid} />
					<stop offset="1" stopColor={colors.shade.light} />
				</linearGradient>
				<linearGradient
					id="cloud01-shade2-gradient"
					x1="181.9"
					y1="-4.1"
					x2="181.9"
					y2="22.2"
					gradientTransform="translate(0 50) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
					xlinkHref="#cloud01-shade-gradient"
				/>
				<linearGradient
					id="cloud01-shade3-gradient"
					x1="69.6"
					y1="-6.5"
					x2="69.6"
					y2="30.1"
					gradientTransform="translate(0 50) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
					xlinkHref="#cloud01-shade-gradient"
				/>
			</defs>
			<path
				className="cloud-back"
				d="M2.1,13c-7.2,22.6,6.2,35.2,6.2,35.2h264.8s-23.2-6.9-36.2-6.6c-10,.2-17.6,2-20.5,2.8-.9.2-1.4.4-1.4.4,0,0-.2-.2-.4-.6-1.6-2.2-7.1-9.3-12.6-9.7-5.4-.4-4.7,6.5-4.2,8.9,0,0-.1,0-.3-.4s-.3-.6-.5-1.1c-1.4-3.2-4.2-9.2-8-15.7-6.9-11.8-17-25-28.3-26.2-25-2.2-37.7,35.2-39.3,40.1,0,.3-.2.5-.2.5h0c-7.7-11-11.1.6-11.1.6,0,0,0-.2-.3-.5h0c-2.1-2.8-13.8-17.6-25.8-18.3-8.4-.5-13.8,6-16.6,10.9-.5.8-.8,1.5-1.2,2.2-.8,1.8-1.3,3-1.3,3,0,0-5.7-17.6-14.1-18.4-4.9-.4-5.1,5.9-5.1,6.7h0l-.2-.3c-.5-.7-1.8-2.6-3.7-5h0c-1-1.3-2.2-2.8-3.5-4.3-5.5-6.5-13.2-14.1-19.9-15.5C5.5-.7,2.9,10.7,2.1,13Z"
			/>
			<path
				className="cloud-shade"
				d="M223.2,42.9c-3.1.5-5.4,1.1-6.7,1.5-.9.2-1.4.4-1.4.4,0,.3,0,3-2.9,3.4h8c-2.2-1-1.3-3.3,3-5.2h0Z"
			/>
			<path
				className="cloud-shade-2"
				d="M152.4,26.8c8.4,2.3,32.3,5.1,34.6,21.3h24.5c-3.5-.6-10.7-3.2-13.8-4.9h0s-.1,0-.3-.4c-.2-.3-.3-.6-.5-1.1-1.4-3.2-4.2-9.2-8-15.7-11.6,3.8-24.7,2.7-36.5.7h0Z"
			/>
			<path
				className="cloud-shade-3"
				d="M116.5,45.9c-2.7.3-5.4-.6-6.5-4.5h0c-6.4,10.8-38,1.9-42.6-8.1v.2c-.5.8-.8,1.5-1.2,2.2-.8,1.7-1.2,2.9-1.2,3,.2,1.1.4,4.2-2.5,5.2-10.1,3.3-17.2-5.1-16.6-16.9l-.2-.3c-.5-.7-1.8-2.6-3.7-5h0c-1-1.3-2.2-2.8-3.5-4.3h0c-2.2,8.5-10.7,22.8-20.9,21.8-4.6-.5-12-4-15.7-2.4v.2c2.5,7.2,6.5,11.1,6.5,11.1h128.9c-2.5-.4-5.8-1.5-6.5-4.7-1.2-6.1,2.6-11.5,6.2-16.1-6,2.6-12.6,6.5-15.5,12.6v.4c0,.3-.2.5-.2.5h0c-.6,1.8-1.9,4.8-4.6,5.1,0,0-.2,0-.2,0Z"
			/>
		</CustomSvg>
	);
};
