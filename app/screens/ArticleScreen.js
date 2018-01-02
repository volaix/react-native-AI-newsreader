import React from 'react';
import { View, Text, Button } from 'react-native'
import { Card } from 'react-native-elements'

const ArticleScreen = () => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <Card title='What is this app doing?'>
      <Text>TODO display individual articles here</Text>
    </Card>
  </View>
);

export default ArticleScreen