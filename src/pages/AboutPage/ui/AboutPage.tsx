import { Counter } from 'entities/Counter'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage: FC = () => {
	const { t } = useTranslation('about')

	return (
		<div>
			<p>{t('About')}</p>
			<Counter />
		</div>
	)
}

export default AboutPage
