import React from "react"

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import icon from './icon.png'

const ListLivroItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() => typeof props.onPress === 'function' ? props.onPress() : {}}
      style={estilos.container} 
      >

      <Image
        source={icon}
        style={estilos.icon}
      />

      <View>
        <Text style={estilos.titulo}>
          {props.livro.titulo}
        </Text>
        <Text numberOfLines={ 1 }>
          {props.livro.descricao}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const estilos = StyleSheet.create({
  container: {
    borderBottomColor: '#DDD',
    borderBottomWidth: 2,
    flexDirection: 'row',
    padding: 8
  },
  icon: {
    height: 60,
    marginRight : 8,
    width: 40
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default ListLivroItem