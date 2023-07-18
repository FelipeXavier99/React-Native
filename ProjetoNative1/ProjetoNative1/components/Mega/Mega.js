//Usando Classes 

import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './MegaNum'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1   //numero aleatório entre 1 e 60
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Qtde de Números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row', 
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}

{/*- linha 47 mostra nº numericos na tela do celular pra DIGITAR!
- <Text> {this.state.numeros.join(,)} // SEPARA O ARRAY EM VÍRGULAS!

-Outra repeticao!
gerarNumeros = ()=>{
    const { qtdNuemros}=this.state
    const numeros=[]
for (ket i = 0; i <qtdNumeros; i++){
    const n =this.gerarNumeroNaoContifo(numero)
    numero.push(n)
}
numero.sort{(a,b)=> a-b}
this.setState ({numeros})
}



-LINHA 59:  flexDirection: 'row' = DEIXA LADO A LADO


}
*/}