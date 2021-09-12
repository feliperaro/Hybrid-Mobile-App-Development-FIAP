import React from 'react';
import {
  StatusBar
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home'
import Entrar from './pages/Entrar'
import Cadastrar from './pages/Cadastrar';
import Welcome from './pages/Welcome'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#C6CFCC"
        barStyle="dark-content"
        hidden={false}
        translucent={true} />

      <Stack.Navigator>
        <Stack.Screen
          component={Home}
          name="home"
          options={{
            title: 'Home'
          }}
        />

        <Stack.Screen
          component={Cadastrar}
          name="cadastrar"
          options={{
            title: 'Cadastrar',
          }}
        />

        <Stack.Screen
          component={Entrar}
          name="entrar"
          options={{
            title: 'Entrar',
          }}
        />

        <Stack.Screen
          component={Welcome}
          name="welcome"
          options={{
            title: 'Welcome',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;