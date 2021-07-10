import React from 'react'
import { StyleSheet } from 'react-native';
import { SetVisual } from '../styles';

export const TextButton = (props) => {

    const { texto } = props
    const { color } = props

    return(
        <Text style={{color:color, fontSize:'18'}}>
            {texto}
        </Text>
    )

}