import { combineReducers } from 'redux'
import configureStore from './createStore'
import rootSaga from '../saga'

export default (history) => {
  // const rootReducer = combineReducers({
  //
  // })

  const rootReducer = state => state

  return configureStore(rootReducer, rootSaga, history)
}
