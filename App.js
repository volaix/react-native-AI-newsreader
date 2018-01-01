import React from 'react'
import { View } from 'react-native'
import RootNavigator from './app/config/router'
import configureStore from './app/config/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

