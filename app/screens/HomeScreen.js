import React from 'react'
import { View, Text, AppRegistry, StyleSheet, FlatList } from 'react-native'
import { Header } from 'react-native-elements'
import styled, { css } from "styled-components/native"
import Content from '../components/Content'
import FlatListContent from '../components/FlatListContent'
import { Icon } from 'react-native-elements'
import { MAIN_COLOR } from '../config/sharedColors'

const HomeScreenView = styled.View`
  flex: 1;
  backgroundColor: white;
  align-items: center;
  justify-content: center;
  background-color: red;
`

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const headerRight = (
      <View style={{marginRight: 10}}>
        <Icon
          name={'info-outline'}
          color={MAIN_COLOR}
          onPress={() => { navigation.navigate('Info') }} />
      </View>
    )

    return {
      title: 'News Reader',
      headerRight,
      headerTintColor: 'dimgrey',
    }
  }

  render() {
    return (
      <HomeScreenView>
        <FlatListContent navigation={this.props.navigation} />
      </HomeScreenView>
    )
  }
}

export default HomeScreen