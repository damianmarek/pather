import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  fetchPathAttempt: [],
  fetchPathSuccess: ['path'],
  fetchPathFailure: ['error'],
  setStartPoint: ['point'],
  setEndPoint: ['point'],
})

export const RouteTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  path: {},
  startPoint: [],
  endPoint: [],
  fetching: false,
  error: '',
})

export const fetchPathAttempt = (state, action) => state.merge({
  fetching: true,
})

export const fetchPathSuccess = (state, action) => state.merge({
  path: action.path,
  fetching: false,
})

export const fetchPathFailure = (state, action) => state.merge({
  fetching: false,
  error: action.error,
})

export const setStartPoint = (state, action) => state.merge({
  startPoint: action.point,
})

export const setEndPoint = (state, action) => state.merge({
  endPoint: action.point,
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_PATH_ATTEMPT]: fetchPathAttempt,
  [Types.FETCH_PATH_SUCCESS]: fetchPathSuccess,
  [Types.FETCH_PATH_FAILURE]: fetchPathFailure,
  [Types.SET_START_POINT]: setStartPoint,
  [Types.SET_END_POINT]: setEndPoint,
})
