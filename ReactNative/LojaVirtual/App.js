import React from "react";

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Carrinho from "./src/screens/Carrinho";
import Home from "./src/screens/Home";

import { CarrinhoProvider } from "./src/contexts/CarrinhoContext";

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <CarrinhoProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={Home}
            name={'home'}
            options={{
              title: 'Home',
              headerTitleAlign: 'center'
            }}
          />

          <Stack.Screen
            component={Carrinho}
            name={'carrinho'}
            options={{
              title: 'Carrinho',
              headerTitleAlign: 'center'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CarrinhoProvider>
  )
}

export default App