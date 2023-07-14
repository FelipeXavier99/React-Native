import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default ({ num = 0 }) => {

    
    return (
        num % 2 === 0
            ? <Text style={Estilo.txtG}> PAR </Text>
            : <Text style={Estilo.txtG}> IMPAR </Text>

    )


}

/*CONDIÇAO ANTIGA E MAIS ROBUSTA

if(num % 2===0){
    return(
    <Text style={Estilo.txtG}> PAR </Text>
    )
}else{
    return(
    <Text style={Estilo.txtG}> IMPAR </Text>
    )
}


*/