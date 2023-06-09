import { render, screen } from '@testing-library/react'
import React from 'react'
import { Loader } from './Loader'

describe('Loader', () => {
	test('renders without error', () => {
		render(<Loader />)
		expect(screen.getByTestId('loader')).toBeInTheDocument()
	})

	test('applies custom className', () => {
		render(<Loader className='custom-class' />)
		expect(screen.getByTestId('loader')).toHaveClass('custom-class')
	})

	test('renders four loader elements', () => {
		render(<Loader />)
		const loaderElements = screen.getAllByTestId('loader-element')
		expect(loaderElements).toHaveLength(4)
	})
})
