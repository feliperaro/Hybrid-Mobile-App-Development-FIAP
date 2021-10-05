import React, { useState } from "react";
import {
  Alert,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native'

import { Button, Input } from 'react-native-elements'

import { postLivro } from '../../services/LivroService'

const CadastroLivros = (props) => {

  const { token } = props.route.params

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [autor, setAutor] = useState('')
  const [editora, setEditora] = useState('')
  const [paginas, setPaginas] = useState('')

  const validar = () => {
    if (titulo.trim().length === 0) {
      Alert.alert('Erro', 'Título não foi informado!')
      return false
    }

    if (descricao.trim().length === 0) {
      Alert.alert('Erro', 'Descrição não foi informada!')
      return false
    }

    if (autor.trim().length === 0) {
      Alert.alert('Erro', 'Autor não foi informado!')
      return false
    }

    if (editora.trim().length === 0) {
      Alert.alert('Erro', 'Editora não foi informada!')
      return false
    }

    if (paginas.trim().length === 0) {
      Alert.alert('Erro', 'Páginas não foram informadas!')
      return false
    }

    return true
  }

  const salvar = () => {
    if (validar()) {
      postLivro(token, titulo, descricao, editora, autor, paginas)
        .then(() => {
          Alert.alert('Sucesso', 'Cadastro de livro realizado com sucesso!')
          props.navigation.goBack()
        })
        .catch(() => Alert.alert('Erro', 'Não foi possível realizar o cadastro do livro'))
    }
  }

  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 16 }}>
        <Text>Título: </Text>
        <Input
          onChangeText={(value) => {
            setTitulo(value)
          }}
          value={titulo}
        />

        <Text>Descrição: </Text>
        <Input
          onChangeText={(value) => {
            setDescricao(value)
          }}
          value={descricao}
        />

        <Text>Autor: </Text>
        <Input
          onChangeText={(value) => {
            setAutor(value)
          }}
          value={autor}
        />

        <Text>Editora: </Text>
        <Input
          onChangeText={(value) => {
            setEditora(value)
          }}
          value={editora}
        />

        <Text>Páginas: </Text>
        <Input
          onChangeText={(value) => {
            setPaginas(value)
          }}
          value={paginas}
        />

        <Button
          icon={{
            color: '#FFF',
            name: 'sign-in-alt',
            solid: true,
            type: 'font-awesome-5',
          }}
          title={'Salvar'}
          onPress={salvar}
        />
      </SafeAreaView>
    </ScrollView>
  )
}

export default CadastroLivros