import { ThemeProvider } from 'app/providers/ThemeProvider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>
)
