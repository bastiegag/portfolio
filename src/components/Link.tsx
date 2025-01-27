import React, { ReactNode } from "react";
import { Link as RouterLink } from "react-router";

import { usePopper } from "hooks";
import { openLink } from "utils";

export interface LinkPropsType {
	url?: string;
	to?: string;
	title: string;
	tab?: boolean;
	children: ReactNode;
}

export const Link = ({ url, to, title, tab, children }: LinkPropsType) => {
	const { settings, setSettings } = usePopper();

	const handlePopoverOpen = (
		event: React.MouseEvent<HTMLAnchorElement>,
		title: string
	) => {
		setSettings({
			...settings,
			anchorEl: event.currentTarget,
			title: title,
		});
	};

	const handlePopoverClose = () => {
		setSettings({
			...settings,
			anchorEl: null,
			title: "",
		});
	};

	return (
		<RouterLink
			className="link"
			onMouseEnter={(event) => handlePopoverOpen(event, title)}
			onMouseLeave={handlePopoverClose}
			to={to || ""}
			onClick={() => {
				url && openLink(url, tab);
			}}
		>
			{children}
		</RouterLink>
	);
};
