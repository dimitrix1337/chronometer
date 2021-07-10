
import React from 'react'
import { Text, View } from 'react-native';
import { wp, hp } from '../styles';

export const Timer = (props) => {

    const { milesimas_unidades } = props
    const { milesimas_decenas } = props
    const { segundos_unidades } = props
    const { segundos_decenas } = props
    const { minutos_unidades } = props
    const { minutos_decenas } = props
    const { color_font } = props
  
  
  
    return(
      <View>
      <Text style={{fontSize:(wp('3%')+hp('3%')), marginTop:90,  color:color_font, fontWeight:'bold'}}>{minutos_decenas}{minutos_unidades}:{segundos_decenas}{segundos_unidades}.{milesimas_decenas}{milesimas_unidades}</Text>
      </View>
      )
  
  }
  