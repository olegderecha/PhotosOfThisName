import { combineEpics } from 'redux-observable'
import * as photoEpic from './photoEpic'

export default combineEpics(
  ...Object.values({
    ...photoEpic,
  })
)
