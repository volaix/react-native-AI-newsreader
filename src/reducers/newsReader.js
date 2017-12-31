import { 
  FETCHING_NEWS,
  FETCHING_NEWS_FAILURE,
  FETCHING_NEWS_SUCCESS,
  INCREASING_CURRENT_PAGE,
} from '../constants'

const initialState = {
  isFetching: false,
  error: false,
  newsList: [],
  currentNewsPage: 0,
}

export default newsReader = (state = initialState, action) => {
  switch (action.type){
    case FETCHING_NEWS:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_NEWS_SUCCESS:
    console.log('action FETCHING_NEWS_SUCCESS', action)
      return {
        ...state,
        isFetching: false,
        newsList: [...state.newsList, ...action.data],
      }
    case FETCHING_NEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case INCREASING_CURRENT_PAGE:
      return {
        ...state,
        currentNewsPage: state.currentNewsPage + 1
      }
    default:
      return state
  }
}
