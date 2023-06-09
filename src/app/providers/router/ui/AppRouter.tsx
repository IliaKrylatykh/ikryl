import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'
import { routeConfig } from './routeConfig'

export const AppRouter: FC = () => (
	<Routes>
		{Object.values(routeConfig).map(({ element, path }) => (
			<Route
				key={path}
				path={path}
				element={
					<Suspense fallback={<PageLoader />}>
						<div className='page-wrapper'>{element}</div>
					</Suspense>
				}
			/>
		))}
	</Routes>
)
