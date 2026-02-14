/**
 * Common Types & Utility Types
 * 
 * Provides reusable type definitions and TypeScript utility type helpers
 * for consistent typing across the application.
 */

import type { ReactNode } from 'react';

/**
 * 2D Coordinate with x and y positions
 */
export interface Coordinate {
	x: number;
	y: number;
}

/**
 * Parallax modifier for animation calculations
 */
export type ParallaxModifier = Readonly<Coordinate>;

/**
 * Options for parallax animations
 */
export interface ParallaxOptions {
	/**
	 * Enable position animations (true for both, 'x' or 'y' for specific axis)
	 */
	pos?: boolean | 'x' | 'y';

	/**
	 * Enable scale animations
	 */
	scale?: boolean;

	/**
	 * Enable skew animations
	 */
	skew?: boolean;
}

/**
 * Base props for components that render children
 */
export interface WithChildren {
	children: ReactNode;
}

/**
 * Base props for components with optional children
 */
export interface WithOptionalChildren {
	children?: ReactNode;
}

/**
 * Base props for components positioned in 2D space
 */
export type Positioned = Coordinate;

/**
 * Props for components with 2D position and parallax modifier
 */
export interface PositionedWithModifier extends Positioned {
	modifier: ParallaxModifier;
}

/**
 * Props for scene elements with variant selection
 */
export interface WithVariant {
	variant: number;
}

/**
 * Combines positioned props with variant
 */
export type PositionedVariant = Positioned & WithVariant;

/**
 * Make all properties optional except specified keys
 * 
 * @example
 * ```typescript
 * type UserProfile = {
 *   id: string;
 *   name: string;
 *   email: string;
 *   bio: string;
 * };
 * 
 * // Only id is required, rest are optional
 * type PartialUser = PartialExcept<UserProfile, 'id'>;
 * ```
 */
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

/**
 * Make all properties required except specified keys
 * 
 * @example
 * ```typescript
 * type FormData = {
 *   name?: string;
 *   email?: string;
 *   phone?: string;
 * };
 * 
 * // name and email required, phone still optional
 * type RequiredForm = RequiredExcept<FormData, 'phone'>;
 * ```
 */
export type RequiredExcept<T, K extends keyof T> = Required<Omit<T, K>> & Pick<T, K>;

/**
 * Make specific properties optional
 * 
 * @example
 * ```typescript
 * type User = {
 *   id: string;
 *   name: string;
 *   email: string;
 * };
 * 
 * // id and name required, email optional
 * type UserUpdate = Optional<User, 'email'>;
 * ```
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Extract function parameter types
 * 
 * @example
 * ```typescript
 * function greet(name: string, age: number) {}
 * type GreetParams = FunctionParams<typeof greet>; // [string, number]
 * ```
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type FunctionParams<T extends (...args: any[]) => any> = T extends (
	...args: infer P
) => any
	? P
	: never;

/* eslint-enable @typescript-eslint/no-explicit-any */
/**
 * Extract function return type safely
 * 
 * @example
 * ```typescript
 * function getValue(): { data: string } {
 *   return { data: 'hello' };
 * }
 * type Value = FunctionReturn<typeof getValue>; // { data: string }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FunctionReturn<T extends (...args: any[]) => any> = ReturnType<T>;

/**
 * Make all properties deeply readonly
 */
export type DeepReadonly<T> = {
	readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

/**
 * Type guard to check if value is defined (not null or undefined)
 * 
 * @example
 * ```typescript
 * const value: string | null = getValue();
 * if (isDefined(value)) {
 *   // TypeScript knows value is string here
 *   console.log(value.toUpperCase());
 * }
 * ```
 */
export function isDefined<T>(value: T | null | undefined): value is T {
	return value !== null && value !== undefined;
}

/**
 * Type guard to check if value is a non-empty string
 * 
 * @example
 * ```typescript
 * const input: string = getUserInput();
 * if (isNonEmptyString(input)) {
 *   // TypeScript knows input has length > 0
 *   processInput(input);
 * }
 * ```
 */
export function isNonEmptyString(value: unknown): value is string {
	return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Type guard to check if value is a number (not NaN)
 * 
 * @example
 * ```typescript
 * const val: unknown = parseFloat(input);
 * if (isNumber(val)) {
 *   // TypeScript knows val is number
 *   console.log(val.toFixed(2));
 * }
 * ```
 */
export function isNumber(value: unknown): value is number {
	return typeof value === 'number' && !Number.isNaN(value);
}

/**
 * Type guard to check if value is an object (not null, not array)
 * 
 * @example
 * ```typescript
 * const data: unknown = JSON.parse(response);
 * if (isObject(data)) {
 *   // TypeScript knows data is Record<string, unknown>
 *   console.log(Object.keys(data));
 * }
 * ```
 */
export function isObject(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Type guard to check if value is a Coordinate
 * 
 * @example
 * ```typescript
 * function moveElement(pos: unknown) {
 *   if (isCoordinate(pos)) {
 *     element.style.left = pos.x + 'px';
 *     element.style.top = pos.y + 'px';
 *   }
 * }
 * ```
 */
export function isCoordinate(value: unknown): value is Coordinate {
	return (
		isObject(value) &&
		'x' in value &&
		'y' in value &&
		isNumber(value.x) &&
		isNumber(value.y)
	);
}

/**
 * Extracts keys from T that have values of type V
 * 
 * @example
 * ```typescript
 * type User = {
 *   id: number;
 *   name: string;
 *   age: number;
 *   email: string;
 * };
 * 
 * type NumberKeys = KeysOfType<User, number>; // 'id' | 'age'
 * type StringKeys = KeysOfType<User, string>; // 'name' | 'email'
 * ```
 */
export type KeysOfType<T, V> = {
	[K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

/**
 * Extracts values of type V from T
 * 
 * @example
 * ```typescript
 * type Config = {
 *   host: string;
 *   port: number;
 *   enabled: boolean;
 *   timeout: number;
 * };
 * 
 * type Numbers = ValuesOfType<Config, number>; // number
 * ```
 */
export type ValuesOfType<T, V> = T[KeysOfType<T, V>];
