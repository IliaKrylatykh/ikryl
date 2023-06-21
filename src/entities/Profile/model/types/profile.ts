import { Country, Currency } from 'shared/const/common'

export interface Profile {
	profile: {
		firstname: string
		lastname: string
		age: 29
		country: Country
		city: string
		currency: Currency
		username: string
		avatar: string
	}
}

export interface ProfileSchema {
	data?: Profile
	isLoading: boolean
	error?: string
	readonly: boolean
}
