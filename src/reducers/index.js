import { combineReducers } from 'redux'
import photoReducer from './photoReducer'

const appReducer = combineReducers({
  photoReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
