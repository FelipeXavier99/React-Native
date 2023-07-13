import React from 'react';
import { View, StyleSheet } from 'react-native';
//import Primeiro from './components/Primeiro';
//import TesteDefatault, { Camp1, Camp2 } from './components/Multi';
import MinMax from './components/MinMax';

export default function App() {
  return (
    <View style={styles.App}>
      <MinMax/>

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
    backgroundColor: '#A55',//cor fundo
    flexGrow: 1,// preferencia componente
    justifyContent: 'center',// deixar centro
    alignItems: "center"// deixar no meio da tela
    
  }
});
