import React from 'react'
import AboutIcon from 'shared/assets/icons/aboutPage-icon.svg'
import HomeIcon from 'shared/assets/icons/homePage-icon.svg'
import ProfileIcon from 'shared/assets/icons/profilePage-icon.svg'
import { RoutePath } from 'shared/config/routes/routes'

export interface SidebarItemType {
	path: string
	text: string
	Icon: React.FC<React.ComponentProps<'svg'>>
}

export const SidebarItemsList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		Icon: HomeIcon,
		text: 'Main page',
	},
	{
		path: RoutePath.about,
		Icon: AboutIcon,
		text: 'About page',
	},
	{
		path: RoutePath.profile,
		Icon: ProfileIcon,
		text: 'Profile page',
	},
]
