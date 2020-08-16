import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/views/App'

import './app/styles/index.scss'

import configureStore from './redux/configureStore'
import rootReducer from './redux/rootReducer'

const store = configureStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
