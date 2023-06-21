import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
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
	[AppRoutes.PROFILE]: {
		path: RoutePath[AppRoutes.PROFILE],
		element: <ProfilePage />,
	},
	// last route
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath[AppRoutes.NOT_FOUND],
		element: <NotFoundPage />,
	},
}
