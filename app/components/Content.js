const apiKey1 = '366f283c1a95473b95e4800c7623f258'
const apiKey2 = 'fb4ba6ab67f04ef1aabc18d60d3b2795'

const visualFeatures = 'Description'
const location = 'australiaeast'
const requestURL = `https://${location}.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=${visualFeatures}&language=en`

import React from 'react'
import { Image, TouchableOpacity, View, Text, StyleSheet, ImageBackground } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from '../actions'

import styled, { css } from "styled-components/native"

import { Button, Header } from 'react-native-elements'


const MainContent = styled.View`
  background: papayawhip;
  margin: 10%;
`

const ContentView = styled.View`
  backgroundColor: yellow;
  width: 100%;
  height: 100%;
  align-items: center;
`

const ImageContainer = styled.View`
  backgroundColor: grey;
  width: 95%;
  height: 70%;
`

const TempSpacer = styled.View`
  backgroundColor: grey;
  width: 1%;
  height: 1%;
`

const TagBox = styled.View`
  backgroundColor: lime;
  width: 95%;
  height: 20%;
`

const OverlayText = styled.Text`
  color: white;
  font-size: 60;
  background-color: 'rgba(0, 0, 0, .5)';
}
`

class Content extends React.Component {

  state = {
    imageNumber: null,
    tags: null,
    generateTagsLoading: null,
    textGuess: null,
    confidence: null,
  }

  handleButtonClick = () => {
    console.log(`handlebuttonclick has been clicked`)
    const imgURL = this.props.imageURL

    const myBody = JSON.stringify({ "url": imgURL })

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

    fetch(requestURL, init)
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data))
        const tags = data.description.tags.join(', ')
        this.setState(() => ({ tags: tags }))
      })
  }

  render() {
    return (
      <ContentView>
        <TempSpacer />
        <ImageContainer>
          <ImageBackground
            source={{ uri: this.props.imageURL }}
            style={{
              flex: 1,
              alignSelf: 'stretch',
              width: undefined,
              height: undefined,
              backgroundColor: 'rgba(0,0,0,0)',
              overflow: 'hidden',
            }}
          >
          <OverlayText numberOfLines={2} ellipsizeMode='tail'>{this.props.heading.toUpperCase()}</OverlayText>
          </ImageBackground>
        </ImageContainer>

        <Button
          icon={{ name: 'code' }}
          title='Generate Tags'
          onPress={this.handleButtonClick}
          containerViewStyle={{ width: '95%', }}
        />

        <TempSpacer />

        <TagBox>
          {
            this.state.tags ?
              <Text>{this.state.tags}</Text>
              :
              <Text>Tags will go here</Text>
          }
        </TagBox>

      </ContentView>
    )
  }
}

const mapStateToProps = (state) => (
  {
    dataReducer: state.dataReducer
  }
)

const mapDispatchToProps = {
  fetchData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)