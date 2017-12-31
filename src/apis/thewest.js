const theWest = async (page) => {
  //todo put try and catch here to catch errors from getting the api
  console.log(`page from argument is ${page}`)
  const url = `https://content.thewest.com.au/v3/publication?page=${page}&page_offset=0&page_size=5&topics=news%2Foffbeat`
  const response = await fetch(url)
  const json = await response.json()
  const relevantData = json.documents.map((item, index) => {
    //json response is inconsistent. imageURL filters so that there's always an image found
    const imageURL = item.posterImage ? item.posterImage.reference : item.mainImage.reference
    const heading = item.heading
    return {
      heading,
      imageURL,
    }
  })
  return relevantData
}

export default theWest