import styled, { css } from "styled-components/native"
import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { MAIN_COLOR } from "../config/sharedColors";

const TagBoxContainer = styled.View`
  margin-top: 1%;
  backgroundColor: hsl(0, 0%, 85%);
  width: 95%;
  height: 20%;
`
const TagBox = (props) => (
  <TagBoxContainer style={{ alignItems: 'center', justifyContent: 'center' }}>
  {props.generateTagsLoading ? <ActivityIndicator /> : null}
    {
      props.tags ?
        <View style={{ justifyContent: "flex-start" }}>
          <Text numberOfLines={2}>
            Hmm... Is it...
                  <Text style={{ color: MAIN_COLOR }}> {props.textGuess}</Text>
            ? I would say it contains...
                </Text>
          <Text numberOfLines={3} style={{ color: MAIN_COLOR }}>{props.tags}</Text>
          <Text numberOfLines={1}>Does that sound right...? I am
                  <Text style={{ color: MAIN_COLOR }}> {props.confidence}</Text>
            % confident.</Text>
        </View>
        :
        <View >
          <Text>Press the button :)</Text>
        </View>
    }
  </TagBoxContainer>
)

export default TagBox
