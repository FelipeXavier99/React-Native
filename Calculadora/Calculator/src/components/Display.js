// mostra os dados da tela da calculadora!

import React from 'react'
import {StyleSheet,Text,View,} from 'react-native'

const styles = StyleSheet.create({
    //tela
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
    },
    //numeros 
    displayValue: {
        fontSize: 60,
        color: '#fff',
    }
})

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}</Text>
    </View>


{/* LINHA 26 SPO MOSTRA UMA LINHA NA TELA */}