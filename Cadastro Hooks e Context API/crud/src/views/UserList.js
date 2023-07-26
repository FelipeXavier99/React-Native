
//lista dos nomes,avatares e ícones


import React, { useContext } from 'react';
import { View, FlatList,Alert } from 'react-native';
import users from '../data/users9';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements';
import UsersContext from '../context/UserContext2';

export default props => {

  useContext(UsersContext)


//aqui mostra os avatares com o email e a linha 11 chama o botao pra chamar a página
  function getUserItem({ item: user }) {
    return (
      <ListItem bottomDivider onPress={() => props.navigation.navigate('UserForm')}>
        <Avatar source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        { getActions(user)}
      </ListItem>
    );
  }

  //acção pra mostrar o ícone edit e excluir q invoca na linha 17
  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
         <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
      </>
    );
  }

//ACAO PRA EXCLUIR
  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
        {
            text: 'Sim',
            onPress() {
              console.warn('delete '+ user.id)
            }
        },
        {
            text: 'Não'
        }
    ])
}

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
}
