import {
  FETCHING_AZURE_AI,
  FETCHING_AZURE_AI_SUCCESS,
  FETCHING_AZURE_AI_FAILURE,
} from '../constants'

//todo make the api

import { put, takeEvery } from 'redux-saga/effects'

import theWest from '../apis/theWest'

const fetchData = function* (action) {
  try {
    const data = yield theWest(action.page)
    yield put({ type: FETCHING_AZURE_AI_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_AZURE_AI_FAILURE })
  }
}

const azureSaga = function* () {
  yield takeEvery(FETCHING_AZURE_AI, fetchData)
}

export default azureSaga