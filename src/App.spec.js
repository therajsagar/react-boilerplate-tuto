import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('Renders Without Errors', () => {
    render(<App />)
  })
})
