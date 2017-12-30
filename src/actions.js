import { FETCHING_DATA, FETCHING_NEWS } from "./constants";
import people from './apis/people'

const fetchData = () => {
  return {
    type: FETCHING_DATA,
  }
}

const fetchNews = () => {
  return {
    type: FETCHING_NEWS,
  }
}

export { fetchData, fetchNews }