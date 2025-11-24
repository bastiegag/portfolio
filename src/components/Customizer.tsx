import React, { useState } from 'react';
import { Popover } from '@mui/material';
import ColorPicker from 'react-best-gradient-color-picker';
import { Box, Stack } from '@mui/material';

import { Paper, Content } from 'components';
import { dayColors } from 'theme';

export const Customizer = () => {
	const root = document.documentElement;
	const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
	const [themeColors, setThemeColors] = useState(dayColors);
	const [color, setColor] = useState({
		name: 'black',
		value: '#000000',
		variable: '--sg-palette-scene-black',
	});

	console.log('themeColors', themeColors);

	const handleChange = (newColor: string) => {
		setColor({ ...color, value: newColor });
		setThemeColors((prevColors) => {
			const [group, shade] = color.name.split('-');
			return {
				...prevColors,
				[group]: {
					...(prevColors[group as keyof typeof prevColors] as Record<
						string,
						string
					>),
					[shade]: newColor,
				},
			};
		});
		root.style.setProperty(color.variable, newColor);
	};

	const handleClick = (
		color: string,
		name: string,
		event: React.MouseEvent<HTMLDivElement>
	) => {
		setColor({
			name: name,
			value: color,
			variable: `--sg-palette-scene-${name}`,
		});
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	const swatches = Object.entries(themeColors).map(([groupKey, groupValue]) =>
		typeof groupValue === 'object' ? (
			<Stack direction="row">
				{Object.entries(groupValue).map(([colorKey, colorValue]) => (
					<Box
						key={groupKey + colorKey}
						onClick={(event) =>
							handleClick(
								colorValue,
								`${groupKey}-${colorKey}`,
								event
							)
						}
						sx={{ background: colorValue, width: 20, height: 20 }}
					/>
				))}
			</Stack>
		) : (
			<Box
				key={groupKey}
				sx={{ background: groupValue, width: 20, height: 20 }}
			/>
		)
	);

	return (
		<Box
			sx={{
				position: 'absolute',
				left: '50%',
				top: '50%',
				transform: 'translate(-50%, -50%)',
				zIndex: 10,
				p: 3,
			}}
		>
			{swatches}
			<Popover
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				<ColorPicker value={color.value} onChange={handleChange} />
			</Popover>
		</Box>
	);
};
