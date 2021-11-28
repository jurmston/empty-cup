import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'


test('renders a button', () => {
  render(<Button>Test Button</Button>)
  const linkElement = screen.getByText(/test button/i)
  expect(linkElement).toBeInTheDocument()
})
