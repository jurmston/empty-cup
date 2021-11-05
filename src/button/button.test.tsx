import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

test('renders a button', () => {
  render(<Button />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})