import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
	<div className={classNames(cls.Navbar, {}, [className])}>
		<ThemeSwitcher />
		<div className={cls.links} />
	</div>
)
