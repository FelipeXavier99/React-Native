import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'


export default propos => 
    
<React.Fragment> 
        <Text style={Estilo.txtG} > {propos.principal} </Text>
        <Text> {propos.segundario}  </Text>
        </React.Fragment>


// no lugar do <React.Fragment>  pode alterar por <>    <>