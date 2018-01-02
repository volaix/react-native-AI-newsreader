import React from 'react'
import { Image, TouchableOpacity, View, Text, StyleSheet, ImageBackground } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from '../actions'

import styled, { css } from "styled-components/native"

import { Button, Header } from 'react-native-elements'
import { MAIN_COLOR } from '../config/sharedColors';
import azureApi from '../apis/azureApi';


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

const TagBox = styled.View`
  margin-top: 1%;
  backgroundColor: hsl(0, 0%, 85%);
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

  makeRemoteRequest = async () => {
    //todo connect this up to redux and pass down 
    const result = await azureApi(this.props.imageURL)
    console.log(`response from azureApi`, result)
    const tags = await result.description.tags.join(', ')
    const textGuess = await result.description.captions[0].text
    const confidence = await result.description.captions[0].confidence.toFixed(2) * 100
    this.setState({ tags, textGuess, confidence })
  }

  handleButtonClick = () => {
    this.makeRemoteRequest()
  }

  imagePress = () => {
    console.log('hello', this.props.heading)
    const articleName = this.props.heading
    this.props.navigation.navigate('Article', { articleName, });
  }

  render() {
    return (
      <ContentView>
        <TouchableOpacity style={{flex:1}} onPress={this.imagePress}>
          <ImageContainer>
            <ImageBackground
              onPress={this.imagePress}
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
        </TouchableOpacity>

        <Button
          icon={{ name: 'code' }}
          title='Phone, what do you think this is?'
          onPress={this.handleButtonClick}
          containerViewStyle={{ width: '95%', }}
          backgroundColor={MAIN_COLOR}
        />

        <TagBox style={{ alignItems: 'center', justifyContent: 'center' }}>
          {
            this.state.tags ?
              <View style={{ justifyContent: "flex-start" }}>
                <Text numberOfLines={2}>
                  Hmm... Is it...
                  <Text style={{ color: MAIN_COLOR }}> {this.state.textGuess}</Text>
                  ? I would say it contains...
                </Text>
                <Text numberOfLines={3} style={{ color: MAIN_COLOR }}>{this.state.tags}</Text>
                <Text numberOfLines={1}>Does that sound right...? I am
                  <Text style={{ color: MAIN_COLOR }}> {this.state.confidence}</Text>
                  % confident.</Text>
              </View>
              :
              <View >
                <Text>Press the button :)</Text>
              </View>
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