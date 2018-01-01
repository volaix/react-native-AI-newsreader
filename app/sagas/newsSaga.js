import { FETCHING_NEWS, FETCHING_NEWS_SUCCESS, FETCHING_NEWS_FAILURE } from '../constants'
import { put, takeEvery } from 'redux-saga/effects'

import theWest from '../apis/theWest'

const fetchData = function* (action) {
  try {
    const data = yield theWest(action.page)
    yield put({ type: FETCHING_NEWS_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_NEWS_FAILURE})
  }
}

const newsSaga = function* () {
  yield takeEvery(FETCHING_NEWS, fetchData)
}

export default newsSaga