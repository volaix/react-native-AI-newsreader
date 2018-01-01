import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import InfoScreen from '../screens/InfoScreen'
import HomeScreen from '../screens/HomeScreen'
import { MAIN_COLOR } from './sharedColors';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Info: {
    screen: InfoScreen,
    navigationOptions: {
      headerTitle: 'Info',
      headerStyle: {
        backgroundColor: MAIN_COLOR,
      },
      headerTintColor: 'white',
    },
  },
})

export default RootNavigator;