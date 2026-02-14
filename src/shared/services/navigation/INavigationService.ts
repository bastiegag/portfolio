/**
 * Navigation Service Interface
 *
 * Abstracts navigation operations to enable:
 * - Dependency injection for testability
 * - Analytics/tracking middleware
 * - URL validation and sanitization
 * - Centralized navigation logic
 */
export interface INavigationService {
	/**
	 * Opens a URL in a new tab or current window
	 * @param url - The URL to open
	 * @param options - Navigation options
	 */
	openLink(url: string, options?: NavigationOptions): void;

	/**
	 * Validates if a URL is safe to open
	 * @param url - The URL to validate
	 * @returns true if the URL is safe
	 */
	isValidUrl(url: string): boolean;

	/**
	 * Sanitizes a URL to prevent XSS attacks
	 * @param url - The URL to sanitize
	 * @returns The sanitized URL
	 */
	sanitizeUrl(url: string): string;
}

/**
 * Options for navigation operations
 */
export interface NavigationOptions {
	/**
	 * Whether to open in a new tab (default: true)
	 */
	newTab?: boolean;

	/**
	 * Optional analytics event to track
	 */
	trackingEvent?: {
		category: string;
		action: string;
		label?: string;
	};

	/**
	 * Whether to validate the URL before opening (default: true)
	 */
	validate?: boolean;
}
