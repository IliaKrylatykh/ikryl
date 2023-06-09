import { FC, memo, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	const itemsList = useMemo(() => {
		return SidebarItemsList.map(item => (
			<SidebarItem item={item} collapsed={collapsed} key={item.path} />
		))
	}, [collapsed])

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
			<div className={cls.items}>{itemsList}</div>
			<div className={cls.switchers} />
		</div>
	)
})
