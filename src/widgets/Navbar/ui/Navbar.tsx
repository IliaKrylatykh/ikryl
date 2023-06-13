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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
					esse et tempora quam quidem suscipit praesentium commodi dolorum!
					Cumque nemo totam nesciunt itaque, explicabo nam quam fuga laborum
					placeat possimus consequuntur illum excepturi omnis earum harum
					reprehenderit vero dolorem. Beatae dolores autem odit tenetur animi
					enim, optio sequi ipsam, ea delectus blanditiis, iusto cum modi
					aspernatur voluptatum voluptates? Hic facilis, quaerat a in, dolore
					corporis vitae fugit incidunt, eligendi delectus architecto eum
					repellat cumque accusamus non dicta nam inventore dolor. Sint aperiam
					consequatur accusamus cupiditate sapiente earum dolore tempora debitis
					similique, incidunt, dolorem, beatae labore id voluptate consequuntur
					nostrum illum!
				</Modal>
			</div>
		</div>
	)
}
