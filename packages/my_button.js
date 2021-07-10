import React from 'react'
import { View, Text } from 'react-native';
import { hp, wp } from '../styles';
export const MyButton = (props) => {

    const { function_passed } = props
    const { color } = props
    const { title } = props
    
    return(
        <View >

          <Text onPress={() => {function_passed()}} style={{marginLeft:0, color:color, fontWeight:'50', fontFamily:'arial', fontSize:(wp('2.3')+hp('2.3'))}}>{title}</Text>
          </View>
  )
  
  }