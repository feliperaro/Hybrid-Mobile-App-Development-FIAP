import React, {
  useEffect,
  useState,
} from "react";
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native'

import {
  Button,
  Input
} from 'react-native-elements'

import { login } from "../../services/UsuarioService";

import { readToken, insertToken } from "../../database/DB";

const Login = (props) => {

  const [verificaToken, setVerificaToken] = useState(true)
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    readToken((error, success) => {
      if ( !error && success ) {
        return redirecionar()
      }

      setVerificaToken(false)
    })
  }, [])

  const entrar = () => {
    if (validar()) {
      setLoading(true)

      login(usuario, senha)
        .then((response) => {
          insertToken(response.data.token, (error) => {
            if (error) {
              return Alert.alert('Erro', "Erro ao guardar o token")
            }

            redirecionar()
          })
        })
        .catch(() => Alert.alert('Erro', 'Usuário/senha inválidos!'))
        .finally(() => setLoading(false))
    }
  }

  const redirecionar = () => {
    props.navigation.reset({
      index: 0,
      routes: [{
        name: 'home'
      }]
    })
  }

  const validar = () => {
    if (usuario.trim().length === 0) {
      Alert.alert('Erro', 'Informe o usuário!')
      return false
    }

    if (senha.length === 0) {
      Alert.alert('Erro', 'Informe a senha!')
      return false
    }

    return true
  }

  if ( verificaToken ) {
    return <></>
  }

  return (
    <SafeAreaView style={{ padding: 8 }}>
      <Text>Digite seu usuário:</Text>
      <Input
        leftIcon={{
          name: 'user',
          solid: true,
          type: 'font-awesome-5'
        }}
        onChangeText={(txt) => setUsuario(txt)}
        value={usuario}
      />

      <Text>Digite sua senha:</Text>
      <Input
        leftIcon={{
          name: 'lock',
          solid: true,
          type: 'font-awesome-5'
        }}
        secureTextEntry
        onChangeText={(txt) => setSenha(txt)}
      />

      <Button
        icon={{
          color: '#FFF',
          name: 'sign-in-alt',
          solid: true,
          type: 'font-awesome-5',
        }}
        title={'Entrar'}
        onPress={entrar}
      />

      <ActivityIndicator animating={loading} />
    </SafeAreaView>
  )
}

export default Login