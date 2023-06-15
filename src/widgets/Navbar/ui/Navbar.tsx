import { Counter } from 'entities/Counter'
import { LangSwitcher } from 'features/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation()

	const [isAuthModal, setIsAuthModal] = useState(false)

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev)
	}, [])

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.links}
					onClick={onToggleModal}
				>
					{t('Log in')}
				</Button>
				<Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
					<Counter />
					<p>modalka</p>
				</Modal>
			</div>
		</div>
	)
}
