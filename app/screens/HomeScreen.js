import React from 'react'
import { View, Text, Button } from 'react-native'
import { Icon } from 'react-native-elements'
import { MAIN_COLOR } from '../config/sharedColors';

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        {console.log(this.props)}
        <Button
          onPress={() => this.props.navigation.navigate('Info')}
          title="Go to details"
        />
        <Text>New text inside home</Text>
      </View>
    )
  }
}

export default HomeScreen