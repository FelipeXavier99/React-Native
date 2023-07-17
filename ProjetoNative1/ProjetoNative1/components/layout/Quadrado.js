import React from 'react'
import { View } from 'react-native'


export default props => {
    const lado = props.lado || 50
    return (
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.cor || '#000'
        }} />
    )
}


{/* se tirar o width e botar    alignItems: "stretch", no qruivo Flex2 os elementos se esticam! */}