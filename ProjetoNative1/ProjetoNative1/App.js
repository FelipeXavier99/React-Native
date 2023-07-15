import React from 'react';
import { View, StyleSheet } from 'react-native';
/*import Primeiro from './components/Primeiro';
import TesteDefatault, { Camp1, Camp2 } from './components/Multi';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';   */
//import Titulo from './components/Titulo';
//import Button from './components/Button';
//import Pai from './components/Indireta/Pai';
//import ContadorV2 from './components/Contador/ContadorV2';
//import ParImpar from './components/ParImpar';
//import Contador from './components/Contador';
import Teste from './components/Teste/Teste';
import Familia from './components/Relacao/Familia';
import Membro from './components/Membro';

export default function App() {
  return (
    <View style={styles.App}>   
     
     <Teste n1={2} n2={4}/>

     
{/* 


 <Titulo principal="Cadastro do Produto"
      segundario="Tela de Cadastro"/>

       <Pai />
      <Button />
      <Contador inicial={100} />

     
     
      <ContadorV2 />
      < ParImpar />
       */}

      {/* Inserindo parametros(tipo declarar Objeto) 1- STRING  2 -Nº INTEIROS 
      <MinMax min="3" max="20"  />  
      <MinMax min={50} max={100}  />  
      <Aleatorio n1={1} n2={10} /> 
*/}
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
    backgroundColor: '#0000FF',     //cor fundo VERMELHO = '#A55
    flexGrow: 1,   // preferencia componente
    justifyContent: 'center',   // deixar centro
    alignItems: "center",   // deixar no meio da tela
    padding: 20    // espaçamentos nas laterias(detalhe está sem  aspas)
    
  }
});
