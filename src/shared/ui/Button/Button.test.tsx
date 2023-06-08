import { fireEvent, render, screen } from '@testing-library/react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'

describe('Button', () => {
	test('Test render', () => {
		render(<Button>TEST</Button>)
		expect(screen.getByText('TEST')).toBeInTheDocument()
	})

	test('Test clear theme', () => {
		render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
		expect(screen.getByText('TEST')).toHaveClass('clear')
		screen.debug()
	})

	test('renders button with correct text', () => {
		const { getByText } = render(<Button>Hello</Button>)
		const buttonElement = getByText('Hello')
		expect(buttonElement).toBeInTheDocument()
	})

	test('applies custom className', () => {
		const { container } = render(<Button className='custom'>Button</Button>)
		const buttonElement = container.querySelector('.custom')
		expect(buttonElement).toBeInTheDocument()
	})

	test('applies theme class when specified', () => {
		const { container } = render(
			<Button theme={ButtonTheme.CLEAR}>Button</Button>
		)
		const buttonElement = container.querySelector('.clear')
		expect(buttonElement).toBeInTheDocument()
	})

	test('applies square class when square prop is true', () => {
		const { container } = render(<Button square>Button</Button>)
		const buttonElement = container.querySelector('.square')
		expect(buttonElement).toBeInTheDocument()
	})

	test('applies size class based on size prop', () => {
		const { container } = render(<Button size={ButtonSize.L}>Button</Button>)
		const buttonElement = container.querySelector('.size_l')
		expect(buttonElement).toBeInTheDocument()
	})

	test('triggers onClick function when clicked', () => {
		const handleClick = jest.fn()
		const { getByText } = render(<Button onClick={handleClick}>Button</Button>)
		const buttonElement = getByText('Button')
		fireEvent.click(buttonElement)
		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
