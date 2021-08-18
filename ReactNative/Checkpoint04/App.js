import React from 'react';
import {
  StatusBar
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home'
import Welcome from './pages/Welcome';

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
            title: 'Home Page',
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