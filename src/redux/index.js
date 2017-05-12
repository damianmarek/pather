import { combineReducers } from 'redux'
import configureStore from './createStore'
import rootSaga from '../saga'

export default (history) => {
  const rootReducer = combineReducers({
    route: require('./routeRedux').reducer
  })

  return configureStore(rootReducer, rootSaga, history)
}
