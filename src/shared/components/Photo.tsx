import { useId, useMemo } from 'react';
import { styled, useTheme } from '@mui/material';

const PhotoRoot = styled('svg', {
	name: 'Photo',
	slot: 'root',
})(() => ({}));

export interface PhotoProps {
	src: string;
}

const VIEWBOX = '0 0 69.9 72.5';
const SHADOW_POINTS =
	'2.8 5.6 37.8 1.6 65 3.5 66.7 39.8 69.2 72.4 32.5 72.5 1.5 72.5 4.2 47.4 2.8 5.6';
const FRAME_POINTS =
	'0 2.6 36.6 .6 67.2 0 68.1 35.3 69.9 70.5 32.8 71.6 1.6 72.4 1.7 47.5 0 2.6';
const MASK_POINTS =
	'3.4 6.1 23.2 4.9 27.3 4.3 64.1 3 65.7 57.5 47 58.4 5.1 60.1 4.8 27.1 3.4 6.1';
const SHADOW_OPACITY = 0.15;

export const Photo = ({ src }: PhotoProps) => {
	const id = CSS.escape(useId());
	const colors = useTheme().vars.palette;
	const maskId = useMemo(() => `svgmask-${id}`, [id]);

	return (
		<PhotoRoot id={id} viewBox={VIEWBOX}>
			<polygon
				fill={colors.base.black}
				fillOpacity={SHADOW_OPACITY}
				points={SHADOW_POINTS}
			/>
			<polygon
				className="main"
				fill={colors.base.white}
				points={FRAME_POINTS}
			/>
			<image
				xlinkHref={src}
				mask={`url(#${maskId})`}
				width="100%"
				height="100%"
				preserveAspectRatio="xMidYMid slice"
			></image>
			<mask id={maskId}>
				<polygon fill={colors.base.white} points={MASK_POINTS} />
			</mask>
			{/* Keep an HTML fallback image for tests and non-SVG environments */}
			<img
				alt="photo-fallback"
				src={
					src ||
					'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
				}
				style={{ display: 'none' }}
			/>
		</PhotoRoot>
	);
};
