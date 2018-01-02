import React from 'react';
import { View, Text, Button } from 'react-native'
import { Card } from 'react-native-elements'

const ArticleScreen = () => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <Card title='What is this app doing?'>
      <Text>1. Takes the fetch api from thewest.com's 'offbeat' section </Text>
      <Text>2. Displays images, hiding duplicates</Text>
      <Text>3. On button click, sends images to Microsoft Azure's AI vision reader</Text>
      <Text>4. Displays what the azure bot thinks it is seeing.</Text>
      <Text>+bonus! Infinite scrolling!</Text>
    </Card>
  </View>
);

export default ArticleScreen