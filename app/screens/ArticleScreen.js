import React from 'react';
import { View, Text, Button } from 'react-native'
import { Card } from 'react-native-elements'

class ArticleScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Article: ${navigation.state.params.articleName}`,
  })

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Card title={params.articleName}>
          <Text>TODO display individual articles here</Text>
        </Card>
      </View>
    )
  }
}


export default ArticleScreen