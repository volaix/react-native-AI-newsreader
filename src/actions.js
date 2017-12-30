import { FETCHING_DATA } from "./constants";
import people from './apis/people'

const fetchData = () => {
  return {
    type: FETCHING_DATA,
  }
}

export { fetchData }