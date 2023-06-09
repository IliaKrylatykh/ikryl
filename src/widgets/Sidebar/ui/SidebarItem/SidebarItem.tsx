import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routes/routes'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SidebarItemType } from '../../model/items'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
	item?: SidebarItemType
	collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
	const { t } = useTranslation()

	return (
		<AppLink
			to={item.path}
			theme={AppLinkTheme.SECONDARY}
			className={classNames(cls.item, { [cls.collapsed]: collapsed })}
		>
			<item.Icon className={cls.icon} />
			<span className={cls.link}>{t(item.text)}</span>
		</AppLink>
	)
})
