import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import '@babel/polyfill'
import ErrorBoundary from './DefaultErrorBoundary'
import App from './App'
import './styles.css'

render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('app')
)
