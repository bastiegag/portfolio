import type {
	INavigationService,
	NavigationOptions,
} from './INavigationService';

/**
 * Default implementation of the Navigation Service
 *
 * Provides secure navigation operations with:
 * - XSS protection via URL validation and sanitization
 * - Window.opener nulling for security
 * - Noopener/noreferrer for privacy
 * - Optional analytics tracking hooks
 */
export class NavigationService implements INavigationService {
	/**
	 * Allowed URL protocols for security
	 */
	private readonly ALLOWED_PROTOCOLS = ['http:', 'https:', 'mailto:', 'tel:'];

	/**
	 * Dangerous protocols that should be blocked
	 */
	private readonly DANGEROUS_PROTOCOLS = [
		'javascript:',
		'data:',
		'vbscript:',
	];

	/**
	 * Opens a URL in a new tab or current window
	 *
	 * Security features:
	 * - URL validation and sanitization
	 * - Window.opener nulling to prevent tabnabbing
	 * - Noopener/noreferrer for privacy
	 *
	 * @param url - The URL to open
	 * @param options - Navigation options
	 */
	openLink(url: string, options: NavigationOptions = {}): void {
		const { newTab = true, trackingEvent, validate = true } = options;

		// Validate URL if requested
		if (validate && !this.isValidUrl(url)) {
			console.error('[NavigationService] Invalid URL blocked:', url);
			return;
		}

		// Sanitize URL to prevent XSS
		const sanitizedUrl = this.sanitizeUrl(url);

		// Track analytics if provided
		if (trackingEvent && import.meta.env.DEV) {
			console.log('[NavigationService] Tracking:', trackingEvent);
		}

		// Open link with security features
		const target = newTab ? '_blank' : '_self';
		const features = newTab ? 'noopener,noreferrer' : '';

		try {
			const newWindow = window.open(sanitizedUrl, target, features);

			// Additional security: null out opener reference
			if (newWindow && newTab) {
				newWindow.opener = null;
			}
		} catch (error) {
			console.error('[NavigationService] Failed to open link:', error);
		}
	}

	/**
	 * Validates if a URL is safe to open
	 *
	 * Checks:
	 * - URL is a valid URL or relative path
	 * - Protocol is in allowed list
	 * - Protocol is not in dangerous list
	 *
	 * @param url - The URL to validate
	 * @returns true if the URL is safe
	 */
	isValidUrl(url: string): boolean {
		if (!url || typeof url !== 'string') {
			return false;
		}

		// Trim whitespace
		const trimmedUrl = url.trim();

		// Allow relative URLs
		if (
			trimmedUrl.startsWith('/') ||
			trimmedUrl.startsWith('./') ||
			trimmedUrl.startsWith('../')
		) {
			return true;
		}

		// Check for dangerous protocols
		const lowerUrl = trimmedUrl.toLowerCase();
		if (
			this.DANGEROUS_PROTOCOLS.some((protocol) =>
				lowerUrl.startsWith(protocol),
			)
		) {
			return false;
		}

		// Try to parse as URL
		try {
			const urlObject = new URL(trimmedUrl, window.location.origin);
			return this.ALLOWED_PROTOCOLS.includes(urlObject.protocol);
		} catch {
			// If it can't be parsed, check if it's a valid domain-like string
			return /^[a-z0-9][a-z0-9-]*(\.[a-z0-9-]+)*\.[a-z]{2,}(\/.*)?$/i.test(
				trimmedUrl,
			);
		}
	}

	/**
	 * Sanitizes a URL to prevent XSS attacks
	 *
	 * Removes:
	 * - JavaScript execution attempts
	 * - Data URI schemes
	 * - VBScript and other dangerous protocols
	 * - Encoded dangerous characters
	 *
	 * @param url - The URL to sanitize
	 * @returns The sanitized URL
	 */
	sanitizeUrl(url: string): string {
		if (!url || typeof url !== 'string') {
			return '';
		}

		// Decode URL to catch encoded attacks
		let decoded = url;
		try {
			decoded = decodeURIComponent(url);
		} catch {
			// If decode fails, use original
			decoded = url;
		}

		// Check for dangerous protocols in decoded version
		const lowerDecoded = decoded.toLowerCase();
		if (
			this.DANGEROUS_PROTOCOLS.some((protocol) =>
				lowerDecoded.includes(protocol),
			)
		) {
			console.warn(
				'[NavigationService] Dangerous protocol detected and removed',
			);
			return '';
		}

		// Remove any null bytes
		const sanitized = url.replace(/\0/g, '');

		return sanitized.trim();
	}
}

/**
 * Singleton instance of NavigationService for default usage
 */
export const navigationService = new NavigationService();
