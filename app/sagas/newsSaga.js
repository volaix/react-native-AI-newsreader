import { FETCHING_NEWS, FETCHING_NEWS_SUCCESS, FETCHING_NEWS_FAILURE, FETCHING_DATA_SUCCESS} from '../constants'
import { put, takeEvery } from 'redux-saga/effects'

import theWest from '../apis/theWest'

const fetchData = function* (action) {
  console.log('the value of action is', action)
  try {
    console.log('current page is', action.page)
    const data = yield theWest(action.page)
    console.log(`news saga has received ${data}`)
    yield put({ type: FETCHING_NEWS_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_NEWS_FAILURE})
  }
}

const newsSaga = function* () {
  yield takeEvery(FETCHING_NEWS, fetchData)
}

export default newsSaga