import React, { Component } from "react"
import { View, Text, FlatList, ActivityIndicator } from "react-native"
import { List } from "react-native-elements"
import Content from "./Content"
import styled, { css } from "styled-components/native"
import { connect } from 'react-redux'

const ContentContainer = styled.View`
  backgroundColor: green;
  width: 100%;
  height: 90%;
`
//TODO: Fix height so it's a percentage
const ContentBox = styled.View`
  backgroundColor: yellow;
  height: 500px;
`

const ContentViewInContainer = styled.View`
  backgroundColor: black;
`

class FlatListContent extends Component {
  state = {
    loading: false,
    data: [{key: 'a'}, {key: 'b'}, {key: 'c'}],
    page: 1,
    error: null,
    refreshing: false,
    todoSagaData: [],
    sagaState: 'im default from flatlistcontent',
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page } = this.state
    const url = `https://content.thewest.com.au/v3/publication?page=${page}&page_offset=0&page_size=5&topics=news%2Foffbeat`
    const pageAddOne = this.state.page + 1
    this.setState({ loading: true, page:pageAddOne });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const relevantData = res.documents.map((item, index) => {

          const imageURL = item.posterImage ? item.posterImage.reference : item.mainImage.reference
          const heading = item.heading

          return {
            heading,
            imageURL,
          }
        })

        this.setState( prevState => ({
          loading: false,
          todoSagaData: [...prevState.todoSagaData, ...relevantData],
        }))
      })
      
      .catch(error => {
        console.log('there was an error, TODO make an error message display')
        console.log('the error is', error)
        this.setState({ error, loading: false });
      });
  };


  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE",
          justifyContent: 'center',

        }}
      >
        <Text>Pinging the Internet...</Text>
        <ActivityIndicator animating size="large" />
      </View>
    )
  }

  endReached = () => {
    console.log('ive reached the end of the scroll')
    this.makeRemoteRequest()
  }

  render() {
    return (
      <ContentContainer> 
        <FlatList
          ListFooterComponent={this.renderFooter}
          data={this.state.todoSagaData}
          onEndReached={this.endReached}
          keyExtractor={ (item, index) => item.heading} 
          renderItem={( { item, index }) => ( 
            <ContentBox >
              <Content 
              heading={item.heading}
              imageURL = { item.imageURL }
              />
            </ContentBox>
          )}
        />
      </ContentContainer>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
        newsList: state.newsReader.newsList
    }
}

export default connect(mapStateToProps)(FlatListContent)