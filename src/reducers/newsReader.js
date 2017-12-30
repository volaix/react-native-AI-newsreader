import { 
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  FETCHING_NEWS,
  FETCHING_NEWS_FAILURE,
  FETCHING_NEWS_SUCCESS,
} from '../constants'

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  newsList: 'I come from redux'
}

export default newsReader = (state = initialState, action) => {
  switch (action.type){
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
        data: [],
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      }
    case FETCHING_NEWS:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        newsList: action.data,
      }
    case FETCHING_NEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
