import React from 'react'
import { Button } from 'react-native'

export default props => {

    function gerarNumero(min, max) {
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min
    }

    return (
        <Button
            title="Executar"
            onPress={function() {
                const n = gerarNumero(props.min, props.max)
                n % 2 === 0
                ? props.funcao(n, 'O valor é PAR: ')
                :props.funcao(n, 'O valor é ÍMPAR: ')
            }}
        />
    )
}