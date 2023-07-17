import React, { useState } from 'react';
import { Text, Button, TextInput, View } from 'react-native';
import Estilo from '../estilo';

export default function InputNumeros(props) {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');

  const calcularSoma = () => {
    const resultado = parseInt(numero1) + parseInt(numero2);
    console.warn(resultado);
  };

  const calcularSubtracao = () => {
    const resultado = parseInt(numero1) - parseInt(numero2);
    console.warn(resultado);
  };

  return (
    <View>
      <Text style={Estilo.txtG}>Digite dois números:</Text>
      <TextInput
        style={Estilo.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={numero1}
        onChangeText={text => setNumero1(text)}
      />
      <TextInput
        style={Estilo.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={numero2}
        onChangeText={text => setNumero2(text)}
      />

<Button title="1" ></Button>
      <Button title="Calcular Soma" onPress={calcularSoma} />
      <Button title="Calcular Subtração" onPress={calcularSubtracao} />
    </View>
  );
}
