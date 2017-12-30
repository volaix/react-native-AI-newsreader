export default people = () => {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      return resolve(people)
      //fake induced loading lag
    }, 1000 )
  })
}


//API Link
const authority = 'content.thewest.com.au'
const path = '/v3/publication?page=1&page_offset=0&page_size=5&topics=news%2Foffbeat'
const link = ( authority + path )