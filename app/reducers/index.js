import { combineReducers } from 'redux'
import newsReader from './newsReader'
import azureTags from './azureTags'

const rootReducer = combineReducers({
  newsReader,
  azureTags,
})

export default rootReducer
