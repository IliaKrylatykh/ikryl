import { BugButton } from 'app/providers/ErrorBoundary'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

const MainPage: FC = () => {
	const { t } = useTranslation('main')

	const [value, setValue] = useState('')

	const onChange = (val: string) => {
		setValue(val)
	}

	return (
		<div>
			<BugButton />
			<p>{t('MainPage')}</p>
			<Input value={value} onChange={onChange} />
		</div>
	)
}

export default MainPage
