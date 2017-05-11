import { fork, all } from 'redux-saga/effects'
import * as pathSaga from './pathSaga'

export default function * root() {
  yield all([
    fork(pathSaga.watchFetchPath)
  ])
}
