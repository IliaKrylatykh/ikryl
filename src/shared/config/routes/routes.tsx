export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',

	// last option
	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',

	// last option
	[AppRoutes.NOT_FOUND]: '*',
}
