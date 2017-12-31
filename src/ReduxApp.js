import React from 'react'
import { View, Text, AppRegistry, StyleSheet, FlatList } from 'react-native'
import { Header } from 'react-native-elements'
import styled, { css }from "styled-components/native"
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

class TopHeader extends React.Component{
  render(){
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
    <View style={styles.container}>
      <TopHeader />
      <FlatListContent />
    </View>
  </Provider>
)

export default ReduxApp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
