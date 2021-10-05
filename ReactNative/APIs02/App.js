import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CadastroLivros from "./src/components/screens/CadastroLivros";
import Home from "./src/components/screens/Home";
import Login from "./src/components/screens/Login";
import DescricaoLivro from "./src/components/screens/DescricaoLivro";

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Login}
          name={'login'}
          options={{
            title: 'Login'
          }}
        />

        <Stack.Screen
          component={Home}
          name={'home'}
          options={{
            title: 'Home'
          }}
        />

        <Stack.Screen
          component={CadastroLivros}
          name={'cadastroLivros'}
          options={{
            title: 'Formulário de Livros'
          }}
        />

        <Stack.Screen
          component={DescricaoLivro}
          name={'descricaoLivro'}
          options={{
            title: 'Descrição Livro'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App