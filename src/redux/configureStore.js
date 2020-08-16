import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

const configureStore = rootReducer => {
  const hasReduxExtension = typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
  const isDevelopment = process.env.NODE_ENV === 'development'

  const composeEnhancers =
    isDevelopment && hasReduxExtension ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  const middleware = applyMiddleware(thunk)
  const createStoreWithMiddleware = composeEnhancers(middleware)

  return createStoreWithMiddleware(createStore)(rootReducer)
}

export default configureStore
