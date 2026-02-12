import { ReactNode, useCallback } from 'react';
import { Link as RouterLink } from 'react-router';

import { usePopper } from '@shared/hooks/popper/popper.state';
import { useCursor } from '@shared/components/cursor/cursor.state';
import { openLink } from '@shared/utils';

export interface LinkProps {
	url?: string;
	to?: string;
	title: string;
	tab?: boolean;
	children: ReactNode;
}

export const Link = ({ url, to, title, tab, children }: LinkProps) => {
	const { popper, setPopper } = usePopper();
	const { setCursor } = useCursor();

	const handlePopoverOpen = useCallback(
		(event: React.MouseEvent<HTMLAnchorElement>, title: string) => {
			setCursor({ hover: true });
			setPopper({
				...popper,
				anchorEl: event.currentTarget,
				title: title,
			});
		},
		[popper, setCursor, setPopper],
	);

	const handlePopoverClose = useCallback(() => {
		setCursor({ hover: false });
		setPopper({
			...popper,
			anchorEl: null,
			title: '',
		});
	}, [popper, setCursor, setPopper]);

	const handleClick = useCallback(() => {
		if (url) {
			openLink(url, tab);
		}
	}, [url, tab]);

	return (
		<RouterLink
			className="link"
			onMouseEnter={(event) => title && handlePopoverOpen(event, title)}
			onMouseLeave={handlePopoverClose}
			to={to ?? ''}
			onClick={handleClick}
		>
			{children}
		</RouterLink>
	);
};
