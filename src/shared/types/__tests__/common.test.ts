import { describe, it, expect } from 'vitest';
import {
	isDefined,
	isNonEmptyString,
	isNumber,
	isObject,
	isCoordinate,
} from '../common';
import type {
	Coordinate,
	PartialExcept,
	RequiredExcept,
	Optional,
	KeysOfType,
	ValuesOfType,
} from '../common';

describe('Type Guards', () => {
	describe('isDefined', () => {
		it('should return true for defined values', () => {
			expect(isDefined(0)).toBe(true);
			expect(isDefined('')).toBe(true);
			expect(isDefined(false)).toBe(true);
			expect(isDefined([])).toBe(true);
			expect(isDefined({})).toBe(true);
		});

		it('should return false for null and undefined', () => {
			expect(isDefined(null)).toBe(false);
			expect(isDefined(undefined)).toBe(false);
		});

		it('should narrow type correctly', () => {
			const value: string | null = 'hello';
			if (isDefined(value)) {
				// TypeScript should know value is string here
				const length: number = value.length;
				expect(length).toBe(5);
			}
		});
	});

	describe('isNonEmptyString', () => {
		it('should return true for non-empty strings', () => {
			expect(isNonEmptyString('hello')).toBe(true);
			expect(isNonEmptyString('a')).toBe(true);
			expect(isNonEmptyString(' x ')).toBe(true);
		});

		it('should return false for empty or whitespace strings', () => {
			expect(isNonEmptyString('')).toBe(false);
			expect(isNonEmptyString('   ')).toBe(false);
			expect(isNonEmptyString('\t\n')).toBe(false);
		});

		it('should return false for non-strings', () => {
			expect(isNonEmptyString(123)).toBe(false);
			expect(isNonEmptyString(null)).toBe(false);
			expect(isNonEmptyString(undefined)).toBe(false);
			expect(isNonEmptyString({})).toBe(false);
		});
	});

	describe('isNumber', () => {
		it('should return true for valid numbers', () => {
			expect(isNumber(0)).toBe(true);
			expect(isNumber(123)).toBe(true);
			expect(isNumber(-456)).toBe(true);
			expect(isNumber(3.14)).toBe(true);
			expect(isNumber(Infinity)).toBe(true);
		});

		it('should return false for NaN', () => {
			expect(isNumber(NaN)).toBe(false);
			expect(isNumber(parseInt('abc', 10))).toBe(false);
		});

		it('should return false for non-numbers', () => {
			expect(isNumber('123')).toBe(false);
			expect(isNumber(null)).toBe(false);
			expect(isNumber(undefined)).toBe(false);
		});
	});

	describe('isObject', () => {
		it('should return true for plain objects', () => {
			expect(isObject({})).toBe(true);
			expect(isObject({ a: 1 })).toBe(true);
			expect(isObject(new Object())).toBe(true);
		});

		it('should return false for null', () => {
			expect(isObject(null)).toBe(false);
		});

		it('should return false for arrays', () => {
			expect(isObject([])).toBe(false);
			expect(isObject([1, 2, 3])).toBe(false);
		});

		it('should return false for primitives', () => {
			expect(isObject(123)).toBe(false);
			expect(isObject('string')).toBe(false);
			expect(isObject(true)).toBe(false);
			expect(isObject(undefined)).toBe(false);
		});
	});

	describe('isCoordinate', () => {
		it('should return true for valid coordinates', () => {
			expect(isCoordinate({ x: 0, y: 0 })).toBe(true);
			expect(isCoordinate({ x: 10, y: 20 })).toBe(true);
			expect(isCoordinate({ x: -5.5, y: 3.14 })).toBe(true);
		});

		it('should return false for invalid coordinates', () => {
			expect(isCoordinate({ x: 10 })).toBe(false);
			expect(isCoordinate({ y: 20 })).toBe(false);
			expect(isCoordinate({ x: '10', y: 20 })).toBe(false);
			expect(isCoordinate({ x: 10, y: NaN })).toBe(false);
			expect(isCoordinate(null)).toBe(false);
			expect(isCoordinate({})).toBe(false);
		});

		it('should allow extra properties', () => {
			expect(isCoordinate({ x: 10, y: 20, z: 30 })).toBe(true);
		});

		it('should narrow type correctly', () => {
			const value: unknown = { x: 10, y: 20 };
			if (isCoordinate(value)) {
				// TypeScript should know value is Coordinate here
				const sum: number = value.x + value.y;
				expect(sum).toBe(30);
			}
		});
	});
});

describe('Utility Types', () => {
	describe('Coordinate', () => {
		it('should enforce x and y properties', () => {
			const coord: Coordinate = { x: 10, y: 20 };
			expect(coord.x).toBe(10);
			expect(coord.y).toBe(20);
		});
	});

	describe('PartialExcept', () => {
		it('should make all properties optional except specified keys', () => {
			type User = {
				id: string;
				name: string;
				email: string;
			};

			// Only id is required
			type PartialUser = PartialExcept<User, 'id'>;

			const user1: PartialUser = { id: '123' };
			const user2: PartialUser = { id: '123', name: 'John' };
			const user3: PartialUser = {
				id: '123',
				name: 'John',
				email: 'john@example.com',
			};

			expect(user1.id).toBe('123');
			expect(user2.name).toBe('John');
			expect(user3.email).toBe('john@example.com');
		});
	});

	describe('RequiredExcept', () => {
		it('should make all properties required except specified keys', () => {
			type FormData = {
				name?: string;
				email?: string;
				phone?: string;
			};

			// name and email required, phone still optional
			type RequiredForm = RequiredExcept<FormData, 'phone'>;

			const form: RequiredForm = {
				name: 'John',
				email: 'john@example.com',
			};

			expect(form.name).toBe('John');
			expect(form.email).toBe('john@example.com');
			expect(form.phone).toBeUndefined();
		});
	});

	describe('Optional', () => {
		it('should make specific properties optional', () => {
			type User = {
				id: string;
				name: string;
				email: string;
			};

			// email is optional, id and name required
			type UserUpdate = Optional<User, 'email'>;

			const update: UserUpdate = {
				id: '123',
				name: 'John',
			};

			expect(update.id).toBe('123');
			expect(update.name).toBe('John');
			expect(update.email).toBeUndefined();
		});
	});

	describe('KeysOfType', () => {
		it('should extract keys that have specific value type', () => {
			type Config = {
				host: string;
				port: number;
				enabled: boolean;
				timeout: number;
			};

			type NumberKeys = KeysOfType<Config, number>;
			// NumberKeys should be 'port' | 'timeout'

			const key1: NumberKeys = 'port';
			const key2: NumberKeys = 'timeout';

			expect(key1).toBe('port');
			expect(key2).toBe('timeout');
		});
	});

	describe('ValuesOfType', () => {
		it('should extract values of specific type', () => {
			type Config = {
				host: string;
				port: number;
				enabled: boolean;
				timeout: number;
			};

			type Numbers = ValuesOfType<Config, number>;
			// Numbers should be number

			const value1: Numbers = 8080;
			const value2: Numbers = 3000;

			expect(value1).toBe(8080);
			expect(value2).toBe(3000);
		});
	});
});
