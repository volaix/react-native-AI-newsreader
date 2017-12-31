import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers'
import { composeWithDevTools } from 'remote-redux-devtools'

import createSagaMiddleware from 'redux-saga'
import newsSaga from '../sagas/newsSaga'

const sagaMiddleware = createSagaMiddleware()

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
)(createStore);

export default configureStore = () => {
  const store = createStoreWithMiddleware(reducers)
  sagaMiddleware.run(newsSaga)
  return store
}