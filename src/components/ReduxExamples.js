import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from '../actions'

import styled, { css }from "styled-components/native"
import { Button } from 'react-native-elements'

const Title = styled.Text`
  font-size: 20.5;
  text-align: center;
  color: palevioletred;
`
const Wrapper = styled.View`
  background: papayawhip;
`

const MainContent = styled.View`
  background: papayawhip;
  margin: 10%;
`

class ReduxExamples extends React.Component {

  handleButtonClick = () => {
    console.log(`handlebuttonclick has been clicked`)
    this.props.fetchData()
  }

  render() {
    return (
      <Wrapper>
        <Title>Redux Examples</Title>
        <Button icon={{name: 'code'}} title='Fetch Data' onPress={this.handleButtonClick} />
        <MainContent>
          {this.props.dataReducer.isFetching && <Text>Loading...</Text>}
          {this.props.dataReducer.data.length ? (
            this.props.dataReducer.data.map((person, i)=>(
              <View key={i + person.name}>
                <Text>Name: {person.name}</Text>
                <Text>Age: {person.age}</Text>
              </View>
            ))
          ) : null }
        </MainContent>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => (
  {
    dataReducer: state.dataReducer
  }
)

const mapDispatchToProps = {
    fetchData,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExamples)