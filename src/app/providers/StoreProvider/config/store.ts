import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { NavigateOptions, To } from 'react-router-dom'
import { $api } from 'shared/api/api'
import { StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'

export function createReduxStore(
	initialState?: StateSchema,
	navigate?: (to: To, options?: NavigateOptions) => void
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
	}

	const reducerManager = createReducerManager(rootReducers)

	const store = configureStore({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api: $api,
						navigate,
					},
				},
			}),
	})
	// @ts-ignore
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
