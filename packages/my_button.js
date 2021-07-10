import React from 'react'
import { TouchableHighlight, ImageBackground, View, Text } from 'react-native';
import { hp, wp, SetVisual } from '../styles';
export const MyButton = (props) => {

    const { function_passed } = props
    const { color } = props
    const { title } = props
    var root_image = null

    switch (title) {
      case 'START' : root_image = 'play_btn_blackwhite';break;
      case 'STOP' : root_image = 'stop_btn_blackwhite';break;
      default : root_image = 'reset';break;
    }


    
    return(
      <View style={{marginLeft:10, marginTop:hp('7')}}>
        <TouchableHighlight
        underlayColor='white'
        onPress={() => {function_passed()}}>
          <ImageBackground
          source={require('../assets/'+root_image+'.png')} style={{width:60, marginLeft:0, height:60}}>
          <Text  style={{marginTop:70, marginLeft:10, color:'gray', fontWeight:'bold', fontFamily:'arial', fontSize:(wp('1.2')+hp('1.2'))}}>{title}</Text>
          </ImageBackground>
          </TouchableHighlight>
          </View>
  )
  
  }