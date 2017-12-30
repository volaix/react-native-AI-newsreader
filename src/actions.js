import { FETCHING_DATA } from "./constants";
import getPeople from './api'

const fetchData = () => {
  return {
    type: FETCHING_DATA,
  }
}

export { fetchData }