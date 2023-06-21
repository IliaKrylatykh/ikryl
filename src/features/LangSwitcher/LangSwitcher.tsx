import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import LangIcon from 'shared/assets/icons/lang-icon.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './LanSwitcher.module.scss'

interface LangSwitcherProps {
	className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({ className }) => {
	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
	}

	return (
		<Button
			className={classNames(cls.LangSwitcher, {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={toggle}
		>
			{t('Lang')}
			<LangIcon />
		</Button>
	)
})
