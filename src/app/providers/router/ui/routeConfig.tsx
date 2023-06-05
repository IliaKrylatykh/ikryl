import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { RouteProps } from 'react-router-dom'
import { AppRoutes, RoutePath } from 'shared/config/routes/routes'

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath[AppRoutes.ABOUT],
		element: <AboutPage />,
	},
	// [AppRoutes.NOT_FOUND]: {
	// 	path: RoutePath.not_found,
	// 	element: <NotFoundPage />,
	// },
}
