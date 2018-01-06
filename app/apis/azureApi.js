
const azureApi = async (imageURL) => {

  const myBody = JSON.stringify({ "url": imageURL })

  const apiKey1 = '366f283c1a95473b95e4800c7623f258'

  const myHeaders = new Headers({
    "Host": "australiaeast.api.cognitive.microsoft.com",
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": apiKey1
  })

  const init = {
    method: 'POST',
    headers: myHeaders,
    body: myBody,
  }

  const visualFeatures = 'Description'
  const location = 'australiaeast'
  const url = `https://${location}.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=${visualFeatures}&language=en`
  const response = await fetch(url, init)
  const json = await response.json()

  return json
}

export default azureApi