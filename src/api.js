const people = [
  { name: 'Nader', age: 36 },
  { name: 'Joe', age: 42 },
  { name: 'Jason', age: 21 },
]

export default api = () => {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      return resolve(people)
    }, 3000 )
  })
}

//API Link
const authority = 'content.thewest.com.au'
const path = '/v3/publication?page=1&page_offset=0&page_size=5&topics=news%2Foffbeat'
const link = ( authority + path )

//Object.documents[0].

// 20171222002104
// https://content.thewest.com.au/v3/publication?page=1&page_offset=0&page_size=5&topics=news%2Foffbeat
/*
{
  "page_size": 5,
  "page": 1,
  "total": 0,
  "documents": [
    {
      "_self": "https://thewest.com.au/news/offbeat/englishman-wins-world-pie-eating-competition-bc-5689077760001",
      "id": "5689077760001",
      "kind": "video",
      "status": "live",
      "source": "7-News-Perth",
      "publicationDate": "2017-12-21T08:46:00.000Z",
      "lastUpdated": "2017-12-21T08:49:20.864Z",
      "created": "2017-12-21T08:49:20.864Z",
      "primaryTopic": "news/offbeat",
      "secondaryTopics": [
        "news/world"
      ],
      "topics": {
        "primary": {
          "id": "news/offbeat",
          "title": "Offbeat",
          "metadata": {
            
          },
          "seoTitle": "Offbeat",
          "parent": {
            "id": "news",
            "title": "News",
            "metadata": {
              
            },
            "seoTitle": "News",
            "seoDescription": "The latest news at home and across the world featuring news on Western Australia, Australia, the world and other topics you are interested in."
          }
        },
        "secondary": [
          {
            "id": "news/world",
            "title": "World News",
            "metadata": {
              
            },
            "seoTitle": "World",
            "parent": {
              "id": "news",
              "title": "News",
              "metadata": {
                
              },
              "seoTitle": "News",
              "seoDescription": "The latest news at home and across the world featuring news on Western Australia, Australia, the world and other topics you are interested in."
            }
          }
        ]
      },
      "videoDescription": "Martin wolfed down a pie in just 32 seconds.",
      "heading": "Englishman wins world pie-eating competition",
      "homepageHead": "Englishman wins world pie-eating competition",
      "homepageTeaser": "Martin wolfed down a pie in just 32 seconds.",
      "headKicker": "",
      "byline": "",
      "posterImage": {
        "reference": "https://images.thewest.com.au/images/4761797480001/201712/341/4761797480001_5689086380001_5689077760001-vs.jpg?pubId=4761797480001",
        "width": "1280",
        "height": "720",
        "original": {
          "format": "",
          "reference": ""
        }
      },
      "slug": "englishman-wins-world-pie-eating-competition-bc-5689077760001",
      "socialHead": "",
      "socialTeaser": "",
      "isSponsored": false
    },
    {
      "_self": "https://thewest.com.au/news/world/research-finds-married-couples-are-happier-bc-5689075121001",
      "id": "5689075121001",
      "kind": "video",
      "status": "live",
      "source": "7-News-Perth",
      "publicationDate": "2017-12-21T08:38:00.000Z",
      "lastUpdated": "2017-12-21T08:40:32.032Z",
      "created": "2017-12-21T08:40:32.032Z",
      "primaryTopic": "news/world",
      "secondaryTopics": [
        "news/offbeat",
        "lifestyle"
      ],
      "topics": {
        "primary": {
          "id": "news/world",
          "title": "World News",
          "metadata": {
            
          },
          "seoTitle": "World",
          "parent": {
            "id": "news",
            "title": "News",
            "metadata": {
              
            },
            "seoTitle": "News",
            "seoDescription": "The latest news at home and across the world featuring news on Western Australia, Australia, the world and other topics you are interested in."
          }
        },
        "secondary": [
          {
            "id": "news/offbeat",
            "title": "Offbeat",
            "metadata": {
              
            },
            "seoTitle": "Offbeat",
            "parent": {
              "id": "news",
              "title": "News",
              "metadata": {
                
              },
              "seoTitle": "News",
              "seoDescription": "The latest news at home and across the world featuring news on Western Australia, Australia, the world and other topics you are interested in."
            }
          },
          {
            "id": "lifestyle",
            "title": "Lifestyle",
            "metadata": {
              
            },
            "seoTitle": "Lifestyle",
            "seoDescription": "The latest lifestyle content featuring recipes, Perth's best food, health and wellbeing advice and tips for your garden and home."
          }
        ]
      },
      "videoDescription": "British research found married couples are more satisfied than those who are single.",
      "heading": "Research finds married couples are happier",
      "homepageHead": "Marriage makes you happier in middle-age",
      "homepageTeaser": "British research found married couples are more satisfied,",
      "headKicker": "",
      "byline": "",
      "posterImage": {
        "reference": "https://images.thewest.com.au/images/4761797480001/201712/515/4761797480001_5689080994001_5689075121001-vs.jpg?pubId=4761797480001",
        "width": "1280",
        "height": "720",
        "original": {
          "format": "",
          "reference": ""
        }
      },
      "slug": "research-finds-married-couples-are-happier-bc-5689075121001",
      "socialHead": "",
      "socialTeaser": "",
      "isSponsored": false
    },
    {
      "_self": "https://thewest.com.au/news/7-news/virgin-employee-breaks-out-in-song-bc-5688770947001",
      "id": "5688770947001",
      "kind": "video",
      "status": "live",
      "source": "Sunrise",
      "publicationDate": "2017-12-21T00:03:00.000Z",
      "lastUpdated": "2017-12-21T00:05:36.397Z",
      "created": "2017-12-21T00:05:36.397Z",
      "primaryTopic": "news/7-news",
      "secondaryTopics": [
        "news/offbeat",
        "news/christmas"
      ],
      "topics": {
        "primary": {
          "id": "news/7-news",
          "title": "7 News",
          "metadata": {
            
          },
          "seoTitle": "7 News",
          "parent": {
            "id": "news",
            "title": "News",
            "metadata": {
              
            },
            "seoTitle": "News",
            "seoDescription": "The latest news at home and across the world featuring news on Western Australia, Australia, the world and other topics you are interested in."
          }
        },
        "secondary": [
          {
            "id": "news/offbeat",
            "title": "Offbeat",
            "metadata": {
              
            },
            "seoTitle": "Offbeat",
            "parent": {
              "id": "news",
              "title": "News",
              "metadata": {
                
              },
              "seoTitle": "News",
              "seoDescription": "The latest news at home and across the world featuring news on Western Australia, Australia, the world and other topics you are interested in."
            }
          },
          {
            "id": "news/christmas",
            "title": "Christmas",
            "metadata": {
              
            },
            "seoTitle": "Christmas",
            "parent": {
              "id": "news",
              "title": "News",
              "metadata": {
                
              },
              "seoTitle": "News",
              "seoDescription": "The latest news at home and across the world featuring news on Western Australia, Australia, the world and other topics you are interested in."
            }
          }
        ]
      },
      "videoDescription": "A Virgin Australia employee has stunned travellers, singing a Christmas carol",
      "heading": "Virgin employee breaks out in song",
      "homepageHead": "Virgin employee breaks out in song",
      "homepageTeaser": "A Virgin Australia employee has stunned travellers, singing a Christmas carol",
      "headKicker": "Sky high performance",
      "byline": "",
      "posterImage": {
        "reference": "https://images.thewest.com.au/images/4761797480001/201712/3693/4761797480001_5688780995001_5688770947001-vs.jpg?pubId=4761797480001",
        "width": "1280",
        "height": "720",
        "original": {
          "format": "",
          "reference": ""
        }
      },
      "slug": "virgin-employee-breaks-out-in-song-bc-5688770947001",
      "socialHead": "",
      "socialTeaser": "",
      "isSponsored": false
    },
    {
      "_self": "https://thewest.com.au/opinion/inside-cover/city-of-vincent-council-grinches-force-removal-of-tree-swing-ng-b88696466z",
      "id": "B88696466Z",
      "kind": "article",
      "status": "live",
      "source": "The West Australian",
      "publicationDate": "2017-12-20T22:59:00.000Z",
      "created": "2017-12-20T23:04:01.686Z",
      "lastUpdated": "2017-12-21T04:10:15.965Z",
      "primaryTopic": "opinion/inside-cover",
      "secondaryTopics": [
        "news/offbeat",
        "politics/local-government"
      ],
      "topics": {
        "primary": {
          "id": "opinion/inside-cover",
          "title": "Inside Cover",
          "metadata": {
            
          },
          "seoTitle": "Inside Cover",
          "parent": {
            "id": "opinion",
            "title": "Opinion",
            "metadata": {
              
            },
            "seoTitle": "Opinion",
            "seoDescription": "All the latest opinion and analysis of local, national and international events from Western Australia's leading newsroom."
          }
        },
        "secondary": [
          {
            "id": "news/offbeat",
            "title": "Offbeat",
            "metadata": {
              
            },
            "seoTitle": "Offbeat",
            "parent": {
              "id": "news",
              "title": "News",
              "metadata": {
                
              },
              "seoTitle": "News",
              "seoDescription": "The latest news at home and across the world featuring news on Western Australia, Australia, the world and other topics you are interested in."
            }
          },
          {
            "id": "politics/local-government",
            "title": "Local Government",
            "metadata": {
              
            },
            "seoTitle": "Local Government",
            "parent": {
              "id": "politics",
              "title": "Politics",
              "metadata": {
                
              },
              "seoTitle": "Politics",
              "seoDescription": "The latest local, national and international politics news. Find out the decisions politicians are making which could affect you."
            }
          }
        ]
      },
      "heading": "City of Vincent Mayor Emma Cole ‘embarrassed’ by tree swing saga",
      "byline": "Liam Croy",
      "headKicker": "Family heartbroken",
      "homepageHead": "Perth mayor embarrassed by tree swing saga",
      "homepageTeaser": "City of Vincent Mayor Emma Cole said the council would look at policy changes for tree swings.",
      "mainImage": {
        "reference": "https://images.thewest.com.au/publication/B88696466Z/1513829415413_G4I1CP8KH.1-1.jpg",
        "captionText": "The rope swing sign.",
        "original": {
          "format": "image/jpeg",
          "dimensions": "1536x2048",
          "reference": "1513829415413_G4I1CP8KH.1-0.jpg"
        }
      },
      "socialImage": null,
      "mainVideoId": null,
      "posterImage": null,
      "slug": "city-of-vincent-council-grinches-force-removal-of-tree-swing-ng-b88696466z",
      "isSponsored": false,
      "redirectUrl": null,
      "canonicalUrl": null,
      "canonicalTitle": null,
      "blogState": null
    },
    {
      "_self": "https://thewest.com.au/news/7-news/police-go-beyond-call-of-duty-to-save-pet-dog-bc-5688713909001",
      "id": "5688713909001",
      "kind": "video",
      "status": "live",
      "source": "7 Early News",
      "publicationDate": "2017-12-20T22:56:00.000Z",
      "lastUpdated": "2017-12-20T22:58:11.907Z",
      "created": "2017-12-20T22:58:11.907Z",
      "primaryTopic": "news/7-news",
      "secondaryTopics": [
        "news/offbeat"
      ],
      "topics": {
        "primary": {
          "id": "news/7-news",
          "title": "7 News",
          "metadata": {
            
          },
          "seoTitle": "7 News",
          "parent": {
            "id": "news",
            "title": "News",
            "metadata": {
              
            },
            "seoTitle": "News",
            "seoDescription": "The latest news at home and across the world featuring news on Western Australia, Australia, the world and other topics you are interested in."
          }
        },
        "secondary": [
          {
            "id": "news/offbeat",
            "title": "Offbeat",
            "metadata": {
              
            },
            "seoTitle": "Offbeat",
            "parent": {
              "id": "news",
              "title": "News",
              "metadata": {
                
              },
              "seoTitle": "News",
              "seoDescription": "The latest news at home and across the world featuring news on Western Australia, Australia, the world and other topics you are interested in."
            }
          }
        ]
      },
      "videoDescription": "Watch as police rescue a pet dog from a frozen pond",
      "heading": "Police go beyond call of duty to save pet dog",
      "homepageHead": "Police go beyond call of duty to save pet dog",
      "homepageTeaser": "Watch as police rescue a pet dog from a frozen pond",
      "headKicker": "Delicate rescue",
      "byline": "",
      "posterImage": {
        "reference": "https://images.thewest.com.au/images/4761797480001/201712/2013/4761797480001_5688714112001_5688713909001-vs.jpg?pubId=4761797480001",
        "width": "1280",
        "height": "720",
        "original": {
          "format": "",
          "reference": ""
        }
      },
      "slug": "police-go-beyond-call-of-duty-to-save-pet-dog-bc-5688713909001",
      "socialHead": "",
      "socialTeaser": "",
      "isSponsored": false
    }
  ]
} 
*/