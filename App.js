import React from 'react';
import { View } from 'react-native';
import RootNavigator from './app/config/router'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: 'blue'}}>
      <RootNavigator />
        {/* <ReduxApp /> */}
      </View>
    );
  }
}

