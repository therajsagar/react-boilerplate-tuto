import React, { useState, lazy, Suspense } from 'react'
import { hot } from 'react-hot-loader'

const Warning = lazy(() => import('./Warning'))

const App = () => {
  const [state, setState] = useState(0)
  return (
    <>
      <h1>Hello World</h1>
      <h2>Count: {state}</h2>
      <button id="inc" onClick={() => setState(prev => prev + 1)}>
        +
      </button>
      <button id="dec" onClick={() => state > 0 && setState(prev => prev - 1)}>
        -
      </button>
      {state > 10 && (
        <Suspense fallback={null}>
          <Warning />
        </Suspense>
      )}
    </>
  )
}

export default hot(module)(App)
