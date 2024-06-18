import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux' // old
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

const store = createStore(reducer) // old
//const store = configureStore(reducer) // newer

const App = () => {

  const good = () => {

    const good = store.getState().good   // oma - copypastattu alta ('good {store.getState().good}' nimittäin c:). Tätä funktiota siis kutsutaan aina kun painetaan "good"-näppäintä
    store.dispatch({
      type: 'GOOD',           // oma
      payload: {              // OMA
        good
      }
    })
  }

  const ok = () => {

    const ok = store.getState().ok
    store.dispatch({
      type: 'OK',
      payload: {
        ok
      }
    })    
  }

  const bad = () => {

    const bad = store.getState().bad
    store.dispatch({
      type: 'BAD',
      payload: {
        bad
      }
    })
  }

  const resetStats = () => {
    store.dispatch({
      type: 'ZERO',
      payload: {}
    })
  }

  return (
    <div>

      <button onClick={good}>good</button> 
      <button onClick={ok}>ok</button> 
      <button onClick={bad}>bad</button>
      <button onClick={resetStats}>reset stats</button>

      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
