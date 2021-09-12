import React from 'react';
import { StatusBar } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Alterar from './pages/Alterar';
import AlterarEmail from './pages/AlterarEmail'
import AlterarSenha from './pages/AlterarSenha';
import Cadastrar from './pages/Cadastrar';
import Entrar from './pages/Entrar'
import Home from './pages/Home'
import LimparBanco from './pages/LimparBanco';
import Welcome from './pages/Welcome'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#e6ffff"
        barStyle="dark-content"
        hidden={false}
        translucent={true} 
      />

      <Stack.Navigator>
        <Stack.Screen
          component={Home}
          name="home"
          options={{
            title: 'My Home',
            headerStyle: headerStyleStackScreen,
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          component={Alterar}
          name="alterar"
          options={{
            title: 'Alterar Dados',
            headerStyle: headerStyleStackScreen,
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          component={AlterarEmail}
          name="alterarEmail"
          options={{
            title: 'Alterar Email',
            headerStyle: headerStyleStackScreen,
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          component={AlterarSenha}
          name="alterarSenha"
          options={{
            title: 'Alterar Senha',
            headerStyle: headerStyleStackScreen,
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          component={Cadastrar}
          name="cadastrar"
          options={{
            title: 'Cadastrar',
            headerStyle: headerStyleStackScreen,
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          component={Entrar}
          name="entrar"
          options={{
            title: 'Entrar',
            headerStyle: headerStyleStackScreen,
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          component={LimparBanco}
          name="limparBanco"
          options={{
            title: 'Limpar Banco',
            headerStyle: headerStyleStackScreen,
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          component={Welcome}
          name="welcome"
          options={{
            title: 'Welcome',
            headerStyle: headerStyleStackScreen,
            headerTitleAlign: 'center'
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const headerStyleStackScreen = {
  backgroundColor: '#e6ffff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

export default App;