import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserList from './src/views/UserList'
import UserForm from './src/views/UserForm'
import { Button, Icon } from 'react-native-elements'  //tem q ser aqui e nao import icons



const Stack = createStackNavigator()

export default props => {
  return (

    <NavigationContainer>

     { /* ROTAS*/}
      <Stack.Navigator
        initialRouteName="UserList"
          screenOptions={screenOptions}>    

        <Stack.Screen
          name="UserList"
          component={UserList}
          options={({ navigation }) => {
            return {
                title: "Lista de Usuários",
                headerRight: () => (
                  
                    <Button
                        onPress={() => navigation.navigate("UserForm")}
                        type="clear"
                        icon={<Icon name="add" size={25} color="white" />}
                    />
                )
            }
        }}
    />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
        />
        </Stack.Navigator>
        </NavigationContainer>

        
  )

}

//cor laranja para rotas e usando na LINHA 19!
const screenOptions = {
  headerStyle: {
      backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',  // letras brancas
  headerTitleStyle: {     //fonte
    fontWeight: 'bold'
}

}


//linha 30 chama a outra tela!