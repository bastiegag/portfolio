import { useId, ReactNode } from 'react';
import { styled, useTheme } from '@mui/material';

const PaperRoot = styled('svg', {
	name: 'Paper',
	slot: 'root',
})(() => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
}));

export interface PaperProps {
	children: ReactNode;
}

const VIEWBOX = '0 0 246.7 239.8';
const PAPER_POINTS =
	'3.5 4.6 2.9 91.2 3.5 101.7 0 235.2 72.5 238.3 168.9 235.9 246.7 236.5 241.7 145.1 243 137.6 245.2 2.7 155.4 0 139.3 1.5 3.5 4.6';

export const Paper = ({ children }: PaperProps) => {
	const id = CSS.escape(useId());
	const colors = useTheme().vars.palette;

	return (
		<>
			{children}
			<PaperRoot
				id={id}
				className="Paper-root animate-all"
				viewBox={VIEWBOX}
				preserveAspectRatio="none"
			>
				<polygon
					className="main"
					fill={colors.paper.main}
					points={PAPER_POINTS}
				/>
			</PaperRoot>
		</>
	);
};
