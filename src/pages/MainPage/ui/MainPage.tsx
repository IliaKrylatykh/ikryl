import { BugButton } from 'app/providers/ErrorBoundary'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {
	const { t, i18n } = useTranslation('main')

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
	}

	return (
		<div>
			<button type='button' onClick={toggle}>
				{t('Translate')}
			</button>
			<BugButton />

			<p>{t('MainPage')}</p>
		</div>
	)
}

export default MainPage
