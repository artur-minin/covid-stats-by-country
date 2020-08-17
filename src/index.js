import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './redux/configureStore'
import rootReducer from './redux/rootReducer'

import './app/styles/index.scss'

import App from './app/views/App'
import ErrorBoundary from './app/components/ErrorBoundary'

const store = configureStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
)
