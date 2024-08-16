import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled } from '@mui/system';

export const Palm03 = () => {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to('.palm03', {
			rotation: 'random(-2,2)',
			duration: gsap.utils.random(2, 5),
			ease: 'power2.inOut',
			svgOrigin: '593 293',
		});

		for (let i = 1; i <= 7; i++) {
			const leafTimeline = gsap.timeline({
				repeat: -1,
				repeatRefresh: true,
			});

			leafTimeline.to(`.palm03 .leaf0${i}`, {
				rotation: 'random(-3,3)',
				duration: gsap.utils.random(2, 4),
				ease: 'power2.inOut',
				svgOrigin: '91 25',
			});
		}
	});

	const CustomSvg = styled('g', {
		name: 'palm03',
		slot: 'Root',
	})(() => ({
		'.palm-shade-9': {
			fill: 'url(#palm03-shade-gradient-10)',
		},
		'.palm-shade-9, .palm-shade-10, .palm-shade-8, .palm-shade-4, .palm-shade-5, .palm-shade-3, .palm-shade-7, .palm-shade-6, .palm-shade':
			{
				opacity: 0.5,
			},
		'.palm-shade-9, .palm-shade-10, .palm-shade-8, .palm-shade-4, .palm-shade-5, .palm-shade-3, .palm-shade-7, .palm-shade-6, .palm-shade, .palm-shade-2, .palm-trunk-shade':
			{
				mixBlendMode: 'multiply',
			},
		'.palm-shade-10': {
			fill: 'url(#palm03-shade-gradient-11)',
		},
		'.palm-leaf-3': {
			fill: 'url(#palm03-leaf-gradient-3)',
		},
		'.palm-leaf-4': {
			fill: 'url(#palm03-leaf-gradient-4)',
		},
		'.palm-leaf-2': {
			fill: 'url(#palm03-leaf-gradient-2)',
		},
		'.palm-shade-8': {
			fill: 'url(#palm03-shade-gradient-9)',
		},
		'.palm-shade-4': {
			fill: 'url(#palm03-shade-gradient-5)',
		},
		'.palm-shade-5': {
			fill: 'url(#palm03-shade-gradient-6)',
		},
		'.palm-shade-3': {
			fill: 'url(#palm03-shade-gradient-4)',
		},
		'.palm-shade-7': {
			fill: 'url(#palm03-shade-gradient-8)',
		},
		'.palm-shade-6': {
			fill: 'url(#palm03-shade-gradient-7)',
		},
		'.palm-shade': {
			fill: 'url(#palm03-shade-gradient-2)',
		},
		'.palm-mid-left': {
			fill: 'url(#palm03-mid-left-gradient)',
		},
		'.palm-leaf-lighter': {
			fill: 'url(#palm03-leaf-lighter-gradient)',
		},
		'.palm-mid-right': {
			fill: 'url(#palm03-mid-right-gradient)',
		},
		'.palm-trunk-light': {
			fill: 'url(#palm03-trunk-light-gradient)',
		},
		'.palm-leaf-dark-3': {
			fill: 'url(#palm03-leaf-dark-gradient-3)',
		},
		'.palm-leaf-dark': {
			fill: 'url(#palm03-leaf-dark-gradient)',
		},
		'.palm-trunk-light-up': {
			fill: 'url(#palm03-trunk-light-up-gradient)',
		},
		'.palm-leaf-light': {
			fill: 'url(#palm03-leaf-light-gradient )',
		},
		'.palm-mid-left-4': {
			fill: 'url(#palm03-mid-left-gradient-4)',
		},
		'.palm-trunk-dark': {
			fill: 'url(#palm03-trunk-dark-gradient)',
		},
		'.palm-leaf': {
			fill: 'url(#palm03-leaf-gradient)',
		},
		'.palm-leaf-light-2': {
			fill: 'url(#palm03-leaf-light-gradient-2)',
		},
		'.palm-leaf-dark-2': {
			fill: 'url(#palm03-leaf-dark-gradient-2)',
		},
		'.palm-leaf-dark-5': {
			fill: 'url(#palm03-leaf-dark-gradient-5)',
		},
		'.palm-mid-left-5': {
			fill: 'url(#palm03-mid-left-gradient-5)',
		},
		'.palm-mid-left-3': {
			fill: 'url(#palm03-mid-left-gradient-3)',
		},
		'.palm-mid-left-2': {
			fill: 'url(#palm03-mid-left-gradient-2)',
		},
		'.palm-leaf-lighter-2': {
			fill: 'url(#palm03-leaf-lighter-gradient-2)',
		},
		'.palm-leaf-dark-4': {
			fill: 'url(#palm03-leaf-dark-gradient-4 )',
		},
		'.palm-shade-2': {
			fill: 'url(#palm03-shade-gradient-3)',
			opacity: 0.7,
		},
		'.palm-trunk-shade': {
			fill: 'url(#palm03-shade-gradient)',
			opacity: 0.9,
		},
	}));

	return (
		<CustomSvg
			className="palm03"
			transform={`translate(588,128)`}
			// xmlns="http://www.w3.org/2000/svg"
			// xmlnsXlink="http://www.w3.org/1999/xlink"
			// version="1.1"
			// viewBox="0 0 156.7 172.7"
			// width="156.7"
			// height="172.7"
			// x="588"
			// y="128"
		>
			<defs>
				<linearGradient
					id="palm03-leaf-dark-gradient"
					x1="90.6"
					y1="68.9"
					x2="90.6"
					y2="19.1"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#6f7b00" />
					<stop offset=".6" stopColor="#597314" />
					<stop offset="1" stopColor="#4f701e" />
				</linearGradient>
				<linearGradient
					id="palm03-leaf-dark-gradient-2"
					x1="114.6"
					y1="31.3"
					x2="114.6"
					y2="12.1"
					xlinkHref="#palm03-leaf-dark-gradient"
				/>
				<linearGradient
					id="palm03-trunk-dark-gradient"
					x1="44.1"
					y1="172.7"
					x2="44.1"
					y2="21.2"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#b87251" />
					<stop offset=".2" stopColor="#a76656" />
					<stop offset=".7" stopColor="#8b535f" />
					<stop offset="1" stopColor="#814c63" />
				</linearGradient>
				<linearGradient
					id="palm03-trunk-light-gradient"
					x1="30.7"
					y1="147.3"
					x2="30.7"
					y2="45.3"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#ef9f3b" />
					<stop offset=".3" stopColor="#e4963f" />
					<stop offset=".8" stopColor="#c87f4a" />
					<stop offset="1" stopColor="#b87251" />
				</linearGradient>
				<linearGradient
					id="palm03-trunk-light-up-gradient"
					x1="38.9"
					y1="69.5"
					x2="38.9"
					y2="54.9"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#dd9063" />
					<stop offset=".7" stopColor="#db8d58" />
					<stop offset="1" stopColor="#db8b51" />
				</linearGradient>
				<linearGradient
					id="palm03-shade-gradient"
					x1="12.1"
					y1="172.7"
					x2="12.1"
					y2="102.6"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#c0b3d4" />
					<stop offset=".5" stopColor="#d1becd" />
					<stop offset="1" stopColor="#e3cac7" />
				</linearGradient>
				<linearGradient
					id="palm03-leaf-gradient"
					x1="90.3"
					y1="21.2"
					x2="156.7"
					y2="21.2"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#aead13" />
					<stop offset=".4" stopColor="#899e20" />
					<stop offset=".8" stopColor="#6d942b" />
					<stop offset="1" stopColor="#63902f" />
				</linearGradient>
				<linearGradient
					id="palm03-shade-gradient-2"
					x1="112.4"
					y1="29.1"
					x2="112.4"
					y2="16.5"
					xlinkHref="#palm03-shade-gradient"
				/>
				<linearGradient
					id="palm03-shade-gradient-3"
					x1="85.4"
					y1="68.9"
					x2="85.4"
					y2="21"
					xlinkHref="#palm03-shade-gradient"
				/>
				<linearGradient
					id="palm03-leaf-dark-gradient-3"
					x1="112.1"
					y1="59.6"
					x2="112.1"
					y2="27.3"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#6f7b00" />
					<stop offset=".6" stopColor="#597d14" />
					<stop offset="1" stopColor="#4f7f1e" />
				</linearGradient>
				<linearGradient
					id="palm03-leaf-light-gradient"
					x1="105.2"
					y1="67.2"
					x2="105.2"
					y2="21.7"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#c2ba13" />
					<stop offset=".6" stopColor="#a6a627" />
					<stop offset="1" stopColor="#9c9f2f" />
				</linearGradient>
				<linearGradient
					id="palm03-leaf-dark-gradient-4"
					x1="59.8"
					y1="15.5"
					x2="59.8"
					y2="2.1"
					xlinkHref="#palm03-leaf-dark-gradient-3"
				/>
				<linearGradient
					id="palm03-leaf-dark-gradient-5"
					x1="57"
					y1="38.7"
					x2="57"
					y2="16.9"
					xlinkHref="#palm03-leaf-dark-gradient"
				/>
				<linearGradient
					id="palm03-leaf-gradient-2"
					x1="105"
					y1="67.2"
					x2="105"
					y2="22"
					xlinkHref="#palm03-leaf-gradient"
				/>
				<linearGradient
					id="palm03-leaf-gradient-3"
					x1="40.2"
					y1="9.3"
					x2="91"
					y2="9.3"
					xlinkHref="#palm03-leaf-gradient"
				/>
				<linearGradient
					id="palm03-leaf-gradient-4"
					x1="76.7"
					y1="52.1"
					x2="76.7"
					y2="10.6"
					xlinkHref="#palm03-leaf-gradient"
				/>
				<linearGradient
					id="palm03-leaf-light-gradient-2"
					x1="76.7"
					y1="52.1"
					x2="76.7"
					y2="10.6"
					xlinkHref="#palm03-leaf-light-gradient"
				/>
				<linearGradient
					id="palm03-mid-left-gradient"
					x1="58.5"
					y1="33.2"
					x2="95.8"
					y2="33.2"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#e2cf13" />
					<stop offset=".3" stopColor="#cabd1d" />
					<stop offset=".7" stopColor="#aea92a" />
					<stop offset="1" stopColor="#a4a22f" />
				</linearGradient>
				<linearGradient
					id="palm03-mid-left-gradient-2"
					x1="97.1"
					y1="16.9"
					x2="156.7"
					y2="16.9"
					xlinkHref="#palm03-mid-left-gradient"
				/>
				<linearGradient
					id="palm03-mid-right-gradient"
					x1="93.7"
					y1="45.3"
					x2="123"
					y2="45.3"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#a4a22f" />
					<stop offset=".3" stopColor="#aea92a" />
					<stop offset=".7" stopColor="#cabd1d" />
					<stop offset="1" stopColor="#e2cf13" />
				</linearGradient>
				<linearGradient
					id="palm03-mid-left-gradient-3"
					x1="51.6"
					y1="7.3"
					x2="88.7"
					y2="7.3"
					xlinkHref="#palm03-mid-left-gradient"
				/>
				<linearGradient
					id="palm03-shade-gradient-4"
					x1="77.2"
					y1="38.9"
					x2="77.2"
					y2="25"
					xlinkHref="#palm03-shade-gradient"
				/>
				<linearGradient
					id="palm03-shade-gradient-5"
					x1="125.2"
					y1="26.6"
					x2="125.2"
					y2="14.3"
					xlinkHref="#palm03-shade-gradient"
				/>
				<linearGradient
					id="palm03-shade-gradient-6"
					x1="141.8"
					y1="22.3"
					x2="141.8"
					y2="15.2"
					xlinkHref="#palm03-shade-gradient"
				/>
				<linearGradient
					id="palm03-shade-gradient-7"
					x1="64.4"
					y1="27.8"
					x2="64.4"
					y2="25.3"
					xlinkHref="#palm03-shade-gradient"
				/>
				<linearGradient
					id="palm03-shade-gradient-8"
					x1="88.8"
					y1="22.4"
					x2="88.8"
					y2="16.1"
					xlinkHref="#palm03-shade-gradient"
				/>
				<linearGradient
					id="palm03-shade-gradient-9"
					x1="60.5"
					y1="11.6"
					x2="60.5"
					y2="2.7"
					xlinkHref="#palm03-shade-gradient"
				/>
				<linearGradient
					id="palm03-shade-gradient-10"
					x1="73.6"
					y1="11.6"
					x2="73.6"
					y2="1.2"
					xlinkHref="#palm03-shade-gradient"
				/>
				<linearGradient
					id="palm03-shade-gradient-11"
					x1="114.4"
					y1="57.6"
					x2="114.4"
					y2="43.5"
					xlinkHref="#palm03-shade-gradient"
				/>
				<linearGradient
					id="palm03-leaf-lighter-gradient"
					x1="67.9"
					y1="27.3"
					x2="67.9"
					y2="17.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#e2cf13" />
					<stop offset=".6" stopColor="#c7be27" />
					<stop offset="1" stopColor="#bdb82f" />
				</linearGradient>
				<linearGradient
					id="palm03-leaf-lighter-gradient-2"
					x1="118.5"
					y1="41.6"
					x2="118.5"
					y2="31.3"
					xlinkHref="#palm03-leaf-lighter-gradient"
				/>
				<linearGradient
					id="palm03-mid-left-gradient-4"
					x1="128.9"
					y1="26.6"
					x2="128.9"
					y2="13.3"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#c9c813" />
					<stop offset=".6" stopColor="#aeac27" />
					<stop offset="1" stopColor="#a4a22f" />
				</linearGradient>
				<linearGradient
					id="palm03-mid-left-gradient-5"
					x1="54.8"
					y1="11.6"
					x2="54.8"
					y2="3.1"
					xlinkHref="#palm03-mid-left-gradient-4"
				/>
			</defs>
			<g className="leaf07">
				<path
					className="palm-leaf-dark-2"
					d="M91,17.6s18-5.6,23.2-5.4c5.2.1,24.1,19.2,24.1,19.2,0,0-13.7-1.3-16.9-2.5-3.2-1.2-12.4-4.7-12.4-4.7h-15l-3.1-6.6Z"
				/>
			</g>
			<g className="leaf06">
				<path
					className="palm-leaf-dark"
					d="M83.7,21.7s-4.7,11.1-3.9,20.5l5.5.2-5.2,2.1s1.8,8.9,10.8,24.4l5.1-10.1-5.1-6.7,5.7,5.3s4.8-12.8,4.8-22.3-1.2-13-1.2-13c0,0-12.4-6.4-16.5-.2Z"
				/>
				<path
					className="palm-shade-2"
					d="M80.2,44.5s3.7,13.3,10.8,24.4l-1.5-33.6.8-14.3-8.5,6.3-1.7,7.1s-.5,4.9-.2,7.9l5.8.3-5.4,2Z"
				/>
			</g>
			<g className="trunk">
				<path
					className="palm-trunk-dark"
					d="M0,172.7s24.4-86.2,32.2-103.2c7.7-17,53.2-48.4,53.2-48.4l2.9,2.9s-36.8,23.6-50.5,45.2c-13.7,21.5-29.3,103.4-29.3,103.4H0Z"
				/>
				<path
					className="palm-trunk-light"
					d="M7.3,147.3s6.1-6.1,7.1-8.5c1-2.4,14-59.2,21.6-70.3,8.2-12,16.6-18,16.6-18l1.5-5.2s-17,13.8-21.9,24.2c-4.9,10.5-19.9,57.5-24.8,77.8Z"
				/>
				<path
					className="palm-trunk-shade"
					d="M20.4,102.6l.8,13.6-12.8,56.5H3l3.1-21.2s12.8-44.9,14.3-48.9Z"
				/>
				<path
					className="palm-trunk-light-up"
					d="M32.2,69.5h3.2s5.1-8,10.4-12.9l-2.3-1.7s-9.1,8.6-11.3,14.6Z"
				/>
			</g>
			<g className="leaf05">
				<path
					className="palm-leaf-dark-5"
					d="M79.7,16.9s-13.3,1.3-20.9,3.3c-7.6,2-24.6,18.5-24.6,18.5,0,0,6.9-.3,12.5-2l1.7-7v6.3s12.5-.6,19.6-5.3c7.1-4.7,8.7-11.4,8.7-11.4l3-2.5Z"
				/>
			</g>
			<g className="leaf04">
				<path
					className="palm-leaf-dark-4"
					d="M40.2,9.6s7.9,2.8,18.6,4.4c10.7,1.7,20.2,1.5,20.2,1.5l.2-7.9-5.2-5.5s-24.7,3-33.8,7.5Z"
				/>
				<path
					className="palm-leaf-3"
					d="M91,18.5S81.8,2.7,78.5.7c-3.3-2-21.2,1.3-38.2,8.9,0,0,12.4,1.8,16,2.1l2.8-6.8-1.1,6.8h13.7l4.9-6.8-4,8.5,2.3,1.7,5.7-3.9-4.3,4.4s5.7,2.9,14.7,2.9Z"
				/>
				<polygon
					className="palm-shade-8"
					points="57.9 11.6 59.4 3.1 61 2.7 63.2 11.6 57.9 11.6"
				/>
				<polygon
					className="palm-shade-9"
					points="69.5 11.6 77.7 1.2 76.2 5.5 71.6 11.6 69.5 11.6"
				/>
				<polygon
					className="palm-mid-left-5"
					points="59.4 3.1 56.3 11.6 50.1 11 55.5 4.1 59.4 3.1"
				/>
				<path
					className="palm-mid-left-3"
					d="M51.6,5.1S70.7-.3,75.9.5c5.3.8,12.7,14.2,12.7,14.2,0,0-7.1-12-10.2-14-3.1-2-16.9.9-26.9,4.5Z"
				/>
			</g>
			<g className="leaf03">
				<path
					className="palm-leaf"
					d="M90.3,22.4s27.7-8.1,34.8-8.8c7-.6,31.6,5.1,31.6,5.1l-6.8,1.9-6.4-2.9,4.1,4s-19,4-21.1,4.8l-2.3-.8-2.7.8s-5.9,2.4-12.4,2.2-18.7-6.4-18.7-6.4Z"
				/>
				<polygon
					className="palm-shade"
					points="115.4 28.2 113.1 16.5 109.4 17.3 111.5 29.1 115.4 28.2"
				/>
				<polygon
					className="palm-shade-4"
					points="126.4 26.6 124.1 14.3 124 25.8 126.4 26.6"
				/>
				<polygon
					className="palm-shade-5"
					points="136 15.2 144.8 22.3 147.5 21.7 143.4 17.7 140.4 15.9 136 15.2"
				/>
				<path
					className="palm-mid-left-4"
					d="M124,13.7l2.3,12.9,7.5-1.9-3.3-11s-4.6-.9-6.5,0Z"
				/>
				<path
					className="palm-mid-left-2"
					d="M97.1,20.4s22.6-5.9,28.1-6.2c5.5-.4,31.5,4.5,31.5,4.5,0,0-23.4-5.7-30.8-5.2-7.4.5-25.4,5.6-28.8,6.9Z"
				/>
			</g>
			<g className="leaf02">
				<path
					className="palm-leaf-dark-3"
					d="M100.6,27.3s8.9,20.2,22.8,32.3l-1.8-19.8-5.6-9.6-15.4-2.9Z"
				/>
				<path
					className="palm-leaf-light"
					d="M88.2,21.7s21.6,3.7,29.3,8.5c7.8,4.8,5.5,37,5.5,37l-9.8-32.8-25.7-11.2-.6-1.2,1.3-.2Z"
				/>
				<path
					className="palm-leaf-2"
					d="M87,22s23.8,4.4,27.5,9.6c3.6,5.2,8.6,35.6,8.6,35.6l-10-7.9,4.1-10.3-5.1,8.6-6.3-9.3,4.7-11.5-6.2,10.1-1.4-1.3,6.4-11.4-7.8,9.2s-11.1-14.6-14.4-21.3Z"
				/>
				<polygon
					className="palm-shade-10"
					points="112 57.6 110 54.7 118 43.5 118.7 46.8 112 57.6"
				/>
				<path
					className="palm-leaf-lighter-2"
					d="M114.6,31.3l5.5,1.9s1.8,4,2.3,8.4l-3.9-.8s-2.1-5.5-3.9-9.5Z"
				/>
				<path
					className="palm-mid-right"
					d="M93.7,23.4s18.1,5.9,20.6,8.7c2.5,2.7,5.8,21.2,6,22.4.2,1.2,2.8,12.7,2.8,12.7,0,0-1.8-10.9-1.8-13.2s-3.4-18.4-6.7-22.7c-3.3-4.2-20.9-7.9-20.9-7.9Z"
				/>
			</g>
			<g className="leaf01">
				<path
					className="palm-leaf-4"
					d="M92.4,22.4l-4.3-2.5,2.8,3.4-11.7,15.7-6-8.4,4.2,10.6c-7.9,5.5-19.2,10.9-19.2,10.9-2-11.3,0-23.3,0-23.3l9.7-1.1-8.5-1.1s14.6-16.6,19.8-16c5,.5,16.3,10.8,16.9,11.4,0,0,0,0,0,0l-3.7.4Z"
				/>
				<path
					className="palm-leaf-light-2"
					d="M96.1,22c-.6-.4-10.1-6.5-12-6.5-1.9,0-5.9,1.3-11.8,8.6-6,7.3-14.1,27.9-14.1,27.9-2-11.3,0-23.3,0-23.3l9.7-1.1-8.5-1.1s14.6-16.6,19.8-16c5,.5,16.3,10.8,16.9,11.4Z"
				/>
				<path
					className="palm-mid-left"
					d="M58.5,51.4s3-9,6.5-16c3.4-7,7.9-13.5,11-16.3,3.1-2.7,7.1-4.1,9-4,2,.1,10.9,6.7,10.9,6.7,0,0-8.2-5.4-11.1-5.6s-9.3,4.7-11.9,7.3c-2.6,2.6-8.1,14.6-9,16-.9,1.4-5.4,11.9-5.4,11.9Z"
				/>
				<polygon
					className="palm-shade-3"
					points="79.3 38.9 70.6 26.7 71.6 25 83.9 32.7 79.3 38.9"
				/>
				<polygon
					className="palm-shade-6"
					points="59.4 26.6 69.1 27.8 69.5 27.3 60.4 25.3 59.4 26.6"
				/>
				<polygon
					className="palm-shade-7"
					points="92.4 22.4 82.8 16.5 84.8 16.1 94.7 22.1 92.4 22.4"
				/>
				<path
					className="palm-leaf-lighter"
					d="M60.4,25.3l9.1,2,5.9-7.7-7-2.2s-6.5,6.3-7.9,7.8Z"
				/>
			</g>
		</CustomSvg>
	);
};
