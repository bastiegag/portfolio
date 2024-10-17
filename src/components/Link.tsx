import React, { ReactNode } from 'react';

import { usePopper } from 'hooks';
import { openLink } from 'utils';

export interface LinkProps {
    url: string;
    title: string;
    tab?: boolean;
    children: ReactNode;
}

export const Link = ({ url, title, tab, children }: LinkProps) => {
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
            title: '',
        });
    };

    return (
        <a
            className="link"
            onMouseEnter={(event) => handlePopoverOpen(event, title)}
            onMouseLeave={handlePopoverClose}
            onClick={() => {
                openLink(url, tab);
            }}
        >
            {children}
        </a>
    );
};
