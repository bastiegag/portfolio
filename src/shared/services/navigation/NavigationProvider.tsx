/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, type ReactNode } from 'react';
import type { INavigationService } from './INavigationService';
import { navigationService } from './NavigationService';

/**
 * Context for dependency injection of navigation service
 */
const NavigationContext = createContext<INavigationService | undefined>(
	undefined,
);

/**
 * Props for NavigationProvider
 */
export interface NavigationProviderProps {
	/**
	 * Child components
	 */
	children: ReactNode;

	/**
	 * Optional navigation service implementation
	 * (useful for testing with mocks)
	 */
	service?: INavigationService;
}

/**
 * Provider component for dependency injection of NavigationService
 *
 * Usage:
 * ```tsx
 * <NavigationProvider>
 *   <App />
 * </NavigationProvider>
 * ```
 *
 * With custom service (e.g., for testing):
 * ```tsx
 * <NavigationProvider service={mockNavigationService}>
 *   <ComponentUnderTest />
 * </NavigationProvider>
 * ```
 */
export const NavigationProvider: React.FC<NavigationProviderProps> = ({
	children,
	service = navigationService,
}) => {
	return (
		<NavigationContext.Provider value={service}>
			{children}
		</NavigationContext.Provider>
	);
};

/**
 * Hook to access the navigation service
 *
 * @throws Error if used outside NavigationProvider
 *
 * @example
 * ```tsx
 * const navigation = useNavigation();
 *
 * const handleClick = () => {
 *   navigation.openLink('https://example.com', {
 *     trackingEvent: {
 *       category: 'external-link',
 *       action: 'click',
 *       label: 'example.com'
 *     }
 *   });
 * };
 * ```
 */
export const useNavigation = (): INavigationService => {
	const context = useContext(NavigationContext);

	if (!context) {
		throw new Error(
			'useNavigation must be used within a NavigationProvider',
		);
	}

	return context;
};
