/**
 * Navigation Service Module
 *
 * Provides dependency-injected navigation operations with:
 * - XSS protection and URL validation
 * - Analytics tracking hooks
 * - Testability via service injection
 * - Secure window.open with noopener/noreferrer
 *
 * @example
 * ```tsx
 * // In your app root:
 * import { NavigationProvider } from '@shared/services/navigation';
 *
 * <NavigationProvider>
 *   <App />
 * </NavigationProvider>
 * ```
 *
 * @example
 * ```tsx
 * // In a component:
 * import { useNavigation } from '@shared/services/navigation';
 *
 * const MyComponent = () => {
 *   const navigation = useNavigation();
 *
 *   const handleClick = () => {
 *     navigation.openLink('https://example.com', {
 *       trackingEvent: {
 *         category: 'external-link',
 *         action: 'click'
 *       }
 *     });
 *   };
 * };
 * ```
 */

export type {
	INavigationService,
	NavigationOptions,
} from './INavigationService';
export { NavigationService, navigationService } from './NavigationService';
export { NavigationProvider, useNavigation } from './NavigationProvider';
