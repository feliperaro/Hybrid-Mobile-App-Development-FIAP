import React, {
  useState,
  useEffect
} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native'

import { read, updateItem } from '../database/BD';

import Botao from '../componentes/Botao';
import { Input } from 'react-native-elements';

const AlterarEmail = (props) => {
  const { usuario } = props.route.params

  const [confirmarNovoEmail, setConfirmarNovoEmail] = useState('')
  const [emailUsuario, setEmailUsuario] = useState('')
  const [novoEmailUsuario, setNovoEmailUsuario] = useState('')

  useEffect(() => {
    read(usuario, (error, success) => {
      if (error || !success) {
        alert('Não foi possível encontrar o email do usuário')
        return
      }

      const obj = JSON.parse(success)
      const email = obj.email

      setEmailUsuario(email)
    })
  }, [])

  const alterar = () => {
    if (validaInputs() === true) {
      const emailNovo = confirmarNovoEmail
      console.log(`emailNovo -> ${emailNovo}`);

      const usuarioEmailNovo = {
        usuario,
        email: emailNovo
      }

      updateItem(usuario, usuarioEmailNovo, (error) => {
        if (error) {
          alert('Não foi possível alterar o email!')
          return
        }
      })

      setEmailUsuario(emailNovo)
      limparCampos()

      alert('Email alterado com sucesso!')
      voltar()
    }
  }

  const limparCampos = () => {
    setNovoEmailUsuario('')
    setConfirmarNovoEmail('')
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email);
  }

  const validaInputs = () => {
    if (novoEmailUsuario.trim().length === 0) {
      alert('Por favor, insira o novo email!')
      return false
    }

    if (!validateEmail(novoEmailUsuario)) {
      alert('Por favor, digite um novo email válido!')
      return false
    }

    if (confirmarNovoEmail.trim().length === 0) {
      alert('Por favor, confirme o novo email!')
      return false
    }

    if (!validateEmail(confirmarNovoEmail)) {
      alert('Por favor, digite um email válido!')
      return false
    }

    if (confirmarNovoEmail.trim().length === 0) {
      alert('Por favor, confirme seu email!')
      return false
    }

    if (novoEmailUsuario !== confirmarNovoEmail) {
      alert('Os emails digitados não conferem!')
      return false
    }

    return true
  }

  const voltar = () => props.navigation.goBack()

  return (
    <ScrollView style={styles.scrollViewStyle}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.textStyle}>{`Seu email atual é ${emailUsuario}`}</Text>

        <Text style={styles.inputView}>{'Preencha os campos com o novo email'}</Text>
        <Input
          keyboardType={'email-address'}
          onChangeText={(value) => {
            setNovoEmailUsuario(value)
          }}
          placeholder='Digite seu novo email'
          style={styles.textInput}
          value={novoEmailUsuario}
        />

        <Input
          keyboardType={'email-address'}
          onChangeText={(value) => {
            setConfirmarNovoEmail(value)
          }}
          placeholder='Confirmar novo email'
          style={styles.textInput}
          value={confirmarNovoEmail}
        />

        <Botao
          onPress={alterar}
          text={'Alterar'}
        />

        <Botao
          onPress={voltar}
          text={'Voltar'}
        />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#e6ffff",
    flex: 1,
    justifyContent: "center",
  },
  inputView: {
    alignItems: "center",
    borderRadius: 30,
    fontSize: 20,
    fontWeight: 'bold',
    height: 45,
    textAlign: 'center'
  },
  scrollViewStyle: {
    backgroundColor: "#e6ffff"
  },
  textInput: {
    flex: 1,
    height: 50,
    padding: 10,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    textAlign: 'center',
  }
})

export default AlterarEmail