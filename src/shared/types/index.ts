/**
 * Shared Types Module
 *
 * Central export point for all shared types and utility types
 * used throughout the application.
 */

export type {
	Coordinate,
	ParallaxModifier,
	ParallaxOptions,
	WithChildren,
	WithOptionalChildren,
	Positioned,
	PositionedWithModifier,
	WithVariant,
	PositionedVariant,
	PartialExcept,
	RequiredExcept,
	Optional,
	FunctionParams,
	FunctionReturn,
	DeepReadonly,
	KeysOfType,
	ValuesOfType,
} from './common';

export {
	isDefined,
	isNonEmptyString,
	isNumber,
	isObject,
	isCoordinate,
} from './common';
