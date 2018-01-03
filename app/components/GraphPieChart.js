import React from 'react'
import { Text } from 'react-native'
// import {PieChart} from "native-charts";
import { Card } from 'react-native-elements'

class GraphPieChart extends React.Component {
    render(){(
<Card>
        <Text>Hello World</Text>
</Card>
    )}
}

let data = [
    {
        value: 1500,
        label: "A",
        key: "0",
        fill:"#2196F3",
        children:[
                {
                    value: 2500,
                    label: "A1",
                    key: "11",
                    fill:"#F44336"
                },
                {
                    value: 3000,
                    label: "A2",
                    key: "12",
                    fill:"red"
                }
        ]
    },
    {
        value: 2500,
        label: "B",
        key: "1",
        fill:"#F44336"
    },
    {
        value: 3000,
        label: "C",
        key: "3",
        fill:"red"
    }
];

<PieChart data={data}/>


export default GraphPieChart