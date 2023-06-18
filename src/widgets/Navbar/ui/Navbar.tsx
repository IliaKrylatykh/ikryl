import { getUserAuthData, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUserName'
import { LangSwitcher } from 'features/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation()
	const authData = useSelector(getUserAuthData)
	const [isAuthModal, setIsAuthModal] = useState(false)
	const dispatch = useAppDispatch()

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const onLogout = useCallback(() => {
		dispatch(userActions.logout())
	}, [dispatch])

	if (authData) {
		return (
			<div className={classNames(cls.Navbar, {}, [className])}>
				<div className={cls.switchers}>
					<ThemeSwitcher />
					<LangSwitcher />
					<Button
						theme={ButtonTheme.OUTLINE}
						className={cls.links}
						onClick={onLogout}
					>
						{t('Log out')}
					</Button>
				</div>
			</div>
		)
	}

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.links}
					onClick={onShowModal}
				>
					{t('Log in')}
				</Button>
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
			</div>
		</div>
	)
}
