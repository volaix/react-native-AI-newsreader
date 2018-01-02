import React from 'react';
import { View, Text, } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { MAIN_COLOR } from '../config/sharedColors';

class ArticleScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Article: ${navigation.state.params.articleName}`,
  })

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Card
          title={params.articleName}
          titleStyle={{fontSize: 40}}
          image={{ uri: params.imageURL }}
        >
        <Text style={{color: 'grey'}}>{params.info}</Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor={MAIN_COLOR}
            buttonStyle={{ width: '100%', marginTop: '5%' }}
            title='This world is preposterous!' />
        </Card>
      </View>
    )
  }
}


export default ArticleScreen