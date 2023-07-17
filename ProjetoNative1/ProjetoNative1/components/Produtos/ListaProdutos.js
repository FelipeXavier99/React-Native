// USANDO map PRA MOSTRRAR LISTAS!

import React from 'react'
import {  Text } from 'react-native'
import Estilo from '../estilo'
import Produtos from './Produtos'


export default propos => {
return (

<>
<Text style={Estilo.txtG}>
LISTA
</Text>

{Produtos.map (p=>{
return <Text>   {p.id} {p.nome} tem R$ {p.preco}   </Text>
}
)}

</>

   )
}