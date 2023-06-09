import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { AppLink, AppLinkTheme } from './AppLink'

describe('AppLink', () => {
	test('renders children', () => {
		render(
			<BrowserRouter>
				<AppLink to='/path'>Link Text</AppLink>
			</BrowserRouter>
		)

		expect(screen.getByText('Link Text')).toBeInTheDocument()
	})

	test('has default theme', () => {
		render(
			<BrowserRouter>
				<AppLink to='/path'>Link Text</AppLink>
			</BrowserRouter>
		)

		expect(screen.getByText('Link Text')).toHaveClass(AppLinkTheme.PRIMARY)
	})

	test('applies custom className', () => {
		render(
			<BrowserRouter>
				<AppLink to='/path' className='custom-class'>
					Link Text
				</AppLink>
			</BrowserRouter>
		)

		expect(screen.getByText('Link Text')).toHaveClass('custom-class')
	})

	test('applies custom theme', () => {
		render(
			<BrowserRouter>
				<AppLink to='/path' theme={AppLinkTheme.SECONDARY}>
					Link Text
				</AppLink>
			</BrowserRouter>
		)

		expect(screen.getByText('Link Text')).toHaveClass(AppLinkTheme.SECONDARY)
	})

	test('renders correct destination path', () => {
		render(
			<BrowserRouter>
				<AppLink to='/path'>Link Text</AppLink>
			</BrowserRouter>
		)

		expect(screen.getByText('Link Text')).toHaveAttribute('href', '/path')
	})
})
