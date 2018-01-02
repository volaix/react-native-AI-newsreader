import React, { Component } from "react"
import { View, Text, FlatList, ActivityIndicator } from "react-native"
import { Card, List } from "react-native-elements"
import Content from "./Content"
import styled, { css } from "styled-components/native"
import { connect } from 'react-redux'
import { fetchNews, increaseCurrentPage } from '../actions'

const ContentContainer = styled.View`
  backgroundColor: hsl(0, 0%, 95%);
  width: 100%;
  height: 100%;
`

const ContentBox = styled.View`
  height: 500px;
`

const Seperator = styled.View`
  height: 1;
  margin-top: 30;
  backgroundColor: hsl(120, 2%, 81%),
  margin-bottom: 20;
`

const ContentViewInContainer = styled.View`
  backgroundColor: black;
`

class FlatListContent extends Component {

  componentDidMount() {
    this.makeRemoteRequest()
  }

  makeRemoteRequest = async () => {
    await this.props.increaseCurrentPage()
    await this.props.fetchNews(this.props.currentNewsPage)
  }

  endReached = () => {
    this.makeRemoteRequest()
  }

  renderFooter = () => {
    if (!this.props.isFetching) return null
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

  renderSeparator = () => {
    return (
      <Seperator />
    )
  }

  renderHeader = () => {
    return (
      <View style={{marginBottom: 20}} />
    )
  }

  render() {
    return (
      <ContentContainer> 
        <FlatList
          ListFooterComponent={this.renderFooter}
          data={this.props.newsList}
          onEndReached={this.endReached}
          keyExtractor={ (item, index) => item.heading} 
          ItemSeparatorComponent = {this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          renderItem={( { item, index }) => ( 
            <ContentBox >
              <Content 
              heading={item.heading}
              imageURL = { item.imageURL }
              navigation = {this.props.navigation}
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
        isFetching: state.newsReader.isFetching,
    }
}

const mapDispatchToProps = {
  fetchNews,
  increaseCurrentPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatListContent)