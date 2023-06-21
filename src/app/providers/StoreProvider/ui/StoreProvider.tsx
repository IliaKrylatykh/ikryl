import { DeepPartial } from '@reduxjs/toolkit'
import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
	children?: ReactNode
	initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = ({
	children,
	initialState,
}) => {
	const navigate = useNavigate()

	const store = createReduxStore(initialState as StateSchema, navigate)

	return <Provider store={store}>{children}</Provider>
}
