import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { FC, PropsWithChildren, useEffect } from 'react'
import { useStore } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
	reducers: ReducersList
	removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<
	PropsWithChildren<DynamicModuleLoaderProps>
> = ({ reducers, removeAfterUnmount, children }) => {
	const store = useStore() as ReduxStoreWithManager
	const dispatch = useAppDispatch()

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer)
			dispatch({ type: `@INIT ${name} reducer` })
		})

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
					store.reducerManager.remove(name)
					dispatch({ type: `@DESTROY ${name} reducer` })
				})
			}
		}
		// eslint-disable-next-line
	}, [])

	// eslint-disable-next-line
	return <>{children}</>
}
