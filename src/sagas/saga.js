import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS } from '../constants'
import { put, takeEvery } from 'redux-saga/effects'
import people from '../apis/people'

const fetchData = function* (action) {
  try {
    const data = yield getPeople()
    yield put({ type: FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE})
  }
}

const dataSaga = function* () {
  yield takeEvery(FETCHING_DATA, fetchData)
}

export default dataSaga