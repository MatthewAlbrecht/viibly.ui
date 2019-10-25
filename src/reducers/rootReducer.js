import { combineReducers } from 'redux'
import test from 'reducers/test.reducer'
import nav from 'reducers/nav.reducer'

export default combineReducers({
  test,
  nav,
})
