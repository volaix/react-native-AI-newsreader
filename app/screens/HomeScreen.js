import React from 'react'
import { View, Text, AppRegistry, StyleSheet, FlatList } from 'react-native'
import { Header } from 'react-native-elements'
import styled, { css } from "styled-components/native"
import Content from '../components/Content'
import FlatListContent from '../components/FlatListContent'
import { Icon } from 'react-native-elements'
import { MAIN_COLOR } from '../config/sharedColors'


const ReduxAppView = styled.View`
  flex: 1;
  backgroundColor: white;
  align-items: center;
  justify-content: center;
`
class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {

    const headerRight = (
      <Icon name={'info-outline'} onPress={() => { navigation.navigate('Info') }} />
    )

    return {
      title: 'News Reader',
      headerRight,
      headerStyle: {
        backgroundColor: MAIN_COLOR,
      },
      headerTintColor: 'white',
      //todo move icon to a new function thing
    }
  }

  render() {
    return (
        <ReduxAppView>
          <View style={{ width: '100%', }}>
            <FlatListContent />
          </View>
        </ReduxAppView>
    )
  }
}

export default HomeScreen