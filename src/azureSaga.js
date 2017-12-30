console.log('hello world')
const apiKey1 = '366f283c1a95473b95e4800c7623f258'
const apiKey2 = 'fb4ba6ab67f04ef1aabc18d60d3b2795'
const location = 'australiaeast'
const visualFeatures = 'Description'
const language = 'en'


const myHeaders = new Headers({
  "Host": "australiaeast.api.cognitive.microsoft.com",
  "Content-Type": "application/json",
  "Ocp-Apim-Subscription-Key": apiKey1
})

const imgURL = "https://images.thewest.com.au/images/4761797480001/201712/341/4761797480001_5689086380001_5689077760001-vs.jpg?pubId=4761797480001"
const myBody = JSON.stringify({ "url": imgURL  })

const init = {
  method: 'POST',
  headers: myHeaders,
  //  mode: 'cors',
  //  cache: 'default',
  body: myBody,
}

const requestURL = `https://${location}.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=${visualFeatures}&language=${language}`

fetch( requestURL, init)
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data)))

//what i need to make
// POST https://australiaeast.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description&language=en HTTP/1.1
