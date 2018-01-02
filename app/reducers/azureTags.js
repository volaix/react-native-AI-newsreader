import {
 FETCHING_AZURE_AI,
 FETCHING_AZURE_AI_FAILURE,
 FETCHING_AZURE_AI_SUCCESS
} from '../constants'

const initialState = {
  isFetching: false,
  error: false,
  tags: null,
}

export default azureTags = (state = initialState, action) => {
  switch (action.type){
    case FETCHING_AZURE_AI:
    console.log('action FETCHING_AZURE_AI fired', action)
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_AZURE_AI_SUCCESS:
    console.log('action FETCHING_AZURE_AI_SUCCESS', action)
      return {
        ...state,
        isFetching: false,
        tags: action.tags
      }
    case FETCHING_AZURE_AI_FAILURE:
    console.log('action FETCHING_AZURE_FAILURE', action)
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}