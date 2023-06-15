import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getCounter } from './getCounter' // Replace with the correct path to your module

describe('getCounter', () => {
	it('should return the counter value from the state', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 },
		}
		expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
	})
})
