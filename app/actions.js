import { FETCHING_NEWS, INCREASING_CURRENT_PAGE } from "./constants";

const fetchNews = (page) => {
  console.log('the value of page in the actions.js for fetchNewsis', page) //need this to be 1
  return {
    type: FETCHING_NEWS,
    page,
  }
}

const increaseCurrentPage = () => {
 return {
   type: INCREASING_CURRENT_PAGE,
 } 
}

export { fetchNews, increaseCurrentPage }