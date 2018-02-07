import React from 'react'
import { Image, TouchableOpacity, View, Text, StyleSheet, ImageBackground } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from '../actions'

import styled, { css } from "styled-components/native"

import { Button, Header } from 'react-native-elements'
import { MAIN_COLOR } from '../config/sharedColors';
import TagBox from './TagBox'


const MainContent = styled.View`
  background: papayawhip;
  margin: 10%;
`

const ContentView = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`

const ImageContainer = styled.View`
  flex: 1;
  margin-bottom: 1%;
  backgroundColor: grey;
  width: 95%;
  height: 70%;
`


const OverlayText = styled.Text`
  color: white;
  font-size: 60;
  background-color: 'rgba(0, 0, 0, .5)';
}
`

class Content extends React.Component {

  state = {
    tags: null,
    generateTagsLoading: null,
    textGuess: null,
    confidence: null,
  }

  makeRemoteRequest = async () => {
    //todo connect this up to redux and pass down 
    const result = await azureApi(this.props.imageURL)
    console.log(result) 
    const tags = await result.description.tags.join(', ')
    const textGuess = await result.description.captions[0].text
    const confidenceUnreliable = await (result.description.captions[0].confidence.toFixed(2) * 100)
    const confidence = await Math.floor(confidenceUnreliable)
    this.setState({
      tags,
      textGuess,
      confidence,
      generateTagsLoading: false,
    })
  }

  handleButtonClick = () => {
    this.setState({ generateTagsLoading: true })
    this.makeRemoteRequest()
  }

  imagePress = () => {
    const imageURL = this.props.imageURL
    const articleName = this.props.heading
    const info = this.props.info

    this.props.navigation.navigate('Article', {
      articleName,
      imageURL,
      info
    });
  }

  render() {
    return (
      <ContentView>
        <TouchableOpacity style={{ flex: 1 }} onPress={this.imagePress}>
          <ImageContainer>
            <ImageBackground
              onPress={this.imagePress}
              source={{ uri: this.props.imageURL }}
              style={{
                flex: 1,
                width: '100%',
                height: undefined,
                backgroundColor: 'rgba(0,0,0,0)',
                overflow: 'hidden',
              }}
            >
              <OverlayText numberOfLines={2} ellipsizeMode='tail'>{this.props.heading.toUpperCase()}</OverlayText>
            </ImageBackground>
          </ImageContainer>
        </TouchableOpacity>

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