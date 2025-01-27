import {
	IconMoon,
	IconSun,
	IconPlayerPlay,
	IconPlayerPause,
} from "@tabler/icons-react";
import {
	Box,
	useColorScheme,
	IconButton,
	useTheme,
	Tooltip,
} from "@mui/material";

import { useThemeOptions } from "hooks";

export const Footer = () => {
	const theme = useTheme();
	const { mode, setMode } = useColorScheme();
	const { settings, setSettings } = useThemeOptions();

	if (!mode) {
		return null;
	}

	return (
		<Box
			sx={{
				position: "absolute",
				bottom: 0,
				left: 0,
				p: 3,
				color: "white",
				zIndex: theme.zIndex.drawer + 2,
			}}
		>
			<Tooltip title="Play animation">
				<IconButton
					size="large"
					onClick={() => {
						setSettings({
							...settings,
							animate: settings.animate ? false : true,
						});
					}}
				>
					{settings.animate ? (
						<IconPlayerPause />
					) : (
						<IconPlayerPlay />
					)}
				</IconButton>
			</Tooltip>
			<Tooltip title="Dark mode">
				<IconButton
					size="large"
					onClick={() => {
						setMode(mode === "dark" ? "light" : "dark");
					}}
				>
					{mode == "dark" ? <IconSun /> : <IconMoon />}
				</IconButton>
			</Tooltip>
		</Box>
	);
};
