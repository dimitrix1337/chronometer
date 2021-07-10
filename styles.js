import { StyleSheet  } from "react-native";
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

export var wp = widthPercentageToDP
export var hp = heightPercentageToDP

export var Color_set = ['#000807', '#A2A3BB', '#9395D3']


export const SetVisual = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:Color_set[1],
      marginTop:0
    },
    box_1:{
      backgroundColor:Color_set[0],
      width:wp('100%'),
      height:hp('55%'),
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      marginBottom:0
    },
    box_2:{
      backgroundColor:Color_set[2],
      width:wp('100%'),
      height:hp('15%'),
      justifyContent:'flex-start',
      alignContent:'center',
      alignItems:'center',
    },

    button:{
      borderRadius:25,
      alignContent:'center',
      alignItems:'center',
      padding:5,
      justifyContent:'center',
    },
    start_button:{
      marginLeft:-(wp('40%'))
    },
    pause_button:{
      marginLeft:(wp('40%')),
      marginTop:-(hp('0'))
    },
    limit_input:{
      borderRadius:25,
      backgroundColor:Color_set[0],
      width:wp('60'),
      height:wp('15'),
      fontSize:50,
      padding:20,
      justifyContent:'center',
      alignContent:'center',
      color:'white',
      textAlign:'center'
    },
    circle_back:{
      width:wp('10'),
      height:hp('10'), 
      justifyContent:'center',
      alignItems:'center',
      padding:50
    },
    limit_mode:{
      fontWeight:'1000',
      fontFamily:'arial',
      marginLeft:-wp('13'),
      fontSize:hp('1.2')+wp('1.2')
    },
    limit_mode_background:{
      backgroundColor:'white',
      borderRadius:100,
      height:40,
      width:wp('45'),
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      marginLeft:wp('85'),
      marginTop:hp('1')
    },
    records_background:{
      width:wp('100'),
      height:hp('100'),
      flex:1,
      backgroundColor:'white'
    },
    records_list:{
      width:wp('90'),
      height:hp('90'),
      margin:(wp('2')+hp('2')),
      backgroundColor:'red',
      borderRadius:5
    },
    records_title:{
      color:'red',
      fontSize:(wp('4')+hp('4')),
      marginLeft:150,
      
    },
    each_record:{
      margin:(hp('2')+wp('2')),
      width:wp('40'),
      height:(hp('40')),
      color:'white'
    }
  });