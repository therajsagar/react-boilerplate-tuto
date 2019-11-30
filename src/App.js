import React, {useState} from 'react'
import {hot} from 'react-hot-loader'

const App =  () => {
    const [state, setState] = useState(0)
    return(
        <>
            <h1>Hello World</h1>
            <h2 >{state}</h2>
            <button id='inc' onClick={() => setState(prev => prev+1)}>+</button>
            <button id='dec' onClick={() => !!state && setState(prev => prev-1)}>-</button>
        </>
    )
}

export default hot(module)(App)