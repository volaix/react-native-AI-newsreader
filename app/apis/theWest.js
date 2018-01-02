
const theWest = async (page) => {
  //todo put try and catch here to catch errors from getting the api
  const url = `https://content.thewest.com.au/v3/publication?page=${page}&page_offset=0&page_size=5&topics=news%2Foffbeat`
  const response = await fetch(url)
  const json = await response.json()

  const relevantData = json.documents.map((item, index) => {
    //json response is inconsistent. imageURL filters so that there's always an image found
    const imageURL = item.posterImage ? item.posterImage.reference : item.mainImage.reference
    const info = item.videoDescription
    const heading = item.heading
    return {
      heading,
      imageURL,
      // videoDescription
    }
  })

  //thewest api has duplicate images (different titles but same image)
  const removedDuplicates = relevantData.filter((item1, index, originalArray) => {
    return originalArray.findIndex((item2) => item1.imageURL === item2.imageURL) === index
  })

  return removedDuplicates
}

export default theWest