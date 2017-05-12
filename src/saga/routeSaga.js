import { takeEvery, put, select } from 'redux-saga/effects'
import RouteActions, { RouteTypes } from '../redux/routeRedux'
import routeApi from '../service/routeApi/api'

const getStartPoint = state => state.route.startPoint
const getEndPoint = state => state.route.endPoint

export function * watchFetchPath() {
  yield takeEvery(RouteTypes.FETCH_PATH_ATTEMPT, fetchRoute)
}

function * fetchRoute() {
  try {
    const startPoint = yield select(getStartPoint)
    const endPoint = yield select(getEndPoint)
    if(startPoint.length !== 2 || endPoint.length !== 2) throw new Error('Not enough points')
    const res = yield routeApi.route.getPath(startPoint, endPoint)
    yield put(RouteActions.fetchPathSuccess(res.data.routes[0].geometry))
  } catch (err) {
    yield put(RouteActions.fetchPathFailure(err.message))
  }
}
