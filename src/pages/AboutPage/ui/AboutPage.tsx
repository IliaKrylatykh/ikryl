import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage: FC = () => {
	const { t } = useTranslation('about')

	return (
		<div>
			<p>{t('About')}</p>
		</div>
	)
}

export default AboutPage
