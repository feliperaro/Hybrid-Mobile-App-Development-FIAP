import React from 'react'
import {
  Button,
  Text,
  View
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const Home = (props) => {
  return (
    <View>
      <Text>Exemplo de Navegação</Text>
      <Button 
        onPress={ () => {
          props.navigation.navigate('outraTela', {
            nome : 'Felipe Roque'
          })
        }}
        title="Abrir outra tela" 
      />
    </View>
  )
}

const OutraTela = (props) => {
  const {nome} = props.route.params || ''

  return (
    <View>
      <Text>Outra tela</Text>
      <Text>Olá { nome }!</Text>
      <Button 
        onPress={ () => {
          props.navigation.goBack()
        }}
        title="Voltar"
      />
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : '#F00'
          },
          headerTintColor : '#FFF',
        }}>
        <Stack.Screen 
        component={ Home }
        name="home" 
        options={{
          title : 'Tela inicial'
        }}
        />
        
        <Stack.Screen 
        component={ OutraTela }
        name="outraTela" 
        options={{
          title : 'Outra tela'
        }}
        />
      </Stack.Navigator> */}

      {/* <Tab.Navigator>
        <Tab.Screen 
          name='home' 
          component={ Home } 
          options={{
            tabBarBadge : 10,
            title : 'Tela inicial'
          }}
        />

        <Tab.Screen 
          name='outraTela' 
          component={ OutraTela } 
          options={{
            title : 'Outra tela'
          }}
        />
      </Tab.Navigator> */}

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={ Home } 
          options={{
            title : 'Tela inicial'
          }}
          />
        <Drawer.Screen 
          name="outraTela" 
          component={ OutraTela } 
          options={{
            title : 'Outra tela'
          }}
          />
      </Drawer.Navigator>

    </NavigationContainer>
  )
}

export default App