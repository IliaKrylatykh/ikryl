import { FC } from 'react'
import Comp from './components/comp/Comp'
import './index.scss'

const App: FC = () => {
	return (
		<div className='app'>
			App
			<Comp />
			<Comp />
			<Comp />
		</div>
	)
}

export default App
