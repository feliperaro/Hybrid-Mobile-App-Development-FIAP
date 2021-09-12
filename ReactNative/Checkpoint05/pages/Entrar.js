import React, { useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text
} from 'react-native';

import { Input } from 'react-native-elements';
import { read, readAll } from '../database/BD';

import Botao from '../componentes/Botao';

const Entrar = (props) => {

	const [usuario, setUsuario] = useState('')
	const [senha, setSenha] = useState('')
	const [loginInvalido, setLoginInvalido] = useState(true)

	const validarInputs = () => {
		if (usuario == '') {
			return alert('Por favor insira o seu email')
		}

		if (senha == '') {
			return alert('Por favor insira a sua senha')
		}

		return true
	}

	const entrar = () => {
		{
			validarInputs() && (
				readAll((error, result) => {
					if (error) {
						return alert('Houve um erro ao consultar o usuário!')
					}

					result.forEach((element) => {
						read(element, (error2, value) => {
							if (error2) {
								alert('Não foi possível encontrar ' + element)
								return
							}

							const jsonUser = JSON.parse(value)
							if (jsonUser.usuario == usuario && jsonUser.senha == senha) {
								setLoginInvalido(false)

								props.navigation.navigate('welcome', {
									email: jsonUser.email,
									usuario: jsonUser.usuario
								})

								return alert(`Bem vindo ${usuario}!`)
							}
						})
					})
				})
			)
		}

		{ loginInvalido === true } {
			return alert('Usuário e/ou Senha inválidos')
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.inputView}>Entrar</Text>

			<Input
				onChangeText={(value) => {
					setUsuario(value)
				}}
				placeholder='Usuário'
				style={styles.textInput}
			/>

			<Input
				onChangeText={(value) => {
					setSenha(value)
				}}
				placeholder='Senha'
				secureTextEntry={true}
				style={styles.textInput}
			/>

			<Botao
				onPress={entrar}
				text={'Entrar'}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	inputView: {
		borderRadius: 30,
		height: 45,
		fontSize: 20,
		fontWeight: 'bold',
		alignItems: "center",
		textAlign: 'center'
	},
	textInput: {
		height: 50,
		flex: 1,
		padding: 10,
	}
})

export default Entrar;