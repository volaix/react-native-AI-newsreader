import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import InfoScreen from '../screens/InfoScreen'


class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Great',
      headerRight: <Icon name={'info-outline'} onPress={() => { navigation.navigate('Info') }} />,
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



const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Info: {
    screen: InfoScreen,
    navigationOptions: {
      headerTitle: 'Info',
    },
  },
})

export default RootNavigator;