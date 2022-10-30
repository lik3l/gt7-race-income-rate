import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { Dashboard } from './layouts/Dashboard/Dashboard'

test('app renders welcome', () => {
  render(<App />)
  const welcome = screen.getByText(/hello/i)
  expect(welcome).toBeInTheDocument()
})

it('dashboard renders welcome', () => {
  render(<Dashboard />)
  const welcome = screen.getByText(/hello/i)
  expect(welcome).toBeInTheDocument()
})
