// app correto

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Cabecalho from './src/components/Cabecalho';

import Post from './src/components/Post';

import Comments from './src/components/Comments';

export default class App extends Component {
  render() {


    const comments = [{
      nickname: 'Joana da silva',
      comment: 'Sou Dev'
      },{
        
          nickname: 'Zé Vieira',
          comment: 'Dalee'
          },{
      
      }]
      


    return (
      <View style={{ flex: 1 }}>
        <Cabecalho />
        <Post image={require('./assets/imgs/fence.jpg')} 
        comments={comments} />
      </View>

    )

  }
}

const styles = StyleSheet.create({
  App: {
    backgroundColor: '#A55',     //cor fundo AZUL = '#0000FF
    flexGrow: 1,   // preferencia componente
    justifyContent: 'center',   // deixar centro
    alignItems: "center",   // deixar no meio da tela
    padding: 20    // espaçamentos nas laterias DA TELA TODA(detalhe está sem  aspas)

  },
  buttons: {
    flexDirection: 'row',
  }
});
