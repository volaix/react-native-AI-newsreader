import React from 'react'
import { Text, View } from 'react-native'
import { VictoryPie } from 'victory-native'

const data = [
  { x: "Cats", y: 35 },
  { x: "Dogs", y: 40 },
  { x: "Birds", y: 55 }
]

export default class SvgExample extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'red' }}>
        <VictoryPie data={data} />
      </View>
    )
  }
}