import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { FC, useState } from 'react'
import { RoutePath } from 'shared/config/routes/routes'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div
			data-testid='sidebar'
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<Button
				data-testid='sidebar-toggle'
				type='button'
				onClick={onToggle}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND}
				square
				size={ButtonSize.L}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.items}>
				<AppLink
					to={RoutePath.main}
					theme={AppLinkTheme.SECONDARY}
					className={cls.item}
				>
					<span className={cls.link}>Главная</span>
				</AppLink>
				<AppLink
					to={RoutePath.about}
					theme={AppLinkTheme.SECONDARY}
					className={cls.item}
				>
					<span className={cls.link}>'О сайте'</span>
				</AppLink>
			</div>
			<div className={cls.switchers}></div>
		</div>
	)
}
