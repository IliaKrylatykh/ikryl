import { FC, useEffect, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface BugButtonProps {
	className?: string
}

export const BugButton: FC<BugButtonProps> = () => {
	const [error, setError] = useState(false)

	const onThrow = () => setError(true)

	useEffect(() => {
		if (error) {
			throw new Error()
		}
	}, [error])
	return (
		// eslint-disable-next-line
		<Button onClick={onThrow} theme={ButtonTheme.OUTLINE}>
			throw error
		</Button>
	)
}
