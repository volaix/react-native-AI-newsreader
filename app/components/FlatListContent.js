import React, { Component } from "react"
import { View, Text, FlatList, ActivityIndicator } from "react-native"
import { List } from "react-native-elements"
import Content from "./Content"
import styled, { css } from "styled-components/native"
import { connect } from 'react-redux'
import { fetchNews, increaseCurrentPage } from '../actions'

const ContentContainer = styled.View`
  backgroundColor: green;
  width: 100%;
  height: 100%;
`
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
    this.makeRemoteRequest()
  }

  makeRemoteRequest = async () => {
    await this.props.increaseCurrentPage()
    await this.props.fetchNews(this.props.currentNewsPage)
  }

  renderFooter = () => {
    if (!this.state.loading) return null
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
          data={this.props.newsList}
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
        newsList: state.newsReader.newsList,
        currentNewsPage: state.newsReader.currentNewsPage,
    }
}

const mapDispatchToProps = {
  fetchNews,
  increaseCurrentPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatListContent)