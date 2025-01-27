import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Scene } from "components";

export const Home = () => {
	return (
		<>
			<Outlet />
			<Box
				sx={{
					width: "100%",
					height: "100vh",
					position: "relative",
					overflow: "hidden",
				}}
			>
				<Box
					sx={{
						width: "100%",
						height: "100%",
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translateX(-50%) translateY(-50%)",
					}}
				>
					<Scene />
				</Box>
			</Box>
		</>
	);
};
