import { userActions } from 'entities/User'
import { FC, Suspense, useEffect } from 'react'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/router'

const App: FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(userActions.iniAuthData)
	}, [dispatch])

	return (
		<div className={classNames('app', {}, [])}>
			<Suspense fallback=''>
				<Navbar />
				<div className='content-page'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App
