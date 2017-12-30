import { FETCHING_NEWS, FETCHING_NEWS_SUCCESS, FETCHING_NEWS_FAILURE, FETCHING_DATA_SUCCESS} from '../constants'
import { put, takeEvery } from 'redux-saga/effects'

//replace this
import people from '../apis/people'

const fetchData = function* (action) {
  try {
    //replace getPeople with the relevant API then this is done
    const data = yield getPeople()
    yield put({ type: FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_NEWS_FAILURE})
  }
}

const newsSaga = function* () {
  yield takeEvery(FETCHING_NEWS, fetchData)
}

export default newsSaga