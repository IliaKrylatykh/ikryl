import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'
import App from './app/App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
	<BrowserRouter>
		<StoreProvider>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</StoreProvider>
	</BrowserRouter>
)
