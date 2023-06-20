import { DeepPartial } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
	test('test set username', () => {
		const state: DeepPartial<LoginSchema> = { username: 'john' }
		expect(
			loginReducer(state as LoginSchema, loginActions.setUsername('123'))
		).toEqual({ username: '123' })
	})

	test('test set password', () => {
		const state: DeepPartial<LoginSchema> = { password: '123' }
		expect(
			loginReducer(state as LoginSchema, loginActions.setPassword('321'))
		).toEqual({ password: '321' })
	})
})
