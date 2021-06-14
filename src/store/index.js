import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'

import rootReducer from 'reducers'
import rootEpic from '../epics'

const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = []
const epicMiddleware = createEpicMiddleware()
middlewares.push(epicMiddleware)

if (__DEV__) {
  const logger = createLogger()
  middlewares.push(logger)
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

epicMiddleware.run(rootEpic)

export default store
