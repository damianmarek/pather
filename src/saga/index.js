import { fork, all } from 'redux-saga/effects'
import * as routeSaga from './routeSaga'

export default function * root() {
  yield all([
    fork(routeSaga.watchFetchPath)
  ])
}
