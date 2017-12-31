import React from 'react'
import { View, Text, AppRegistry, StyleSheet, FlatList } from 'react-native'
import { Header } from 'react-native-elements'
import styled, { css } from "styled-components/native"
import Content from './components/Content'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import FlatListContent from './components/FlatListContent'

const store = configureStore()

const HeaderContainer = styled.View`
  backgroundColor: red;
  width: 100%;
  height: 10%;
`

const ReduxAppView = styled.View`
  flex: 1;
  backgroundColor: white;
  align-items: center;
  justify-content: center;
`

class TopHeader extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Header
          centerComponent={{ text: 'Reader', style: { color: '#fff' } }}
          rightComponent={{ icon: 'info', color: '#fff' }}
        />
      </HeaderContainer>
    )
  }
}

const ReduxApp = () => (
  <Provider store={store}>
    <ReduxAppView>
      <TopHeader />
      <FlatListContent />
    </ReduxAppView>
  </Provider>
)

export default ReduxApp