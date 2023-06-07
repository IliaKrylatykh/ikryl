import { classNames } from './classNames'

describe('classNames', () => {
	test('with only first param', () => {
		expect(classNames('someClass')).toBe('someClass')
	})
	test('with additional class', () => {
		const expected = 'someClass class1 class2'
		expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
	})

	test('with mods', () => {
		const expected = 'someClass class1 class2 hovered scrollable'
		expect(
			classNames('someClass', { hovered: true, scrollable: true }, [
				'class1',
				'class2',
			])
		).toBe(expected)
	})

	test('with mods false', () => {
		const expected = 'someClass class1 class2 hovered'
		expect(
			classNames('someClass', { hovered: true, scrollable: false }, [
				'class1',
				'class2',
			])
		).toBe(expected)
	})

	test('with mods undefined', () => {
		const expected = 'someClass class1 class2 hovered'
		expect(
			classNames('someClass', { hovered: true, scrollable: undefined }, [
				'class1',
				'class2',
			])
		).toBe(expected)
	})

	it('should include modifiers in the generated class names', () => {
		const mods = {
			'modifier-class1': true,
			'modifier-class2': false,
			'modifier-class3': true,
		}
		const expected = classNames('base-class', mods)
		expect(expected).toBe('base-class modifier-class1 modifier-class3')
	})
})
