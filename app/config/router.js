import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import InfoScreen from '../screens/InfoScreen'
import HomeScreen from '../screens/HomeScreen'
import ArticleScreen from '../screens/ArticleScreen'
import { MAIN_COLOR, TEXT_DARKGREY } from './sharedColors';

const RootNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Info: {
    screen: InfoScreen,
    navigationOptions: {
      headerTitle: 'Info',
      headerTitleStyle: { color: TEXT_DARKGREY },
      headerTintColor: MAIN_COLOR,
    },
  },
  Article: { screen: ArticleScreen }
})

export default RootNavigator;