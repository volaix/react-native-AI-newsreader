const relevantData = [
  {
    heading: "Pro BMX rider Anthony Napolitan somehow escapes getting spiked on fence with all limbs intact",
    imageURL: "https://images.thewest.com.au/images/4761797480001/201712/2501/4761797480001_5697392540001_5697371601001-vs.jpg?pubId=4761797480001",

  },
  {
    heading: "BMX rider Anthony Napolitan miraculously survives trick gone wrong",
    imageURL: "https://images.thewest.com.au/images/4761797480001/201712/2501/4761797480001_5697392540001_5697371601001-vs.jpg?pubId=4761797480001",
  },
  {
    heading: "BMX rider's miraculous escape",
    imageURL: "https://images.thewest.com.au/images/4761797480001…81946001_5697175918001-vs.jpg?pubId=4761797480001"
  },
  {
    heading: "Nathan Rykers finishes Sydney to Hobart yacht race in inflatable Zodiac dinghy",
    imageURL: "https://images.thewest.com.au/images/4761797480001…45435001_5696911348001-vs.jpg?pubId=4761797480001"
  },
  {
    heading: "The Sydney-to-Hobart - with a difference",
    imageURL: "https://images.thewest.com.au/images/4761797480001…45435001_5696911348001-vs.jpg?pubId=4761797480001"
  }
]

const removedDuplicates = relevantData.filter((item1, index, originalArray) => {
  return originalArray.findIndex((item2) => item1.imageURL === item2.imageURL) === index
})

console.log('original', relevantData)
console.log('removed duplicates:', removedDuplicates)

  //expected list
  // const relevantData = [
  //   {
  //     heading:"Pro BMX rider Anthony Napolitan somehow escapes getting spiked on fence with all limbs intact",
  //     imageURL:"https://images.thewest.com.au/images/4761797480001/201712/2501/4761797480001_5697392540001_5697371601001-vs.jpg?pubId=4761797480001",
  //   },  
  // {
  //   heading: "BMX rider Anthony Napolitan miraculously survives trick gone wrong",
  //   imageURL: "https://images.thewest.com.au/images/4761797480001/201712/2501/4761797480001_5697392540001_5697371601001-vs.jpg?pubId=4761797480001",
  // },
  //   {
  //     heading: "Nathan Rykers finishes Sydney to Hobart yacht race in inflatable Zodiac dinghy", 
  //     imageURL: "https://images.thewest.com.au/images/4761797480001…45435001_5696911348001-vs.jpg?pubId=4761797480001"
  //   },
  // ]