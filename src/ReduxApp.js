import React from 'react'
import { View, Text, AppRegistry, StyleSheet, FlatList } from 'react-native'
import ReduxExamples from './components/ReduxExamples'
import styled, { css }from "styled-components/native"
import Content from './components/Content'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import FlatListContent from './components/FlatListContent';

const store = configureStore()

const Header = styled.View`
  backgroundColor: red;
  width: 100%;
  height: 10%;
`
const Footer = styled.View`
  backgroundColor: aqua;
  width: 100%;
  height: 3%;
`

const ReduxApp = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Header />
      <FlatListContent />
      <Footer />
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