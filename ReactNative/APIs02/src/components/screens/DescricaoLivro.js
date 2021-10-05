import React, { useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native'

import { Button } from "react-native-elements";

import { deleteLivro } from "../../services/LivroService";

const DescricaoLivro = (props) => {

  const { livro, isAdmin, token } = props.route.params

  useEffect(() => {
    props.navigation.setOptions({ title : livro.titulo})
  }, [])

  return (
    <View style={estilos.container}>
      <Text>Título:</Text>
      <Text>{livro.titulo}</Text>

      <View style={{ marginBottom: 16 }} />

      <Text>Descrição:</Text>
      <Text>{livro.descricao}</Text>

      <View style={{ marginBottom: 16 }} />

      <Text>Autor:</Text>
      <Text>{livro.autor}</Text>

      <View style={{ marginBottom: 16 }} />

      <Text>Editora:</Text>
      <Text>{livro.editora}</Text>

      <View style={{ marginBottom: 16 }} />

      <Text>Páginas:</Text>
      <Text>{livro.paginas}</Text>

      <View style={{ marginBottom: 16 }} />

      {isAdmin && (
        <Button
          buttonStyle={{ backgroundColor : '#F00'}}
          icon={{
            color: '#FFF',
            name: 'trash',
            type: 'font-awesome-5'
          }}
          onPress={() => {
            deleteLivro( token, livro.id )
              .then(() => {
                Alert.alert('Sucesso!', 'Livro excluído com sucesso!')
                props.navigation.goBack()
              })
              .catch(() => Alert.alert('Erro', 'Não foi possível exluir o livro!'))
          }}
          title='Excluir'
        />
      )}
    </View>
  )
}

const estilos = StyleSheet.create({
  container : {
    padding : 16
  },
  label : {
    fontSize : 18,
    fontWeight : 'bold'
  }
})

export default DescricaoLivro