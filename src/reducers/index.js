import { combineReducers } from 'redux'
import photoReducer from './photoReducer'
import contactsReducer from './contactsReducer'

const appReducer = combineReducers({
  photoReducer,
  contactsReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
