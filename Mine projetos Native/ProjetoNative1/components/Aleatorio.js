import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'


export default (props) => {
    
{/*outro jeito declarar variáveis
let { n1,n2}=props

n1+=100
n2+=200
console.warn(n1)
*/}

    const delta = props.n2 - props.n1 + 1  //delta pode ser padrão valor 10
    const aleatorio = parseInt(Math.random() * delta) + props.n1

    
    return (
        <Text style={Estilo.txtG}>
            Valor Aleatório de 1 e 10 = {aleatorio}
        </Text>
    )
}