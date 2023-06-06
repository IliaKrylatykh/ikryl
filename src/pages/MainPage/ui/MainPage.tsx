import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {
	const { t, i18n } = useTranslation('main')

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
	}

	return (
		<div>
			<button onClick={toggle}>{t('Translate')}</button>

			<p>{t('MainPage')}</p>
			<p>{t('MainPage', { ns: ['main'] })}</p>
		</div>
	)
}

export default MainPage
