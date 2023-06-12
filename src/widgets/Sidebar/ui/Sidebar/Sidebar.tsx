import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import AboutIcon from 'shared/assets/icons/aboutPage-icon.svg'
import HomeIcon from 'shared/assets/icons/homePage-icon.svg'
import { RoutePath } from 'shared/config/routes/routes'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const { t } = useTranslation()

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
				<div className={cls.item}>
					<AppLink
						to={RoutePath.main}
						theme={AppLinkTheme.SECONDARY}
						className={cls.item}
					>
						<HomeIcon className={cls.icon} />
						<span className={cls.link}>{t('Main page')}</span>
					</AppLink>
				</div>
				<div className={cls.item}>
					<AppLink
						to={RoutePath.about}
						theme={AppLinkTheme.SECONDARY}
						className={cls.item}
					>
						<AboutIcon className={cls.icon} />
						<span className={cls.link}>{t('About page')}</span>
					</AppLink>
				</div>
			</div>
			<div className={cls.switchers} />
		</div>
	)
}
