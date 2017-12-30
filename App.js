import React from 'react';
import { View } from 'react-native';
import ReduxApp from './src/ReduxApp'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: 'blue'}}>
        <ReduxApp />
      </View>
    );
  }
}

