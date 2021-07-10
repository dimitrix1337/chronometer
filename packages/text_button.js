import React from 'react'

export const TextButton = (props) => {

    const { texto } = props
    const { color } = props

    return(
        <Text style={{color:color, fontSize:'18'}}>
            {texto}
        </Text>
    )

}