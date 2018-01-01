import { 
  FETCHING_NEWS,
  FETCHING_AZURE_AI,
  INCREASING_CURRENT_PAGE,
} from "./constants";

const fetchNews = (page) => {
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

const fetchAzureAi = (imageURL) => {
  return {
    type: FETCHING_AZURE_AI,
    imageURL,
  }
}

export { fetchNews, increaseCurrentPage }