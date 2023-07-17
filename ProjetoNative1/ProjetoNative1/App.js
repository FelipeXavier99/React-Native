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
//import Teste from './components/Teste/Teste';
//import Familia from './components/Relacao/Familia';
//import UsuarioLogado from './components/UsuarioLogado';
//import ListaProdutos from './components/Produtos/ListaProdutos';
//import ListaProdutosV2 from './components/Produtos/ListaProdutosV2';
//import DigiteSeuNome from './components/DigiteSeuNome';
//import Quadrado from './components/layout/Quadrado';
//import Flex1 from './components/layout/Flex1';
//import Flex2 from './components/layout/Flex2';
//import Flex3 from './components/layout/Flex3';
import Flex4 from './components/layout/Flex4';



export default function App() {
  return (
    <View style={styles.App}>   
     
<Flex4/>

 
     
{/* 
<Flex3/>
< Flex2 />
<Flex1 />
<Quadrado />
<Quadrado cor= '#0F0'/>

<DigiteSeuNome />
<Teste n1={2} n2={4}/>
<ListaProdutos />
<ListaProdutosV2 />

  <UsuarioLogado usario = {{nome:'Bi',email:'b@gmail.com'}}   />
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
    backgroundColor: '#A55',     //cor fundo AZUL = '#0000FF
    flexGrow: 1,   // preferencia componente
    justifyContent: 'center',   // deixar centro
    alignItems: "center",   // deixar no meio da tela
    padding: 20    // espaçamentos nas laterias DA TELA TODA(detalhe está sem  aspas)
    
  }
});
