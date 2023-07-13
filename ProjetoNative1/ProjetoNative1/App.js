import React from 'react';
import { View, StyleSheet } from 'react-native';
//import Primeiro from './components/Primeiro';
//import TesteDefatault, { Camp1, Camp2 } from './components/Multi';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';

export default function App() {
  return (
    <View style={styles.App}>

      {/* Inserindo parametros(tipo declarar Objeto) 1- STRING  2 -Nº INTEIROS */}
      <MinMax min="3" max="20"  />  
      <MinMax min={50} max={100}  />  
      <Aleatorio n1={1} n2={10} /> 

      {/*
      <TesteDefatault />
      <Camp1 />
      <Camp2 />
      <Primeiro />
  */}
    </View>
  );
}

const styles = StyleSheet.create({
  App: {
    backgroundColor: '#A55',     //cor fundo
    flexGrow: 1,   // preferencia componente
    justifyContent: 'center',   // deixar centro
    alignItems: "center",   // deixar no meio da tela
    padding: 20    // espaçamentos nas laterias(detalhe está sem  aspas)
    
  }
});
