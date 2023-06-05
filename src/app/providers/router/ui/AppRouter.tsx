import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from './routeConfig'

export const AppRouter: FC = () => {
	return (
		<Routes>
			{Object.values(routeConfig).map(({ element, path }) => (
				<Route
					key={path}
					path={path}
					element={
						<Suspense fallback={<div>Loading</div>}>
							<div>{element}</div>
						</Suspense>
					}
				/>
			))}
		</Routes>
	)
}
